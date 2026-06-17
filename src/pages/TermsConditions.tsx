import { FileText, Scale, ShieldAlert, BookOpen, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

const TermsConditions = () => {
  const lastUpdated = 'June 13, 2026';

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'services', title: '2. Services Provided' },
    { id: 'student-obligations', title: '3. Student Obligations' },
    { id: 'fees-commissions', title: '4. Fees & Commissions' },
    { id: 'visas-admissions', title: '5. Admissions & Visas' },
    { id: 'intellectual-property', title: '6. Intellectual Property' },
    { id: 'limitation-liability', title: '7. Limitation of Liability' },
    { id: 'governing-law', title: '8. Governing Law' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-20 -left-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
              <Scale className="h-4 w-4 mr-2 text-yellow-400" />
              Legal Agreements
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our consultancy services.
            </p>
            <p className="text-sm text-blue-200/80 mt-2">
              Last Updated: {lastUpdated}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10">
            
            {/* Sidebar Navigation */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleScrollTo(section.id)}
                      className="w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all font-medium block"
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Terms Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
                
                {/* Intro Alert */}
                <div className="flex gap-4 bg-amber-50 border border-amber-100 rounded-2xl p-6 text-amber-900">
                  <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Agreement of Terms</h4>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      By accessing our website and utilizing the services of EduQuest Consultancy, you agree to comply with and be bound by the following terms and conditions. If you do not agree, please do not use our services.
                    </p>
                  </div>
                </div>

                {/* Section 1 */}
                <section id="introduction" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">1</span>
                    Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    EduQuest Consultancy ("we", "us", "our") is a student recruitment consultancy providing advice and guidance to international and domestic students seeking admission to universities and colleges in the United Kingdom.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms & Conditions govern your use of our website ([eduquestconsultancy.co.uk](https://eduquestconsultancy.co.uk)) and our offline services, including academic counselling, application processing, personal statement support, and visa guidance.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="services" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">2</span>
                    Services Provided
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We offer a range of support services to assist students in their educational journey:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                    <li>Evaluating your academic background and shortlisting suitable UK universities and courses.</li>
                    <li>Guiding you on entry requirements, English language tests, and key documentation.</li>
                    <li>Processing and submitting applications on your behalf to partner institutions.</li>
                    <li>Providing feedback on personal statements, resumes, and portfolios.</li>
                    <li>Conducting mock interview sessions and assisting with student visa preparations.</li>
                    <li>Assisting with pre-departure logistics, accommodation references, and university bank setup guides.</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section id="student-obligations" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">3</span>
                    Student Obligations
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    As a student utilizing our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                    <li>Provide complete, accurate, and truthful information and documentation at all stages.</li>
                    <li>Disclose any history of visa refusals, criminal records, or previous academic issues.</li>
                    <li>Adhere to deadlines set by us and partner universities.</li>
                    <li>Pay all university fees, visa application costs, and healthcare surcharges directly to the respective authorities.</li>
                  </ul>
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-red-900 text-sm flex gap-3">
                    <ShieldAlert className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800">
                      <strong>Warning:</strong> Submitting fraudulent documents or misleading information may lead to the cancellation of your application, denial of visa, and reporting to relevant immigration authorities.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="fees-commissions" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">4</span>
                    Fees & Commissions
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our counselling and application guidance services are **completely free** for students. We do not charge students for our advice or help in applying.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We receive commission payments directly from our partner UK universities after a student successfully registers and commences their studies.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="visas-admissions" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">5</span>
                    Admissions & Visas Disclaimer
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    While we make every effort to assist you in securing a university offer and student visa:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                    <li>The final decision regarding admissions rests solely with the universities.</li>
                    <li>The final decision regarding visa applications rests solely with UK Visas and Immigration (UKVI).</li>
                    <li>We cannot guarantee acceptance into any university or the approval of any visa.</li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="intellectual-property" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">6</span>
                    Intellectual Property
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    All website content, design, logos, graphics, and text are the property of EduQuest Consultancy and are protected by international copyright laws. Any unauthorized use or reproduction is strictly prohibited.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="limitation-liability" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">7</span>
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    EduQuest Consultancy shall not be liable for any direct, indirect, incidental, or consequential losses or damages arising out of your use of our services, including but not limited to academic failure, rejection by universities, or visa refusal.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="governing-law" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">8</span>
                    Governing Law
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </p>
                </section>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
