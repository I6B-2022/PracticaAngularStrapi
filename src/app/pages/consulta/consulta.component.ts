import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
interface Persona {
  nombres: string;
  apellidopaterno: string;
  apellidomaterno: number;
  fechanacimiento: string;
  sexo: number;

}
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements OnInit {
  nombres: string = "";
  apellidoPaterno: string = "";
  apellidoMaterno: string = "";
  fechanacimiento: string = "";
  sexo: string = "";


  listOfData: Persona[]=[

  ];

  constructor(private http:HttpClient)
  {
  }

  ngOnInit()
  {
    console.log("NG ON INIT")

    const apiURL ='http://localhost:1337/api/curps/2' ;
    this.http.get(apiURL).subscribe((data: any) => {
      console.log(data)
      this.nombres = data.data.attributes.nombre
      this.apellidoPaterno = data.data.attributes.apellidoPaterno
      this.apellidoMaterno = data.data.attributes.apellidoMaterno
      this.fechanacimiento = data.data.attributes.fechaNacimiento
      this.sexo = data.data.attributes.sexo
    });
  }

}
