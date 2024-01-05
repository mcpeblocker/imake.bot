import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";

interface ProcedureNameProps {
  defaultName: string;
  onChange: (name: string) => void;
}

export default function ProcedureName(props: ProcedureNameProps) {
  return (
    <FormControl>
      <FormLabel>Name:</FormLabel>
      <Input
        defaultValue={props.defaultName}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <FormHelperText>
        Naming the procedure helps to differentiate and reuse them with ease.
      </FormHelperText>
    </FormControl>
  );
}
