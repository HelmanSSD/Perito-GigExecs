import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Homepage from './Homepage.jsx'
import Client from './Client.tsx'
import Professionals from './Professionals.jsx'
import BlogHome from './BlogHome.jsx'
import Blog1 from './Blog1.jsx'
import Blog2 from './Blog2.jsx'
import Blog3 from './Blog3.jsx'
import Blog4 from './Blog4.jsx'
import Blog5 from './Blog5.jsx'
import Blog6 from './Blog6.jsx'
import Blog7 from './Blog7.jsx'
import Blog8 from './Blog8.jsx'
import Blog9 from './Blog9.jsx'
import Blog10 from './Blog10.jsx'
import Pricing from './Pricing.jsx'
import AboutUs from './AboutUs.jsx'
import TermsOfService from './TermsOfService.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import HelpCenter from './HelpCenter.jsx'
import HCRoleConsultant from './HC_Role_Consultant.jsx'
import HCRoleClients from './HC_Role_Clients.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/client" element={<Client />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/remote-hybrid-in-office" element={<Blog1 />} />
        <Route path="/blog/corporate-leadership-executive-freelancing" element={<Blog2 />} />
        <Route path="/blog/ai-revolution-senior-professionals" element={<Blog3 />} />
        <Route path="/blog/job-market-anomaly-older-talent" element={<Blog4 />} />
        <Route path="/blog/finding-purpose-second-half-life" element={<Blog5 />} />
        <Route path="/blog/building-future-flexible-work" element={<Blog6 />} />
        <Route path="/blog/ai-robots-future-work-2025" element={<Blog7 />} />
        <Route path="/blog/future-senior-work-flexibility-freelance" element={<Blog8 />} />
        <Route path="/blog/20-percent-challenge-flexible-work-2025" element={<Blog9 />} />
        <Route path="/blog/master-mental-clarity-stress-management-high-performers" element={<Blog10 />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/help/consultant" element={<HCRoleConsultant />} />
        <Route path="/help/client" element={<HCRoleClients />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
