import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  friends: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.apiService.getFriends().then(result => {
        this.friends = result;
    }).catch(error => {
        console.log('getFriends error', error);
    });
  }

}
