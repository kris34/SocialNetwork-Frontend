import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import { Store } from '@ngrx/store'
import { feedActions } from '../shared/components/feed/store/actions'

@Component({
  selector: 'mc-mainpage',
  templateUrl: './mainpage.component.html',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CommonModule],
})
export class MainPageComponent implements OnInit{
  apiUrl: string = '/user/feed'

  constructor(private store: Store) {}


  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({url: this.apiUrl}))
  }
}
