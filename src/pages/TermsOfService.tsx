
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-aerionix-black text-white overflow-x-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-aerionix-gold">Terms of Service</h1>
        
        <div className="aerionix-card">
          <h2 className="text-2xl font-semibold mb-4 text-aerionix-gold">Agreement to Terms</h2>
          <p className="mb-6 text-aerionix-silver">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and AERIONIX ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-aerionix-gold">Intellectual Property Rights</h2>
          <p className="mb-3 text-aerionix-silver">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
          </p>
          <p className="mb-6 text-aerionix-silver">
            The Content and Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8 text-aerionix-gold">User Representations</h2>
          <p className="mb-3 text-aerionix-silver">
            By using the Site, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-6 text-aerionix-silver">
            <li className="mb-2">You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li className="mb-2">You will not use the Site for any illegal or unauthorized purpose.</li>
            <li className="mb-2">Your use of the Site will not violate any applicable law or regulation.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8 text-aerionix-gold">Products</h2>
          <p className="mb-6 text-aerionix-silver">
            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8 text-aerionix-gold">Contact Us</h2>
          <p className="text-aerionix-silver">
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:support@aerionix.in" className="text-aerionix-gold hover:text-aerionix-gold/80 transition-all duration-500">support@aerionix.in</a>
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="outline" className="text-aerionix-gold border-aerionix-gold hover:bg-aerionix-gold hover:text-aerionix-black transition-all duration-500">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
