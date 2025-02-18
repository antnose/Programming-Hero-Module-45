// Without css or response

// const User = ({ user }) => {
//   const { id, name, email, phone } = user;
//   return (
//     <div>
//       <h2>Name: {name} </h2>
//       <p>Email: {email} </p>
//       <p>Phone: {phone} </p>
//     </div>
//   );
// };

// export default User;

// With css or response (Using chatgpt)
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, phone, website, id } = user;

  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
      <h2 className="text-xl font-bold text-blue-400 mb-2">{name}</h2>
      <p className="text-gray-300">
        <span className="font-semibold text-gray-100">Email:</span> {email}
      </p>
      <p className="text-gray-300">
        <span className="font-semibold text-gray-100">Phone:</span> {phone}
      </p>
      <p className="text-gray-300">
        <span className="font-semibold text-gray-100">Website:</span>{" "}
        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {website}
        </a>
      </p>
      <Link
        to={`/user/${id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Show details
      </Link>
    </div>
  );
};

export default User;
