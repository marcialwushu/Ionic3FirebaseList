import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditContactItemPage } from './edit-contact-item';

@NgModule({
  declarations: [
    EditContactItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditContactItemPage),
  ],
})
export class EditContactItemPageModule {}
