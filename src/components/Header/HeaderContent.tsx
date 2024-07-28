import { Button } from 'antd'
import './HeaderContent.scss'

const HeaderContent = () => {
	return (
		<div className='header-content'>
			<div className='header-content-block'>
				<div className='header-content-text'>

				<h1>Говорят, никогда не поздно сменить профессию</h1>
				<span>Сделай круто тестовое задание и у тебя получится</span>
				</div>
				<div className='header-content-button'>
				<Button className='button'>Проще простого!</Button>
				</div>
			</div>
		</div>
	)
}

export default HeaderContent
