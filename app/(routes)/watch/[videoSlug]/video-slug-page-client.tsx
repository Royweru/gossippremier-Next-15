// pages/index.js
import Head from 'next/head'

import { useState, useRef, useEffect } from 'react'

export default function VideoSlugPageClient() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }
  
  // Handle video end
  useEffect(() => {
    const handleVideoEnd = () => {
      setIsPlaying(false);
    };
    
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>EcoStyle | Sustainable Fashion News</title>
        <meta name="description" content="Latest news on sustainable fashion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-rose-500 rounded-full"></div>
            <span className="font-bold text-xl">EcoStyle</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-rose-500 transition">Home</a>
            <a href="#" className="text-gray-800 hover:text-rose-500 transition">Fashion</a>
            <a href="#" className="text-gray-800 hover:text-rose-500 transition">Sustainability</a>
            <a href="#" className="text-gray-800 hover:text-rose-500 transition">Lifestyle</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:block py-2 px-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition">
              Subscribe
            </button>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <span className="inline-block bg-rose-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                NEWS
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Is Shopping Second Hand Still a Sustainable Option?
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-6">
                As more consumers wake up to the damaging impact of fast fashion on the planet and its people, 
                committing to only shopping second hand seems like a positive step towards sustainability.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  March 13, 2025
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  862 views
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  5 min read
                </span>
              </div>
              
              <div className="flex gap-2 mb-8">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="relative bg-fuchsia-100 aspect-video w-full overflow-hidden">
              <div className="absolute inset-0 bg-fuchsia-500/90">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                  poster="/api/placeholder/1280/720"
                >
                  <source src="https://cdnjs.cloudflare.com/ajax/libs/media-video-samples/BigBuckBunny_320x180.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <button 
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/40 backdrop-blur-sm p-4 rounded-full hover:bg-white/60 transition duration-300"
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this
                spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so
                absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should
                be incapable of drawing a single stroke at the present moment.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* More article content would go here */}
          </div>
          
          <aside>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl">Enjoy Unlimited Digital Access</h2>
                <div className="text-rose-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Read trusted, award-winning journalism. Just $2 for 6 months.</p>
              <button className="w-full py-3 bg-rose-500 text-white font-medium rounded-full hover:bg-rose-600 transition">
                Subscribe Now
              </button>
              <p className="text-center text-sm mt-4">
                Already a subscriber? <a href="#" className="text-rose-500 font-medium underline">Log In</a>
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-bold text-xl border-b border-gray-200 pb-2 mb-4">TRENDING NOW</h2>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-3xl font-bold text-gray-300">1</span>
                  <div>
                    <h3 className="font-medium">The UK&apos;s Best Outdoor Restaurants and Terraces</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>in LIFESTYLE</span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        992
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        2
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-3xl font-bold text-gray-300">2</span>
                  <div>
                    <h3 className="font-medium">The 17 Best Mascaras of All Time</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>in FASHION</span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        504
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        1
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-3xl font-bold text-gray-300">3</span>
                  <div>
                    <h3 className="font-medium">Best Christmas gift for fashion lovers</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>in NEWS</span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        313
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <div className="fixed bottom-0 right-0 flex flex-col gap-2 p-2">
        <button className="bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        <button className="bg-orange-500 text-white p-4 rounded-md hover:bg-orange-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </button>
        <button className="bg-green-500 text-white p-4 rounded-md hover:bg-green-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Footer content would go here */}
        </div>
      </footer>
    </div>
  )
}