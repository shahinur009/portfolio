import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bwngggma", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div
      name="Contact"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 md:px-10 my-4"
    >
      {/* Personal Information Section */}
      <div className="border-2 border-gray-200 rounded-lg shadow-lg p-6 bg-slate-200">
        <h1 className="text-3xl font-bold mb-6">Personal Information</h1>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="mr-4 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Email Address</h3>
              <p className="text-gray-600">shaheenmis170879@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Mobile Number</h3>
              <p className="text-gray-600">+880-1744604009 (WhatsApp)</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">
                Dhaka, Bangladesh.
                <br />
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-4">
            <h3 className="font-semibold text-gray-700 mb-3">
              Connect with me
            </h3>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/shahin.ahamed.3139">
                <FaFacebook size={24} />
              </Link>
              <Link to="https://github.com/shahinur009">
                <FaGithub size={24} />
              </Link>
              <Link to="https://www.instagram.com/shahin.ahamed.3139/?hl=en">
                <FaInstagram size={24} />
              </Link>
              <Link to="https://www.linkedin.com/in/shaheen-ahamed-shahinur/">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="border-2 border-gray-200 p-6 rounded-lg shadow-lg bg-slate-200">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <div className="flex flex-col items-center justify-center border-2 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full p-2">
            <h1 className="text-xl font-semibold mb-6">Send Your Message</h1>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your query"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
