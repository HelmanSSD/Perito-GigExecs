import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

export default function Blog8() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // SEO Metadata
  useEffect(() => {
    document.title = "Embracing Flexible Work for Senior Professionals: The Future of Careers Beyond 40 | GigExecs"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Senior professionals are increasingly turning to flexible work models like freelancing and consulting. Learn how businesses and experienced talent benefit from this shift in the workforce.")
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = "Senior professionals are increasingly turning to flexible work models like freelancing and consulting. Learn how businesses and experienced talent benefit from this shift in the workforce."
      document.head.appendChild(newMetaDescription)
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "Flexible work for senior professionals, Freelancing after 50, Senior talent gig economy, Senior consulting opportunities, Project-based work for experienced professionals, Benefits of flexible work models, GigExecs senior talent platform, Navigating ageism in the workforce, Senior professionals and the future of work, Short-term contracts for experienced professionals")
    } else {
      const newMetaKeywords = document.createElement('meta')
      newMetaKeywords.name = 'keywords'
      newMetaKeywords.content = "Flexible work for senior professionals, Freelancing after 50, Senior talent gig economy, Senior consulting opportunities, Project-based work for experienced professionals, Benefits of flexible work models, GigExecs senior talent platform, Navigating ageism in the workforce, Senior professionals and the future of work, Short-term contracts for experienced professionals"
      document.head.appendChild(newMetaKeywords)
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', "https://www.gigexecs.com/blog/future-senior-work-flexibility-freelance")
    } else {
      const newCanonical = document.createElement('link')
      newCanonical.rel = 'canonical'
      newCanonical.href = "https://www.gigexecs.com/blog/future-senior-work-flexibility-freelance"
      document.head.appendChild(newCanonical)
    }
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
                <span className="text-[#1F2937] font-medium">The Future of Senior Work: Flexibility and Freelance Opportunities</span>
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
            <div className="text-lg font-semibold text-[#1F2937] mb-2">Nuno G. Rodrigues</div>
            <div className="text-[#6B7280]">June 10, 2024</div>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-12 leading-tight">
            The Future of Senior Work: Flexibility and Freelance Opportunities
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                The future of work is evolving, and it's time to rethink how we approach senior talent.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                The traditional 9-to-5 work structure is no longer the only way forward.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                As more professionals hit their 40s, 50s, and beyond, a flexible work model is not just desirable—it's essential.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                The Vision: Flexible Work for Senior Professionals
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                Here's the vision: Full-time employment will remain the standard for younger workers until their mid-to-late 30s. After that? It's time to transition to flexible work models—freelancing, short-term contracts, independent consulting, and project-based roles. This approach offers senior professionals the opportunity to work on their own terms, creating a work-life balance that truly fits.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                The best part? By offering senior-level expertise in flexible formats, companies can access high-caliber talent without long-term commitments. Senior professionals can continue their careers with meaningful work, and businesses can gain the expertise they need without breaking the bank. It's a true win-win.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                Why Flexible Work Models Are the Future for Senior Professionals
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    1. More Freelance Opportunities, Less Hassle
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Flexible work arrangements, such as freelancing and consulting, enable businesses to hire senior professionals without the overhead costs of full-time employees.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      This opens the door to more opportunities for experienced talent and eliminates the excuse of "we can't afford that expertise."
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    2. Smarter, Leaner Businesses
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Rather than committing to long-term employees, companies can access senior talent when they need it.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      This "just-in-time" approach to hiring ensures that businesses get the exact expertise they require without the added costs of full-time salaries.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    3. Age Is Just a Number
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      This model tackles ageism head-on. Senior professionals have years of experience, and with the flexibility to work on their own terms, they can continue to contribute to businesses well into their later years.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      It's not about age—it's about expertise.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    4. Preparing for the Future
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Flexible work arrangements help businesses and professionals adapt to changes in technology, automation, and economic shifts.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Whether dealing with AI advancements or market fluctuations, the ability to pivot quickly is key. Senior professionals with flexible work options can continue contributing effectively in this ever-changing landscape.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                Challenges to Overcome
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    1. Income Instability
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Freelancing can sometimes mean an unpredictable income. To make this model sustainable, companies need to create well-paid flexible roles.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Additionally, performance bonuses can help provide financial stability for freelancers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    2. Skill Gaps
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Some senior professionals may struggle to keep their skills sharp without structured programs. While self-learning is a good option, not everyone is adept at navigating online tutorials or staying on top of the latest industry trends.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    3. Navigating Tax Laws and Regulations
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Labor laws and tax regulations need to evolve to keep up with the growing gig economy. Misclassifying workers as independent contractors can lead to legal issues and create a lack of trust between businesses and freelancers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    4. Uncertainty with Short-Term Contracts
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Short-term contracts can lead to uncertainty for some senior professionals.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      It will be important to create frameworks that provide stability within flexible work arrangements, ensuring that professionals feel secure in their positions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    5. Resistance to Change
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Both businesses and professionals may be hesitant to adopt flexible work models. Overcoming this resistance will require clear communication of the benefits and how they can improve productivity and work-life balance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                How to Make Flexible Work for Senior Professionals a Reality
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                This shift away from traditional full-time employment isn't about eliminating jobs—it's about offering more options. Here's how we can make flexible work for senior professionals a widespread reality:
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    1. Build the Bridge
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Platforms like GigExecs are already helping businesses connect with senior-level professionals on flexible terms. These platforms enable companies to find highly experienced talent without the long-term commitment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    2. Mix and Match Work Models
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Encourage hybrid models where professionals can combine part-time gigs with passion projects.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      This balance of stability and flexibility allows senior professionals to remain engaged while maintaining a sense of freedom.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    3. Spread the Word
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Educate companies on the benefits of hiring senior freelancers.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Highlight the advantages of accessing top-tier talent on a short-term basis, allowing businesses to fill gaps without the need for full-time employees.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    4. Policy Changes for Freelancers
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      Push for policy reforms that make freelancing as secure as full-time employment.
                    </li>
                    <li className="text-lg text-[#6B7280] leading-relaxed">
                      This includes portable benefits, fair tax treatment for freelancers, and protections for independent contractors.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-6">
                Conclusion: Flexibility Is Key to the Future of Senior Work
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                The future of senior talent lies in flexibility. Moving away from full-time employment as the default model allows both businesses and professionals to thrive in a rapidly changing world. Businesses will become more agile, senior professionals will feel empowered to continue their careers, and the workforce will be ready to tackle the challenges ahead.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6 font-semibold">
                Are you ready to embrace the future of flexible work for senior professionals?
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
                <li><a href="/" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
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
