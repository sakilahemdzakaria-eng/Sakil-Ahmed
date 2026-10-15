import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const active = PROCESS_STEPS[currentStep];

  return (
    <section className="card bg-[#0a0a0a] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[460px]">
        <div>
          <h2 className="font-display text-[clamp(60px,10vw,140px)] m-0 mb-6 flex flex-col leading-none">
            {PROCESS_STEPS.map((step, idx) => (
              <span
                key={step.name}
                tabIndex={0}
                onMouseEnter={() => setCurrentStep(idx)}
                onFocus={() => setCurrentStep(idx)}
                onClick={() => setCurrentStep(idx)}
                className={`transition-colors duration-300 cursor-pointer outline-none select-none ${
                  currentStep === idx ? 'text-white' : 'text-[#3a3a3c] hover:text-[#777]'
                }`}
              >
                {step.name}
              </span>
            ))}
          </h2>
          <p className="text-[13px] text-[#cfcfd2] max-w-[380px] min-h-[90px] leading-relaxed">
            {active.description}
          </p>
        </div>

        {/* Dynamic color card */}
        <div
          className="rounded-[20px] aspect-[4/5] grid place-items-center text-center leading-none p-5 text-white shadow-2xl transition-all duration-300"
          style={{ backgroundColor: active.color }}
        >
          <div>
            <div className="font-display text-[clamp(50px,9vw,90px)] uppercase tracking-wider">
              {active.name}
            </div>
            <small className="block font-sans font-medium text-[13px] mt-3 tracking-normal opacity-90">
              Step {currentStep + 1} of 3
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};
