// src/hooks/useMediaQuery.ts
import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const [match, setMatch] = useState(() => matchMedia(query).matches);
    useEffect(() => {
        const mql = matchMedia(query);
        const l = (e: MediaQueryListEvent) => setMatch(e.matches);
        mql.addEventListener("change", l);
        return () => mql.removeEventListener("change", l);
    }, [query]);
    return match;
}
