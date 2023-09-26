import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'mc-mainpage',
  templateUrl: './mainpage.component.html',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CommonModule],
})
export class MainPageComponent {}
