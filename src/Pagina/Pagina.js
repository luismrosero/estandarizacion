/*************************************************
 * nombre:       Pagina
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {React} from "react";
import {Grid, Typography} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SHome from "./SHome/SHome";

const Pagina = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >

            <Router>

                <Typography>Appbar</Typography>

                <Routes>


                    <Route exact path="/" element={<SHome/>}>

                    </Route>

                    <Route exact path="/Home" element={<SHome/>}>

                    </Route>


                </Routes>

                <Typography>Footer</Typography>

            </Router>


        </Grid>
    );
};
export default Pagina;
