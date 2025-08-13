import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

export default function Professionals() {
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
              <a href="/professionals" className="text-[#0284C7] font-semibold">Professionals</a>
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
              <a href="/professionals" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors font-semibold">Professionals</a>
              <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6 leading-tight">
              Experienced Skills at your Fingertips with{' '}
              <span className="bg-gradient-to-r from-[#0284C7] to-[#FACC15] bg-clip-text text-transparent">
                GigExecs
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#9CA3AF] mb-8 max-w-3xl mx-auto leading-relaxed">
              Reach out to experienced professionals to help solve your challenges and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#012E46] hover:bg-[#0284C7] text-white px-8 py-3">
                Join GigExecs
              </Button>
              <Button variant="outline" size="lg" className="border-[#012E46] text-[#012E46] hover:bg-[#F5F5F5] px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#FACC15] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FACC15] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-[#FACC15] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Three Panel Info Section */}
      <section className="py-20 bg-gradient-to-br from-[#012E46] to-[#0284C7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Panel */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Before You Join GigExecs
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FACC15] to-[#EAB308] rounded-full"></div>
              <p className="text-lg text-white/90 leading-relaxed">
                Before you join our platform as a freelancer, there are a few things you should know. We believe that these measures are essential to providing a high-quality service for our clients, and we look forward to working with experienced and dedicated freelancers who share our commitment to excellence.
              </p>
            </div>

            {/* Middle Panel */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg font-medium">
                All freelancers need to have at least 15 years of professional experience in their field before joining.
              </p>
            </div>

            {/* Right Panel */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg font-medium">
                Our support team will vet and verify each freelancer's profile before it is approved for use on the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Split Bands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Band 1 - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] rounded-3xl h-96 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <p className="text-lg opacity-80">Professional presenting at whiteboard</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#FACC15] leading-tight">
                Enjoy the lifestyle and the freedom of being a freelancer
              </h2>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                GigExecs offers flexibility, global reach and variety of interesting job opportunities. Showcase your talent, and join our premier network.
              </p>
              <Button size="lg" className="bg-[#012E46] hover:bg-[#0284C7] text-white px-8 py-3">
                Create a Bid
              </Button>
            </div>
          </div>

          {/* Band 2 - Image Right, Text Left */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#FACC15] leading-tight">
                The new way of work through Freelancing is flexible and empowering
              </h2>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                In our GigExecs platform freelancers and clients globally come together to collaborate, share ideas and solve problems; all done in an easy and cost-efficient approach.
              </p>
              <Button size="lg" className="bg-[#012E46] hover:bg-[#0284C7] text-white px-8 py-3">
                Post a Job
              </Button>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] rounded-3xl h-96 flex items-center justify-center">
                <div className="text-[#012E46] text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg opacity-80">Professional working on laptop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Band 3 - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] rounded-3xl h-96 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-lg opacity-80">Senior professional reviewing documents</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#FACC15] leading-tight">
                Unleashing Wisdom and Experience: Senior Professionals Empowering Clients through GigExecs
              </h2>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                With GigExecs we want to enable senior professionals to stay active until later in their careers, sharing their expertise and know-how with our clients.
              </p>
              <Button size="lg" className="bg-[#012E46] hover:bg-[#0284C7] text-white px-8 py-3">
                Become a GigExec
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] text-center mb-16">
            Join a Community of Successful Businesses and Professionals
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <div className="bg-[#0284C7] text-white text-xs font-semibold px-3 py-1 rounded-full absolute top-4 right-4">
                  Freelancer
                </div>
                <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  Explore how gig work allows professionals to utilize their skills, mentor, consult, and engage in meaningful projects. It offers strategies for successfully navigating this shift, such as networking, continuous learning, and more…
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  GigExecs Insider | July 15, 2024
                </div>
                <a href="#" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-[#012E46] text-center">
                  <div className="text-sm font-semibold mb-1">AI</div>
                  <div className="text-sm font-semibold mb-1">REVOLUTION</div>
                  <div className="text-sm font-semibold mb-1">STRATEGIES</div>
                  <div className="text-xs opacity-80">For Experienced</div>
                  <div className="text-xs opacity-80">Professionals</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  Navigating the AI Revolution: Strategies for Senior Professionals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  The rise of AI is transforming industries, sparking both excitement and concern—especially for senior professionals. Will AI replace jobs, or can it be leveraged as an opportunity? In this article, we explore four key strategies to stay competitive in an AI-driven job market.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | June 10, 2024
                </div>
                <a href="#" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-semibold mb-1">REMOTE,</div>
                  <div className="text-sm font-semibold mb-1">HYBRID OR</div>
                  <div className="text-sm font-semibold mb-1">IN-OFFICE...</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  Remote Work vs. Hybrid vs. In-Office: Which Work Model is Right for You?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  Is remote work the future, or is hybrid the best balance? Discover insights from 23 years of global experience on how work models impact career growth, flexibility, and the evolving job market. Read on to make the right choice for your career!
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | March 25, 2024
                </div>
                <a href="#" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors">
                  Read More →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Panel Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] text-center mb-16">
            How to Hire an Experienced Professional in a few Easy Steps:
          </h2>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#FACC15] mb-4 underline decoration-[#FACC15] decoration-2">
                  Job Marketplace
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#FACC15] mb-4 underline decoration-[#FACC15] decoration-2">
                  Create a Job
                </h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Sign up & get verified",
                  description: "Our validation process ensures platform quality."
                },
                {
                  step: "2",
                  title: "Browse Job Listings",
                  description: "Browse job listings for your perfect opportunity"
                },
                {
                  step: "3",
                  title: "Get Appointed",
                  description: "Choose the best consultant by accepting their bid."
                },
                {
                  step: "4",
                  title: "Kick-off meeting",
                  description: "Invite the freelancer to align on deliverables and expectations."
                },
                {
                  step: "5",
                  title: "Narrow Down your Search",
                  description: "Review project descriptions for required skills and experience"
                },
                {
                  step: "6",
                  title: "Submit Bid",
                  description: "Submit a bid with a concise motivation, cost, and timeline."
                },
                {
                  step: "7",
                  title: "Communicate the progress",
                  description: "Maintain regular communication with the client on job progress."
                },
                {
                  step: "8",
                  title: "Provide Feedback",
                  description: "Share your feedback to help the client enhance their future projects."
                }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-[#012E46] font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1F2937]">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GigExecs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] text-center mb-16">
            Why Choose GigExecs?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Access to a quality pool of experienced freelancers",
                description: "GigExecs runs a rigorous vetting process to ensure and protect the quality of our freelancers and clients. Our platform and processes were designed for simplicity"
              },
              {
                title: "Streamlined hiring process",
                description: "Our platform matches the best available skills with our client's requirements. The hiring process for freelancers is simple, quick and safe."
              },
              {
                title: "Age is Just a Number",
                description: "At GigExecs, we invite seniors in their 50s to 70s to share their skills with clients. Freelancing offers a financially active, less stressful lifestyle while staying engaged in interesting work."
              },
              {
                title: "Secure and easy payment processes",
                description: "GigExecs provides secure payment systems for clients to pay freelancers via credit, debit, and digital methods. Our processes are convenient and streamlined."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-[#FACC15] text-xl text-center leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#1F2937] text-center leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Hero Banner Section */}
      <section className="py-20 bg-gradient-to-r from-[#012E46] to-[#0284C7] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Unlock your Freelance Potential Today!<br />
              Join GigExecs and Thrive in the Gig Economy.
            </h2>
            <Button size="lg" className="bg-[#FACC15] hover:bg-[#EAB308] text-[#012E46] px-8 py-3 text-lg font-semibold">
              Sign up for GigExec Now
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6">
            Book a Call
          </h2>
          <p className="text-lg text-[#9CA3AF] mb-8 max-w-2xl mx-auto leading-relaxed">
            Need help but don't have time to post, browse, or monitor your project? We can assist with that too.
          </p>
          <Button size="lg" className="bg-[#012E46] hover:bg-[#0284C7] text-white px-8 py-3">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#012E46] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#FACC15] mb-4">GigExecs</div>
              <p className="text-[#9CA3AF]">
                The premier freelance hub for top professionals and innovative companies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#newsletter" className="hover:text-white transition-colors">Join Now</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
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
