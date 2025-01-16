import { ChangeEvent, memo, useMemo } from 'react'
import classes from './Select.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

export interface SelectOption {
	value: string
	content: string
}

interface SelectProps {
	className?: string
	label?: string
	options?: SelectOption[]
	value?: string
	onChange?: (value: string) => void
	readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
	const { className, label, options, onChange, value, readonly } = props
	const mods: Mods = {}

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(e.target.value)
		}
	}

	const optionList = useMemo(
		() =>
			options?.map((opt) => (
				<option className={classes.option} value={opt.value} key={opt.value}>
					{opt.content}
				</option>
			)),
		[options]
	)

	return (
		<div className={classNames(classes.wrapper, mods, [className])}>
			{label ?? <span>{label}</span>}
			<select
				className={classes.select}
				value={value}
				onChange={onChangeHandler}
				disabled={readonly}
			>
				{optionList}
			</select>
		</div>
	)
})
