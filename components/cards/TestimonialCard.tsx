"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MuxPlayer from "@mux/mux-player-react";

interface Stat {
  number: string;
  text: string;
}

interface TestimonialCardProps {
  image: string;
  testimonial: string;
  nameAndRole: string;
  company: string;
  companyLogo: string;
  stats: Stat[];
  className?: string;
  videoPlaybackId?: string;
  videoTitle?: string;
}

export default function TestimonialCard({
  image,
  testimonial,
  nameAndRole,
  company,
  companyLogo,
  stats,
  className = "",
  videoPlaybackId = "b00NLDrgt00kBgLuIqmBksFZiW009MQqz1EjMKDyusrNrg",
  videoTitle = "Orange x Nexus",
}: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div
      className={`flex flex-col max-w-full lg:flex-row gap-0.5 h-auto lg:h-[420px] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Card */}
      <div
        className="relative flex-none w-full lg:w-[308px] aspect-[4/3] lg:aspect-auto lg:h-full bg-neutral-50 cursor-pointer overflow-hidden flex items-center justify-center"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={image}
          alt={testimonial}
          fill
          className="object-cover object-top"
          unoptimized
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-nexus-black/80 px-4 py-2 rounded flex items-center gap-2 transition-transform hover:scale-105">
            <svg
              width="13"
              height="15"
              viewBox="-1 -1 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-4"
            >
              <path
                d="M0.5 12.1993C0.367392 12.1993 0.240215 12.1466 0.146447 12.0528C0.0526785 11.959 1.36127e-09 11.8319 1.36127e-09 11.6993V0.699256C-6.40951e-06 0.612365 0.0226312 0.526972 0.065681 0.451495C0.108731 0.376019 0.170707 0.313064 0.245499 0.268836C0.320292 0.224609 0.405319 0.200635 0.4922 0.19928C0.57908 0.197924 0.664814 0.219233 0.74095 0.261106L10.7409 5.76111C10.8194 5.80425 10.8848 5.86767 10.9304 5.94474C10.976 6.0218 11 6.1097 11 6.19923C11 6.28877 10.976 6.37666 10.9304 6.45373C10.8848 6.5308 10.8194 6.59421 10.7409 6.63736L0.74095 12.1374C0.667127 12.1779 0.584248 12.1992 0.5 12.1993ZM1 1.54471V10.8537L9.4624 6.19926L1 1.54471Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="flex-1 flex flex-col justify-between bg-neutral-50 p-4 sm:p-5 gap-4 sm:gap-6">
        {/* Quote and Text */}
        <div className="flex flex-col gap-4">
          {/* Quote Icon */}
          <div className="w-8 h-8 relative">
            <svg
              width="23"
              height="21"
              viewBox="0 0 22.89 20.313"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1.5 left-1"
            >
              <defs>
                <linearGradient
                  id="quoteGradient"
                  x1="0"
                  x2="1"
                  y1="0.313"
                  y2="0.687"
                >
                  <stop offset="0" stopColor="rgb(102,102,102)" />
                  <stop offset="1" stopColor="rgb(0,0,0)" />
                </linearGradient>
              </defs>
              <path
                d="M 0 20.313 L 0 10.469 L 4.883 0 L 9.53 0 L 5.35 11.133 L 9.22 11.133 L 9.22 20.313 Z M 13.36 20.313 L 13.36 10.469 L 18.241 0 L 22.89 0 L 18.71 11.133 L 22.577 11.133 L 22.577 20.313 Z"
                fill="url(#quoteGradient)"
              />
            </svg>
          </div>

          {/* Testimonial Text */}
          <p className="font-sans text-base lg:text-xl leading-relaxed text-nexus-black">
            {testimonial}
          </p>
        </div>

        {/* Company Info */}

        <div className="flex flex-col gap-1">
          <Image
            src={companyLogo}
            alt={company}
            width={34}
            height={34}
            className="w-8 h-8 lg:w-9 lg:h-9 object-contain"
            unoptimized
          />
          <p className="font-sans mt-4 text-xl lg:text-2xl font-medium text-nexus-black">
            {company}
          </p>
          <p className="font-mono text-xs lg:text-sm uppercase text-nexus-black leading-tight">
            {nameAndRole}
          </p>
        </div>
      </div>



      {/* Stats Cards - Desktop */}
      <div className="flex flex-col gap-0.5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col gap-3 justify-end bg-neutral-50 p-5"
          >
            <h3 className="font-sans text-3xl font-normal text-nexus-black tracking-tight">
              {stat.number}
            </h3>
            <p className="font-mono text-xs uppercase text-nexus-black leading-tight">
              {stat.text}
            </p>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors"
              aria-label="Close video"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mux Player */}
            <MuxPlayer
              playbackId={videoPlaybackId}
              metadata={{
                video_title: videoTitle,
              }}
              autoPlay
              className="w-full h-full rounded-lg"
              style={{ aspectRatio: "16/9" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
