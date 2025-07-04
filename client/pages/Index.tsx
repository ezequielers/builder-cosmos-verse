export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[480px] mx-auto relative">
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
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98037bc34dca25a19abb13f06345208558097df1?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d"
              alt="Signal"
              className="w-[18px] h-[27px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f123edb983d29e5947e65c2a5195da722955a47?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d"
              alt="WiFi"
              className="w-[17px] h-[24px]"
            />
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8de8b3e67346685c7799e92e44551fb99c7c7278?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d"
                alt="Battery"
                className="w-[28px] h-[13px]"
              />
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

        {/* Background Image with Login Card Overlay */}
        <div
          className="relative z-10 w-full mt-[135px] px-10 pb-2"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets/TEMP/49d0f5ecc51bdd31675891f1d4e6293eebab806d?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            aspectRatio: "0.884",
          }}
        >
          {/* Login Card */}
          <div
            className="bg-white/[0.03] backdrop-blur-sm rounded-[33px] px-4 py-6 border border-white/10 relative"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
            }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/409b62c2ded1c7c1e23880eed880d163217b69f7?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d"
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
              <div className="border border-brand-blue rounded-full px-3 py-2 flex items-center gap-1.5 shadow-[0px_0px_2px_rgba(29,146,242,0.6)]">
                <span className="text-white text-sm font-medium">hello!</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f76f2988ec98a5cb918a74260d7aa1698567d924?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d"
                  alt=""
                  className="w-px h-6"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <div className="bg-transparent border-0 rounded-full px-4 py-3 flex items-center justify-between">
                <span className="text-white text-sm">Enter password</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cccd715ae1fb10fbb63c19a891e60a0dccd5e6?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d"
                  alt=""
                  className="w-4 h-3 shadow-[0px_0px_7px_rgba(29,146,242,0.8)]"
                />
              </div>
            </div>

            {/* Links Row */}
            <div className="flex items-center justify-between mb-4 px-4">
              <div className="flex items-center space-x-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e98d278436a69cae13e30c34dc2b1f09d543e05?placeholderIfAbsent=true&apiKey=18dae956f5b2411b871a2e3e8076440d"
                  alt=""
                  className="w-4 h-4 shadow-[0px_0px_7px_rgba(29,146,242,1)]"
                />
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

        {/* Home Indicator */}
        <div className="relative z-10 flex justify-center mt-[181px] pb-2">
          <div className="w-32 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
