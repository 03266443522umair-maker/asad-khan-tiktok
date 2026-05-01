import ContentGrid from "./components/ContentGrid";
import ProfileHero from "./components/ProfileHero";

const PROFILE = {
  displayName: "ASAD KHAN",
  username: "@Khansah7886",
  bio: "🎬 Content Creator | 🔥 Viral Moments | 🌟 Entertainment & Lifestyle\n✨ Join the journey — new videos every week!",
  followers: "343",
  following: "2.5K",
  likes: "1K",
  avatar: "/assets/generated/asad-khan-avatar.dim_400x400.jpg",
  tiktokUrl: "https://www.tiktok.com/@Khansah7886",
};

export default function ProfilePage() {
  return (
    <div
      className="min-h-screen bg-background relative overflow-x-hidden"
      data-ocid="profile.page"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.65 0.25 330 / 0.5) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-[60%] left-1/4 w-[400px] h-[300px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.68 0.28 186 / 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.65 0.25 330 / 0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* TikTok-style top bar */}
      <header
        className="relative z-10 bg-card/80 backdrop-blur-md border-b border-border/30 px-4 py-3 flex items-center justify-center"
        data-ocid="profile.header"
      >
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="oklch(0.65 0.25 330)"
          >
            <title>TikTok</title>
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
          </svg>
          <span className="font-display font-bold text-sm tracking-wider text-foreground/90 uppercase">
            TikTok Profile
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-2xl mx-auto px-4 pb-16">
        <ProfileHero profile={PROFILE} />
        <ContentGrid />
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 bg-card/60 backdrop-blur-sm border-t border-border/20 py-5 text-center"
        data-ocid="profile.footer"
      >
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 hover:text-primary transition-colors duration-200"
            data-ocid="profile.caffeine_link"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
