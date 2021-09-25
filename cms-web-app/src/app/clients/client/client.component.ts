import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: []
})
export class ClientComponent implements OnInit {

  constructor(private router: Router,
    private service: ClientService,
    private toastr: ToastrService) { }

  ngOnInit() {
    if (this.service.formData.clientID == 0)
      this.service.resetForm();
  }

  openHome(pageName: string): void {
    this.router.navigate([`${pageName}`]);
    this.service.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.clientID == 0) {
      this.insertRecord(form);
      this.service.resetForm();
      this.openHome('');
    }
    else {
      this.updateRecord(form);
      this.service.resetForm();
      this.openHome('');
    }
  }

  insertRecord(form: NgForm) {
    this.service.postClient(form.value).subscribe(res => {
      this.toastr.success('New Client Add Successfully', 'CMS - Add New');
      this.service.resetForm();
      this.service.getClients();
      this.openHome('');
    });
  }

  updateRecord(form: NgForm) {
    this.service.putClient(form.value).subscribe(res => {
      this.toastr.success('Client Updated Successfully', 'CMS - Update Client');
      this.service.resetForm();
      this.service.getClients();
    });
  }

}
