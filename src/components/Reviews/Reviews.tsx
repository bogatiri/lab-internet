import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { useCallback, useRef, useState } from 'react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper/types'
import { reviews } from '../../constants/reviews'
import './Reviews.scss'

const EventList = () => {
	const [swiper, setSwiper] = useState<SwiperClass | null>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const swiperRef = useRef<SwiperClass | null>(null)

	const handleNextClick = () => {
		if (swiper) {
			swiper.slideNext()
		}
	}

	const handlePrevClick = () => {
		if (swiper) {
			swiper.slidePrev()
		}
	}

	const handlePointClick = (index: number) => {
		setActiveIndex(index)
		if (swiperRef.current) {
			swiperRef.current.slideTo(index)
		}
	}

	const onSwiper = useCallback((swiperInstance: SwiperClass) => {
		setSwiper(swiperInstance)
		swiperRef.current = swiperInstance
	}, [])

	const onSlideChange = useCallback((swiperInstance: SwiperClass) => {
		setActiveIndex(swiperInstance.activeIndex)
	}, [])

	return (
		<div className='event-list'>
			<div className='reviews'>
				<h2 className='title'>Отзывы</h2>

				<div className='circular-slider'>
					<button
						className={`event-ellipse`}
						onClick={handlePrevClick}
					>
						<LeftOutlined />
					</button>
					<Swiper
						modules={[Navigation]}
						grabCursor={true}
						slidesPerView={3}
						className='events'
						onSwiper={onSwiper}
						onSlideChange={onSlideChange}
						navigation={{
							prevEl: '.event-ellipse.prev',
							nextEl: '.event-ellipse.next',
						}}
						breakpoints={{
							1200: {
								slidesPerView: 3,
							},
							1000: {
								slidesPerView: 2,
							},
							0: {
								slidesPerView: 1,
							},
						}}
					>
						{reviews.map((review, index) => (
							<SwiperSlide key={index}>
								<div className='slide-content'>
									<div className='user'>
										<Avatar
											size={64}
											src={review.avatar}
											icon={<UserOutlined />}
										/>
										<div className='user-data'>
											<h6 className='user-name'>{review.name}</h6>
											<span className='user-city'>{review.city}</span>
										</div>
									</div>
									<p className='user-review'>{review.review}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<button
						className={`event-ellipse `}
						onClick={handleNextClick}
					>
						<RightOutlined />
					</button>
				</div>
				<div className='category-point'>
					{reviews.map((_, index) => (
						<div
							key={index}
							className={`point ${index === activeIndex ? 'active' : ''}`}
							onClick={() => handlePointClick(index)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default EventList
