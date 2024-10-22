import { Dispatch, forwardRef, MutableRefObject, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import AxisRotationSelector, { AxisRotationSelectorRef, AxisType } from "./AxisRotationSelector";
import { ChromePicker, ColorChangeHandler, ColorResult } from "react-color";
import { Euler } from "three";
import { ModelRef } from "@/app/stl-viewer-src";

export type PropertiesControlPanelRef = {
    updateRotations: (rotation: Euler) => void;
    setColorPickerOpen: Dispatch<SetStateAction<boolean>>;
};

export type PropertiesControlPanelProps = {
    modelColor: {
        value: string,
        set: Dispatch<SetStateAction<string>>
    },
    modelRefs: RefObject<ModelRef>[]
};

const PropertiesControlPanel = forwardRef<PropertiesControlPanelRef, PropertiesControlPanelProps>(({
    modelColor,
    modelRefs
}, ref) => {
    const [colorPickerOpen, setColorPickerOpen] = useState(false);

    const xRef = useRef<AxisRotationSelectorRef>(null);
    const yRef = useRef<AxisRotationSelectorRef>(null);
    const zRef = useRef<AxisRotationSelectorRef>(null);

    const rotationSelectorRefs: { [key in AxisType]: RefObject<AxisRotationSelectorRef> } = {
        "x": xRef,
        "y": yRef,
        "z": zRef,
    };

    const handleModelColorChange: ColorChangeHandler = (color: ColorResult, e) => {
        modelColor.set(color.hex);
    };

    const updateRotations = (rotation: Euler) => {
        for (const [axis, axisRotationSelectorRef] of Object.entries(rotationSelectorRefs)) {
            if (!axisRotationSelectorRef.current) {
                console.log(axisRotationSelectorRef);
                continue;
            }

            axisRotationSelectorRef.current.updateInputs(rotation[axis as AxisType]);
        }
    }

    useEffect(() => {
        if (!ref) return;

        (ref as MutableRefObject<PropertiesControlPanelRef | null>).current = {
            updateRotations,
            setColorPickerOpen
        }
    }, [])

    return (
        <div className="flex flex-col flex-shrink-0 min-w-72">
            <div className="divide-y divide-[#444444] border-y border-[#444444]">
                <div className="p-4 gap-y-4 flex flex-col">
                    <p>Model Color:</p>
                    <div className="relative flex flex-row items-center">
                        <button
                            className="w-14 h-6 rounded-sm"
                            style={{ backgroundColor: modelColor.value }}
                            onClick={(e) => {
                                e.preventDefault();
                                setColorPickerOpen(old => !old);
                                e.stopPropagation();
                            }}
                        />
                        <input
                            className="text-white grow bg-transparent pl-5 outline-none overflow-ellipsis pointer-events-auto"
                            type="text"
                            value={modelColor.value}
                        />
                        {colorPickerOpen && (
                            <div
                                className="absolute top-0 left-0 w-0"
                                onClick={e => e.stopPropagation()}
                            >
                                <ChromePicker
                                    className="-translate-x-[calc(100%+1rem)]"
                                    styles={{ default: { picker: { backgroundColor: "#2c2c2c", fontFamily: 'inherit' } } }}
                                    color={modelColor.value}
                                    onChange={handleModelColorChange}
                                    disableAlpha
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col p-4 gap-y-6">
                    <AxisRotationSelector
                        axis="x"
                        modelRefs={modelRefs}
                        ref={xRef}
                    />
                    <AxisRotationSelector
                        axis="y"
                        modelRefs={modelRefs}
                        ref={yRef}
                    />
                    <AxisRotationSelector
                        axis="z"
                        modelRefs={modelRefs}
                        ref={zRef}
                    />
                </div>
            </div>
        </div>
    )
});

export default PropertiesControlPanel;