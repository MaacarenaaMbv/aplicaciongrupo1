import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  asignarEquipos(alumnos: Alumno[]): Alumno[][] {
    // Mezclar el array de alumnos de manera aleatoria
    var alumnosAleatorios = this.shuffleArray(alumnos);
    
    // Dividir a los alumnos en equipos de 3
    var equipos: Alumno[][] = [];
    while (alumnosAleatorios.length > 3) {
      equipos.push(alumnosAleatorios.splice(0, 3));
    }

    // Agregar a 4 alumnos en un equipo al azar
    var equipoConCuatro = alumnosAleatorios.splice(0, 4);
    equipos[Math.floor(Math.random() * equipos.length)].push(...equipoConCuatro);

    return equipos;
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
