import { IAction } from "@/api/modules/action/interface";
import { IEntity } from "@/api/modules/interface";
import { useState } from "react";
import { useDrag } from "./useDrag.hook";

interface ActionDisplayProps {
  action: IEntity;
  isSelected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
}

export const ActionDisplay = (props: ActionDisplayProps) => {
  const width = 120;
  const height = 20;
  const [x, setX] = useState<number>(500);
  const [y, setY] = useState<number>(200);

  const { startDrag, drag, endDrag } = useDrag(
    props.isSelected,
    props.onSelect,
    props.onDeselect,
    (dx, dy) => {
      setX(x + dx);
      setY(y + dy);
    }
  );

  return (
    <g
      className="draggable"
      onPointerDown={startDrag}
      onPointerMove={drag}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      transform={`translate(${x}, ${y})`}
    >
      <rect
        width={width}
        height={height}
        rx={10}
        ry={10}
        fill="#C0E9FF"
        stroke="#347CD4"
        strokeWidth={props.isSelected ? 3 : 1}
      ></rect>
      <text x={width / 2} y={height / 2}>
        {(props.action as IAction).method}
      </text>
    </g>
  );
};
