"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer({ logoUrl }: { logoUrl: string }) {
  return (
    // <footer className="bg-gradient-to-r from-[#002F6B]/30 to-[#85E08A] opacity-80 text-white py-10">
    <footer className="bg-gradient-to-t from-[#002F6B] to-[#85E08A]/50  text-white py-10">
      <div className="container w-[85%]  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="flex flex-col items-center gap-8">
          <Image
            src={logoUrl && logoUrl.length > 0 ? logoUrl : "/logo-green.png"}
            alt="logo"
            width={112}
            height={50}
          />

          {/* <p>your gateway way to global trade</p> */}
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Rapid links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline hover:text-white/70">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#vision"
                className="hover:underline hover:text-white/70"
              >
                Our vision
              </Link>
            </li>
            <li>
              <Link
                href="/#values"
                className="hover:underline hover:text-white/70"
              >
                Our Values
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:underline hover:text-white/70"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:underline hover:text-white/70"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={32} />
              <span>
                A6, Imm Laguna Square, Les Berges du Lac 2 Po 1053, Tunis –
                Tunisia
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+216 98 349 968</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>contact@epigreenvision.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t text-gray-300 border-gray-700 pt-4 text-center">
        <p>© 2025 EpiGreenVision. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
