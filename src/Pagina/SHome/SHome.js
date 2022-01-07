/*************************************************
 * nombre:       SHome
 * descripcion:
 *
 * librerias:  libreria extra
 * props:
 * tiempo:       10 min
 *************************************************/
import {useEffect, useState} from "react";
import {Grid, Typography} from "@mui/material";
import {fire} from "../../fire";
import {SALUDOS} from "../../Constantes";
import {SaludoDoc} from "../../Entidades/Saludos";
import CarruselServicios from "./Componentes/Servicios/CarruselServicios";


const SHome = () => {
    const [saludos, setSaludos] = useState([])


    useEffect(() => {
        fire.firestore().collection(SALUDOS).get().then((snap) => {

            snap.forEach((doc) => {
                let sal = new SaludoDoc(doc);
                setSaludos((array) => array.concat(sal));
            })

        }).catch((err) => {
            alert(err)
        })

    }, [])

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >


            {saludos.map((item, index) => {
                return (
                    <Grid item container sx={{justifyContent: "center"}} key={index}>
                        <Typography sx={{fontWeight: 600, fontSize: 22}}>{item.saludo}</Typography>
                    </Grid>
                )
            })}


            <CarruselServicios/>


        </Grid>
    );
};
export default SHome;

