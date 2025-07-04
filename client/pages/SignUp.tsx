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
              className="bg-white/[0.03] backdrop-blur-sm rounded-[33px] px-4 py-6 border border-brand-blue/30 relative w-full max-w-sm mx-auto animate-border-glow"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(29, 146, 242, 0.4)",
                marginTop: "-56px",
                zIndex: 10,
              }}
            >
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc8cfca53adb66b3b9c9418de9b79a129b6ae610?placeholderIfAbsent=true"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-center text-blue-200 text-[11px] mb-4">
                Play responsibly, platform for over 18s only
              </div>

              {/* Name Field */}
              <div className="mb-4">
                <button
                  className="w-full border border-brand-blue rounded-full px-3 py-2 flex items-center gap-1.5 shadow-[0px_0px_2px_rgba(29,146,242,0.6)] hover:bg-brand-blue/10 transition-colors cursor-pointer"
                  onClick={() => console.log("Name field clicked")}
                >
                  <span className="text-blue-100 text-sm font-medium">
                    Oliver Bennet
                  </span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3cfde06dc9eb024947ade00c1220a3109295328?placeholderIfAbsent=true"
                    alt=""
                    className="w-px h-6"
                  />
                </button>
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <button
                  className="w-full bg-transparent border-0 rounded-full px-4 py-3 flex items-center justify-start hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => console.log("Email field clicked")}
                >
                  <span className="text-blue-100 text-sm">Email Address</span>
                </button>
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <button
                  className="w-full bg-transparent border-0 rounded-full px-4 py-3 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => console.log("Password field clicked")}
                >
                  <span className="text-blue-100 text-sm">Enter Password</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/43a27eabf22d3e8627bd43ab35e3f7352c1704a7?placeholderIfAbsent=true"
                    alt=""
                    className="w-4 h-3 shadow-[0px_0px_7px_rgba(29,146,242,0.8)]"
                  />
                </button>
              </div>

              {/* CPF Field */}
              <div className="mb-7">
                <button
                  className="w-full bg-transparent border-0 rounded-full px-4 py-3 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => console.log("CPF field clicked")}
                >
                  <span className="text-blue-100 text-sm">CPF document</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04ca358fd0c7f01b89032ed5b420814422ef91a1?placeholderIfAbsent=true"
                    alt=""
                    className="w-[18px] h-4 shadow-[0px_0px_11px_rgba(29,146,242,0.7)]"
                  />
                </button>
              </div>

              {/* Privacy Policy Link */}
              <div className="mb-6 px-4">
                <button
                  className="flex items-center space-x-1 hover:opacity-80 transition-opacity cursor-pointer"
                  onClick={() => console.log("Privacy Policy clicked")}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e7708e344128f728ccdcfe7ac375d765c15755d?placeholderIfAbsent=true"
                    alt=""
                    className="w-4 h-4 shadow-[0px_0px_7px_rgba(29,146,242,1)]"
                  />
                  <span className="text-brand-blue text-xs">
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
                  onClick={() => console.log("Sign Up button clicked")}
                >
                  Sign Up
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <span className="text-blue-200 text-xs">
                  Already have an account?{" "}
                </span>
                <button
                  className="text-brand-blue text-xs hover:opacity-80 transition-opacity cursor-pointer"
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
