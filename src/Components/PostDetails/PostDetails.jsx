import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { body, title } = post;
  const { id } = useParams();
  const handleGoBack = () => {
    navigate(-1);
  };

  console.log(id);
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700 mb-100">
      <h2 className="text-3xl font-bold text-blue-400 mb-4">{title}</h2>
      <p className="text-gray-300 leading-relaxed">{body}</p>
      <button
        style={{
          backgroundColor: "#1E3A8A", // Dark blue color
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          marginTop: "20px",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#1D2A62")} // Slightly darker blue on hover
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#1E3A8A")}
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
