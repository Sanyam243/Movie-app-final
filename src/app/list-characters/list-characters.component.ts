import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppServiceService} from '../app-service.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit{
  public collection: any;
constructor(private service:AppServiceService){
}
//connect app service to list characters component and run function getAllCharacter

ngOnInit(){
  this.getDataFromAPI();
  }
  
  getDataFromAPI() {
    
    this.service.getData().subscribe({
      next:(response) => {
        this.collection = response,
        console.log(this.collection)},
        error: (err)=>console.log(err),
      complete:()=>console.log("completed")
    });}

}