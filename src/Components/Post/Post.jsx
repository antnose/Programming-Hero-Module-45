import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:shadow-xl transition-all duration-300">
      <h4 className="text-xl font-semibold text-blue-400 mb-2">
        Post ID: {id}
      </h4>
      <p className="text-gray-300">{title}</p>
      <Link
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        to={`/post/${id}`}
      >
        Post Details
      </Link>
    </div>
  );
};

export default Post;
