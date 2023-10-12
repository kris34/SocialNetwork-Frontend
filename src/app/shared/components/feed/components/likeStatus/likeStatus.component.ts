import {CommonModule} from '@angular/common'
import {Component, Input} from '@angular/core'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

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

  constructor() {}

  handleLike() {
    if (!this.isLiked) {
      this.likesCount = this.likesCount + 1
      document.getElementById('icon')!.style.color = 'pink'
    } else {
      this.likesCount = this.likesCount - 1
      document.getElementById('icon')!.style.color = 'white'
    }

    this.isLiked = !this.isLiked
  }
}
