import { Link } from 'react-router-dom';
import {
  BookOpen, FileText, Plane, Home, GraduationCap, Users,
  CheckCircle, ArrowRight, Target, Sparkles, Award, Clock,
  FileCheck, Globe, CreditCard, Building2, MessageSquare, Calendar
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: 'Course & University Selection',
      description: 'Finding the right course and university is crucial for your academic and career success. Our expert counsellors work closely with you to understand your aspirations, academic background, and preferences.',
      features: [
        'Personalized course recommendations based on your profile',
        'Detailed university comparison and rankings analysis',
        'Career pathway guidance and industry insights',
        'Scholarship opportunity identification',
        'Entry requirements assessment',
      ],
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Application Support',
      description: 'We provide comprehensive application support to ensure your application stands out. Our team guides you through every document and deadline.',
      features: [
        'Personal statement and SOP writing assistance',
        'CV/Resume optimization for academic applications',
        'Reference letter guidance',
        'Application form review and submission',
        'Interview preparation and mock sessions',
      ],
    },
    {
      icon: <Plane className="h-10 w-10" />,
      title: 'Visa Assistance',
      description: 'Navigating the visa process can be complex. Our visa specialists ensure a smooth application process with expert guidance and documentation support.',
      features: [
        'Visa requirement analysis for your destination',
        'Documentation checklist and verification',
        'Financial documentation guidance',
        'Visa application form assistance',
        'Interview preparation and tips',
      ],
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: 'Pre-Departure Support',
      description: 'We prepare you for life abroad with comprehensive pre-departure guidance, ensuring you\'re ready for your new adventure.',
      features: [
        'Accommodation search and booking assistance',
        'Travel arrangements guidance',
        'Pre-departure orientation sessions',
        'Banking and finance advice',
        'Cultural preparation and adaptation tips',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Scholarship Guidance',
      description: 'Identify and apply for scholarships that match your profile.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Language Test Preparation',
      description: 'IELTS, TOEFL, and other English proficiency test guidance.',
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Education Loans',
      description: 'Connect with banks and financial institutions for education loans.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Parent Counselling',
      description: 'Address parents\' concerns and involve them in the decision process.',
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Alumni Network',
      description: 'Connect with our alumni studying abroad for firsthand insights.',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Post-Arrival Support',
      description: 'Continued support even after you reach your destination.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free counselling session to understand your goals and assess your profile.',
      icon: <MessageSquare />,
    },
    {
      step: '02',
      title: 'Course & University Selection',
      description: 'Personalized recommendations based on your aspirations and qualifications.',
      icon: <Target />,
    },
    {
      step: '03',
      title: 'Application Preparation',
      description: 'Complete assistance with documents, SOPs, and application submission.',
      icon: <FileCheck />,
    },
    {
      step: '04',
      title: 'Offer Acceptance',
      description: 'Guidance on comparing offers and making the right choice.',
      icon: <Award />,
    },
    {
      step: '05',
      title: 'Visa Processing',
      description: 'Expert support for visa documentation and application.',
      icon: <Plane />,
    },
    {
      step: '06',
      title: 'Pre-Departure',
      description: 'Complete preparation for your journey and life abroad.',
      icon: <Home />,
    },
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
          <span className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
            100% Free Services for Students
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Comprehensive Services for Your
            <span className="text-yellow-400"> Study Abroad Journey</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From course selection to post-arrival support, we provide end-to-end guidance to make your international education dream a reality.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Complete Support at
              <span className="text-blue-600"> Every Step</span>
            </h2>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                            i === 1 ? 'bg-blue-100 text-blue-600' :
                            i === 2 ? 'bg-green-100 text-green-600' :
                            i === 3 ? 'bg-purple-100 text-purple-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {i === 1 ? <Target className="h-5 w-5" /> :
                             i === 2 ? <CheckCircle className="h-5 w-5" /> :
                             i === 3 ? <Clock className="h-5 w-5" /> :
                             <Award className="h-5 w-5" />}
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full mb-2">
                            <div className={`h-full rounded-full ${
                              i === 1 ? 'bg-blue-500 w-4/5' :
                              i === 2 ? 'bg-green-500 w-full' :
                              i === 3 ? 'bg-purple-500 w-3/5' :
                              'bg-orange-500 w-4/5'
                            }`}></div>
                          </div>
                          <p className="text-xs text-gray-500">
                            {i === 1 ? 'Profile Match' : i === 2 ? 'Success Rate' : i === 3 ? 'Processing' : 'Satisfaction'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Simple Steps to Your
              <span className="text-blue-600"> Dream University</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Our streamlined process ensures a smooth journey from initial enquiry to arrival at your dream university.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group relative"
              >
                <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Additional Support</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Beyond the Basics
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              We go the extra mile with additional services to ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Our Business Model</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Why Are Our Services
                <span className="text-yellow-400"> Free for Students?</span>
              </h2>
              <div className="space-y-6 text-blue-100">
                <p className="text-lg leading-relaxed">
                  We work as official recruitment partners with over 200 universities and colleges worldwide. These institutions pay us a commission for every student we successfully place with them.
                </p>
                <p className="text-lg leading-relaxed">
                  This means you get expert guidance, comprehensive support, and personalized services without paying a single penny. Our success depends on your success, so we're fully invested in helping you achieve your educational goals.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                  <p className="font-semibold">100% Free Services</p>
                  <p className="text-sm text-blue-200">No hidden charges ever</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                  <p className="font-semibold">Official Partners</p>
                  <p className="text-sm text-blue-200">200+ partner universities</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=500&fit=crop"
                alt="University campus"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-20 -right-20"></div>
              <div className="absolute w-48 h-48 bg-white/10 rounded-full -bottom-10 -left-10"></div>
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book your free consultation today and take the first step towards your international education journey.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
