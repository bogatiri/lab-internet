/* eslint-disable jsx-a11y/anchor-is-valid */
import { CloseOutlined, MenuOutlined, RightOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './HeaderNavigation.scss'

const HeaderNavigation = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className='header-navigation'>
			<div className='testLab'>
				<div className='logo'>
					<div className='circle circleLeft' />
					<div className='circle circleRight' />
				</div>
				<h5 style={{ color: isMobileMenuOpen ? 'black' : 'white' }}>testLab</h5>
			</div>
			<div className='navigation'>
				<a
					href='#'
					onClick={() => scrollToSection('how-it-works')}
				>
					Как это работает
				</a>
				<a
					href='#'
					onClick={() => scrollToSection('third-block')}
				>
					3-й блок
				</a>
				<a
					href='#'
					onClick={() => scrollToSection('questions-and-answers')}
				>
					Вопросы и ответы
				</a>
				<a
					href='#'
					onClick={() => scrollToSection('form')}
				>
					Форма
				</a>
			</div>
			<div
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				className='mobile-navigation'
			>
				{isMobileMenuOpen ? (
					<CloseOutlined style={{ color: 'black', zIndex: 4 }} />
				) : (
					<MenuOutlined />
				)}
			</div>
			{isMobileMenuOpen && (
				<div
					className={`overlay ${isMobileMenuOpen && 'active'}`}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					<div
						onClick={() => scrollToSection('how-it-works')}
						className='mobile-menu'
					>
						<span>Как это работает</span>
						<RightOutlined />
					</div>
					<div
						onClick={() => scrollToSection('third-block')}
						className='mobile-menu'
					>
						<span>3-й блок</span>
						<RightOutlined />
					</div>
					<div
						onClick={() => scrollToSection('questions-and-answers')}
						className='mobile-menu'
					>
						<span>Вопросы и ответы</span>
						<RightOutlined />
					</div>
					<div
						onClick={() => scrollToSection('form')}
						className='mobile-menu'
					>
						<span>Форма</span>
						<RightOutlined />
					</div>
				</div>
			)}
		</div>
	)
}

export default HeaderNavigation
