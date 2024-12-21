import Link from "next/link";

export default function AdminLayout({ children }) {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-lg">
						<Link className="navbar-brand" href="/dashboard">Адміністратор</Link>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="/">Повернутися до сайту</a>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Керування елементами сторінки
									</a>
									<ul className="dropdown-menu">
										<li><Link className="dropdown-item" href="/dashboard/cards">Статистичні картки</Link></li>
										<li><a className="dropdown-item" href="#">Медіа посилання</a></li>
										<li><a className="dropdown-item" href="#">Партнери</a></li>
										<li><a className="dropdown-item" href="#">Посилання на мапу</a></li>
										<li><a className="dropdown-item" href="#">Категорії кібер-одягу</a></li>
										<li><a className="dropdown-item" href="#">Навчальні матеріали</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			{children}
		</>
	);
}