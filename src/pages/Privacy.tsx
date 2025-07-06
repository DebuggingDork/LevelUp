import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
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
              <Button variant="outline" className="border-blue-400/50 text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 backdrop-blur-sm">
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your privacy is our priority. We believe in complete transparency about how we handle your data.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm text-gray-200">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Key Principles Banner */}
          <div className="mb-12 p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-400/30 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <UserCheck className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Privacy Commitment</h2>
            </div>
            <p className="text-lg text-gray-100 leading-relaxed">
              <strong className="text-green-300">LevelUp AI collects ZERO personal data.</strong> Everything happens locally on your device. 
              We have no servers, no databases, and no way to access your information. Your privacy is guaranteed by design.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Permissions and Data Access */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-orange-400/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Extension Permissions Explained</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-6">
                <div className="p-5 bg-orange-500/10 rounded-xl border border-orange-400/30">
                  <h4 className="text-lg font-semibold text-white mb-4">Required Permissions & Their Purpose</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-orange-200">activeTab:</span>
                        <span className="text-gray-200 ml-2">Access current tab content only when you use the extension</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-orange-200">scripting:</span>
                        <span className="text-gray-200 ml-2">Inject content scripts to detect text selection and replace enhanced text</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-orange-200">contextMenus:</span>
                        <span className="text-gray-200 ml-2">Create right-click menu options for text enhancement</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-orange-200">clipboardWrite:</span>
                        <span className="text-gray-200 ml-2">Copy enhanced text to clipboard when requested</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-orange-200">storage:</span>
                        <span className="text-gray-200 ml-2">Store API keys and preferences locally in your browser</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-orange-200">https://*.googleapis.com/:</span>
                        <span className="text-gray-200 ml-2">Access Google APIs for potential future AI integrations (currently unused)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 bg-green-500/10 rounded-xl border border-green-400/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Permission Usage Guarantee</h4>
                  <p className="text-gray-100 leading-relaxed">
                    These permissions are used <strong className="text-green-300">only</strong> when you actively interact with the extension. 
                    We never access your data in the background or without your explicit action.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What We DON'T Collect */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-red-400/30 shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">What We DON'T Collect</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-100">No personal information</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-100">No browsing history</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-100">No text content</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-100">No clipboard data</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-100">No usage analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-100">No tracking cookies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-100">No server storage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-100">No Google API data</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-blue-400/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">How LevelUp AI Works</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-5 bg-blue-500/10 rounded-xl border border-blue-400/30">
                    <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-blue-300 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Local Processing</h4>
                    <p className="text-sm text-gray-200">Everything happens directly in your browser. No data leaves your device.</p>
                  </div>
                  <div className="p-5 bg-blue-500/10 rounded-xl border border-blue-400/30">
                    <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-blue-300 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Direct AI Connection</h4>
                    <p className="text-sm text-gray-200">Your text goes directly to your AI provider (OpenAI, Anthropic, etc.) using your API key.</p>
                  </div>
                  <div className="p-5 bg-blue-500/10 rounded-xl border border-blue-400/30">
                    <div className="w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-blue-300 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Zero Intermediaries</h4>
                    <p className="text-sm text-gray-200">We never see, store, or process your content. It's completely private.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Storage */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-purple-400/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Your Data Storage</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-6">
                <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-400/30">
                  <h4 className="text-lg font-semibold text-white mb-3">100% Local Storage</h4>
                  <p className="text-gray-100 mb-4">
                    All your data stays on your device in your browser's local storage:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">API keys (encrypted locally)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">Extension settings and preferences</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">Your favorites and history (if enabled)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-green-500/10 rounded-xl border border-green-400/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Complete Control</h4>
                  <p className="text-gray-100 leading-relaxed">
                    You have full control over your data. Delete it anytime by clearing the extension data or uninstalling. 
                    We have no access to it, and it never leaves your device.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Web Accessible Resources & Content Security */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Security & Content Access</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-6">
                <div className="p-5 bg-cyan-500/10 rounded-xl border border-cyan-400/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Web Accessible Resources</h4>
                  <p className="text-gray-100 mb-3">
                    The extension requires access to all websites (&lt;all_urls&gt;) to provide text enhancement functionality across the web. This broad access is necessary because:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200">Users may want to enhance text on any website (social media, email, documents, etc.)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200">The extension only activates when users explicitly select text and choose enhancement options</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200">No background monitoring or data collection occurs</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 bg-blue-500/10 rounded-xl border border-blue-400/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Content Security Policy</h4>
                  <p className="text-gray-100 leading-relaxed">
                    The extension uses minimal inline styles only for essential UI components and font loading. 
                    All JavaScript execution follows strict security guidelines with no external code execution or eval() usage.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Google APIs Usage */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-emerald-400/30 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Google APIs Declaration</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-4">
                <div className="p-5 bg-emerald-500/10 rounded-xl border border-emerald-400/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Current Google APIs Usage</h4>
                  <p className="text-gray-100 mb-3">
                    The extension currently requests access to https://*.googleapis.com/ for potential future integrations with Google's AI services. 
                    <strong className="text-emerald-300 ml-1">This permission is currently unused</strong> and reserved for future features.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200"><strong>Current Status:</strong> No Google APIs are actively used</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200"><strong>Future Use:</strong> May integrate with Google's AI services (Gemini, etc.)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200"><strong>Data Handling:</strong> If used, will follow same privacy-first principles</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 bg-yellow-500/10 rounded-xl border border-yellow-400/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Future Google API Integration</h4>
                  <p className="text-gray-100 leading-relaxed">
                    If Google APIs are integrated in future versions, they will be used solely for AI text processing 
                    with the same privacy guarantees: your data goes directly to Google's services using your API keys, 
                    with no intermediate storage or processing by LevelUp AI.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party AI Services */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-yellow-400/30 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Third-Party AI Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-4">
                <p className="text-lg leading-relaxed">
                  When you use AI features, your text is sent <strong className="text-yellow-300">directly</strong> to your chosen AI provider 
                  using your API key. LevelUp AI acts as a bridge, but never stores or processes your content.
                </p>
                <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-400/30">
                  <p className="text-sm text-gray-100 mb-3">Supported AI providers and their privacy policies:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-200">OpenAI (ChatGPT) - privacy.openai.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-200">Anthropic (Claude) - anthropic.com/privacy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-200">Google AI Services (Future) - policies.google.com/privacy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-200">Other supported providers as configured</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-green-400/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Your Rights</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-green-500/10 rounded-xl border border-green-400/30">
                    <h4 className="font-semibold text-white mb-2">Complete Control</h4>
                    <p className="text-sm text-gray-200">Since all data is local, you have 100% control over your information.</p>
                  </div>
                  <div className="p-5 bg-green-500/10 rounded-xl border border-green-400/30">
                    <h4 className="font-semibold text-white mb-2">Instant Deletion</h4>
                    <p className="text-sm text-gray-200">Remove all data instantly by clearing extension storage or uninstalling.</p>
                  </div>
                  <div className="p-5 bg-green-500/10 rounded-xl border border-green-400/30">
                    <h4 className="font-semibold text-white mb-2">No Data Requests</h4>
                    <p className="text-sm text-gray-200">We can't provide your data because we don't have it.</p>
                  </div>
                  <div className="p-5 bg-green-500/10 rounded-xl border border-green-400/30">
                    <h4 className="font-semibold text-white mb-2">Full Transparency</h4>
                    <p className="text-sm text-gray-200">Open source code available for verification of our privacy claims.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="bg-gray-900/60 backdrop-blur-sm border border-indigo-400/30 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Policy Updates</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-4">
                <p className="leading-relaxed">
                  If we update this privacy policy, we'll notify users through the extension interface. 
                  Since we don't collect data, any changes will only clarify our existing privacy-first approach.
                </p>
                <div className="p-5 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
                  <p className="text-sm text-indigo-200">
                    <strong>Promise:</strong> We will never change our core principle of zero data collection. 
                    Your privacy is permanently protected by our architecture.
                  </p>
                </div>
              </CardContent>
            </Card>

