import styled from '@emotion/styled';
import { Box, Card, Typography } from '@mui/material';

interface props {
  card: {
    img: string;
    description: string;
  }
}

export const CardItem = ({ card }: props) => {

  const Img = styled("img")({
    width: '100%',
    height: 100,
    objectFit: 'contain',
    objectPosition: 'center'
  });

  return (
    <>
      <Card sx={{ maxWidth: '30vw', padding: '16px' }}>

        <Img src={card.img} />

        <Box >
          <Typography>{card.description}</Typography>
        </Box>

      </Card >
    </>
  )
};

