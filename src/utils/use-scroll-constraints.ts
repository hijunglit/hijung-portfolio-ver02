import { useEffect, useState } from "react";

interface Constraints {
    top: number;
    bottom: number;
}

export function useScrollConstraints(ref: any, measureConstraints: boolean) {
    const [Constraints, setConstraints] = useState<Constraints>({
        top: 0, bottom: 0
    });

    useEffect(() => {
        if(!measureConstraints) return;

        const element = ref.current;
        const viewportHeight = window.innerHeight;
        const contentTop = element.offsetTop;
        const contentHeight = element.offsetHeight;
        const scrollableViewport = viewportHeight - contentTop * 2;
        const top  = Math.min(scrollableViewport - contentHeight, 0);

        setConstraints({top, bottom: 0})
    }, [measureConstraints]);

    return Constraints;
}