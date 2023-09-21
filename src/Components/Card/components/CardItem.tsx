import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  card: {
    id: string;
    img: string;
    title: string;
    description: string;
  }
}

export const CardItem = ({ card }: Props) => {

  const imgStyle = {
    objectFit: 'contain',
    objectPosition: 'center'
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>

        <CardActionArea>

          <CardMedia
            component="img"
            height="180"
            sx={imgStyle}
            src={card.img}
            alt={card.description}
          />

          <CardContent>

            <Typography variant='h6' component={'h2'} color={'orange'} sx={{ mb: 2 }}>
              {card.title}
            </Typography>
            <Typography variant='body2'>
              {card.description}
            </Typography>

          </CardContent>

        </CardActionArea>

      </Card >
    </>
  )
};

