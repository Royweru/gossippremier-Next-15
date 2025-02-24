"use client"
// components/Newsletter.jsx// components/Newsletter.jsx
export function Newsletter() {
    return (
      <div className="grid md:grid-cols-2 gap-8 my-16">
        {/* Left Box - Visual Appeal */}
        <div className="relative p-8 rounded-3xl overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 opacity-90" />
          
          {/* Abstract Shapes */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-2xl" />
          
          {/* Content */}
          <div className="relative z-10 text-white">
            <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-lg mb-6">
              Get exclusive insights and updates delivered straight to your inbox
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                ✉️
              </div>
              <div>
                <p className="font-medium">Weekly Digest</p>
                <p className="text-sm opacity-80">Every Friday morning</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Box - Subscription Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Join Our Newsletter
          </h3>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
  
            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
                Your Interests
              </label>
              <div className="mt-1 grid grid-cols-2 gap-3">
                {['Technology', 'Stock Market', 'Politics', 'Health'].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
  
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    );
  }