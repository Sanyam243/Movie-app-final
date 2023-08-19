import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppServiceService} from '../app-service.service';
import {  FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Character } from './character.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert:boolean=false;
  constructor(private service:AppServiceService, private router:ActivatedRoute){
  }

  createCharacter =new FormGroup({
name : new FormControl(''),
age: new FormControl(''),
occupation: new FormControl(''),
gender : new FormControl('')



  }
    
    )
  ngOnInit(){
    if (this.router.snapshot.params['id']) {
      console.log(this.router.snapshot.params['id']);
      // You can perform further actions here using the id parameter
      this.service.getCurrentData(this.router.snapshot.params['id']).subscribe((result)=>{
        console.log(result);
        
          // 
          
          
      });


      
        

    } else {
      console.log("No id parameter found.");
    }
}
  
closeAlert(){
  this.alert=false;
}

update(){
  this.service.updateCharacter(this.router.snapshot.params['id'],this.createCharacter.value).subscribe((result)=>{  
    console.log(result,"data updated successfully");
  });
}
}
