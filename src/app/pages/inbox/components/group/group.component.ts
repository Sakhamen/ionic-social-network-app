import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'group-view',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

  groups: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups() {
    this.apiService.getGroups().then(result => {
        // console.log('getGroups result', result);
        this.groups = result;
    }).catch(error => {
        console.log('getFriends error', error);
    });
  }

  openChat() {
    // TODO: navigate to chat
  }

}
