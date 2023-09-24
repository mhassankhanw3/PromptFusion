import PromptCard from "./PromptCard";

const LoadingIndicator = () => (
  <div className="loader mx-auto">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
);

export default function Profile({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
  loading,
}) {
  return (
    <section className="w-full">
      <h1 className="orange_gradient font-bold text-[24px] ">{name} Profile</h1>
      <p className="text-gray-700">{desc}</p>

      {loading ? (
        <LoadingIndicator />
      ) : (
        <div className="mt-10 prompt_layout">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
