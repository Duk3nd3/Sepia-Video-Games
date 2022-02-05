import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Clicker } from '../Clicker/Clicker';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Boton } from "../Button/Boton";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';



const Img = styled('img')({

    maxWidth: '100%',
    maxHeight: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px #000000',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0px 0px 50px #007A78',
    },

});

export const Item = ( {id, nombre, precio, img, desc } ) => {

    return (

        <Container fixed>
            <Grid marginTop={15} p={4} container justifyContent="center" alignItems="center" spacing={2} columns={12} wrap="nowrap">
                <Grid item xs={8}>
                    <ButtonBase sx={{ maxWidth: 300, maxHeight: 300 }}>
                        <Img alt="Atari" src={img} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={8}>
                    <Typography sx={{ cursor: 'pointer'}}>
                        <Boton>
                            Shipping
                            <AirplanemodeActiveIcon />
                        </Boton>
                        <Boton>
                            I
                            <FavoriteIcon />
                            IT
                        </Boton>
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Grid >
                        <Grid p={2}>
                            <Typography >
                                {nombre}
                            </Typography>
                            <Typography >
                            {precio}
                            </Typography>
                            <Typography >
                                {desc}
                            </Typography>
                            <Typography >
                                {id}
                            </Typography>
                        </Grid>
                    </Grid>
                <Clicker />
                </Grid>
            </Grid>
        </Container>
    )

}