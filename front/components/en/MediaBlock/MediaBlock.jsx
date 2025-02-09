import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "./MediaBlock.css"

const MediaBlock = () => {
	return (
		<div className="main__media media">
			<Swiper
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={2}
				loop
				pagination={{
					el: ".media-pagination",
					type: "bullets",
					clickable: true,
					bulletClass: "swiper-bullet",
					bulletActiveClass: "bullet-active",
				}}
				breakpoints={{
					360: {
					  slidesPerView: 1,
					},
					992: {
						slidesPerView: 2,
					}
				  }}
				className="media__container"
			>
				<SwiperSlide>
					<Link href="https://youtu.be/uPhcQOn7pRg?si=p_iuGRwRJt8zgkEU" target="_blank" className="media__story story">
						<div className="story__background">
							<Image
								src="/images/media/shv.jpg"
								alt="logo"
								width={1920}
								height={1080}
								className="story-img"
							/>
						</div>
						<div className="story__body">
							<div className="story__title">"Швейна рота" - як волонтери одягають українських захисників</div>
							<div className="story__logo">
								<Image
									src="/images/media/neym.jpg"
									alt="logo"
									width={48}
									height={48}
									className="story-logo _round"
								/>
								НЕЙМОВІРНІ_UA
							</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066" target="_blank" className="media__story story">
						<div className="story__background">
							<Image
								src="/images/media/dw.png"
								alt="logo"
								width={1920}
								height={1080}
								className="story-img"
							/>
						</div>
						<div className="story__body">
							<div className="story__title">"Швейна рота": волонтерки шиють "кіберодяг" для поранених</div>
							<div className="story__logo">
								<Image
									src="/images/media/dw_logo.png"
									alt="logo"
									width={48}
									height={48}
									className="story-logo"
								/>
								DW.com
							</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066" target="_blank" className="media__story story">
						<div className="story__background">
							<Image
								src="/images/media/dw.png"
								alt="logo"
								width={1920}
								height={1080}
								className="story-img"
							/>
						</div>
						<div className="story__body">
							<div className="story__title">"Швейна рота": волонтерки шиють "кіберодяг" для поранених</div>
							<div className="story__logo">
								<Image
									src="/images/media/dw_logo.png"
									alt="logo"
									width={48}
									height={48}
									className="story-logo"
								/>
								DW.com
							</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066" target="_blank" className="media__story story">
						<div className="story__background">
							<Image
								src="/images/media/dw.png"
								alt="logo"
								width={1920}
								height={1080}
								className="story-img"
							/>
						</div>
						<div className="story__body">
							<div className="story__title">"Швейна рота": волонтерки шиють "кіберодяг" для поранених</div>
							<div className="story__logo">
								<Image
									src="/images/media/dw_logo.png"
									alt="logo"
									width={48}
									height={48}
									className="story-logo"
								/>
								DW.com
							</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066" target="_blank" className="media__story story">
						<div className="story__background">
							<Image
								src="/images/media/dw.png"
								alt="logo"
								width={1920}
								height={1080}
								className="story-img"
							/>
						</div>
						<div className="story__body">
							<div className="story__title">"Швейна рота": волонтерки шиють "кіберодяг" для поранених</div>
							<div className="story__logo">
								<Image
									src="/images/media/dw_logo.png"
									alt="logo"
									width={48}
									height={48}
									className="story-logo"
								/>
								DW.com
							</div>
						</div>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="https://www.dw.com/uk/svejna-rota-ak-volonterki-siut-kiberodag-dla-poranenih-vijskovih-19072023/video-66287066" target="_blank" className="media__story story">
						<div className="story__background">
							<Image
								src="/images/media/dw.png"
								alt="logo"
								width={1920}
								height={1080}
								className="story-img"
							/>
						</div>
						<div className="story__body">
							<div className="story__title">"Швейна рота": волонтерки шиють "кіберодяг" для поранених</div>
							<div className="story__logo">
								<Image
									src="/images/media/dw_logo.png"
									alt="logo"
									width={48}
									height={48}
									className="story-logo"
								/>
								DW.com
							</div>
						</div>
					</Link>
				</SwiperSlide>
			</Swiper>
			<div className="swiper-pagination media-pagination"></div>
		</div>
	);
};

export default MediaBlock;