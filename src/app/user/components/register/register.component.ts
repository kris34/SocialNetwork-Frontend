import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {authActions} from '../../store/actions'
import {RegisterRequestInterface} from '../../types/RegisterRequestInterface'
import {RouterLink} from '@angular/router'
import {AuthStateInterface} from '../../types/authState.interface'
import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers'
import {CommonModule} from '@angular/common'
import {UserService} from '../../services/user.service'
import {combineLatest} from 'rxjs'
import { BackendErrorMessages } from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component'

@Component({
  selector: 'sc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessages],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    repass: ['', Validators.required],
  })

  isSubmitting$ = this.store.select(selectIsSubmitting)

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

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
