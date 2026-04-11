import { Link } from 'react-router-dom';
import {
  GraduationCap, Target, Eye, Heart, Award, Users, Globe, Building2,
  CheckCircle, ArrowRight, Sparkles, Shield, Clock, Handshake
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Student-Centric Approach',
      description: 'Every decision we make is guided by what\'s best for our students. Your success is our success.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integrity & Transparency',
      description: 'We provide honest advice and maintain complete transparency throughout the entire process.',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Excellence in Service',
      description: 'We strive for excellence in everything we do, ensuring the highest quality guidance and support.',
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Building Relationships',
      description: 'We build lasting relationships with students, universities, and partners based on trust.',
    },
  ];

  const milestones = [
    { year: '2018', title: 'Founded', description: 'EduQuest Consultancy was established in London with a mission to simplify UK university admissions for international students.' },
    { year: '2019', title: 'Bangladesh Office', description: 'Opened our Dhaka office to directly serve students across South Asia, particularly Bangladesh.' },
    { year: '2020', title: 'Digital Counselling', description: 'Launched virtual counselling services, enabling students to receive expert guidance from anywhere.' },
    { year: '2022', title: 'African Outreach', description: 'Extended our reach to Nigeria and Ghana, supporting students from West Africa in gaining UK university offers.' },
    { year: '2024', title: 'Partner University Network', description: 'Grew our network of UK university partners to provide students with a wide range of course options.' },
  ];

  const team = [
    {
      name: 'Dr. James Wilson',
      role: 'Founder & CEO',
      bio: '20+ years in international education',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Sarah Thompson',
      role: 'Head of UK Admissions',
      bio: 'Former university admissions officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Michael Chang',
      role: 'Senior Education Counsellor',
      bio: 'Expert in STEM programmes',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Emily Roberts',
      role: 'Visa & Immigration Specialist',
      bio: '10+ years visa processing experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: <Clock /> },
    { number: '15,000+', label: 'Students Placed', icon: <GraduationCap /> },
    { number: '200+', label: 'Partner Universities', icon: <Building2 /> },
    { number: '50+', label: 'Expert Counsellors', icon: <Users /> },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-20 -left-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="right">
              <div className="text-white">
                <span className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
                  <Award className="h-4 w-4 mr-2 text-yellow-400" />
                  UK Education Specialists
                </span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Transforming Dreams into
                  <span className="text-yellow-400"> Academic Journeys</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  EduQuest Consultancy UK based student recruitment agency helping international students (From South Asia,Africa,Europe) and local (UK Home) students gain admission to universities across the UK. We offer one to one support at every stage from choosing the right course to submitting strong applications and preparing to move-completely free for Students.
                </p>
              </div>
            </Reveal>

            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
                alt="Students celebrating"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white -mt-10 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Reveal key={index} direction="up" delay={(index * 100) as any}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl text-blue-600 mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  A Legacy of
                  <span className="text-blue-600"> Empowering Students</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    EduQuest Consultancy was founded in London with a clear purpose: to simplify and demystify the process of gaining admission to a UK university for students who may lack the knowledge, language skills, or resources to navigate the system independently.
                  </p>
                  <p>
                    We act as intermediaries between prospective international students — primarily from South Asia (Bangladesh, Pakistan, India), Africa (Nigeria, Ghana) and Europe — and UK universities. Our services cover every stage of the study-abroad journey, from course and university selection through to application, visa support, and pre-departure guidance.
                  </p>
                  <p>
                    Our services are completely free for students. We earn our revenue from commissions paid by our university partners, meaning there is never any cost to you. Our offices in London and Dhaka allow us to provide local, accessible support to students wherever they are.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=500&fit=crop"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal direction="right">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white h-full">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  To simplify and demystify the process of gaining admission to a UK university for international students — particularly those from South Asia, Africa and Europe — by providing free, expert, and personalised guidance from course selection through to pre-departure support.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 text-white h-full">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-purple-100 leading-relaxed text-lg">
                  To become the most trusted UK university admissions consultancy for students from South Asia, Africa and Europe — a place where every student, regardless of their background, has the support they need to unlock the opportunities that a UK education provides.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              The Principles That
              <span className="text-blue-600"> Guide Us</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">The core beliefs that shape every interaction and decision at EduQuest.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const gradients = [
                'from-blue-500 to-cyan-400',
                'from-indigo-500 to-purple-500',
                'from-amber-500 to-orange-400',
                'from-emerald-500 to-teal-400',
              ];
              return (
                <Reveal key={index} direction="up" delay={(index * 100) as any}>
                  <div className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group h-full border border-gray-100/80 overflow-hidden">
                    {/* Top gradient accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradients[index]} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                    {/* Large faded number */}
                    <span className="absolute top-4 right-5 text-7xl font-black text-gray-100 group-hover:text-blue-50 transition-colors duration-500 select-none leading-none">
                      0{index + 1}
                    </span>

                    {/* Icon */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center text-white mb-7 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {value.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative">{value.title}</h3>
                    <p className="text-gray-500 leading-relaxed relative">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Key Milestones in Our
              <span className="text-blue-600"> History</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <Reveal key={index} direction={index % 2 === 0 ? 'right' : 'left'} delay={(index * 150) as any}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg inline-block ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                        <span className="text-blue-600 font-bold text-2xl">{milestone.year}</span>
                        <h3 className="text-xl font-semibold text-gray-900 mt-2">{milestone.title}</h3>
                        <p className="text-gray-600 mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white z-10 shadow-lg shadow-blue-500/30">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Meet the Experts Behind
              <span className="text-blue-600"> Your Success</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Our dedicated team of experienced professionals is committed to guiding you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Reveal key={index} direction="up" delay={(index * 100) as any}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                    <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join students from South Asia, Africa and Europe who have achieved their dreams of studying in the UK with EduQuest Consultancy.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
          >
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
