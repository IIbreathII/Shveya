import { motion } from "framer-motion"
import Card, { MCard } from "./Card/Card";
import "./CardBlock.css"
import Image from "next/image";

const CardBlock = () => {

	const cards = [
		{
			id: 1,
			img: 'url/img',
			title: 'Створено одягу',
			number: '10000+'
		},
		{
			id: 2,
			img: 'url/img',
			title: 'Створено одягу',
			number: '10000+'
		},
		{
			id: 3,
			img: 'url/img',
			title: 'Створено одягу',
			number: '10000+'
		},
		{
			id: 4,
			img: 'url/img',
			title: 'Створено одягу',
			number: '10000+'
		},
		{
			id: 5,
			img: 'url/img',
			title: 'Створено одягу',
			number: '10000+'
		},
	]

	return (
		<div className="cardbox">
			<div
				className="cardbox__container"
			>
				{cards.map(card => 
					<Card key={card.id} title={card.title} number={card.number} />
				)}
			</div>
		</div>
	);
};

export default CardBlock;