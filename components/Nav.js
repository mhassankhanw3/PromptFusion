"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function Nav() {
  const { data: session } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);
  // https://d5hdtqvs98ocz.cloudfront.net/cdn/add/logo-(1)-fj6MP0anNKnayBi.png
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        {/* <div className=" rounded-full w-[37px] h-[37px] bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
        </div> */}
        <img
          width={37}
          height={37}
          src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/ideogram__7_-removebg-preview-1o8KDD1TzjBOcGt.png"
          alt=""
          className="object-contain rounded-full"
        />
        <p className="logo_text">Prompt Fusion</p>
      </Link>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"}>
              <Button type="button" className="grad_btn">
                Create Post
              </Button>
            </Link>
            <Button
              type="button"
              onClick={async () => {
                await signOut();
                router.push("/");
              }}
              className="outline_btn"
            >
              Sign Out
            </Button>
            <Link href={"/profile"} className="p-0">
              <Avatar
                className="bg-gray-100 w-10 h-10"
                isBordered
                color="default"
                src={session?.user?.image}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="grad_btn"
                >
                  Sign In
                </Button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <Dropdown className="sm:hidden flex">
            <DropdownTrigger>
              <Avatar
                className="bg-gray-100 w-10 h-10"
                isBordered
                isFocusable
                color="default"
                src={session?.user?.image}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" variant="flat">
              <DropdownItem key="profile">
                <Link href={"/profile"} className="dropdown_link">
                  My Profile
                </Link>
              </DropdownItem>
              <DropdownItem key="prompt">
                <Link href={"/create-prompt"} className="dropdown_link">
                  Create Prompt
                </Link>
              </DropdownItem>
              <DropdownItem
                color="danger"
                className="bg-red-100 text-red-600 mt-5"
                onClick={async () => {
                  await signOut();
                  router.push("/");
                }}
              >
                Sign Out
              </DropdownItem>
              {/* // <Button
                  //   type="button"
                  //   key={provider.name}
                  //   onClick={() => signIn(provider.id)}
                  //   className="grad_btn"
                  // >
                  //   Sign In
                  // </Button>
                // ))} */}
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="grad_btn"
                >
                  Sign In
                </Button>
              ))}
          </>
        )}
        {/* {session?.user ? (
          <div className="flex">
            <Avatar
              className="bg-gray-100 w-10 h-10"
              isBordered
              color="default"
              showFallback
              name="wait"
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/ideogram-hJSSRWDCLsY5ymW.jpeg"
              onClick={() => {}}
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="grad_btn"
                >
                  Sign In
                </Button>
              ))}
          </>
        )} */}
      </div>
    </nav>
  );
}
