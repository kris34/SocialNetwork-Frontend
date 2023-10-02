import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {RouterOutlet} from '@angular/router'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {selectIsSubmitting, selectValidationErrors} from '../store/reducers'
import { statusRequestInterface } from 'src/app/shared/types/statusRequest.interface'
import { createStatusActions } from '../store/actions'

@Component({
  selector: 'mc-create-status',
  templateUrl: './create-status.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class CreateStatusComponent {
  form = this.fb.nonNullable.group({
    text: ['', [Validators.required]],
  })

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backEndErros: this.store.select(selectValidationErrors)
  })

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    
    const request: statusRequestInterface = this.form.getRawValue()
    
    this.store.dispatch(createStatusActions.createStatus({ request }))
  }
}
