import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.css']
})
export class EspaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  url:any;
  //   onselectfile(event:any){}
  //  if (event.target.files[] ){
  //    var reader= new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //    reader.onload=(event:any)=>{
  //     this.url=event.target.result;
  //   }
  //  }
    
  
  
  
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
