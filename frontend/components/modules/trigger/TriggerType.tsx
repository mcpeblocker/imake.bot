import {
  FormControl,
  FormLabel,
  Select,
  Option,
  FormHelperText,
} from "@mui/joy";

interface TriggerTypeProps {
  defaultType: string;
  onChange: (type: string) => void;
}

export default function TriggerType(props: TriggerTypeProps) {
  return (
    <FormControl>
      <FormLabel>Type:</FormLabel>
      <Select
        placeholder="Choose one"
        defaultValue={props.defaultType}
        onChange={(e, value) => props.onChange(value as string)}
      >
        <Option value="command">COMMAND</Option>
        <Option value="text">TEXT</Option>
      </Select>
      <FormHelperText>
        The type of a trigger corresponding to telegram update.
      </FormHelperText>
    </FormControl>
  );
}
