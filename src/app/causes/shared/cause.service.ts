import { Injectable } from '@angular/core';
import { ICause } from './cause.model';

@Injectable()
export class CauseService {
    getCauses(): ICause[] {
          return [
                { id: 11, name: 'Cunas para niños sin recursos Llucmajor', remaining: -130, total: 500, segment: "children", isPrivate: false },
                { id: 14, name: 'Arreglo dental para un necesitado en Santa Ponsa.', remaining: -110, total: 650, segment: "adults", isPrivate: true  },
                { id: 15, name: 'Puertas para el refugio de animales Llucmajor', remaining: -65, total: 650, segment: "seniors", isPrivate: false  },
                { id: 13, name: 'Material para limpiar la playa de San Telmo', remaining: -55, total: 1500, segment: "nature", isPrivate: false  },
                { id: 12, name: 'Fiesta para los vecinos de Pedro Garau', remaining: -40, total: 1000, segment: "adults", isPrivate: true  },
                { id: 17, name: 'Nuevo techo para la protectora Inca', remaining: -80, total: 650, segment: "animals", isPrivate: false  },
                { id: 16, name: 'Limpieza sendero forestal Serra Tramuntana', remaining: -230, total: 650, segment: "nature", isPrivate: false  },
                { id: 18, name: 'Fiesta para los vecinos de El Molinar', remaining: -180, total: 1000, segment: "adults", isPrivate: true  },
          ]
    }
}