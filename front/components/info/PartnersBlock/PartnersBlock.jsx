import "./PartnersBlock.css"
import Image from "next/image";

const PartnersBlock = () => {
	const partners = [
		{
			id: 1,
			url: '/images/partners/rebel.png'
		},
		{
			id: 2,
			url: '/images/partners/sb-ukraine.png'
		},
		{
			id: 3,
			url: '/images/partners/npg.png'
		},
		{
			id: 4,
			url: '/images/partners/shafa.png'
		},
		{
			id: 5,
			url: '/images/partners/unnamed.png'
		},
	]

	return (
		<div className="partners">
			<div className="partners__container">
				<h1 className="partners__title _main-title">Наші партнери</h1>
				<div className="partners__box">
					{partners.map(partner =>
						<div key={partner.id} className="partners__partner">
							<img src={partner.url} alt="img"/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PartnersBlock;