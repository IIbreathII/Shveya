import { useEffect, useRef } from "react";
import Image from "next/image";
import './Spoller.css';

const Spoller = ({ children, disabled, title, activeLink, setActiveLink }) => {
	const spoller = useRef();
	const spollerBody = useRef();

	useEffect(() => {
		// Проверяем, если у спойлера есть класс "spoller-active", то устанавливаем высоту
		if (spoller.current?.classList.contains("spoller-active")) {
			spollerBody.current.style.height = "auto";
		} else {
			spollerBody.current.style.height = "0px";
		}
	}, []); // Срабатывает только один раз при монтировании

	function toggleSpoller() {
		spoller.current.classList.toggle("spoller-active");
		if (spoller.current.classList.contains("spoller-active")) {
			expandHeight();
		} else {
			collapseHeight();
		}
	}

	function expandHeight() {
		const element = spollerBody.current;
		if (!element) return;

		element.style.height = `${element.scrollHeight}px`;
		element.style.transition = `height 500ms ease`;

		element.addEventListener(
			"transitionend",
			() => {
				element.style.height = "auto";
			},
			{ once: true }
		);
	}

	function collapseHeight() {
		const element = spollerBody.current;
		if (!element) return;

		element.style.height = `${element.scrollHeight}px`;
		element.style.transition = `height 500ms ease`;

		requestAnimationFrame(() => {
			element.style.height = "0px";
		});
	}

	return (
		<div ref={spoller} className={`spoller ${disabled}`}>
			<button onClick={toggleSpoller} className="spoller__button">
				<h2 className="spoller__title">{title}</h2>
				<div className="spoller__icon">
					<Image
						src="/images/guides/arrow-down.svg"
						alt="приклад"
						width={800}
						height={436}
						priority
					/>
				</div>
			</button>
			<ul ref={spollerBody} className="spoller__body">
				{children}
			</ul>
		</div>
	);
};

export default Spoller;
