
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally send data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-aerionix-black to-aerionix-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in <span className="text-aerionix-gold">Touch</span></h2>
        <p className="section-subtitle">
          Have questions about our products or interested in becoming a partner? Reach out to us.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-aerionix-silver mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-aerionix-darkgray border border-aerionix-gold/30 rounded-md p-3 text-white focus:border-aerionix-gold focus:outline-none focus:ring-1 focus:ring-aerionix-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-aerionix-silver mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-aerionix-darkgray border border-aerionix-gold/30 rounded-md p-3 text-white focus:border-aerionix-gold focus:outline-none focus:ring-1 focus:ring-aerionix-gold"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-aerionix-silver mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-aerionix-darkgray border border-aerionix-gold/30 rounded-md p-3 text-white focus:border-aerionix-gold focus:outline-none focus:ring-1 focus:ring-aerionix-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-aerionix-silver mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-aerionix-darkgray border border-aerionix-gold/30 rounded-md p-3 text-white focus:border-aerionix-gold focus:outline-none focus:ring-1 focus:ring-aerionix-gold resize-none"
                ></textarea>
              </div>
              
              <Button type="submit" className="bg-aerionix-gold hover:bg-aerionix-gold/80 text-aerionix-black">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="aerionix-card h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-aerionix-gold/20 p-3 rounded-full mr-4">
                    <Mail className="text-aerionix-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-aerionix-silver mb-1">Email</p>
                    <a href="mailto:support@aerionix.in" className="text-white hover:text-aerionix-gold">support@aerionix.in</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aerionix-gold/20 p-3 rounded-full mr-4">
                    <Phone className="text-aerionix-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-aerionix-silver mb-1">Phone</p>
                    <a href="tel:+919359296165" className="text-white hover:text-aerionix-gold">+91 9359296165</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aerionix-gold/20 p-3 rounded-full mr-4">
                    <MapPin className="text-aerionix-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-aerionix-silver mb-1">Location</p>
                    <address className="not-italic text-white">
                      Manipal, Karnataka<br />
                      India
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
