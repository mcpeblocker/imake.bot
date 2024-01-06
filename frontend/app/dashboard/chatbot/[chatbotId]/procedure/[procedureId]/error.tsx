"use client";

import { ErrorDisplay } from "@/components/common/ErrorDisplay";

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorDisplay
      {...props}
      fetchFailMessage={"Couldn't get procedure information from the server."}
    />
  );
}
