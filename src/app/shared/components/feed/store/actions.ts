import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {getFeedResponseInterface} from '../types/getFeedResponse.interace'
import { StatusInterface } from 'src/app/shared/types/status.interface'

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get feed': props<{url: string}>(),
    'Get feed success': props<{feed: getFeedResponseInterface}>(),
    'Get feed failure': emptyProps(),

    'Like status': props<{id: string}>(),
    'Like status success': props<{feed: getFeedResponseInterface}>(),
    'Like status failure': emptyProps(),
  },
})
