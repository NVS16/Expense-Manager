import { Injectable } from '@angular/core';
import { Category } from './category';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {

  
  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('/categories');
  }

  postCat(data) {
    return this.http.post('/newcat', data);
  }

  postExp(data) {
    return this.http.post('/newexp', data);
  }

}
