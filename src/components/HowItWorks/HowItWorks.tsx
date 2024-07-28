import { steps } from '../../constants/stepsToSwitch'
import './HowItWorks.scss'

const HowItWorks = () => {
	return (
		<section className='how-it-works' id='how-it-works'>
			<h2 className='title'>Как это работает</h2>
			<div className='steps'>
				{steps.map((step, index) => (
					<div
						key={index}
						className='step'
					>
						<img
						className='step-image'
						src={step.image}
						alt='hello'
						>
						</img>
						<div className='step-content'>
						<span className='step-title'>{step.title}</span>
						<p className='step-instruction'>{step.instruction}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default HowItWorks
