import {CommonModule} from '@angular/common'
import {Component, Input} from '@angular/core'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faHeart, faL} from '@fortawesome/free-solid-svg-icons'
import {LikeStatusService} from './services/likesStatus.service'
import {Store} from '@ngrx/store'
import {likeStatusActions} from './store/actions'

@Component({
  selector: 'mc-like',
  templateUrl: './likeStatus.component.html',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
})
export class LikeStatusComponent {
  heartIcon = faHeart
  heartStyle = 'red'

  @Input() statusId: string = ''
  @Input() likesCount: number = 0
  @Input() isLiked: boolean = false
  @Input() likes: String[] = []
  @Input() userId: string = ''

  constructor(private store: Store) {}

  handleLike() {
    console.log(this.isLiked)

    this.store.dispatch(
      likeStatusActions.likeStatus({
        isLiked: this.isLiked,
        id: this.statusId,
      })
    )
    if (this.isLiked == false) {
      this.likesCount = this.likesCount + 1
      document.getElementById(this.statusId)!.style.color = 'pink'
    } else {
      this.likesCount = this.likesCount - 1
      document.getElementById(this.statusId)!.style.color = 'white'
    }

    this.isLiked = !this.isLiked
  }
}
