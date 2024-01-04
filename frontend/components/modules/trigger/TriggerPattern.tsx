import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";

interface TriggerPatternProps {
  defaultPattern: string;
  onChange: (pattern: string) => void;
}

export default function TriggerPattern(props: TriggerPatternProps) {
  return (
    <FormControl>
      <FormLabel>Pattern:</FormLabel>
      <Input
        defaultValue={props.defaultPattern}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <FormHelperText>
        The pattern to be detected of selected type to execute given procedure.
      </FormHelperText>
    </FormControl>
  );
}
