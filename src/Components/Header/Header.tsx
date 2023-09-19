import WineBarTwoToneIcon from "@mui/icons-material/WineBarTwoTone";
import { Box, Typography, Container, styled } from "@mui/material";
import bannerVideo from "../../assets/banner-video.mp4";

const Header = () => {
    const Video = styled("video")({
        backgroundColor: "black",
        width: "100%",
        maxHeight: "400px",
        objectFit: "cover",
        objectPosition: "50% 80%",
    });

    return (
        <Container disableGutters maxWidth={false}>
            <Box
                sx={{
                    backgroundColor: "black",
                    position: "absolute",
                    opacity: "0.85",
                    display: "flex",
                    width: "100%",
                    height: "8%",
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
                <Video src={bannerVideo} autoPlay muted playsInline loop />
            </Box>
        </Container>
    );
};

export default Header;
