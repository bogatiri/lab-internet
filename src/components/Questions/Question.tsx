import { PlusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './Question.scss'

interface IQuestionProps {
	question: string
	answer: string
}

const Question = ({ question, answer }: IQuestionProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAnswer = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='question-container'>
			<div
				className='question'
				onClick={toggleAnswer}
			>
				<span>{question}</span>
				<PlusCircleOutlined
					style={{
						fontSize: '24px',
						transition: 'transform 0.3s ease',
						transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
					}}
				/>
			</div>
			<div
				className='answer'
				style={{
					maxHeight: isOpen ? '1000px' : '0',
					display: isOpen ? 'block' : 'none',
					transition: 'max-height 0.3s ease, opacity 0.3s ease',
					overflow: 'hidden',
				}}
			>
				<p>{answer}</p>
			</div>
		</div>
	)
}

export default Question
