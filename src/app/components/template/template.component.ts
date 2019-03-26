import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "", 
    sexo: "Mujer", 
    acepta: false
  }

  paises = [{
    codigo: "COL",
    nombre: "Colombia"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }
];

  sexos:string[] = ["Mujer","Hombre","Otro"]

  constructor() { }

  ngOnInit() {
  }

  guardar( forma:NgForm ){
    console.log(" NgForm: ", forma );
    console.log(" Valor Formulario: ", forma.value );
    console.log(" Usuario: ", this.usuario  );
    
    
    
    
  }
}
