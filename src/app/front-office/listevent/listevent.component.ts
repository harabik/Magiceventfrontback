import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit {

  event:Event[] ;

  dataSource : any;


  eventList:Event[];  

  constructor( private api :EventService) { }
  ngOnInit(): void {
    this.getAllevents();


  }



  

 getAllevents(){
   
  this.api.getEvent().subscribe({
   next:(res)=> {

     this.event=res;
     console.log(this.event);
    //  this.dataSource = new MatTableDataSource(res);
      //  this.dataSource.paginator =this.paginator;
//         this.dataSource.sort = this.sort
//     },
//     error:(err)=>{
//       alert("Error while fetching the Records!!")
//     }
}
    })
    }
  }

 


