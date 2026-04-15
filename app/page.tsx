'use client';
import { FaGithub, FaEnvelope, FaGraduationCap, FaFileAlt } from 'react-icons/fa';
import Image from "next/image";
import localFont from 'next/font/local'
import { publications, type Publication } from '@/data/publications';
import { events, type Event } from '@/data/events';
import { researchExperiences, educationExperiences, type Experience } from '@/data/experiences';
import { intro } from '@/data/intro';

const outfit = localFont({
  src: [
    {
      path: '../public/fonts/Outfit-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Outfit-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Outfit-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Outfit-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  display: 'swap',
});

const calli = localFont({
  src: '../public/fonts/ChunLianXingShuZiTi-1.ttf',
  variable: '--font-calli'
})

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
      onClick={() => window.open(publication.link, '_blank')}
    >
      <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-gray-800 text-white">{publication.venue}</span>
      <div className="mt-2 text-gray-700">
        <span className="font-medium">{publication.title}</span>
        <br />
        <span dangerouslySetInnerHTML={{ __html: publication.authors }} />
      </div>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-white rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
        <Image
          src={experience.logo}
          alt={`${experience.organization} Logo`}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold">{experience.organization}</h3>
        <p className="text-base text-gray-600">{experience.role}</p>
        <p className="text-base">Advisors: {experience.advisors}</p>
      </div>
      <p className="text-sm sm:text-base text-gray-600 sm:text-right sm:w-48 flex-shrink-0">{experience.period}</p>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out">
      <div className="text-sm text-gray-500 font-medium">{event.date}</div>
      <div className="mt-1 text-gray-700">{event.content}</div>
    </div>
  );
}

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  const offset = 80;
  const elementPosition = element?.getBoundingClientRect().top ?? 0;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-100 text-gray-900 p-4 md:p-8 ${outfit.className} font-sans`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-sm px-4 md:px-8 py-4 flex justify-end space-x-3 md:space-x-6 text-sm md:text-lg font-light">
        {['about', 'news', 'publications', 'misc'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
            className="relative hover:text-gray-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            {section === 'about' ? 'About' : section === 'news' ? 'News' : section === 'publications' ? 'Publication' : 'Misc.'}
          </a>
        ))}
      </nav>

      <div className="pt-20">
        {/* Profile Section */}
        <div id="about" className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative w-48 md:w-1/4 aspect-square md:aspect-auto md:h-full overflow-hidden rounded-xl flex-shrink-0">
            <Image
              src={intro.avatarPath}
              alt={intro.name}
              width={400}
              height={400}
              priority
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="md:w-3/4 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">{intro.name} (<span className="inline-block"></span> <span className={`${calli.className} tracking-wider`}>{intro.chineseName}</span>)</h1>
            {intro.subtitle && <p className="text-gray-600 italic">{intro.subtitle}</p>}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-4 text-gray-700">
              <a href={intro.cvPath} target="_blank" className="flex items-center space-x-2 hover:text-gray-500 hover:-translate-y-0.5 transition-all duration-200"><FaFileAlt /> <span>CV</span></a>
              <a href={intro.github} className="flex items-center space-x-2 hover:text-gray-500 hover:-translate-y-0.5 transition-all duration-200"><FaGithub /> <span>Github</span></a>
              <a href={intro.googleScholar} className="flex items-center space-x-2 hover:text-gray-500 hover:-translate-y-0.5 transition-all duration-200"><FaGraduationCap /> <span>G-Scholar</span></a>
              <p className="flex items-center space-x-2"><FaEnvelope /> <span className="font-mono">{intro.email}</span></p>
            </div>
            <p className="mt-6 text-base text-gray-800 leading-relaxed">
              {intro.bio} <br />
              {intro.acknowledgement}
            </p>
          </div>
        </div>

        {/* Research Experience Section */}
        <hr className="max-w-4xl mx-auto mt-12 border-gray-300" />
        <div className="max-w-4xl mx-auto mt-8 space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">🔬 Research Experience</h2>
          {researchExperiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>

        {/* Education Section */}
        <hr className="max-w-4xl mx-auto mt-12 border-gray-300" />
        <div className="max-w-4xl mx-auto mt-8 space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">🎓 Education</h2>
          {educationExperiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>

        {/* What's New Section */}
        <hr className="max-w-4xl mx-auto mt-12 border-gray-300" />
        <div id="news" className="max-w-4xl mx-auto mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">🔥 What&apos;s new?</h2>
          <div className="flex flex-col gap-4 max-h-80 overflow-y-auto overflow-x-hidden pr-2">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <hr className="max-w-4xl mx-auto mt-12 border-gray-300" />
        <div id="publications" className="max-w-4xl mx-auto mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">📝 Publications & Preprints</h2>
          <p className="text-sm text-gray-600 mb-4">(* denotes equal contribution)</p>
          <div className="flex flex-col gap-4">
            {publications.map((pub, index) => (
              <PublicationCard key={index} publication={pub} />
            ))}
          </div>
        </div>

        {/* Misc Section */}
        <div id="misc" className="max-w-4xl mx-auto mt-12">
        </div>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto mt-16 mb-4 pt-6 border-t border-gray-300 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {intro.name}. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
