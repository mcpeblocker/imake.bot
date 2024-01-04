import { FormControl, FormHelperText, FormLabel, Textarea } from "@mui/joy";

interface ActionParamsProps {
  defaultParams: string;
  onChange: (param: string) => void;
}

export function ActionParams(props: ActionParamsProps) {
  return (
    <FormControl>
      <FormLabel>Params</FormLabel>
      <Textarea
        defaultValue={props.defaultParams}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <FormHelperText>
        The params should be a json containing the relevant properties as given
        in telegram bot api docs
      </FormHelperText>
    </FormControl>
  );
}
