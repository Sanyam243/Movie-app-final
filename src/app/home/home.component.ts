import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppServiceService} from '../app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service: AppServiceService){

  }
  ngOnInit(){
  
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
