import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppServiceService} from '../app-service.service';
import {  FormGroup,FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Profile} from '../models/Profile';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  alert:boolean=false;
  imageData :string | undefined;
  //profile :Profile | undefined;
  constructor(private service:AppServiceService){
  }

  createCharacter =new FormGroup({
name : new FormControl(''),
age: new FormControl(''),
occupation: new FormControl(''),
gender : new FormControl(''),
image: new FormControl(null),



  }
    
    )
  ngOnInit():void{
    
    
  
  }
  create(){
   console.log(this.createCharacter.value);

   this.service.addCharacter(this.createCharacter.value).subscribe((result)=>{
    this.alert=true;
    this.createCharacter.reset({});
    this.imageData="";
    console.log("result",result);


    
   })
  }
closeAlert(){
  this.alert=false;
}
onFileSelect(event: Event) {
  console.log("Something selected");
  const fileInput = event.target as HTMLInputElement;
  const file = fileInput.files![0];

  if (file) {
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
      

      //this.createCharacter.patchValue({ image: file });
    } else {
      // Handle invalid file type here if needed
      console.log("Invalid file type");
    }
  }
}

onSubmit(){
  console.log("Submitted profile");


}

}