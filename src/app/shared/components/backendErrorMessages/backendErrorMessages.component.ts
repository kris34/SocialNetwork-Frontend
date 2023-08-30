import { CommonModule } from '@angular/common'
import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from 'src/app/user/types/backendErrors.interface'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class BackendErrorMessages implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {}

  errorMessages: object[] = []

  ngOnInit(): void {
    this.errorMessages.push(this.backendErrors)
  }
}
