import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Building2, Globe, Users, DollarSign, Clock,
  CheckCircle, ArrowRight, Sparkles, MapPin, Star, Briefcase
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Destinations = () => {
  const destinations = {
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      tagline: 'World-Class Education & Excellence',
      description: 'The UK is the premier destination for international students, offering prestigious degrees that are recognized and valued globally. At EduQuest, we specialize in helping students from South Asia and Africa secure places at top-tier UK institutions.',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop',
      stats: [
        { label: 'Universities', value: '150+' },
        { label: 'International Students', value: '600,000+' },
        { label: 'Global Ranking', value: '#2' },
        { label: 'Work Visa Duration', value: '2 Years' },
      ],
      highlights: [
        'Shorter degree duration (3 years undergraduate, 1 year masters)',
        'Post-Study Work Visa of up to 2 years (Graduate Route)',
        'World-renowned research and teaching standards',
        'Multicultural and welcoming environment',
        'Strong industry links and employability',
        'Free healthcare via the NHS (with IHS)',
      ],
      popularUniversities: [
        'University of Manchester',
        'University of Birmingham',
        'University of Leeds',
        'King\'s College London',
        'University of Hertfordshire',
        'University of Greenwich',
      ],
      popularCourses: [
        'Business Administration & MBA',
        'Computer Science & Data Science',
        'Engineering (All Disciplines)',
        'Law & International Relations',
        'Public Health & Nursing',
        'Accounting & Finance',
      ],
      avgCost: '£12,000 - £25,000/year',
      livingCost: '£9,000 - £12,000/year',
    }
  };

  const currentDest = destinations.uk;

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
              <Globe className="h-4 w-4 mr-2 text-yellow-400" />
              Specialists in UK University Admissions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Study in the 
              <span className="text-yellow-400"> United Kingdom</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your journey to a world-class British education starts here. We partner with over 150+ leading UK universities to bring you the best options for your academic and career goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Destination Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <Reveal direction="right">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{currentDest.flag}</span>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Why the UK?
                    </h2>
                    <p className="text-blue-600 font-medium">{currentDest.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {currentDest.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {currentDest.stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src={currentDest.image}
                alt={currentDest.name}
                className="relative rounded-3xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Highlights */}
            <Reveal direction="up" delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Key Highlights</h3>
                </div>
                <ul className="space-y-3">
                  {currentDest.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Top Partner Universities */}
            <Reveal direction="up" delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Popular Partners</h3>
                </div>
                <ul className="space-y-3">
                  {currentDest.popularUniversities.map((uni, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Popular Courses */}
            <Reveal direction="up" delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Popular Courses</h3>
                </div>
                <ul className="space-y-3">
                  {currentDest.popularCourses.map((course, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Cost Information */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Cost of Studying in the UK</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-medium">Average Tuition</span>
                    </div>
                    <p className="text-2xl font-bold">{currentDest.avgCost}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">Estimated Living Cost</span>
                    </div>
                    <p className="text-2xl font-bold">{currentDest.livingCost}</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your UK Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our expert UK education consultants are ready to help you every step of the way, from choosing the right course to successful visa approval.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
