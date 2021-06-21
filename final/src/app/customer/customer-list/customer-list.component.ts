import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];
  customerType: CustomerType [];
  id: number | undefined;
  name: string | undefined;
  page= 3;
  pageSize= 4;
  customerForm: FormGroup | undefined;
  private address: string | undefined;
  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,private fb:FormBuilder,private router: Router) {
    this.customerList = [];
    this.customerType = [];
  }

  ngOnInit(): void {
    this.customerForm=this.fb.group({
      name: new FormControl(""),
      address: new FormControl("")
    });
    this.getAll()
  }

  getAll(){
    this.customerTypeService.getAll().subscribe( data => {
      this.customerType = data
    });
    this.customerService.getAll().subscribe(data => {
      this.customerList = data
    });
  }

  sendId(id: number) {
    this.id = id;
    this.customerService.findById(id).subscribe(data => {
      this.name = data.name;
    })
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.id).subscribe(data => {
      this.getAll();
      this.showAlert();
    })
  }

  searchCustomer() {
    // @ts-ignore
    this.name = this.customerForm.controls.name.value;
    // @ts-ignore
    this.address = this.customerForm.controls.address.value;
    this.customerService.searchCustomer(this.name,this.address).subscribe(data => {
      this.customerList =data;
    });
    this.router.navigate(['/customer/list']),
      (error: string) => {
        console.log('Not create'+error)
      }
  }

  showAlert(){
    // @ts-ignore
    new Swal({
      position: 'center',
      icon: 'success',
      title: 'Delete complete',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
