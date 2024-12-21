'use client';

import bootstrap from "bootstrap"
import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CardsPage() {
	const router = useRouter();

	const navigateTo = () => {
		router.push('/dashboard/cards/change');
	};

	return (
		<main className="main">
			<div className="main__items items container-md mt-5">
				<div className="items__header mb-4">
					<h1 className="admin-title">Статистичні картки(4)</h1>
					<button onClick={navigateTo} type="button" className="btn btn-success"><span className="_plus">+</span> Додати</button>
				</div>
				<div className="list-group">
					<button type="button" className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center">
						Картка 1
						<Link href="" className="btn btn-outline-secondary">
							<Image
								src="/images/admin/change.svg"
								alt="icon"
								width={26}
								height={26}
							/>
							Змінити
						</Link>
					</button>
					<button type="button" className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center">
						Картка 3
						<Link href="" className="btn btn-outline-secondary">
							<Image
								src="/images/admin/change.svg"
								alt="icon"
								width={26}
								height={26}
							/>
							Змінити
						</Link>
					</button>
					<button type="button" className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center">
						Картка 3
						<Link href="" className="btn btn-outline-secondary">
							<Image
								src="/images/admin/change.svg"
								alt="icon"
								width={26}
								height={26}
							/>
							Змінити
						</Link>
					</button>
					<button type="button" className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center">
						Картка 4
						<Link href="" className="btn btn-outline-secondary">
							<Image
								src="/images/admin/change.svg"
								alt="icon"
								width={26}
								height={26}
							/>
							Змінити
						</Link>
					</button>
				</div>
			</div>
		</main>
	)
}