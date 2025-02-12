import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./Aside.css";
import "./Menu_Links.css";
import "./Aside_spoiler.css";
import Spoller from "./Spoiler/Spoller";
import Link from "next/link";

const Aside = ({ categories }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const urlId = pathSegments[pathSegments.length - 1];

  const [activeLink, setActiveLink] = useState(null);
  const [openCategories, setOpenCategories] = useState(new Set());
  const [isOpen, setIsOpen] = useState(true);
  const [isNonActiveHovered, setIsNonActiveHovered] = useState(false);

  useEffect(() => {
    let newActiveLink = null;
    if (urlId && !isNaN(urlId)) {
      newActiveLink = urlId;
    } else if (categories.length > 0) {
      for (const category of categories) {
        if (category.subcategories.length > 0) {
          newActiveLink = category.subcategories[0].id;
          break;
        }
      }
    }
    setActiveLink(newActiveLink);
  }, [urlId, categories]);

  useEffect(() => {
    if (activeLink) {
      let newOpenCategories = new Set();
      for (const category of categories) {
        if (category.subcategories.some((sub) => sub.id == activeLink)) {
          newOpenCategories.add(category.id);
          break;
        }
      }
      setOpenCategories(newOpenCategories);
    }
  }, [activeLink, categories]);

  const toggleCategory = (categoryId) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <aside
      className={`aside ${isOpen ? "open" : "closed"} ${
        isNonActiveHovered ? "nonActiveHovered" : ""
      }`}
    >
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <div className={`toggle-icon ${isOpen ? "rotated" : ""}`}></div>
      </button>

      {categories.map((category) => {
        const isActiveCategory = category.subcategories.some(
          (sub) => sub.id == activeLink
        );

        return category.subcategories.length > 0 ? (
          <Spoller
            key={category.id}
            title={category.category}
            isActiveCategory={isActiveCategory}
          >
            {category.subcategories.map((sub) => (
              <Link
                key={sub.id}
                href={`/guides/${sub.subcategory.toLowerCase()}/${sub.id}`}
                className={`spoller__link ${activeLink == sub.id ? "active" : ""}`}
                onClick={() => setActiveLink(sub.id)}
                onMouseEnter={() => {
                  if (activeLink !== sub.id) {
                    setIsNonActiveHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (activeLink !== sub.id) {
                    setIsNonActiveHovered(false);
                  }
                }}
              >
                {sub.subcategory}
                {activeLink == sub.id && <span className="indicator"></span>}
              </Link>
            ))}
          </Spoller>
        ) : null;
      })}
    </aside>
  );
};

export default Aside;
