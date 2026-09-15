"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
  category?: string;
  dateStr?: string;
  accent?: string;
}

export interface TeamCarouselProps {
  /** Array of items/members */
  members: TeamMember[];
  /** Background color or gradient */
  background?: string;
  /** Card width in pixels (desktop) */
  cardWidth?: number;
  /** Card height in pixels (desktop) */
  cardHeight?: number;
  /** Card border radius in pixels */
  cardRadius?: number;
  /** Enable/disable navigation arrows */
  showArrows?: boolean;
  /** Enable/disable dots indicator */
  showDots?: boolean;
  /** Enable/disable keyboard navigation */
  keyboardNavigation?: boolean;
  /** Enable/disable touch/swipe navigation */
  touchNavigation?: boolean;
  /** Auto-play interval in milliseconds (0 to disable) */
  autoPlay?: number;
  /** Pause auto-play on hover */
  pauseOnHover?: boolean;
  /** Scale factor for side cards (default 0.90) */
  sideCardScale?: number;
  /** Opacity for side cards (default 0.95) */
  sideCardOpacity?: number;
  /** Custom className for container */
  className?: string;
  /** Custom className for cards */
  cardClassName?: string;
  /** Info position ('overlay' | 'bottom' | 'none') */
  infoPosition?: 'overlay' | 'bottom' | 'none';
  /** Callback when active member changes */
  onMemberChange?: (member: TeamMember, index: number) => void;
  /** Callback when card is clicked */
  onCardClick?: (member: TeamMember, index: number) => void;
  /** Initial active index */
  initialIndex?: number;
}

