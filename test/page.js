// import React from "react";

// export default function page() {
//   return {
//     <>
    
//     <Button onPress={onOpen} className="EmptyPage_button">
//             Create Prompt
//           </Button>
//           <Modal
//             size="xl"
//             backdrop="blur"
//             isOpen={isOpen}
//             onOpenChange={onOpenChange}
//             placement="auto"
//             className="bg-gray-100 border border-gray-400"
//           >
//             <ModalContent>
//               {(onClose) => (
//                 <>
//                   <ModalHeader className="flex flex-col py-4 text-center bg-white  border-b border-gray-200">
//                     <img
//                       width={57}
//                       height={57}
//                       src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/ideogram__7_-removebg-preview-1o8KDD1TzjBOcGt.png"
//                       alt=""
//                       className="object-contain rounded-full mx-auto mb-4"
//                     />
//                     <h2 className="bg-gradient-to-r m-0 p-0 from-pink-600 to-purple-600 bg-clip-text text-transparent">
//                       {type} Prompt
//                     </h2>
//                     <p className="font-normal mt-0 p-0 text-[16px] leading-5 ">
//                       {type} and shareamazing prompts with the world, and let
//                       your imagination run wild with any AI-powered Platform.{" "}
//                     </p>
//                   </ModalHeader>
//                   <ModalBody>
//                     <form onSubmit={handleSubmit}>
//                       <Textarea
//                         value={post.prompt}
//                         onChange={(e) =>
//                           setPost({ ...post, prompt: e.target.value })
//                         }
//                         required
//                         label="Your AI Prompt:"
//                         labelPlacement="outside"
//                         placeholder="(e.g) Write a short story about a time traveler who discovers a hidden civilization in ancient Egypt."
//                         autoFocus
//                         variant="bordered"
//                       />
//                       <Input
//                         value={post.tag}
//                         onChange={(e) =>
//                           setPost({ ...post, tag: e.target.value })
//                         }
//                         required
//                         label="Tags:"
//                         labelPlacement="outside"
//                         placeholder="(e.g)  #TimeTravel #AncientEgypt"
//                         variant="bordered"
//                       />
//                     </form>
//                   </ModalBody>
//                   <ModalFooter>
//                     <Button
//                       className="grad_form_cancel_btn"
//                       variant="flat"
//                       onPress={onClose}
//                     >
//                       Close
//                     </Button>
//                     <Button
//                       type="submit"
//                       disabled={submitting}
//                       className="grad_form_btn"
//                       // onPress={submitting ? submitting : onClose}
//                     >
//                       {submitting ? `${type}...` : type}
//                     </Button>
//                   </ModalFooter>
//                 </>
//               )}
//             </ModalContent>
//           </Modal>
//     </>
//   };
// }
