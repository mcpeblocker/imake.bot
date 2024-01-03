import { Button, Stack, Link } from "@mui/joy";
import Image from "next/image";
import NextLink from "next/link";

export function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px={2}
    >
      {/* Logo on the left-side */}
      <Image
        src="/imake-logo-bright.png"
        alt="imake.bot logo"
        width={100}
        height={100}
      />
      {/* Menus sticked to the right-side */}
      <Stack direction="row" justifyContent="space-around" gap={2}>
        <Link href="/" component={NextLink} underline="none">
          Home
        </Link>
        <Link href="/dashboard" component={NextLink} underline="none">
          <Button variant="solid">Go to dashboard</Button>
        </Link>
        {/* <ul className=""></ul> */}
      </Stack>
    </Stack>
  );
}
