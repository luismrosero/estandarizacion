/*******************************************************
 * Nombre:    ItemMenu
 * Resumen:   Items de menu lateral, contiene un menu de
 *            iconos traidos desde componentes contantes
 * Props:
 *  credencial -> String de nombre de credencial a mostrar
 * Librerias:
 * Autor:     Luis Rosero
 * Tiempo :   10 min
 ********************************************************/
import {React, useEffect, useState} from 'react';
import {Grid, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {IconManualGearbox, IconReceipt2, IconReportMoney, IconUserCircle, IconUsers} from "@tabler/icons";
import {PRIMARIO} from "../../Colores";


const useStyles = makeStyles((theme) => ({
    boton: {
        transition: 'all .2s ease-in-out',
        '&:hover': {
            background: PRIMARIO,
            boxShadow: 6,
            color: "#fff",
            "& $icon": {
                color: "#fff"
            }
        }

        ,
    },
    icon: {
        color: "#fff",
    },

    iconActivo: {
        color: "#fff",
    },

    link: {
        textDecoration: "none"
    }
}));
const ItemMenu = (props) => {
    const {credencial, index, escogido, setEscogido, link} = props;
    const [activo, setActivo] = useState(false);

    const classes = useStyles();
    useEffect(() => {
        if (index === escogido) {
            setActivo(true);
        } else {
            setActivo(false);
        }
    }, [escogido]);


    const getIcono = () => {

        let stroke = 1.5;
        let size = '1.5rem';

        switch (credencial) {
            case 'Clientes':
                return <IconUsers stroke={stroke} size={size}
                                  className={activo ? classes.iconActivo : classes.icon}/>;
            case 'Cobros':
                return <IconReportMoney stroke={stroke} size={size}
                                        className={activo ? classes.iconActivo : classes.icon}/>
            case 'Planes':
                return <IconManualGearbox stroke={stroke} size={size}
                                          className={activo ? classes.iconActivo : classes.icon}/>;

            case 'Usuarios':
                return (
                    <IconUserCircle stroke={stroke} size={size}
                                    className={activo ? classes.iconActivo : classes.icon}

                    />)


            case 'Recibos':
                return (
                    <IconReceipt2 stroke={stroke} size={size}
                                    className={activo ? classes.iconActivo : classes.icon}

                    />)

        }
    };


    return (
        <Link to={link} className={classes.link}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{
                    cursor: 'pointer',
                    paddingY: 1,
                    paddingX: 2,
                    paddingTop: 1,
                    borderRadius: 2,
                    width: 200,
                    backgroundColor: activo ? PRIMARIO : 'none',
                }}
                className={classes.boton}
                onClick={() => setEscogido(index)}
            >
                <Grid item>
                    {getIcono()}

                </Grid>

                <Grid item sx={{marginLeft: 2}}>
                    <Typography
                        sx={{
                            marginLeft: 0,
                            fontWeight: 600,
                            fontSize: 16
                        }}
                        className={activo ? classes.iconActivo : classes.icon}
                    >
                        {credencial}
                    </Typography>
                </Grid>
            </Grid>

        </Link>
    );
};

export default ItemMenu;
