import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../shared/client.model';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {

  clients: Object;

  constructor(private service: ClientService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getClients();
  }

  openEdit(client: Client) {
    this.service.formData = Object.assign({}, client);
    console.log("Update :", client);
    this.router.navigate(['client']);
  }

  onDelete(id: number) {
    if (confirm("Do you want to Delete this Client Record?")) {
      this.service.deleteClient(id).subscribe(res => {
        this.service.getClients();
        this.toastr.error('Client Deleted Successfully', 'CMS - Delete Client');
      })
    }
  }

  openAdd(pageName: string) {
    this.service.resetForm();
    this.router.navigate([`${pageName}`]);
  }


}
