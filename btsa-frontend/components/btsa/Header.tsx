"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "About",
      href: "#",
      dropdown: [
        { label: "Our Story", href: "/about/our-story" },
        { label: "Our Team", href: "/about/team" },
        { label: "Gallery", href: "/about/gallery" },
        { label: "Impact & Roadmap", href: "/about/impact" },
        { label: "SDG Alignment", href: "/about/sdg-alignment" },
      ],
    },
    {
      label: "Projects",
      href: "/projects",
      dropdown: [
        { label: "All Initiatives", href: "/projects" },
        {
          label: "Plastic-to-Bricks",
          href: "/projects/plastic-to-pavement-bricks",
        },
        { label: "Liberia Youth", href: "/projects/liberia-youth-empowerment" },
        { label: "Clean Energy Biogas", href: "/projects/clean-energy-biogas" },
      ],
    },
    {
      label: "Get Involved",
      href: "#",
      dropdown: [
        { label: "Volunteer", href: "/get-involved/volunteer" },
        { label: "Partner", href: "/get-involved/partner" },
        { label: "Donate", href: "/get-involved/donate" },
      ],
    },
    { label: "Scholarship", href: "/scholarship" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-gray-900/30 backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
              {/* Fallback if logo.png is missing */}
              <div className="absolute inset-0 bg-earth-brown flex items-center justify-center text-white font-bold text-xs">
                BTSA
              </div>
              <Image
                src="/logo.png"
                alt="BTSA Logo"
                fill
                className="object-cover"
              />
            </div>
            <span
              className={cn(
                "font-heading text-xl font-bold tracking-tight transition-all",
                isScrolled ? "text-gray-900" : "text-white drop-shadow-lg",
              )}
            >
              BTSA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-semibold transition-colors hover:text-earth-brown",
                    isScrolled ? "text-gray-700" : "text-white drop-shadow-lg",
                  )}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-earth-brown"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-sunset-orange hover:bg-sunset-orange-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/get-involved/donate">
                <Heart className="mr-2 h-4 w-4 fill-current" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2",
              isScrolled ? "text-gray-900" : "text-white",
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900 px-2">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm text-gray-600 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block font-semibold text-gray-900 px-2 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button className="w-full bg-sunset-orange text-white mt-4" asChild>
              <Link href="/get-involved/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
