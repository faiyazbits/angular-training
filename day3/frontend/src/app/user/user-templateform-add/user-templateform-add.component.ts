import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-templateform-add',
  templateUrl: './user-templateform-add.component.html',
  styleUrls: ['./user-templateform-add.component.css']
})
export class UserTemplateformAddComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
