import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import classes from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false)
	const timeRef = useRef<ReturnType<typeof setTimeout>>()
	const { className, children, isOpen, onClose } = props

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	const closeHanlder = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timeRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Esc') {
				closeHanlder()
			}
		},
		[closeHanlder]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}
		return () => {
			clearTimeout(timeRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	const mods: Record<string, boolean> = {
		[classes.opened]: isOpen,
		[classes.isClosing]: isClosing,
	}

	return (
		<Portal>
			<div className={classNames(classes.modal, mods, [className])}>
				<div className={classes.overlay} onClick={closeHanlder}>
					<div className={classes.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
