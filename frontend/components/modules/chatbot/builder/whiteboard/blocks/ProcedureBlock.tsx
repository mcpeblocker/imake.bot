import { useEffect, useRef } from "react";
import { IProcedure } from "@/api/modules/procedure/interface";
import { getProcedureDisplay } from "../displays/procedure.display";

interface ProcedureBlockProps {
  procedure: IProcedure;
  canvasRef: React.MutableRefObject<fabric.Canvas | null>;
}

export function ProcedureBlock(props: ProcedureBlockProps) {
  const procedureRef = useRef<fabric.Object | null>(null);

  useEffect(() => {
    if (procedureRef.current) return;
    if (!props.canvasRef.current) return;
    const procedureDisplay = getProcedureDisplay(props.procedure);
    procedureRef.current = procedureDisplay;
    props.canvasRef.current.add(procedureDisplay);
  }, []);

  return <></>;
}
