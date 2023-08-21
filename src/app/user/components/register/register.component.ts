import {Component} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'sc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  constructor() {}
}
