import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap, BookOpen, Plane, FileCheck, Users, Award,
  CheckCircle, ArrowRight, Star, Quote, Globe, Building2,
  Sparkles, Target, Heart, TrendingUp
} from 'lucide-react';
import { Marquee } from '../components/ui/marquee';
import { Reveal } from '../components/Reveal';
import CardFlip from '../components/CardFlip';

const TestimonialCard = ({ name, university, country, image, quote }: {
  name: string;
  university: string;
  country: string;
  image: string;
  quote: string;
}) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-[350px] mx-2">
    <Quote className="h-8 w-8 text-blue-100 mb-4" />
    <p className="text-gray-600 leading-relaxed mb-6 italic">"{quote}"</p>
    <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-50"
      />
      <div>
        <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
        <p className="text-xs text-gray-500 font-medium">{university}</p>
        <p className="text-[10px] uppercase tracking-wider text-blue-600 font-bold mt-0.5">{country}</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      image: '/service1.png',
      title: 'Course & University Selection',
      subtitle: 'Find your perfect match',
      description: 'Expert guidance to find the perfect course and university that matches your career aspirations.',
      features: ['Profile Assessment', 'University Shortlisting', 'Course Comparison', 'Admission Requirements']
    },
    {
      icon: <FileCheck className="h-10 w-10" />,
      image: '/service2.png',
      title: 'Application Support',
      subtitle: 'Stand out from the crowd',
      description: 'Comprehensive assistance with applications, personal statements, and documentation.',
      features: ['Document Review', 'Personal Statement', 'Interview Prep', 'Application Tracking']
    },
    {
      icon: <Plane className="h-10 w-10" />,
      image: '/service3.png',
      title: 'Visa Assistance',
      subtitle: 'Smooth & successful process',
      description: 'Step-by-step visa guidance ensuring a smooth and successful application process.',
      features: ['Document Preparation', 'Mock Interviews', 'Application Filing', 'Status Updates']
    },
    {
      icon: <Users className="h-10 w-10" />,
      image: '/service4.png',
      title: 'Pre-Departure Support',
      subtitle: 'Ready for your journey',
      description: 'Complete preparation for your journey including accommodation and travel arrangements.',
      features: ['Accommodation Help', 'Travel Planning', 'Briefing Sessions', 'Bank Setup Guide']
    },
  ];

  const stats = [
    { number: '15,000+', label: 'Students Placed', icon: <GraduationCap /> },
    { number: '200+', label: 'Partner Universities', icon: <Building2 /> },
    { number: '50+', label: 'Countries Served', icon: <Globe /> },
    { number: '98%', label: 'Visa Success Rate', icon: <Award /> },
  ];

  const destinations = [
    { key: 'uk', country: 'United Kingdom', flag: '🇬🇧', universities: '150+ Universities', popular: true, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop' },
    { key: 'usa', country: 'United States', flag: '🇺🇸', universities: '4,000+ Institutions', popular: true, image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=500&fit=crop' },
    { key: 'canada', country: 'Canada', flag: '🇨🇦', universities: '100+ Universities', popular: true, image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=500&fit=crop' },
    { key: 'australia', country: 'Australia', flag: '🇦🇺', universities: '43 Universities', popular: false, image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=500&fit=crop' },
    { key: 'germany', country: 'Germany', flag: '🇩🇪', universities: '400+ Universities', popular: false, image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop' },
    { key: 'ireland', country: 'Ireland', flag: '🇮🇪', universities: '34 Institutions', popular: false, image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&h=500&fit=crop' },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      university: 'University of Oxford',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&h=150&fit=crop&crop=face',
      quote: 'EduQuest made my dream of studying at Oxford a reality. Their guidance through every step was invaluable.',
    },
    {
      name: 'Ahmed Hassan',
      university: 'University of Manchester',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      quote: "The team's knowledge of the UK education system is unmatched. They helped me find the perfect university and handled my CAS flawlessly.",
    },
    {
      name: 'Priya Sharma',
      university: 'University of Toronto',
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?w=150&h=150&fit=crop&crop=face',
      quote: 'EduQuest helped me navigate the Canadian immigration process with ease. Their PGWP guidance was a game-changer!',
    },
    {
      name: 'David Okafor',
      university: 'Columbia University',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150&h=150&fit=crop&crop=face',
      quote: 'From choosing the right program to securing my F-1 visa, EduQuest was with me every step. I couldn\'t have done it without them.',
    },
    {
      name: 'Amara Kone',
      university: 'University of Melbourne',
      country: 'Australia',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face',
      quote: 'Studying in Australia seemed impossible until I met EduQuest. They made the entire process seamless and stress-free.',
    },
    {
      name: 'Raj Patel',
      university: 'Technical University of Munich',
      country: 'Germany',
      image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=150&h=150&fit=crop&crop=face',
      quote: 'I never knew tuition-free education in Germany was possible until EduQuest showed me the way. Truly life-changing!',
    },
    {
      name: 'Fatima Al-Rashid',
      university: 'Trinity College Dublin',
      country: 'Ireland',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&h=150&fit=crop&crop=face',
      quote: 'Ireland was the perfect choice for my tech career. EduQuest connected me to the right university and the right opportunities.',
    },
    {
      name: 'Michael Adeyemi',
      university: "King's College London",
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face',
      quote: 'Professional, reliable, and truly caring. I highly recommend EduQuest to any student aiming for top-tier UK universities.',
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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-photo.png"
            alt="Students on campus"
            className="w-full h-full object-cover object-center scale-[1.05] transition-opacity duration-500"
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <Reveal direction="up" duration={1000}>
              <div className="text-white space-y-8 animate-fade-in">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                  <span className="text-sm font-medium">Trusted by 15,000+ Students Worldwide</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  Your Gateway to
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                    UK University Education
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-blue-50 leading-relaxed max-w-2xl drop-shadow-md">
                  Expert guidance for studying in the UK. From university selection to visa success, we're with you every step of your British education journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-md shadow-lg"
                  >
                    Explore Services
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-8">
                  <div className="flex -space-x-3">
                    {[
                      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=100&h=100&fit=crop&crop=face',
                      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
                      'https://images.unsplash.com/photo-1611432579699-484f7990b127?w=100&h=100&fit=crop&crop=face',
                      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop&crop=face'
                    ].map((src, i) => (
                      <img key={i} src={src} alt="Verified successful student" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-lg" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center text-yellow-400 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-white font-medium">4.9/5 from 2,000+ verified reviews</span>
                  </div>
                </div>
              </div>
            </Reveal>
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
              <Reveal key={index} direction="up" delay={(index * 100) as any}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-500 mt-1">{stat.label}</div>
                </div>
              </Reveal>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {services.map((service, index) => (
              <Reveal key={index} direction="up" delay={(index * 100) as any} className="w-full flex justify-center">
                <CardFlip 
                  icon={service.icon}
                  image={service.image}
                  title={service.title}
                  subtitle={service.subtitle}
                  description={service.description}
                  features={service.features}
                />
              </Reveal>
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
              <Reveal key={index} direction="up" delay={(index * 100) as any}>
                <Link
                  to={`/destinations?country=${dest.key}`}
                  className="relative rounded-2xl p-6 border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group overflow-hidden cursor-pointer min-h-[140px] flex items-center block"
                >
                  {/* Background Image & Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={dest.image}
                      alt={dest.country}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40 group-hover:from-gray-900/80 transition-all"></div>
                  </div>

                  {/* Popular Badge */}
                  {dest.popular && (
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
                      Popular
                    </span>
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-4 w-full text-white">
                    <span className="text-5xl font-bold opacity-90">{dest.flag}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                        {dest.country}
                      </h3>
                      <p className="text-gray-300">{dest.universities}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </Reveal>
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
            <Reveal direction="right">
              <div>
                <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Why Choose EduQuest</span>
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
            </Reveal>

            <Reveal direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                  alt="Team meeting"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Voices of our
                <span className="text-blue-600"> Global Students</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join thousands of successful students who found their future with EduQuest.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-6">
          <Marquee pauseOnHover className="[--duration:40s]">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {testimonials.slice(3, 6).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50/50 z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50/50 z-10"></div>
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

            <Reveal direction="up">
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
                    href="tel:+447301793020"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
