import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  friends: any;

  constructor(
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

}
