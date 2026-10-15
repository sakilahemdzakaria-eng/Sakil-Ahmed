import React from 'react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section className="card !bg-transparent !px-0" id="skills">
      <h2 className="font-display text-[clamp(60px,12vw,170px)] m-0 mb-5 leading-none text-[#0a0a0a]">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2.5 mt-5">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="py-3.5 border-t border-dashed border-[#999]">
            <div className="flex justify-between font-medium text-sm text-[#0a0a0a]">
              <span>{skill.name}</span>
              <span className="font-bold">{skill.level}%</span>
            </div>
            <div className="h-1 bg-[#bbb] rounded-full mt-2.5 overflow-hidden">
              <div
                className="h-full bg-[#0a0a0a] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
