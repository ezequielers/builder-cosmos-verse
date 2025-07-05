export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
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
            {/* Logo Starz centralizado */}
            <button
              className="hover:opacity-80 transition-opacity"
              onClick={() => console.log("Logo clicked")}
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl">⭐</div>
                <span className="text-white text-xl font-bold">starz</span>
              </div>
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

        {/* Content Container */}
        <div className="w-full">
          <div className="w-full pb-5 flex flex-col gap-8">
            {/* Seção Games made for you */}
            <div className="w-full">
              <div className="px-5 mb-4 flex items-center gap-0.5">
                <span className="text-white text-base font-medium">Games</span>
                <span className="text-white/60 text-base font-medium">
                  made for you
                </span>
              </div>

              {/* Carrossel horizontal */}
              <div className="w-full h-[98px] overflow-x-auto">
                <div className="flex px-5 items-center gap-2 w-[670px] h-[98px]">
                  {/* Game Cards */}
                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Roxz clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/454a2c7d96ffedc7cee7b28076ab13d393fc7261?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Roxz
                      </div>
                    </div>
                  </button>

                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Lynx clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/14e5879501a8977f2bbfd4a11f185d98ed1f6390?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Lynx
                      </div>
                    </div>
                  </button>

                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Zyra clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/b8b52c4ad6037e80ea953eeadb4d864633f2ca76?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Zyra
                      </div>
                    </div>
                  </button>

                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Fynn clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/bd9362200ed0d5e7e1a769f0a552a1c79e3d05e5?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Fynn
                      </div>
                    </div>
                  </button>

                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Juno clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/004fa8ed86ca22872906de3a6829413900440410?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Juno
                      </div>
                    </div>
                  </button>

                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Kira clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/c3f7454cb4177c168a87fba2524ff19f395d0604?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Kira
                      </div>
                    </div>
                  </button>

                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Milo clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/b1cbb63bd6a8b0f600b9184633d6d7b1ed79e810?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Milo
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Seção Most Popular Games */}
            <div className="w-full">
              <div className="px-5 mb-4 flex justify-between items-center">
                <div className="flex items-center gap-0.5">
                  <span className="text-white text-base font-medium">Most</span>
                  <span className="text-white/60 text-base font-medium">
                    popular games
                  </span>
                </div>
                <button
                  className="text-white/60 text-base font-medium hover:text-brand-blue transition-colors"
                  onClick={() => console.log("See all clicked")}
                >
                  See all
                </button>
              </div>

              {/* Carrossel de jogos populares */}
              <div className="w-full h-[102px] overflow-x-auto">
                <div className="flex px-5 items-center gap-2 w-[1200px] h-[102px]">
                  {/* Meet Cody Card */}
                  <button
                    className="w-[262px] h-[102px] rounded-[18px] relative bg-gradient-to-r from-[#fea43e] to-[#ff6b35] hover:opacity-90 transition-opacity flex-shrink-0"
                    onClick={() => console.log("Meet Cody clicked")}
                  >
                    {/* Blur effects */}
                    <div className="absolute -left-4 top-10 w-20 h-20 rounded-full bg-[#ff2b2b] blur-[20px] opacity-60" />
                    <div className="absolute right-0 -top-8 w-24 h-24 rounded-full bg-[#fc6637] blur-[12px] opacity-60" />

                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/580452c0d5cd21d8b2a2fce7ef353397ed656b67?width=183"
                      alt="Cody"
                      className="absolute left-[145px] -top-0.5 w-[92px] h-[103px] object-cover"
                    />

                    <div className="absolute left-4 top-8 flex flex-col items-start gap-0.5 w-[104px]">
                      <div className="text-white text-[18px] font-bold leading-none">
                        MEET CODY
                      </div>
                      <div className="flex items-center gap-0.5 w-full">
                        <span className="text-white/50 text-[11px] font-medium">
                          Most viewed
                        </span>
                        <span className="text-white text-[11px] font-semibold">
                          Creator
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Zirk A Stream Card */}
                  <button
                    className="w-[262px] h-[102px] rounded-[18px] relative hover:opacity-90 transition-opacity flex-shrink-0"
                    onClick={() => console.log("Zirk A Stream clicked")}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eb73e6fbba92c9640f34db99bc2e5c23a9959b8?width=526"
                      alt="Zirk A Stream"
                      className="w-full h-full object-cover rounded-[18px]"
                    />

                    <div className="absolute left-4 top-8 flex flex-col items-start gap-0.5 w-[104px]">
                      <div className="text-white text-[18px] font-bold leading-none">
                        ZIRK A STREAM
                      </div>
                      <div className="flex items-center gap-0.5 w-full">
                        <span className="text-white/50 text-[11px] font-medium">
                          The New
                        </span>
                        <span className="text-white text-[11px] font-semibold">
                          Trendy
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Card 3 */}
                  <button
                    className="w-[262px] h-[102px] rounded-[18px] relative hover:opacity-90 transition-opacity flex-shrink-0"
                    onClick={() => console.log("Card 3 clicked")}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/13abb26c4b5731486e36e8fe98d365b4653fa244?width=526"
                      alt="Card 3"
                      className="w-full h-full object-cover rounded-[18px]"
                    />

                    <div className="absolute left-4 top-8 flex flex-col items-start gap-0.5 w-[104px]">
                      <div className="text-white text-[18px] font-bold leading-none">
                        ZIRK A EVENT
                      </div>
                      <div className="flex items-center gap-0.5 w-full">
                        <span className="text-white/50 text-[11px] font-medium">
                          Most engage
                        </span>
                        <span className="text-white text-[11px] font-semibold">
                          Host
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Zirk A Event Card */}
                  <button
                    className="w-[262px] h-[102px] rounded-[18px] relative bg-[#1b6598] hover:opacity-90 transition-opacity flex-shrink-0"
                    onClick={() => console.log("Zirk A Event clicked")}
                  >
                    {/* Blur effects */}
                    <div className="absolute -left-10 -top-8 w-[91px] h-[91px] rounded-full bg-[#644A79] blur-[23px] opacity-60" />
                    <div className="absolute right-0 top-5 w-[137px] h-[137px] rounded-full bg-[#C9A2CF] blur-[33px] opacity-60" />

                    <div className="absolute left-4 top-8 flex flex-col items-start gap-0.5 w-[104px]">
                      <div className="text-white text-[18px] font-bold leading-none">
                        ZIRK A EVENT
                      </div>
                      <div className="flex items-center gap-0.5 w-full">
                        <span className="text-white/50 text-[11px] font-medium">
                          Most engage
                        </span>
                        <span className="text-white text-[11px] font-semibold">
                          Host
                        </span>
                      </div>
                    </div>

                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d962cca45219bbfc65c846c00cd643ba9b8652?width=112"
                      alt="Person 1"
                      className="absolute left-[163px] top-[18px] w-[56px] h-[65px] object-cover"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f9e7a756884184da59bd95a23154412581daec3?width=85"
                      alt="Person 2"
                      className="absolute left-[169px] top-[87px] w-[43px] h-auto object-cover"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6f53c812b0b04c1a21b66062d835030a938c6?width=85"
                      alt="Person 3"
                      className="absolute left-[169px] -top-[28px] w-[43px] h-auto object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Seção Crash Games */}
            <div className="w-full">
              <div className="px-5 mb-4 flex items-center gap-1">
                <span className="text-white text-base font-medium">Crash</span>
                <span className="text-white/50 text-base font-medium">
                  Games
                </span>
              </div>

              <div className="w-full h-[84px] overflow-x-auto">
                <div className="flex px-5 items-center gap-4 w-[704px] h-[84px]">
                  {/* Círculos com imagens dos jogos crash */}
                  <button
                    className="w-[84px] h-[84px] rounded-full bg-gray-400 hover:scale-105 transition-transform"
                    style={{
                      backgroundImage:
                        "url('https://cdn.builder.io/api/v1/image/assets/TEMP/crash1.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => console.log("Crash game 1 clicked")}
                  />
                  <button
                    className="w-[84px] h-[84px] rounded-full bg-gray-400 hover:scale-105 transition-transform"
                    style={{
                      backgroundImage:
                        "url('https://cdn.builder.io/api/v1/image/assets/TEMP/crash2.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => console.log("Crash game 2 clicked")}
                  />
                  <button
                    className="w-[84px] h-[84px] rounded-full bg-gray-400 hover:scale-105 transition-transform"
                    style={{
                      backgroundImage:
                        "url('https://cdn.builder.io/api/v1/image/assets/TEMP/crash3.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => console.log("Crash game 3 clicked")}
                  />
                  <button
                    className="w-[84px] h-[84px] rounded-full bg-gray-400 hover:scale-105 transition-transform"
                    style={{
                      backgroundImage:
                        "url('https://cdn.builder.io/api/v1/image/assets/TEMP/crash4.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => console.log("Crash game 4 clicked")}
                  />
                </div>
              </div>
            </div>

            {/* Seção Fantasy Sport */}
            <div className="w-full">
              <div className="px-5 mb-4 flex items-center gap-1">
                <span className="text-white text-base font-medium">
                  Fantasy
                </span>
                <span className="text-white/50 text-base font-medium">
                  Sport
                </span>
              </div>

              <div className="w-full h-[98px] overflow-x-auto">
                <div className="flex px-5 items-center gap-2 w-[670px] h-[98px]">
                  {/* Repetindo os mesmos cards da primeira seção */}
                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Fantasy Roxz clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/454a2c7d96ffedc7cee7b28076ab13d393fc7261?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Roxz
                      </div>
                    </div>
                  </button>

                  {/* Mais cards similares... */}
                  <button
                    className="relative flex-shrink-0 hover:scale-105 transition-transform"
                    onClick={() => console.log("Fantasy Lynx clicked")}
                  >
                    <div
                      className="w-[86px] h-[98px] rounded-[20px] relative"
                      style={{
                        background:
                          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/14e5879501a8977f2bbfd4a11f185d98ed1f6390?width=172') lightgray 50% / cover no-repeat",
                      }}
                    >
                      <div className="absolute left-0 top-[68px] w-[86px] h-[30px] bg-gradient-to-b from-transparent to-[#1c1c1c] backdrop-blur-[3px]" />
                      <div className="absolute left-1/2 top-[70px] transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded-full">
                        Lynx
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
