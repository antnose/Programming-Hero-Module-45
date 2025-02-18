const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-3xl bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-6 text-center">
          Contact Us
        </h1>

        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-700 text-gray-300 p-3 rounded-md border border-gray-600"
              placeholder="Your Name"
              disabled
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-700 text-gray-300 p-3 rounded-md border border-gray-600"
              placeholder="Your Email"
              disabled
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full bg-gray-700 text-gray-300 p-3 rounded-md border border-gray-600"
              placeholder="Your Message"
              rows="5"
              disabled
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="button"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
              disabled
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
