import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'message-view',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  friends: any;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadFriends();
  }

  loadFriends() {
    this.apiService.getFriends().then(result => {
        // console.log('getFriends result', result);
        this.friends = result;
    }).catch(error => {
        console.log('getFriends error', error);
    });
  }

  openChat(user: any) {
    let navigationExtras: NavigationExtras = {
      state: { user }
    };
    this.router.navigate([`tabs/inbox/${user.id}`], navigationExtras);
  }

}
