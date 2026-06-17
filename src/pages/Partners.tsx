import { useState } from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';
import { Reveal } from '../components/Reveal';

interface Uni {
  name: string;
  logo: string;
  website: string;
  fallbackLetter?: string;
  fallbackColor?: string;
}

const partnerUniversities: Uni[] = [
  // Universities with downloaded logos
  { name: 'Arden University',                     logo: '/uni-logos/arden.svg',               website: 'https://arden.ac.uk' },
  { name: 'Anglia Ruskin University',              logo: '/uni-logos/aru.jpg',                 website: 'https://aru.ac.uk' },
  { name: 'University of Bolton',                  logo: '/uni-logos/uobm.jpg',                website: 'https://bolton.ac.uk' },
  { name: 'QA Higher Education',                   logo: '/uni-logos/QAHE.png',                website: 'https://qa.com/higher-education' },
  { name: 'London School of Management Education', logo: '/uni-logos/lsme.png',                website: 'https://lsme.ac.uk' },
  { name: 'London College of Contemporary Arts',   logo: '/uni-logos/LCCA.png',                website: 'https://lcca.org.uk' },
  { name: 'London School of Science & Technology', logo: '/uni-logos/LSTT.png',                website: 'https://lsst.ac' },
  { name: 'David Game Higher Education',           logo: '/uni-logos/dghe.png',                website: 'https://dghe.ac.uk' },
  { name: 'Regent College London',                 logo: '/uni-logos/rcl.png',                 website: 'https://rcl.ac.uk' },
  { name: 'Oxford International',                  logo: '/uni-logos/oxfordinternational.png',  website: 'https://oxfordinternational.com' },
  { name: 'Victoria College of Arts and Design',   logo: '/uni-logos/vcad.webp',               website: 'https://vcad.ac.uk' },
  { name: 'William College',                       logo: '/uni-logos/WC.png',                  website: 'https://williamcollege.ac.uk' },
  { name: 'LSC London',                            logo: '/uni-logos/lsc.svg',                 website: 'https://lsclondon.co.uk' },
  { name: 'Fairfield School of Business',          logo: '/uni-logos/fsb.png',                 website: 'https://fsb.ac.uk' },
  { name: 'UK College of Commerce',                logo: '/uni-logos/ukcb.png',                website: 'https://ukcollege.ac.uk' },
  { name: 'UK College of Business & Computing',    logo: '/uni-logos/ukcbc.png',               website: 'https://ukcbc.ac.uk' },
  { name: 'The Language Gallery',                  logo: '/uni-logos/tlg.png',                 website: 'https://thelanguagegallery.com' },
  { name: 'London College of Contemporary Music',  logo: '/uni-logos/lccm.png',               website: 'https://lccm.org.uk' },
  { name: 'University of Central Lancashire',      logo: '/uni-logos/ucll.png',                website: 'https://uclan.ac.uk' },

  // Additional universities from the original list
  { name: 'University of Bedfordshire',            logo: '/uni-logos/beds.png',           website: 'https://beds.ac.uk' },
  { name: 'Abertay University',                    logo: '/uni-logos/abertay.png',        website: 'https://abertay.ac.uk' },
  { name: 'University of Chester',                 logo: '/uni-logos/chester.png',        website: 'https://chester.ac.uk' },
  { name: 'University for the Creative Arts',      logo: '/uni-logos/uca.png',            website: 'https://uca.ac.uk' },
  { name: 'De Montfort University',                logo: '/uni-logos/dmu.png',            website: 'https://dmu.ac.uk' },
  { name: 'Keele University',                      logo: '/uni-logos/keele.png',          website: 'https://keele.ac.uk' },
  { name: 'London South Bank University',          logo: '/uni-logos/lsbu.png',           website: 'https://lsbu.ac.uk' },
  { name: 'Middlesex University',                  logo: '/uni-logos/mdx.png',            website: 'https://mdx.ac.uk' },
  { name: 'Northeastern University',               logo: '/uni-logos/northeastern.png',   website: 'https://northeastern.edu' },
  { name: 'Northumbria University',                logo: '/uni-logos/northumbria.png',    website: 'https://northumbria.ac.uk' },
  { name: "Queen's University Belfast",            logo: '/uni-logos/qub.png',            website: 'https://qub.ac.uk' },
  { name: 'Solent University',                     logo: '/uni-logos/solent.svg',         website: 'https://solent.ac.uk' },
  { name: 'Ulster University',                     logo: '/uni-logos/ulster.svg',         website: 'https://ulster.ac.uk' },
  { name: 'University of South Wales',             logo: '/uni-logos/southwales.svg',     website: 'https://southwales.ac.uk' },
  { name: 'Wrexham University',                    logo: '/uni-logos/wrexham.svg',        website: 'https://wrexham.ac.uk' },
  { name: 'University of Portsmouth',              logo: '/uni-logos/portsmouth.svg',     website: 'https://port.ac.uk' },
  { name: 'Coventry University',                   logo: '/uni-logos/coventry.svg',       website: 'https://coventry.ac.uk' },
  { name: 'Canterbury Christ Church University',   logo: '/uni-logos/canterbury.svg',     website: 'https://canterbury.ac.uk' },
  { name: 'Falmouth University',                   logo: '/uni-logos/falmouth.svg',       website: 'https://falmouth.ac.uk' },
  { name: 'London Metropolitan University',        logo: '/uni-logos/londonmet.svg',      website: 'https://londonmet.ac.uk' },
  { name: 'University of Hull',                    logo: '/uni-logos/hull.svg',           website: 'https://hull.ac.uk' },
  { name: 'University of Law',                     logo: '/uni-logos/law.svg',            website: 'https://law.ac.uk' },
  { name: 'University of Roehampton',              logo: '/uni-logos/roehampton.svg',     website: 'https://roehampton.ac.uk' },
  { name: 'University of Brighton',                logo: '/uni-logos/brighton.svg',       website: 'https://brighton.ac.uk' },
  { name: 'University of Gloucestershire',         logo: '/uni-logos/glos.svg',           website: 'https://glos.ac.uk' },
  { name: 'Aston University',                      logo: '/uni-logos/aston.svg',          website: 'https://aston.ac.uk' },
  { name: 'BPP University',                        logo: '/uni-logos/bpp.svg',            website: 'https://bpp.com' },
  { name: 'UWE Bristol',                           logo: '/uni-logos/uwe.svg',            website: 'https://uwe.ac.uk' },
  { name: 'University of Hertfordshire',           logo: '/uni-logos/herts.svg',          website: 'https://herts.ac.uk' },
  { name: 'University of Greenwich',               logo: '/uni-logos/greenwich.png',      website: 'https://gre.ac.uk' },
  { name: 'University of Manchester',              logo: '/uni-logos/manchester.png',     website: 'https://manchester.ac.uk' },
  { name: 'University of Birmingham',              logo: '/uni-logos/birmingham.png',     website: 'https://bham.ac.uk' },
];

