import StatCard from "./StatCard";

interface Profile {
  displayName: string;
  username: string;
  bio: string;
  followers: string;
  following: string;
  likes: string;
  avatar: string;
  tiktokUrl: string;
}

interface ProfileHeroProps {
  profile: Profile;
}

export default function ProfileHero({ profile }: ProfileHeroProps) {
  return (
    <section
      className="pt-10 pb-8 flex flex-col items-center text-center"
      data-ocid="profile.hero.section"
    >
      {/* Animated profile ring */}
      <div
        className="animate-scale-in mb-6 relative"
        data-ocid="profile.avatar"
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full animate-neon-pulse"
          style={{
            padding: "3px",
            background:
              "conic-gradient(oklch(0.65 0.25 330), oklch(0.68 0.28 186), oklch(0.65 0.25 330))",
            borderRadius: "50%",
            filter: "blur(6px)",
            opacity: 0.7,
            transform: "scale(1.08)",
          }}
          aria-hidden="true"
        />
        {/* Rotating gradient ring */}
        <div
          className="relative rounded-full animate-ring-rotate"
          style={{
            padding: "3px",
            background:
              "conic-gradient(oklch(0.65 0.25 330), oklch(0.68 0.28 186), oklch(0.65 0.25 330))",
            borderRadius: "50%",
          }}
        >
          {/* Inner dark gap */}
          <div
            className="rounded-full"
            style={{
              padding: "2px",
              background: "oklch(0.08 0 0)",
              borderRadius: "50%",
            }}
          >
            <img
              src={profile.avatar}
              alt={profile.displayName}
              className="w-28 h-28 rounded-full object-cover block"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>

        {/* Verified / live badge */}
        <div
          className="absolute bottom-1 right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-background"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.25 330), oklch(0.68 0.28 186))",
            color: "oklch(0.08 0 0)",
          }}
          aria-label="Verified creator"
        >
          ✓
        </div>
      </div>

      {/* Name & Username */}
      <div className="animate-slide-up">
        <h1
          className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-1 glow-pink"
          style={{ color: "oklch(0.95 0 0)" }}
          data-ocid="profile.display_name"
        >
          {profile.displayName}
        </h1>
        <p
          className="font-mono text-sm tracking-widest glow-cyan mb-4"
          style={{ color: "oklch(0.68 0.28 186)" }}
          data-ocid="profile.username"
        >
          {profile.username}
        </p>
      </div>

      {/* Bio */}
      <div
        className="animate-slide-up-delay max-w-sm mb-8"
        data-ocid="profile.bio"
      >
        <p
          className="text-sm leading-relaxed whitespace-pre-line"
          style={{ color: "oklch(0.75 0 0)" }}
        >
          {profile.bio}
        </p>
      </div>

      {/* Stats grid */}
      <div
        className="animate-slide-up-delay2 grid grid-cols-3 gap-3 w-full max-w-sm mb-8"
        data-ocid="profile.stats.section"
      >
        <StatCard label="Followers" value={profile.followers} variant="pink" />
        <StatCard
          label="Following"
          value={profile.following}
          variant="neutral"
        />
        <StatCard label="Likes" value={profile.likes} variant="cyan" />
      </div>

      {/* CTA Buttons */}
      <div
        className="animate-slide-up-delay3 flex flex-col sm:flex-row gap-3 w-full max-w-xs"
        data-ocid="profile.cta.section"
      >
        <a
          href={profile.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 relative overflow-hidden rounded-lg py-3 px-6 text-sm font-display font-bold tracking-wider text-center transition-smooth group"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.25 330), oklch(0.68 0.28 186))",
            color: "oklch(0.08 0 0)",
            boxShadow:
              "0 0 24px oklch(0.65 0.25 330 / 0.5), 0 0 48px oklch(0.65 0.25 330 / 0.2)",
          }}
          data-ocid="profile.follow_button"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <title>TikTok</title>
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
            </svg>
            Follow on TikTok
          </span>
          {/* Shimmer overlay */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, oklch(1 0 0 / 0.25) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
            }}
            aria-hidden="true"
          />
        </a>

        <button
          type="button"
          className="flex-1 rounded-lg py-3 px-6 text-sm font-display font-semibold tracking-wider border transition-smooth hover:shadow-neon-pink"
          style={{
            background: "oklch(0.12 0 0)",
            borderColor: "oklch(0.65 0.25 330 / 0.5)",
            color: "oklch(0.65 0.25 330)",
          }}
          data-ocid="profile.message_button"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "oklch(0.65 0.25 330)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 16px oklch(0.65 0.25 330 / 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "oklch(0.65 0.25 330 / 0.5)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
          }}
        >
          Message
        </button>
      </div>

      {/* Divider */}
      <div
        className="mt-10 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.65 0.25 330 / 0.4), oklch(0.68 0.28 186 / 0.4), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
