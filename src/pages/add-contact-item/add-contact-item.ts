import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactListService } from '../../services/contact-list/contact-list.service';
import { ToastService } from '../../services/toast/toast.service';

import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { Item } from './../../models/item/item.model';



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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private contact: ContactListService,
    private toast: ToastService,
    private fileChoose: FileChooser,
    private file: File
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactItemPage');
  }

  addItem(item: Item){
    this.contact.addItem(item).then( ref => {
      this.toast.show(`${item.nome} saved!`);
      this.navCtrl.setRoot('HomePage', { key: ref.key });
      
    })
  }

  choose(){
    this.fileChoose.open().then((uri)=>{
      alert(uri);


      this.file.resolveLocalFilesystemUrl(uri).then((newUrl)=>{
        alert(JSON.stringify(newUrl));  
      })
    })
  }

}
