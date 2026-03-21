import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Building2, Globe, Users, DollarSign, Clock,
  CheckCircle, ArrowRight, Sparkles, MapPin, Star, Briefcase
} from 'lucide-react';

const Destinations = () => {
  const [activeDestination, setActiveDestination] = useState('uk');

  const destinations = {
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      tagline: 'World-Class Education & Rich Heritage',
      description: 'The UK is home to some of the world\'s most prestigious universities, including Oxford, Cambridge, and Imperial College. With a rich academic heritage spanning centuries, the UK offers a unique blend of traditional and modern education.',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop',
      stats: [
        { label: 'Universities', value: '150+' },
        { label: 'International Students', value: '600,000+' },
        { label: 'Global Ranking', value: '#2' },
        { label: 'Work Visa Duration', value: '2 Years' },
      ],
      highlights: [
        'Shorter degree duration (3 years undergraduate, 1 year masters)',
        'Post-Study Work Visa of up to 2 years',
        'World-renowned research facilities',
        'Multicultural environment',
        'Strong industry connections',
        'Rich cultural experiences',
      ],
      popularUniversities: [
        'University of Oxford',
        'University of Cambridge',
        'Imperial College London',
        'UCL (University College London)',
        'London School of Economics',
        'University of Edinburgh',
      ],
      popularCourses: [
        'Business & Management',
        'Computer Science',
        'Engineering',
        'Law',
        'Medicine',
        'Arts & Design',
      ],
      avgCost: '£15,000 - £35,000/year',
      livingCost: '£12,000 - £15,000/year',
    },
    usa: {
      name: 'United States',
      flag: '🇺🇸',
      tagline: 'Innovation Hub & Endless Opportunities',
      description: 'The USA boasts the largest number of top-ranked universities globally. With its emphasis on research, innovation, and practical learning, American education opens doors to world-class opportunities.',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=500&fit=crop',
      stats: [
        { label: 'Universities', value: '4,000+' },
        { label: 'International Students', value: '1M+' },
        { label: 'Global Ranking', value: '#1' },
        { label: 'OPT Duration', value: '1-3 Years' },
      ],
      highlights: [
        'Flexible curriculum with major/minor options',
        'Optional Practical Training (OPT) for work experience',
        'World-leading research opportunities',
        'Campus life and athletics culture',
        'Diverse program offerings',
        'Strong alumni networks',
      ],
      popularUniversities: [
        'Harvard University',
        'MIT',
        'Stanford University',
        'Columbia University',
        'Yale University',
        'University of Chicago',
      ],
      popularCourses: [
        'Computer Science & IT',
        'Business Administration',
        'Engineering',
        'Data Science',
        'Healthcare',
        'Communications',
      ],
      avgCost: '$30,000 - $60,000/year',
      livingCost: '$15,000 - $25,000/year',
    },
    canada: {
      name: 'Canada',
      flag: '🇨🇦',
      tagline: 'Quality Education & Immigration Friendly',
      description: 'Canada offers high-quality education at competitive costs with excellent post-study immigration pathways. Known for its welcoming attitude towards international students, Canada is a top choice for those seeking permanent residency.',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=500&fit=crop',
      stats: [
        { label: 'Universities', value: '100+' },
        { label: 'International Students', value: '800,000+' },
        { label: 'Global Ranking', value: '#4' },
        { label: 'PGWP Duration', value: 'Up to 3 Years' },
      ],
      highlights: [
        'Affordable tuition compared to US/UK',
        'Post-Graduation Work Permit (PGWP)',
        'Clear pathway to Permanent Residency',
        'Safe and welcoming environment',
        'Bilingual education options',
        'High quality of life',
      ],
      popularUniversities: [
        'University of Toronto',
        'McGill University',
        'University of British Columbia',
        'University of Alberta',
        'University of Waterloo',
        'Western University',
      ],
      popularCourses: [
        'Computer Science',
        'Business Analytics',
        'Engineering',
        'Healthcare',
        'Environmental Studies',
        'Agriculture',
      ],
      avgCost: 'CAD 20,000 - 40,000/year',
      livingCost: 'CAD 10,000 - 15,000/year',
    },
    australia: {
      name: 'Australia',
      flag: '🇦🇺',
      tagline: 'World-Class Research & Lifestyle',
      description: 'Australia offers a unique combination of high-quality education, excellent weather, and a relaxed lifestyle. With strong focus on research and practical skills, Australian degrees are highly valued globally.',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=500&fit=crop',
      stats: [
        { label: 'Universities', value: '43' },
        { label: 'International Students', value: '750,000+' },
        { label: 'Global Ranking', value: '#3' },
        { label: 'Work Visa', value: '2-4 Years' },
      ],
      highlights: [
        'Strong focus on employability',
        'Post-Study Work Visa (2-4 years)',
        'High quality of life',
        'Diverse and multicultural society',
        'Beautiful climate and nature',
        'Strong research output',
      ],
      popularUniversities: [
        'University of Melbourne',
        'University of Sydney',
        'Australian National University',
        'University of Queensland',
        'Monash University',
        'UNSW Sydney',
      ],
      popularCourses: [
        'Engineering',
        'Healthcare & Nursing',
        'Business & Accounting',
        'Information Technology',
        'Environmental Science',
        'Hospitality',
      ],
      avgCost: 'AUD 20,000 - 45,000/year',
      livingCost: 'AUD 21,000 - 25,000/year',
    },
    germany: {
      name: 'Germany',
      flag: '🇩🇪',
      tagline: 'Free Education & Engineering Excellence',
      description: 'Germany is famous for its tuition-free education at public universities. As Europe\'s economic powerhouse, it offers excellent opportunities in engineering, technology, and business.',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop',
      stats: [
        { label: 'Universities', value: '400+' },
        { label: 'International Students', value: '400,000+' },
        { label: 'Global Ranking', value: '#5' },
        { label: 'Job Seeker Visa', value: '18 Months' },
      ],
      highlights: [
        'Free or low tuition at public universities',
        'Strong industrial partnerships',
        'Excellent engineering programs',
        'Central European location',
        '18-month job seeker visa',
        'Growing English-taught programs',
      ],
      popularUniversities: [
        'Technical University of Munich',
        'LMU Munich',
        'Heidelberg University',
        'Humboldt University',
        'RWTH Aachen',
        'Free University of Berlin',
      ],
      popularCourses: [
        'Mechanical Engineering',
        'Automotive Engineering',
        'Computer Science',
        'Business Administration',
        'Natural Sciences',
        'Medicine',
      ],
      avgCost: '€0 - €3,000/year (public)',
      livingCost: '€10,000 - €12,000/year',
    },
    ireland: {
      name: 'Ireland',
      flag: '🇮🇪',
      tagline: 'Tech Hub & English-Speaking Europe',
      description: 'Ireland has emerged as Europe\'s tech hub, hosting headquarters of major tech companies. With its friendly culture, English language, and strong job market, it\'s an excellent choice for students.',
      image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&h=500&fit=crop',
      stats: [
        { label: 'Universities', value: '34' },
        { label: 'International Students', value: '35,000+' },
        { label: 'Global Ranking', value: '#8' },
        { label: 'Stay Back', value: '2 Years' },
      ],
      highlights: [
        'English-speaking EU country',
        'Hub for global tech companies',
        'Two-year post-study work visa',
        'Friendly and welcoming culture',
        'Strong pharmaceutical sector',
        'Gateway to Europe',
      ],
      popularUniversities: [
        'Trinity College Dublin',
        'University College Dublin',
        'University of Galway',
        'University College Cork',
        'Dublin City University',
        'University of Limerick',
      ],
      popularCourses: [
        'Computer Science',
        'Data Analytics',
        'Business & Finance',
        'Pharmaceutical Sciences',
        'Engineering',
        'Arts & Humanities',
      ],
      avgCost: '€10,000 - €25,000/year',
      livingCost: '€10,000 - €15,000/year',
    },
  };

  const destinationKeys = Object.keys(destinations) as Array<keyof typeof destinations>;
  const currentDest = destinations[activeDestination as keyof typeof destinations];

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
            <Globe className="h-4 w-4 mr-2 text-yellow-400" />
            200+ Partner Universities Worldwide
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Explore Top Study
            <span className="text-yellow-400"> Destinations</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover world-class education opportunities across the globe. We partner with leading universities to bring you the best options for your academic journey.
          </p>
        </div>
      </section>

      {/* Destination Tabs */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
            {destinationKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveDestination(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  activeDestination === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{destinations[key].flag}</span>
                {destinations[key].name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{currentDest.flag}</span>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Study in {currentDest.name}
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
            {/* Why Study Here */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Why Study Here</h3>
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

            {/* Top Universities */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Top Universities</h3>
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

            {/* Popular Courses */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
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
          </div>

          {/* Cost Information */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Cost of Studying in {currentDest.name}</h3>
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
                      <span className="font-medium">Living Expenses</span>
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
                  Get Free Counselling
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Destinations Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Compare Destinations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Quick Comparison of All
              <span className="text-blue-600"> Destinations</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 rounded-l-xl">Country</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Universities</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Avg. Tuition</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Living Cost</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Work Visa</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 rounded-r-xl">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {destinationKeys.map((key) => {
                  const dest = destinations[key];
                  return (
                    <tr key={key} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{dest.flag}</span>
                          <span className="font-medium text-gray-900">{dest.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{dest.stats[0].value}</td>
                      <td className="px-6 py-4 text-gray-600">{dest.avgCost}</td>
                      <td className="px-6 py-4 text-gray-600">{dest.livingCost}</td>
                      <td className="px-6 py-4 text-gray-600">{dest.stats[3].value}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => {
                            setActiveDestination(key);
                            window.scrollTo({ top: 400, behavior: 'smooth' });
                          }}
                          className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Destination is Right for You?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our expert counsellors can help you choose the perfect destination based on your profile, budget, and career goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
          >
            Get Personalized Advice
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
