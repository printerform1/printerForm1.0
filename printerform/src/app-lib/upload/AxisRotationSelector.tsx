import { ModelRef } from "@/app/stl-viewer-src";
import { ChangeEvent, forwardRef, MutableRefObject, RefObject, useCallback, useEffect, useRef, useState } from "react";

export type AxisType = "x" | "y" | "z";

export type AxisRotationSelectorProps = {
    axis: AxisType;
    modelRefs: RefObject<ModelRef>[];
};

export type AxisRotationSelectorRef = {
    updateInputs: (rotation: number) => void;
};

const AxisRotationSelector = forwardRef<AxisRotationSelectorRef, AxisRotationSelectorProps>(({ axis, modelRefs }, ref) => {
    const [resetButtonShown, setResetButtonShown] = useState(false);

    const sliderRef = useRef<HTMLInputElement>(null);
    const numberInputRef = useRef<HTMLInputElement>(null);

    const FULL_ROTATION_RANGE = 2 * Math.PI;
    const BISECTED_ROTATION_RANGE = FULL_ROTATION_RANGE / 2;

    const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);
    const radiansToDegrees = (radians: number) => radians * (180 / Math.PI);

    const SLIDER_MIN = radiansToDegrees(-BISECTED_ROTATION_RANGE);
    const SLIDER_MAX = radiansToDegrees(BISECTED_ROTATION_RANGE);

    useEffect(() => {
        updateInputs(0);

        if (!ref) return;

        (ref as MutableRefObject<AxisRotationSelectorRef | null>).current = { updateInputs };
    }, []);

    const updateInputs = useCallback((rotation: number) => {
        if (sliderRef.current) {
            const percent = (rotation + BISECTED_ROTATION_RANGE) / FULL_ROTATION_RANGE;
            const sliderValue = SLIDER_MIN + percent * (SLIDER_MAX - SLIDER_MIN);

            sliderRef.current.value = sliderValue.toString();
        }

        if (numberInputRef.current) {
            numberInputRef.current.value = `${radiansToDegrees(rotation).toFixed(2).toString()}\u00b0`;
        }

        setResetButtonShown(Math.abs(rotation) > Number.EPSILON);
    }, [setResetButtonShown]);

    const applyRotation = (rotation: number) => {
        for (const modelRef of modelRefs) {
            if (!modelRef.current) return;

            const { model } = modelRef.current;

            model.rotation[axis] = rotation;
        }

        updateInputs(rotation);
    };

    const onSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const multiplier = parseFloat(e.currentTarget.value) / radiansToDegrees(BISECTED_ROTATION_RANGE);
        const rotation = multiplier * BISECTED_ROTATION_RANGE;

        applyRotation(rotation);
    };

    const onNumberInput = (input: string) => {
        const numberInput = parseFloat(input);

        if (Number.isNaN(numberInput)) return;

        const rotation = degreesToRadians(numberInput);

        if (Math.abs(rotation) > BISECTED_ROTATION_RANGE) return;

        applyRotation(rotation);
    };

    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex flex-row items-center justify-between">
                <p>{axis.toUpperCase()}-Axis Rotation</p>

                {resetButtonShown && (
                    <button
                        className="font-semibold text-[#808080] transition duration-100 hover:text-red-500"
                        onClick={() => applyRotation(0)}
                    >
                        RESET
                    </button>
                )}
            </div>
            <div className="flex flex-row gap-x-2 items-center">
                <input
                    type="range"
                    className="w-full h-1 bg-[#1e1e1e] rounded-lg appearance-none cursor-pointer"
                    min={SLIDER_MIN}
                    max={SLIDER_MAX}
                    onChange={onSliderChange}
                    ref={sliderRef}
                />
                <input
                    className="text-white text-center w-16 bg-[#1e1e1e] outline-none"
                    onClick={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace('\u00b0', '');
                        e.currentTarget.select();
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onNumberInput(e.currentTarget.value);
                            e.currentTarget.blur();
                        }
                    }}
                    onBlur={(e) => onNumberInput(e.currentTarget.value)}
                    ref={numberInputRef}
                />
            </div>
        </div>
    );
});

export default AxisRotationSelector;