import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-add-employee',
  imports: [MatIconModule,MatCardModule, ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  title = 'Add Employee';
  empForm=new FormGroup({
    id:new FormControl(0),
    name:new FormControl('',Validators.required),
    doj:new FormControl(new Date(),Validators.required),
    role:new FormControl('',Validators.required),
    salary:new FormControl(0,Validators.required),
  })

  saveEmployee(){
    console.log(this.empForm.value);
  }
}
