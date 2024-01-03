import { Navbar } from "@/components/common/Navbar";
import { Box, Button, Stack, Typography, Link } from "@mui/joy";
import NextLink from "next/link";

export default function () {
  return (
    <Stack direction="column">
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <main>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <Typography typography="h1" textAlign="center">
            imake.bot
          </Typography>
          <Typography typography="subtitle" textAlign="center">
            A toolkit to conveniently develop and launch chat bots with
            essential features.
          </Typography>
          <Box mt={5}>
            <Link href="/dashboard" component={NextLink}>
              <Button variant="solid">
                <Typography
                  fontSize={24}
                  textColor="common.white"
                  p={1}
                  textAlign="center"
                >
                  Try the app right now →
                </Typography>
              </Button>
            </Link>
          </Box>
        </Stack>
      </main>
      {/* Footer */}
      {/* TODO */}
    </Stack>
  );
}
