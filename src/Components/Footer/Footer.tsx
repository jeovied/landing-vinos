import { Box, Typography } from "@mui/material";

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
                </Box>
            </Box>
        </>
    );
};

export default Footer;
