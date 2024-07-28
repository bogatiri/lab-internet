import { Flex, Layout } from 'antd'
import './App.scss'
import Form from './components/Form/Form'
import HeaderContent from './components/Header/HeaderContent'
import HeaderNavigation from './components/Header/HeaderNavigation'
import Polls from './components/Polls/Polls'
import QuestionsBlock from './components/Questions/QuestionsBlock'
import HowItWorks from './components/HowItWorks/HowItWorks'
import ThirdBlock from './components/ThirdBlock/ThirdBlock'
import Reviews from './components/Reviews/Reviews'

const { Header, Footer, Content } = Layout

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	height: 'auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	zIndex: 10,
	gap: '5rem'
}


const App = () => (
	<Flex
		gap='middle'
		wrap
	>
		<Layout className='layout-style custom-scrollbar'>
			<Header className='header'>
				<HeaderNavigation />
				<HeaderContent />
			</Header>
			<Content style={contentStyle}>
				<HowItWorks/>
				<ThirdBlock/>
				<Reviews/>
				<QuestionsBlock />
				<Polls />
				<Form />
			</Content>
			<Footer className='footer'>© 2021 Лаборатория интернет</Footer>
		</Layout>
	</Flex>
)

export default App
