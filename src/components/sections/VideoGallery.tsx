"use client";

import { useState } from "react";
import Image from "next/image";
import { videos } from "@/data/videos";

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const [playing, setPlaying] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
  const isPortrait = video.type === "portrait";

  return (
    <div
      className={`rounded-2xl overflow-hidden border border-gold-soft/20 shadow-card relative cursor-pointer group
        ${isPortrait ? "w-[80%] max-w-70 sm:w-[44%] lg:w-57.5" : "w-[92%] lg:w-100"}
      `}
    >
      {/* Aspect */}
      <div className={isPortrait ? "aspect-9/16" : "aspect-video"}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
            title={video.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        ) : (
          <>
            <Image
              src={thumbUrl}
              alt={video.alt}
              fill
              loading="lazy"
              className="object-cover group-hover:brightness-75 transition-[filter] duration-200"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 44vw, 400px"
              onClick={() => setPlaying(true)}
            />
            {/* Play button overlay */}
            <button
              onClick={() => setPlaying(true)}
              aria-label={`${video.label} चलाएँ`}
              className="absolute inset-0 flex items-center justify-center focus-visible:outline-none"
            >
              <span className="w-16 h-16 rounded-full bg-maroon/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-cta">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-7 h-7 translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
            {/* Label */}
            <span className="absolute bottom-2 inset-x-0 text-center text-xs text-ivory font-semibold font-worksans px-2">
              {video.label}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export function VideoGallery() {
  return (
    <section
      id="videos"
      className="py-14 sm:py-16 md:py-20 lg:py-22"
      style={{ background: "linear-gradient(135deg, #FBF3E4, #F3E6CB)" }}
    >
      <div className="mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-285">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block font-worksans tracking-[.16em] uppercase text-[0.72rem] font-semibold text-maroon mb-3">
            पूजा अनुष्ठान
          </span>
          <h2 className="font-yatra text-2xl sm:text-3xl md:text-section text-maroon-deep">
            पूजा की झलकियाँ
          </h2>
          <div className="marigold-divider">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <p className="font-cormorant italic text-lg text-maroon/75">
            हमारे अनुष्ठानों की वास्तविक तस्वीरें एवं वीडियो
          </p>
        </div>

        {/* Video cards */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
