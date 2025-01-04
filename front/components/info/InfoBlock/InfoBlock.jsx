import "./InfoBlock.css"
import Image from 'next/image';
import { Pagination, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

const InfoBlock = () => {
	const blockAnitmation = {
		hidden: {
			y: 50,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	const slides = [
		{
			id: 1,
			img: '/images/iconshveya.png',
			title: 'Швейна рота',
			text: 'Це волонтерський проєкт, який займається пошиттям адаптивного одягу для поранених захисників, захисниць України, а також цивільних, які постраждали внаслідок російської агресії. Наші зусилля спрямовані на забезпечення поранених якісним, комфортним і функціональним одягом, який допомагає зберегти гідність і полегшити реабілітацію на всіх етапах від евакуації до одужання.'
		},
		{
			id: 2,
			img: '/images/monobanka.png',
			title: 'Підтримати нас донатом',
			text: 'Це волонтерський проєкт, який займається пошиттям адаптивного одягу для поранених захисників, захисниць України, а також цивільних, які постраждали внаслідок російської агресії. Наші зусилля спрямовані на забезпечення поранених якісним, комфортним і функціональним одягом, який допомагає зберегти гідність і полегшити реабілітацію на всіх етапах від евакуації до одужання.'
		},
		{
			id: 3,
			img: '/images/iconshveya.png',
			title: 'Швейна рота',
			text: 'Це волонтерський проєкт, який займається пошиттям адаптивного одягу для поранених захисників, захисниць України, а також цивільних, які постраждали внаслідок російської агресії. Наші зусилля спрямовані на забезпечення поранених якісним, комфортним і функціональним одягом, який допомагає зберегти гідність і полегшити реабілітацію на всіх етапах від евакуації до одужання.'
		},
	]

	return (
		<div className="infobox">
			<div className="infobox__container">
				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{
						el: ".swiper-pagination",
						type: "bullets",
						clickable: true,
						bulletClass: "swiper-bullet",
						bulletActiveClass: "bullet-active",
					}}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					className="swiper__container"
				>
					{slides.map(slide =>
						<SwiperSlide key={slide.id}>
							<div className="infobox__slide">
								<div className="left">
									<div className="icon_shveya">
										<Image
											src={slide.img}
											alt="logo"
											width={356}
											height={61}
											className="logo-img"
											priority
										/>
									</div>
								</div>
								<motion.div
									className="right"
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
								>
									<motion.h1 custom={1} variants={blockAnitmation}>{slide.title}</motion.h1>
									<motion.h2 custom={1.3} variants={blockAnitmation}>
										{slide.text}
									</motion.h2>
								</motion.div>
							</div>
						</SwiperSlide>
					)}
				</Swiper>
				<div className="swiper-pagination"></div>
			</div>
		</div>
	);
};

export default InfoBlock;