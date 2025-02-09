import Image from "next/image";
import Link from "next/link";
import "$style/Footer.css"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="_background"></div>
			<div className="footer__wrapper">
				<div className="footer__container">
					<div className="footer__title">
						<Image
							src="/images/headerlogo.png"
							alt="logo"
							width={180}
							height={180}
						/>
						Швейна рота
					</div>
					<div className="footer__columns">
						<div className="footer__column column-footer">
							<div className="column-footer__title">Соц мережі</div>
							<div className="column-footer__body">
								<div className="column-footer__row">
									<Link className="column-footer__link" href="t.me/shveina_rota">
										<Image
											src="/images/footer/telegram.png"
											alt="logo"
											width={35}
											height={35}
										/>
										Telegram
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="t.me/shveina_rota">
										<Image
											src="/images/footer/instagram.png"
											alt="logo"
											width={35}
											height={35}
										/>
										Instagram
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="t.me/shveina_rota">
										<Image
											src="/images/footer/facebook.png"
											alt="logo"
											width={35}
											height={35}
										/>
										Facebook
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="https://www.facebook.com/p/%D0%A8%D0%B2%D0%B5%D0%B9%D0%BD%D0%B0-%D1%80%D0%BE%D1%82%D0%B0-100083407995435/?locale=uk_UA">
										<Image
											src="/images/footer/youtube.png"
											alt="logo"
											width={35}
											height={35}
										/>
										Youtube
									</Link>
								</div>
							</div>
						</div>
						<div className="footer__column column-footer">
							<div className="column-footer__title">Категорії одягу</div>
							<div className="column-footer__body">
								<div className="column-footer__row">
									<Link className="column-footer__link" href="#">
										Кіберодяг
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="#">
										Бронеодяг
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="#">
										Аксесуари
									</Link>
								</div>
							</div>
						</div>
						<div className="footer__column column-footer">
							<div className="column-footer__title">Спільнота</div>
							<div className="column-footer__body">
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/guides">
										Навчальні матеріали
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/about">
										Про нас
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/questions">
										Відповіді на питання
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="#">
										Підтримати донатом
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__bottom">

				</div>
			</div>
		</footer>
	);
};

export default Footer;