
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img src="/images/logo.png" alt="LevelUp AI Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LevelUp AI
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="pt-24 px-6 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Overview</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  At LevelUp AI, we are committed to protecting your privacy and ensuring transparency about how we handle your data. This Privacy Policy explains how our Chrome extension collects, uses, and protects your information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <h4 className="text-lg font-semibold text-white">Text Data</h4>
                <p>
                  When you use LevelUp AI to enhance text, we temporarily process the selected text through your configured AI service (OpenAI, Anthropic, etc.). This text is sent directly to your chosen AI provider and is not stored on our servers.
                </p>
                
                <h4 className="text-lg font-semibold text-white">API Keys</h4>
                <p>
                  Your API keys are stored locally in your browser's storage and are never transmitted to our servers. These keys are used solely to authenticate with your chosen AI service providers.
                </p>
                
                <h4 className="text-lg font-semibold text-white">Usage Analytics</h4>
                <p>
                  We may collect anonymous usage statistics to improve the extension, such as feature usage patterns and error reports. This data cannot be used to identify individual users.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide AI-powered text enhancement services</li>
                  <li>To store your favorites and history locally on your device</li>
                  <li>To improve the extension's functionality and user experience</li>
                  <li>To provide customer support when requested</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Data Storage and Security</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong>Local Storage:</strong> All your data, including API keys, favorites, and history, is stored locally in your browser. We do not have access to this information.
                </p>
                <p>
                  <strong>Third-Party Services:</strong> When you use AI features, your text is processed by your chosen AI provider (OpenAI, Anthropic, etc.) according to their privacy policies.
                </p>
                <p>
                  <strong>Security:</strong> We implement industry-standard security measures to protect any data that passes through our systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  LevelUp AI integrates with various AI service providers. When you use these services, their respective privacy policies apply:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>OpenAI Privacy Policy</li>
                  <li>Anthropic Privacy Policy</li>
                  <li>Other AI service providers as configured</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Data Control:</strong> You have full control over your data since it's stored locally</li>
                  <li><strong>Deletion:</strong> You can delete your data by clearing the extension's storage or uninstalling it</li>
                  <li><strong>Opt-out:</strong> You can disable analytics collection in the extension settings</li>
                  <li><strong>Access:</strong> You can view all your stored data through the extension interface</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify users of any material changes through the extension or our website. Your continued use of LevelUp AI after such changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p><strong>Email:</strong> mamidala.mani1355@gmail.com</p>
                  <p><strong>Developer:</strong> Mani Mamidala</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