const UniCard = ({ uni }: { uni: Uni }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <a
      href={uni.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[160px]"
    >
      {imgFailed ? (
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 text-2xl font-black"
          style={{
            backgroundColor: (uni.fallbackColor ?? '#1e3a5f') + '20',
            color: uni.fallbackColor ?? '#1e3a5f',
          }}
        >
          {uni.fallbackLetter ?? uni.name.charAt(0)}
        </div>
      ) : (
        <img
          src={uni.logo}
          alt={uni.name}
          onError={() => setImgFailed(true)}
          className="max-h-14 max-w-full object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <span className="text-xs text-center text-gray-500 font-medium leading-tight group-hover:text-blue-600 transition-colors duration-200 px-1">
        {uni.name}
      </span>
      <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-blue-500 mt-2 transition-colors duration-200" />
    </a>
  );
};

const Partners = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm font-semibold mb-6 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              Our Network
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Partner Universities
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              EduQuest works with 100+ trusted universities and institutions across the UK and beyond.
              Browse our partners and find the right institution for you.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <p className="text-gray-400 text-sm mb-10 text-center">
            {partnerUniversities.length} partner institutions — click any to visit their official website
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {partnerUniversities.map((uni, index) => (
            <Reveal key={index}>
              <UniCard uni={uni} />
            </Reveal>
          ))}

          {/* More partners card */}
          <Reveal>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-dashed border-blue-200 min-h-[160px]">
              <span className="text-3xl font-black text-blue-600 mb-1">100+</span>
              <span className="text-xs text-center text-blue-500 font-semibold">Partner Institutions</span>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 text-center bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Don't see your preferred university?</h2>
            <p className="text-gray-500 mb-6 max-w-xl mx-auto">
              We're constantly expanding our network. Contact us and we'll help you find the right path to your dream institution.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Partners;
