import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

export default function BlogHome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
                <span className="text-[#1F2937] font-medium">All Articles</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Blog Intro Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-8 leading-tight">
            Freelancing Insights & Hiring Tips For Flexible Work Models
          </h1>
          <div className="space-y-6 text-lg text-[#6B7280] leading-relaxed">
            <p>
              Whether you're a new or seasoned freelancer or a client looking to hire someone through flexible work models such as fractional roles, project-based work or freelance consulting, our blog is your go-to resource for thriving in the fast-paced world of the Gig economy. We offer expert tips, valuable insights, and actionable advice to help you build your brand, attract clients, set competitive rates, negotiate contracts, and manage your finances.
            </p>
            <p>
              With success stories from freelancers and clients, you'll gain inspiration and practical strategies to excel. From navigating the ups and downs of freelancing to leveraging the right tools and resources, we've got everything you need to succeed in this dynamic industry.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
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
                    Remote, Hybrid, or In-Office? Choosing the Right Work Model for Your Career.
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  Is remote work the future, or is hybrid the best balance? Discover insights from 23 years of global experience on how work models impact career growth, flexibility, and the evolving job market. Read on to make the right choice for your career!
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | March 15, 2024
                </div>
                <a href="/blog/remote-hybrid-in-office" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 2 */}
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
                  This article updates readers on GigExecs' progress since launching its Beta version, showcasing a growing network of senior professionals from diverse industries globally. GigExecs' mission is to provide flexible work opportunities..
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | May 6, 2024
                </div>
                <a href="/blog/corporate-leadership-executive-freelancing" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 3 */}
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
                  The rise of AI is transforming industries, sparking both excitement and concern—especially for senior professionals. Will AI replace jobs, or can it be leveraged as an opportunity? In this article, we explore four key strategies to stay competitive in an AI-driven job market
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

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-[#012E46] text-center">
                  <div className="text-sm font-semibold mb-1">EXPERIENCE IS</div>
                  <div className="text-sm font-semibold mb-1">AGELESS</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/job-market-anomaly-older-talent" className="hover:text-[#0284C7] transition-colors">
                    The Big Anomaly of the Job Market: Older Talent
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  The article addresses the job security concerns of older professionals, emphasizing the difficulty of finding new work as they age. It proposes the gig economy as a solution, offering flexible, high-quality opportunities for experienced individuals to stay active and financially stable without the stress of traditional job hunting.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | June 10, 2024
                </div>
                <a href="/blog/job-market-anomaly-older-talent" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/finding-purpose-second-half-life" className="hover:text-[#0284C7] transition-colors">
                    Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  Explore how gig work allows professionals to utilize their skills, mentor, consult, and engage in meaningful projects. It offers strategies for successfully navigating this shift, such as networking, continuous learning, and more…
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  GigExecs Insider | July 15, 2024
                </div>
                <a href="/blog/finding-purpose-second-half-life" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-[#012E46] text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-2" />
                  </svg>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/building-future-flexible-work" className="hover:text-[#0284C7] transition-colors">
                    Building the Future of Flexible Work for Senior Professionals
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  This article updates readers on GigExecs' progress since launching its Beta version, showcasing a growing network of senior professionals from diverse industries globally. GigExecs' mission is to provide flexible work opportunities, offering solutions to the challenges posed by longer careers and ageism.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  GigExecs Insider | September 13, 2024
                </div>
                <a href="/blog/building-future-flexible-work" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-semibold mb-1">AI, ROBOTS</div>
                  <div className="text-sm font-semibold mb-1">AND THE</div>
                  <div className="text-sm font-semibold mb-1">FUTURE OF</div>
                  <div className="text-sm font-semibold mb-1">WORK</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/ai-robots-future-work-2025" className="hover:text-[#0284C7] transition-colors">
                    AI, Robots, and the Future of Work: Buckle Up, Humans!
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  AI is reshaping work by automating tasks, creating new fields, and driving the rise of flexible, project-based roles. Professionals must adapt by embracing human skills like creativity and emotional intelligence to stay relevant in an evolving landscape.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  GigExecs Insider | January 21, 2025
                </div>
                <a href="/blog/ai-robots-future-work-2025" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-[#012E46] text-center">
                  <div className="text-sm font-semibold mb-1">THE FUTURE OF SENIOR</div>
                  <div className="text-sm font-semibold mb-1">WORK IS FLEXIBLE</div>
                  <div className="text-sm font-semibold mb-1">GET READY</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/future-senior-work-flexibility-freelance" className="hover:text-[#0284C7] transition-colors">
                    The Future of Senior Work: Flexibility and Freelance Opportunities
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  The article advocates for flexible work models for senior professionals, moving beyond traditional full-time roles. It highlights freelancing and short-term contracts as beneficial for both businesses and professionals, offering expertise without long-term commitments.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | March 25, 2024
                </div>
                <a href="/blog/future-senior-work-flexibility-freelance" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-semibold mb-1">THE 20%</div>
                  <div className="text-sm font-semibold mb-1">CHALLENGE FOR</div>
                  <div className="text-sm font-semibold mb-1">2025</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/20-percent-challenge-flexible-work-2025" className="hover:text-[#0284C7] transition-colors">
                    The 20% Challenge for 2025: Flexible Work for Senior Professionals
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  The article advocates for businesses to convert 20% of senior full-time roles to flexible positions by 2025. This shift benefits companies with cost savings, access to specialized talent, and agility, while providing senior professionals with opportunities for meaningful work and better work-life balance.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | March 25, 2024
                </div>
                <a href="/blog/20-percent-challenge-flexible-work-2025" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Row 4 - Single Card (Left Aligned) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Single Card - Takes up first column */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0 md:col-span-1">
              <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-[#012E46] text-center">
                  <div className="text-sm font-semibold mb-1">MASTER MENTAL CLARITY –</div>
                  <div className="text-sm font-semibold mb-1">STRESS MANAGEMENT STRATEGIES</div>
                  <div className="text-sm font-semibold mb-1">FOR HIGH-PERFORMERS</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  <a href="/blog/master-mental-clarity-stress-management-high-performers" className="hover:text-[#0284C7] transition-colors">
                    Master Mental Clarity: Management Strategies for High Performers Who Give It Their All
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  High performers can prevent burnout by prioritizing self-care, practicing gratitude, learning from stress, expressing emotions, and building a supportive community. GigExecs helps professionals thrive while maintaining balance.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | March 25, 2024
                </div>
                <a href="/blog/master-mental-clarity-stress-management-high-performers" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>
            {/* Empty space for remaining columns */}
            <div className="hidden md:block md:col-span-2"></div>
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
