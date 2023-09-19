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
                    height: "200px",
                }}
            >
                <Typography fontWeight="700" color="white" fontSize="15px">
                    JyA Development
                </Typography>
            </Box>
        </>
    );
};

export default Footer;
