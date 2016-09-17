import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { TodoData } from '../../providers/todo-data/todo-data';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private items = [];
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private dataService: TodoData) {
    this.dataService.getData().then((todos) => {
      if (todos) {
        this.items = JSON.parse(todos);
      }
    }, function(err) {
      console.log(err);
    });
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    })
  }
}
