import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";

import { LandingNagrik } from "@/components/landing-nagrik";
import { Subscribe } from "@/components/subscribe";
import Script from "next/script";  // Import Script from next/script

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingNagrik />
      <LandingContent />
      <Subscribe />

      {/* External script to load Chatbot */}
      <Script
        id="chatbot-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.embeddedChatbotConfig = {
              chatbotId: "w8Cwg_NuSV5mr2UUvEC_i",
              domain: "www.chatbase.co"
            };
          `,
        }}
      />

      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="afterInteractive"
        defer
      />
    </div>
  );
};

export default LandingPage;
