import { useState } from "react";

export function useDrag(
  isSelected: boolean,
  onSelect: () => void,
  onDeselect: () => void,
  onMove: (deltaX: number, deltaY: number) => void
) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragged, setDragged] = useState<boolean>(false);
  const [wasSelected, setWasSelected] = useState<boolean>(isSelected);

  const startDrag = (e: React.PointerEvent<SVGElement>) => {
    setIsDragging(true);
    setDragged(false);
    if (isSelected === false) {
      onSelect();
    } else {
      setWasSelected(true);
    }
  };

  const drag = (e: React.PointerEvent) => {
    if (isDragging === false) return;
    if (dragged === false) {
      setDragged(true);
    }
    onMove(e.movementX, e.movementY);
  };

  const endDrag = (e: React.PointerEvent) => {
    if (isDragging === false) return;
    setIsDragging(false);
    if (dragged === false && wasSelected === true) {
      onDeselect();
      setWasSelected(false);
    }
  };

  return {
    startDrag,
    drag,
    endDrag,
  };
}
