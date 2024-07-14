import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  apiurl="http://localhost:8080/customer/api";

  constructor(private http:HttpClient) { }

 

  getTab():Observable<any>{
    return this.http.get("http://localhost:8080/customer/api/allList");
  }


  deleteTab(name:String , id :number):Observable<any>{
    const url = `${this.apiurl}/delete/${name}/${id}`;
    return this.http.delete(url, { responseType: 'text' });
    }

    
    getByidTab(name:String ,id:String){
      return this.http.get(this.apiurl+'/getbyid/'+name+"/"+id);
    }

    
    // getbyList(name:String,location:String){
    //   return this.http.get(this.apiurl+'list/'+name+'/'+location)
    // }
    getbyList(name:String,location:String){
      return this.http.get(this.apiurl+'/list/'+name+'/'+location);
    }


    addvalue(item:any):Observable<any>{
     
      
        return this.http.post("http://localhost:8080/customer/api/names/"+item.name,item);
       
    }

    updatedvalue(userForm:any):Observable<any>{
      return this.http.put.arguments(this.apiurl+'/put/'+userForm.name+'/'+userForm.id+'/',userForm)
    }

}
