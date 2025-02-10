import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./Aside.css";
import Spoller from "./Spoiler/Spoller";
import Link from "next/link";

const Aside = ({ categories }) => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/");
    const urlId = pathSegments[pathSegments.length - 1]; // Отримуємо id із URL
    const [activeLink, setActiveLink] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (urlId && !isNaN(urlId)) {
            setActiveLink(urlId); // Якщо є id в URL — використовуємо його
        } else if (!activeLink && categories.length > 0) {
            for (const category of categories) {
                if (category.subcategories.length > 0) {
                    setActiveLink(category.subcategories[0].id); // Якщо немає id, беремо перший
                    break;
                }
            }
        }
    }, [urlId, categories]);

    return (
        <aside className={`aside ${isOpen ? "open" : "closed"}`}>
            <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                <div className={`toggle-icon ${isOpen ? "rotated" : ""}`}></div>
            </button>

            {categories.map((category, index) => (
                category.subcategories.length > 0 && (
                    <Spoller 
                        key={category.id} 
                        disabled={index === 0 ? "spoller-active" : ""} 
                        title={category.category}
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    >
                        {category.subcategories.map((sub) => (
                            <Link 
                                key={sub.id} 
                                href={`/guides/${sub.subcategory.toLowerCase()}/${sub.id}`} 
                                className={`spoller__link ${activeLink == sub.id ? "active" : ""}`}
                                onClick={() => setActiveLink(sub.id)}
                            >
                                {sub.subcategory}
                                {activeLink == sub.id && <span className="indicator"></span>}
                            </Link>
                        ))}
                    </Spoller>
                )
            ))}
        </aside>
    );
};

export default Aside;
