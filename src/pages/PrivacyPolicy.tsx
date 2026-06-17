import { Shield, Eye, Lock, Globe, FileText, ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

const PrivacyPolicy = () => {
  const lastUpdated = 'June 13, 2026';

  const sections = [
    { id: 'collection', title: '1. Information We Collect' },
    { id: 'usage', title: '2. How We Use Your Information' },
    { id: 'sharing', title: '3. Information Sharing' },
    { id: 'security', title: '4. Data Security' },
    { id: 'retention', title: '5. Data Retention' },
    { id: 'rights', title: '6. Your Rights (GDPR/Data Laws)' },
    { id: 'cookies', title: '7. Cookies & Tracking' },
    { id: 'contact', title: '8. Contact Us' },
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
              <Shield className="h-4 w-4 mr-2 text-yellow-400" />
              Privacy Assurance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              How EduQuest Consultancy collects, uses, and safeguards your personal data.
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

            {/* Policy Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
                
                {/* Introduction Alert */}
                <div className="flex gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-blue-900">
                  <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Your Privacy Matters</h4>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      EduQuest Consultancy is committed to protecting the privacy and security of your personal information. This policy explains how we collect, process, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                    </p>
                  </div>
                </div>

                {/* Section 1 */}
                <section id="collection" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">1</span>
                    Information We Collect
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We collect personal information that is necessary to evaluate your eligibility, process your applications, and provide student visa guidance. This information includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                    <li><strong>Personal Identifiers:</strong> Full name, date of birth, gender, nationality, and passport details.</li>
                    <li><strong>Contact Information:</strong> Email address, phone number, and physical address.</li>
                    <li><strong>Academic History:</strong> Transcripts, certificates, diplomas, CV/resume, and English language test scores (IELTS, PTE, TOEFL, etc.).</li>
                    <li><strong>Supporting Documents:</strong> Personal statements, reference letters, and portfolio files.</li>
                    <li><strong>Financial Information:</strong> Bank statements, sponsorship details, and financial evidence required for visa applications.</li>
                    <li><strong>Other Details:</strong> History of visa applications and refusals, and immigration records.</li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="usage" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">2</span>
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We use your personal data for the following legitimate purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                    <li>Assessing your qualifications and suitability for courses at partner UK universities.</li>
                    <li>Filing and tracking your admission applications on your behalf.</li>
                    <li>Communicating with you regarding application updates, offers, and deadlines.</li>
                    <li>Providing guidance on CAS (Confirmation of Acceptance for Studies) and student visa requirements.</li>
                    <li>Improving our website, client relations, and delivery of consultancy services.</li>
                    <li>Meeting statutory requirements and responding to legal queries if necessary.</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section id="sharing" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">3</span>
                    Information Sharing
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We only share your personal data with third parties when necessary to fulfill our service commitments or where required by law:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                    <li><strong>UK Universities & Colleges:</strong> To submit your admissions applications and receive notifications.</li>
                    <li><strong>Internal Team Members:</strong> Staff at our London and Dhaka offices who support your application.</li>
                    <li><strong>Immigration/Visa Advisors:</strong> Regulated advisors assisting in visa review (with your explicit consent).</li>
                    <li><strong>Service Providers:</strong> IT and cloud hosting services that securely store our databases.</li>
                  </ul>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-green-900 text-sm flex gap-3">
                    <Eye className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800">
                      <strong>Our Promise:</strong> We never sell, lease, or rent your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="security" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">4</span>
                    Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, accidental loss, alteration, or disclosure.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our digital systems use standard data encryption, secure login credentials, and firewall protection. Physical files containing sensitive student documents are stored in secure cabinets at our offices with restricted access.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="retention" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">5</span>
                    Data Retention
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We keep your personal information only for as long as necessary to fulfill the purposes for which it was collected, including auditing, partner university contract terms, and statutory obligations.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Typically, we retain student application records for up to 6 years following the completion of your university registration or final interaction with us, after which records are securely destroyed.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="rights" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">6</span>
                    Your Legal Rights
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Under data protection laws, you have rights regarding your personal information, which include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                    <li><strong>Right of Access:</strong> Request a copy of the personal information we hold about you.</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete details.</li>
                    <li><strong>Right to Erasure:</strong> Request the deletion of your personal data ("right to be forgotten").</li>
                    <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
                    <li><strong>Right to Portability:</strong> Request transfer of your data to another service provider.</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent for processing at any time.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    If you wish to exercise any of these rights, please email us at [info@eduquestconsultancy.co.uk](mailto:info@eduquestconsultancy.co.uk).
                  </p>
                </section>

                {/* Section 7 */}
                <section id="cookies" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">7</span>
                    Cookies & Web Analytics
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our website uses cookies to improve user experience, monitor site performance, and analyze web traffic. Cookies are small text files placed on your device.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    You can configure your browser to block or alert you about cookies, although some parts of our site may not function properly without them.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="contact" className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-bold">8</span>
                    Contact Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions or complaints about this Privacy Policy or how we handle your personal data, please contact our data management officer:
                  </p>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-2 text-gray-700">
                    <p><strong>Company Name:</strong> EduQuest Consultancy (EDUQUEST CONSULTANTS LTD)</p>
                    <p><strong>Address:</strong> 53 Harts Lane, Barking, London, IG11 8NA, United Kingdom</p>
                    <p><strong>Email:</strong> <a href="mailto:info@eduquestconsultancy.co.uk" className="text-blue-600 hover:underline">info@eduquestconsultancy.co.uk</a></p>
                    <p><strong>Phone:</strong> +44 7301 793020</p>
                  </div>
                </section>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
