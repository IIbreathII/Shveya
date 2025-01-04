import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef } from "react";



const Card = forwardRef(({ title, number, img }, ref) => {

	const blockAnitmation = {
		hidden: {
			y: 70,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	return (
		<motion.div initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0, once: true }}
			ref={ref}
			className="card"

			custom={1}
			variants={blockAnitmation}
		>
			<div className="card__top">
				<div className="iconshveya">
					<Image
						src="/images/short1.png"
						alt="logo"
						width={356}
						height={61}
						className="logo-img"
						priority
					/>
				</div>
			</div>
			<div className="card__bottom">
				<h1 className="card__title">{title}</h1>
				<p>{number}</p>
			</div>
		</motion.div>
	);
});

export default Card;

export const MCard = motion(Card)