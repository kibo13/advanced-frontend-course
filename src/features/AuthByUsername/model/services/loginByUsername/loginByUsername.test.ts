import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

describe('loginByUsername.test', () => {
	test('dispatches setUserData and returns fulfilled on successful login', async () => {
		const userValue = { username: 'admin', id: '1' }

		const thunk = new TestAsyncThunk(loginByUsername)
		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
		const result = await thunk.callThunk({
			username: 'admin',
			password: 'secret',
		})

		expect(thunk.dispatch).toHaveBeenCalledWith(
			userActions.setUserData(userValue)
		)
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(thunk.api.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(userValue)
	})

	test('returns rejected on failed login attempt', async () => {
		const thunk = new TestAsyncThunk(loginByUsername)
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
		const result = await thunk.callThunk({
			username: 'admin',
			password: 'secret',
		})

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(thunk.api.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('error')
	})
})
