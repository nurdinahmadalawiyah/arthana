import { useEffect, useRef, useState } from "react";

export interface UseProfileCraftingOptions {
    minDurationMs?: number;
    task?: () => Promise<void> | void;
    onComplete: () => void;
}

export function useProfileCraftingProgress({
    minDurationMs = 3200,
    task,
    onComplete,
}: UseProfileCraftingOptions) {
    const [progress, setProgress] = useState(0);
    const taskDoneRef = useRef(false);
    const completedRef = useRef(false);
    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    useEffect(() => {
        let isMounted = true;
        Promise.resolve(task?.()).finally(() => {
            if (isMounted) {
                taskDoneRef.current = true;
            }
        });
        return () => {
            isMounted = false;
        };
    }, [task]);

    useEffect(() => {
        const startTime = Date.now();

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const ratio = Math.min(elapsed / minDurationMs, 1);

            const easedRatio = 1 - Math.pow(1 - ratio, 2.2);
            let nextPercent = Math.round(easedRatio * 100);

            if (!taskDoneRef.current && nextPercent > 96) {
                nextPercent = 96;
            }

            setProgress(nextPercent);

            if (ratio >= 1 && taskDoneRef.current && !completedRef.current) {
                completedRef.current = true;
                clearInterval(timer);
                setTimeout(() => {
                    onCompleteRef.current();
                }, 250);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [minDurationMs]);

    return { progress };
}