{/* Contact */}
<Card className="bg-gray-900/60 backdrop-blur-sm border border-pink-400/30 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-pink-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Contact & Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-100 space-y-6">
                <p className="leading-relaxed">
                  Have questions about our privacy practices or need support? We're here to help and maintain complete transparency.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-pink-500/10 rounded-xl border border-pink-400/30">
                    <h4 className="font-semibold text-white mb-3">Privacy Questions</h4>
                    <p className="text-sm text-gray-200 mb-3">
                      For any privacy-related concerns or questions about our data handling practices.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-200">Email: privacy@levelupai.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-200">Response within 24 hours</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-pink-500/10 rounded-xl border border-pink-400/30">
                    <h4 className="font-semibold text-white mb-3">General Support</h4>
                    <p className="text-sm text-gray-200 mb-3">
                      For technical support, feature requests, or general inquiries about LevelUp AI.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-200">Email: support@levelupai.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-200">Community Discord: discord.gg/levelupai</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-400/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Open Source Transparency</h4>
                  <p className="text-gray-100 mb-3">
                    Our commitment to privacy is backed by open source code. You can verify our privacy claims by reviewing our codebase.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-200">GitHub: github.com/levelupai/extension</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">License: MIT</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-400/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Privacy by Design</h3>
              <p className="text-gray-200 mb-6 max-w-2xl">
                LevelUp AI was built from the ground up with privacy as the foundation. 
                Your data never leaves your device, and we have no way to access it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  onClick={() => window.open('https://github.com/levelupai/extension', '_blank')}
                >
                  View Source Code
                </Button>
                <Button 
                  variant="outline"
                  className="border-blue-400/50 text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  onClick={() => window.open('mailto:privacy@levelupai.com', '_blank')}
                >
                  Ask Privacy Questions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img src="/images/logo.png" alt="LevelUp AI" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <span className="text-white font-semibold">LevelUp AI</span>
                <p className="text-gray-400 text-sm">Privacy-first AI text enhancement</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="mailto:support@levelupai.com" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© 2024 LevelUp AI. All rights reserved. Made with ❤️ for privacy-conscious users.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;