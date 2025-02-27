import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "./MediaBlock.css";
import { useLang } from "$component/Context/LangContext";
import { useEffect, useState } from "react";

const MediaBlock = () => {

	const { lang } = useLang();
	const [isMobileView, setIsMobileView] = useState(false);

	const media = [
		{
			link: "https://youtu.be/uPhcQOn7pRg?si=p_iuGRwRJt8zgkEU",
			img: "/images/media/shv.jpg",
			logo: "/images/media/neym.jpg",
			title: `"Швейна рота" - як волонтери одягають українських захисників`,
			author: "НЕЙМОВІРНІ_UA",
		},
		{
			link: "https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066",
			img: "/images/media/dw.png",
			logo: "/images/media/dw_logo.png",
			title: `"Швейна рота": волонтерки шиють "кіберодяг" для поранених`,
			author: "DW.com",
		},
		{
			link: "https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066",
			img: "/images/media/dw.png",
			logo: "/images/media/dw_logo.png",
			title: `"Швейна рота": волонтерки шиють "кіберодяг" для поранених`,
			author: "DW.com",
		},
		{
			link: "https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066",
			img: "/images/media/dw.png",
			logo: "/images/media/dw_logo.png",
			title: `"Швейна рота": волонтерки шиють "кіберодяг" для поранених`,
			author: "DW.com",
		},
		{
			link: "https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066",
			img: "/images/media/dw.png",
			logo: "/images/media/dw_logo.png",
			title: `"Швейна рота": волонтерки шиють "кіберодяг" для поранених`,
			author: "DW.com",
		},
	]

	const media_en = [
		{
			link: "https://youtu.be/uPhcQOn7pRg?si=p_iuGRwRJt8zgkEU",
			img: "/images/media/shv.jpg",
			logo: "/images/media/neym.jpg",
			title: `“Shveina rota” - how volunteers dress Ukrainian defenders`,
			author: "НЕЙМОВІРНІ_UA",
		},
		{
			link: "https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066",
			img: "/images/media/dw.png",
			logo: "/images/media/dw_logo.png",
			title: `“Shveina rota": volunteers sew ‘cyber boots’ for the wounded`,
			author: "DW.com",
		},
		{
			link: "https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066",
			img: "/images/media/dw.png",
			logo: "/images/media/dw_logo.png",
			title: `“Shveina rota": volunteers sew ‘cyber boots’ for the wounded`,
			author: "DW.com",
		},
		{
			link: "https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066",
			img: "/images/media/dw.png",
			logo: "/images/media/dw_logo.png",
			title: `“Shveina rota": volunteers sew ‘cyber boots’ for the wounded`,
			author: "DW.com",
		},
		{
			link: "https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066",
			img: "/images/media/dw.png",
			logo: "/images/media/dw_logo.png",
			title: `“Shveina rota": volunteers sew ‘cyber boots’ for the wounded`,
			author: "DW.com",
		},
	]

	useEffect(() => {
		if (window != undefined) {
			const checkViewport = () => {
				const isMobile = window.innerWidth <= 992;
				setIsMobileView((prev) => prev !== isMobile ? isMobile : prev);
			};

			window.addEventListener("resize", checkViewport);
			checkViewport();

			return () => window.removeEventListener("resize", checkViewport);
		}
	}, []);

	return (
		<div className="main__media media">
			<div className="media-background">
				<Swiper
					modules={[Pagination, Navigation]}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					loop={true}
					allowTouchMove={false}
					pagination={{
						el: ".media-pagination",
						type: "bullets",
						clickable: true,
						bulletClass: "swiper-bullet",
						bulletActiveClass: "bullet-active",
					}}
				>
					{media.map((item, index) => (
						<SwiperSlide key={index} className="media-background__slide">
							<div className="media__background story__background">
								<Image src={item.img} alt="media image" width={1920} height={1080} className="media-img" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="media__container">
				<Swiper
					key={isMobileView ? "mobile" : "desktop"}
					modules={[Pagination, Navigation, EffectCoverflow]}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					effect="coverflow"
					centeredSlides={true}
					loop={true}
					pagination={{
						el: ".media-pagination",
						type: "bullets",
						clickable: true,
						bulletClass: "swiper-bullet",
						bulletActiveClass: "bullet-active",
					}}
					breakpoints={{
						992: {
							effect: "coverflow",
							slidesPerView: 2,
							coverflowEffect: {
								rotate: 2,
								stretch: 0,
								depth: 250,
								modifier: 1,
								slideShadows: true,
							}
						},
						0: {
							effect: "slide",
							slidesPerView: 1,
							centeredSlides: false,
							spaceBetween: 10
						},
					}}
				>
					{lang == "ua"
						? <>{media.map((item, index) => (
							<SwiperSlide key={index} className="media__slide">
								<Link href={item.link} target="_blank" className="media__story story">
									<div className="story__background">
										<Image src={item.img} alt="media image" width={1920} height={1080} className="story-img" />
									</div>
									<div className="story__body">
										<div className="story__title">{item.title}</div>
										<div className="story__logo">
											<Image src={item.logo} alt="logo" width={48} height={48} className="story-logo _round" />
											{item.author}
										</div>
									</div>
								</Link>
							</SwiperSlide>
						))}</>
						: <>{media_en.map((item, index) => (
							<SwiperSlide key={index} className="media__slide">
								<Link href={item.link} target="_blank" className="media__story story">
									<div className="story__background">
										<Image src={item.img} alt="media image" width={1920} height={1080} className="story-img" />
									</div>
									<div className="story__body">
										<div className="story__title">{item.title}</div>
										<div className="story__logo">
											<Image src={item.logo} alt="logo" width={48} height={48} className="story-logo _round" />
											{item.author}
										</div>
									</div>
								</Link>
							</SwiperSlide>
						))}</>
					}

				</Swiper>
				<div className="swiper-buttons__container">
					<div className="swiper-button-prev">
						<div className="next-img">
							<Image
								src="/images/swiper/arrow-back.png"
								height={40}
								width={29}
								alt="icon-prev"
							/>
						</div>
					</div>
					<div className="swiper-button-next">
						<Image
							src="/images/swiper/arrow-forward.png"
							height={40}
							width={29}
							alt="icon-next"
						/>
					</div>
				</div>
				<div className="swiper-pagination media-pagination"></div>
			</div>
		</div>
	);
};

export default MediaBlock;
