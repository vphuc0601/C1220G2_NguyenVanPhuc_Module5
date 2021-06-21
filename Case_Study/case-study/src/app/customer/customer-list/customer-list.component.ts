import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.servce';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  page = 3;
  pageSize = 2;
  id: number;
  name: string;
  customerList: Customer[];
  customerForm: FormGroup;
  private address: string;
  constructor(private customerService: CustomerService, private fb:FormBuilder,private router: Router) {
    this.customerList = [];
  }

  ngOnInit() {
    this.customerForm=this.fb.group({
      name: new FormControl(""),
      address: new FormControl("")
    });
    this.getAll();
  }

  getAll(){
      this.customerService.getAll().subscribe(data => {
      this.customerList = data
    });
  }

  deleteCustomer (){
    this.customerService.deleteCustomer(this.id).subscribe(data => {
      this.getAll();
    })
  }
  sendId(id: number) {
    this.id=id;
    this.customerService.findById(id).subscribe(data => {
      this.name = data.name;
    })
  }

  searchCustomer() {
    this.name = this.customerForm.controls.name.value;
    this.address = this.customerForm.controls.address.value;
    this.customerService.searchCustomer(this.name,this.address).subscribe(data => {
      this.customerList =data;
    });
    this.router.navigate(['/customer/list']) ,
      (error) => {
        console.log('Not create'+error)
      }
  }
}
