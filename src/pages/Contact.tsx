import { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, CheckCircle,
  MessageSquare, Calendar, ArrowRight, Sparkles
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    dateOfBirth: '',
    gender: '',
    destination: '',
    studyLevel: '',
    intake: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nationality: '',
        dateOfBirth: '',
        gender: '',
        destination: '',
        studyLevel: '',
        intake: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: '🇬🇧 London Office',
      details: ['53 Harts Lane', 'Barking, London IG11 8NA', 'United Kingdom'],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: '🇧🇩 Bangladesh Office',
      details: ['20/6, West Panthapath, Level-5', 'Dhaka-1205', 'Bangladesh'],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: ['+44 7301 793020 (UK)', '+880 1335845976 (BD)', 'Mon-Fri: 9am-6pm'],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: ['info@eduquestconsultancy.co.uk'],
    },
  ];

  const faqs = [
    {
      question: 'Are your services really free?',
      answer: 'Yes! All our services are completely free for students. We earn commissions from our partner universities.',
    },
    {
      question: 'How long does the application process take?',
      answer: 'Typically 2-4 weeks depending on the university and program. We ensure timely submission of all applications.',
    },
    {
      question: 'Do you help with visa applications?',
      answer: 'Absolutely! We provide comprehensive visa guidance including documentation, preparation, and interview tips.',
    },
    {
      question: 'Can I apply to multiple universities?',
      answer: 'Yes, we encourage applying to multiple universities to increase your chances of acceptance.',
    },
  ];

  const destinations = [
    'United Kingdom',
    'United States',
    'Canada',
    'Australia',
    'Germany',
    'Ireland',
    'New Zealand',
    'Other',
  ];

  const studyLevels = [
    'Foundation Year',
    'Undergraduate (Bachelor\'s)',
    'Postgraduate (Master\'s)',
    'PhD/Doctorate',
    'Professional Courses',
  ];

  const intakes = [
    'January 2026',
    'May 2026',
    'September 2026',
    'January 2027',
    'September/October 2027',
    'Not Sure Yet',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-20 -left-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
              <MessageSquare className="h-4 w-4 mr-2 text-yellow-400" />
              Free Consultation Available
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Start Your Journey
              <span className="text-yellow-400"> Today</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Book a free consultation with our expert counsellors. We're here to answer all your questions and guide you towards your dream university.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <Reveal direction="right" className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg h-full">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Book Your Free Consultation
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and one of our education counsellors will get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your consultation request has been received. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="+1 (234) 567-8900"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nationality *
                        </label>
                        <input
                          type="text"
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="e.g. British"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gender *
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Destination *
                        </label>
                        <select
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                        >
                          <option value="">Select Destination</option>
                          {destinations.map((dest) => (
                            <option key={dest} value={dest}>{dest}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Study Level *
                        </label>
                        <select
                          name="studyLevel"
                          value={formData.studyLevel}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                        >
                          <option value="">Select Level</option>
                          {studyLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Intake *
                        </label>
                        <select
                          name="intake"
                          value={formData.intake}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                        >
                          <option value="">Select Intake</option>
                          {intakes.map((intake) => (
                            <option key={intake} value={intake}>{intake}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                        placeholder="Tell us about your educational background, goals, and any specific questions you have..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Submit Consultation Request
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Reveal key={index} direction="left" delay={(index * 100) as any}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Quick Contact CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6" />
                  <h3 className="font-semibold">Schedule a Video Call</h3>
                </div>
                <p className="text-blue-100 text-sm mb-4">
                  Prefer a face-to-face consultation? Book a video call with our counsellors.
                </p>
                <button className="w-full px-4 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  Book Video Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Frequently Asked
              <span className="text-blue-600"> Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Visit Our Office
            </h2>
            <p className="text-gray-600 mt-2">
              We welcome walk-in consultations during office hours
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="aspect-[21/9] md:aspect-[2/1] lg:aspect-[2.5/1] w-full bg-gray-100 relative group">
              <iframe 
                src="https://maps.google.com/maps?q=53%20Harts%20Lane,%20Barking,%20London,%20IG11%208NA&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
            
            <div className="p-6 bg-white flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100">
              <div className="flex items-center gap-4 text-left w-full md:w-auto">
                 <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-7 w-7 text-blue-600" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-gray-900">EduQuest Consultancy London</h3>
                    <p className="text-gray-600 text-sm mt-0.5">53 Harts Lane, Barking, London, IG11 8NA</p>
                 </div>
              </div>
              <a
                href="https://maps.google.com/maps?q=53%20Harts%20Lane,%20Barking,%20London,%20IG11%208NA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Get Directions
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Global Presence</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Our Offices Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { city: 'London', country: 'United Kingdom', flag: '🇬🇧', type: 'Head Office', address: '53 Harts Lane, Barking, IG11 8NA', phone: '+44 7301 793020' },
              { city: 'Dhaka', country: 'Bangladesh', flag: '🇧🇩', type: 'Regional Office', address: '20/6 West Panthapath, Level-5, Dhaka-1205', phone: '+880 1335845976' },
            ].map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">{office.flag}</span>
                <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                <p className="text-gray-600">{office.country}</p>
                <p className="text-gray-500 text-sm mt-1">{office.address}</p>
                <p className="text-blue-600 text-sm mt-1">{office.phone}</p>
                <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {office.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
