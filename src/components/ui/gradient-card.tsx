import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-2xl border p-7 sm:p-8 shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(23,20,18,0.08)]",
  {
    variants: {
      gradient: {
        orange:
          "bg-gradient-to-br from-orange-100 via-orange-50/90 to-amber-200/60 border-orange-200/80",
        gray:
          "bg-gradient-to-br from-slate-100 via-stone-100/90 to-slate-200/70 border-slate-200/90",
        purple:
          "bg-gradient-to-br from-purple-100 via-violet-50/90 to-indigo-200/60 border-purple-200/80",
        green:
          "bg-gradient-to-br from-emerald-100 via-emerald-50/90 to-teal-200/60 border-emerald-200/80",
      },
    },
    defaultVariants: {
      gradient: "gray",
    },
  }
);

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badgeText: string;
  badgeColor: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl?: string;
  graphic?: React.ReactNode;
  tags?: string[];
  tagLabel?: string;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    {
      className,
      gradient,
      badgeText,
      badgeColor,
      title,
      description,
      ctaText,
      ctaHref,
      imageUrl,
      graphic,
      tags,
      tagLabel = "Applied in production",
      ...props
    },
    ref
  ) => {
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.02, y: -4 },
    };

    const imageAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 3 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="h-full"
        ref={ref}
      >
        <div className={cn(cardVariants({ gradient }), className)} {...props}>
          {/* Decorative background graphic / image with spring hover animation */}
          {imageUrl ? (
            <motion.img
              src={imageUrl}
              alt={`${title} background graphic`}
              variants={imageAnimation}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="absolute -right-1/4 -bottom-1/4 w-3/4 opacity-80 pointer-events-none select-none"
            />
          ) : graphic ? (
            <motion.div
              variants={imageAnimation}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              aria-hidden="true"
              className="absolute -right-8 -bottom-8 sm:-right-6 sm:-bottom-6 w-52 h-52 sm:w-64 sm:h-64 opacity-85 pointer-events-none select-none"
            >
              {graphic}
            </motion.div>
          ) : null}

          {/* Card Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/75 border border-black/5 px-3 py-1 text-xs font-mono font-semibold text-[#171412]/85 backdrop-blur-sm w-fit shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: badgeColor }}
              />
              <span>{badgeText}</span>
            </div>

            {/* Title and Description */}
            <div className="flex-grow max-w-md">
              <h3 className="text-xl sm:text-2xl font-black font-display text-[#171412] tracking-tight leading-snug mb-2.5">
                {title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#57534e] leading-relaxed">
                {description}
              </p>
            </div>

            {/* Applied Stack Pills (optional) */}
            {tags && tags.length > 0 && (
              <div className="mt-6 pt-4 border-t border-black/10 max-w-md">
                <span className="block text-[10px] font-mono font-semibold uppercase tracking-wider text-[#57534e] mb-2">
                  {tagLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-[#171412] bg-white/70 border border-black/10 backdrop-blur-xs px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action Link */}
            <a
              href={ctaHref}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#171412] hover:text-[#ff4829] transition-colors w-fit"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
