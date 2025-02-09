import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

export function useLang() {
    const [lang, setLang] = useState("ua");
    const pathname = usePathname();

    useEffect(() => {
        const storedLang = Cookies.get("lang") || "ua";

        const newLang = pathname.startsWith("/en") ? "en" : "ua";

        if (newLang !== storedLang) {
            Cookies.set("lang", newLang, { expires: 365 });
            setLang(newLang);
        }
    }, [pathname]);

    return [lang, setLang];
}