import { useState, type ReactElement } from "react";

export function FormsHandler(steps: ReactElement[]) {
    const [currStepIndex, setCurrStepIndex] = useState(0)

    function next() {
        setCurrStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })
    }

    function back() {
        setCurrStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    function goTo(step: number) {
        setCurrStepIndex(step)
    }

    return {
        currStepIndex,
        currStep: steps[currStepIndex],
        steps,
        firstForm: currStepIndex === 0,
        lastForm: currStepIndex === steps.length - 1,
        goTo,
        next,
        back
    }
}