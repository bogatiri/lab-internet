import { questions } from '../../constants/questions'
import Question from './Question'
import './QuestionsBlock.scss'

const QuestionsBlock = () => {
	return (
		<section className='questions-block' id='questions-and-answers'>
			<h2 className='title'>Вопросы и ответы</h2>
			<div className='questions-and-answers'>
				{questions.map((q, index) => (
					<Question
						key={index}
						question={q.question}
						answer={q.answer}
					/>
				))}
			</div>
		</section>
	)
}

export default QuestionsBlock
