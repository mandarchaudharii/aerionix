
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-aerionix-black text-white overflow-x-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-aerionix-gold">Privacy Policy</h1>
        
        <div className="aerionix-card">
          <h2 className="text-2xl font-semibold mb-4 text-aerionix-gold">Introduction</h2>
          <p className="mb-6 text-aerionix-silver">
            AERIONIX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-aerionix-gold">Information We Collect</h2>
          <p className="mb-3 text-aerionix-silver">
            We may collect information about you in a variety of ways. The information we may collect via the website includes:
          </p>
          <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
          <p className="mb-3 text-aerionix-silver">
            Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
          <p className="mb-3 text-aerionix-silver">
            Information collected automatically when visiting our website, which may include your IP address, browser type, operating system, access times, and referring website addresses.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8 text-aerionix-gold">Use of Your Information</h2>
          <p className="mb-3 text-aerionix-silver">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-aerionix-silver">
            <li className="mb-2">Create and manage your account.</li>
            <li className="mb-2">Process orders and payments.</li>
            <li className="mb-2">Send you product and service updates.</li>
            <li className="mb-2">Respond to your comments, questions, and requests.</li>
            <li className="mb-2">Compile anonymous statistical data for research purposes.</li>
            <li className="mb-2">Deliver targeted advertising and promotions.</li>
            <li className="mb-2">Increase the efficiency and operation of the website.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8 text-aerionix-gold">Contact Us</h2>
          <p className="text-aerionix-silver">
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:support@aerionix.in" className="text-aerionix-gold hover:text-aerionix-gold/80 transition-all duration-500">support@aerionix.in</a>
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

export default PrivacyPolicy;
