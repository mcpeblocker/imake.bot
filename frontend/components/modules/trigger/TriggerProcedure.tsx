import { IProcedure } from "@/api/modules/procedure/interface";
import {
  Autocomplete,
  AutocompleteOption,
  FormControl,
  FormHelperText,
  FormLabel,
  Link,
} from "@mui/joy";
import NextLink from "next/link";

interface TriggerProcedureProps {
  chatbotId: string;
  procedures: IProcedure[];
  defaultProcedureId: string;
  onChange: (procedure: string) => void;
}

export default function TriggerProcedure(props: TriggerProcedureProps) {
  const options = props.procedures.map((item) => ({
    label: item.name,
    id: item._id,
  }));
  const defaultOption = options.find(
    (item) => item.id === props.defaultProcedureId
  );

  const handleProcedureChange = (newProcedure: string) => {
    props.onChange(newProcedure);
  };

  return (
    <FormControl>
      <FormLabel>Procedure:</FormLabel>
      <Autocomplete
        defaultValue={defaultOption}
        options={options}
        onChange={(_, value) => handleProcedureChange(value?.id as string)}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderOption={(props, option) => (
          <AutocompleteOption {...props} key={option.id}>
            {option.label}
          </AutocompleteOption>
        )}
      />
      <FormHelperText>
        The procedure to be executed when a given pattern is detected.
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.chatbotId}/procedure/${defaultOption?.id}`}
          underline="none"
        >
          Go to chosen procedure details →
        </Link>
      </FormHelperText>
    </FormControl>
  );
}
