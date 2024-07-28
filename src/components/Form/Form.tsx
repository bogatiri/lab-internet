import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Button, Checkbox, Input, message } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	resetForm,
	setAgreement,
	setErrors,
	setName,
	setPhoneNumber,
	setTouched,
} from '../../redux/slices/formSlice'
import { RootState } from '../../redux/store'
import './Form.scss'

const Form: React.FC = () => {
	const dispatch = useDispatch()
	const { name, phoneNumber, agreement, errors, touched } = useSelector(
		(state: RootState) => state.form
	)
	const isValid = !errors.name && !errors.phoneNumber && !errors.agreement
	const validate = useCallback(() => {
		const newErrors = { name: '', phoneNumber: '', agreement: '' }

		if (!name && touched.name) {
			newErrors.name = 'Это поле обязательно'
		} else if (name && !/^[a-zA-Zа-яА-Я\s]+$/.test(name)) {
			newErrors.name = 'Неверный формат имени'
		}

		if (!phoneNumber && touched.phoneNumber) {
			newErrors.phoneNumber = 'Это поле обязательно'
		} else if (phoneNumber && !/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
			newErrors.phoneNumber = 'Неверный формат телефона'
		}

		if (!agreement && touched.agreement) {
			newErrors.agreement = 'Вы должны согласиться с условиями'
		}

		dispatch(setErrors(newErrors))
	}, [name, phoneNumber, agreement, touched, dispatch])

	useEffect(() => {
		validate()
	}, [name, phoneNumber, agreement, touched, validate])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		if (name === 'name') dispatch(setName(value))
		if (name === 'phoneNumber') dispatch(setPhoneNumber(value))
		dispatch(setTouched({ [name]: true }))
	}

	const handleCheckboxChange = (e: CheckboxChangeEvent) => {
		dispatch(setAgreement(e.target.checked))
		dispatch(setTouched({ agreement: true }))
	}

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(setTouched({ name: true, phoneNumber: true, agreement: true }))
		validate()
		if (isValid) {
			console.log('Submit', { name, phoneNumber, agreement })
			message.loading({ content: 'Submitting...', key: 'submit' })
			setTimeout(() => {
				message.success({
					content: 'Submitted successfully!',
					key: 'submit',
					duration: 2,
				})
				dispatch(resetForm())
			}, 2000)
		}
	}

	return (
		<form
			className='form'
			onSubmit={onSubmit}
			id='form'
		>
			<h2 className='title'>Отправь форму</h2>
			<div className='form-group'>
				<div className='input-wrapper'>
					<Input
						type='text'
						name='name'
						placeholder='Имя'
						value={name}
						onChange={handleInputChange}
						status={errors.name ? 'error' : ''}
						onBlur={() => dispatch(setTouched({ name: true }))}
						suffix={
							<div className='suffix-icon'>
								{errors.name ? (
									<CloseCircleOutlined style={{ color: 'red' }} />
								) : (
									isValid &&
									name && <CheckCircleOutlined style={{ color: 'green' }} />
								)}
							</div>
						}
					/>
					{errors.name && <span className='error-message'>{errors.name}</span>}
				</div>
				<div className='input-wrapper'>
					<Input
						type='tel'
						name='phoneNumber'
						placeholder='Телефон'
						value={phoneNumber}
						onChange={handleInputChange}
						status={errors.phoneNumber ? 'error' : ''}
						onBlur={() => dispatch(setTouched({ phoneNumber: true }))}
						suffix={
							<div className='suffix-icon'>
								{errors.phoneNumber ? (
									<CloseCircleOutlined style={{ color: 'red' }} />
								) : (
									isValid &&
									phoneNumber && (
										<CheckCircleOutlined style={{ color: 'green' }} />
									)
								)}
							</div>
						}
					/>
					{errors.phoneNumber && (
						<span className='error-message'>{errors.phoneNumber}</span>
					)}
				</div>
				<div
					className='input-wrapper checkbox'
					onBlur={() => dispatch(setTouched({ agreement: true }))}
				>
					<Checkbox
						name='agreement'
						checked={agreement}
						onChange={handleCheckboxChange}
					>
						Согласен, отказываюсь
					</Checkbox>
					{errors.agreement && (
						<span className='error-message'>{errors.agreement}</span>
					)}
				</div>
				<Button
					className='button'
					type='primary'
					htmlType='submit'
					disabled={!isValid}
				>
					Отправить
				</Button>
			</div>
		</form>
	)
}

export default Form
