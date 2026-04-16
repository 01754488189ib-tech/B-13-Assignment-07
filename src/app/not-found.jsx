
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-5 font-sans relative overflow-hidden text-center">
            <style>
                {`
          @keyframes softBounce {
            0%, 100% {
              transform: translateY(-30px);
              animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
            }
            50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
            }
          }
          @keyframes shadowPulse {
            0%, 100% {
              opacity: 0.1;
              transform: scaleX(0.7);
            }
            50% {
              opacity: 0.3;
              transform: scaleX(1.1);
            }
          }
          .custom-bounce-slow {
            animation: softBounce 3s infinite ease-in-out;
          }
          .custom-shadow-slow {
            animation: shadowPulse 3s infinite ease-in-out;
          }
        `}
            </style>

            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
            </div>

            <div className="z-10 space-y-10">
                <div className="relative flex flex-col items-center">
                    <h1 className="text-9xl md:text-[12rem] font-black text-primary drop-shadow-2xl custom-bounce-slow relative z-10 leading-none">
                        404
                    </h1>
                    <div className="w-48 h-6 bg-black rounded-[100%] blur-xl custom-shadow-slow mt-[-10px]"></div>
                </div>
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold md:text-5xl italic tracking-tight text-base-content">
                        Oops! Access Denied.
                    </h2>
                    <p className="text-xl opacity-70 max-w-md mx-auto text-base-content/80">
                        {`You've taken a detour into a realm not yet crafted.`}
                    </p>
                </div>
                <div className="py-4">
                    <div className="badge badge-outline badge-lg p-7 gap-3 border-primary/30 bg-base-100 shadow-sm">
                        <span className="opacity-60 text-xs uppercase tracking-[0.2em] font-bold">Architect</span>
                        <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-tight">
                            Ibrahim Khalilullah
                        </span>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <Link
                        href="/blog"
                        className="btn btn-primary btn-wide hover:scale-110 hover:shadow-2xl transition-all duration-500 gap-3 font-bold uppercase tracking-widest group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6 group-hover:animate-pulse"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
}