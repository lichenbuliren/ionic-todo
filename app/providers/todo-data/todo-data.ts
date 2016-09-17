import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage, SqlStorage } from 'ionic-angular';

/*
  Generated class for the TodoData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoData {
  private storage;
  private data;

  constructor(private http: Http) {
    this.storage = new Storage(SqlStorage, {name:'todos'});
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data) {
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }

}

