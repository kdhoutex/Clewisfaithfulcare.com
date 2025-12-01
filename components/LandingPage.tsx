import React, { useState } from 'react';
import { Heart, Home, Users, Clock, Shield, Phone, Mail, MapPin, ChevronRight, Star, Award, Check } from 'lucide-react';
import type { GeneratedImages } from '../App';

interface LandingPageProps {
  images: GeneratedImages;
}

export default function LandingPage({ images }: LandingPageProps) {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Assistance with daily activities including bathing, dressing, grooming, and mobility support.",
      features: ["Bathing & Hygiene", "Dressing Assistance", "Mobility Support", "Medication Reminders"]
    },
    {
      icon: Home,
      title: "Companionship",
      description: "Meaningful interaction and engagement to combat loneliness and enrich daily life.",
      features: ["Conversation & Activities", "Meal Preparation", "Light Housekeeping", "Transportation"]
    },
    {
      icon: Users,
      title: "Respite Care",
      description: "Temporary relief for family caregivers, providing peace of mind and quality care.",
      features: ["Flexible Scheduling", "Trained Caregivers", "Activity Planning", "Regular Updates"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock care options for those needing continuous assistance and monitoring.",
      features: ["Live-in Care", "Overnight Support", "Emergency Response", "Care Coordination"]
    }
  ];

  const values = [
    { icon: Heart, title: "Compassion First", text: "Every interaction guided by genuine care and empathy" },
    { icon: Shield, title: "Trust & Integrity", text: "Background-checked caregivers committed to excellence" },
    { icon: Users, title: "Family Partnership", text: "We work alongside families, never replacing them" },
    { icon: Award, title: "Faith-Based Values", text: "Christian principles guide our commitment to dignity" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 font-serif">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-brand fill-brand" />
            <span className="text-2xl font-bold tracking-tight text-stone-900">Clewis Faithful Care</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-sans">
            <a href="#services" className="text-stone-600 hover:text-brand transition-colors">Services</a>
            <a href="#about" className="text-stone-600 hover:text-brand transition-colors">About</a>
            <a href="#contact" className="text-stone-600 hover:text-brand transition-colors">Contact</a>
          </div>
          <a href="tel:8323733161" className="text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg transition-all bg-brand font-sans">
            (832) 373-3161
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full text-brand bg-brand-light font-sans">
                  Compassionate Home Care
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl leading-tight text-stone-900">
                Your loved ones deserve{' '}
                <span className="italic text-brand">care that feels like family</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Personalized in-home support guided by Christian values, helping seniors thrive with dignity, comfort, and genuine companionship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center group bg-brand font-sans">
                  Schedule Free Consultation
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full text-lg font-medium hover:border-brand transition-all font-sans">
                  Learn More
                </button>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-300 to-amber-400 border-4 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-4 border-white"></div>
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-brand to-brand-gradient-end"></div>
                </div>
                <div>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-stone-600 mt-1 font-sans">Trusted by families across the community</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden relative bg-[linear-gradient(135deg,#f5ddd1_0%,#f5e6d8_50%,#f0d5c4_100%)]">
                {images.hero ? (
                   <img 
                     src={images.hero} 
                     alt="Compassionate care interaction" 
                     className="w-full h-full object-cover animate-in fade-in duration-700"
                   />
                ) : (
                  <>
                    {/* Decorative pattern overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(200,111,86,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(217,119,87,0.1)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(245,221,209,0.3)_0%,transparent_70%)]"></div>
                    
                    {/* Heart icon pattern */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <Heart className="w-64 h-64 text-brand fill-brand" />
                    </div>
                  </>
                )}
                
                {/* Testimonial card */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                    <p className="text-stone-600 italic mb-2 font-sans">"They treated my mother like their own family"</p>
                    <p className="text-sm text-stone-500 font-sans">— Local Family</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 text-white p-6 rounded-2xl shadow-xl bg-brand">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm opacity-90 font-sans">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="w-8 h-8 mx-auto mb-2 text-brand" />
              <p className="font-medium text-stone-900 font-sans">Licensed & Insured</p>
              <p className="text-sm text-stone-600 mt-1">Fully certified care</p>
            </div>
            <div>
              <Check className="w-8 h-8 mx-auto mb-2 text-brand" />
              <p className="font-medium text-stone-900 font-sans">Background Checked</p>
              <p className="text-sm text-stone-600 mt-1">Vetted caregivers</p>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-2 text-brand" />
              <p className="font-medium text-stone-900 font-sans">24/7 Availability</p>
              <p className="text-sm text-stone-600 mt-1">Care when needed</p>
            </div>
            <div>
              <Heart className="w-8 h-8 mx-auto mb-2 text-brand" />
              <p className="font-medium text-stone-900 font-sans">Faith-Based</p>
              <p className="text-sm text-stone-600 mt-1">Christian values</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase text-brand font-sans">Our Services</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-stone-900">Care tailored to your needs</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              From personal care to companionship, we provide comprehensive support that honors the dignity and independence of every individual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => setActiveService(idx)}
                className={`bg-white p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 overflow-hidden ${
                  activeService === idx
                    ? 'shadow-2xl transform scale-105 border-brand'
                    : 'border-stone-200 hover:border-stone-300 hover:shadow-lg'
                }`}
              >
                {/* Image or Icon Render */}
                {images.services[idx] ? (
                  <div className="w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden bg-stone-100">
                    <img src={images.services[idx]!} alt={service.title} className="w-full h-full object-cover animate-in fade-in duration-500" />
                  </div>
                ) : (
                  <service.icon 
                    className={`w-12 h-12 mb-4 transition-colors duration-300 ${activeService === idx ? 'text-brand' : 'text-stone-400'}`} 
                  />
                )}
                
                <h3 className="text-xl font-bold mb-3 text-stone-900">{service.title}</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                {activeService === idx && (
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-stone-700 font-sans">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-brand" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium tracking-wider uppercase text-brand font-sans">Our Mission</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-stone-900">
                Care rooted in <span className="italic text-brand">faith and compassion</span>
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                At Clewis Faithful Care, we believe every elder deserves to age with dignity and love. Our mission is to ensure that every senior we serve experiences compassionate home care that reflects our Christian values and commitment to integrity.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                We don't just provide care—we build relationships. Our caregivers become trusted companions, treating your loved ones as they would their own family.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <value.icon className="w-8 h-8 mb-3 text-brand" />
                  <h3 className="font-bold text-stone-900 mb-2 font-sans">{value.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase text-brand font-sans">Why Families Trust Us</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-stone-900">The Clewis difference</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Care Plans",
                description: "Every individual is unique. We create customized care plans that adapt to changing needs and preferences.",
                number: "01"
              },
              {
                title: "Experienced Caregivers",
                description: "Our team brings years of professional experience combined with genuine compassion and patience.",
                number: "02"
              },
              {
                title: "Family Communication",
                description: "Regular updates and open dialogue ensure families stay informed and involved in their loved one's care.",
                number: "03"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-7xl font-bold absolute -top-6 -left-4 text-brand-light">{item.number}</div>
                <div className="relative bg-stone-50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-stone-900 mb-4">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-white bg-gradient-to-br from-brand to-brand-gradient-end">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to provide the care your loved one deserves?</h2>
          <p className="text-xl mb-12 opacity-90">
            Schedule a free consultation to discuss your family's needs and learn how we can help.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:8323733161" className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <p className="font-medium mb-1 font-sans">Call Us</p>
              <p className="text-sm opacity-90">(832) 373-3161</p>
            </a>
            <a href="mailto:contact@clewisfaithfulcare.com" className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <p className="font-medium mb-1 font-sans">Email Us</p>
              <p className="text-sm opacity-90">Get in touch</p>
            </a>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <p className="font-medium mb-1 font-sans">Visit Us</p>
              <p className="text-sm opacity-90">Houston Area</p>
            </div>
          </div>

          <button className="px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all transform hover:-translate-y-1 bg-white text-brand font-sans">
            Schedule Free Consultation
          </button>

          <p className="mt-8 text-sm opacity-75">Available Monday - Friday, 9:00 AM - 5:00 PM</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-brand fill-brand" />
                <span className="text-xl font-bold text-white">Clewis Faithful Care</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Providing compassionate in-home care guided by Christian values. Helping seniors thrive with dignity, comfort, and genuine companionship.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-sans">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-brand transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-brand transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 font-sans">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>(832) 373-3161</li>
                <li>Houston, Texas</li>
                <li>Mon-Fri: 9am-5pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Clewis Faithful Care. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}