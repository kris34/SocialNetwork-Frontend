import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {LoginComponent} from 'src/app/user/components/login/login.component'
import {LeftBarComponent} from '../shared/components/leftBar/leftBar.component'
import {RightBarComponent} from '../shared/components/rightBar.ts/rightBar.component'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [CommonModule, LoginComponent, LeftBarComponent, RightBarComponent],
})
export class FeedComponent {}
