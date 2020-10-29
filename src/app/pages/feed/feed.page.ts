import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  friends: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadFeed();
  }

  loadFeed() {
    this.apiService.getFriends().then(result => {
        // console.log('getFriends result', result);
        this.friends = result;
    }).catch(error => {
        console.log('getFriends error', error);
    });
  }

}
