import { Link } from 'react-router-dom';
import {
  GraduationCap, BookOpen, Plane, FileCheck, Users, Award,
  CheckCircle, ArrowRight, Star, Quote, Globe, Building2,
  Sparkles, Target, Heart, TrendingUp
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Course & University Selection',
      description: 'Expert guidance to find the perfect course and university that matches your career aspirations.',
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: 'Application Support',
      description: 'Comprehensive assistance with applications, personal statements, and documentation.',
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Visa Assistance',
      description: 'Step-by-step visa guidance ensuring a smooth and successful application process.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Pre-Departure Support',
      description: 'Complete preparation for your journey including accommodation and travel arrangements.',
    },
  ];

  const stats = [
    { number: '15,000+', label: 'Students Placed', icon: <GraduationCap /> },
    { number: '200+', label: 'Partner Universities', icon: <Building2 /> },
    { number: '50+', label: 'Countries Served', icon: <Globe /> },
    { number: '98%', label: 'Visa Success Rate', icon: <Award /> },
  ];

  const destinations = [
    { country: 'United Kingdom', flag: '🇬🇧', universities: '150+ Universities', popular: true },
    { country: 'United States', flag: '🇺🇸', universities: '4,000+ Institutions', popular: true },
    { country: 'Canada', flag: '🇨🇦', universities: '100+ Universities', popular: true },
    { country: 'Australia', flag: '🇦🇺', universities: '43 Universities', popular: false },
    { country: 'Germany', flag: '🇩🇪', universities: '400+ Universities', popular: false },
    { country: 'Ireland', flag: '🇮🇪', universities: '34 Institutions', popular: false },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      university: 'University of Oxford',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      quote: 'NWC made my dream of studying at Oxford a reality. Their guidance through every step was invaluable.',
    },
    {
      name: 'Ahmed Hassan',
      university: 'University of Toronto',
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'The visa support I received was exceptional. The team knew exactly what was needed and when.',
    },
    {
      name: 'Priya Sharma',
      university: 'Imperial College London',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'From course selection to accommodation, NWC was with me every step. Highly recommended!',
    },
  ];

  const whyChooseUs = [
    { icon: <Sparkles />, title: 'Free Services', desc: 'All our services are completely free for students' },
    { icon: <Target />, title: 'Expert Counsellors', desc: 'Experienced advisors with in-depth knowledge' },
    { icon: <Heart />, title: 'Personalized Guidance', desc: 'Tailored support for your unique needs' },
    { icon: <TrendingUp />, title: 'Proven Track Record', desc: '15+ years of successful placements' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
          <div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                <span className="text-sm">Trusted by 15,000+ Students Worldwide</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Gateway to
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  World-Class Education
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Expert guidance for studying abroad. From university selection to visa success, we're with you every step of your international education journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-blue-200">4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=700&fit=crop"
                  alt="Students graduating"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />

                {/* Floating Cards */}
                <div className="absolute -left-10 top-1/4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Visa Approved!</p>
                      <p className="text-sm text-gray-500">UK Student Visa</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-10 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl animate-bounce delay-500">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Offer Received!</p>
                      <p className="text-sm text-gray-500">University of Manchester</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45.7C120 41 240 33 360 35.8C480 39 600 53 720 58.2C840 63 960 59 1080 51.7C1200 45 1320 35 1380 30L1440 25V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Comprehensive Support for Your
              <span className="text-blue-600"> Study Abroad Journey</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              From your first inquiry to your arrival at university, we provide end-to-end support at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Study Destinations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Explore Top Study
              <span className="text-blue-600"> Destinations</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              We partner with leading universities across the globe to offer you world-class education opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer"
              >
                {dest.popular && (
                  <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{dest.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {dest.country}
                    </h3>
                    <p className="text-gray-500">{dest.universities}</p>
                  </div>
                </div>
                <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Explore All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Why Choose NWC</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Your Trusted Partner for
                <span className="text-yellow-400"> International Education</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                With over 15 years of experience, we've helped thousands of students achieve their dreams of studying abroad. Our expert counsellors provide personalized guidance every step of the way.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                alt="Team meeting"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              What Our Students
              <span className="text-blue-600"> Say About Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                <Quote className="h-10 w-10 text-blue-100 mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.university}</p>
                    <p className="text-xs text-blue-600">{testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-20 -right-20"></div>
              <div className="absolute w-48 h-48 bg-white/10 rounded-full -bottom-10 -left-10"></div>
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Study Abroad Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book your free consultation today and let our experts guide you towards your dream university.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+442012345678"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
