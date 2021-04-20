import { UserGender } from './../../model/user.gender';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
  totalUserCount;
  maleUserCount;
  femaleUserCount;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.users$.subscribe((users)=>{
      this.totalUserCount = users.length;

      const maleUsers = users.filter((user) => {
        return user.gender == UserGender.MALE
      });
      this.maleUserCount = maleUsers.length;

      const femaleUsers = users.filter((user) => {
        return user.gender == UserGender.FEMALE
      });
      this.femaleUserCount = femaleUsers.length;

    })

  }

}
