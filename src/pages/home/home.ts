import { ContactListService } from './../../services/contact-list/contact-list.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from '@firebase/util';
import { Item } from '../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactList$: any;

  constructor(public navCtrl: NavController, private contact: ContactListService) {
    this.contactList$ = this.contact
    .getContactList()
    .snapshotChanges()
    .map(
        changes => {
          return changes.map( c => ({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        }
      );

  }

}
