import React from 'react';
import { Brain, GamepadIcon, Coins, Users, RocketIcon, LineChart as ChartLineUp, Shield, Crosshair, Copy, Wallet, Gift, Wrench, Megaphone } from 'lucide-react';

function App() {
  const contractAddress = "TESTKONTOLCOK"; // Example address

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-indigo-400" />
            <span className="text-2xl font-bold">NeuroPlay AI</span>
          </div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#tokenomics" className="hover:text-indigo-400">Tokenomics</a>
            <a href="#roadmap" className="hover:text-indigo-400">Roadmap</a>
            <a href="#team" className="hover:text-indigo-400">Team</a>
          </div>
        </nav>
        
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold mb-6">
            The Future of AI-Powered Gaming
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            NeuroPlay AI combines blockchain technology with artificial intelligence to create immersive gaming experiences. Join the revolution with our ecosystem powered by $NPLAY tokens.
          </p>
          {/* Contract Details */}
          <div className="bg-black/30 p-8 rounded-2xl mb-8 w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Contract Details</h2>
            <div className="space-y-4">
              <div className="bg-indigo-900/50 p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Contract Address</p>
                    <p className="font-mono text-indigo-400">{contractAddress}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(contractAddress)}
                    className="p-2 hover:bg-indigo-800/50 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-900/50 p-4 rounded-xl">
                  <p className="text-sm text-gray-400 mb-1">Network</p>
                  <p className="font-semibold">Solana</p>
                </div>
                <div className="bg-indigo-900/50 p-4 rounded-xl">
                  <p className="text-sm text-gray-400 mb-1">Token Symbol</p>
                  <p className="font-semibold">$NPLAY</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold">
              Buy $NPLAY
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why NeuroPlay AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/40 p-8 rounded-xl">
              <GamepadIcon className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">AI-Enhanced Gaming</h3>
              <p className="text-gray-300">Advanced AI algorithms that adapt to player behavior, creating unique gaming experiences.</p>
            </div>
            <div className="bg-indigo-900/40 p-8 rounded-xl">
              <Shield className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Secure Blockchain</h3>
              <p className="text-gray-300">Built on secure blockchain technology ensuring transparent and fair gameplay.</p>
            </div>
            <div className="bg-indigo-900/40 p-8 rounded-xl">
              <Coins className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Play-to-Earn</h3>
              <p className="text-gray-300">Earn $NPLAY tokens while playing your favorite games in our ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Tokenomics</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-2xl font-bold text-indigo-400">Total Supply: 1,000,000,000 $NPLAY</p>
              <p className="text-gray-400 mt-2">Carefully distributed to ensure sustainable ecosystem growth</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-indigo-900/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-indigo-900/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-500/20 p-3 rounded-xl">
                    <Wallet className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Public Sale</h3>
                    <p className="text-indigo-400 font-semibold">40%</p>
                  </div>
                </div>
                <p className="text-gray-300">400,000,000 tokens available for public participation and trading</p>
              </div>
              
              <div className="bg-indigo-900/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-indigo-900/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-500/20 p-3 rounded-xl">
                    <Gift className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Gaming Rewards</h3>
                    <p className="text-indigo-400 font-semibold">20%</p>
                  </div>
                </div>
                <p className="text-gray-300">200,000,000 tokens allocated for in-game rewards and incentives</p>
              </div>
              
              <div className="bg-indigo-900/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-indigo-900/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-500/20 p-3 rounded-xl">
                    <Wrench className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Development</h3>
                    <p className="text-indigo-400 font-semibold">30%</p>
                  </div>
                </div>
                <p className="text-gray-300">300,000,000 tokens reserved for platform development and future upgrades</p>
              </div>
              
              <div className="bg-indigo-900/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-indigo-900/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-500/20 p-3 rounded-xl">
                    <Megaphone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Marketing & Team</h3>
                    <p className="text-indigo-400 font-semibold">10%</p>
                  </div>
                </div>
                <p className="text-gray-300">100,000,000 tokens for marketing initiatives and team allocation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <div className="bg-indigo-900/40 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Q2 2024 - Foundation</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Token Launch and Initial Exchange Listings</li>
                  <li>Community Building and Social Media Presence</li>
                  <li>Release of Alpha Gaming Platform</li>
                </ul>
              </div>
              <div className="bg-indigo-900/40 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Q3 2024 - Expansion</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Launch of First AI-Powered Game</li>
                  <li>Implementation of Play-to-Earn Mechanics</li>
                  <li>Strategic Partnerships with Gaming Studios</li>
                </ul>
              </div>
              <div className="bg-indigo-900/40 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Q4 2024 - Innovation</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Advanced AI Features Integration</li>
                  <li>Mobile Platform Launch</li>
                  <li>NFT Marketplace Integration</li>
                </ul>
              </div>
              <div className="bg-indigo-900/40 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Q1 2025 - Scaling</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Global Marketing Campaign</li>
                  <li>eSports Tournament Platform Launch</li>
                  <li>Cross-Chain Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300" 
                   alt="CEO" 
                   className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold">David Chen</h3>
              <p className="text-indigo-400">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300" 
                   alt="CTO" 
                   className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold">Sarah Williams</h3>
              <p className="text-indigo-400">CTO</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300" 
                   alt="Lead Developer" 
                   className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold">Michael Roberts</h3>
              <p className="text-indigo-400">Lead Developer</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=300&h=300" 
                   alt="Gaming Director" 
                   className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold">Emma Thompson</h3>
              <p className="text-indigo-400">Gaming Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-indigo-400" />
            <span className="text-xl font-bold">NeuroPlay AI</span>
          </div>
          <p className="text-gray-400">© 2024 NeuroPlay AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;