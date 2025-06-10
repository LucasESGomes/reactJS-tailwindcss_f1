import { useState } from "react";
import background from "./assets/f1-car-walpaper.jpg";
import amr23 from "./assets/amr23-2023.jpg";
import amr22 from "./assets/amr22.webp"
import amr21 from "./assets/amr21.jpg"
import safetyCar from "./assets/safety-car.jpg"
import fernandoAlonso from "./assets/fernandoAlonso.png"
import lanceStroll from "./assets/lanceStroll.png"



function Main() {
  // Dados para o carrossel de carros
  const carModels = [
    {
      id: 1,
      name: "AMR23",
      year: "2023",
      image: amr23,
      description:
        "O mais recente challenger da Aston Martin para o campeonato",
      specs: "Motor Mercedes-AMG F1 M14, Aerodinâmica revolucionária",
    },
    {
      id: 2,
      name: "AMR22",
      year: "2022",
      image: amr22,
      description: "Segunda temporada completa da equipe",
      specs: "Motor Mercedes-AMG F1 M13, Evolução do conceito de aerodinâmica",
    },
    {
      id: 3,
      name: "AMR21",
      year: "2021",
      image: amr21,
      description: "O retorno triunfal da Aston Martin à F1",
      specs: "Motor Mercedes-AMG F1 M12, Primeiro carro da nova era",
    },
    {
      id: 4,
      name: "Vantage F1 Edition",
      year: "2021",
      image: safetyCar,
      description: "Carro de segurança oficial inspirado na F1",
      specs: "Motor V8 biturbo 4.0L, 535 cv de potência",
    },
  ];

  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  const nextCar = () => {
    setCurrentCarIndex((prevIndex) =>
      prevIndex === carModels.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCar = () => {
    setCurrentCarIndex((prevIndex) =>
      prevIndex === 0 ? carModels.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-full bg-gray-900 text-white">
      {/* Seção Hero com gradiente */}
      <section
        className="relative brightness-95 h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:to-transparent before:-z-10"></div>

        <div className="z-10 px-4"> 
          <i className="bxr bx-arrow-down-stroke text-9xl pt-150"></i>

        </div>
      </section>

      {/* Seção Carros - Carrossel */}
      <section className="py-20 bg-[#1ab163] relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-32">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">FORMULA 1 - CARS </h2>
            <div className="flex gap-4">
              <button
                onClick={prevCar}
                className="bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all"
                aria-label="Carro anterior"
              >
                <i className="bx bx-chevron-left text-2xl"></i>
              </button>
              <button
                onClick={nextCar}
                className="bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all"
                aria-label="Próximo carro"
              >
                <i className="bx bx-chevron-right text-2xl"></i>
              </button>
            </div>
          </div>

          <div className="relative h-96">
            {carModels.map((car, index) => (
              <div
                key={car.id}
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col md:flex-row items-center gap-12 ${
                  index === currentCarIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex-1 h-full bg-gray-800/30 rounded-lg flex items-center justify-center">
                <img 
                  src={car.image} // Agora usando a imagem importada diretamente
                  alt={`Aston Martin ${car.name} ${car.year}`}
                  className="max-h-full max-w-full object-contain"
                />
                </div>

                <div className="flex-1">
                  <h3 className="text-4xl font-bold mb-4 text-white">
                    {car.name}
                  </h3>
                  <p className="text-xl mb-2 text-white/80">{car.year}</p>
                  <p className="text-lg mb-6 text-white/90">
                    {car.description}
                  </p>
                  <p className="text-sm mb-6 text-white/80">{car.specs}</p>
                  <button className="mt-4 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-90 hover:bg-gray-200 hover:text-black transition-all">
                    ESPECIFICAÇÕES TÉCNICAS
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {carModels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCarIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCarIndex ? "bg-white w-6" : "bg-white/30"
                }`}
                aria-label={`Ir para carro ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Pilotos */}
      <section id="pilotos" className="py-20 px-8 md:px-32 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">
          ELENCO ATUAL - 2025 SEASON
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Piloto 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-700 p-6 rounded-lg hover:bg-gray-800 transition-all">
            <div className="w-35 h-40 rounded-full bg-gray-700 flex items-center justify-center">
              <img src={fernandoAlonso} alt="Fernando Alonso"/>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Fernando Alonso</h3>
              <p className="text-green-400 mb-2">Piloto Principal</p>
              <p className="text-gray-300 mb-2">
                Bicampeão mundial com vasta experiência na F1.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">
                  #14
                </span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                  Espanha
                </span>
              </div>
            </div>
          </div>

          {/* Piloto 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-700 p-6 rounded-lg hover:bg-gray-800 transition-all">
            <div className="w-35 h-40 rounded-full bg-gray-700 flex items-center justify-center">
              <img src={lanceStroll} alt="" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Lance Stroll</h3>
              <p className="text-green-400 mb-2">Piloto</p>
              <p className="text-gray-300 mb-2">
                Jovem talento com várias temporadas na F1.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">
                  #18
                </span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                  Canadá
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;