export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-deep flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo pulse */}
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-2 border-gold/20 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full border-2 border-t-gold border-r-gold/40 border-b-gold/10 border-l-gold/40 animate-spin" />
          </div>
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_70%)] animate-pulse" />
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            Loading
          </p>
        </div>
      </div>
    </div>
  );
}
