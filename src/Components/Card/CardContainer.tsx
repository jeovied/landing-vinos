import { Container } from "@mui/material";
import { CardItem } from "./components/CardItem";
import { cards } from "./data";

interface Card {
    id: string;
    img: string;
    title: string;
    description: string;
}

export const CardContainer = () => {
    const styleContainer = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "32px",
        mt: 8,
        mb: 8,
    };

    return (
        <Container sx={styleContainer}>
            {cards.map((card: Card) => (
                <CardItem key={card.img} card={card} />
            ))}
        </Container>
    );
};
