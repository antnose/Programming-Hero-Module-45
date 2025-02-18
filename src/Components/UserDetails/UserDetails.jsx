import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg mb-100">
      <h2 className="text-3xl font-bold border-b pb-2 mb-4">
        Details of: <span className="text-blue-400">{name}</span>
      </h2>
      <p className="text-lg">
        🌐 Website:{" "}
        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {website}
        </a>
      </p>
    </div>
  );
};

export default UserDetails;
