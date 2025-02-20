import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-center p-8 bg-gray-900 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-extrabold mb-4">Oops!!!</h2>
        <p className="text-xl mb-4">Something went wrong.</p>
        <p className="text-lg">
          <span className="font-bold">{error.status}</span> - {error.statusText}
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
