import {
  Autocomplete,
  AutocompleteOption,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@mui/joy";

interface ActionMethodProps {
  defaultMethod: string;
  onChange: (id: string) => void;
}

export function ActionMethod(props: ActionMethodProps) {
  const options = [
    {
      label: "sendMessage",
      id: "sendMessage",
    },
  ];
  const defaultOption = options.find((item) => item.id === props.defaultMethod);

  return (
    <FormControl>
      <FormLabel>Method</FormLabel>
      <Autocomplete
        defaultValue={defaultOption}
        options={options}
        onChange={(_, value) =>
          props.onChange((value as { label: string; id: string })?.id)
        }
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderOption={(props, option) => (
          <AutocompleteOption {...props} key={option.id}>
            {option.label}
          </AutocompleteOption>
        )}
      />
      <FormHelperText>
        The Telegram Bot API method to be used when action is executed.
      </FormHelperText>
    </FormControl>
  );
}
