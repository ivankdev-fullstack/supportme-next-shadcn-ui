import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        SupportMe
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-2 items-center">
        <Link href="login">
          <Button>Log in</Button>
        </Link>
        <small>or</small>
        <Link href="signup">
          <Button variant="outline">Sign up</Button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
