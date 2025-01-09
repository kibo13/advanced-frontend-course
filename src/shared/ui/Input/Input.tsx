import classes from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
	autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		autofocus,
		type = 'text',
		placeholder,
		...otherProps
	} = props

	const ref = useRef<HTMLInputElement>(null)
	const [isFocus, setIsFocus] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)

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

	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart || 0)
	}

	return (
		<div className={classNames(classes.inputWrapper, {}, [className])}>
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
					{...otherProps}
				/>
				{isFocus && (
					<span
						className={classes.caret}
						style={{ left: `${caretPosition * 9}px` }}
					></span>
				)}
			</div>
		</div>
	)
})
