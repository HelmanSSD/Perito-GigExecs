import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'

export default function HelpCenter() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('getting-started')
  const [expandedAccordions, setExpandedAccordions] = useState(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname === '/help/consultant') {
      setActiveSection('roles')
    } else {
      setActiveSection('getting-started')
    }
  }, [location.pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleAccordion = (accordionId) => {
    setExpandedAccordions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(accordionId)) {
        newSet.delete(accordionId)
      } else {
        newSet.add(accordionId)
      }
      return newSet
    })
  }

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query)
    
    if (!query.trim()) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    
    // Search through all help content
    const results = []
    const searchTerm = query.toLowerCase()
    
    // Search in Getting Started content
    if (searchTerm.includes('gigexecs') || searchTerm.includes('gig') || searchTerm.includes('exec')) {
      results.push({
        id: 'what-is-gigexecs',
        title: 'What is Gigexecs?',
        content: 'GigExecs is a job marketplace exclusively designed for highly experienced freelancers with at least 10 years of expertise...',
        category: 'Getting Started',
        section: 'getting-started'
      })
    }
    
    if (searchTerm.includes('gig') || searchTerm.includes('job') || searchTerm.includes('opportunity')) {
      results.push({
        id: 'understanding-gigs',
        title: 'Understanding Gigs',
        content: 'The platform offers a wide range of job opportunities spanning industries such as consultancy, project management...',
        category: 'Getting Started',
        section: 'getting-started'
      })
    }
    
    if (searchTerm.includes('client') || searchTerm.includes('business') || searchTerm.includes('company')) {
      results.push({
        id: 'who-are-clients',
        title: 'Who are Clients?',
        content: 'Clients on GigExec are individuals, businesses, or organizations seeking highly experienced freelancers...',
        category: 'Getting Started',
        section: 'getting-started'
      })
    }
    
    if (searchTerm.includes('professional') || searchTerm.includes('freelancer') || searchTerm.includes('consultant')) {
      results.push({
        id: 'who-are-professionals',
        title: 'Who are Experienced Professionals?',
        content: 'A freelancer is a self-employed individual who provides services to clients on a project or contract basis...',
        category: 'Getting Started',
        section: 'getting-started'
      })
    }
    
    // Search in Roles content
    if (searchTerm.includes('consultant') || searchTerm.includes('role') || searchTerm.includes('responsibility')) {
      results.push({
        id: 'consultant-role',
        title: 'What is a Consultant?',
        content: 'A consultant is a professional who provides expert advice in a particular area of specialization...',
        category: 'Roles',
        section: 'roles'
      })
    }
    
    if (searchTerm.includes('client') || searchTerm.includes('hiring') || searchTerm.includes('project')) {
      results.push({
        id: 'client-role',
        title: 'Client Role in Hiring',
        content: 'Clients play a crucial role in the hiring process on GigExecs...',
        category: 'Roles',
        section: 'roles'
      })
    }
    
    // Search in Billing content
    if (searchTerm.includes('billing') || searchTerm.includes('payment') || searchTerm.includes('invoice')) {
      results.push({
        id: 'billing-process',
        title: 'Billing Process & Invoicing',
        content: 'The billing process on GigExecs is designed to be transparent and efficient...',
        category: 'Billing',
        section: 'billing'
      })
    }
    
    if (searchTerm.includes('payment') || searchTerm.includes('method') || searchTerm.includes('credit')) {
      results.push({
        id: 'payment-methods',
        title: 'Payment Methods',
        content: 'GigExecs supports various payment methods to ensure convenience for both clients and professionals...',
        category: 'Billing',
        section: 'billing'
      })
    }
    
    if (searchTerm.includes('subscription') || searchTerm.includes('plan') || searchTerm.includes('monthly')) {
      results.push({
        id: 'subscription-management',
        title: 'Subscription Management',
        content: 'Subscription management allows clients to maintain ongoing relationships with professionals...',
        category: 'Billing',
        section: 'billing'
      })
    }
    
    if (searchTerm.includes('refund') || searchTerm.includes('credit') || searchTerm.includes('return')) {
      results.push({
        id: 'refunds-credits',
        title: 'Refunds and Credits',
        content: 'GigExecs has a clear policy for refunds and credits to ensure fair treatment...',
        category: 'Billing',
        section: 'billing'
      })
    }
    
    // Search in other sections
    if (searchTerm.includes('milestone') || searchTerm.includes('progress') || searchTerm.includes('deliverable')) {
      results.push({
        id: 'milestones',
        title: 'Milestones',
        content: 'Milestones are key checkpoints in project delivery...',
        category: 'Project Management',
        section: 'milestones'
      })
    }
    
    if (searchTerm.includes('contract') || searchTerm.includes('agreement') || searchTerm.includes('terms')) {
      results.push({
        id: 'contracts',
        title: 'Contracts',
        content: 'Contracts on GigExecs outline the terms and conditions of work...',
        category: 'Legal',
        section: 'contracts'
      })
    }
    
    if (searchTerm.includes('dispute') || searchTerm.includes('conflict') || searchTerm.includes('issue')) {
      results.push({
        id: 'disputes',
        title: 'Disputes',
        content: 'Dispute resolution is handled through a structured process...',
        category: 'Support',
        section: 'disputes'
      })
    }
    
    // Remove duplicates based on ID
    const uniqueResults = results.filter((result, index, self) => 
      index === self.findIndex(r => r.id === result.id)
    )
    
    setSearchResults(uniqueResults)
    setIsSearching(false)
  }

  const handleSearchResultClick = (result) => {
    setActiveSection(result.section)
    toggleAccordion(result.id)
    setSearchQuery('')
    setSearchResults([])
  }

  // SEO Metadata
  useEffect(() => {
    document.title = "Help & Support | GigExecs"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Get help and support for GigExecs. Find answers to frequently asked questions, learn about roles, billing, milestones, contracts, gigs, and dispute resolution.")
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = "Get help and support for GigExecs. Find answers to frequently asked questions, learn about roles, billing, milestones, contracts, gigs, and dispute resolution."
      document.head.appendChild(newMetaDescription)
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', "https://www.gigexecs.com/help")
    } else {
      const newCanonical = document.createElement('link')
      newCanonical.rel = 'canonical'
      newCanonical.href = "https://www.gigexecs.com/help"
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Help Center Menu */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold text-[#1F2937] mb-6">Help Center</h2>
                               <nav className="space-y-2">
                   <a 
                     href="#getting-started" 
                     onClick={() => setActiveSection('getting-started')}
                     className={`block px-4 py-2 rounded-lg transition-colors ${
                       location.pathname === '/help' && activeSection === 'getting-started'
                         ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                         : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                     }`}
                   >
                     Getting started
                   </a>
                   
                   {/* Roles Accordion */}
                   <div className="space-y-1">
                     <button 
                       onClick={() => setActiveSection(activeSection === 'roles' ? null : 'roles')}
                       className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                         activeSection === 'roles' 
                           ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                           : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                       }`}
                     >
                       <span>Roles</span>
                       <svg 
                         className={`w-4 h-4 transition-transform duration-200 ${
                           activeSection === 'roles' ? 'rotate-180' : ''
                         }`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </button>
                     {activeSection === 'roles' && (
                       <div className="ml-4 space-y-1">
                         <a 
                           href="/help/consultant" 
                           className={`block px-4 py-2 rounded-lg transition-colors flex items-center space-x-3 ${
                             location.pathname === '/help/consultant'
                               ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                               : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                           }`}
                         >
                           <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="#013957"/>
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="black" fill-opacity="0.2"/>
                             <path d="M7.30234 13.3594C5.77734 13.3594 4.52734 14.601 4.52734 16.1344C4.52734 17.6677 5.76901 18.9094 7.30234 18.9094C8.82734 18.9094 10.0773 17.6677 10.0773 16.1344C10.0773 14.601 8.82734 13.3594 7.30234 13.3594Z" fill="#4885AA"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="#FFC20C"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="black" fill-opacity="0.2"/>
                           </svg>
                           <span>Consultant</span>
                         </a>
                         <a 
                           href="/help/client" 
                           className={`block px-4 py-2 rounded-lg transition-colors flex items-center space-x-3 ${
                             location.pathname === '/help/client'
                               ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                               : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                           }`}
                         >
                           <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="#013957"/>
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="black" fill-opacity="0.2"/>
                             <path d="M7.30234 13.3594C5.77734 13.3594 4.52734 14.601 4.52734 16.1344C4.52734 17.6677 5.76901 18.9094 7.30234 18.9094C8.82734 18.9094 10.0773 17.6677 10.0773 16.1344C10.0773 14.601 8.82734 13.3594 7.30234 13.3594Z" fill="#4885AA"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="#FFC20C"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="black" fill-opacity="0.2"/>
                           </svg>
                           <span>Client</span>
                         </a>
                       </div>
                     )}
                   </div>
                   
                   {/* Billing Accordion */}
                   <div className="space-y-1">
                     <button 
                       onClick={() => setActiveSection(activeSection === 'billing' ? null : 'billing')}
                       className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                         activeSection === 'billing' 
                           ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                           : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                       }`}
                     >
                       <span>Billing</span>
                       <svg 
                         className={`w-4 h-4 transition-transform duration-200 ${
                           activeSection === 'billing' ? 'rotate-180' : ''
                         }`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </button>
                     {activeSection === 'billing' && (
                       <div className="ml-4 space-y-1">
                         <a 
                           href="#billing-process" 
                           onClick={() => setActiveSection('billing-process')}
                           className={`block px-4 py-2 rounded-lg transition-colors flex items-center space-x-3 ${
                             activeSection === 'billing-process'
                               ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                               : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                           }`}
                         >
                           <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="#013957"/>
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="black" fill-opacity="0.2"/>
                             <path d="M7.30234 13.3594C5.77734 13.3594 4.52734 14.601 4.52734 16.1344C4.52734 17.6677 5.76901 18.9094 7.30234 18.9094C8.82734 18.9094 10.0773 17.6677 10.0773 16.1344C10.0773 14.601 8.82734 13.3594 7.30234 13.3594Z" fill="#4885AA"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="#FFC20C"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="black" fill-opacity="0.2"/>
                           </svg>
                           <span>Billing Process & Invoicing</span>
                         </a>
                         <a 
                           href="#payment-methods" 
                           onClick={() => setActiveSection('payment-methods')}
                           className={`block px-4 py-2 rounded-lg transition-colors flex items-center space-x-3 ${
                             activeSection === 'payment-methods'
                               ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                               : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                           }`}
                         >
                           <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="#013957"/>
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="black" fill-opacity="0.2"/>
                             <path d="M7.30234 13.3594C5.77734 13.3594 4.52734 14.601 4.52734 16.1344C4.52734 17.6677 5.76901 18.9094 7.30234 18.9094C8.82734 18.9094 10.0773 17.6677 10.0773 16.1344C10.0773 14.601 8.82734 13.3594 7.30234 13.3594Z" fill="#4885AA"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="#FFC20C"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="black" fill-opacity="0.2"/>
                           </svg>
                           <span>Payment Methods</span>
                         </a>
                         <a 
                           href="#subscription-management" 
                           onClick={() => setActiveSection('subscription-management')}
                           className={`block px-4 py-2 rounded-lg transition-colors flex items-center space-x-3 ${
                             activeSection === 'subscription-management'
                               ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                               : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                           }`}
                         >
                           <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="#013957"/>
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="black" fill-opacity="0.2"/>
                             <path d="M7.30234 13.3594C5.77734 13.3594 4.52734 14.601 4.52734 16.1344C4.52734 17.6677 5.76901 18.9094 7.30234 18.9094C8.82734 18.9094 10.0773 17.6677 10.0773 16.1344C10.0773 14.601 8.82734 13.3594 7.30234 13.3594Z" fill="#4885AA"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="#FFC20C"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="black" fill-opacity="0.2"/>
                           </svg>
                           <span>Subscription Management</span>
                         </a>
                         <a 
                           href="#refunds-credits" 
                           onClick={() => setActiveSection('refunds-credits')}
                           className={`block px-4 py-2 rounded-lg transition-colors flex items-center space-x-3 ${
                             activeSection === 'refunds-credits'
                               ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                               : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                           }`}
                         >
                           <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="#013957"/>
                             <path d="M14.9911 3.95703C12.5161 3.95703 10.5078 5.96536 10.5078 8.44036C10.5078 10.9154 12.5161 12.9237 14.9911 12.9237C17.4661 12.9237 19.4745 10.9154 19.4745 8.44036C19.4745 5.96536 17.4661 3.95703 14.9911 3.95703Z" fill="black" fill-opacity="0.2"/>
                             <path d="M7.30234 13.3594C5.77734 13.3594 4.52734 14.601 4.52734 16.1344C4.52734 17.6677 5.76901 18.9094 7.30234 18.9094C8.82734 18.9094 10.0773 17.6677 10.0773 16.1344C10.0773 14.601 8.82734 13.3594 7.30234 13.3594Z" fill="#4885AA"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="#FFC20C"/>
                             <path d="M15.8495 16.3477C14.5578 16.3477 13.5078 17.3977 13.5078 18.6893C13.5078 19.981 14.5578 21.031 15.8495 21.031C17.1411 21.031 18.1911 19.981 18.1911 18.6893C18.1911 17.3977 17.1411 16.3477 15.8495 16.3477Z" fill="black" fill-opacity="0.2"/>
                           </svg>
                           <span>Refunds and Credits</span>
                         </a>
                       </div>
                     )}
                   </div>
                   
                   <a 
                     href="#milestones" 
                     onClick={() => setActiveSection('milestones')}
                     className={`block px-4 py-2 rounded-lg transition-colors ${
                       activeSection === 'milestones' 
                         ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                         : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                     }`}
                   >
                     Milestones
                   </a>
                   <a 
                     href="#contracts" 
                     onClick={() => setActiveSection('contracts')}
                     className={`block px-4 py-2 rounded-lg transition-colors ${
                       activeSection === 'contracts' 
                         ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                         : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                       }`}
                   >
                     Contracts
                   </a>
                   <a 
                     href="#gigs" 
                     onClick={() => setActiveSection('gigs')}
                     className={`block px-4 py-2 rounded-lg transition-colors ${
                       activeSection === 'gigs' 
                         ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                         : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                     }`}
                   >
                     Gigs
                   </a>
                   <a 
                     href="#disputes" 
                     onClick={() => setActiveSection('disputes')}
                     className={`block px-4 py-2 rounded-lg transition-colors ${
                       activeSection === 'disputes' 
                         ? 'bg-[#012E46] text-white hover:bg-[#013957]' 
                         : 'text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]'
                     }`}
                   >
                     Disputes
                   </a>
                 </nav>
            </div>
          </div>

                      {/* Right Content Area */}
            <div className="lg:col-span-3">
              {/* Page Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-8">Help & Support</h1>
              
              {/* Search Bar */}
              <div className="mb-8">
                                  <div className="relative">
                    <Input 
                      type="text" 
                      placeholder="Search our collection of frequently asked questions and other helpful resources..." 
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full p-4 text-lg pr-20 border-2 border-[#E5E7EB] focus:border-[#012E46] focus:ring-2 focus:ring-[#012E46] focus:ring-opacity-20"
                    />
                    
                    {/* Search Icon */}
                    <svg
                      className="absolute right-12 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    
                    {/* Clear Button */}
                    {searchQuery.trim() && (
                      <button
                        onClick={() => {
                          setSearchQuery('')
                          setSearchResults([])
                          setIsSearching(false)
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280] hover:text-[#1F2937] transition-colors"
                        aria-label="Clear search"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                
                {/* Search Results */}
                {searchQuery.trim() && (
                  <div className="mt-4 bg-white border-2 border-[#E5E7EB] rounded-lg shadow-lg max-h-96 overflow-y-auto">
                    {isSearching ? (
                      <div className="p-4 text-center text-[#6B7280]">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#012E46] mx-auto mb-2"></div>
                        Searching...
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div>
                        {searchResults.map((result, index) => (
                          <button
                            key={result.id}
                            onClick={() => handleSearchResultClick(result)}
                            className="w-full p-4 text-left hover:bg-[#F5F5F5] transition-colors border-b border-[#E5E7EB] last:border-b-0"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-1">
                                <h4 className="font-semibold text-[#1F2937] mb-1">{result.title}</h4>
                                <p className="text-sm text-[#6B7280] mb-2">{result.content}</p>
                                <span className="inline-block px-2 py-1 text-xs font-medium text-[#012E46] bg-[#E5E7EB] rounded">
                                  {result.category}
                                </span>
                              </div>
                              <svg
                                className="w-5 h-5 text-[#6B7280] flex-shrink-0 mt-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center text-[#6B7280]">
                        <svg
                          className="w-12 h-12 text-[#9CA3AF] mx-auto mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                          />
                        </svg>
                        <h3 className="text-lg font-medium text-[#1F2937] mb-2">No results found</h3>
                        <p className="text-sm">Try searching with different keywords or browse the categories below</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Dynamic Content Based on Active Section */}
              {activeSection === 'getting-started' && (
                <div id="getting-started" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Getting Started</h2>
                  
                  {/* FAQ Accordions */}
                  <div className="space-y-4">
                    {/* FAQ Accordion 1 */}
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleAccordion('what-is-gigexecs')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">What is Gigexecs?</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            expandedAccordions.has('what-is-gigexecs') ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedAccordions.has('what-is-gigexecs') && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            GigExecs is a job marketplace exclusively designed for highly experienced freelancers with at least 10 years of expertise. It provides access to a curated pool of seasoned professionals, ensuring clients receive top-tier quality and expertise for their projects
                          </p>
                        </div>
                      )}
                    </div>

                    {/* FAQ Accordion 2 */}
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleAccordion('understanding-gigs')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Understanding Gigs</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            expandedAccordions.has('understanding-gigs') ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedAccordions.has('understanding-gigs') && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            The platform offers a wide range of job opportunities spanning industries such as consultancy, project management, technical expertise, creative services, and more. Clients can find professionals capable of handling diverse projects, from complex technical tasks to strategic consultancy assignments. Each job listing on GigExecs is tailored to attract seasoned professionals, ensuring clients access top-tier talent for their projects.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* FAQ Accordion 3 */}
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleAccordion('who-are-clients')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Who are Clients?</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            expandedAccordions.has('who-are-clients') ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedAccordions.has('who-are-clients') && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            Clients on GigExec are individuals, businesses, or organizations seeking highly experienced freelancers with at least 10 years of expertise to fulfill their project needs. These clients range from small businesses to large corporations and individuals requiring specialized services. They rely on GigExec to connect them with top-tier talent across various fields, ensuring effective project outcomes.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* FAQ Accordion 4 */}
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleAccordion('who-are-professionals')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Who are Experienced Professionals?</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            expandedAccordions.has('who-are-professionals') ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedAccordions.has('who-are-professionals') && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <div className="space-y-4">
                            <p className="text-[#6B7280] leading-relaxed">
                              A freelancer is a self-employed individual who provides services to clients on a project or contract basis. Freelancers work in a wide range of industries, including writing, design, programming, marketing, consulting, and more. They typically work remotely and can set their own schedules and rates.
                            </p>
                            <p className="text-[#6B7280] leading-relaxed">
                              As independent contractors, freelancers are responsible for finding their own clients, negotiating contracts, and managing their own finances. They may work for multiple clients simultaneously or specialize in a particular niche. Freelancers are often highly skilled and experienced in their field, and they are able to offer flexible and customized services to meet their clients' needs.
                            </p>
                            <p className="text-[#6B7280] leading-relaxed">
                              Freelancing offers many benefits, including the freedom to choose their projects, set their own rates, and the flexibility to work from anywhere. However, it requires a high degree of self-discipline, organization, and business savvy to succeed. Freelancers must be able to manage their time effectively, maintain a steady flow of work, and provide high-quality services that meet their clients' expectations.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Roles Section */}
              {activeSection === 'roles' && (
                <div id="roles" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Roles</h2>
                  <p className="text-[#6B7280] mb-6">Understanding the different roles and responsibilities on GigExecs platform.</p>
                </div>
              )}

              {/* Consultant Role */}
              {activeSection === 'consultant' && (
                <div id="consultant" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Consultant Role</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'consultant-what' ? 'consultant' : 'consultant-what')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">What is a Consultant?</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'consultant-what' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'consultant-what' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            Consultants on GigExecs are experienced professionals who provide expert advice and services to clients. They typically have 15+ years of experience in their field and offer strategic guidance, problem-solving, and specialized knowledge.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'consultant-responsibilities' ? 'consultant' : 'consultant-responsibilities')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Consultant Responsibilities</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'consultant-responsibilities' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'consultant-responsibilities' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <ul className="text-[#6B7280] space-y-2">
                            <li>• Provide expert advice and strategic guidance</li>
                            <li>• Analyze client needs and develop solutions</li>
                            <li>• Deliver high-quality consulting services</li>
                            <li>• Maintain professional standards and ethics</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Client Role */}
              {activeSection === 'client' && (
                <div id="client" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Client Role</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'client-what' ? 'client' : 'client-what')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">What is a Client?</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'client-what' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'client-what' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            Clients are individuals, businesses, or organizations seeking professional services through GigExecs. They post projects, hire consultants, and manage the delivery of services.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'client-responsibilities' ? 'client' : 'client-responsibilities')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Client Responsibilities</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'client-responsibilities' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'client-responsibilities' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <ul className="text-[#6B7280] space-y-2">
                            <li>• Clearly define project requirements</li>
                            <li>• Provide necessary information and resources</li>
                            <li>• Review and approve deliverables</li>
                            <li>• Provide timely feedback and payment</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Section */}
              {activeSection === 'billing' && (
                <div id="billing" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Billing</h2>
                  <p className="text-[#6B7280] mb-6">Understanding the billing process and payment methods on GigExecs.</p>
                </div>
              )}

              {/* Billing Process */}
              {activeSection === 'billing-process' && (
                <div id="billing-process" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Billing Process & Invoicing</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'billing-how' ? 'billing-process' : 'billing-how')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">How Billing Works</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'billing-how' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'billing-how' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            GigExecs uses a milestone-based billing system where payments are released upon completion of agreed-upon project phases. This ensures both parties are protected and projects progress smoothly.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Methods */}
              {activeSection === 'payment-methods' && (
                <div id="payment-methods" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Payment Methods</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'payment-accepted' ? 'payment-methods' : 'payment-accepted')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Accepted Payment Methods</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'payment-accepted' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'payment-accepted' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <ul className="text-[#6B7280] space-y-2">
                            <li>• Credit and debit cards</li>
                            <li>• Bank transfers</li>
                            <li>• Digital wallets</li>
                            <li>• Escrow protection available</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Subscription Management */}
              {activeSection === 'subscription-management' && (
                <div id="subscription-management" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Subscription Management</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'subscription-managing' ? 'subscription-management' : 'subscription-managing')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Managing Your Subscription</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'subscription-managing' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'subscription-managing' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            Clients can manage their subscription plans, upgrade or downgrade services, and view billing history through their account dashboard. All changes take effect at the next billing cycle.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Refunds and Credits */}
              {activeSection === 'refunds-credits' && (
                <div id="refunds-credits" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Refunds and Credits</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'refunds-policy' ? 'refunds-credits' : 'refunds-policy')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Refund Policy</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'refunds-policy' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'refunds-policy' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            GigExecs offers a fair refund policy for services that don't meet agreed-upon standards. Refunds are processed within 5-7 business days and can be issued as credits or returned to the original payment method.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Milestones Section */}
              {activeSection === 'milestones' && (
                <div id="milestones" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Milestones</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'milestones-understanding' ? 'milestones' : 'milestones-understanding')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Understanding Milestones</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'milestones-understanding' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'milestones-understanding' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            Milestones are predefined project phases that help track progress and release payments. They provide structure to projects and ensure both parties understand expectations and deliverables.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Contracts Section */}
              {activeSection === 'contracts' && (
                <div id="contracts" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Contracts</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'contracts-management' ? 'contracts' : 'contracts-management')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Contract Management</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'contracts-management' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'contracts-management' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            All projects on GigExecs are governed by clear contracts that outline scope, deliverables, timelines, and payment terms. Contracts protect both parties and ensure project success.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Gigs Section */}
              {activeSection === 'gigs' && (
                <div id="gigs" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Gigs</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'gigs-what' ? 'gigs' : 'gigs-what')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">What are Gigs?</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'gigs-what' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'gigs-what' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            Gigs are individual projects or services offered by professionals on GigExecs. They can range from one-time consultations to ongoing project work, allowing flexibility for both clients and professionals.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Disputes Section */}
              {activeSection === 'disputes' && (
                <div id="disputes" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Disputes</h2>
                  <div className="space-y-4">
                    <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveSection(activeSection === 'disputes-resolving' ? 'disputes' : 'disputes-resolving')}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                      >
                        <h3 className="text-xl font-semibold text-[#1F2937]">Resolving Disputes</h3>
                        <svg 
                          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                            activeSection === 'disputes-resolving' ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSection === 'disputes-resolving' && (
                        <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                          <p className="text-[#6B7280] leading-relaxed">
                            GigExecs provides a fair dispute resolution process to handle conflicts between clients and professionals. Our support team works to find mutually beneficial solutions while protecting both parties.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Default Content - Show when no section is selected */}
              {!activeSection && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Welcome to Help & Support</h2>
                  <p className="text-[#6B7280] mb-6">
                    Select a topic from the left sidebar to get started. We're here to help you navigate GigExecs and make the most of our platform.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-[#E5E7EB] hover:border-[#012E46] transition-colors">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl text-[#1F2937]">Getting Started</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#6B7280] leading-relaxed">
                          New to GigExecs? Start here to learn the basics of our platform and how to get started.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-[#E5E7EB] hover:border-[#012E46] transition-colors">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl text-[#1F2937]">Need Help?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#6B7280] leading-relaxed">
                          Can't find what you're looking for? Use the search bar above or contact our support team.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

            {/* Related Articles Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1 - AI Revolution */}
                <Card className="border-2 border-[#E5E7EB] hover:border-[#012E46] transition-colors p-0">
                  <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-[#1F2937]">
                      <a href="/blog/ai-revolution-senior-professionals" className="hover:text-[#0284C7] transition-colors">
                        How Senior Professionals Can Thrive in the AI Era
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed mb-4">
                      The rise of AI is transforming industries, sparking both excitement and concern—especially for senior professionals. Will AI replace jobs, or can it be leveraged as an opportunity? In this article, we explore four key strategies to stay competitive in an AI-driven job market
                    </p>
                    <div className="text-sm text-[#6B7280] mb-4">
                      Nuno G. Rodrigues | June 10, 2024
                    </div>
                    <a href="/blog/ai-revolution-senior-professionals" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                      Read More →
                    </a>
                  </CardContent>
                </Card>

                {/* Card 2 - Job Market Anomaly */}
                <Card className="border-2 border-[#E5E7EB] hover:border-[#012E46] transition-colors p-0">
                  <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] h-48 rounded-t-lg flex items-center justify-center">
                    <div className="text-[#012E46] text-center">
                      <div className="text-sm font-semibold mb-1">EXPERIENCE IS</div>
                      <div className="text-sm font-semibold mb-1">AGELESS</div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-[#1F2937]">
                      <a href="/blog/job-market-anomaly-older-talent" className="hover:text-[#0284C7] transition-colors">
                        The Big Anomaly of the Job Market: Older Talent
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed mb-4">
                      The article addresses the job security concerns of older professionals, emphasizing the difficulty of finding new work as they age. It proposes the gig economy as a solution, offering flexible, high-quality opportunities for experienced individuals to stay active and financially stable without the stress of traditional job hunting.
                    </p>
                    <div className="text-sm text-[#6B7280] mb-4">
                      Nuno G. Rodrigues | June 10, 2024
                    </div>
                    <a href="/blog/job-market-anomaly-older-talent" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                      Read More →
                    </a>
                  </CardContent>
                </Card>

                {/* Card 3 - Finding Purpose */}
                <Card className="border-2 border-[#E5E7EB] hover:border-[#012E46] transition-colors p-0">
                  <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-[#1F2937]">
                      <a href="/blog/finding-purpose-second-half-life" className="hover:text-[#0284C7] transition-colors">
                        Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed mb-4">
                      Explore how gig work allows professionals to utilize their skills, mentor, consult, and engage in meaningful projects. It offers strategies for successfully navigating this shift, such as networking, continuous learning, and more…
                    </p>
                    <div className="text-sm text-[#6B7280] mb-4">
                      GigExecs Insider | July 15, 2024
                    </div>
                    <a href="/blog/finding-purpose-second-half-life" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                      Read More →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="text-[#FACC15] transition-colors">Help</a></li>
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
