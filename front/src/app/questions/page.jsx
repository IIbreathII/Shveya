"use client";

import Spoller from "$component/guides/Aside/Spoiler/Spoller";
import "$style/questions/Questions.css"


export default function InfoPage() {

	return (
		<main className='main'>
			<div className="main__container">
				<div className="main__title _main-title">Відповіді на часті запитання</div>
				<div className="main__questions">
					<Spoller disabled={"modified"} title="Запитання під номером 1?">
						<li className="spoller__link link-modified">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc est, sollicitudin a dui sit amet, posuere congue ligula. Donec non luctus nibh. Curabitur malesuada lobortis tempor. Nulla viverra commodo urna, nec mollis nisi fermentum ut. Sed odio justo, molestie euismod interdum id</li>
					</Spoller>
					<Spoller disabled={"modified"} title="Запитання під номером 2?">
						<li className="spoller__link link-modified">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc est, sollicitudin a dui sit amet, posuere congue ligula. Donec non luctus nibh. Curabitur malesuada lobortis tempor. Nulla viverra commodo urna, nec mollis nisi fermentum ut. Sed odio justo, molestie euismod interdum id</li>
					</Spoller>
					<Spoller disabled={"modified"} title="Запитання під номером 3?">
						<li className="spoller__link link-modified">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc est, sollicitudin a dui sit amet, posuere congue ligula. Donec non luctus nibh. Curabitur malesuada lobortis tempor. Nulla viverra commodo urna, nec mollis nisi fermentum ut. Sed odio justo, molestie euismod interdum id</li>
					</Spoller>
					<Spoller disabled={"modified"} title="Запитання під номером 4?">
						<li className="spoller__link link-modified">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc est, sollicitudin a dui sit amet, posuere congue ligula. Donec non luctus nibh. Curabitur malesuada lobortis tempor. Nulla viverra commodo urna, nec mollis nisi fermentum ut. Sed odio justo, molestie euismod interdum id</li>
					</Spoller>
				</div>
			</div>
		</main>
	);
}