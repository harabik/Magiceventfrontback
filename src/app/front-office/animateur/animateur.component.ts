import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animateur',
  templateUrl: './animateur.component.html',
  styleUrls: ['./animateur.component.css']
})
export class AnimateurComponent implements OnInit {

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
