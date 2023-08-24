import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/RegisterRequestInterface';

export const register = createAction('[User] Register', props<{request: RegisterRequestInterface}>())

