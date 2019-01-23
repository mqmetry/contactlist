import { Injectable } from '@angular/core';
import { Country } from './country';
import { State } from './state';


@Injectable()
export class DataService {
  getCountries() {
    return [
     new Country(1, 'Gujarat' ),
     new Country(2, 'Madhya Pradesh' ),
     new Country(3, 'Maharastra' )
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Ahmedabad' ),
     new State(2, 1, 'Rajkot' ),
     new State(3, 1, 'Surendranagar'),
     new State(4, 1, 'Kutch'),
     new State(5, 2, 'Bhopal' ),
     new State(6, 2, 'Indore'),
     new State(7, 2, 'Jabalpur' ),
     new State(8, 3, 'Mumbai' ),
     new State(9, 3, 'Pune' ),
     new State(10, 3, 'Nagpur'),
     new State(11, 1, 'Vadodara'),
    ];
  }
}
