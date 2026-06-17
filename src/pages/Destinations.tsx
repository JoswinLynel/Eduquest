import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  GraduationCap, Building2, Globe, Users, DollarSign, Clock,
  CheckCircle, ArrowRight, Sparkles, MapPin, Star, Briefcase,
  ShieldCheck, HeartPulse
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

const partnerUniversities = [
  // Universities with downloaded logos
  { name: 'Arden University',                     logo: '/uni-logos/arden.svg' },
  { name: 'Anglia Ruskin University',              logo: '/uni-logos/aru.jpg' },
  { name: 'University of Bolton',                  logo: '/uni-logos/uobm.jpg' },
  { name: 'QA Higher Education',                   logo: '/uni-logos/QAHE.png' },
  { name: 'London School of Management Education', logo: '/uni-logos/lsme.png' },
  { name: 'London College of Contemporary Arts',   logo: '/uni-logos/LCCA.png' },
  { name: 'London School of Science & Technology', logo: '/uni-logos/LSTT.png' },
  { name: 'David Game Higher Education',           logo: '/uni-logos/dghe.png' },
  { name: 'Regent College London',                 logo: '/uni-logos/rcl.png' },
  { name: 'Oxford International',                  logo: '/uni-logos/oxfordinternational.png' },
  { name: 'Victoria College of Arts and Design',   logo: '/uni-logos/vcad.webp' },
  { name: 'William College',                       logo: '/uni-logos/WC.png' },
  { name: 'LSC London',                            logo: '/uni-logos/lsc.svg' },
  { name: 'Fairfield School of Business',          logo: '/uni-logos/fsb.png' },
  { name: 'UK College of Commerce',                logo: '/uni-logos/ukcb.png' },
  { name: 'UK College of Business & Computing',    logo: '/uni-logos/ukcbc.png' },
  { name: 'The Language Gallery',                  logo: '/uni-logos/tlg.png' },
  { name: 'London College of Contemporary Music',  logo: '/uni-logos/lccm.png' },
  { name: 'University of Central Lancashire',      logo: '/uni-logos/ucll.png' },

  // Additional universities from the original list
  { name: 'University of Bedfordshire',            logo: '/uni-logos/beds.png' },
  { name: 'Abertay University',                    logo: '/uni-logos/abertay.png' },
  { name: 'University of Chester',                 logo: '/uni-logos/chester.png' },
  { name: 'University for the Creative Arts',      logo: '/uni-logos/uca.png' },
  { name: 'De Montfort University',                logo: '/uni-logos/dmu.png' },
  { name: 'Keele University',                      logo: '/uni-logos/keele.png' },
  { name: 'London South Bank University',          logo: '/uni-logos/lsbu.png' },
  { name: 'Middlesex University',                  logo: '/uni-logos/mdx.png' },
  { name: 'Northeastern University',               logo: '/uni-logos/northeastern.png' },
  { name: 'Northumbria University',                logo: '/uni-logos/northumbria.png' },
  { name: "Queen's University Belfast",            logo: '/uni-logos/qub.png' },
  { name: 'Solent University',                     logo: '/uni-logos/solent.svg' },
  { name: 'Ulster University',                     logo: '/uni-logos/ulster.svg' },
  { name: 'University of South Wales',             logo: '/uni-logos/southwales.svg' },
  { name: 'Wrexham University',                    logo: '/uni-logos/wrexham.svg' },
  { name: 'University of Portsmouth',              logo: '/uni-logos/portsmouth.svg' },
  { name: 'Coventry University',                   logo: '/uni-logos/coventry.svg' },
  { name: 'Canterbury Christ Church University',   logo: '/uni-logos/canterbury.svg' },
  { name: 'Falmouth University',                   logo: '/uni-logos/falmouth.svg' },
  { name: 'London Metropolitan University',        logo: '/uni-logos/londonmet.svg' },
  { name: 'University of Hull',                    logo: '/uni-logos/hull.svg' },
  { name: 'University of Law',                     logo: '/uni-logos/law.svg' },
  { name: 'University of Roehampton',              logo: '/uni-logos/roehampton.svg' },
  { name: 'University of Brighton',                logo: '/uni-logos/brighton.svg' },
  { name: 'University of Gloucestershire',         logo: '/uni-logos/glos.svg' },
  { name: 'Aston University',                      logo: '/uni-logos/aston.svg' },
  { name: 'BPP University',                        logo: '/uni-logos/bpp.svg' },
  { name: 'UWE Bristol',                           logo: '/uni-logos/uwe.svg' },
  { name: 'University of Hertfordshire',           logo: '/uni-logos/herts.svg' },
  { name: 'University of Greenwich',               logo: '/uni-logos/greenwich.png' },
  { name: 'University of Manchester',              logo: '/uni-logos/manchester.png' },
  { name: 'University of Birmingham',              logo: '/uni-logos/birmingham.png' },
];

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const initialCountry = searchParams.get('country') || 'uk';
  const [activeDestination, setActiveDestination] = useState(initialCountry);

  const destinations = {
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      tagline: 'World-Class Education & Excellence',
      description: 'The UK is the premier destination for international students, offering prestigious degrees that are recognized and valued globally. At EduQuest, we specialize in helping students from South Asia, Africa and Europe secure places at top-tier UK institutions.',
      image: '/london-summer.png',
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
        { name: 'Software Engineering', image: '/course-software.png' },
        { name: 'Engineering', image: '/course-engineering.png' },
        { name: 'HR Management', image: '/course-hr.png' },
        { name: 'Hospitality', image: '/course-hospitality.png' },
        { name: 'Cyber-security', image: '/course-cyber.png' },
        { name: 'Agriculture', image: '/course-agriculture.png' },
        { name: 'Law', image: '/course-law.png' },
        { name: 'Accounting & Finance', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop' },
      ],
      avgCost: '£12,000 - £25,000/year',
      livingCost: '£9,000 - £15,000/year',
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
        { name: 'Computer Science & IT', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop' },
        { name: 'Business Administration', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop' },
        { name: 'Engineering', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop' },
        { name: 'Data Science', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
        { name: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' },
        { name: 'Communications', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop' },
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
        { name: 'Computer Science', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop' },
        { name: 'Business Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
        { name: 'Engineering', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop' },
        { name: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' },
        { name: 'Environmental Studies', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop' },
        { name: 'Agriculture', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop' },
      ],
      avgCost: 'CAD 15,000 - 35,000/year',
      livingCost: 'CAD 12,000 - 18,000/year',
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
        { name: 'Engineering', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop' },
        { name: 'Healthcare & Nursing', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' },
        { name: 'Business & Accounting', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop' },
        { name: 'Information Technology', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop' },
        { name: 'Environmental Science', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop' },
        { name: 'Hospitality', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop' },
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
        { name: 'Mechanical Engineering', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop' },
        { name: 'Automotive Engineering', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop' },
        { name: 'Computer Science', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop' },
        { name: 'Business Administration', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop' },
        { name: 'Natural Sciences', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop' },
        { name: 'Medicine', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' },
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
        { name: 'Computer Science', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop' },
        { name: 'Data Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
        { name: 'Business & Finance', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop' },
        { name: 'Pharmaceutical Sciences', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop' },
        { name: 'Engineering', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop' },
        { name: 'Arts & Humanities', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop' },
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal direction="up">
              <span className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
                <Globe className="h-4 w-4 mr-2 text-yellow-400" />
                {currentDest.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Study in
                <span className="text-yellow-400"> {currentDest.name}</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {currentDest.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Country Selector Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 hide-scrollbar justify-center">
            {destinationKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveDestination(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 text-sm ${
                  activeDestination === key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <span className="text-lg">{destinations[key].flag}</span>
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
            <Reveal direction="right">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{currentDest.flag}</span>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Why {currentDest.name}?
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
                className="relative rounded-3xl shadow-xl w-full h-80 object-cover object-[center_30%]"
              />
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Key Highlights</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {currentDest.highlights.map((highlight, index) => {
                const highlightIcons = [Clock, Globe, Briefcase, ShieldCheck, HeartPulse, GraduationCap];
                const Icon = highlightIcons[index % highlightIcons.length];
                return (
                  <Reveal key={index} direction="up" delay={(index * 50) as any}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">{highlight}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>

        {/* Partner Universities Marquee - UK Only */}
        {activeDestination === 'uk' && (
        <div className="w-full mb-20 bg-white">
          <style>{`
            @keyframes scroll-logos {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .logos-track {
              animation: scroll-logos 100s linear infinite;
              display: flex;
              width: max-content;
              will-change: transform;
            }
            .logos-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="text-center py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/partners"
              className="group inline-flex items-center gap-2 text-3xl font-bold text-gray-900 hover:text-blue-700 transition-colors duration-200"
            >
              Our Partner Universities
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-gray-500 mt-2">We work with trusted institutions across the UK</p>
          </div>

          {/* Top border */}
          <div className="h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 mb-2" />

          {/* Marquee strip */}
          <div className="relative overflow-hidden bg-white py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Single track with logos doubled for seamless loop */}
            <div className="logos-track">
              {/* First set */}
              {partnerUniversities.map((partner, index) => (
                <div
                  key={`a-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 mx-2 border-r border-gray-100"
                  style={{ width: '220px', height: '140px' }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    style={{ maxHeight: '110px', maxWidth: '180px', objectFit: 'contain' }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerUniversities.map((partner, index) => (
                <div
                  key={`b-${index}`}
                  aria-hidden
                  className="flex-shrink-0 flex items-center justify-center px-8 mx-2 border-r border-gray-100"
                  style={{ width: '220px', height: '140px' }}
                >
                  <img
                    src={partner.logo}
                    alt=""
                    style={{ maxHeight: '110px', maxWidth: '180px', objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom border */}
          <div className="h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 mt-2 mb-8" />
        </div>
        )}



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* New Popular Courses Grid */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Popular Courses</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentDest.popularCourses.map((course, index) => (
                <Reveal key={index} direction="up" delay={(index * 50) as any}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100/50">
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center bg-gray-50/50">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">{course.name}</h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
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
