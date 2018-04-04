import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactListService } from '../../services/contact-list/contact-list.service';

/**
 * Generated class for the AddContactItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-contact-item',
  templateUrl: 'add-contact-item.html',
})
export class AddContactItemPage {

  item: Item = {
    nome: '',
    email: '',
    facebook: undefined,
    telefone: undefined
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private contact: ContactListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactItemPage');
  }

  addItem(item: Item){
    this.contact.addItem(item).then( ref => {
      console.log(ref.key);
    })
  }

}
