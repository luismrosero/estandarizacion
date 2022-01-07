/*******************************************************
 * Nombre:        Servicio
 * Descripcion:   Subcomponete que muesta un servicio
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/
import {React} from 'react';
import {Button, Grid, Typography, useMediaQuery} from '@mui/material';
import {IconArrowRight} from '@tabler/icons';

import {Link} from "react-router-dom";
import {theme} from "../../../../../Tema";


const Servicio = (props) => {
    const {servicio} = props;
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{marginTop: masSM ? 6 : 0, padding: masSM ? 4 : 0}}
        >


            <Grid item container sx={{alignItems: "center", minHeight: 100}}>
                <Typography
                    sx={{fontSize: masSM ? 30 : 24, fontWeight: 600, marginTop: 2, color: "#fff", lineHeight: 1}}>
                    {servicio.nombre}
                </Typography>
            </Grid>

            <Grid item container sx={{alignItems: "center", minHeight: masSM ? 160 : 120}}>
                <Typography sx={{
                    fontSize: masSM ? 20 : 18,
                    marginTop: masSM ? 2 : 0,

                    fontWeight: 400,
                    textAlign: "justify"
                }}>
                    {servicio.contenido}
                </Typography>
            </Grid>

            <Grid item container sx={{marginTop: 2}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{marginTop: 2}}
                >
                    <Typography sx={{fontSize: 16, fontWeight: 700}}>
                        Caso {servicio.caso}
                    </Typography>
                    <IconArrowRight
                    />
                </Grid>
            </Grid>

            <Grid item container sx={{marginTop: 4}}>
                <Link to={"/servicio/" + servicio.id} style={{textDecoration: "none"}}>


                    <Button variant={"contained"} color={"secondary"} size={"small"}>ver mas</Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Servicio;
