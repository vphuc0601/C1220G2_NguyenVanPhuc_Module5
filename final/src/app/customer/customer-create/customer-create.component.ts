import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";
import Swal from "sweetalert2";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  // @ts-ignore
  customerForm: FormGroup ;
  // @ts-ignore
  typeCustomerList: CustomerType[] ;

  constructor(private customerService: CustomerService,private fb:FormBuilder,private router: Router,private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe( data => {
      this.typeCustomerList = data
    });
    this.customerForm = this.fb.group({
      id: new FormControl(''),
      idCustomer: new FormControl('', [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required,this.validateAge]),
      email: new FormControl('', [Validators.required, Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]),
      address: new FormControl('', [Validators.required]),
      idCard: new FormControl("",[Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('',[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      typeCustomer: new FormControl("",[Validators.required])
    })
  }

  submit() {
    const customer = this.customerForm.value;
    if(this.customerForm.invalid){
      console.log("aaaaaa")
      // this.router.navigate(['/customer/create'])
    }else {this.customerService.saveCustomer(customer).subscribe(data => {
      this.showAlert();
      this.router.navigate(['/customer/list'])
    });
      this.customerForm.reset();
      this.router.navigate(['/customer/list']);}
  }

  validateAge(dateOfBirthControl: AbstractControl) {
    let dateOfBirthValue = dateOfBirthControl.value;
    console.log(dateOfBirthValue);
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0,4));
    let currentYear = new Date().getFullYear();
    return currentYear - year >= 18 ? null : {'invalid18': true};
  }

  showAlert(){
    // @ts-ignore
    new Swal({
      position: 'center',
      icon: 'success',
      title: 'Create complete',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
