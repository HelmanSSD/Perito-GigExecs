import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'

export default function Client() {
  const [email, setEmail] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

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
              <a href="/client" className="text-[#0284C7] font-semibold">Clients</a>
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
              <a href="/client" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors font-semibold">Clients</a>
              <a href="/professionals" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors">Professionals</a>
              <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[#1F2937] hover:text-[#0284C7] transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[#F5F5F5]">
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

      {/* Split CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] rounded-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl h-96 lg:h-[500px] flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-lg opacity-80">Professional working outdoors</p>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight">
                Post your job and requirements, hire an experienced freelancer in a flash!
              </h2>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                We designed an easy process to enable you to match quickly the perfect expert to your project needs. Post your job and start receiving offers from skilled professionals!
              </p>
              <Button size="lg" className="bg-[#012E46] hover:bg-[#0284C7] text-white px-8 py-3">
                Create a New Gig
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
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
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
                <a href="#" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 p-0">
              <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-semibold mb-2">GIGEXECS UPDATE</div>
                  <div className="text-xs opacity-80">Stay informed with our latest news</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  Building the Future of Flexible Work for Senior Professionals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  This article updates readers on GigExecs' progress since launching its Beta version, showcasing a growing network of senior professionals from diverse industries globally. GigExecs' mission is to provide flexible work opportunities, offering solutions to the challenges posed by longer careers and ageism.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | September 13, 2024
                </div>
                <a href="#" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
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
                  <div className="text-sm font-semibold">Future of Work</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  Building the Future of Flexible Work for Senior Professionals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#9CA3AF] leading-relaxed">
                  This article updates readers on GigExecs' progress since launching its Beta version, showcasing a growing network of senior professionals from diverse industries globally. GigExecs' mission is to provide flexible work opportunities, offering solutions to the challenges posed by longer careers and ageism.
                </CardDescription>
                <div className="text-sm text-[#6B7280]">
                  Nuno G. Rodrigues | May 9, 2024
                </div>
                <a href="#" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                  Read More →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Hire Steps Section */}
      <section className="py-20 bg-gradient-to-br from-[#012E46] to-[#0284C7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            How to Hire an Experienced Professional in a few Easy Steps:
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign up & get verified",
                description: "Our validation process ensures platform quality."
              },
              {
                step: "2",
                title: "Create a Job",
                description: "Outline the scope, required skills, timeline, and budget to find the perfect expert."
              },
              {
                step: "3",
                title: "Browse for Talent",
                description: "Browse profiles and portfolios to find the best fit for your project."
              },
              {
                step: "4",
                title: "Identify Potential Experts",
                description: "Start searching for top consultants tailored to your needs."
              },
              {
                step: "5",
                title: "Accept a Bid",
                description: "Choose the best consultant by accepting their bid."
              },
              {
                step: "6",
                title: "Kick-off meeting",
                description: "Invite the freelancer to align on deliverables and expectations."
              },
              {
                step: "7",
                title: "Track the progress",
                description: "Evaluate the deliverables and complete payment."
              },
              {
                step: "8",
                title: "Provide Feedback",
                description: "Share your review to support the consultant's growth."
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-[#012E46] font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
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
                description: "GigExecs runs a rigorous vetting process to ensure and protect the quality of our freelancers and clients. Our platform and processes were designed for simplicity and for user friendliness."
              },
              {
                title: "Streamlined hiring process",
                description: "Our platform matches the best available skills with our client's requirements. The hiring process for freelancers is simple, quick and safe."
              },
              {
                title: "Age is Just a Number",
                description: "At GigExecs we welcome senior professionals in their 50s, 60s or 70s to join our platform to share their valuable skills and know-how with our clients; freelancing is a great alternative to stay financially active, in a less stressful lifestyle, whilst still engaged in interesting work later in our careers."
              },
              {
                title: "Secure and easy payment processes",
                description: "GigExecs offers secure payment processing systems, enabling clients to make payments to freelancers using credit or debit cards as well as other mainstream digital payment methods. Our payment processes are convenient and streamlined to our users."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-[#0284C7] text-xl text-center leading-tight">
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

      {/* CTA Banner Section */}
      <section className="py-20 bg-gradient-to-r from-[#012E46] to-[#0284C7] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Need help but don't have time to post, browse, or monitor your project? We can assist with that too.
            </h2>
            <Button size="lg" className="bg-[#FACC15] hover:bg-[#EAB308] text-[#012E46] px-8 py-3 text-lg font-semibold">
              Book a Call
            </Button>
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
