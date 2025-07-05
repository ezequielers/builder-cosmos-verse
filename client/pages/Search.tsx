export default function Search() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets/TEMP/38759d1dabbdc3c1623035d8664ddb7d256f8593?placeholderIfAbsent=true')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {/* Status Bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-32 h-9 bg-black rounded-full flex items-center">
            <div className="w-20 h-9 bg-black rounded-full"></div>
            <div className="w-9 h-9 bg-black rounded-full ml-2"></div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-7 mx-4 mt-3.5">
          {/* Back Button */}
          <button
            className="bg-[#141414] rounded-[23px] shadow-[-4px_-4px_4px_rgba(47,47,47,0.4)] min-h-[45px] px-2.5 py-2 flex items-center justify-center hover:opacity-80 transition-opacity"
            onClick={() => window.history.back()}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7896e14918e7ac53803930ca790760bef9831c71?placeholderIfAbsent=true"
              alt="Back"
              className="w-6 h-6"
            />
          </button>

          {/* Search Input */}
          <div className="bg-[#151515] rounded-[80px] shadow-[10px_14px_11px_rgba(23,23,23,0.25)] border-[rgba(255,255,255,0.08)] flex-1 min-w-[240px] px-3 py-2.5 flex items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-5.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0fc6ad531e0acb7d3e4548437609ee4ebc79a5?placeholderIfAbsent=true"
                alt="Search"
                className="w-6 h-6"
              />
              <input
                type="text"
                placeholder="Ask or Type Something..."
                className="bg-transparent text-gray-400 flex-1 outline-none text-sm"
              />
            </div>
            <button className="hover:opacity-80 transition-opacity">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d424ae7635e9f50d1af656b05df522ff09e3f0f?placeholderIfAbsent=true"
                alt="Voice"
                className="w-7 h-7"
              />
            </button>
          </div>
        </div>

        {/* Spacer to push bottom navigation down */}
        <div className="flex-1" style={{ height: "546px" }} />

        {/* Bottom Navigation */}
        <div className="px-5 pt-8 pb-2">
          <div className="bg-white/10 rounded-[19px] px-6 py-3 flex items-center justify-between">
            <button
              className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = "/home")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5447e2ec9c88753ccea3b0d8656735f7acef1db2?placeholderIfAbsent=true"
                alt="Home"
                className="w-7 h-7"
              />
            </button>

            <button
              className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity"
              onClick={() => console.log("Navigation 2 clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04bdb03d09ee4052d4a98ee4a6f23bd2ab441cd2?placeholderIfAbsent=true"
                alt="Nav 2"
                className="w-7 h-7"
              />
            </button>

            <button
              className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity"
              onClick={() => console.log("Search clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dcceb6867a0d7dfb296c60bad528dbd1f6c947b?placeholderIfAbsent=true"
                alt="Search"
                className="w-7 h-7"
              />
            </button>

            <button
              className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity rounded-full"
              onClick={() => console.log("Profile clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67cd0f4bec2a45e51709c901ce3dfe2554c0701f?placeholderIfAbsent=true"
                alt="Profile"
                className="w-7 h-7 rounded-full"
              />
            </button>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
