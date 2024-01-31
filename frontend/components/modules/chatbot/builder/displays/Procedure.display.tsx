import { IEntity } from "@/api/modules/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { useState } from "react";
import { useDrag } from "./useDrag.hook";

interface ProcedureDisplayProps {
  procedure: IEntity;
  isSelected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
}

export const ProcedureDisplay = (props: ProcedureDisplayProps) => {
  const width = 140;
  const height = 30;
  const [x, setX] = useState<number>(300);
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
        fill="#FEF3A4"
        stroke="#F9BA50"
        strokeWidth={props.isSelected ? 3 : 1}
      ></rect>
      <line
        x1={(width - 100) / 2}
        y1={0}
        x2={(width - 100) / 2}
        y2={height}
        stroke="#F9BA50"
      ></line>
      <line
        x1={100 + (width - 100) / 2}
        y1={0}
        x2={100 + (width - 100) / 2}
        y2={height}
        stroke="#F9BA50"
      ></line>
      <text x={width / 2} y={height / 2}>
        {(props.procedure as IProcedure).name}
      </text>
    </g>
  );
};
