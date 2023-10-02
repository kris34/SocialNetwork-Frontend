import {createActionGroup, props} from '@ngrx/store'
import {StatusInterface} from 'src/app/shared/types/status.interface'
import {statusRequestInterface} from 'src/app/shared/types/statusRequest.interface'
import {BackendErrorsInterface} from 'src/app/user/types/backendErrors.interface'

export const createStatusActions = createActionGroup({
  source: 'create status',
  events: {
    'Create status': props<{request: statusRequestInterface}>(),
    'Create status success': props<{status: StatusInterface}>(),
    'Create status failure': props<{errors: BackendErrorsInterface}>(),
  },
})
