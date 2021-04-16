import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let userId = +params['id'];
      this.user = this.userService.findUserById(userId);
    });
  }

}