export const TeamCarousel: React.FC<TeamCarouselProps> = ({
  members,
  background,
  cardWidth = 370,
  cardHeight = 500,
  cardRadius = 28,
  showArrows = true,
  showDots = true,
  keyboardNavigation = true,
  touchNavigation = true,
  autoPlay = 3500,
  pauseOnHover = true,
  sideCardScale = 0.90,
  sideCardOpacity = 0.96,
  className,
  cardClassName,
  infoPosition = "overlay",
  onMemberChange,
  onCardClick,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0); // -1: prev, 1: next

  const [responsiveWidth, setResponsiveWidth] = useState(cardWidth);
  const [responsiveHeight, setResponsiveHeight] = useState(cardHeight);

  // Responsive card dimension scaling for small screens
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const screenW = window.innerWidth;
        if (screenW < 640) {
          // Mobile view: adapt card width so both side cards peek out symmetrically
          const w = Math.min(cardWidth, screenW - 72);
          setResponsiveWidth(w);
          setResponsiveHeight(Math.round(w * (cardHeight / cardWidth)));
        } else if (screenW < 1024) {
          // Tablet view
          const w = Math.min(cardWidth, 320);
          setResponsiveWidth(w);
          setResponsiveHeight(Math.round(w * (cardHeight / cardWidth)));
        } else {
          // Desktop view
          setResponsiveWidth(cardWidth);
          setResponsiveHeight(cardHeight);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardWidth, cardHeight]);

  const totalMembers = members.length;

  const paginate = useCallback(
    (newDirection: number) => {
      if (totalMembers === 0) return;
      setDirection(newDirection);
      const nextIndex = (currentIndex + newDirection + totalMembers) % totalMembers;
      setCurrentIndex(nextIndex);
      onMemberChange?.(members[nextIndex], nextIndex);
    },
    [currentIndex, totalMembers, members, onMemberChange]
  );

  const wrapIndex = (index: number) => {
    return (index + totalMembers) % totalMembers;
  };

  const calculatePosition = (index: number) => {
    const activeIndex = currentIndex;
    const diff = wrapIndex(index - activeIndex);

    if (diff === 0) return 'center';
    if (diff === 1) return 'right-1';
    if (diff === 2) return 'right-2';
    if (diff === totalMembers - 1) return 'left-1';
    if (diff === totalMembers - 2) return 'left-2';
    return 'hidden';
  };

  // Ultra-smooth spring physics
  const springTransition = {
    type: "spring" as const,
    stiffness: 220,
    damping: 26,
    mass: 0.85,
  };

  // 3-card flat overlapping layout matching reference image
  const xOffset = responsiveWidth * 0.58;

  const getVariantStyles = (position: string) => {
    switch (position) {
      case 'center':
        return {
          x: 0,
          scale: 1.0,
          zIndex: 20,
          opacity: 1,
          filter: 'brightness(100%)',
          pointerEvents: 'auto' as const,
          transition: springTransition,
        };
      case 'right-1':
        return {
          x: xOffset,
          scale: sideCardScale,
          zIndex: 10,
          opacity: sideCardOpacity,
          filter: 'brightness(95%)',
          pointerEvents: 'auto' as const,
          transition: springTransition,
        };
      case 'left-1':
        return {
          x: -xOffset,
          scale: sideCardScale,
          zIndex: 10,
          opacity: sideCardOpacity,
          filter: 'brightness(95%)',
          pointerEvents: 'auto' as const,
          transition: springTransition,
        };
      case 'right-2':
        return {
          x: xOffset * 1.8,
          scale: sideCardScale * 0.85,
          zIndex: 4,
          opacity: 0,
          filter: 'brightness(90%)',
          pointerEvents: 'none' as const,
          transition: springTransition,
        };
      case 'left-2':
        return {
          x: -xOffset * 1.8,
          scale: sideCardScale * 0.85,
          zIndex: 4,
          opacity: 0,
          filter: 'brightness(90%)',
          pointerEvents: 'none' as const,
          transition: springTransition,
        };
      default:
        return {
          x: direction > 0 ? xOffset * 2 : -xOffset * 2,
          scale: 0.75,
          zIndex: 0,
          opacity: 0,
          filter: 'brightness(85%)',
          pointerEvents: 'none' as const,
          transition: springTransition,
        };
    }
  };

  // Auto-play timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (autoPlay > 0) {
      interval = setInterval(() => {
        paginate(1);
      }, autoPlay);
    }

    const container = document.getElementById('team-carousel-container');

    const handleMouseEnter = () => {
      if (pauseOnHover && autoPlay > 0) clearInterval(interval);
    };

    const handleMouseLeave = () => {
      if (pauseOnHover && autoPlay > 0) {
        interval = setInterval(() => {
          paginate(1);
        }, autoPlay);
      }
    };

    if (container && pauseOnHover && autoPlay > 0) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearInterval(interval);
      if (container && pauseOnHover && autoPlay > 0) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [autoPlay, paginate, pauseOnHover]);

  // Keyboard navigation
  useEffect(() => {
    if (!keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboardNavigation, paginate]);

  // Swipe / Drag handling
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!touchNavigation) return;
    const swipeThreshold = 35;
    if (info.offset.x > swipeThreshold || info.velocity.x > 250) {
      paginate(-1);
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -250) {
      paginate(1);
    }
  };

  return (
    <div
      id="team-carousel-container"
      className={cn(
        "w-full py-0 sm:py-1 flex flex-col items-center justify-center relative select-none",
        className
      )}
      style={{ background }}
    >
      {/* Cards Display Stage */}
      <div
        className="w-full relative z-10 mx-auto flex items-center justify-center overflow-visible"
        style={{ height: responsiveHeight + 16 }}
      >
        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <motion.button
              onClick={() => paginate(-1)}
              className="absolute left-1 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-up-purple-dark hover:text-up-purple border border-up-border/80 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center z-30 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
              whileTap={{ scale: 0.92 }}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="absolute right-1 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-up-purple-dark hover:text-up-purple border border-up-border/80 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center z-30 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
              whileTap={{ scale: 0.92 }}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </>
        )}

        {/* Cards Stack */}
        <div className="w-full h-full flex justify-center items-center relative">
          <AnimatePresence initial={false} custom={direction}>
            {members.map((member, index) => {
              const position = calculatePosition(index);
              const isCurrent = index === currentIndex;

              if (position === 'hidden' && !isCurrent) return null;

              return (
                <motion.div
                  key={member.id}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.16}
                  onDragEnd={handleDragEnd}
                  className={cn(
                    "absolute overflow-hidden cursor-pointer transition-shadow duration-300",
                    isCurrent
                      ? "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.32)] ring-1 ring-black/5 cursor-grab active:cursor-grabbing"
                      : "shadow-[0_15px_35px_-8px_rgba(0,0,0,0.18)] hover:opacity-100",
                    cardClassName
                  )}
                  style={{
                    width: responsiveWidth,
                    height: responsiveHeight,
                    borderRadius: cardRadius,
                    top: '50%',
                    left: '50%',
                    marginLeft: -responsiveWidth / 2,
                    marginTop: -responsiveHeight / 2,
                  }}
                  initial={getVariantStyles('hidden')}
                  animate={getVariantStyles(position)}
                  exit={getVariantStyles('hidden')}
                  onClick={() => {
                    if (!isCurrent) {
                      const newDirection = position.startsWith('right') ? 1 : -1;
                      paginate(newDirection);
                    } else {
                      onCardClick?.(member, index);
                    }
                  }}
                >
                  {/* Photo Background with automatic fallback on error */}
                  <img
                    src={member.image || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'}
                    alt={member.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackApplied) {
                        target.dataset.fallbackApplied = 'true';
                        target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                  />

                  {/* Dark Vignette Overlay on Side Cards for Depth */}
                  {!isCurrent && (
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 pointer-events-none" />
                  )}

                  {/* Active Card Text Overlay (Matching Reference Image) */}
                  {infoPosition === 'overlay' && (
                    <AnimatePresence mode="wait">
                      {isCurrent && (
                        <motion.div
                          key={`info-${member.id}`}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-x-0 bottom-0 pt-24 pb-5 px-6 sm:px-7 bg-gradient-to-t from-black/90 via-black/55 to-transparent pointer-events-none flex flex-col justify-end"
                          style={{
                            borderBottomLeftRadius: cardRadius,
                            borderBottomRightRadius: cardRadius,
                          }}
                        >
                          {/* Title (e.g. Documenting Living Heritage) */}
                          <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                            {member.name}
                          </h3>

                          {/* Subtitle / Category in uppercase tracked font (e.g. HERITAGE PORTAL) */}
                          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-up-gold mt-1 drop-shadow">
                            {member.role || member.category}
                          </p>

                          {/* Description */}
                          {member.bio && (
                            <p className="text-xs sm:text-[13px] text-zinc-200/95 leading-relaxed line-clamp-2 mt-1.5 font-normal drop-shadow-sm">
                              {member.bio}
                            </p>
                          )}

                          {/* Date & Campus badge */}
                          {member.dateStr && (
                            <div className="mt-2.5 flex items-center gap-2">
                              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-white/95 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 shadow-sm">
                                <Calendar className="w-3 h-3 text-up-gold" />
                                {member.dateStr}
                              </span>
                              <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-up-gold" />
                                Ugyen Pee
                              </span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center items-center gap-2 mt-4 sm:mt-5 z-20">
          {members.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                if (index !== currentIndex) {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                  onMemberChange?.(members[index], index);
                }
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                index === currentIndex
                  ? "w-8 bg-up-gold shadow-sm"
                  : "w-2 bg-up-border hover:bg-up-purple/40"
              )}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;