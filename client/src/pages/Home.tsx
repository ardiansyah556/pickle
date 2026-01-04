import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Send } from "lucide-react";
import { useState } from "react";

/**
 * Grok's Pickle ($PICKLE) - Meme Crypto Website
 * Design: Cyberpunk Glitch Maximalism
 * 
 * Theme: Neon green (#00FF41), Electric purple (#B300FF), Cyan (#00FFFF)
 * Fonts: Space Mono (headlines), JetBrains Mono (body)
 * Vibe: Shitpost with a domain, self-aware absurdity, meme energy
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/50 pixel-distort">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/images/robot-mascot.png" 
              alt="Grok's Pickle Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold neon-glow">$PICKLE</span>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://t.me/picklebsc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-secondary transition-colors hover-glow"
            >
              Telegram
            </a>
            <a 
              href="https://x.com/pickle_bsc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-secondary transition-colors hover-glow"
            >
              X/Twitter
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Background glitch elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-screen blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent rounded-full mix-blend-screen blur-3xl"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight neon-glow">
                AN AI MADE IT UP.
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-secondary neon-glow-purple">
                TWITTER RAN WITH IT.
              </h2>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-md leading-relaxed">
              $PICKLE is born from a viral rumor where an AI confidently described fake "Pickle AR Glasses" that never existed. Crypto Twitter amplified the chaos. Now it's tokenized.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/80 glitch-button neon-glow text-base font-bold"
              >
                BUY THE HALLUCINATION
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 glitch-button text-base font-bold"
              >
                JOIN THE PICKLE CULT
              </Button>
            </div>

            <div className="pt-8 space-y-2 text-sm text-muted-foreground">
              <p>Warning: This is a meme token</p>
              <p>Warning: The product never existed</p>
              <p>Warning: The rumor was funnier than the truth</p>
            </div>
          </div>

          {/* Right side - Mascot */}
          <div className="relative h-full min-h-96 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-primary/30 glitch-border rounded-lg opacity-50"></div>
            <img 
              src="/images/robot-mascot.png" 
              alt="Grok's Pickle Robot Mascot" 
              className="w-full max-w-md h-auto object-contain float-animation relative z-10 drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px #00FF41) drop-shadow(0 0 40px #B300FF)',
              }}
            />
            <div className="absolute -inset-8 border border-secondary/20 rounded-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What is $PICKLE Section */}
      <section className="relative py-24 bg-card/50 pixel-distort">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold neon-glow-cyan">
              WHAT IS $PICKLE?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI HALLUCINATIONS HAPPEN",
                description: "Artificial intelligence confidently makes things up. It's not malicious. It's just how neural networks work.",
                icon: "Robot",
              },
              {
                title: "INTERNET LOVES ABSURDITY",
                description: "The more ridiculous something is, the faster it spreads. Memes > facts. Screenshots > reality.",
                icon: "Mobile Phone",
              },
              {
                title: "CRYPTO MONETIZES MEMES",
                description: "Why just share a meme when you can tokenize it? $PICKLE is the perfect symbol of confident nonsense.",
                icon: "Money Bag",
              },
            ].map((item, idx) => (
              <Card 
                key={idx}
                className="bg-background border-primary/50 p-8 space-y-4 hover:border-primary transition-colors glitch-border"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary neon-glow">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="relative py-24">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold neon-glow">
              THE PICKLE THAT NEVER EXISTED
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI Hallucinated. Twitter Amplified. Confidence {'>'} Accuracy.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                step: "01",
                title: "THE HALLUCINATION",
                description: "An AI assistant confidently described 'Pickle AR Glasses' with extreme technical detail. The product never existed. The AI didn't know that.",
              },
              {
                step: "02",
                title: "SCREENSHOTS START CIRCULATING",
                description: "Screenshots of the AI's confident nonsense spread across Crypto Twitter. Everyone's laughing. Everyone's sharing. Reality optional.",
              },
              {
                step: "03",
                title: "CRYPTO TWITTER DOES WHAT IT DOES BEST",
                description: "Speculation. Theories. 'What if it's real?' Memes. Hype. The rumor becomes the story. The story becomes the token.",
              },
              {
                step: "04",
                title: "A PICKLE BECOMES A TOKEN",
                description: "$PICKLE is born. Not from a product. Not from a company. From pure internet chaos and the collective agreement that this is hilarious.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-secondary/20 border-2 border-secondary neon-glow-purple">
                    <span className="text-2xl font-bold text-secondary">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-primary mb-2 neon-glow">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Viral Rumor Timeline Section */}
      <section className="relative py-24 bg-card/50 pixel-distort">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold neon-glow-cyan">
              INTERNET RECEIPTS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Screenshots {'>'} Facts. The Rumor Timeline.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                source: "Crypto Twitter",
                handle: "@cixliv",
                link: "https://x.com/cixliv/status/2006984774918017489",
                text: "Wait, did AI just describe fake Pickle AR Glasses with EXTREME confidence?",
                timestamp: "Early Viral Discussion",
              },
              {
                source: "Crypto Twitter",
                handle: "@pickle",
                link: "https://x.com/pickle/status/2006814318726361158",
                text: "This is the most hilarious hallucination I've ever seen. We need to meme this.",
                timestamp: "Meme Amplification",
              },
            ].map((item, idx) => (
              <Card 
                key={idx}
                className="bg-background border-primary/50 p-6 space-y-4 hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-primary">{item.source}</p>
                    <p className="text-sm text-muted-foreground">{item.handle}</p>
                  </div>
                  <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded border border-secondary/50">
                    {item.timestamp}
                  </span>
                </div>
                <p className="text-foreground leading-relaxed italic">"{item.text}"</p>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors hover-glow text-sm font-bold"
                >
                  View on X <ExternalLink size={16} />
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
              <p className="text-muted-foreground text-lg">
              No confirmation. Just vibes. Crypto Twitter speculation. Reality optional.
            </p>
          </div>
        </div>
      </section>

      {/* Key Phrases Section */}
      <section className="relative py-24">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold neon-glow">
              THE $PICKLE ETHOS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "ARTIFICIAL STUPIDITY",
              "HALLUCINATION ECONOMY",
              "CONFIDENTLY WRONG",
              "REALITY OPTIONAL",
            ].map((phrase, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary p-6 rounded-lg text-center space-y-2 hover:border-secondary transition-colors glitch-border"
              >
                <p className="text-lg font-bold text-primary neon-glow uppercase tracking-wider">
                  {phrase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative py-24 bg-card/50 pixel-distort">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold neon-glow-cyan">
              JOIN THE PICKLE CULT
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If AI can hallucinate, so can we. Come meme, cope, and pickle together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a 
              href="https://t.me/picklebsc"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-background border-primary/50 p-8 text-center space-y-4 hover:border-primary transition-colors cursor-pointer glitch-border">
                <div className="text-5xl">Chat</div>
                <h3 className="text-2xl font-bold text-primary neon-glow">TELEGRAM</h3>
                <p className="text-muted-foreground">Join the community chat</p>
                <div className="flex items-center justify-center gap-2 text-primary group-hover:text-secondary transition-colors">
                  <span className="font-bold">@picklebsc</span>
                  <ExternalLink size={16} />
                </div>
              </Card>
            </a>

            <a 
              href="https://x.com/pickle_bsc"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-background border-primary/50 p-8 text-center space-y-4 hover:border-primary transition-colors cursor-pointer glitch-border">
                <div className="text-5xl">X</div>
                <h3 className="text-2xl font-bold text-primary neon-glow">X / TWITTER</h3>
                <p className="text-muted-foreground">Latest updates & memes</p>
                <div className="flex items-center justify-center gap-2 text-primary group-hover:text-secondary transition-colors">
                  <span className="font-bold">@pickle_bsc</span>
                  <ExternalLink size={16} />
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24">
        <div className="container max-w-2xl">
          <Card className="bg-background border-2 border-primary p-12 space-y-6 glitch-border">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold neon-glow">STAY PICKLED</h2>
              <p className="text-muted-foreground">Get updates on the hallucination economy</p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-input border border-primary/50 rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 glitch-button"
                >
                  <Send size={20} />
                </Button>
              </div>
              {subscribed && (
                <p className="text-center text-primary neon-glow font-bold">
                  Subscribed! Welcome to the pickle cult.
                </p>
              )}
            </form>
          </Card>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="relative py-24 bg-card/50 pixel-distort">
        <div className="container max-w-3xl">
          <Card className="bg-background border-2 border-accent p-12 space-y-6">
            <h2 className="text-3xl font-bold text-accent neon-glow-cyan">Disclaimer</h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-bold text-foreground">This is a meme token.</span> $PICKLE exists purely as a memetic representation of AI hallucination culture and internet absurdity.
              </p>
              
              <p>
                <span className="font-bold text-foreground">The product never existed.</span> "Pickle AR Glasses" was a fictional product described by an AI. It was never real. It was never planned. It was never confirmed by any company.
              </p>
              
              <p>
                <span className="font-bold text-foreground">The rumor was funnier than the truth.</span> This entire project is built on the premise that internet chaos and collective absurdity are more entertaining than reality.
              </p>

              <p>
                <span className="font-bold text-foreground">Do your own research. Or don't.</span> It's a pickle. Treat it as such.
              </p>

              <p className="pt-4 border-t border-primary/30">
                <span className="font-bold text-primary">NOT officially posted by Elon Musk.</span> NOT confirmed by any company. 100% rumor + internet chaos + AI hallucination.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-primary/50 pixel-distort">
        <div className="container text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <img 
              src="/images/robot-mascot.png" 
              alt="Grok's Pickle" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold neon-glow">$PICKLE</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Born from a hallucination. Amplified by chaos. Tokenized by memes.
          </p>
          <p className="text-muted-foreground text-xs pt-4">
            © 2026 Grok's Pickle. Hallucination-Powered Liquidity.
          </p>
        </div>
      </footer>
    </div>
  );
}
