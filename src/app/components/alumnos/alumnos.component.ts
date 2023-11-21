import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, delay, interval, of, takeWhile, tap } from 'rxjs';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  public alumnos!: Array<Alumno>;
  public equipos!: Array<Array<Alumno>>;
  private subscripcion: Subscription;

  constructor(private _service: AlumnosService) {
    this.equipos = new Array<Array<Alumno>>();
    this.subscripcion = new Subscription();
  }
  ngOnInit(): void {

  }
  cargarAlumnos(): void {
    const idcurso = 2023;
    this._service.getAlumnos(idcurso).subscribe((dato) => {
      this.alumnos = dato;
      this.alumnos.splice(25);
    });
  }

  ejecutarTodo() {
    this.subscripcion.unsubscribe();
    this.subscripcion = this.asignarAlumnosEquipos();
  }

  generarEquipos(): void {
    var numEquipos = 8;
    for (let i = 0; i < numEquipos; i++) {
      this.equipos.push([]);
    }
  }

  asignarAlumnosEquipos(): Subscription {
    this.cargarAlumnos();
    this.equipos = [];
    this.generarEquipos();
    let numEquipos = this.equipos.length;
    return interval(1000).pipe(takeWhile(() => this.alumnos.length != 0)).subscribe(() => {
      let alumosRestantes = this.alumnos.length;
      let alumnoRandom = parseInt(Math.random() * alumosRestantes + "");
      let equipoAsignado = parseInt(Math.random() * numEquipos + "");
      let hayEspacio = false;

      while (hayEspacio === false) {
        if (this.equipos[equipoAsignado].length < 3) {
          hayEspacio = true;
        } else {
          equipoAsignado = parseInt(Math.random() * numEquipos + "");
        }
        if (alumosRestantes === 1) {
          hayEspacio = true;
        }
      }
      this.equipos[equipoAsignado].push(this.alumnos[alumnoRandom]);
      this.alumnos.splice(alumnoRandom, 1);
    });
  }
}
