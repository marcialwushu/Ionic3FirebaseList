import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddContactItemPage } from './add-contact-item';

@NgModule({
  declarations: [
    AddContactItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddContactItemPage),
  ],
})
export class AddContactItemPageModule {}
