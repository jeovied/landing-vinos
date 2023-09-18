import { CardList } from "./Components/CardList";
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
            <CardList />
            <Footer />
        </Container>
    );
}

export default App;
