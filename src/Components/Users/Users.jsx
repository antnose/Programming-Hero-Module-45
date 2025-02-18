const Users = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-xl bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
        <div className="text-center">
          <img
            src="https://source.unsplash.com/100x100/?portrait,person"
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-100">John Doe</h1>
          <p className="text-gray-300 text-lg">@johndoe</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">About</h2>
          <p className="text-gray-300 mt-2">
            Passionate developer with a love for JavaScript and React.
            Constantly learning and growing in the tech world. I enjoy building
            applications that solve real-world problems.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">Contact</h2>
          <ul className="text-gray-300 mt-2">
            <li>Email: johndoe@example.com</li>
            <li>Phone: +1234567890</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">Social Links</h2>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com/johndoe"
              className="text-blue-500 hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://github.com/johndoe"
              className="text-gray-400 hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              className="text-blue-600 hover:text-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
