import { useRef } from "react";
import "./Questions.css"
import Link from "next/link";

const Questions = () => {
	const menu = useRef();

	return (
		<>
			<Link href="/questions" className="menu-button">?</Link>
			<div ref={menu} id="menu" className="dropdown-menu">
				<span onClick={() => menu.current.classList.toggle("dropdown-active")} id="closeButton" className="close-menu">&times;</span>
				<textarea id="messageText" className="text-box" placeholder="Введіть повідомлення..."></textarea>
				<button id="sendButton" className="send-button">Відправити</button>
			</div>
		</>
	);
};

export default Questions;