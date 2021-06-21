import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.servce';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private customerService: CustomerService,private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      id: new FormControl(''),
      idCustomer: new FormControl('', [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
      name: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required,this.validateAge]),
      email: new FormControl('', [Validators.required, Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]),
      address: new FormControl('', [Validators.required]),
      idCard: new FormControl("",[Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('',[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      typeCustomer: new FormControl("",[Validators.required])
    })
  }
  submit() {
    console.log(this.customerForm.controls.gender.value);
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(data => {
      this.router.navigate(['/customer/list']),
        (error) => {
        console.log('Not create'+error)
        }
    });
    this.customerForm.reset();
    this.router.navigate(['/customer/list']);
  }
  validateAge(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();
    return currentYear - year >= 18 ? null : {'invalid18': true};
  }
}
