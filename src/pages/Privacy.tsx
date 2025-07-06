import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)]"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <img src="/images/logo.png" alt="LevelUp AI Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LevelUp AI
              </span>
            </a>
            <a href="/">
              <Button variant="outline" className="border-blue-400/30 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="relative pt-24 px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Your privacy is our priority. We believe in complete transparency about how we handle your data.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Key Principles Banner */}
          <div className="mb-12 p-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl border border-green-500/20 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <UserCheck className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Privacy Commitment</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-green-400">LevelUp AI collects ZERO personal data.</strong> Everything happens locally on your device. 
              We have no servers, no databases, and no way to access your information. Your privacy is guaranteed by design.
            </p>
          </div>

          <div className="grid gap-8">
            {/* What We DON'T Collect */}
            <Card className="bg-black/40 backdrop-blur-sm border border-red-500/20 shadow-2xl hover:shadow-red-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">What We DON'T Collect</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>No personal information</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>No browsing history</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>No text content</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>No usage analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>No tracking cookies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>No server storage</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">How LevelUp AI Works</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Local Processing</h4>
                    <p className="text-sm text-gray-400">Everything happens directly in your browser. No data leaves your device.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-blue-400 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Direct AI Connection</h4>
                    <p className="text-sm text-gray-400">Your text goes directly to your AI provider (OpenAI, Anthropic, etc.) using your API key.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-blue-400 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Zero Intermediaries</h4>
                    <p className="text-sm text-gray-400">We never see, store, or process your content. It's completely private.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Storage */}
            <Card className="bg-black/40 backdrop-blur-sm border border-purple-500/20 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Your Data Storage</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-6">
                <div className="p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">100% Local Storage</h4>
                  <p className="text-gray-300 mb-4">
                    All your data stays on your device in your browser's local storage:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>API keys (encrypted locally)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Extension settings and preferences</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Your favorites and history (if enabled)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Complete Control</h4>
                  <p className="text-gray-300">
                    You have full control over your data. Delete it anytime by clearing the extension data or uninstalling. 
                    We have no access to it, and it never leaves your device.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Third-Party AI Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-lg leading-relaxed">
                  When you use AI features, your text is sent <strong className="text-yellow-400">directly</strong> to your chosen AI provider 
                  using your API key. LevelUp AI acts as a bridge, but never stores or processes your content.
                </p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-sm text-gray-400 mb-3">Supported AI providers and their privacy policies:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>OpenAI (ChatGPT) - privacy.openai.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Anthropic (Claude) - anthropic.com/privacy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Other supported providers as configured</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-black/40 backdrop-blur-sm border border-green-500/20 shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Your Rights</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Complete Control</h4>
                    <p className="text-sm text-gray-400">Since all data is local, you have 100% control over your information.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Instant Deletion</h4>
                    <p className="text-sm text-gray-400">Remove all data instantly by clearing extension storage or uninstalling.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="font-semibold text-white mb-2">No Data Requests</h4>
                    <p className="text-sm text-gray-400">We can't provide your data because we don't have it.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Full Transparency</h4>
                    <p className="text-sm text-gray-400">Open source code available for verification of our privacy claims.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Policy Updates</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  If we update this privacy policy, we'll notify users through the extension interface. 
                  Since we don't collect data, any changes will only clarify our existing privacy-first approach.
                </p>
                <div className="p-4 bg-indigo-900/20 rounded-xl border border-indigo-500/20">
                  <p className="text-sm text-indigo-200">
                    <strong>Promise:</strong> We will never change our core principle of zero data collection. 
                    Your privacy is permanently protected by our architecture.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-black/40 backdrop-blur-sm border border-pink-500/20 shadow-2xl hover:shadow-pink-500/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-pink-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Contact & Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  Have questions about our privacy practices? We're here to help clarify our commitment to your privacy.
                </p>
                <div className="p-6 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-xl border border-pink-500/20">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span><strong className="text-white">Email:</strong> mamidala.mani1355@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span><strong className="text-white">Developer:</strong> Mani Mamidala</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Privacy by Design</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                LevelUp AI was built with privacy as the foundation. We chose an architecture that makes it 
                <strong className="text-blue-400"> impossible</strong> for us to collect your data, 
                ensuring your privacy is protected not just by policy, but by design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;