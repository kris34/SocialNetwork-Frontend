import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {authActions} from '../../store/actions'
import {RegisterRequestInterface} from '../../types/RegisterRequestInterface'
import {RouterLink} from '@angular/router'
import {AuthStateInterface} from '../../types/authState.interface'
import {selectIsSubmitting} from '../../store/reducers'
import {CommonModule} from '@angular/common'
import {UserService} from '../../services/user.service'

@Component({
  selector: 'sc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    repass: ['', Validators.required],
  })

  isSubmitting$ = this.store.select(selectIsSubmitting)

  constructor(
    private auth: UserService,
    private fb: FormBuilder,
    private store: Store
  ) {}

  onSubmit() {
    const request: RegisterRequestInterface = this.form.getRawValue()

    this.store.dispatch(authActions.register({request}))
  }
}
