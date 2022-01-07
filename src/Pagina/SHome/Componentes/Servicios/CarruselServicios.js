/*******************************************************
 * Nombre:        CarruselServicios
 * Descripcion:   CarruselServicios
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/
import {React, useRef, useState} from 'react';
import {Button, ButtonBase, Grid, Typography, useMediaQuery} from '@mui/material';
import Carousel from 'react-elastic-carousel';
import {
    IconArrowLeft,
    IconChevronLeft,
    IconChevronRight,
} from '@tabler/icons';

import Servicio from "./Componentes/Servicio";
import {theme} from "../../../../Tema";


const CarruselServicios = () => {

    const ref = useRef();
    const masSM = useMediaQuery(theme.breakpoints.up("md"));


    const siguiente = () => {
        ref.current.slideNext();
    };
    const atras = () => {
        ref.current.slidePrev();
    };

    return (


        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
                paddingX: masSM ? 6 : 0,
                paddingY: masSM ? 10 : 4,
                backgroundSize: 'cover',

            }}
        >

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{maxWidth: "1300px"}}
            >

                <Grid item container lg={12} sx={{paddingX: masSM ? 20 : 2, justifyContent: "flex-end"}}>

                        <Typography
                            sx={{
                                fontSize: masSM ? 30 : 20,
                                fontWeight: 700,
                                lineHeight: masSM ? 1.2 : 1.5,
                                color: "#fff",
                                textAlign: "end"
                            }}
                        >
                            Servicios a la medida <br/>
                            Soluciones pensadas en ti <br/>
                            Servicios adaptados a tu marca
                        </Typography>

                </Grid>

                <Grid item container sx={{marginTop: 0}}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {masSM && <Grid item>
                            <ButtonBase
                                sx={{padding: 1, borderRadius: 8}}
                                onClick={() => atras()}
                            >
                                <IconChevronLeft  size={'3rem'} stroke={1}/>
                            </ButtonBase>
                        </Grid>}


                        <Grid item container lg={9} xs={12} sx={{paddingX: masSM ? 0 : 3}}>
                            <Carousel
                                ref={ref}
                                itemsToScroll={1}
                                itemsToShow={1}
                                pagination={false}
                                showArrows={false}
                            >
                                {servi.map((servicio) => {
                                    return (
                                        <Servicio servicio={servicio}/>
                                    )
                                })}


                            </Carousel>
                        </Grid>

                        {masSM && <Grid item>
                            <ButtonBase
                                sx={{padding: 1, borderRadius: 8}}
                                onClick={() => siguiente()}
                            >
                                <IconChevronRight
                                    size={'3rem'}
                                    stroke={1}
                                />
                            </ButtonBase>
                        </Grid>}


                    </Grid>

                    {!masSM && <Grid item container sx={{marginTop: 3,}}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >


                            <Grid item>
                                <Grid item>
                                    <ButtonBase
                                        sx={{padding: 1, borderRadius: 8}}
                                        onClick={() => atras()}
                                    >
                                        <IconChevronLeft color={'#fff'} size={'3rem'} stroke={1}/>
                                    </ButtonBase>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid item>
                                    <ButtonBase
                                        sx={{padding: 1, borderRadius: 8}}
                                        onClick={() => siguiente()}
                                    >
                                        <IconChevronRight
                                            color={'#fff'}
                                            size={'3rem'}
                                            stroke={1}
                                        />
                                    </ButtonBase>
                                </Grid>
                            </Grid>

                        </Grid>


                    </Grid>}

                </Grid>
            </Grid>
        </Grid>
    );
};

export default CarruselServicios;

const servi = [
    {
        nombre: 'Branding',
        contenido:
            'Más que un logo, contamos tu historia, tus valores, tu filosofía. Creamos una marca fuerte que hable por sí misma.',
        caso: "Xantico Hostal"
    },
    {
        nombre: 'Contenido y estrategia digital',
        contenido:
            'Las redes sociales son una vitrina de visibilización muy potente, te ayudamos a transmitir y comunicar de manera genuina para seas irresistible en el mercado.',
        caso: "Quesuditas"
    },

];
