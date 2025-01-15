import Link from "next/link";
import ManagementElement from "../ManagementElement/ManagementElement";

const Management = () => {
	return (
		<>
			<h1 className="admin__title admin-title">Керування елементами</h1>
			<div className="mt-3">
				<ul className="list-group">
					<ManagementElement title="Слайди" number="3" addLink="dashboard/slides/add" link="dashboard/slides" />
					<ManagementElement title="Статистичні картки" number="4" addLink="dashboard/cards/add" link="dashboard/cards" />
					<ManagementElement title="Медіа посилання" number="2" addLink="dashboard/media/add" link="dashboard/media" />
					<ManagementElement title="Партнери" number="4" addLink="dashboard/partners/add" link="dashboard/partners" />
					<ManagementElement title="Маркери на мапі" number="5" addLink="dashboard/markers/add" link="dashboard/markers" />
					<ManagementElement title="Категорії кібер-одягу" number="2" addLink="dashboard/categories/add" link="dashboard/categories" />
					<ManagementElement title="Майстер-класи" number="18" addLink="dashboard/masterclass/add" link="dashboard/masterclass" />
				</ul>
			</div>
		</>
	);
};

export default Management;