/*************************************************
 * nombre:       Usuario
 * descripcion:  persona que entra al dashboard
 *
 * librerias:
 * props:
 * tiempo        10 min
 *************************************************/
export function SaludoDoc(doc){

    let sal = {};
    sal.id = doc.id; //string
    sal.saludo = doc.data().saludo; //string

    return sal;

}