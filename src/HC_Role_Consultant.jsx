import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function HCRoleConsultant() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [expandedAccordions, setExpandedAccordions] = useState(new Set());

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccordion = (accordionId) => {
    setExpandedAccordions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(accordionId)) {
        newSet.delete(accordionId);
      } else {
        newSet.add(accordionId);
      }
      return newSet;
    });
  };

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Search through consultant content
    const results = [];
    const searchTerm = query.toLowerCase();
    
    if (searchTerm.includes('profile') || searchTerm.includes('skill') || searchTerm.includes('experience')) {
      results.push({
        id: 'showcase-skills',
        title: 'How do I showcase my skills and experience effectively on my profile?',
        content: 'Make sure to provide detailed information about your past projects, clients, achievements, and any certifications or qualifications you hold...',
        category: 'Profile Management'
      });
    }
    
    if (searchTerm.includes('rate') || searchTerm.includes('price') || searchTerm.includes('fee')) {
      results.push({
        id: 'set-rates',
        title: 'Can I set my own rates as a consultant?',
        content: 'Yes, as a consultant, you have the flexibility to set your own rates based on your expertise, market demand, and the complexity of the projects...',
        category: 'Pricing'
      });
    }
    
    if (searchTerm.includes('opportunity') || searchTerm.includes('project') || searchTerm.includes('gig')) {
      results.push({
        id: 'find-opportunities',
        title: 'How do I find consulting opportunities on the platform?',
        content: 'Consulting opportunities are typically listed under our "Find Gigs" section. You can browse through available projects...',
        category: 'Finding Work'
      });
    }
    
    if (searchTerm.includes('apply') || searchTerm.includes('proposal') || searchTerm.includes('submit')) {
      results.push({
        id: 'apply-projects',
        title: 'What is the process for applying to consulting projects?',
        content: 'Once you find a project of interest, you can submit a proposal outlining your approach, relevant experience...',
        category: 'Application Process'
      });
    }
    
    if (searchTerm.includes('communicate') || searchTerm.includes('message') || searchTerm.includes('client')) {
      results.push({
        id: 'client-communication',
        title: 'How do I communicate with clients during a consulting project?',
        content: 'Our platform provides messaging and communication tools that allow you to interact with clients directly...',
        category: 'Communication'
      });
    }
    
    if (searchTerm.includes('multiple') || searchTerm.includes('project') || searchTerm.includes('workload')) {
      results.push({
        id: 'multiple-projects',
        title: 'Are there any restrictions on the number of consulting projects I can take on?',
        content: 'As a consultant, you have the flexibility to take on multiple projects simultaneously based on your availability...',
        category: 'Project Management'
      });
    }
    
    if (searchTerm.includes('relationship') || searchTerm.includes('long-term') || searchTerm.includes('trust')) {
      results.push({
        id: 'build-relationships',
        title: 'How can I build long-term relationships with clients as a consultant?',
        content: 'Building trust, delivering exceptional results, and maintaining clear communication are key to fostering long-term relationships...',
        category: 'Client Relations'
      });
    }
    
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleSearchResultClick = (result) => {
    toggleAccordion(result.id);
    setSearchQuery('');
    setSearchResults([]);
  };

  // SEO Metadata
  React.useEffect(() => {
    document.title = "Consultant Role - Help & Support | GigExecs";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Learn about the consultant role on GigExecs. Find answers to frequently asked questions about showcasing skills, setting rates, finding opportunities, and building client relationships.");
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = "Learn about the consultant role on GigExecs. Find answers to frequently asked questions about showcasing skills, setting rates, finding opportunities, and building client relationships.";
      document.head.appendChild(newMetaDescription);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', "https://www.gigexecs.com/help/consultant");
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = "https://www.gigexecs.com/help/consultant";
      document.head.appendChild(newCanonical);
    }
  }, []);

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
                  href="/help" 
                  className="block px-4 py-2 rounded-lg transition-colors text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]"
                >
                  Getting started
                </a>
                
                {/* Roles Section - Active */}
                <div className="space-y-1">
                  <div className="px-4 py-2 rounded-lg bg-[#012E46] text-white">
                    <span>Roles</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    <div className="px-4 py-2 rounded-lg bg-[#012E46] text-white">
                      <span>Consultant</span>
                    </div>
                    <a 
                      href="/help/client" 
                      className="block px-4 py-2 rounded-lg transition-colors text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]"
                    >
                      Client
                    </a>
                  </div>
                </div>
                
                <a 
                  href="/help/billing" 
                  className="block px-4 py-2 rounded-lg transition-colors text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]"
                >
                  Billing
                </a>
                <a 
                  href="/help/milestones" 
                  className="block px-4 py-2 rounded-lg transition-colors text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]"
                >
                  Milestones
                </a>
                <a 
                  href="/help/contracts" 
                  className="block px-4 py-2 rounded-lg transition-colors text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]"
                >
                  Contracts
                </a>
                <a 
                  href="/help/gigs" 
                  className="block px-4 py-2 rounded-lg transition-colors text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]"
                >
                  Gigs
                </a>
                <a 
                  href="/help/disputes" 
                  className="block px-4 py-2 rounded-lg transition-colors text-[#6B7280] hover:text-[#0284C7] hover:bg-[#F5F5F5]"
                >
                  Disputes
                </a>
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-sm text-[#6B7280] mb-6">
              <a href="/help" className="hover:text-[#0284C7] transition-colors">Help & Support</a>
              <span>/</span>
              <a href="/help/roles" className="hover:text-[#0284C7] transition-colors">Roles</a>
              <span>/</span>
              <span className="text-[#1F2937]">Consultant</span>
            </nav>

            {/* Page Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-8">Consultant</h1>
            
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
                      setSearchQuery('');
                      setSearchResults([]);
                      setIsSearching(false);
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

            {/* Consultant FAQ Accordions */}
            <div className="space-y-4 mb-12">
              {/* FAQ 1 */}
              <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('showcase-skills')}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-[#1F2937]">How do I showcase my skills and experience effectively on my profile?</h3>
                  <svg 
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                      expandedAccordions.has('showcase-skills') ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedAccordions.has('showcase-skills') && (
                  <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                    <p className="text-[#6B7280] leading-relaxed">
                      Make sure to provide detailed information about your past projects, clients, achievements, and any certifications or qualifications you hold. Utilize our profile sections effectively to highlight your strengths.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('set-rates')}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-[#1F2937]">Can I set my own rates as a consultant?</h3>
                  <svg 
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                      expandedAccordions.has('set-rates') ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedAccordions.has('set-rates') && (
                  <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                    <p className="text-[#6B7280] leading-relaxed">
                      Yes, as a consultant, you have the flexibility to set your own rates based on your expertise, market demand, and the complexity of the projects you undertake.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('find-opportunities')}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-[#1F2937]">How do I find consulting opportunities on the platform?</h3>
                  <svg 
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                      expandedAccordions.has('find-opportunities') ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedAccordions.has('find-opportunities') && (
                  <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                    <p className="text-[#6B7280] leading-relaxed">
                      Consulting opportunities are typically listed under our "Find Gigs" section. You can browse through available projects, filter based on your expertise, and submit proposals for those that match your skills.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('apply-projects')}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-[#1F2937]">What is the process for applying to consulting projects?</h3>
                  <svg 
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                      expandedAccordions.has('apply-projects') ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedAccordions.has('apply-projects') && (
                  <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                    <p className="text-[#6B7280] leading-relaxed">
                      Once you find a project of interest, you can submit a proposal outlining your approach, relevant experience, and how you can add value to the client's project. Clients will review proposals and may contact you for further discussion.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('client-communication')}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-[#1F2937]">How do I communicate with clients during a consulting project?</h3>
                  <svg 
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                      expandedAccordions.has('client-communication') ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedAccordions.has('client-communication') && (
                  <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                    <p className="text-[#6B7280] leading-relaxed">
                      Our platform provides messaging and communication tools that allow you to interact with clients directly. You can discuss project details, share documents, and provide updates through our secure messaging system.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('multiple-projects')}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-[#1F2937]">Are there any restrictions on the number of consulting projects I can take on?</h3>
                  <svg 
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                      expandedAccordions.has('multiple-projects') ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedAccordions.has('multiple-projects') && (
                  <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                    <p className="text-[#6B7280] leading-relaxed">
                      As a consultant, you have the flexibility to take on multiple projects simultaneously based on your availability and workload. However, ensure that you can commit enough time and resources to deliver high-quality results for each project.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="border-2 border-[#E5E7EB] rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleAccordion('build-relationships')}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-[#1F2937]">How can I build long-term relationships with clients as a consultant?</h3>
                  <svg 
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 ${
                      expandedAccordions.has('build-relationships') ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedAccordions.has('build-relationships') && (
                  <div className="px-6 py-4 bg-[#F9FAFB] border-t border-[#E5E7EB]">
                    <p className="text-[#6B7280] leading-relaxed">
                      Building trust, delivering exceptional results, and maintaining clear communication are key to fostering long-term relationships with clients. Consistently delivering value and exceeding client expectations can lead to repeat business and referrals.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Related Articles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Related Article 1 */}
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
                      <a href="/blog" className="hover:text-[#0284C7] transition-colors">
                        Building Your Consulting Profile
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed mb-4">
                      Learn how to create a compelling consultant profile that attracts the right clients and projects. Discover the key elements that make your profile stand out in the competitive freelance marketplace.
                    </p>
                    <div className="text-sm text-[#6B7280] mb-4">
                      GigExecs Insider | June 15, 2024
                    </div>
                    <a href="/blog" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                      Read More →
                    </a>
                  </CardContent>
                </Card>

                {/* Related Article 2 */}
                <Card className="border-2 border-[#E5E7EB] hover:border-[#012E46] transition-colors p-0">
                  <div className="bg-gradient-to-br from-[#FACC15] to-[#EAB308] h-48 rounded-t-lg flex items-center justify-center">
                    <div className="text-[#012E46] text-center">
                      <div className="text-sm font-semibold mb-1">PRICING</div>
                      <div className="text-sm font-semibold mb-1">STRATEGY</div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-[#1F2937]">
                      <a href="/blog" className="hover:text-[#0284C7] transition-colors">
                        Setting Competitive Rates
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed mb-4">
                      Strategies for pricing your consulting services competitively while maintaining profitability. Learn how to value your expertise and position yourself in the market.
                    </p>
                    <div className="text-sm text-[#6B7280] mb-4">
                      GigExecs Insider | June 20, 2024
                    </div>
                    <a href="/blog" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
                      Read More →
                    </a>
                  </CardContent>
                </Card>

                {/* Related Article 3 */}
                <Card className="border-2 border-[#E5E7EB] hover:border-[#012E46] transition-colors p-0">
                  <div className="bg-gradient-to-br from-[#012E46] to-[#0284C7] h-48 rounded-t-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-[#1F2937]">
                      <a href="/blog" className="hover:text-[#0284C7] transition-colors">
                        Client Relationship Management
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed mb-4">
                      Best practices for building and maintaining long-term client relationships as a consultant. Discover strategies for client retention and business growth.
                    </p>
                    <div className="text-sm text-[#6B7280] mb-4">
                      GigExecs Insider | June 25, 2024
                    </div>
                    <a href="/blog" className="inline-flex items-center text-[#0284C7] hover:text-[#012E46] font-medium transition-colors ml-auto">
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
      <footer className="bg-[#012E46] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* GigExecs Brand */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-[#FACC15] mb-4">GigExecs</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                The premier freelance hub for top professionals and innovative companies.
              </p>
            </div>

            {/* How it works */}
            <div>
              <h4 className="font-semibold mb-4">How it works</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="/help" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h4 className="font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="/help" className="hover:text-white transition-colors">Help</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#1F2937] mt-8 pt-8 text-center text-[#9CA3AF] text-sm">
            <p>&copy; 2024 GigExecs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
