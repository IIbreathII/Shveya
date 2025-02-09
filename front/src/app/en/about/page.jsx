"use client";

import Image from "next/image";
import Link from "next/link";
import "$style/AboutPage.css"

export default function AboutPage() {

	return (
		<main className='main'>
			<div className="main__heading heading">
				<div className="_background"></div>
				<div className="heading__container">
					<h1 className='heading__title _main-title'>
						Що таке Швейна рота?
					</h1>
					<h3 className="heading__text">
						Це <span className="_italic">волонтерський проєкт</span>, який займається пошиттям <span className="_italic">адаптивного одягу</span> для поранених захисників, захисниць України, а також цивільних, які постраждали внаслідок російської агресії. Наші зусилля спрямовані на забезпечення поранених якісним, комфортним і функціональним одягом, який допомагає зберегти гідність і полегшити реабілітацію на всіх етапах від евакуації до одужання.
					</h3>
				</div>
			</div>
			<div className="main__team team">
				<div className="team__container">
					<div className="team__title"><h1 className="_main-title">Наша команда</h1></div>
					<div className="team__members">
						<div className="team__member member">
							<div className="member__image">
								<Image
									src="/images/about/user.png"
									alt="logo"
									width={182}
									height={182}
									className="member-img"
								/>
							</div>
							<div className="member__body">
								<div className="member__name">Марія Іванівна</div>
								<div className="member__post">Засновниця</div>
							</div>
						</div>
						<div className="team__member member">
							<div className="member__image">
								<Image
									src="/images/about/user.png"
									alt="logo"
									width={182}
									height={182}
									className="member-img"
								/>
							</div>
							<div className="member__body">
								<div className="member__name">Марія Іванівна</div>
								<div className="member__post">Засновниця</div>
							</div>
						</div>
						<div className="team__member member">
							<div className="member__image">
								<Image
									src="/images/about/user.png"
									alt="logo"
									width={182}
									height={182}
									className="member-img"
								/>
							</div>
							<div className="member__body">
								<div className="member__name">Марія Іванівна</div>
								<div className="member__post">Засновниця</div>
							</div>
						</div>
						<div className="team__member member">
							<div className="member__image">
								<Image
									src="/images/about/user.png"
									alt="logo"
									width={182}
									height={182}
									className="member-img"
								/>
							</div>
							<div className="member__body">
								<div className="member__name">Марія Іванівна</div>
								<div className="member__post">Засновниця</div>
							</div>
						</div>
						<div className="team__member member">
							<div className="member__image">
								<Image
									src="/images/about/user.png"
									alt="logo"
									width={182}
									height={182}
									className="member-img"
								/>
							</div>
							<div className="member__body">
								<div className="member__name">Марія Іванівна</div>
								<div className="member__post">Засновниця</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}