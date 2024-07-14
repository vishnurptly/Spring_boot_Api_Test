import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableService } from '../table.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customerlist',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './customerlist.component.html',
  styleUrl: './customerlist.component.css'
})
export class CustomerlistComponent {


  constructor(private dataService:TableService){}

  ngOnInit(): void {
    
    // this.companyList();

    
  }
 

  userForm: FormGroup=new FormGroup({
    id: new FormControl('',),
    name: new FormControl('',[Validators.required, Validators.minLength(8)]),
    
    location: new FormControl('',[Validators.required]),
   
  });
 
  checkvalue(){
   
      this.dataService.getbyList(this.userForm.value.name,this.userForm.value.location).subscribe((res:any)=>{
       
        this.detailsTable=res;
         console.log(res);
         alert("list ok")
     

  })
    }
  
    detailsTable :any[]=[];
    
   
    // companyList(){
     
    //   this.dataService.getbyList().subscribe((res:any)=>{
    //     this.detailsTable=res;
         
         
    //   })
   
    // }
  
    deleteitem(name:String ,id:number){
  // alert("are you delete this item")
      this.dataService.deleteTab(name,id).subscribe(()=>{
        console.log("deleted Successfuly");
        console.log(name,id);
        // this.companyList();
        
      });
      
    }

    checkgetbyid(){
      alert("getbyid ok")
      this.dataService.getByidTab(this.userForm.value.name,this.userForm.value.id).subscribe((res:any)=>{
        this.detailsTable=res;
        console.log(res);
       
      })
    }

   
  
    
    update(){
      alert('update not allowd')
    
     
      }
}
