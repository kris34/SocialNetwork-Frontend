import { BackendErrorsInterface } from 'src/app/user/types/backendErrors.interface'

export interface CreateStatusStateInterface { 
    isSubmitting: boolean
    validationErrors: BackendErrorsInterface | null
}