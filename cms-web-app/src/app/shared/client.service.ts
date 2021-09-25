import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from './client.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  formData: Client;
  list: Client[];

  readonly url = "http://localhost:25662/api"

  constructor(private http: HttpClient) { }

  getClients() {
    this.http.get(this.url + '/Clients').toPromise().then(res =>
      this.list = res as Client[]);
  }

  postClient(formData: Client) {
    return this.http.post(this.url + '/Clients', formData)
  }

  deleteClient(id: number) {
    return this.http.delete(this.url + '/Clients/' + id);
  }

  putClient(formData: Client) {
    return this.http.put(this.url + '/Clients/' + formData.clientID, formData)
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.formData = {
      clientID: 0,
      name: "",
      address: "",
      city: "",
      state: "",
      postCode: "",
      country: ""
    }
  }
}
