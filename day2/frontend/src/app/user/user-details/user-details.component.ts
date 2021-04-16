import { UserService } from './../user.service';
import { User } from '../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.user = this.userService.findUserById(id);
    })
  }

  goToUserPage() {
    this.userService.navigateToUserPage();
  }
}
