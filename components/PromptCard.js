"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

export default function PromptCard({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
  shadowColor,
  index,
}) {
  const [copied, setCopied] = useState("");
  const [isFollowed, setIsFollowed] = useState(false);

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  return (
    <>
      <Card
        className="linear transition-all relative max-w-[550px] w-[100%] pt-2 px-0 rounded-[6px] border-[#e5e7eb] border-[0.1px]"
        style={{
          boxShadow: `0 0.1px 0 1px ${shadowColor}`,
          animation: "shadowAnimation 5s linear infinite alternate",
        }}
      >
        <CardHeader className=" flex items-center justify-between gap-5">
          <div className="flex items-center gap-1">
            <Avatar radius="full" size="md" src={post.creator.image} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {post.creator.username}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {post.creator.email}
              </h5>
            </div>
          </div>
          <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200"
                : "grad_follow_btn"
            }
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p className="mb-2 font-satoshi text-sm text-gray-700">
            {post.prompt}
          </p>
          <span
            className="font-inter text-sm blue_gradient cursor-pointer"
            onClick={() => handleTagClick && handleTagClick(post.tag)}
          >
            {post.tag}
          </span>
        </CardBody>
        <CardFooter className="gap-3 flex items-center justify-between">
          <div className="sm:flex gap-2 items-center">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-sm">4</p>
              <p className=" text-default-400 text-sm">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-sm">97.1K</p>
              <p className="text-default-400 text-sm">Followers</p>
            </div>
          </div>
          <div className="copy_btn relative" onClick={handleCopy}>
            <img
              src={
                copied === post.prompt
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              width={12}
              height={12}
              alt=""
            />
          </div>
          {copied && (
            <div
              className="absolute popover_shadow right-2 bottom-12 text-[14px] text-blue-600 bg-blue-50 px-2 py-1 rounded-lg"
              style={{ elevation: "4" }}
            >
              Copied!
            </div>
          )}
        </CardFooter>
      </Card>
    </>
  );
}

// {/* <div className="prompt_card">
//   <div className="flex justify-between items-start gap-5">
//     <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
//       <Avatar
//         radius="full"
//         size="md"
//         src={post.creator.image}
//         alt="user_image"
//       />
//       <div className="flex flex-col">
//         <h3 className="font-satoshi font-semibold text-gray-900">
//           {post.creator.username}
//         </h3>
//         <span className="font-inter text-sm text-gray-500">
//           {post.creator.email}
//         </span>
//       </div>
//     </div>
//     <div className="copy_btn" onClick={() => {}}>
//       <img
//         src={
//           copied === post.prompt
//             ? "/assets/icons/tick.svg"
//             : "/assets/icons/copy.svg"
//         }
//         width={12}
//         height={12}
//         alt=""
//       />
//     </div>
//   </div>
//   <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
//   <p
//     className="font-inter text-sm blue_gradient cursor-pointer"
//     onClick={() => handleTagClick && handleTagClick(post.tag)}
//   >
//     {post.tag}
//   </p>
// </div> */}
