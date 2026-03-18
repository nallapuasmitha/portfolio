import { motion } from "motion/react";
import { Code2, GraduationCap, Mail, Github, Linkedin, Terminal, Cpu, Database, ChevronRight, ExternalLink } from "lucide-react";

const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-sm font-medium text-zinc-700">
    {name}
  </span>
);

const ProjectCard = ({ title, description, tags }: { title: string, description: string, tags: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4">
      <Terminal className="text-white w-5 h-5" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">AP.</span>
          <div className="flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-6 uppercase tracking-widest">
              Available for Internships
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Asmitha <br />
              <span className="text-zinc-400">Priyani</span>
            </h1>
            <p className="text-xl text-zinc-600 max-w-xl mb-10 leading-relaxed">
              B.Tech 3rd Year Student & Software Enthusiast. 
              Passionate about solving complex problems through clean code and efficient algorithms.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-all flex items-center gap-2">
                View Projects <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 px-4">
                <Github className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-zinc-200 rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/asmitha/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-white border border-zinc-200 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Education</p>
                  <p className="font-bold">B.Tech 3rd Year</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              I am currently pursuing my Bachelor of Technology, now in my third year. My journey in technology started with a curiosity about how software works, which evolved into a deep-seated passion for coding.
            </p>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              I specialize in core programming languages and enjoy the challenge of building scalable applications. Whether it's backend logic in Java or data processing in Python, I strive for excellence in every line of code.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-zinc-400" /> Languages
                </h4>
                <p className="text-sm text-zinc-500">Python, Java, C++, SQL</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-zinc-400" /> Interests
                </h4>
                <p className="text-sm text-zinc-500">Algorithms, Web Dev, AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
            <p className="text-zinc-500">The tools and languages I use to bring ideas to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl">
              <div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Terminal className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Python" />
                <SkillBadge name="Java" />
                <SkillBadge name="C++" />
                <SkillBadge name="C" />
              </div>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl">
              <div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Database className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Backend & Data</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="MySQL" />
                <SkillBadge name="Data Structures" />
                <SkillBadge name="Algorithms" />
                <SkillBadge name="OOPs" />
              </div>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl">
              <div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Cpu className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Other Tools</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Git" />
                <SkillBadge name="VS Code" />
                <SkillBadge name="Linux" />
                <SkillBadge name="Problem Solving" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
              <p className="text-zinc-500">A glimpse into my coding journey.</p>
            </div>
            <button className="text-sm font-bold border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-300 transition-all">
              View All Github
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Algorithm Visualizer"
              description="A web-based tool to visualize sorting and pathfinding algorithms built with Python and React."
              tags={["Python", "React", "Algorithms"]}
            />
            <ProjectCard 
              title="Library Management"
              description="A robust desktop application for managing library records with a clean Java Swing interface."
              tags={["Java", "MySQL", "Swing"]}
            />
            <ProjectCard 
              title="System Monitor"
              description="A low-level system resource monitoring tool developed in C++ for performance tracking."
              tags={["C++", "Systems", "CLI"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-zinc-900 rounded-[40px] p-12 md:p-20 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Let's build something <br />
            <span className="text-zinc-500">extraordinary together.</span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-lg mx-auto">
            I'm currently looking for internship opportunities where I can contribute and grow. 
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:nallapuasmitha@gmail.com" className="px-8 py-4 bg-white text-zinc-900 rounded-2xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-2">
              Get in Touch <ChevronRight className="w-4 h-4" />
            </a>
            <div className="flex gap-6">
              <Github className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-400">
        <p>© 2026 Asmitha Priyani. Built with passion and code.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Dribbble</a>
        </div>
      </footer>
    </div>
  );
}
