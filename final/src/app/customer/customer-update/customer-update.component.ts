import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customer-type";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerForm: FormGroup | undefined;
  id: number | undefined ;
  typeCustomerList: CustomerType[] | undefined ;

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe( data => {
      this.typeCustomerList = data
    });
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
        dateOfBirth: new FormControl(customer.dateOfBirth, [Validators.required,this.validateAge]),
        email: new FormControl(customer.email,[Validators.required, Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]),
        address: new FormControl(customer.address,[Validators.required]),
        idCard: new FormControl(customer.idCard,[Validators.required, Validators.maxLength(10)]),
        phone: new FormControl(customer.phone,[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
        typeCustomer: new FormControl(customer.typeCustomer,[Validators.required])
      });
      console.log(customer.id)
    })
  }

  validateAge(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();
    return currentYear - year >= 18 ? null : {'invalid18': true};
  }

  updateCustomer() {
    let id = this.activatedRoute.snapshot.params.id;
    // @ts-ignore
    let customer = Object.assign({}, this.customerForm.value);
      this.customerService.updateCustomer(id ,customer).subscribe();
      this.showAlert();
      this.router.navigate(['/customer/list']);
  }

  showAlert(){
    // @ts-ignore
    new Swal({
      position: 'center',
      icon: 'success',
      title: 'Update complete',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
