import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { AddeventsComponent } from '../addevents/addevents.component';
import {Router} from "@angular/router";



@Component({
  selector: 'app-event-crud',
  templateUrl: './event-crud.component.html',
  styleUrls: ['./event-crud.component.css']
})
export class EventCrudComponent implements OnInit {
  events: any;
  @Input() event:Event ;

  // ['Name','Id', 'Note', 'Asset', 'Date', 'Picture' ,'Descripition']
  displayedColumns: string[] = ['name','id','asset','picture','note','date','descripition','action'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private dialog : MatDialog, private api : EventService, private router:Router,
              private EventService: EventService) {

  }

  ngOnInit() {
    this.EventService.getAllEvent().subscribe((event ) => {
      this.events = event;
      console.log(this.events);


    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //  applyFilter(event: Event) {
  //  const filterValue = (event.name as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //    this.dataSource.paginator.firstPage();
  //   }
  // }

  openDialog() {
    this.dialog.open(AddeventsComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if (val==='save'){
        this.getAllevents();
      }
    })
  }
  getAllevents(){

this.api.getEvent().subscribe({
  next:(res)=> {

      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator =this.paginator;
      this.dataSource.sort = this.sort
  },
  error:(err)=>{
    alert("Error while fetching the Records!!")
  }

  })
  }

  deleteEvent(id:number){
this.api.deleteEvent(id).subscribe({
  next:(res)=>{
    alert("Event Delete Successfully")
    this.getAllevents();
  },
  error:()=>{
    alert ("Error while deleting the event!!")
  }
})
  }
  editEvent( row :any){
    this.dialog.open(AddeventsComponent,{
     width :'30%',
     data :row
    }).afterClosed().subscribe(val=>{
      if (val ==='update'){
        this.getAllevents();
      }
    })
   }


}

