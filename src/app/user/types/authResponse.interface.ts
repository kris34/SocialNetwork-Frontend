import {CurrentUserInterface} from 'src/app/shared/types/currentUserInterface'

export interface AuthResponseInterface {
  _id: string
  username: string
  email: string
  accessToken: string
}
