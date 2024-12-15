import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="h-full mx-auto flex items-center justify-between lg:max-w-screen-lg">
        <div className="pt-8 pl-4 flex items-center gap-x-3">
          <Image
            src="/dva-linga-logo.svg"
            width={80}
            height={80}
            alt="Dva Linga Logo"
          />
          <h1 className="text-2xl font-bold text-green-600 tracking-wide">
            DvaLinga
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="lg">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
