import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  public alumnos!: Alumno;
  public equipos!: Array<Array<Alumno>>;
  constructor(private _service: AlumnosService) {

  }
  ngOnInit(): void {
    const idcurso = 2023;
    this._service.getAlumnos(idcurso).subscribe((dato) => {
      this.alumnos = dato;
    });
  }

  generarEquipos(): void {
    var numEquipos = 8;
    for (let i = 0; i < numEquipos; i++) {
      var segRandom=Math.floor(Math.random()*4)
      this.equipos.push([]);
    }
  }

  asignarAlumnosEquipos(): void {

  }
}
