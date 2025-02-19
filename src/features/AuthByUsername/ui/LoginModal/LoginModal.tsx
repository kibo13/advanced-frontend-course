import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
	const { className, isOpen, onClose } = props
	return (
		<Modal
			className={classNames('', {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
		>
			<Suspense fallback={<Loader />}>
				<LoginFormLazy onSuccess={onClose} />
			</Suspense>
		</Modal>
	)
}
