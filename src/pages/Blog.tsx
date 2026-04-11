import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const blogs = [
  {
    id: 'study-in-the-usa-guide',
    title: 'Study in the USA: The Ultimate Guide for International Students 2026',
    excerpt: 'Considering the United States for your higher education? Discover everything you need to know about top US universities, diverse courses, lucrative scholarships, and career opportunities for international students.',
    content: `
      <h2>Why International Students Choose to Study in the USA</h2>
      <p>The United States consistently leads the global education landscape, setting the gold standard for academic excellence, cutting-edge research, and flexible learning systems. For international students, the USA offers a transformative experience where state-of-the-art technology meets cultural diversity.</p>
      
      <h3>Key Advantages of US Education</h3>
      <ul>
        <li><strong>World-Class R&D:</strong> The USA leads in scientific and technological research facilities, offering students hands-on experience with the latest innovations.</li>
        <li><strong>Global Career Mobility:</strong> Degrees from American universities are highly revered worldwide, significantly widening your career prospects.</li>
        <li><strong>Academic Flexibility:</strong> The US education system allows you to explore different fields before specializing, ensuring a versatile learning experience.</li>
        <li><strong>Financial Support:</strong> Many universities provide robust scholarships, stipends, and loans specifically tailored for international scholars.</li>
        <li><strong>Campus Opportunities:</strong> Accessible on-campus student jobs help international students gain work experience and support their living costs.</li>
      </ul>

      <h2>Pathways to Study in the USA</h2>
      
      <h3>Study in USA After 12th (Undergraduate Studies)</h3>
      <p>Starting your journey right after high school is a popular choice. US universities offer a massive range of 4-year Bachelor’s programs in Science (STEM), Commerce, and the Arts. Even with a 12th-grade background, you can find flexible part-time and online options if you require scheduling versatility.</p>

      <h3>Pursuing a Master’s Degree in the USA</h3>
      <p>For those who have already completed a Bachelor’s in their home country, a Master’s in the USA typically takes 2 years. Requirements usually include a relevant undergraduate degree with strong academic results. Post-graduate studies here focus heavily on practical application and industry networking.</p>

      <h2>Top Courses for International Students</h2>
      <p>While Business and Management remain the top choices, Engineering, Computer Science, and Information Technology are rapidly growing. US universities are also pioneers in Natural and Social Sciences, supported by world-leading research hubs.</p>

      <h2>Top 10 Ranked Universities in the USA</h2>
      <p>According to the latest global rankings, these institutions represent the pinnacle of academic achievement:</p>
      <ol>
        <li>Massachusetts Institute of Technology (MIT)</li>
        <li>Stanford University</li>
        <li>Harvard University</li>
        <li>California Institute of Technology (Caltech)</li>
        <li>University of Chicago</li>
        <li>University of Pennsylvania</li>
        <li>Yale University</li>
        <li>Columbia University</li>
        <li>Princeton University</li>
        <li>Cornell University</li>
      </ol>

      <h2>Admission Requirements for US Universities</h2>
      <p>To secure your place in a top-ranking US institution, ensure you have the following ready:</p>
      <ul>
        <li><strong>Valid Passport:</strong> Essential for visa and enrollment processes.</li>
        <li><strong>Certified Transcripts:</strong> Verified copies of your 10th, 12th, and Bachelor’s marks.</li>
        <li><strong>English Proficiency:</strong> Scores from IELTS or TOEFL exams.</li>
        <li><strong>Entrance Exams:</strong> Standardized tests like GRE, GMAT, or SAT/ACT depending on the course.</li>
        <li><strong>Letters of Recommendation (LOR):</strong> Professional or academic references.</li>
        <li><strong>Statement of Purpose (SOP):</strong> A compelling essay detailing your goals and passion.</li>
      </ul>

      <h2>Scholarships to Study in the USA</h2>
      <p>Budget constraints shouldn't stop you from dreaming big. Popular scholarships include the Fulbright-Nehru Master’s Fellowship, Tata Scholarships for Cornell, and the American University Emerging Global Leader Scholarship.</p>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3>Featured Partner Institutions</h3>
        <p>Explore some of the renowned colleges and universities we partner with across the United States:</p>
        <div class="grid grid-cols-2 gap-4 text-sm mt-4">
          <ul class="list-none p-0">
            <li>• University of Massachusetts Boston</li>
            <li>• Pace University</li>
            <li>• Drexel University</li>
            <li>• Northeastern University</li>
            <li>• University of Cincinnati</li>
          </ul>
          <ul class="list-none p-0">
            <li>• Purdue University Northwest</li>
            <li>• University of Texas at Arlington</li>
            <li>• Ohio University</li>
            <li>• Valparaiso University</li>
            <li>• Webster University</li>
          </ul>
        </div>
      </div>
    `,
    image: '/usa-campus.png',
    date: 'April 10, 2026',
    author: 'EduQuest Team',
    category: 'Study Destinations',
  },
  {
    id: 'study-in-ireland-guide',
    title: 'Study in Ireland: Top Universities, Scholarships & Career Guide 2026',
    excerpt: 'Ireland is rapidly becoming a premier destination for global students. Explore top-ranked universities, in-demand courses, visa requirements, and the generous post-study work opportunities available in the Emerald Isle.',
    content: `
      <h2>Why Ireland is a Top Choice for International Students</h2>
      <p>Ireland, known for its rich history and stunning landscapes, is a modern hub of academic excellence. As one of the most friendly and safe countries in Europe, it offers international students a perfect blend of high-quality education and a vibrant cultural experience.</p>
      
      <h3>Key Reasons to Choose Ireland</h3>
      <ul>
        <li><strong>Global Tech & Finance Hub:</strong> Ireland hosts the European headquarters of major MNCs like Google, Meta, and Apple, providing exceptional networking and career opportunities.</li>
        <li><strong>European Gateway:</strong> Being part of Europe makes it incredibly easy for students to travel and explore other countries during their stay.</li>
        <li><strong>World-Class Research:</strong> Ireland is a global center for research and innovation, particularly in pharmaceuticals and deep tech.</li>
        <li><strong>Warm Hospitality:</strong> Irish people are famous for their friendly nature, ensuring that international students feel welcomed from day one.</li>
      </ul>

      <h2>Educational Degrees in Ireland</h2>
      <p>Whether you are pursuing an undergraduate or postgraduate degree, the Irish education system is respected worldwide for its rigorous standards.</p>
      
      <h3>Undergraduate (Bachelor's) Degrees</h3>
      <p>Bachelor's courses in Ireland typically last 3 to 4 years and cover a vast array of subjects, from traditional sciences to creative arts.</p>

      <h3>Master's Degrees in Ireland</h3>
      <p>A destination of choice for postgraduate study, Master's programs here are known for their high reputation. You generally require a relevant undergraduate degree to qualify for admission.</p>

      <h3>PhD Programs</h3>
      <p>A full-time PhD in Ireland usually takes 3-4 years and involves formal supervision and regular reviews by an academic panel, offering a structured path to advanced research.</p>

      <h2>Top Universities in Ireland</h2>
      <p>Ireland boasts 8 universities that are consistently ranked among the world’s best. Some of the most prestigious institutions include:</p>
      <ul>
        <li>Trinity College Dublin</li>
        <li>University College Dublin (UCD)</li>
        <li>National University of Ireland, Galway</li>
        <li>University College Cork (UCC)</li>
        <li>Dublin City University (DCU)</li>
        <li>University of Limerick</li>
      </ul>

      <h2>Most Popular Courses for International Students</h2>
      <p>The Irish education system excels in several key areas. Currently, the most in-demand fields are:</p>
      <ul>
        <li>Software Engineering & Computer Science</li>
        <li>Business Management & Finance</li>
        <li>Nursing & Physiotherapy</li>
        <li>Journalism & Mass Communication</li>
        <li>Psychology</li>
      </ul>

      <h2>Scholarships for Studying in Ireland</h2>
      <p>Generous funding is available to help support your education. Key scholarships include the Government of Ireland International Education Scholarships, the Walsh Fellowship, and university-specific merit awards.</p>

      <h2>Ireland Student Visa & Post-Study Work</h2>
      <p>To study in Ireland, you will need a valid student visa. Essential requirements include an acceptance letter from a recognized institution, proof of funds, and English proficiency certificates. <strong>Bonus:</strong> Master’s graduates can stay in Ireland for up to 2 years after graduation to work and build their careers!</p>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3>Our Partner Institutions in Ireland</h3>
        <p>EduQuest works closely with these leading institutions to simplify your application process:</p>
        <div class="grid grid-cols-2 gap-4 text-sm mt-4">
          <ul class="list-none p-0">
            <li>• South East Technological University (SETU)</li>
            <li>• Griffith College</li>
            <li>• Dundalk Institute of Technology</li>
            <li>• IBAT Dublin</li>
          </ul>
          <ul class="list-none p-0">
            <li>• American College Dublin</li>
            <li>• CCT Dublin</li>
            <li>• Galway Business School</li>
            <li>• Castel Education</li>
          </ul>
        </div>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=2670&auto=format&fit=crop',
    date: 'April 02, 2026',
    author: 'EduQuest Team',
    category: 'Study Destinations',
  },
  {
    id: 'study-in-canada-guide',
    title: 'Study in Canada: Top Universities, Costs, Scholarships & PGWP Guide 2026',
    excerpt: 'Dreaming of a future in Canada? Learn about the best Canadian universities, tuition fees, living costs, and how to stay back and work with the Post-Graduation Work Permit (PGWP).',
    content: `
      <h2>Why Canada is a Premier Destination for Global Students</h2>
      <p>Every year, Canada welcomes hundreds of thousands of international students to its world-class institutions. Known for its high academic standards, welcoming society, and exceptional career opportunities, Canada is much more than just a study destination—it is a place to build a life.</p>
      
      <h3>Key Benefits of Studying in Canada</h3>
      <ul>
        <li><strong>Safety and Inclusion:</strong> Canada is globally recognized as one of the safest and most non-discriminatory countries for international scholars.</li>
        <li><strong>High-Value Education:</strong> Canadian degrees are recognized and respected worldwide, ensuring your qualifications carry weight in Any market.</li>
        <li><strong>Multicultural Lifestyle:</strong> Experience a diverse, advanced lifestyle while gaining valuable international experience through student organizations.</li>
        <li><strong>Splendid Work Opportunities:</strong> From on-campus jobs to extensive post-study work permits, Canada supports your professional growth at every stage.</li>
      </ul>

      <h2>Top-Ranked Universities in Canada</h2>
      <p>Canada is home to several institutions that consistently rank in the global top 200. While the "Big Five" are highly competitive, the country offers high-quality education across both public and private institutions.</p>
      
      <h3>The Elite 5:</h3>
      <ol>
        <li>University of Toronto</li>
        <li>McGill University</li>
        <li>University of British Columbia (UBC)</li>
        <li>University of Montreal</li>
        <li>University of Alberta</li>
      </ol>

      <h2>Admission Requirements for Canadian Institutions</h2>
      <p>While requirements vary by program, most international applicants will need to provide:</p>
      <ul>
        <li><strong>Academic Transcripts:</strong> Certified mark sheets from all previous education levels.</li>
        <li><strong>Language Proficiency:</strong> Standard tests like IELTS or TOEFL.</li>
        <li><strong>Statement of Purpose (SOP):</strong> Detailing your career goals and reasons for choosing Canada.</li>
        <li><strong>Letters of Recommendation (LOR):</strong> To support your academic standing.</li>
      </ul>

      <h3>Can You Study in Canada Without IELTS?</h3>
      <p>Yes, many universities (like the University of Regina and University of Saskatchewan) offer pathways without IELTS if you have previously studied in an English-medium school for at least 4 years or can present alternative test scores like PTE or TOEFL.</p>

      <h2>Cost of Study and Living in Canada</h2>
      <p>Costs depend on your location and lifestyle, but here are the general averages for international students:</p>
      <ul>
        <li><strong>Undergraduate Tuition:</strong> Roughly CAD 11,500 to CAD 25,600 per year (STEM and Medical courses may be higher).</li>
        <li><strong>Master's Tuition:</strong> Generally lower, averaging around CAD 16,252 per year (excluding high-end MBA programs).</li>
        <li><strong>Living Expenses:</strong> Budget approximately CAD 15,000 annually for housing, groceries, and personal costs.</li>
      </ul>

      <h2>Scholarships for International Students</h2>
      <p>Funding opportunities are available through three main channels: <strong>Canadian Government Scholarships</strong> (like the Commonwealth Scholarship), <strong>Non-Government Awards</strong> (from trusts and companies), and <strong>University-specific Entry Scholarships</strong>.</p>

      <h2>Work While You Study & The PGWP</h2>
      <p>Canada offers some of the best work-study balance in the world:</p>
      <ul>
        <li><strong>Work During Studies:</strong> Most students with a valid permit can work up to 20 hours per week off-campus once their semester begins.</li>
        <li><strong>Post-Graduation Work Permit (PGWP):</strong> After graduating, you can obtain a permit to stay and work full-time in Canada for up to 3 years. This is a primary pathway for those looking to build a career and eventually apply for permanent residency.</li>
      </ul>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3>Our Featured Partner Universities in Canada</h3>
        <p>Start your Canadian journey with these popular institutions:</p>
        <div class="grid grid-cols-2 gap-4 text-sm mt-4">
          <ul class="list-none p-0">
            <li>• University of Saskatchewan</li>
            <li>• University of Regina</li>
            <li>• Acadia University</li>
            <li>• Royal Roads University</li>
          </ul>
          <ul class="list-none p-0">
            <li>• Trebas Institute</li>
            <li>• Focus College</li>
            <li>• Toronto Business College</li>
            <li>• Canadian College of Technology and Business</li>
          </ul>
        </div>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2670&auto=format&fit=crop',
    date: 'March 28, 2026',
    author: 'EduQuest Team',
    category: 'Study Destinations',
  },
  {
    id: 'study-in-germany-guide',
    title: 'Study in Germany: Top Universities, Free Education & Career Guide 2026',
    excerpt: 'Germany is a global powerhouse for engineering, technology, and affordable high-quality education. Discover top-ranked universities, English-taught programs, and how to study in Germany for free or at very low costs.',
    content: `
      <h2>Why Germany is a Global Leader for International Students</h2>
      <p>Germany has long been a top preferred destination for international students seeking prestigious academic qualifications without the heavy financial burden. With over 45 universities ranked among the world’s top 1000, Germany offers a unique combination of innovation, practical exposure, and affordability.</p>
      
      <h3>Key Reasons to Choose Germany</h3>
      <ul>
        <li><strong>Academic Excellence:</strong> Home to some of the world's most prestigious technical and research universities.</li>
        <li><strong>Highly Affordable Education:</strong> Tuition fees in Germany are significantly lower than in English-speaking countries, with many public universities offering nearly free education.</li>
        <li><strong>English-Taught Programs:</strong> A massive increase in English-led courses makes it easy for international students to excel without being fluent in German initially.</li>
        <li><strong>Research Powerhouse:</strong> Benefit from highly qualified professors and world-leading research facilities that prioritize practical exposure.</li>
        <li><strong>Multicultural Vibes:</strong> A perfect balance of academic rigor, pleasant weather, and a vibrant, diverse social scene.</li>
      </ul>

      <h2>Top-Ranked Universities in Germany</h2>
      <p>Whether you are interested in deep tech, business, or law, these elite institutions represent the best of German education:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul>
          <li>• Technical University of Munich (TUM)</li>
          <li>• Ruprecht-Karls-Universität Heidelberg</li>
          <li>• Ludwig-Maximilians-Universität München</li>
          <li>• Humboldt-Universität zu Berlin</li>
          <li>• KIT, Karlsruhe Institute of Technology</li>
        </ul>
        <ul>
          <li>• Technische Universität Berlin</li>
          <li>• RWTH Aachen University</li>
          <li>• Albert-Ludwigs-Universität Freiburg</li>
          <li>• Eberhard Karls Universität Tübingen</li>
          <li>• Freie Universität Berlin</li>
        </ul>
      </div>

      <h2>Language Requirements: English vs. German</h2>
      <p>To attract global talent, many German universities now offer courses entirely in <strong>English</strong>. While you can thrive in daily life with just English, learning basic German is highly recommended if you plan to work locally or stay long-term. Proof of proficiency is usually required via IELTS/TOEFL for English or TestDaF/Goethe for German programs.</p>

      <h2>Admission & Scholarship Opportunities</h2>
      <p>Admission is based on eligibility, language skills, and proof of sustainable funds. To ease the living costs, the <strong>DAAD (German Academic Exchange Service)</strong> offers extensive scholarships, alongside various government and university-specific funding schemes.</p>

      <h2>Top Student Cities in Germany</h2>
      <p>From the bustling capital to historic hubs, these cities offer the best student experiences:</p>
      <ul>
        <li><strong>Berlin:</strong> The multicultural capital and startup hub.</li>
        <li><strong>Munich:</strong> Famous for high tech and high quality of life.</li>
        <li><strong>Frankfurt:</strong> The financial heart of Continental Europe.</li>
        <li><strong>Other Hotspots:</strong> Dresden, Stuttgart, Bonn, and Hannover.</li>
      </ul>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3>Our Partner Institutions in Germany</h3>
        <p>We partner with several leading institutions to help you secure your future in Germany:</p>
        <div class="grid grid-cols-2 gap-4 text-sm mt-4">
          <ul class="list-none p-0">
            <li>• GISMA University of Applied Sciences</li>
            <li>• Berlin School of Business and Innovation (BSBI)</li>
            <li>• EU Business School</li>
            <li>• SRH University</li>
            <li>• CBS International Business School</li>
          </ul>
          <ul class="list-none p-0">
            <li>• IU International University</li>
            <li>• Lancaster University Leipzig</li>
            <li>• Munich Business School</li>
            <li>• GBS Berlin</li>
            <li>• FOM University</li>
          </ul>
        </div>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2670&auto=format&fit=crop',
    date: 'March 22, 2026',
    author: 'EduQuest Team',
    category: 'Study Destinations',
  },
  {
    id: 'study-in-the-uk-guide',
    title: 'Study in the UK: Top Universities, 2-Year Graduate Route & Full Guide',
    excerpt: 'The UK remains a global leader in education with historic universities and industry-focused degrees. Learn about the Russell Group, the 2-year post-study work visa, and cultural life in Britain.',
    content: `
      <h2>The Global Prestige of a UK Degree</h2>
      <p>Home to the world's most historic universities, the United Kingdom offers an unparalleled educational experience. Whether you're aiming for the ancient halls of Oxford and Cambridge or the innovative campuses in London and Manchester, a UK degree is a passport to a global career.</p>
      
      <h3>Why Choose the United Kingdom?</h3>
      <ul>
        <li><strong>Russell Group Excellence:</strong> Access 24 of the UK's leading research-intensive universities committed to maintaining the highest standards.</li>
        <li><strong>Graduate Route Visa:</strong> International students can stay and work in the UK for up to 2 years (3 years for PhDs) after graduation, making it a fantastic destination for career builders.</li>
        <li><strong>Condensed Courses:</strong> Most Master's degrees are just one year long, saving you time and tuition costs compared to other countries.</li>
        <li><strong>Cultural Diversity:</strong> Experience a rich heritage and a truly global society in cities like London, Edinburgh, and Cardiff.</li>
      </ul>

      <h2>Top Universities in the UK</h2>
      <p>The UK consistently dominates global rankings. Key institutions include:</p>
      <ul>
        <li>Oxford and Cambridge (Oxbridge)</li>
        <li>Imperial College London</li>
        <li>University College London (UCL)</li>
        <li>The University of Edinburgh</li>
        <li>King's College London</li>
        <li>Manchester, Leeds, and Bristol</li>
      </ul>

      <h2>The UK Admissions Process</h2>
      <p>For undergraduates, applications are primarily handled through <strong>UCAS</strong>. For postgraduates, you often apply directly to the university. Requirements typically include English proficiency (IELTS/PTE), a personal statement, and strong academic references.</p>

      <h2>Living as a Student in the UK</h2>
      <p>From the vibrant music scene in Manchester to the financial hub of London, student life in the UK is active and diverse. While London has a higher cost of living, cities in the North and in Wales/Scotland offer exceptional value for money without compromising on quality.</p>
    `,
    image: '/uk-guide.png',
    date: 'March 15, 2026',
    author: 'EduQuest Team',
    category: 'Study Destinations',
  },
  {
    id: 'study-in-australia-guide',
    title: 'Study in Australia: Top Universities, Lifestyle & Work Rights 2026',
    excerpt: 'Offering a perfect blend of high-quality education and a stunning outdoor lifestyle, Australia is a top choice for students. Explore the Group of Eight, scholarships, and post-study work rights.',
    content: `
      <h2>Excellence and Innovation Down Under</h2>
      <p>Australia has quickly climbed the ranks to become one of the top three study destinations in the world. With its innovative approach to teaching and globally recognized "Group of Eight" universities, it offers a future-forward education system set against a backdrop of natural beauty.</p>
      
      <h3>Key Advantages for International Students</h3>
      <ul>
        <li><strong>Group of Eight (Go8):</strong> Study at Australia's most prestigious research-intensive universities known for their high employability rates.</li>
        <li><strong>Post-Study Work Rights:</strong> Australia offers some of the most generous work rights in the world, allowing graduates to stay and gain experience in their field.</li>
        <li><strong>Incredible Quality of Life:</strong> Enjoy world-famous beaches, diverse wildlife, and some of the world's most liveable cities like Melbourne and Sydney.</li>
        <li><strong>Practical Learning:</strong> The Australian Vocational Education and Training (VET) system is world-leading, focusing on job-ready skills.</li>
      </ul>

      <h2>Leading Australian Universities</h2>
      <p>Australia's world-class institutions include:</p>
      <ul>
        <li>Australian National University (ANU)</li>
        <li>The University of Melbourne</li>
        <li>The University of Sydney</li>
        <li>The University of Queensland</li>
        <li>UNSW Sydney</li>
        <li>Monash University</li>
      </ul>

      <h2>Scholarships and Funding</h2>
      <p>The Australian government and local universities offer numerous scholarships, such as the <strong>Australia Awards</strong> and internal merit-based grants, to help international students manage their tuition and living expenses.</p>

      <h2>Student Visas and Requirements</h2>
      <p>The Subclass 500 visa is the standard for international students. You'll need a Confirmation of Enrolment (CoE), proof of Genuine Temporary Entrant (GTE) status, and Overseas Student Health Cover (OSHC) to qualify.</p>
    `,
    image: '/australia-guide.png',
    date: 'March 08, 2026',
    author: 'EduQuest Team',
    category: 'Study Destinations',
  }
];

const Blog = () => {
  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal direction="down">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Latest <span className="text-orange-400">Insights</span></h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Expert advice, student stories, and the latest news on studying abroad.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Reveal key={blog.id} direction="up" delay={(index * 100) as any} className="h-full">
              <Link to={`/blog/${blog.id}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {blog.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5 text-blue-600" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1.5 text-blue-600" />
                      {blog.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-blue-600 font-semibold group-hover:text-orange-500 transition-colors">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
