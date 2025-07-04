export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0">
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
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-40 md:h-40 border border-brand-blue/30 rounded-lg animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 md:w-32 md:h-32 border border-brand-blue/20 rounded-lg animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 md:w-48 md:h-48 border border-brand-blue/10 rounded-lg animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Blue triangular accent */}
        <div className="absolute top-1/3 right-8">
          <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-brand-blue/60 transform rotate-45" />
        </div>
        <div className="absolute bottom-1/3 left-8">
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-brand-blue/40 transform -rotate-12" />
        </div>
      </div>

      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center px-4 sm:px-6 pt-3 pb-2">
        <div className="text-white font-semibold text-base">9:41</div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
            <path d="M3 6h18l-2-2H5L3 6zm0 12h18l-2 2H5l-2-2zm16-8H5v4h14v-4z" />
          </svg>
          <div className="flex items-center">
            <div className="w-6 h-3 border border-white/35 rounded-sm relative">
              <div className="w-5 h-2 bg-white rounded-sm absolute top-0.5 left-0.5"></div>
            </div>
            <div className="text-xs ml-1">95</div>
          </div>
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="relative z-10 flex justify-center mt-2">
        <div className="w-32 h-9 bg-black rounded-full flex items-center">
          <div className="w-20 h-9 bg-black rounded-full"></div>
          <div className="w-9 h-9 bg-black rounded-full ml-2"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 sm:px-10 py-12 sm:py-20">
        <div className="w-full max-w-sm mx-auto">
          {/* Login Card */}
          <div
            className="bg-white/[0.03] backdrop-blur-sm rounded-[33px] p-4 border border-white/10"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
            }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/660fb0523fed756a939ca9bca82f7c8d3bd9c518?placeholderIfAbsent=true"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-center text-white text-[11px] mb-4">
              Play responsibly, platform for over 18s only
            </div>

            {/* Hello Button */}
            <div className="mb-5">
              <div className="border border-brand-blue rounded-full px-3 py-2 flex items-center justify-between shadow-[0px_0px_2px_rgba(29,146,242,0.6)]">
                <span className="text-white text-sm font-medium ml-2">
                  hello!
                </span>
                <div className="w-px h-6 bg-white/20"></div>
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <div className="bg-transparent border-0 rounded-full px-4 py-3 flex items-center justify-between">
                <span className="text-white text-sm">Enter password</span>
                <div className="w-4 h-4 bg-brand-blue rounded shadow-[0px_0px_7px_rgba(29,146,242,0.8)]">
                  <svg
                    viewBox="0 0 16 16"
                    fill="white"
                    className="w-full h-full"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 9H8.5v3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V9H4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H7.5V4.5c0-.28.22-.5.5-.5s.5.22.5.5V8h3.5c.28 0 .5.22.5.5s-.22.5-.5.5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Links Row */}
            <div className="flex items-center justify-between mb-4 px-4">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-brand-blue rounded shadow-[0px_0px_7px_rgba(29,146,242,1)]">
                  <svg
                    viewBox="0 0 16 16"
                    fill="white"
                    className="w-full h-full"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                  </svg>
                </div>
                <span className="text-brand-blue text-xs">Crisr account</span>
              </div>
              <span className="text-white text-xs">Forgot password?</span>
            </div>

            {/* Login Button */}
            <div className="mb-6">
              <button
                className="w-full bg-brand-blue text-white rounded-[27px] py-3 px-8 font-medium text-[15px] shadow-[0px_-35px_10px_rgba(40,146,234,0)]"
                style={{
                  background: "rgba(16, 134, 232, 1)",
                }}
              >
                Login
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-white text-xs">
                Don't have an account?{" "}
              </span>
              <span
                className="text-brand-blue text-xs"
                style={{
                  textShadow: "0px 0px 9px rgba(29, 146, 242, 0.8)",
                }}
              >
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Background Image */}
      <div className="absolute bottom-0 right-0 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d1bb378b5e6fc137e567424f2897a445fd98688?placeholderIfAbsent=true"
          alt="Background"
          className="w-auto h-auto object-contain opacity-80"
        />
      </div>

      {/* Home Indicator */}
      <div className="relative z-10 flex justify-center pb-2">
        <div className="w-32 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
