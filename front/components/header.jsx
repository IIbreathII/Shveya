"use client";

import Link from 'next/link';
import Image from 'next/image';
import '$style/Header.css'
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

const Header = () => {

	const location = usePathname();
	const menuIcon = useRef()

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

	function closeMenu(e) {
		document.querySelector("._menu").classList.remove("active")
		menuIcon.current.classList.remove("btn-active")
		document.body.classList.remove("menu-active")
	}

	return (
		<header className="header">
			<div className="header__container">
				<div className="left">
					<Link onClick={closeMenu} href="/">
						<div className="logo_shveya">
							<Image
								src="/images/logo.png"
								alt="Logo"
								width={196}
								height={61}
								className="logo-img"
								priority
							/>
						</div>
					</Link>
				</div>

				<button ref={menuIcon} onClick={openMenu} className="icon-menu">
					<span></span>
				</button>

				<div className="right _menu">
					<nav className="menu">
						{location == '/'
							? <>
								<Link onClick={closeMenu} className='menu__link link-active' href="/">Головна сторінка</Link>
								<Link onClick={closeMenu} className='menu__link' href="/guides">Навчальний центр</Link>
							</>
							: <>
								<Link onClick={closeMenu} className='menu__link' href="/">Головна сторінка</Link>
								<Link onClick={closeMenu} className='menu__link link-active' href="/guides">Навчальний центр</Link>
							</>
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