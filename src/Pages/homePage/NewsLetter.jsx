import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import newsletterLottie from "./../../assets/lottie/newsletter.json";

const Newsletter = () => {
  const [message, setMessage] = useState("");
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EmailServiceId,
        import.meta.env.VITE_Email_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EmailJsPublic
      )
      .then(
        () => {
          setMessage("Successfully subscribed! 🎉");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("Error:", error);
          setMessage("Subscription failed. Try again!");
        }
      );
  };

  return (
    <section className="relative py-16 px-4 md:px-12 bg-gradient-to-r from-blue-600 to-green-500">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
          {/* <Lottie
            className="w-32 mx-auto"
            animationData={newsletterLottie}
            loop={true}
          /> */}
          <h2 className="text-4xl font-extrabold text-white">Stay Updated!</h2>
          <p className="text-gray-200 mt-3">
            Subscribe to our newsletter and never miss an update.
          </p>

          <form
            ref={form}
            onSubmit={handleSubscribe}
            className="mt-6 flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-grow px-5 py-3 border border-white/20 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {message && <p className="mt-4 text-white">{message}</p>}

          <p className="text-gray-200 mt-3">We promise not to spam you!</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
