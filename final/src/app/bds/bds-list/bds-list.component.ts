import { Component, OnInit } from '@angular/core';
import {Bds} from "../../model/bds";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {BdsService} from "../../service/bds.service";

@Component({
  selector: 'app-bds-list',
  templateUrl: './bds-list.component.html',
  styleUrls: ['./bds-list.component.css']
})
export class BdsListComponent implements OnInit {
  bdsList: Bds[];
  id: number | undefined;
  gia: string | undefined ;
  page= 3;
  pageSize= 4;
  bdsForm: FormGroup | undefined;

  // @ts-ignore
  dienTich: "";
  // @ts-ignore
  huong: "";
  constructor(private bdsService: BdsService,private fb:FormBuilder,private router: Router) {
    this.bdsList = [];
  }

  ngOnInit(): void {
    this.bdsForm = this.fb.group({
      dienTich: new FormControl(""),
      gia: new FormControl(""),
      huong: new FormControl(""),
    });
    this.getAll()
  }

  getAll(){
    this.bdsService.getAll().subscribe(data => {
      this.bdsList = data
    });
  }

  sendId(id: number) {
    this.id = id;
    this.bdsService.findById(id).subscribe(data => {
      // this.name = data.name;
    })
  }


  searchBds() {
    // @ts-ignore
    this.huong = this.bdsForm.controls.huong.value;
    // @ts-ignore
    this.dienTich = this.bdsForm.controls.dienTich.value;
    // @ts-ignore
    this.gia = this.bdsForm.controls.gia.value;
    // @ts-ignore
    this.bdsService.searchBds(this.dienTich,this.gia,this.huong).subscribe(data => {
      console.log( this.huong, this.gia, this.dienTich)
      this.bdsList =data;
    });
    this.router.navigate(['/bds/list']),
      (error: string) => {
        console.log('Not search'+error)
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
