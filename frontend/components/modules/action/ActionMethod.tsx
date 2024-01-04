import { Autocomplete, FormControl, FormHelperText, FormLabel } from "@mui/joy";

interface ActionMethodProps {
  defaultMethod: string;
  onChange: (id: string) => void;
}

export function ActionMethod(props: ActionMethodProps) {
  return (
    <FormControl>
      <FormLabel>Method</FormLabel>
      <Autocomplete
        defaultValue={{ label: props.defaultMethod, id: props.defaultMethod }}
        options={[{ label: "sendMessage", id: "sendMessage" }]}
        onChange={(_, value) =>
          props.onChange((value as { label: string; id: string })?.id)
        }
      />
      <FormHelperText>
        The Telegram Bot API method to be used when action is executed.
      </FormHelperText>
    </FormControl>
  );
}
