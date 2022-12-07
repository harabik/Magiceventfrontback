import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traiteur',
  templateUrl: './traiteur.component.html',
  styleUrls: ['./traiteur.component.css']
})
export class TraiteurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url:any;

  onSelect(event:any) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    } else {
      window.alert('Please select correct image format');
    }
  }
}
