import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full max-w-[988px] mx-auto p-4 flex flex-col flex-1 items-center gap-2 lg:flex-row">
      <div className="relative w-[240px] h-[240px] m-8 lg:w-[424px] lg:h-[424px]">
        <Image src="/dva-linga-logo.svg" alt="Dva Linga Logo" fill />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-4xl font-bold text-center tracking-wide">
          <span className="bg-gradient-to-b from-[rgb(227,27,28)] from-0% via-[#FFFFFF] via-33% to-[rgb(61,88,219)] to-66% text-transparent font-extrabold bg-clip-text text-stroke-medium">
            Dva
          </span>
          <span className="bg-gradient-to-r from-[rgb(80,160,142)] from-0% via-[#FFFFFF] via-50% to-[rgb(253,134,44)] to-100% text-transparent font-extrabold bg-clip-text text-stroke-medium">
            Linga
          </span>
        </h1>
        <h2 className="text-xl text-slate-600 lg:mx-3 lg:text-center">
          Master Croatian with Dva Linga
        </h2>
      </div>
      <div className="w-[60%] max-width-[330px] flex flex-col items-center gap-y-3 lg:m-0 lg:w-fit">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal">
              <Button size="lg" variant="secondary" className="w-full">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignInButton mode="modal">
            <Button size="lg" variant="primaryOutline" className="w-full">
              I already have an account
            </Button>
          </SignInButton>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">Continue Learning</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Home;
