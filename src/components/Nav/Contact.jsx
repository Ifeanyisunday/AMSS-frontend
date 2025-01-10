import React from 'react'

export const Contact = () => {
  return (
    <div>
        <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              rows="4"
            ></textarea>
            <button type="submit" className="bg-blue-400 text-white px-6 py-3 rounded hover:bg-blue-400">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
