"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { getCurrentEvent, type Event } from "@/lib/events";
import { FadeIn } from "@/components/ui/motion";

export function EventBanner() {
  const [event, setEvent] = useState<Event | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const currentEvent = getCurrentEvent();
    if (currentEvent) {
      // Check if user has dismissed this specific event
      const dismissedEvents = JSON.parse(
        localStorage.getItem("dismissedEvents") || "[]",
      );

      if (!dismissedEvents.includes(currentEvent.id)) {
        setEvent(currentEvent);
        setIsVisible(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    if (event) {
      // Save dismissed event to localStorage
      const dismissedEvents = JSON.parse(
        localStorage.getItem("dismissedEvents") || "[]",
      );
      dismissedEvents.push(event.id);
      localStorage.setItem("dismissedEvents", JSON.stringify(dismissedEvents));

      setIsVisible(false);
      setTimeout(() => setIsDismissed(true), 300);
    }
  };

  if (!event || isDismissed) return null;

  const colorClasses = {
    green: {
      bg: "bg-forest-green-50",
      border: "border-forest-green-200",
      text: "text-forest-green-900",
      button: "bg-forest-green hover:bg-forest-green-700",
      icon: "text-forest-green-600",
    },
    blue: {
      bg: "bg-sky-blue-50",
      border: "border-sky-blue-200",
      text: "text-sky-blue-900",
      button: "bg-sky-blue hover:bg-sky-blue-700",
      icon: "text-sky-blue-600",
    },
    orange: {
      bg: "bg-sunset-orange-50",
      border: "border-sunset-orange-200",
      text: "text-sunset-orange-900",
      button: "bg-sunset-orange hover:bg-sunset-orange-700",
      icon: "text-sunset-orange-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-900",
      button: "bg-purple-600 hover:bg-purple-700",
      icon: "text-purple-600",
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-900",
      button: "bg-pink-600 hover:bg-pink-700",
      icon: "text-pink-600",
    },
  };

  const colors = colorClasses[event.color];

  return (
    <div
      className={`relative w-full z-40 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      <div className={`${colors.bg} border-b-2 ${colors.border} shadow-md`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-3.5">
            {/* Icon + Message */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span
                className={`text-2xl ${colors.icon} flex-shrink-0 animate-pulse`}
              >
                {event.icon}
              </span>
              <p
                className={`text-sm md:text-base font-semibold ${colors.text} truncate`}
              >
                {event.message}
              </p>
            </div>

            {/* CTA + Dismiss */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {event.ctaText && event.ctaLink && (
                <Link
                  href={event.ctaLink}
                  className={`hidden sm:inline-flex items-center gap-1 ${colors.button} text-white px-4 py-2 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:scale-105`}
                >
                  {event.ctaText}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              )}
              <button
                onClick={handleDismiss}
                className={`${colors.text} hover:bg-white/50 transition-all p-1.5 rounded-full`}
                aria-label="Dismiss banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
