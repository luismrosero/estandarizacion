/*******************************************************
 * Nombre:    MenuLateral
 * Resumen:   Menu en lista que muestra las secciones
 *            del sistema
 * Props:
 *  credenciales -> array de string que muestran las
 *                  credenciales y secciones => usuario
 *  constructora -> String de nombre de contructora
 *                  => usuario
 * Autor:     Luis Rosero
 * Tiempo :   50 min
 ********************************************************/
import {React, useContext, useState} from 'react';
import {ButtonBase, Grid} from '@mui/material';
import {CDashboard} from '../Dashboard';
import logo from '../../Recursos/logoblanco.svg'
import {IconChevronsLeft, IconX} from "@tabler/icons";
import ItemMenu from "./ItemMenu";

const MenuLateral = () => {
    const cData = useContext(CDashboard);
    const [escogido, setEscogido] = useState(0);
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{paddingY: 0, padding: 3}}
        >

            <Grid item container sx={{justifyContent:"flex-end",}} >
                <ButtonBase onClick={() => cData.cerrarDrawer()} >

                    <IconChevronsLeft color={"#fff"} />
                </ButtonBase>

            </Grid>

            <Grid
                item
                container
                sx={{
                    justifyContent: 'center',
                    marginTop: 4,
                    marginBottom: 4,
                }}
            >
                <img src={logo} style={{width: "100%"}} alt={"logo"} />
            </Grid>

            {cData.usuario.credenciales.map((credencial, index) => {
                return (
                    <Grid item container sx={{marginTop: 1}} key={index}>
                        <ItemMenu
                            credencial={credencial}
                            index={index}
                            escogido={escogido}
                            setEscogido={setEscogido}
                            link={"/" + credencial.replaceAll(" ","")}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default MenuLateral;
