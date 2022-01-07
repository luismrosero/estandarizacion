/*************************************************
 * nombre:       Usuario
 * descripcion:  persona que entra al dashboard
 *
 * librerias:
 * props:
 * tiempo        10 min
 *************************************************/
export function UsuarioDoc(doc){

    let usu = {};
    usu.id = doc.data().id; //string
    usu.nombre = doc.data().nombre; //string
    usu.credenciales = doc.data().credenciales; //array string
    usu.activo = doc.data().activo;
    return usu;

}