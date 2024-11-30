import { useEffect } from "react";

export function ThemeLoader() {
    useEffect(() => {
        const root = window.document.documentElement;

       
        root.classList.remove("light");
        
        
        root.classList.add("dark");
    }, []);

    return null;
}
