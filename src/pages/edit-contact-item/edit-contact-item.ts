import { HomePage } from './../home/home';
import { ToastService } from './../../services/toast/toast.service';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private contact: ContactListService,
    private toast: ToastService
  ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
    this.contact.editItem(item)
    .then(() => {
      this.toast.show(`${item.nome} saved!`)
      this.navCtrl.setRoot('HomePage');
    });
  }

  removeItem(item: Item){
    this.contact.removeItem(item)
      .then(() => {
        this.toast.show(`${item.nome} deletado!`);
        this.navCtrl.setRoot('HomePage');
      });
  }

}
