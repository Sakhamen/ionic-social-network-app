import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxPageRoutingModule } from './inbox-routing.module';

import { InboxPage } from './inbox.page';

// Sub components
import { GroupComponent } from './components/group/group.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxPageRoutingModule
  ],
  declarations: [
    InboxPage,
    GroupComponent,
    MessageComponent
  ]
})
export class InboxPageModule {}
