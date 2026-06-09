import { Scale } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-deep flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Balancing scales-of-justice loader (law-themed) */}
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-2 border-gold/20 flex items-center justify-center">
            <Scale className="h-8 w-8 text-gold scales-sway" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_70%)] animate-pulse" />
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            Weighing your request
          </p>
        </div>
      </div>
    </div>
  );
}
