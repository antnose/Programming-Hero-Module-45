// Without css or response

// import { useLoaderData } from "react-router-dom";
// import User from "../User/User";

// const Users = () => {
//   const users = useLoaderData();
//   return (
//     <>
//       <h2 className="text-5xl">Our users: {users.length} </h2>
//       <div>
//         {users.map((user) => (
//           <User user={user} key={user.id} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Users;

// With css or response (make the responsive using chatgpt)
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Our Users: {users.length}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
