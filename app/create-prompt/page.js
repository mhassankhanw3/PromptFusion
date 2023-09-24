"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Form from "@components/Form";
import { Button } from "@nextui-org/react";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [type, setType] = useState("Create");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.getElementById("prompt-textarea").focus();
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setType("Creating");

    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
        toast.success("Prompt Created! 👏", {
          duration: 4000,
        });
      }
    } catch (error) {
      toast.error("Could not save.", {
        duration: 4000,
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setType("Create");
      setIsModalOpen(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isButtonDisabled && !submitting) {
      createPrompt(e);
    }
  };

  return (
    <div className="max-w-[100%] w-[100%]">
      <div className="EmptyPage_Flex">
        <h3 className="EmptyPage_head">My Prompts</h3>
        <div className="flex items-center gap-2">
          <Button
            onClick={async () => await router.push("/")}
            className="rounded-lg bg-red-100 hover:bg-red-200 transition-all text-red-600"
          >
            Back
          </Button>
          <Form
            type={type}
            post={post}
            setPost={setPost}
            isButtonDisabled={isButtonDisabled}
            setIsButtonDisabled={setIsButtonDisabled}
            submitting={submitting}
            setIsSubmitting={setIsSubmitting}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleSubmit={handleFormSubmit}
            modalRef={modalRef}
          />
        </div>
      </div>
      <div className="EmptyPage_Box">
        <div className="EmptyPage_Box_flex">
          <h2 className="EmptyPage_Box_head">
            You don't have any projects Yet!
          </h2>
          <img
            className="EmptyPage_Box_img"
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/shopping-call-ObZ0Nxs9XGVNyge.png"
            alt=""
          />
          <Form
            type={type}
            post={post}
            setPost={setPost}
            isButtonDisabled={isButtonDisabled}
            setIsButtonDisabled={setIsButtonDisabled}
            submitting={submitting}
            setIsSubmitting={setIsSubmitting}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleSubmit={handleFormSubmit}
            modalRef={modalRef}
          />
          <span className="text-gray-500 text-[16px] mt-4 hover:text-gray-800 ">
            Prompt Fusion 😃
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreatePrompt;
