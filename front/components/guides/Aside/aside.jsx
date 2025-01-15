import getData from "api";
import "./Aside.css"
import Spoller from "./Spoiler/Spoller";
import { useEffect, useState } from "react";
import Link from "next/link";

const Aside = ({ categories }) => {
	return (
		<aside className="aside">
			{categories.map((category, index) =>
				<Spoller key={category.id} disabled={index == 0 ? "spoller-active" : ""} title={category.categoryname}>
					{category.subcategories.map(sub =>
						<Link key={sub.id} href={"/guides/" + category.id + "/" + sub.id} className="spoller__link">{sub.subcategory_name}</Link>
					)}
				</Spoller>
			)}
		</aside>
	);
};

export default Aside;