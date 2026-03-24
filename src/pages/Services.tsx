import { Link } from 'react-router-dom';
import {
  BookOpen, FileText, Plane, Home, GraduationCap, Users,
  CheckCircle, ArrowRight, Target, Sparkles, Award, Clock,
  FileCheck, Globe, CreditCard, Building2, MessageSquare, Calendar
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Services = () => {
  const mainServices = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: 'Course & UK University Selection',
      description: 'Finding the right course and university is crucial for your academic and career success in the UK. Our expert UK-specialist counsellors work closely with you to understand your aspirations and match you with the best institutions.',
      features: [
        'Personalized UK course recommendations',
        'Detailed UK university comparison and rankings',
        'Career pathway guidance for the UK job market',
        'Identification of UK-specific scholarship opportunities',
        'UK university entry requirements assessment',
      ],
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Application Support',
      description: 'We provide comprehensive support for your UK university applications. Our team ensures your personal statement and documents meet the high standards expected by British institutions.',
      features: [
        'UCAS and direct application assistance',
        'Personal statement (SOP) writing guidance',
        'CV optimization for UK academic standards',
        'Reference letter support',
        'Interview preparation for competitive UK courses',
      ],
    },
    {
      icon: <Plane className="h-10 w-10" />,
      title: 'UK Student Visa Assistance',
      description: 'Navigating the UK Student Visa (formerly Tier 4) process can be complex. Our visa specialists ensure a smooth application process with expert guidance on the latest Home Office requirements.',
      features: [
        'Step-by-step UK Student Visa guidance',
        'Standard documentation checklist and verification',
        'Financial requirement (bank statement) advice',
        'CAS (Confirmation of Acceptance for Studies) support',
        'Visa interview preparation and mock sessions',
      ],
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: 'Pre-Departure & Arrival',
      description: 'We prepare you for life in the UK with comprehensive pre-departure orientation, ensuring you\'re ready for your new journey in Britain.',
      features: [
        'UK accommodation search and booking assistance',
        'BRP (Biometric Residence Permit) collection guidance',
        'Pre-departure orientation and packing lists',
        'UK banking and NI number advice',
        'Cultural adaptation tips for life in the UK',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'UK Scholarships',
      description: 'Identify and apply for UK university and government scholarships.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'IELTS/English Prep',
      description: 'Guidance on English proficiency tests required for UK admissions.',
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Accommodation Search',
      description: 'Help finding student housing in major UK university cities.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Career Guidance',
      description: 'Advice on the Graduate Route (PSW) and UK job market.',
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Alumni Network',
      description: 'Connect with current students studying at UK universities.',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Post-Arrival Check-in',
      description: 'Ongoing support during your first weeks in the UK.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'A free session to understand your goals and assess your eligibility for UK study.',
      icon: <MessageSquare />,
    },
    {
      step: '02',
      title: 'University Selection',
      description: 'Selecting suitable UK universities based on your profile and budget.',
      icon: <Target />,
    },
    {
      step: '03',
      title: 'Application Submission',
      description: 'Expert help with your application and personal statement.',
      icon: <FileCheck />,
    },
    {
      step: '04',
      title: 'Offer & CAS',
      description: 'Receiving your offer and obtaining the CAS for your visa application.',
      icon: <Award />,
    },
    {
      step: '05',
      title: 'Visa Application',
      description: 'Step-by-step guidance for a successful UK Student Visa application.',
      icon: <Plane />,
    },
    {
      step: '06',
      title: 'Pre-Departure',
      description: 'Preparation for your journey and first few days in the UK.',
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
          <Reveal direction="up">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
              100% Free Consultancy for All Students
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Expert Services for Your
              <span className="text-yellow-400"> UK Education Journey</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From university selection to visa success, we provide dedicated end-to-end support to make your dream of studying in the UK a reality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Expert Guidance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Full Support at
              <span className="text-blue-600"> No Cost to You</span>
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
                <Reveal direction={index % 2 === 1 ? 'left' : 'right'} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div>
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
                </Reveal>

                <Reveal direction={index % 2 === 1 ? 'right' : 'left'} className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
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
                            {i === 1 ? 'Profile Match' : i === 2 ? 'Visa Success' : i === 3 ? 'Fast Process' : i === 4 ? 'Best Offers' : ''}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
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
              Your Path to a
              <span className="text-blue-600"> UK University</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Our proven process ensures a hassle-free journey from your first call to your first lecture in the UK.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Reveal key={index} direction="up" delay={(index * 100) as any}>
                <div
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group relative h-full"
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Our Trusted Model</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Completely Free for
                <span className="text-yellow-400"> International Students</span>
              </h2>
              <div className="space-y-6 text-blue-100">
                <p className="text-lg leading-relaxed">
                  EduQuest Consultancy is an official authorized representative of top UK universities. We are funded by our university partners, which allows us to offer our expert consultancy services absolutely free of charge to students.
                </p>
                <p className="text-lg leading-relaxed">
                  Our goal is to remove financial barriers and simplify the complexities of the UK admission process. We succeed only when you succeed, making us your most dedicated advocate during your application journey.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                  <p className="font-semibold">Zero Consultancy Fees</p>
                  <p className="text-sm text-blue-200">No upfront or hidden costs</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                  <p className="font-semibold">Official UK Partners</p>
                  <p className="text-sm text-blue-200">150+ UK university partners</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="/uk-campus.png"
                alt="Students on UK campus"
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
                Let's Start Your UK Application
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Ready to take the first step towards a UK degree? Book your free consultation with our UK specialists today.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
              >
                Start Free Consultation
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
