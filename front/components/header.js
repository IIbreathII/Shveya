"use client";

import Link from 'next/link';
import Image from 'next/image';
import '$style/Header.css'
import { usePathname } from 'next/navigation';

const Header = () => {

	const location = usePathname();

	return (
		<header className="header">
			<div className="header__container">
				<div className="left">
					<Link href="/info">
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

				<button className="icon-menu">
					<span></span>
				</button>

				<div className="right _menu">
					<nav className="menu">
						{location == '/info'
							? <Link className='menu__link' href="/guides">Навчальний центр</Link>
							: <Link className='menu__link' href="/info">Головна сторінка</Link>
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