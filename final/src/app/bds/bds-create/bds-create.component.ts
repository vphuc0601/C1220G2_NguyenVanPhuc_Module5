import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import Swal from "sweetalert2";
import {BdsService} from "../../service/bds.service";

@Component({
  selector: 'app-bds-create',
  templateUrl: './bds-create.component.html',
  styleUrls: ['./bds-create.component.css']
})
export class BdsCreateComponent implements OnInit {
  bdsForm: FormGroup | undefined ;
  // @ts-ignore
  ngayDang: string;


  constructor(private bdsService: BdsService,private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.bdsForm = this.fb.group({
      id: new FormControl(''),
      danhMuc: new FormControl('', [Validators.required]),
      vungMien: new FormControl('', [Validators.required]),
      banLa: new FormControl('', [Validators.required]),
      banDangTin: new FormControl('', [Validators.required]),
      tinhTrang: new FormControl('', [Validators.required]),
      diaChi: new FormControl("",[Validators.required]),
      dienTich: new FormControl('',[Validators.required, Validators.min(20)]),
      huong: new FormControl("",[Validators.required]),
      tuaDe: new FormControl("", [Validators.required]),
      noiDung: new FormControl("", [Validators.required]),
      gia: new FormControl("", [Validators.required, Validators.min(100000000)]),
      ngayDang: new FormControl("")
    })
  }

  submit() {
    // @ts-ignore
    const bds = this.bdsForm.value;
    // @ts-ignore
    if (this.bdsForm.invalid) {
      this.router.navigate(['/customer/create'])
    } else {
      // @ts-ignore
      this.ngayDang = new Date().getDate();
      this.bdsService.saveBds(bds).subscribe(data => {
        this.router.navigate(['/bds/list'])
        this.showAlert();
      });
    }
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
