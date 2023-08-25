import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {register} from '../../store/actions'
import {RegisterRequestInterface} from '../../types/RegisterRequestInterface'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'sc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    const request: RegisterRequestInterface = this.form.getRawValue()

    this.store.dispatch(register({request}))
  }
}
