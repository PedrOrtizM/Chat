export class Chat{

    nombre: string;
    mensaje: string;
    fecha: Date;
    enviado: boolean;

    constructor(nombre:string,mensaje:string,fecha:Date,enviado){
        this.nombre = nombre;
        this.mensaje = mensaje;
        this.fecha = fecha;
        this.enviado = enviado;

    }
}