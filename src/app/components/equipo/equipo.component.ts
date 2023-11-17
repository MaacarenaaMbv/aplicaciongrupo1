import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipos.service';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno } from 'src/app/models/Alumno';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  public alumnos!: Array<Alumno>;
  
  /*alumnos: string[] = [
    'Alumno1', 'Alumno2', 'Alumno3', 'Alumno4', 'Alumno5', 'Alumno6', 'Alumno7', 'Alumno8', 'Alumno9', 'Alumno10', 'Alumno11', 'Alumno12', 'Alumno13', 'Alumno14', 'Alumno15', 'Alumno16', 'Alumno17', 'Alumno18', 'Alumno19', 'Alumno20', 'Alumno21', 'Alumno22', 'Alumno23', 'Alumno24', 'Alumno25' // ... agregar los demás alumnos
  ];*/
  equipos!: Alumno[][];

  constructor(private _equipoService: EquipoService, private _alumnoService: AlumnosService) { }

  ngOnInit(): void {
    const idcurso = 2023;
    this._alumnoService.getAlumnos(idcurso).subscribe((dato) => {
      this.alumnos = dato;
    });
    console.log(this.equipos)
    this.equipos = this._equipoService.asignarEquipos(this.alumnos);
  }
}
