"use client";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
const Form = ({
  type,
  post,
  setPost,
  isButtonDisabled,
  setIsButtonDisabled,
  submitting,
  setIsSubmitting,
  isModalOpen,
  setIsModalOpen,
  handleSubmit,
  modalRef,
}) => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="EmptyPage_button">
        Create Prompt
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur max-w-[100%] w-[100%] px-4 ">
          <div
            ref={modalRef}
            className="bg-white rounded-lg border-gray-200 shadow-lg relative max-w-[100%] w-[100%] sm:w-[100%] md:w-[40%] mx-auto"
          >
            <RxCross1
              className="absolute top-3 right-3 cursor-pointer text-gray-600 bg-zinc-100 hover:bg-zinc-200 hover:text-black transition-all text-3xl p-2 rounded-full"
              onClick={() => setIsModalOpen(false)}
            />
            <div className="flex flex-col p-8 items-center justify-center text-center border-b border-gray-200 ">
              <img
                width={47}
                height={47}
                src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/ideogram__7_-removebg-preview-1o8KDD1TzjBOcGt.png"
                alt=""
                className="object-contain rounded-full mx-auto"
              />
              <h2 className=" font-medium text-[24px] bg-gradient-to-r m-0 p-0 from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Create Prompt
              </h2>
              <p className="font-normal mt-0 p-0 text-[16px] leading-5 ">
                Create and shareamazing prompts with the world, and let your
                imagination run wild with any AI-powered Platform.{" "}
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="px-8 pb-8 pt-4 bg-gray-100"
            >
              <label>Your AI Prompt:</label>
              <textarea
                id="prompt-textarea"
                value={post?.prompt}
                onChange={(e) => {
                  setPost({ ...post, prompt: e.target.value });
                  setIsButtonDisabled(e.target.value === "" || post.tag === "");
                }}
                required
                placeholder="(e.g) Write a short story..."
                autoFocus
                style={{
                  transition: "border-color 0.3s ease",
                }}
                className="w-full h-[100px] p-2 border-2 focus:outline-none focus:border-purple-700 rounded-md mt-1 mb-4 resize-none"
              />
              <label>Tags:</label>
              <input
                value={post?.tag}
                onChange={(e) => {
                  setPost({ ...post, tag: e.target.value });
                  setIsButtonDisabled(
                    e.target.value === "" || post.prompt === ""
                  );
                }}
                required
                placeholder="(e.g) #TimeTravel #AncientEgypt"
                className="w-full p-2 border-2 rounded-md mt-1 mb-4 focus:outline-none focus:border-pink-700"
              />
              <div className="flex sm:w-auto max-w-[100%] w-[100%] items-center gap-2 justify-end">
                {" "}
                <button
                  type="button"
                  onClick={async () => {
                    setIsModalOpen(false);
                    await router.push("/");
                  }}
                  className="grad_form_cancel_btn "
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isButtonDisabled || submitting}
                  className={
                    isButtonDisabled
                      ? "grad_form_btn_disabled"
                      : "grad_form_btn"
                  }
                >
                  {submitting ? `${type}...` : type}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
