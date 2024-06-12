import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const LandingPage = () => {
  return (
    <>
      <div>Home (unprotected)</div>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign up</Button>
      </Link>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </>
  );
};

export default LandingPage;
