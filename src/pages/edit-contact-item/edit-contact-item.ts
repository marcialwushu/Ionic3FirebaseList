import { ContactListService } from './../../services/contact-list/contact-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';


@IonicPage()
@Component({
  selector: 'page-edit-contact-item',
  templateUrl: 'edit-contact-item.html',
})
export class EditContactItemPage {

  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contact: ContactListService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
    this.contact.editItem(item)
    .then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
