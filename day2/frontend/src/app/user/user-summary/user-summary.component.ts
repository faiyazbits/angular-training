import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']

})

export class UserSummaryComponent implements OnInit {

totalUserCount;
maleUsersCount;
femaleUsersCount;

/* HERE WERE USING  THE USER SERVICE 
What we're achieving is data flows only through service to components , so the
components will be git rid of storing the data's
*/
constructor(private userService : UserService )  {}

ngOnInit() {

  this.totalUserCount = this.userService.getTotalUserCount();
  this.maleUsersCount = this.userService.getMaleUserCounts();
  this.femaleUsersCount = this.userService.getFemaleCounts();
      
  }

}