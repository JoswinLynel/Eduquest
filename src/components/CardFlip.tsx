"use client";

import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export interface CardFlipProps {
  icon?: React.ReactNode;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
}

export default function CardFlip({
  icon,
  image,
  title = "Design Systems",
  subtitle = "Explore the fundamentals",
  description = "Dive deep into the world of modern UI/UX design.",
  features = ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[480px] w-full max-w-[320px] [perspective:2000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-transform duration-700 ease-out",
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-[32px]",
            "bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50",
            "border border-white/80",
            "shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
            "transition-all duration-500",
            "group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] group-hover:border-blue-200/60",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Subtle top glare effect */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent opacity-60 pointer-events-none z-10" />

          {/* Top section with image and gradient mask */}
          <div className="relative h-full w-full overflow-hidden bg-gray-100">
            {image ? (
              <>
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                {/* Gradient to smooth out the bottom where the white box sits */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white z-0"></div>
              </>
            ) : (
              <div className="relative h-[250px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-700"></div>
                </div>
                <div className="relative flex h-[120px] w-[120px] items-center justify-center">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "absolute h-[60px] w-[60px] rounded-full",
                        "border border-blue-600/30",
                        "animate-[scale-out_4s_linear_infinite]"
                      )}
                      style={{ animationDelay: `${i * 0.6}s` }}
                    />
                  ))}
                  <div className="relative z-10 bg-white shadow-xl shadow-blue-500/10 p-5 rounded-2xl text-blue-600 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 border border-blue-50">
                    {icon}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom section with text and button */}
          <div className="absolute right-0 bottom-0 left-0 p-7">
            <div className="flex items-end justify-between gap-5 bg-white/60 backdrop-blur-md p-5 rounded-[24px] border border-white/60 shadow-sm transition-colors group-hover:bg-white/90">
              <div className="space-y-1.5 flex-1">
                <h3 className="font-bold text-[19px] text-gray-900 leading-tight">
                  {title}
                </h3>
                <p className="text-[14px] text-blue-600 font-medium tracking-tight">
                  {subtitle}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 rounded-[16px] p-3.5 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                <Repeat2 className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-[32px] p-8",
            "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900",
            "border border-blue-400/50",
            "shadow-[0_20px_40px_rgb(59,130,246,0.25)]",
            "flex flex-col text-white",
            "transition-opacity duration-700",
            isFlipped ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Top highlight glare */}
          <div className="absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-white/10 to-transparent rounded-t-[32px] pointer-events-none" />

          <div className="flex-1 space-y-5 relative z-10">
            <div className="space-y-3">
              <h3 className="font-bold text-[22px] leading-snug tracking-tight">
                {title}
              </h3>
              <p className="text-[14.5px] text-blue-100/90 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            <div className="space-y-3.5 pt-4">
              {features?.map((feature, index) => (
                <div
                  className="flex items-center gap-4 text-[14.5px] text-blue-50 transition-all duration-500"
                  key={feature}
                  style={{
                    transform: isFlipped ? "translateX(0)" : "translateX(-15px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <div className="bg-white/15 backdrop-blur-sm p-1.5 rounded-full ring-1 ring-white/20">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-semibold tracking-wide">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 relative z-10">
            <button className="w-full group/btn relative flex items-center justify-center gap-3 overflow-hidden rounded-[20px] bg-white px-6 py-4 font-bold text-blue-600 shadow-[0_8px_20px_-6px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_25px_-6px_rgba(255,255,255,0.5)]">
              <span className="relative z-10 tracking-wider text-[14px]">GET STARTED</span>
              <div className="relative z-10 bg-blue-50 rounded-full p-1.5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-blue-100">
                <ArrowRight className="h-4 w-4" />
              </div>
              {/* Button hover gradient */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-out {
          0% { transform: scale(0.5); opacity: 1; border-width: 1.5px; }
          100% { transform: scale(4); opacity: 0; border-width: 0.5px; }
        }
      `}</style>
    </div>
  );
}
