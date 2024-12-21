"use client";

import Link from 'next/link';
import Image from 'next/image';
import '$style/Header.css'
import { usePathname } from 'next/navigation';

const Header = () => {

	const location = usePathname();

	function openMenu(e) {
		e.stopPropagation()
		document.querySelector("._menu").classList.toggle("active")
		document.body.classList.toggle("menu-active")
		if (e.target.classList.contains("icon-menu")) {
			e.target.classList.toggle("btn-active")
		} else {
			e.target.closest(".icon-menu").classList.toggle("btn-active")
		}
	}

	return (
		<header className="header">
			<div className="header__container">
				<div className="left">
					<Link href="/">
						<div className="logo_shveya">
							<Image
								src="/images/logo.png"
								alt="Logo"
								width={196}
								height={61}
								layout="intrinsic"
								className="logo-img"
								priority
							/>
						</div>
					</Link>
				</div>

				<button onClick={openMenu} className="icon-menu">
					<span></span>
				</button>

				<div className="right _menu">
					<nav className="menu">
						{location == '/'
							? <Link className='menu__link' href="/guides">Навчальний центр</Link>
							: <Link className='menu__link' href="/">Головна сторінка</Link>
						}
					</nav>
					<div className="menulang">
						<button>EN</button>
						<div className="_line"></div>
						<button>UK</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;