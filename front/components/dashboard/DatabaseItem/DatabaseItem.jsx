import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const DatabaseItem = ({ title, link, id, setSelectedId }) => {
	return (
		<div className="list-group-item d-flex justify-content-between align-items-center">
			<Link href="/dashboard/cards">{title}</Link>
			<div className="list-group-item__block d-flex align-items-center gap-3">
				<Link href={link} className="btn btn-outline-secondary">
					<Image
						src="/images/admin/change.svg"
						alt="icon"
						width={26}
						height={26}
					/>
					Змінити
				</Link>
				<button onClick={() => setSelectedId(id)} data-bs-toggle="modal" data-bs-target="#deleteApprove" type="button"  className="btn btn-outline-danger">Видалити</button>
			</div>
		</div>
	);
};

export default DatabaseItem;