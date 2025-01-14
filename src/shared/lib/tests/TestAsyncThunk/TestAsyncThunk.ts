import { StateSchema } from 'app/providers/StoreProvider'
import { AnyAction, AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg, RejectedValue> = (
	arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
	// dispatch: jest.MockedFn<any>
	dispatch: jest.MockedFn<ThunkDispatch<StateSchema, void, AnyAction>>

	getState: () => StateSchema

	actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

	api: jest.MockedFunctionDeep<AxiosStatic>

	// navigate: jest.MockedFn<any>
	navigate: jest.MockedFn<(path: string) => void>

	constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
		this.actionCreator = actionCreator
		this.dispatch = jest.fn()
		this.getState = jest.fn()
		this.api = mockedAxios
		this.navigate = jest.fn()
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg)
		const result = await action(this.dispatch, this.getState, {
			api: this.api,
			navigate: this.navigate,
		})

		return result
	}
}
