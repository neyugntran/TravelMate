export default function Contact() {
  return (
    <div>
      <div className="py-12 mx-auto">
        <div className="mx-auto">
          <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30b8b8] transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30b8b8] transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30b8b8] transition duration-300"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  defaultValue={""}
                />
              </div>
              <button
                className="cursor-pointer w-full text-white bg-[#30b8b8] py-2 px-4 rounded-lg hover:bg-[#75c9c9] transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
