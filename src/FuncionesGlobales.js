/*******************************************************
 * Nombre:      Funciones Globales
 * Descripcion:
 *
 * Props:
 * Librerias:
 * Tiempo :      10 min
 ********************************************************/
import {fire} from "./fire";
import {OBRAS, CONSECUTIVOS, RECIBOS} from "./Constantes";

export const obtenerID = (email) => {
    let sinpunto = email.replaceAll(".", "-");
    let sinArroba = sinpunto.replaceAll("@", "_");
    return sinArroba;
}

export const darFormatoMoneda = (number) => {


    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,

    });

    return formatter.format(number).replace(/^(\D+)/, '$ ')
}

export const sumarConsecutivo = (num) => {

    fire.firestore().collection(CONSECUTIVOS).doc(OBRAS).update({num: num});
}

export const sumarConsecutivoRecibo = (num) => {

    fire.firestore().collection(CONSECUTIVOS).doc(RECIBOS).update({num: num});
}



export const getFecha = (date) => {



    try {
        let dia = date.getDate();
        let mes = getMes(date.getMonth());
        let ano = date.getFullYear();
        return dia + " " + mes + " " + ano;
    }catch (e){
        let dia = date.toDate().getDate();
        let mes = getMes(date.toDate().getMonth());
        let ano = date.toDate().getFullYear();
        return dia + " " + mes + " " + ano;
    }


}

export const getHora = (date) => {



    try {
        let hora = date.getHours();
        let minutos = date.getMinutes();

        return hora + ":" + minutos;
    }catch (e){
        let hora = date.toDate().getHours();
        let minutos = date.toDate().getMinutes();

        return hora + ":" + minutos;
    }


}

export const getFechaSencillo = (date) => {



    try {
        let dia = date.getDate();
        let mes = getMesPeq(date.getMonth());
        let ano = date.getFullYear();
        return dia + " " + mes + " " + ano;
    }catch (e){
        let dia = date.toDate().getDate();
        let mes = getMesPeq(date.toDate().getMonth());
        let ano = date.toDate().getFullYear();
        return dia + " " + mes + " " + ano;
    }


}

export const getMes = (num) => {
    switch (num) {
        case 0:
            return "Enero";
        case 1:
            return "Febrero";
        case 2:
            return "Marzo";
        case 3:
            return "Abril";
        case 4:
            return "Mayo";
        case 5:
            return "Junio";
        case 6:
            return "Julio";
        case 7:
            return "Agosto";
        case 8:
            return "Septiembre";
        case 9:
            return "Octubre";
        case 10:
            return "Noviembre";
        case 11:
            return "Diciembre";


    }
}


export const getMesPeq = (num) => {
    switch (num) {
        case 0:
            return "Ene";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Abr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Ago";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dic";


    }
}