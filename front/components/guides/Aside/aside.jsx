import getData from "api";
import "./Aside.css"
import Spoller from "./Spoiler/Spoller";
import { useEffect, useState } from "react";
import Link from "next/link";

const Aside = ({ categories }) => {
	return (
		<aside className="aside">
			{categories.map((category, index) => {
				return category.subcategories.length > 0 &&
					<Spoller key={category.id} disabled={index == 0 ? "spoller-active" : ""} title={category.category}>
						{category.subcategories.map(sub =>
							<Link key={sub.id} href={"/guides/" + sub.subcategory.toLowerCase() + "/" + sub.id} className="spoller__link">{sub.subcategory}</Link>
						)}
					</Spoller>
			}
			)}
		</aside>
	);
};

export default Aside;