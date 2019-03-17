import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket  } from 'ngx-socket-io';
import { Usuario } from 'src/app/models/Usuario';
import { Chat } from 'src/app/models/Chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  
  listaConectados:any[] = [];
  cajaMensaje:string;
  usuario: Usuario;
  mensaje: string;
  chats:Chat[] = [];
  scroll:any;

  constructor(private activatedRoute:ActivatedRoute, private socket: Socket) {
    this.usuario = new Usuario();
    this.activatedRoute.params.subscribe( parametros =>{

      this.usuario.sala = parametros.sala;
      this.usuario.nombre = parametros.nombre;
      this.conectarUsuario(this.usuario );

    })

    // escucha al server cuando devuelva la lista de conectados
    this.socket.fromEvent<any>('Conectados').subscribe(data=>{
      this.listaConectados = data;
    })

    this.socket.fromEvent<any>('Mensaje').subscribe(data=>{
      console.log(data);
      
      this.chats.push( new Chat(data.nombre,data.mensaje,data.fecha,false) )
      console.log(this.chats);
      
    })
    



}

  ngOnInit() {    
    
    this.scroll = document.getElementById('app-mensajes');
  }


  conectarUsuario( usuario: Usuario){
    
      // si el server acepta ejecuta el callback
      this.socket.emit('iniciarChat',usuario, ( resp )=>{
          this.listaConectados = resp;
      })
  
  
  // escuchar
  this.socket.on('disconnect', () => {
  
      console.log('Perdimos conexión con el servidor');
  
  });
}


enviar(){

    this.socket.emit('Mensaje',{mensaje: this.cajaMensaje},(data)=>{
        this.cajaMensaje = "";
        console.log(this.chats);
        
        this.chats.push( new Chat(data.nombre,data.mensaje,data.fecha,true) )
        
    });


}

}
