import Image from "next/image";
import Link from "next/link";
import "$style/Footer.css"
import { useLang } from "./Context/LangContext";
import { useEffect, useState } from "react";
import { getData } from "api";
import { Button } from "react-bootstrap";
import { useScrollbarWidth } from "$hooks/useScrollbarWidth";

const Footer = () => {
	const [mediaLinks, setMediaLinks] = useState([]);
	const [categories, setCategories] = useState([]);
	const { lang } = useLang();

	const scrollbarWidth = useScrollbarWidth();

	// Открытие окна
	function openPopup() {
		document.body.classList.add("menu-active");
		document.querySelector(".wrapper").style.paddingRight = scrollbarWidth + "px";
		document.querySelector(".header").style.paddingRight = scrollbarWidth + "px";
	}

	useEffect(() => {
		getData("medialinks", setMediaLinks)

		getData("categories/all", setCategories)
	}, [])

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
						{lang == "ua" ? "Швейна рота" : "Shveina rota"}
					</div>
					<div className="footer__columns">
						<div className="footer__column column-footer">
							<div className="column-footer__title">{lang == "ua" ? "Соц мережі" : "Social media"}</div>
							<div className="column-footer__body">
								{mediaLinks.map(link =>
									<div key={link.id} className="column-footer__row">
										<Link target="_blank" className="column-footer__link" href={link.url}>
											<Image
												src={'http://drive.google.com/uc?export=view&id=' + link.path}
												alt="logo"
												width={35}
												height={35}
											/>
											{link.title}
										</Link>
									</div>
								)}
							</div>
						</div>
						<div className="footer__column column-footer">
							<div className="column-footer__title">{lang == "ua" ? "Категорії одягу" : "Categories"}</div>
							<div className="column-footer__body">
								{categories.length > 0 &&
									<>
										{categories.map(cat =>
											<div key={cat.id}>
												{cat.subcategories.length > 0 &&
													<div className="column-footer__row">
														<Link className="column-footer__link" href={`/guides/${cat.subcategories[0].subcategory.toLowerCase()}/${cat.subcategories[0].id}`}>
															{lang == "ua" ? <>{cat.category}</> : <>{cat.category_en}</>}
														</Link>
													</div>
												}
											</div>
										)}
									</>
								}
							</div>
						</div>
						<div className="footer__column column-footer">
							<div className="column-footer__title">{lang == "ua" ? "Спільнота" : "Community"}</div>
							<div className="column-footer__body">
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/guides">
										{lang == "ua" ? "Навчальні матеріали" : "Training center"}
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/about">
										{lang == "ua" ? "Про нас" : "About us"}
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/questions">
										{lang == "ua" ? "Відповіді на питання" : "Answers to questions"}
									</Link>
								</div>
								<div className="column-footer__row">
									<Button onClick={openPopup} className="column-footer__link">
										{lang == "ua" ? "Підтримати донатом" : "Support with a donation"}
									</Button>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/dashboard">
										{lang == "ua" ? "Адмін панель" : "Admin panel"}
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