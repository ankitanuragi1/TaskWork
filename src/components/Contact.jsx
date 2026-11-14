
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    event.target.reset();
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-white px-5 py-20 transition-colors dark:bg-gray-950"
    >
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Contact Us
          </h2>

          <p className="mt-3 text-slate-600 dark:text-gray-400">
            Have a question? Send us a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              minLength={2}
              className="w-full border border-slate-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-slate-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message"
              required
              minLength={5}
              className="w-full resize-y border border-slate-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Send Message
          </button>

          {submitted && (
            <p
              role="status"
              className="text-center text-sm text-green-700 dark:text-green-400"
            >
              Your message has been submitted successfully. This is a demo
              confirmation.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
