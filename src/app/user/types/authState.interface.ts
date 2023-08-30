import { CurrentUserInterface } from 'src/app/shared/types/currentUserInterface'
import { BackendErrorsInterface } from './backendErrors.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null | undefined
  isLoading: boolean
  validationErrors: BackendErrorsInterface | null
}
