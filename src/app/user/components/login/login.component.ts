import {AfterViewInit, Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {UserService} from '../../services/user.service'
import {Store} from '@ngrx/store'
import {RouterLink} from '@angular/router'
import {CommonModule} from '@angular/common'
import {BackendErrorMessages} from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component'
import {combineLatest} from 'rxjs'
import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers'
import {authActions} from '../../store/actions'
import {LoginRequestInterface} from '../../types/LoginRequest.interface'
import {feedActions} from 'src/app/shared/components/feed/store/actions'

@Component({
  selector: 'sc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorMessages,
  ],
})
export class LoginComponent   {
  apiUrl: string = '/user/feed'

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  isSubmitting$ = this.store.select(selectIsSubmitting)

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  })

  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private store: Store
  ) {}


  onSubmit() {
    const request: LoginRequestInterface = this.form.getRawValue()
    this.store.dispatch(authActions.login({request}))
    this.fetchFeed()
  }
  fetchFeed(): void {
    this.store.dispatch(feedActions.getFeed({url: this.apiUrl}))
  }
}
