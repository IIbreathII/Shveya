import { useEffect, useRef } from "react";
import Image from "next/image";
import './Spoller.css'

const Spoller = ({ children, disabled, title }) => {
	const spoller = useRef();
	const spollerBody = useRef();

	function toggleSpoller(e) {
		spoller.current.classList.toggle("spoller-active");
		if (spoller.current.classList.contains("spoller-active")) {
			expandHeight(".spoller__body", 500)
		} else {
			collapseHeight(".spoller__body", 500)
		}
	}

	useEffect(() => {
		if (spoller.current.classList.contains("spoller-active")) {
			expandHeight(".spoller__body", 500)
		} else {
			collapseHeight(".spoller__body", 500)
		}
		console.log(1111);
	}, [])

	function expandHeight(selector, duration) {
		const element = spollerBody.current;
		if (!element) return;

		element.style.height = `${element.offsetHeight}px`;

		element.style.transition = `height ${duration}ms ease`;

		const contentHeight = element.scrollHeight;

		requestAnimationFrame(() => {
			element.style.height = `${contentHeight}px`;
		});

		element.addEventListener('transitionend', () => {
			element.style.height = 'auto';
		}, { once: true });
	}

	function collapseHeight(selector, duration) {
		const element = spollerBody.current;
		if (!element) return;

		const currentHeight = element.scrollHeight;
		element.style.height = `${currentHeight}px`;

		element.style.transition = `height ${duration}ms ease`;

		requestAnimationFrame(() => {
			element.style.height = '0px';
		});

		element.addEventListener('transitionend', () => {
			element.style.height = '0px';
		}, { once: true });
	}


	return (
		<div ref={spoller} className={"spoller " + disabled}>
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