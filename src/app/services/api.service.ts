import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = '../../assets/data/data.json';

  constructor(
    private http: HttpClient
  ) { }

  getSampleData() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}`)
          .toPromise()
          .then(res => {
              resolve(res);
          }, error => {
              reject(error);
          });
    });
    return promise;
  }

  getFriends() {
    let promise = new Promise((resolve, reject) => {
        this.http.get(`${this.baseUrl}`)
            .toPromise()
            .then(res => {
                let data:any = res['friends'];
                resolve(data);
            }, error => {
                reject(error);
            });
    });
    return promise;
  }

  getGroups() {
    let promise = new Promise((resolve, reject) => {
        this.http.get(`${this.baseUrl}`)
            .toPromise()
            .then(res => {
                let data:any = res['groups'];
                resolve(data);
            }, error => {
                reject(error);
            });
    });
    return promise;
  }

}
