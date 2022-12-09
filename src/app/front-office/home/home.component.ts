


import { Component, OnInit } from '@angular/core';
import { List_userService } from '../../services/list_user/list_user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   animateurs: any;




  constructor( private listuserserve : List_userService ,
              private router:Router
  ) { }

  ngOnInit() {


    this.listuserserve.getlist_animateurs().subscribe((animate : any ) => {
      this.animateurs = animate;
      console.log(this.animateurs);

    });
  }

  selectProduct(id: Number) {
    this.listuserserve.getanimateurById(id).subscribe((animate : any ) => {
      this.animateurs = animate;
      console.log(this.animateurs);

    });
  }

  AddProduct(ID_PRODUIT: any) {

  }
}
