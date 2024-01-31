import { IEntity } from "@/api/modules/interface";
import { ITrigger } from "@/api/modules/trigger/interface";
import React, { useState } from "react";
import { useDrag } from "./useDrag.hook";

interface TriggerDisplayProps {
  trigger: IEntity;
  isSelected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
}

export const TriggerDisplay = (props: TriggerDisplayProps) => {
  const width = 100;
  const height = 50;
  const [x, setX] = useState<number>(50);
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
        fill="#FFCFD5"
        stroke="#FF89AF"
        strokeWidth={props.isSelected ? 3 : 1}
      ></rect>
      <text x={width / 2} y={height / 2}>
        {(props.trigger as ITrigger).pattern}
      </text>
    </g>
  );
};
