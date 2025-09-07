import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center px-4 py-16"
    >
      <div className="flex justify-center mb-8">
        <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Contact
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Interested in working together or have a question? Fill out the form
            below or email me at{" "}
            <a
              href="mailto:l.regene27@gmail.com"
              className="text-blue-600 underline"
            >
              l.regene27@gmail.com
            </a>
          </p>
          <form
            action="https://formspree.io/f/mqadwlaw"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="message"
                name="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
