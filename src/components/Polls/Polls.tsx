import { PollsArray } from '../../constants/polls'
import './Polls.scss'

const Polls = () => {
	return (
		<section className='polls-block'>
			<div className='polls'>

			{PollsArray.map((poll, index) => (
				<div
				key={index}
				className='poll'
				>
					<span className='poll-title'>{poll.title}</span>
					<p className='poll-content'>{poll.content}</p>
				</div>
			))}
			</div>
		</section>
	)
}

export default Polls
