import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function FormPageEmt() {
  //   const router = useRouter();
  //   const { data: session } = useSession();

  //   const [submitting, setIsSubmitting] = useState(false);
  //   const [post, setPost] = useState({ prompt: "", tag: "" });

  //   const createPrompt = async (e) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);

  //     try {
  //       const response = await fetch("/api/prompt/new", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           prompt: post.prompt,
  //           userId: session?.user.id,
  //           tag: post.tag,
  //         }),
  //       });

  //       if (response.ok) {
  //         router.push("/");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };
  return (
    <div className="EmptyPage_Box">
      <div className="EmptyPage_Box_flex">
        <h2 className="EmptyPage_Box_head">You don't have any projects Yet!</h2>
        <img
          className="EmptyPage_Box_img"
          src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/shopping-call-ObZ0Nxs9XGVNyge.png"
          alt=""
        />
        <span className="text-gray-500 text-[16px] hover:text-gray-800 ">
          Prompt Fusion 😃
        </span>
      </div>
    </div>
  );
}
