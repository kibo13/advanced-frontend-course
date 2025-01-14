import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
	test('should set the username in the state', () => {
		const state: DeepPartial<LoginSchema> = { username: 'admin' }
		expect(
			loginReducer(state as LoginSchema, loginActions.setUsername('admin'))
		).toEqual({ username: 'admin' })
	})

	test('should set the password in the state', () => {
		const state: DeepPartial<LoginSchema> = { password: 'secret' }
		expect(
			loginReducer(state as LoginSchema, loginActions.setPassword('secret'))
		).toEqual({ password: 'secret' })
	})
})
