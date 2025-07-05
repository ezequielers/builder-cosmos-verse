export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Container principal */}
      <div className="w-full relative">
        {/* Header com informações do usuário */}
        <div className="flex items-center justify-between px-5 pt-16 pb-4">
          {/* Info do usuário */}
          <div className="flex items-center gap-6">
            <button
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              onClick={() => console.log("Wallet clicked")}
            >
              {/* Nome e valor */}
              <div>
                <div className="text-white text-sm font-medium">
                  Oliver Bennet
                </div>
                <div className="text-white text-xs">$37,657.00</div>
              </div>
              {/* Ícone + */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36a75653a2eacb072809c140a3a6180561d90510?placeholderIfAbsent=true"
                alt="Add"
                className="w-5 h-5"
              />
            </button>
            {/* Logo Starz */}
            <button
              className="hover:opacity-80 transition-opacity"
              onClick={() => console.log("Logo clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/068a262e4e1c39345b4089ac9bce61d6724b5a20?placeholderIfAbsent=true"
                alt="Starz Logo"
                className="w-16 h-10"
              />
            </button>
          </div>
          {/* Avatar do usuário */}
          <button
            className="hover:opacity-80 transition-opacity"
            onClick={() => console.log("Profile clicked")}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9abfbeea575d8eb1f04c7feb67db1b93c5562a3?placeholderIfAbsent=true"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </button>
        </div>

        {/* Seção Games made for you */}
        <div className="mb-5">
          <div className="flex items-center justify-between px-5 mb-4">
            <div className="flex items-center gap-1">
              <span className="text-white text-base font-medium">Games</span>
              <span className="text-white text-base font-medium">
                made for you
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={() => {
                  const container = document.getElementById("games-carousel");
                  container?.scrollBy({ left: -200, behavior: "smooth" });
                }}
              >
                <span className="text-white text-sm">‹</span>
              </button>
              <button
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={() => {
                  const container = document.getElementById("games-carousel");
                  container?.scrollBy({ left: 200, behavior: "smooth" });
                }}
              >
                <span className="text-white text-sm">›</span>
              </button>
            </div>
          </div>

          {/* Carrossel dos jogos */}
          <div
            id="games-carousel"
            className="flex gap-2 overflow-x-auto scrollbar-hide px-5"
          >
            {/* Game Card 1 - Roxz */}
            <button
              className="relative flex-shrink-0 hover:scale-105 transition-transform"
              onClick={() => console.log("Roxz game clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/21cb7445f9469fee276208583612f75d26db352c?placeholderIfAbsent=true"
                alt="Roxz"
                className="w-[86px] h-[98px] rounded-[20px] object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                  Roxz
                </div>
              </div>
            </button>

            {/* Game Card 2 - Lynx */}
            <button
              className="relative flex-shrink-0 hover:scale-105 transition-transform"
              onClick={() => console.log("Lynx game clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe1e0004cc859dde75bf385ba11fe99ecb50c37a?placeholderIfAbsent=true"
                alt="Lynx"
                className="w-[86px] h-[98px] rounded-[20px] object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                  Lynx
                </div>
              </div>
            </button>

            {/* Game Card 3 - Zyra */}
            <button
              className="relative flex-shrink-0 hover:scale-105 transition-transform"
              onClick={() => console.log("Zyra game clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb77a4d8783ef5f04174aec94e09da538e71b26?placeholderIfAbsent=true"
                alt="Zyra"
                className="w-[86px] h-[98px] rounded-[20px] object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                  Zyra
                </div>
              </div>
            </button>

            {/* Game Card 4 - Fynn */}
            <button
              className="relative flex-shrink-0 hover:scale-105 transition-transform"
              onClick={() => console.log("Fynn game clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a964e2a4efe827b9b437995640366d190783af69?placeholderIfAbsent=true"
                alt="Fynn"
                className="w-[86px] h-[98px] rounded-[20px] object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                  Fynn
                </div>
              </div>
            </button>

            {/* Game Card 5 - Juno */}
            <button
              className="relative flex-shrink-0 hover:scale-105 transition-transform"
              onClick={() => console.log("Juno game clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8788b977ae95a4370ef42b36f52d007bd432ae2?placeholderIfAbsent=true"
                alt="Juno"
                className="w-[86px] h-[98px] rounded-[20px] object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                  Juno
                </div>
              </div>
            </button>

            {/* Game Card 6 - Kira */}
            <button
              className="relative flex-shrink-0 hover:scale-105 transition-transform"
              onClick={() => console.log("Kira game clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50070c4b8ca8b4fdf696649e19628dbd1db64569?placeholderIfAbsent=true"
                alt="Kira"
                className="w-[86px] h-[98px] rounded-[20px] object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                  Kira
                </div>
              </div>
            </button>

            {/* Game Card 7 - Milo */}
            <button
              className="relative flex-shrink-0 hover:scale-105 transition-transform"
              onClick={() => console.log("Milo game clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c77453a0cf0f5a62f6442dec9033e1afb864e96?placeholderIfAbsent=true"
                alt="Milo"
                className="w-[86px] h-[98px] rounded-[20px] object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                  Milo
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Seção Most popular games */}
        <div className="px-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <span className="text-white text-base font-medium">Most</span>
              <span className="text-white text-base font-medium">
                popular games
              </span>
            </div>
            <button
              className="text-white text-base hover:text-brand-blue transition-colors"
              onClick={() => console.log("See all popular games clicked")}
            >
              See all
            </button>
          </div>

          {/* Popular Games Grid */}
          <button
            className="w-full hover:opacity-90 transition-opacity"
            onClick={() => console.log("Popular games grid clicked")}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b22a230e4726ea6ecfb21adfa57fdb45a6a93647?placeholderIfAbsent=true"
              alt="Popular Games"
              className="w-full h-auto"
            />
          </button>
        </div>

        {/* Seção Crash Games */}
        <div className="px-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <span className="text-white text-base font-medium">Crash</span>
              <span className="text-white text-base font-medium">Games</span>
            </div>
            <div className="flex gap-2">
              <button
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={() => {
                  const container = document.getElementById("crash-carousel");
                  container?.scrollBy({ left: -200, behavior: "smooth" });
                }}
              >
                <span className="text-white text-sm">‹</span>
              </button>
              <button
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={() => {
                  const container = document.getElementById("crash-carousel");
                  container?.scrollBy({ left: 200, behavior: "smooth" });
                }}
              >
                <span className="text-white text-sm">›</span>
              </button>
            </div>
          </div>

          {/* Crash Games Carousel */}
          <div id="crash-carousel" className="overflow-x-auto scrollbar-hide">
            <button
              className="w-full hover:opacity-90 transition-opacity"
              onClick={() => console.log("Crash games clicked")}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/38d554a47656c3c20d2165e76c0cfb0f1707b2f7?placeholderIfAbsent=true"
                alt="Crash Games"
                className="w-full h-auto"
              />
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="w-full mb-4">
          <button
            className="w-full hover:opacity-90 transition-opacity"
            onClick={() => console.log("Bottom navigation clicked")}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/596a9800c458304b539c67704e2608688ca4db8a?placeholderIfAbsent=true"
              alt="Bottom Navigation"
              className="w-full h-auto"
            />
          </button>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-4">
          <div className="w-32 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
