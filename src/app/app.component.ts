import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
//import * as $ from "jquery";
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-project';
  public collection: any;
constructor(private service: AppServiceService){

}
ngOnInit(){

}

   



  character={
    "_id": "64d4ec1f70d403940d4a742a",
    "name": "Sanyam",
    "age": 35,
    "photos": [],
    "gender": "male",
    "occupation": "backend developer",
    "relations": [],
    "properties": [],
    "__v": 0
}
  changeImage() {
    const imageElement = document.querySelector(".card-header img") as HTMLImageElement;
    if (imageElement) {
      imageElement.src = "assets/images/devsena.jpg";
    }
  }

  changeImage2() {
    const imageElement = document.querySelector(".card-header img") as HTMLImageElement;
    if (imageElement) {
      imageElement.src = "assets/images/kattapa.jpg";
    }
  }

  changeImage3() {
    const imageElement = document.querySelector(".card-header img") as HTMLImageElement;
    if (imageElement) {
      imageElement.src = "assets/images/amendra_bahubali.jpg";
    }
  }

  changeImage4() {
    const imageElement = document.querySelector(".card-header img") as HTMLImageElement;
    if (imageElement) {
      imageElement.src = "assets/images/bhaladeva.jpg";
    }
  }

  changeImage5() {
    const imageElement = document.querySelector(".card-header img") as HTMLImageElement;
    if (imageElement) {
      imageElement.src = "assets/images/mahendra bahubali.jpg";
    }
  }

  changeImage6() {
    const imageElement = document.querySelector(".card-header img") as HTMLImageElement;
    if (imageElement) {
      imageElement.src = "assets/images/shivgami.avif";
    }
  }

  
}
