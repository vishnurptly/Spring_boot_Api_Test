import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { TableService } from '../table.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {

  constructor(private dataService:TableService){}

  ngOnInit(): void {
    
    this.companyList();

    
  }
 

  userForm: FormGroup=new FormGroup({
    // id:new FormControl(),
    name: new FormControl('',[Validators.required, Validators.minLength(8)]),
    email: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
   
  });
 
  addvalue(){
 
 
 this.dataService.addvalue(this.userForm.value).subscribe(response => {
   console.log('Response from server:', response);
   
                   console.log(response);
 })
 this.companyList();
 

  }

 

  
    detailsTable :any[]=[];
    
   
    companyList(){
     
      this.dataService.getTab().subscribe((res:any)=>{
        this.detailsTable=res;
        // console.log(res);
      })
   
    }
  
    deleteitem(name:String ,id:number){
  // alert("are you delete this item")
      this.dataService.deleteTab(name,id).subscribe(()=>{
        console.log("deleted Successfuly");
        console.log(name,id);
        this.companyList();
        
      });
      
    }
    updated(){
      alert(' updated process ')
      this.dataService.updatedvalue(this.userForm.value).subscribe((res=>{

      }))
      alert(' updated successFully ')
      
    }
   
  
    
    update(item:any){
     

      this.dataService.updatedvalue(item).subscribe((res:any)=>{
        this.userForm.patchValue({
          id:item.id,
         name:item.name,
         email:item.email,
         address:item.address,
         location:item.location
   
        });
   
         console.log(res);
       });

    
     
      }
}
