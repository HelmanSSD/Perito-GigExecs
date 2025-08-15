import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'

const AboutUs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // SEO metadata
    document.title = 'About Us - GigExecs | Premier Freelance Hub for Top Professionals'
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about GigExecs mission to revolutionize the gig economy by connecting senior professionals with innovative companies. Discover our story, values, and commitment to excellence.')
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = 'Learn about GigExecs mission to revolutionize the gig economy by connecting senior professionals with innovative companies. Discover our story, values, and commitment to excellence.'
      document.head.appendChild(newMetaDescription)
    }

    // Canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://www.gigexecs.com/about-us')
    } else {
      const newCanonicalLink = document.createElement('link')
      newCanonicalLink.rel = 'canonical'
      newCanonicalLink.href = 'https://www.gigexecs.com/about-us'
      document.head.appendChild(newCanonicalLink)
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'About Us - GigExecs | Premier Freelance Hub for Top Professionals')
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Learn about GigExecs mission to revolutionize the gig economy by connecting senior professionals with innovative companies.')
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://www.gigexecs.com/about-us')
    }

    // Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'About Us - GigExecs | Premier Freelance Hub for Top Professionals')
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Learn about GigExecs mission to revolutionize the gig economy by connecting senior professionals with innovative companies.')
    }

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GigExecs",
      "description": "Premier freelance hub for top professionals and innovative companies",
      "url": "https://www.gigexecs.com",
      "logo": "https://www.gigexecs.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/gigexecs",
        "https://twitter.com/gigexecs"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@gigexecs.com"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-[#012E46]">
                <span className="font-bold">Gig</span>Execs
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-600 hover:text-[#012E46] px-3 py-2 text-sm font-medium transition-colors">
                  What is GigExecs
                </a>
                <a href="/client" className="text-gray-600 hover:text-[#012E46] px-3 py-2 text-sm font-medium transition-colors">
                  Clients
                </a>
                <a href="/professionals" className="text-gray-600 hover:text-[#012E46] px-3 py-2 text-sm font-medium transition-colors">
                  Professionals
                </a>
                <a href="/blog" className="text-gray-600 hover:text-[#012E46] px-3 py-2 text-sm font-medium transition-colors">
                  Blog
                </a>
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-[#012E46] text-[#012E46] hover:bg-[#012E46] hover:text-white">
                Sign in
              </Button>
              <Button className="bg-[#012E46] hover:bg-[#0284C7] text-white">
                Join
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-[#012E46] focus:outline-none focus:text-[#012E46]"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <a href="/" className="text-gray-600 hover:text-[#012E46] block px-3 py-2 text-base font-medium transition-colors">
                  What is GigExecs
                </a>
                <a href="/client" className="text-gray-600 hover:text-[#012E46] block px-3 py-2 text-base font-medium transition-colors">
                  Clients
                </a>
                <a href="/professionals" className="text-gray-600 hover:text-[#012E46] block px-3 py-2 text-base font-medium transition-colors">
                  Professionals
                </a>
                <a href="/blog" className="text-gray-600 hover:text-[#012E46] block px-3 py-2 text-base font-medium transition-colors">
                  Blog
                </a>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <Button variant="outline" className="w-full mb-2 border-[#012E46] text-[#012E46] hover:bg-[#012E46] hover:text-white">
                    Sign in
                  </Button>
                  <Button className="w-full bg-[#012E46] hover:bg-[#0284C7] text-white">
                    Join
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Breadcrumbs */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-[#6B7280] hover:text-[#0284C7] transition-colors">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-[#9CA3AF] mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#1F2937] font-medium">About Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Page Title */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1F2937] mb-6">
            About GigExecs – The Freelance Marketplace for Experienced Professionals
          </h1>
        </div>
      </section>

      {/* First Content Block */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#012E46] mb-6">
              The Story Behind GigExecs - The Premium Freelance Marketplace
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              At GigExecs, we connect businesses, startups, and enterprises with a curated network of highly experienced freelancers, senior consultants, and interim executives. Whether you need specialist skills for a high-impact project or fractional leadership to drive change, GigExecs ensures you get access to top-tier professionals with the experience to deliver results. We're not a generic freelance platform. Our focus is senior talent with at least 15 years of proven industry experience in strategy, operations, technology, marketing, finance, and executive leadership across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Second Content Block */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#012E46] mb-6">
              Our Mission – Empowering Businesses with Proven Expertise
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              At GigExecs, our mission is to help businesses thrive by providing on-demand access to the best senior talent globally. We believe experience matters, especially when tackling complex challenges, entering new markets, or delivering critical projects. By using technology to simplify the way businesses access their skills and expertise, we are fostering a global community where experience is valued, ageism is challenged, and impactful work is executed.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6">
              Meet the Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Nuno G. Rodrigues - Co-Founder, Chief Executive Officer */}
            <Card className="bg-white border-0 shadow-lg h-full flex flex-col">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#012E46] to-[#0284C7] rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-xl font-bold text-[#1F2937] mb-2">Nuno G. Rodrigues</CardTitle>
                <p className="text-[#0284C7] font-medium">Co-Founder, Chief Executive Officer</p>
              </CardHeader>
              <CardContent className="text-center pt-0 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <p className="text-[#6B7280] leading-relaxed">
                    With over 20 years of international experience, Nuno has held senior and executive roles in commercial, financial, and strategic leadership across blue-chip companies, mid-tier firms, and startups. He has originated and led deals exceeding $1 billion and has mentored over 60 entrepreneurs worldwide. Holding an MBA from London Business School, he brings a deep understanding of business growth and innovation.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Outside of work, he's a dedicated husband and father of four, passionate about sports, great food, and building businesses that make an impact.
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-auto pt-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:opacity-80">
                    <g clipPath="url(#clip0_959_23574)">
                      <path d="M18.3173 2.06006H21.6747L14.3414 10.4978L23 21.9396H16.1968L10.8956 15.0038L4.7992 21.9396H1.44177L9.30522 12.9275L1 2.06006H7.97992L12.7952 8.4215L18.3173 2.06006ZM17.1245 19.9074H18.9799L6.96386 3.95966H4.93173L17.1245 19.9074Z" fill="#012E46"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_959_23574">
                        <rect width="22" height="19.8795" fill="white" transform="translate(1 2.06006)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:opacity-80">
                    <path d="M5.99417 23V8.15664H1.27824V23H5.99417ZM3.63682 6.12881C5.28134 6.12881 6.30499 4.98901 6.30499 3.56465C6.27435 2.10816 5.28141 1 3.66802 1C2.05489 1 1 2.10818 1 3.56465C1 4.98908 2.02339 6.12881 3.60603 6.12881H3.63667H3.63682ZM8.60443 23H13.3204V14.7107C13.3204 14.2671 13.351 13.8239 13.4755 13.5068C13.8165 12.6205 14.5924 11.7024 15.8952 11.7024C17.6017 11.7024 18.2844 13.0636 18.2844 15.059V22.9999H23V14.4888C23 9.92955 20.6734 7.80816 17.5706 7.80816C15.0266 7.80816 13.9095 9.29584 13.289 10.3091H13.3205V8.15633H8.60453C8.66642 9.54915 8.60453 22.9997 8.60453 22.9997L8.60443 23Z" fill="#012E46"/>
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Jaco van den Heever - Co-Founder, Chief Experience Officer */}
            <Card className="bg-white border-0 shadow-lg h-full flex flex-col">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FACC15] to-[#F97316] rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-xl font-bold text-[#1F2937] mb-2">Jaco van den Heever</CardTitle>
                <p className="text-[#F97316] font-medium">Co-Founder, Chief Experience Officer</p>
              </CardHeader>
              <CardContent className="text-center pt-0 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <p className="text-[#6B7280] leading-relaxed">
                    With 19 years of professional experience across multiple industries and continents, Jaco has held senior leadership roles in design, IT, and product management for multinational blue-chips, mid-tier companies, and startups. He holds an MBA from Wits Business School and is a Certified Experience Architect (CXA), bringing a strong blend of strategic thinking and user-centered design expertise.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Outside of work, he is a devoted husband and father of three, passionate about cooking, football, and family time. He finds fulfilment in making a difference through charity work and helping others thrive.
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-auto pt-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:opacity-80">
                    <g clipPath="url(#clip0_959_23574)">
                      <path d="M18.3173 2.06006H21.6747L14.3414 10.4978L23 21.9396H16.1968L10.8956 15.0038L4.7992 21.9396H1.44177L9.30522 12.9275L1 2.06006H7.97992L12.7952 8.4215L18.3173 2.06006ZM17.1245 19.9074H18.9799L6.96386 3.95966H4.93173L17.1245 19.9074Z" fill="#012E46"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_959_23574">
                        <rect width="22" height="19.8795" fill="white" transform="translate(1 2.06006)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:opacity-80">
                    <path d="M5.99417 23V8.15664H1.27824V23H5.99417ZM3.63682 6.12881C5.28134 6.12881 6.30499 4.98901 6.30499 3.56465C6.27435 2.10816 5.28141 1 3.66802 1C2.05489 1 1 2.10818 1 3.56465C1 4.98908 2.02339 6.12881 3.60603 6.12881H3.63667H3.63682ZM8.60443 23H13.3204V14.7107C13.3204 14.2671 13.351 13.8239 13.4755 13.5068C13.8165 12.6205 14.5924 11.7024 15.8952 11.7024C17.6017 11.7024 18.2844 13.0636 18.2844 15.059V22.9999H23V14.4888C23 9.92955 20.6734 7.80816 17.5706 7.80816C15.0266 7.80816 13.9095 9.29584 13.289 10.3091H13.3205V8.15633H8.60453C8.66642 9.54915 8.60453 22.9997 8.60453 22.9997L8.60443 23Z" fill="#012E46"/>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            {/* GigExecs Brand */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-[#FACC15] mb-4">
                <span className="font-bold">Gig</span>Execs
              </div>
              <p className="text-gray-300 mb-4">
                The premier freelance hub for top professionals and innovative companies.
              </p>
            </div>

            {/* How it works */}
            <div>
              <h3 className="text-lg font-semibold mb-4">How it works</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="/about-us" className="text-[#FACC15] transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="hover:text-white transition-colors">Help</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GigExecs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs
