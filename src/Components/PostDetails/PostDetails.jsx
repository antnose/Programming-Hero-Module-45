import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { body, title } = post;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700 mb-100">
      <h2 className="text-3xl font-bold text-blue-400 mb-4">{title}</h2>
      <p className="text-gray-300 leading-relaxed">{body}</p>
    </div>
  );
};

export default PostDetails;
