import { useState } from "react";

interface VideoTile {
  id: number;
  title: string;
  views: string;
  duration: string;
  gradient: string;
  emoji: string;
  tag: string;
}

const VIDEO_TILES: VideoTile[] = [
  {
    id: 1,
    title: "Day in my life 🌅",
    views: "12.4K",
    duration: "0:47",
    gradient:
      "linear-gradient(135deg, oklch(0.15 0.1 330), oklch(0.25 0.15 280))",
    emoji: "🌅",
    tag: "Lifestyle",
  },
  {
    id: 2,
    title: "Late night vibes 🌙",
    views: "8.2K",
    duration: "1:12",
    gradient:
      "linear-gradient(135deg, oklch(0.12 0.1 186), oklch(0.2 0.12 240))",
    emoji: "🌙",
    tag: "Vlog",
  },
  {
    id: 3,
    title: "This got me 😂",
    views: "45.7K",
    duration: "0:22",
    gradient:
      "linear-gradient(135deg, oklch(0.18 0.12 40), oklch(0.22 0.1 330))",
    emoji: "😂",
    tag: "Funny",
  },
  {
    id: 4,
    title: "New fit check 🔥",
    views: "6.9K",
    duration: "0:31",
    gradient:
      "linear-gradient(135deg, oklch(0.14 0.08 150), oklch(0.2 0.12 186))",
    emoji: "🔥",
    tag: "Fashion",
  },
  {
    id: 5,
    title: "POV: You found me 👀",
    views: "31.2K",
    duration: "0:15",
    gradient:
      "linear-gradient(135deg, oklch(0.16 0.12 330), oklch(0.12 0.08 200))",
    emoji: "👀",
    tag: "Trending",
  },
  {
    id: 6,
    title: "Weekend adventures 🎉",
    views: "9.8K",
    duration: "2:04",
    gradient:
      "linear-gradient(135deg, oklch(0.12 0.1 280), oklch(0.18 0.1 330))",
    emoji: "🎉",
    tag: "Vlog",
  },
  {
    id: 7,
    title: "Watch till the end 💯",
    views: "22.1K",
    duration: "0:58",
    gradient:
      "linear-gradient(135deg, oklch(0.15 0.12 186), oklch(0.2 0.08 240))",
    emoji: "💯",
    tag: "Motivation",
  },
  {
    id: 8,
    title: "Reply to @fan123 ❤️",
    views: "5.3K",
    duration: "0:44",
    gradient:
      "linear-gradient(135deg, oklch(0.18 0.1 330), oklch(0.12 0.06 0))",
    emoji: "❤️",
    tag: "Reply",
  },
  {
    id: 9,
    title: "Trending sound 🎵",
    views: "17.6K",
    duration: "0:19",
    gradient:
      "linear-gradient(135deg, oklch(0.14 0.1 60), oklch(0.2 0.12 330))",
    emoji: "🎵",
    tag: "Music",
  },
];

export default function ContentGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      className="animate-fade-in-slow"
      data-ocid="profile.content.section"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.25 330 / 0.3))",
          }}
          aria-hidden="true"
        />
        <span
          className="font-display font-semibold text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.65 0.25 330)" }}
        >
          Videos
        </span>
        <span className="font-mono text-xs" style={{ color: "oklch(0.4 0 0)" }}>
          {VIDEO_TILES.length}
        </span>
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.68 0.28 186 / 0.3), transparent)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Video grid */}
      <ul
        className="grid grid-cols-3 gap-1.5 list-none p-0 m-0"
        aria-label="Video content"
        data-ocid="profile.content.list"
      >
        {VIDEO_TILES.map((tile, index) => (
          <VideoTileCard
            key={tile.id}
            tile={tile}
            index={index}
            isHovered={hoveredId === tile.id}
            onHover={setHoveredId}
          />
        ))}
      </ul>
    </section>
  );
}

interface VideoTileCardProps {
  tile: VideoTile;
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

function VideoTileCard({
  tile,
  index,
  isHovered,
  onHover,
}: VideoTileCardProps) {
  return (
    <li
      className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer transition-smooth"
      style={{
        background: tile.gradient,
        animationDelay: `${index * 0.07}s`,
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        boxShadow: isHovered
          ? "0 0 24px oklch(0.65 0.25 330 / 0.5), 0 8px 32px rgba(0,0,0,0.5)"
          : "0 2px 8px rgba(0,0,0,0.3)",
        zIndex: isHovered ? 1 : 0,
      }}
      onMouseEnter={() => onHover(tile.id)}
      onMouseLeave={() => onHover(null)}
      data-ocid={`profile.content.item.${index + 1}`}
    >
      {/* Center emoji */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-3xl transition-smooth"
          style={{
            transform: isHovered ? "scale(1.2)" : "scale(1)",
            filter: isHovered
              ? "drop-shadow(0 0 12px rgba(255,255,255,0.5))"
              : "none",
          }}
          aria-hidden="true"
        >
          {tile.emoji}
        </span>
      </div>

      {/* Tag pill */}
      <div className="absolute top-2 left-2">
        <span
          className="text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded-full uppercase"
          style={{
            background: "oklch(0.08 0 0 / 0.7)",
            color: "oklch(0.68 0.28 186)",
            border: "1px solid oklch(0.68 0.28 186 / 0.3)",
            backdropFilter: "blur(4px)",
          }}
        >
          {tile.tag}
        </span>
      </div>

      {/* Bottom overlay */}
      <div
        className="absolute bottom-0 inset-x-0 p-2"
        style={{
          background:
            "linear-gradient(to top, oklch(0.04 0 0 / 0.9) 0%, transparent 100%)",
        }}
      >
        <div className="flex items-end justify-between">
          <span
            className="text-[9px] font-body leading-tight line-clamp-2 mr-1"
            style={{ color: "oklch(0.88 0 0)" }}
          >
            {tile.title}
          </span>
          <span
            className="text-[9px] font-mono shrink-0"
            style={{ color: "oklch(0.65 0.25 330)" }}
          >
            {tile.duration}
          </span>
        </div>

        {/* Views */}
        <div
          className="flex items-center gap-0.5 mt-0.5"
          aria-label={`${tile.views} views`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-2.5 h-2.5 shrink-0"
            fill="oklch(0.55 0 0)"
            aria-hidden="true"
          >
            <title>Views</title>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span
            className="text-[9px] font-mono"
            style={{ color: "oklch(0.55 0 0)" }}
          >
            {tile.views}
          </span>
        </div>
      </div>

      {/* Hover neon border */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ border: "1.5px solid oklch(0.65 0.25 330 / 0.7)" }}
          aria-hidden="true"
        />
      )}
    </li>
  );
}
