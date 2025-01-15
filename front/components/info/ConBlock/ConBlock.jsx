import { useRef } from "react";
import "./ConBlock.css"
import Image from "next/image";

const ConBlock = () => {
	const popup = useRef()

	// Открытие окна 
	function openPopup() {
		document.body.classList.add("menu-active")
		popup.current.style.display = 'block';
	};

	// Закрытие окна при нажатии на крестик 
	function closePopup() {
		document.body.classList.remove("menu-active")
		popup.current.style.display = 'none';
	};

	window.addEventListener('click', function (event) {
		if (event.target === popup) {
			document.body.classList.remove("menu-active")
			popup.current.style.display = 'none';
		}
	});

	return (
		<div className="conboxcontainer">
			<div className="conbox">
				<a href="" className="left">
					<h1>Доєднатися до пошиття</h1>
				</a>
				<div className="column"></div>
				<button onClick={openPopup} id="openBtn" className="right"><span>Підтримуй нас Донатом</span></button>
				<div ref={popup} id="popup" className="popup">
					<div className="popup-content">
						<span onClick={closePopup} id="closeBtn" className="popup__close">&times;</span>
						<div className="paypal _paypal">
							<div className="paypalimg">
								<Image
									src="/images/paypal.jpg"
									alt="logo"
									width={85}
									height={85}
									className="logo-img"
								/>
							</div>
							marishka.polo@gmail.com
						</div>
						<a href="https://send.monobank.ua/jar/5VV7zhDJGY"
							className="paypal _paypal">
							<div className="paypalimg">
							<Image
									src="/images/mono.jpg"
									alt="logo"
									width={85}
									height={85}
									className="logo-img"
								/>
							</div>
							5375 4112 0381 7304
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConBlock;