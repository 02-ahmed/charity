import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">GhanaCare</h1>
            </div>
            <div className="hidden md:flex space-x-4">
              <button className="text-gray-600 hover:text-green-600 font-medium">
                How It Works
              </button>
              <button className="text-gray-600 hover:text-green-600 font-medium">
                Browse Campaigns
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium">
                Start Campaign
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Help Ghanaians in Need
              <span className="block text-green-600">Through Mobile Money</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The first crowdfunding platform designed for Ghana. Raise funds
              for medical treatments, education, and emergencies with verified
              campaigns and instant mobile money donations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 font-semibold text-lg">
                Start Your Campaign
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 font-semibold text-lg">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Money Partners */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-600">
              Donate Instantly With
            </h3>
          </div>
          <div className="flex justify-center items-center space-x-8 sm:space-x-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">MTN</span>
              </div>
              <p className="text-sm text-gray-600">Mobile Money</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">VOD</span>
              </div>
              <p className="text-sm text-gray-600">Vodafone Cash</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">AT</span>
              </div>
              <p className="text-sm text-gray-600">AirtelTigo</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, secure, and verified campaigns
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Campaign</h3>
              <p className="text-gray-600">
                Upload medical bills, documentation, and provide 3 guarantors
                with valid IDs and addresses
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Verified</h3>
              <p className="text-gray-600">
                Our team verifies all documents and guarantors within 48-72
                hours for maximum trust
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Donations</h3>
              <p className="text-gray-600">
                Get instant mobile money donations directly to your phone from
                supporters across Ghana
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built on Trust
            </h2>
            <p className="text-xl text-gray-600">
              Every campaign is thoroughly verified
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">📋</span>
              </div>
              <h3 className="font-semibold mb-2">Document Verification</h3>
              <p className="text-sm text-gray-600">
                Medical bills, doctor reports, and official documentation
                required
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">👥</span>
              </div>
              <h3 className="font-semibold mb-2">3 Guarantors</h3>
              <p className="text-sm text-gray-600">
                Valid Ghana Card and residential address verification for each
                guarantor
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">✅</span>
              </div>
              <h3 className="font-semibold mb-2">Manual Review</h3>
              <p className="text-sm text-gray-600">
                Human verification team reviews every campaign before approval
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">📱</span>
              </div>
              <h3 className="font-semibold mb-2">Progress Updates</h3>
              <p className="text-sm text-gray-600">
                Regular updates with photos and receipts from campaign creators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Campaigns */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Help Someone Today
            </h2>
            <p className="text-xl text-gray-600">Recent verified campaigns</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Medical Treatment</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-600 font-semibold">
                  ⭐⭐⭐ VERIFIED
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Heart Surgery for Akosua
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Young mother needs urgent heart surgery. All medical documents
                verified with 3 guarantors.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>GH₵ 12,500 raised</span>
                  <span>GH₵ 25,000 goal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Donate Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Emergency</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-600 font-semibold">
                  ⭐⭐⭐ VERIFIED
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Fire Destroyed Our Home
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Family of 6 lost everything in house fire. Police report and
                damage assessment verified.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>GH₵ 8,200 raised</span>
                  <span>GH₵ 15,000 goal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Donate Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Education</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-green-600 font-semibold">
                  ⭐⭐⭐ VERIFIED
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                University Fees for Kwame
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Brilliant student needs help with medical school fees. Admission
                letter and fee structure verified.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>GH₵ 18,500 raised</span>
                  <span>GH₵ 20,000 goal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of Ghanaians helping each other through verified
            campaigns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg">
              Start Your Campaign
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-green-700 font-semibold text-lg">
              Browse Campaigns
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                GhanaCare
              </h3>
              <p className="text-gray-400">
                Helping Ghanaians support each other through verified
                crowdfunding campaigns.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Start Campaign
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Campaigns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trust & Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Mobile Money</h4>
              <ul className="space-y-2 text-gray-400">
                <li>MTN Mobile Money</li>
                <li>Vodafone Cash</li>
                <li>AirtelTigo Money</li>
                <li>More coming soon...</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GhanaCare. Made with ❤️ for Ghana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
