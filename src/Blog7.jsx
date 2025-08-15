import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

export default function Blog7() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // SEO Metadata
  useEffect(() => {
    // Update document title
    document.title = "How AI and Robots Are Transforming Jobs in 2025 – Adapt or Be Replaced | GigExecs"
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "AI and robotics are revolutionizing work in 2025. Learn how automation impacts jobs, the rise of flexible work, and how professionals can stay relevant in an AI-driven world.")
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = "AI and robotics are revolutionizing work in 2025. Learn how automation impacts jobs, the rise of flexible work, and how professionals can stay relevant in an AI-driven world."
      document.head.appendChild(newMetaDescription)
    }

    // Add meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "AI and job disruption 2025, How AI is changing the workforce, Will AI replace jobs?, Future of work with AI and robotics, AI automation and job security, Best careers in the AI era, How to adapt to AI in the workplace, AI and human collaboration in jobs, Gig economy and AI-driven work, AI-proof careers for professionals")
    } else {
      const newMetaKeywords = document.createElement('meta')
      newMetaKeywords.name = 'keywords'
      newMetaKeywords.content = "AI and job disruption 2025, How AI is changing the workforce, Will AI replace jobs?, Future of work with AI and robotics, AI automation and job security, Best careers in the AI era, How to adapt to AI in the workplace, AI and human collaboration in jobs, Gig economy and AI-driven work, AI-proof careers for professionals"
      document.head.appendChild(newMetaKeywords)
    }

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', "How AI and Robots Are Transforming Jobs in 2025 – Adapt or Be Replaced")
    } else {
      const newOgTitle = document.createElement('meta')
      newOgTitle.setAttribute('property', 'og:title')
      newOgTitle.content = "How AI and Robots Are Transforming Jobs in 2025 – Adapt or Be Replaced"
      document.head.appendChild(newOgTitle)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', "AI and robotics are revolutionizing work in 2025. Learn how automation impacts jobs, the rise of flexible work, and how professionals can stay relevant in an AI-driven world.")
    } else {
      const newOgDescription = document.createElement('meta')
      newOgDescription.setAttribute('property', 'og:description')
      newOgDescription.content = "AI and robotics are revolutionizing work in 2025. Learn how automation impacts jobs, the rise of flexible work, and how professionals can stay relevant in an AI-driven world."
      document.head.appendChild(newOgDescription)
    }

    const ogType = document.querySelector('meta[property="og:type"]')
    if (ogType) {
      ogType.setAttribute('content', "article")
    } else {
      const newOgType = document.createElement('meta')
      newOgType.setAttribute('property', 'og:type')
      newOgType.content = "article"
      document.head.appendChild(newOgType)
    }

    // Add Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) {
      twitterCard.setAttribute('content', "summary_large_image")
    } else {
      const newTwitterCard = document.createElement('meta')
      newTwitterCard.name = 'twitter:card'
      newTwitterCard.content = "summary_large_image"
      document.head.appendChild(newTwitterCard)
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', "How AI and Robots Are Transforming Jobs in 2025 – Adapt or Be Replaced")
    } else {
      const newTwitterTitle = document.createElement('meta')
      newTwitterTitle.name = 'twitter:title'
      newTwitterTitle.content = "How AI and Robots Are Transforming Jobs in 2025 – Adapt or Be Replaced"
      document.head.appendChild(newTwitterTitle)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', "AI and robotics are revolutionizing work in 2025. Learn how automation impacts jobs, the rise of flexible work, and how professionals can stay relevant in an AI-driven world.")
    } else {
      const newTwitterDescription = document.createElement('meta')
      newTwitterDescription.name = 'twitter:description'
      newTwitterDescription.content = "AI and robotics are revolutionizing work in 2025. Learn how automation impacts jobs, the rise of flexible work, and how professionals can stay relevant in an AI-driven world."
      document.head.appendChild(newTwitterDescription)
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', "https://www.gigexecs.com/blog/ai-robots-future-work-2025")
    } else {
      const newCanonical = document.createElement('link')
      newCanonical.rel = 'canonical'
      newCanonical.href = "https://www.gigexecs.com/blog/ai-robots-future-work-2025"
      document.head.appendChild(newCanonical)
    }

    // Add structured data for article
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How AI and Robots Are Transforming Jobs in 2025 – Adapt or Be Replaced",
      "description": "AI and robotics are revolutionizing work in 2025. Learn how automation impacts jobs, the rise of flexible work, and how professionals can stay relevant in an AI-driven world.",
      "image": "https://www.gigexecs.com/images/ai-robots-future-work-2025.jpg",
      "author": {
        "@type": "Person",
        "name": "GigExecs Insider"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GigExecs",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.gigexecs.com/images/logo.png"
        }
      },
      "datePublished": "2025-01-21",
      "dateModified": "2024-12-19",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.gigexecs.com/blog/ai-robots-future-work-2025"
      }
    }

    // Remove existing structured data if any
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
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
              <a href="/blog" className="text-[#0284C7] font-semibold">Blog</a>
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
              <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors font-semibold">Blog</a>
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
                <a href="/blog" className="text-[#6B7280] hover:text-[#0284C7] transition-colors">
                  Blog
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-[#9CA3AF] mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#1F2937] font-medium">AI, Robots, and the Future of Work: Buckle Up, Humans!</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author & Date */}
          <div className="mb-8">
            <div className="text-lg font-semibold text-[#1F2937] mb-2">GigExecs Insider</div>
            <div className="text-[#6B7280]">January 21, 2025</div>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-12 leading-tight">
            AI, Robots, and the Future of Work: Buckle Up, Humans!
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Intro Paragraph */}
            <div className="mb-12">
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                AI is incredible—I'm a huge fan and a daily user. Robots? Equally fascinating. And if you've been paying attention, 2025 is shaping up to be the year when humanoid robots finally step out of science fiction and into our daily lives. But let's be real—while that's undeniably exciting, the burning question on many minds (including mine) is: How will AI and robotics impact jobs?
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                AI is flexing its muscles across industries:
              </h2>
              <ul className="list-disc list-inside space-y-3 mb-6">
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  Writing articles, crafting poetry, and answering emails
                </li>
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  Designing complex systems and coding software
                </li>
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  Composing music and creating digital art
                </li>
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  Providing accurate and rapid health assessments
                </li>
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  Automating customer service, logistics, and financial analysis
                </li>
              </ul>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                It's like having an army of ultra-efficient employees who never sleep, never complain, and work for free—or at least a fraction of the cost of human labor. The result? Job cuts, layoffs, and workforce restructuring. But in the long term, AI may also pave the way for new industries and career paths (more on that later).
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                No Job Is Entirely Safe—Adapt or Be Replaced
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                If you think your job is untouchable, think again. AI isn't just coming for low-skill, repetitive work—it's making its way into corporate, creative, and even leadership roles. Whether it's next year, five years from now, or further down the line, one thing is clear: no industry is immune to AI disruption.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                So, what's the best response?
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6">
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  <strong className="text-[#1F2937]">Panic?</strong> Tempting, but not helpful.
                </li>
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  <strong className="text-[#1F2937]">Ignore it?</strong> Also tempting, but dangerous.
                </li>
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  <strong className="text-[#1F2937]">Adapt?</strong> Bingo.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                The Future of Work: New Opportunities Amid the Disruption
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                Historically, every major technological shift has created new opportunities—and this AI revolution will be no different. Entirely new fields are emerging, including:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6">
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  <strong className="text-[#1F2937]">Emotional AI & AI Ethics</strong> – Ensuring AI aligns with human values
                </li>
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  <strong className="text-[#1F2937]">AI Human Coaches</strong> – Teaching people how to work effectively with AI
                </li>
                <li className="text-lg text-[#6B7280] leading-relaxed">
                  <strong className="text-[#1F2937]">Synthetic Media & Digital Identity</strong> – Creating AI-generated content and virtual influencers
                </li>
              </ul>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                Success in this new era requires us to embrace what makes humans unique—our creativity, empathy, problem-solving, and ability to connect the dots in ways machines can't (at least, not yet). The real advantage isn't in doing repetitive tasks better than AI; it's in leveraging human qualities that AI struggles to replicate.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                The Rise of the Flexible Workforce
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                For professionals in their 40s, 50s, 60s, and beyond, the traditional career path is evolving. The days of lifelong corporate jobs may be fading, but highly flexible, project-based work is on the rise. Instead of long-term employment, seasoned professionals will find success through short-term, high-value engagements—getting paid well for their expertise before moving on to the next gig.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                Gig platforms like GigExecs are shaping this transition, offering experienced professionals new ways to monetize their skills without being tied to a single employer.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                Embrace Change or Get Left Behind
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                While AI and robotics continue to revolutionize the workforce, the key to staying relevant is simple: adapt, collaborate, and evolve. The future belongs to those who are willing to learn, pivot, and embrace change. Our best asset remains our humanity—our creativity, emotional intelligence, and adaptability.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                So, buckle up. The future of work is here. And staying human? That's still our best card in the deck.
              </p>
            </div>

            {/* CTA Link */}
            <div className="text-right">
              <a href="https://www.gigexecs.com/signup" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-semibold text-lg transition-colors" target="_blank" rel="noopener noreferrer">
                Join GigExecs Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] text-center mb-16">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Related Article 1 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-semibold mb-1">REMOTE,</div>
                  <div className="text-sm font-semibold mb-1">HYBRID OR</div>
                  <div className="text-sm font-semibold mb-1">IN-OFFICE...</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/remote-hybrid-in-office" className="hover:text-[#0284C7] transition-colors">
                    Remote, Hybrid, or In-Office? Choosing the Best Work Model for Career Growth
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  Is remote work the future, or is hybrid the best balance? Discover insights from 23 years of global experience on how work models impact career growth, flexibility, and the evolving job market.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | March 15, 2024
                </div>
                <a href="/blog/remote-hybrid-in-office" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Related Article 2 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-[#012E46] text-center">
                  <div className="text-sm font-semibold mb-2">GIGEXECS UPDATE</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/corporate-leadership-executive-freelancing" className="hover:text-[#0284C7] transition-colors">
                    From Corporate Leadership to Executive Freelancing: The Story Behind GigExecs
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  Discover the story behind GigExecs - a platform designed for seasoned executives, consultants, and specialists seeking flexible, high-value opportunities.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | May 6, 2024
                </div>
                <a href="/blog/corporate-leadership-executive-freelancing" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Related Article 3 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-semibold mb-1">AI</div>
                  <div className="text-sm font-semibold mb-1">REVOLUTION</div>
                  <div className="text-sm font-semibold mb-1">STRATEGIES</div>
                  <div className="text-xs opacity-80">For Experienced</div>
                  <div className="text-xs opacity-80">Professionals</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/ai-revolution-senior-professionals" className="hover:text-[#0284C7] transition-colors">
                    Navigating the AI Revolution: Strategies for Senior Professionals
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  AI is reshaping industries, but experienced professionals can stay ahead. Learn how to leverage AI, upskill, and future-proof your career with adaptability and strategic reinvention.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | June 10, 2024
                </div>
                <a href="/blog/ai-revolution-senior-professionals" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
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
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
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
