import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  public alumnos!: Array<Alumno>;
  public equipos: Array<Array<Alumno>>;
  constructor(private _service: AlumnosService) {
    this.equipos = new Array<Array<Alumno>>();
  }
  ngOnInit(): void {
    const idcurso = 2023;
    this._service.getAlumnos(idcurso).subscribe((dato) => {
      this.alumnos = dato;
      console.log(this.alumnos);

    });
  }

  ejecutarTodo() {
    this.generarEquipos();
    this.asignarAlumnosEquipos();
  }

  generarEquipos(): void {
    var numEquipos = 8;
    for (let i = 0; i < numEquipos; i++) {
      this.equipos.push([]);
    }
  }

  asignarAlumnosEquipos(): void {
    var numEquipos = this.equipos.length;
    console.log(this.equipos);
    

    while (this.alumnos.length != 0) {
      var alumosRestantes = this.alumnos.length;
      var alumnoRandom = parseInt(Math.random() * alumosRestantes + "");
      var equipoAsignado = 0;
      var hayEspacio = false;
      do {
        if (this.equipos[equipoAsignado].length <= 3) {
          hayEspacio = true;
        } else {
          equipoAsignado = parseInt(Math.random() * numEquipos + "");
        }
        if (alumosRestantes === 1) {
          hayEspacio = true;
        }
      } while (hayEspacio===false);
      this.equipos[equipoAsignado].push(this.alumnos[alumnoRandom]);
      this.alumnos.splice(alumnoRandom, 1);
    }
  }
}
