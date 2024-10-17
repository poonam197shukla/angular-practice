import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-drive-reactive-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './template-drive-reactive-forms.component.html',
  styleUrl: './template-drive-reactive-forms.component.css'
})
export class TemplateDriveReactiveFormsComponent implements OnInit {
  public templateForm:FormGroup | undefined;
  public reactiveForm: FormGroup | undefined;

  public states=['Uttar Pradesh', 'Kerala', 'Delhi', 'Manipur', 'Jammu', 'Gujrat', 'Assam']

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.reactiveForm= new FormGroup ({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required])
    })
  }

  onTemplateSubmit(event:any){
   console.log(event)
  }


  reactiveSubmit(event:any){

  }
}
