import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((err) => console.log("error: ", err));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((err) => console.log("error: ", err));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "linear-gradient(-20deg, #1b4866 0%, #3e3366 100%)",
            zIndex: 10,
            height: "120px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-140px" />
      </Box>
      <Box display="flex" p={1}>
        <Box
          sx={{
            mr: { sm: "10px" },
          }}
        />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
