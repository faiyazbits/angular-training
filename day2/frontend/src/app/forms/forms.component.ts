import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";



@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})

export class FormComponent implements OnInit{
    name=new FormControl('');

    
        constructor(){

    }

    ngOnInit(){

    }

    display(){
        this.name.setValue('Vinoth Kumar')
    }
}