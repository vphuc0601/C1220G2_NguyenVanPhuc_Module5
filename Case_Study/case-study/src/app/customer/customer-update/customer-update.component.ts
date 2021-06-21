import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.servce';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerForm: FormGroup;
  public id: number;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
      }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    let customer = new Customer();
    this.customerService.findById(id).subscribe(data =>{
      customer = data;
    }, (error) => {
      console.log('Update' + error);
    }, () => {
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        idCustomer: new FormControl(customer.idCustomer, [Validators.required,Validators.pattern('^(KH-)\\d{4}$')]),
        name: new FormControl(customer.name,[Validators.required]),
        dayOfBirth: new FormControl(customer.dayOfBirth, [Validators.required,this.validateAge]),
        email: new FormControl(customer.email,[Validators.required, Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]),
        address: new FormControl(customer.address,[Validators.required]),
        idCard: new FormControl(customer.idCard,[Validators.required, Validators.maxLength(10)]),
        phone: new FormControl(customer.phone,[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
        gender: new FormControl(customer.gender,[Validators.required]),
      });
      console.log(customer.id)
    })
  }

  updateCustomer(id: number) {
    // const customer = this.customerForm.value;
    let customer = Object.assign({}, this.customerForm.value);
    this.customerService.updateCustomer(id, customer).subscribe();
    this.router.navigate(['/customer/list']);//điều hướng qua componet khác
  }
  validateAge(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();
    return currentYear - year >= 18 ? null : {'invalid18': true};
  }
}
