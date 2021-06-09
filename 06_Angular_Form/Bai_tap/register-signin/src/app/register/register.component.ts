import {Component, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formRegister = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern('/^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ''
      }, {validator: comparePassword}),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      gender: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.formRegister.value);
  }
}
function comparePassword(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  return (value.password === value.confirmPassword) ? null : {
    passwordNotMatch: true
  }
}
