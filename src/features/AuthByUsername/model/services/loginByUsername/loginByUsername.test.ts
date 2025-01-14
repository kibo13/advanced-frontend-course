import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
	test('dispatches setUserData and returns fulfilled on successful login', async () => {
		const userValue = { username: '123', id: '1' }
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({
			username: 'admin',
			password: 'secret',
		})

		expect(thunk.dispatch).toHaveBeenCalledWith(
			userActions.setUserData(userValue)
		)
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toBe(userValue)
	})

	test('returns rejected on failed login attempt', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({
			username: 'admin',
			password: 'secret',
		})

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('error')
	})
})
