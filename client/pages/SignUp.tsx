import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpf: "",
    acceptPolicy: false,
  });

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Full screen background container */}
      {/* Space Background - Full Screen */}
      <div className="fixed inset-0 w-full h-full">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-brand-blue/30 rounded-lg animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-brand-blue/20 rounded-lg animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border border-brand-blue/10 rounded-lg animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Additional responsive shapes */}
        <div
          className="absolute top-1/2 right-1/3 w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 border border-brand-blue/15 rounded-lg animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-14 h-14 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-brand-blue/25 rounded-lg animate-float"
          style={{ animationDelay: "3s" }}
        />

        {/* Blue triangular accent */}
        <div className="absolute top-1/3 right-4 sm:right-8">
          <div className="w-0 h-0 border-l-[20px] sm:border-l-[30px] border-l-transparent border-r-[20px] sm:border-r-[30px] border-r-transparent border-b-[35px] sm:border-b-[50px] border-b-brand-blue/60 transform rotate-45" />
        </div>
        <div className="absolute bottom-1/3 left-4 sm:left-8">
          <div className="w-0 h-0 border-l-[15px] sm:border-l-[20px] border-l-transparent border-r-[15px] sm:border-r-[20px] border-r-transparent border-b-[25px] sm:border-b-[35px] border-b-brand-blue/40 transform -rotate-12" />
        </div>

        {/* Additional triangular accents for larger screens */}
        <div className="hidden lg:block absolute top-1/4 left-1/2">
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-brand-blue/30 transform rotate-90" />
        </div>
        <div className="hidden lg:block absolute bottom-1/4 right-1/2">
          <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[40px] border-b-brand-blue/20 transform -rotate-45" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[480px] mx-auto px-4 sm:px-6">
          {/* Dynamic Island */}
          <div className="flex justify-center mt-2">
            <div className="w-32 h-9 bg-black rounded-full flex items-center">
              <div className="w-20 h-9 bg-black rounded-full"></div>
              <div className="w-9 h-9 bg-black rounded-full ml-2"></div>
            </div>
          </div>

          {/* Background Image with Sign Up Card Overlay */}
          <div
            className="relative w-full mt-8 sm:mt-[135px] px-4 sm:px-10 pb-2"
            style={{
              backgroundImage:
                "url('https://cdn.builder.io/api/v1/image/assets/TEMP/49d0f5ecc51bdd31675891f1d4e6293eebab806d?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "0.884",
            }}
          >
            {/* Sign Up Card */}
            <div
              className="bg-white/[0.03] backdrop-blur-sm rounded-[33px] px-6 py-8 border border-brand-blue/30 relative w-full max-w-sm mx-auto animate-border-glow"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(29, 146, 242, 0.4)",
                marginTop: "-56px",
                zIndex: 10,
              }}
            >
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">⭐</div>
                  <span className="text-white text-xl font-bold">starz</span>
                </div>
              </div>

              {/* Inspirational Text */}
              <div className="text-center mb-2">
                <div
                  className="text-lg font-medium"
                  style={{
                    background: "linear-gradient(45deg, #8B5CF6, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Be Inspired by the Unexpected
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-center text-gray-400 text-[11px] mb-6">
                Play responsibly, platform for over 18s only
              </div>

              {/* Name Field */}
              <div className="mb-4">
                <button
                  className="w-full border border-brand-blue rounded-full px-4 py-4 flex items-center justify-between shadow-[0px_0px_8px_rgba(29,146,242,0.4)] hover:bg-brand-blue/10 transition-colors cursor-pointer bg-black/20"
                  onClick={() => console.log("Name field clicked")}
                >
                  <span className="text-white text-sm font-medium">
                    Oliver Bennet
                  </span>
                  <div className="w-px h-4 bg-brand-blue/60"></div>
                </button>
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <button
                  className="w-full bg-black/30 border-0 rounded-full px-4 py-4 flex items-center justify-start hover:bg-black/40 transition-colors cursor-pointer"
                  onClick={() => console.log("Email field clicked")}
                >
                  <span className="text-gray-400 text-sm">Email Address</span>
                </button>
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <button
                  className="w-full bg-black/30 border-0 rounded-full px-4 py-4 flex items-center justify-between hover:bg-black/40 transition-colors cursor-pointer"
                  onClick={() => console.log("Password field clicked")}
                >
                  <span className="text-gray-400 text-sm">Enter Password</span>
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* CPF Field */}
              <div className="mb-7">
                <button
                  className="w-full bg-black/30 border-0 rounded-full px-4 py-4 flex items-center justify-between hover:bg-black/40 transition-colors cursor-pointer"
                  onClick={() => console.log("CPF field clicked")}
                >
                  <span className="text-gray-400 text-sm">CPF document</span>
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="mb-6">
                <button
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
                  onClick={() => console.log("Privacy Policy clicked")}
                >
                  <div className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-brand-blue text-sm">
                    Privacy Policy
                  </span>
                </button>
              </div>

              {/* Sign Up Button */}
              <div className="mb-6">
                <button
                  className="w-full bg-brand-blue text-white rounded-[27px] py-3 px-8 font-medium text-[15px] shadow-[0px_-35px_10px_rgba(40,146,234,0)] hover:bg-brand-blue/90 transition-colors cursor-pointer"
                  style={{
                    background: "rgba(16, 134, 232, 1)",
                  }}
                  onClick={() => (window.location.href = "/home")}
                >
                  Sign Up
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <span className="text-gray-400 text-sm">
                  Already have an account?{" "}
                </span>
                <button
                  className="text-brand-blue text-sm hover:opacity-80 transition-opacity cursor-pointer"
                  style={{
                    textShadow: "0px 0px 9px rgba(29, 146, 242, 0.8)",
                  }}
                  onClick={() => (window.location.href = "/")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center mt-8 sm:mt-[181px] pb-2">
            <div className="w-32 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
