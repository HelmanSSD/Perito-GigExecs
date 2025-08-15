import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

export default function Pricing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // SEO Metadata
  useEffect(() => {
    document.title = "Pricing - Flexible Pricing to Access World-Class Freelance Talent | GigExecs"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Transparent pricing ensures you get top talent without unnecessary overheads.")
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = "At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Transparent pricing ensures you get top talent without unnecessary overheads."
      document.head.appendChild(newMetaDescription)
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "GigExecs pricing, freelance platform pricing, professional services pricing, enterprise pricing, transparent pricing, top talent pricing, senior freelancer pricing, strategic leadership pricing")
    } else {
      const newMetaKeywords = document.createElement('meta')
      newMetaKeywords.name = 'keywords'
      newMetaKeywords.content = "GigExecs pricing, freelance platform pricing, professional services pricing, enterprise pricing, transparent pricing, top talent pricing, senior freelancer pricing, strategic leadership pricing"
      document.head.appendChild(newMetaKeywords)
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', "https://www.gigexecs.com/pricing")
    } else {
      const newCanonical = document.createElement('link')
      newCanonical.rel = 'canonical'
      newCanonical.href = "https://www.gigexecs.com/pricing"
      document.head.appendChild(newCanonical)
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', "Pricing - Flexible Pricing to Access World-Class Freelance Talent | GigExecs")
    } else {
      const newOgTitle = document.createElement('meta')
      newOgTitle.setAttribute('property', 'og:title')
      newOgTitle.content = "Pricing - Flexible Pricing to Access World-Class Freelance Talent | GigExecs"
      document.head.appendChild(newOgTitle)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', "At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Transparent pricing ensures you get top talent without unnecessary overheads.")
    } else {
      const newOgDescription = document.createElement('meta')
      newOgDescription.setAttribute('property', 'og:description')
      newOgDescription.content = "At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Transparent pricing ensures you get top talent without unnecessary overheads."
      document.head.appendChild(newOgDescription)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', "https://www.gigexecs.com/pricing")
    } else {
      const newOgUrl = document.createElement('meta')
      newOgUrl.setAttribute('property', 'og:url')
      newOgUrl.content = "https://www.gigexecs.com/pricing"
      document.head.appendChild(newOgUrl)
    }

    // Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', "Pricing - Flexible Pricing to Access World-Class Freelance Talent | GigExecs")
    } else {
      const newTwitterTitle = document.createElement('meta')
      newTwitterTitle.setAttribute('name', 'twitter:title')
      newTwitterTitle.content = "Pricing - Flexible Pricing to Access World-Class Freelance Talent | GigExecs"
      document.head.appendChild(newTwitterTitle)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', "At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Transparent pricing ensures you get top talent without unnecessary overheads.")
    } else {
      const newTwitterDescription = document.createElement('meta')
      newTwitterDescription.setAttribute('name', 'twitter:description')
      newTwitterDescription.content = "At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Transparent pricing ensures you get top talent without unnecessary overheads."
      document.head.appendChild(newTwitterDescription)
    }

    // Structured Data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pricing - Flexible Pricing to Access World-Class Freelance Talent",
      "description": "At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Transparent pricing ensures you get top talent without unnecessary overheads.",
      "url": "https://www.gigexecs.com/pricing",
      "mainEntity": {
        "@type": "Service",
        "name": "GigExecs Freelance Platform",
        "description": "Professional freelance platform connecting businesses with experienced professionals",
        "provider": {
          "@type": "Organization",
          "name": "GigExecs"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Professionals Plan",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free registration and bidding with 10% commission on earned revenue"
          },
          {
            "@type": "Offer",
            "name": "Small and Medium Businesses Plan",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free registration and project posting with 10% service fee on invoiced amounts"
          },
          {
            "@type": "Offer",
            "name": "Enterprise Plan",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Customized pricing structure for enterprise needs"
          }
        ]
      }
    }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl text-[#012E46] hover:text-[#0284C7] transition-colors cursor-pointer">
                <span className="font-bold">Gig</span><span className="font-normal">Execs</span>
              </a>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-12">
              <a href="/" className="text-[#1F2937] hover:text-[#0284C7] transition-colors">What is GigExecs</a>
              <a href="/client" className="text-[#1F2937] hover:text-[#0284C7] transition-colors">Clients</a>
              <a href="/professionals" className="text-[#1F2937] hover:text-[#0284C7] transition-colors">Professionals</a>
              <a href="/blog" className="text-[#1F2937] hover:text-[#0284C7] transition-colors">Blog</a>
            </div>

            {/* Right side - Action Buttons */}
            <div className="flex items-center">
              <Button variant="outline" className="border-[#012E46] text-[#012E46] hover:bg-[#F5F5F5] rounded-r-none border-r-0">
                Sign in
              </Button>
              <Button className="bg-[#012E46] hover:bg-[#0284C7] text-white rounded-l-none">
                Join
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-[#1F2937] hover:text-[#0284C7] transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-[#F5F5F5]">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors">What is GigExecs</a>
              <a href="/client" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors">Clients</a>
              <a href="/professionals" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors">Professionals</a>
              <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors">Blog</a>
            </div>
          </div>
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
                <span className="text-[#1F2937] font-medium">Pricing</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6 leading-tight">
            Pricing
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6">
            Flexible Pricing to Access World-Class Freelance Talent
          </h2>
          <p className="text-lg text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
            At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Whether you need strategic leadership, specialized project expertise, or flexible contractor support, our transparent pricing ensures you get top talent without unnecessary overheads.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] text-center mb-8">
            Why Choose GigExecs Over Traditional Freelance Platforms?
          </h2>
          <p className="text-lg text-[#6B7280] max-w-4xl mx-auto text-center leading-relaxed">
            While general freelance platforms offer broad talent pools, GigExecs specializes in expert talent for leadership, transformation, and specialized projects. Our pricing is competitive for premium expertise, ensuring you access the right skills at the right time. Enterprises looking for strategic leadership on a flexible basis can benefit from tailored pricing structures that align with their specific needs—ensuring they get high-impact expertise without the long-term overhead. <a href="/client" className="text-[#0284C7] hover:text-[#012E46] font-semibold underline">Explore what we can offer to Client Organizations</a>.
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Professionals */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-[#1F2937]">Professionals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#F5F5F5]">
                    <span className="text-[#6B7280] font-medium">Registration</span>
                    <span className="text-2xl font-bold text-[#16A34A]">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#F5F5F5]">
                    <span className="text-[#6B7280] font-medium">Bid for Projects</span>
                    <span className="text-2xl font-bold text-[#16A34A]">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#6B7280] font-medium">Commission</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#F97316]">10%</span>
                      <div className="text-sm text-[#9CA3AF]">on earned revenue</div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#012E46] hover:bg-[#0284C7] text-white py-3 text-lg font-semibold">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 - Small and Medium Businesses */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#0284C7] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#0284C7] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-[#1F2937]">Small and Medium Businesses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#F5F5F5]">
                    <span className="text-[#6B7280] font-medium">Registration</span>
                    <span className="text-2xl font-bold text-[#16A34A]">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#F5F5F5]">
                    <span className="text-[#6B7280] font-medium">Post Projects</span>
                    <span className="text-2xl font-bold text-[#16A34A]">Free</span>
                    </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#6B7280] font-medium">Service fee</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#F97316]">10%</span>
                      <div className="text-sm text-[#9CA3AF]">on amount invoiced by professionals</div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#012E46] hover:bg-[#0284C7] text-white py-3 text-lg font-semibold">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 - Enterprise */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-[#1F2937]">Enterprise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#F5F5F5]">
                    <span className="text-[#6B7280] font-medium">Registration</span>
                    <span className="text-2xl font-bold text-[#16A34A]">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#F5F5F5]">
                    <span className="text-[#6B7280] font-medium">Post Projects</span>
                    <span className="text-2xl font-bold text-[#16A34A]">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#6B7280] font-medium">Fees</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#0284C7]">Customized</span>
                      <div className="text-sm text-[#9CA3AF]">to fit your needs</div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#FACC15] hover:bg-[#EAB308] text-[#012E46] py-3 text-lg font-semibold">
                    Book a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#012E46] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#FACC15] mb-4">GigExecs</div>
              <p className="text-[#9CA3AF]">
                The premier freelance hub for top professionals and innovative companies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">How it works</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="/" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors text-white font-semibold">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="/help" className="hover:text-white transition-colors">Help</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1F2937] mt-8 pt-8 text-center text-[#9CA3AF]">
            <p>&copy; 2024 GigExecs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
