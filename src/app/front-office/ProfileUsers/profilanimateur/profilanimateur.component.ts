import { Component, OnInit } from '@angular/core';
import {List_userService} from "../../../services/list_user/list_user";
import {map} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Animateur} from "../../../models/service/animateur";

@Component({
  selector: 'app-profilanimateur',
  templateUrl: './profilanimateur.component.html',
  styleUrls: ['./profilanimateur.component.css']
})
export class ProfilanimateurComponent implements OnInit {
  id : Number ;
animateur : Animateur ;

  constructor(private listuserserve : List_userService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
   /* this.route.paramMap.pipe(
    map((param: ParamMap) => {
      // @ts-ignore
      return param.params.id;
    })
  ).subscribe(id => {
      this.id = id;
      this.listuserserve.getanimateurById(this.id).subscribe(animateurs => {
        this.animateur = animateurs ;
        console.log(" :id  : " + this.id) ;
        console.log("animateur :id " +animateurs) ;
      });
    });
*/

    this.route.paramMap.pipe(
      map((param: ParamMap) => {

        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.listuserserve.getanimateurById(this.id).subscribe((prod) => {
        this.animateur = prod ;

      });
    });


  }

}
