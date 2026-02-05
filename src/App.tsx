import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'sparkle';
}

function App() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 25 + 8,
      duration: Math.random() * 12 + 18,
      delay: Math.random() * 6,
      type: i % 2 === 0 ? 'heart' : 'sparkle',
    }));
    setParticles(newParticles);
  }, []);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center cursor-pointer" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-300 to-orange-300 animate-gradient"></div>

      <div className="absolute inset-0 bg-gradient-to-tr from-red-300/20 via-transparent to-orange-200/20 opacity-60"></div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.type === 'heart' ? (
            <Heart
              size={particle.size}
              className="text-white fill-white drop-shadow-lg"
            />
          ) : (
            <Sparkles
              size={particle.size}
              className="text-white fill-white drop-shadow-lg"
            />
          )}
        </div>
      ))}

      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {!showMessage ? (
          <div className="flex flex-col items-center gap-8 animate-bounce-slow">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
              <Heart size={80} className="text-white fill-white drop-shadow-2xl relative animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
              Toca aquí
            </h2>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="mb-12">
              <Heart size={72} className="mx-auto mb-8 text-white fill-white animate-pulse drop-shadow-lg" />
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                Para el amor de mi vida
              </h1>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light drop-shadow-md">
                Sé que hemos pasado por momentos difíciles y cosas que es mejor ya no tocar,
                pero quiero que sepas que siempre voy a tratar de ser el mejor para ti.
                Te quiero muchísimo.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/25">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light drop-shadow-md">
                Y espero que algún día seas mi novia, que nos podamos ver seguidos y salir tranquilos.
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) rotate(8deg);
          }
          50% {
            transform: translateY(-60px) rotate(-8deg);
          }
          75% {
            transform: translateY(-30px) rotate(5deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
