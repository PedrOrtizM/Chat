export class Chat{

    name: string;
    message: string;
    date: Date;
    enviado: boolean;

    constructor(nombre:string,mensaje:string,fecha:Date,enviado){
        this.name = nombre;
        this.message = mensaje;
        this.date = fecha;
        this.enviado = enviado;

    }
}