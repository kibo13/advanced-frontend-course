import {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'
import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { ProfileSchema } from 'entities/Profile'
import { LoginSchema } from 'features/AuthByUsername'
import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema

	// async reducers
	loginForm?: LoginSchema
	profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance
	navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}
