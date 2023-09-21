import { CardContainer } from "./Components/Card/CardContainer";
import { Container } from "@mui/material";
import { Footer, Header } from "./Components";

function App() {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                display: "flex",
                height: "100vh",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Header />
            <CardContainer />
            <Footer />
        </Container>
    );
}

export default App;
