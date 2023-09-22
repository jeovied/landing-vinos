import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                    width: "100%",
                    height: "150px",
                }}
            >
                <Box>
                    <Typography fontWeight="700" color="white" fontSize="20px">
                        JyA Development
                    </Typography>
                    <Typography
                        fontWeight="700"
                        color="white"
                        fontSize="12px"
                        textAlign="center"
                    >
                        All rights reserved ©
                    </Typography>
                    <Box
                        component="span"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            mt: 0.5,
                        }}
                    >
                        <FacebookIcon
                            htmlColor="white"
                            sx={{ fontSize: "40px", cursor: "pointer" }}
                        />
                        <InstagramIcon
                            htmlColor="white"
                            sx={{ fontSize: "40px", cursor: "pointer" }}
                        />
                        <YouTubeIcon
                            htmlColor="white"
                            sx={{ fontSize: "40px", cursor: "pointer" }}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
