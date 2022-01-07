/*******************************************************
 * Nombre:    AppBarCustom
 * Resumen:   Barra de herramientas creada, maneja la
 *            apertura de menu lateral y salida del
 * sistema
 * Props:
 * Librerias:
 * Autor:     Luis Rosero
 * Tiempo :   45 min
 ********************************************************/
import {React, useContext, useState} from 'react';
import {Avatar, Grid, IconButton, Menu, MenuItem, useMediaQuery} from '@mui/material';
import {IconMenu2} from '@tabler/icons';
import {CDashboard} from '../Dashboard';
import logo from '../../Recursos/logoblanco.svg'
import {fire} from "../../fire";
import {ACENTO} from "../../Colores";
import {theme} from "../../Tema";

const AppBarCustom = (props) => {
    const {alto} = props;
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    const cData = useContext(CDashboard);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const salir = () => {
        fire
            .auth()
            .signOut()
            .then((dox) => {
                cData.setUsuario('')
            });
    };
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{paddingX: 2, boxShadow: 0, height: alto, backgroundColor: ACENTO}}
        >
            <Grid
                item
                lg={3}
                xs={4}

            >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid item >

                        <IconButton onClick={cData.abrir}>
                            <IconMenu2 color={"#fff"} size={"1.5rem"} stroke={2.5}/>
                        </IconButton>
                    </Grid>

                    {masSM && <Grid item sx={{marginLeft: 2, display: cData.openDrawer ? "none" : "block"}}>
                        <img src={logo} style={{width: 110}} alt={"logo"}/>
                    </Grid>}



                </Grid>


            </Grid>


            <Grid item lg={7} xs={4}/>

            <Grid item container lg={2} xs={4} sx={{justifyContent: "flex-end"}}>

                <Avatar src={cData.usuario.img} onClick={handleClick}/>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    <MenuItem onClick={() => salir()}>Salir</MenuItem>
                </Menu>

            </Grid>
        </Grid>
    );
};

export default AppBarCustom;
