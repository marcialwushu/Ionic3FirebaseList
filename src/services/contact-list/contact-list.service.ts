import { Item } from './../../models/item/item.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";

@Injectable()
export class ContactListService {

    private contactListRef = this.db.list<Item>('contact-list');

    constructor(private db: AngularFireDatabase){ }

    getContactList(){
        return this.contactListRef;
    }

    addItem(item: Item){
        return this.contactListRef.push(item);
    }

    editItem(item: Item){
        return this.contactListRef.update(item.key, item);
    }

    removeItem(item: Item){
        return this.contactListRef.remove(item.key);
    }
}