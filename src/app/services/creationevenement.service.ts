import { Injectable } from '@angular/core';
import { createvent } from '../models/devis/createvent';

@Injectable({
  providedIn: 'root'
})
export class CreationevenementService {
  Createvent :createvent[]= [

    {
      id : 1,
      name : "harabi",
      phone : 23146176,
      email : "harabikarim@gmail.com",
      typeevent : "the seminar",
      nbr_invit: 35,
      date_event :"10/10/23",
      id_user:"traiteur",
      creates_at: 20

    }
 
  ];

  constructor() { }

onGet(){
  return this.Createvent;
}
onAdd(createvent: createvent){
  this.Createvent.push(createvent);
}


}
