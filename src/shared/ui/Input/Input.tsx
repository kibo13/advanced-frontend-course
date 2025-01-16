import classes from './Input.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (value: string) => void
	autofocus?: boolean
	readonly?: boolean
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		autofocus,
		readonly,
		type = 'text',
		placeholder,
		...otherProps
	} = props

	const ref = useRef<HTMLInputElement>(null)
	const [isFocus, setIsFocus] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)
	const isCaretVisible = isFocus && !readonly

	useEffect(() => {
		if (autofocus && ref.current) {
			setIsFocus(true)
			ref.current.focus()
		}
	}, [autofocus])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
		setCaretPosition(e.target.value.length)
	}

	const onBlur = () => {
		setIsFocus(false)
	}

	const onFocus = () => {
		setIsFocus(true)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart || 0)
	}

	const mods: Mods = {
		[classes.readOnly]: readonly,
	}

	return (
		<div className={classNames(classes.inputWrapper, mods, [className])}>
			{placeholder && <div>{`${placeholder} >`}</div>}
			<div className={classes.caretWrapper}>
				<input
					className={classes.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					readOnly={readonly}
					{...otherProps}
				/>
				{isCaretVisible && (
					<span
						className={classes.caret}
						style={{ left: `${caretPosition * 9}px` }}
					></span>
				)}
			</div>
		</div>
	)
})
