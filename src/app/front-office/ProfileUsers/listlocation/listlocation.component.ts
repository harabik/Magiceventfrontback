import { Component, OnInit } from '@angular/core';
import {List_userService} from "../../../services/list_user/list_user";

@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.component.html',
  styleUrls: ['./listlocation.component.css']
})
export class ListlocationComponent implements OnInit {
  espaces: any;

  constructor( private listuserserve : List_userService ) { }

  ngOnInit(): void {
    this.listuserserve.getlist_espaces().subscribe((espace : any ) => {
      this.espaces = espace;
      console.log(this.espaces);

    });
  }

  selectProduct(id: number) {

  }
}
