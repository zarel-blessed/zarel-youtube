import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "colum", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h6" fontWeight="500" p={2}>
              {videoDetail.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
                marginBottom: "25px",
              }}
              px={2}
            >
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "#4128af",
                      ml: "5px",
                    }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()}
                  &nbsp;views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()}
                  &nbsp;likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
