import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
url="http://localhost:8080/characters/"
  constructor(private http:HttpClient ) { 
   
  }
  getData()
  {
    return this.http.get('/api/characters')
  }

  getAll(){
   console.log("This method works")
   

  }
//create a method to add a new character
addCharacter(data:any){
  return this.http.post(this.url,data);
}

getCurrentData(id :any){
  return this.http.get(`${this.url}/${id}`);
}
updateCharacter(id:any,data:any){
  return this.http.put(`${this.url}/${id}`,data);
}

}
