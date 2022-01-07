/*************************************************
 * nombre:       App
 * descripcion:
 *
 * librerias:  mui.com, tabler icons, firebase,
 *             react router dom, react-helmet,
 * react-intersection-observer, framer-motion,
 * (react-elastic-carousel, styled-components)
 * props:
 * tiempo        10 min
 *************************************************/

/**************************************************
 * Package.json
 *  "react-scripts": "4.0.3"
 *
 * Html
 *  lang="es"
 *  sobre escribimos los logos y favicon
 *  para las fuentes usamos <scrips> de google fonts
 *  agregamos <meta property="og:title"....
 *
 * Version de uso para firebase (WEB 8)
 *
 * La carpeta del compilado se llama build
 *
 * Archivos Raiz
 *  Tema.js
 *  Constantes.js
 *  Colores.js
 *  FuncionesGlobales.js
 *  fire.js ( Archivo comfig firebase )
 *
 * El set del Theme (mui) se hace en index.js
 *
 * Las modificaciones css de mui globales se hacen en Tema.js
 *
 * Carpetas Raiz
 *  Dashboard
 *  Login
 *  Pagina
 *  Recursos
 *  Animaciones
 *  Entidades
 *
 ***************************************************/

import {createContext,  useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import {Helmet} from "react-helmet";
import {fire} from "./fire";
import {obtenerID} from "./FuncionesGlobales";
import {USUARIOS} from "./Constantes";
import {UsuarioDoc} from "./Entidades/Usuario";
import Dashboard from "./Dashboard/Dashboard";
import Pagina from "./Pagina/Pagina";

export const CRoot = createContext();

function App() {
    const [usuario, setUsuario] = useState('');

    useEffect(() => {

        fire.auth().onAuthStateChanged((doc) => {
            if (doc !== null && doc.email !== null) {
                let id = obtenerID(doc.email);
                fire.firestore().collection(USUARIOS).doc(id).get().then((doc) => {
                    let usu = new UsuarioDoc(doc);
                    if (usu.activo === true){
                        setUsuario(usu)
                    }else{
                        setUsuario('')
                        alert("Usuario Inactivo")
                        fire.auth().signOut()
                    }


                }).catch((err) => {
                    alert(err)
                })
            }
        })

    }, [])


    return (

        <>
            <Helmet>
                <title>{"Estandarizacion"} </title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Helmet>


            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"


            >
                <CRoot.Provider value={{usuario: usuario, setUsuario: setUsuario}}>

                    {usuario !== '' ? <Dashboard/> : <Pagina/>}

                </CRoot.Provider>



            </Grid>
        </>
    );
}

export default App;


