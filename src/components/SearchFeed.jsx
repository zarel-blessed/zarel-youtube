import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log("error: ", err));
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        fontSize="28px"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search term for:&nbsp;
        <span
          style={{
            color: "#4128af",
          }}
        >
          {searchTerm}
        </span>
        &nbsp;videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
