/*******************************************************
 * Nombre:    SeleccionadorTexto
 * Resumen:   Componente de seleccion y agregacion por
 *            medio de un formularios que se maneja
 * con un componente externo sobre un dialog
 *
 * Props:
 *  lista    -> lista de strings para las opciones
 * Librerias:
 * Autor:     Luis Rosero
 * Tiempo :   45 min
 ********************************************************/
import { React, useState, useContext} from 'react';
import {
  Dialog,
  Grow,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ACENTO } from '../../Colores';
import {NUEVO, PROYECTOS} from '../../Constante';
import fire from "../../fire";
import {CDashboard} from "../Dashboard";
import {proyectoDoc} from "../../Entidades/Proyecto";

const useStyles = makeStyles({
  root: { fontSize: 18, borderRadius: 18 },
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
});

const Seleccionador = (props) => {
  const { lista, Formulario, proyecto } = props;
  const [valor, setValor] = useState([]);
  const [open, setOpen] = useState(false);
  const cData = useContext(CDashboard);

  const classes = useStyles();

  const escogido = (val) => {
    if (val !== NUEVO.id) {
      setValor(val);
      fire.firestore().collection(PROYECTOS).where("id","==",val).get().then((snap) =>{
        snap.forEach((doc) =>{
          let pro = new proyectoDoc(doc);
          cData.setProyecto(pro)

        })
      })
    } else {
      abrirFormulario();
    }
  };

  const abrirFormulario = () => {
    setOpen(true);
  };

  const cerrarFormulario = () => {
    setOpen(false);
  };



  return (
    <>
      <TextField
        select
        label={proyecto.nombre}
        value={valor}
        onChange={(e) => escogido(e.target.value)}
        variant="filled"
        fullWidth
        InputProps={{ classes }}
        InputLabelProps={{ style: { fontSize: 18, color: ACENTO + '90' } }}
      >
        {lista.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <Typography sx={{ fontSize: 18 }}>{option.nombre}</Typography>
          </MenuItem>
        ))}
      </TextField>

      <Dialog
        fullScreen
        open={open}
        onClose={cerrarFormulario}
        TransitionComponent={Grow}
      >
        <Formulario cerrar={cerrarFormulario} />
      </Dialog>
    </>
  );
};

export default Seleccionador;
