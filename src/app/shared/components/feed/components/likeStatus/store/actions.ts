import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {StatusInterface} from 'src/app/shared/types/status.interface'

export const likeStatusActions = createActionGroup({
  source: 'Like status',
  events: {
    'Like status': props<{isLiked: boolean; id: string}>(),
    'Like status success': props<{status: StatusInterface}>(),
    'Like status failure': emptyProps(),
  },
})
