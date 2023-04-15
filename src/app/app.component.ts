import { Component, VERSION } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title='Proyecto Flores Ramirez';
  url="https://gaia.inegi.org.mx/wscatgeo/mgee/";
  httpData: any;
  array: any[] =[];

  constructor(private httpclient:HttpClient){
    this.httpclient.get(this.url).subscribe(data =>{
      this.httpData = data
      console.log(this.httpData);
      this.array=this.httpData.datos;
      console.log(this.array);
      console.log("Manuel Alejandro Flores Ramirez");
    })
  }

}
