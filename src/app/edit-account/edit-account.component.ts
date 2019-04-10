import { Component, OnInit, Input } from '@angular/core';
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
  providers: [UserinfoService]
})
export class EditAccountComponent implements OnInit {
@Input() selectedUser;
  constructor(private userinfoService: UserinfoService) { }

  ngOnInit() {
  }

  beginUpdatingUser(userToUpdate) {
    this.userinfoService.updateUser(userToUpdate);
  }
}
