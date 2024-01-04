import {
  Autocomplete,
  FormControl,
  FormHelperText,
  FormLabel,
  Link,
} from "@mui/joy";
import NextLink from "next/link";
import { useState } from "react";

interface TriggerProcedureProps {
  chatbotId: string;
  defaultProcedure: string;
  onChange: (procedure: string) => void;
}

export default function TriggerProcedure(props: TriggerProcedureProps) {
  const procedures = [
    "6592e4b312f9003fa2276e8f",
    "6592e4b312f9003fa2276e8a",
    "6592e4b312f9003fa2276e8b",
  ];
  const [procedure, setProcedure] = useState(props.defaultProcedure);

  const handleProcedureChange = (newProcedure: string) => {
    setProcedure(newProcedure);
    props.onChange(newProcedure);
  };

  return (
    <FormControl>
      <FormLabel>Procedure:</FormLabel>
      <Autocomplete
        defaultValue={{
          label: procedure,
          id: procedure,
        }}
        options={procedures.map((item) => ({
          label: item,
          id: item,
        }))}
        onChange={(_, value) =>
          handleProcedureChange((value as { label: string; id: string })?.id)
        }
      />
      <FormHelperText>
        The procedure to be executed when a given pattern is detected.
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.chatbotId}/procedure/${procedure}`}
          underline="none"
        >
          Go to chosen procedure details →
        </Link>
      </FormHelperText>
    </FormControl>
  );
}
