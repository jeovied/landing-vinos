import WineBarTwoToneIcon from "@mui/icons-material/WineBarTwoTone";
import { Box, Typography, Container, styled } from "@mui/material";
import bannerVideo from "../../assets/banner-video.mp4";

const Header = () => {
    const Video = styled("video")({
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center",
    });

    return (
        <Container disableGutters maxWidth={false}>
            <Box
                sx={{
                    backgroundColor: "black",
                    display: "flex",
                    width: "100%",
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <WineBarTwoToneIcon htmlColor="white" />
                <Typography
                    fontWeight="700"
                    textTransform="uppercase"
                    color="white"
                >
                    Landing Vinos
                </Typography>
            </Box>
            <Box component="main">
                <Video src={bannerVideo} autoPlay loop />
            </Box>
        </Container>
    );
};

export default Header;
