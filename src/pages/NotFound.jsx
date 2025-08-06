// import React from 'react';
// import { Link } from 'react-router-dom';

// const NotFound = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center text-center p-10 font-sans" >
//       <div>
//         <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
//         <p className="text-xl mb-2">Page Not Found</p>
//         <p className="text-gray-600 mb-6">
//           Sorry, the page you're looking for doesn't exist.
//         </p>
//         <Link to="/" className="text-blue-600 hover:underline">
//           Go back to Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NotFound = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Professional Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 font-sans">SportIgnite</span>
          </div>
          <div className="text-sm text-gray-500">
            {currentTime.toLocaleString()}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Professional Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-50 rounded-full mb-6">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
          </div>

          {/* Professional Typography */}
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Under Development
          </h1>
          
          <h2 className="text-xl text-gray-600 mb-8 font-normal max-w-2xl mx-auto leading-relaxed">
            We're currently enhancing this section of our platform to serve you better. 
            Our development team is working diligently to deliver an exceptional experience.
          </h2>

          {/* Status Information */}
          <div className="bg-gray-50 rounded-lg p-8 mb-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-semibold text-blue-600">Q4 2025</div>
                <div className="text-sm text-gray-600 font-medium">Expected Launch</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-semibold text-green-600">85%</div>
                <div className="text-sm text-gray-600 font-medium">Development Progress</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-semibold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Team Dedication</div>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-10 max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-700">Development Status</span>
              <span className="text-sm font-medium text-gray-700">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{width: '85%'}}
              ></div>
            </div>
          </div>

          {/* Professional Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Return to Homepage
            </Link>
            
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.894 2.553a1 1 0 00-.894 0l-7 3.5a1 1 0 000 1.788L7 9.063v3.874a1 1 0 00.553.894l4 2a1 1 0 00.894 0l4-2A1 1 0 0017 12.937V9.063l3-1.5a1 1 0 000-1.788l-7-3.5z"/>
              </svg>
              Get Updates
            </button>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-8 max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">
              Need immediate assistance? Our support team is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a href="mailto:support@company.com" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                support@SportIgnite.com
              </a>
              <span className="hidden sm:block text-gray-300">|</span>
              <a href="tel:+1234567890" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="border-t border-gray-200 px-6 py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div className="mb-2 sm:mb-0">
            © {new Date().getFullYear()} SportIgnite. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Status Page</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;