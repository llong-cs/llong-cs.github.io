'use client';
import { FaGithub, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import Image from "next/image";
import { useState } from 'react';
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

const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}\u{1F004}\u{1F0CF}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F201}-\u{1F251}\u{1F7E0}-\u{1F7EB}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1F978}\u{1F97A}-\u{1F9CB}\u{1F9CD}-\u{1F9FF}\u{1FA70}-\u{1FA74}\u{1FA78}-\u{1FA7A}\u{1FA80}-\u{1FA86}\u{1FA90}-\u{1FAA8}\u{1FAB0}-\u{1FAB6}\u{1FAC0}-\u{1FAC2}\u{1FAD0}-\u{1FAD6}\u{23E9}-\u{23F3}\u{23F8}-\u{23FA}\u{25AA}\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2614}\u{2615}\u{2648}-\u{2653}\u{267F}\u{2693}\u{26A1}\u{26AA}\u{26AB}\u{26BD}\u{26BE}\u{26C4}\u{26C5}\u{26CE}\u{26D4}\u{26EA}\u{26F2}\u{26F3}\u{26F5}\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270D}\u{270F}\u{2712}\u{2714}\u{2716}\u{271D}\u{2721}\u{2728}\u{2733}\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2763}\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{27BF}\u{2934}\u{2935}\u{2B05}-\u{2B07}\u{2B1B}\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E6}-\u{1F1FF}\u{1F201}-\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}-\u{1F251}\u{1F300}-\u{1F321}\u{1F324}-\u{1F393}\u{1F396}-\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F3F0}\u{1F3F3}-\u{1F3F5}\u{1F3F7}-\u{1F4FD}\u{1F4FF}-\u{1F53D}\u{1F549}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F56F}-\u{1F570}\u{1F573}-\u{1F57A}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F595}-\u{1F596}\u{1F5A4}-\u{1F5A5}\u{1F5A8}\u{1F5B1}-\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CB}-\u{1F6D2}\u{1F6D5}-\u{1F6D7}\u{1F6E0}-\u{1F6E5}\u{1F6E9}\u{1F6EB}-\u{1F6EC}\u{1F6F0}\u{1F6F3}-\u{1F6FC}\u{1F7E0}-\u{1F7EB}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1F978}\u{1F97A}-\u{1F9CB}\u{1F9CD}-\u{1F9FF}\u{1FA70}-\u{1FA74}\u{1FA78}-\u{1FA7A}\u{1FA80}-\u{1FA86}\u{1FA90}-\u{1FAA8}\u{1FAB0}-\u{1FAB6}\u{1FAC0}-\u{1FAC2}\u{1FAD0}-\u{1FAD6}]/gu;

function stripEmoji(text: string): string {
  return text.replace(emojiRegex, '').replace(/\s{2,}/g, ' ').trim();
}

function EyeOpenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeClosedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
      onClick={() => window.open(publication.link, '_blank')}
    >
      <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-[#e76f51] text-white">{publication.venue}</span>
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
        <p className="text-base">{experience.advisors.includes(',') ? 'Advisors' : 'Advisor'}: {experience.advisors}</p>
      </div>
      <p className="text-sm sm:text-base text-gray-600 sm:text-right sm:w-48 flex-shrink-0">{experience.period}</p>
    </div>
  );
}

function EventCard({ event, isColor }: { event: Event; isColor: boolean }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out">
      <div className="text-sm text-gray-500 font-medium">{event.date}</div>
      <div className="mt-1 text-gray-700">{isColor ? event.content : stripEmoji(event.content)}</div>
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
  const [isColor, setIsColor] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-100 text-gray-900 p-4 md:p-8 ${outfit.className} font-sans`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-sm px-4 md:px-8 py-4 flex justify-between items-center text-sm md:text-lg font-light">
        <button
          onClick={() => setIsColor(!isColor)}
          className="p-1.5 rounded-full hover:bg-gray-200/60 transition-colors duration-200"
          aria-label={isColor ? 'Switch to grayscale' : 'Switch to color'}
        >
          {isColor ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </button>
        <div className="flex space-x-3 md:space-x-6">
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
        </div>
      </nav>

      <div className="pt-20">
        {/* Profile Section */}
        <div id="about" className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <div className="relative w-48 md:w-1/4 aspect-square md:aspect-auto md:h-full overflow-hidden flex-shrink-0">
            <Image
              src={intro.avatarPath}
              alt={intro.name}
              width={400}
              height={400}
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-100 pointer-events-none" />
          </div>
          <div className="md:w-3/4 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">{intro.name} (<span className="inline-block"></span> <span className={`${calli.className} tracking-wider`}>{intro.chineseName}</span>)</h1>
            {intro.subtitle && <p className="text-gray-600 italic">{intro.subtitle}</p>}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-4 text-gray-700">
<a href={intro.github} className="flex items-center space-x-2 hover:text-gray-500 hover:-translate-y-0.5 transition-all duration-200"><FaGithub /> <span>Github</span></a>
              <a href={intro.googleScholar} className="flex items-center space-x-2 hover:text-gray-500 hover:-translate-y-0.5 transition-all duration-200"><FaGraduationCap /> <span>G-Scholar</span></a>
              <p className="flex items-center space-x-2"><FaEnvelope /> <span className="font-mono">{intro.email}</span></p>
            </div>
            <p className="mt-6 text-base text-gray-800 leading-relaxed">
              {isColor ? intro.bio : stripEmoji(intro.bio)}
              {isColor && <><br />{intro.acknowledgement}</>}
            </p>
          </div>
        </div>

        {/* Research Experience Section */}
        <hr className="max-w-4xl mx-auto mt-12 border-gray-300" />
        <div className="max-w-4xl mx-auto mt-8 space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{isColor && '🔬 '}Research Experience</h2>
          {researchExperiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>

        {/* Education Section */}
        <hr className="max-w-4xl mx-auto mt-12 border-gray-300" />
        <div className="max-w-4xl mx-auto mt-8 space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{isColor && '🎓 '}Education</h2>
          {educationExperiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>

        {/* What's New Section */}
        <hr className="max-w-4xl mx-auto mt-12 border-gray-300" />
        <div id="news" className="max-w-4xl mx-auto mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{isColor && '🔥 '}What&apos;s new?</h2>
          <div className="flex flex-col gap-4 max-h-80 overflow-y-auto overflow-x-hidden pr-2">
            {events.map((event, index) => (
              <EventCard key={index} event={event} isColor={isColor} />
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <hr className="max-w-4xl mx-auto mt-12 border-gray-300" />
        <div id="publications" className="max-w-4xl mx-auto mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{isColor && '📝 '}Publications & Preprints</h2>
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
