"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/joy";
import { useEffect } from "react";

export function ErrorDisplay({
  error,
  reset,
  fetchFailMessage,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  fetchFailMessage: string;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <Stack gap={2} textAlign="center">
        <Typography typography="h2" color="warning">
          Something went wrong
        </Typography>
        {error.message === "fetch failed" && (
          <Typography typography="p">{fetchFailMessage}</Typography>
        )}
        <Box>
          <Button onClick={() => reset()}>Try again</Button>
        </Box>
      </Stack>
    </Container>
  );
}
