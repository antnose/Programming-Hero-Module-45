const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-3xl bg-gray-800 shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">About Us</h1>
        <p className="text-gray-300 text-lg">
          Welcome to{" "}
          <span className="font-semibold text-blue-400">Your Gym</span>, where
          fitness meets passion! Our mission is to help you achieve your health
          and fitness goals with expert trainers, top-notch equipment, and a
          motivating community.
        </p>
        <p className="text-gray-300 text-lg mt-4">
          Whether you're a beginner or an athlete, we provide personalized
          training plans, nutrition advice, and a friendly environment to keep
          you motivated.
        </p>
        <p className="text-gray-300 text-lg mt-4">
          Join us today and take your fitness journey to the next level!
        </p>
      </div>
    </div>
  );
};

export default About;
