import "./Aside.css"
import Spoller from "./Spoiler/Spoller";

const Aside = () => {
	return (
		<aside className="aside">
			<Spoller disabled={"spoller-active"} title="Кіберодяг">
				<li className="spoller__link">Кібертруси </li>
				<li className="spoller__link">Труси на зав'язках</li>
				<li className="spoller__link">Бавовнянки</li>
				<li className="spoller__link">Кібершорти</li>
				<li className="spoller__link">Кіберштани </li>
				<li className="spoller__link">Кіберфутболка </li>
				<li className="spoller__link">Кіберкофта</li>
				<li className="spoller__link">Кіберхуді</li>
				<li className="spoller__link">Подушка-кісточка </li>
				<li className="spoller__link">Бандаж</li>
				<li className="spoller__link">Чохол на апарат</li>
				<li className="spoller__link">Адаптивні шкарпетки</li>
				<li className="spoller__link">Торбинка українського воїна</li>
			</Spoller>
			<Spoller disabled={""} title="Бронеодяг">
				<li className="spoller__link">Бронетруси</li>
				<li className="spoller__link">Бронеубакс</li>
				<li className="spoller__link">Бронефутболки</li>
				<li className="spoller__link">Маскувальний костюм</li>
				<li className="spoller__link">Дощовики</li>
				<li className="spoller__link">Піддупники</li>
			</Spoller>
		</aside>
	);
};

export default Aside;