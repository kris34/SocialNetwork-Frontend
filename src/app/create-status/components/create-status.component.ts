import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {RouterOutlet} from '@angular/router'

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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value)
  }
}
