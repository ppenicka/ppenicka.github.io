"use client";
import { useContext } from "react";
import { SiteContext } from "@/context/context";

export const Blog3 = () => {
  const { dark, changeNav } = useContext(SiteContext);

  return (
    <div className="font-Open-sans mb-60">
      <p className="mb-28">
        When I transitioned to freelancing nearly a year ago, I was excited
        about the possibilities but also aware of the uncertainties. Would I be
        able to consistently find projects? Would I enjoy working independently
        as much as I imagined? Could I continue growing professionally without
        the structured career paths of a traditional company?
      </p>

      <p className="mb-28">
        Now, as I reflect on my first year as a freelancer, I realize just how
        much I’ve learned—not just about managing projects and clients, but
        about adaptability, personal growth, and the evolving nature of work
        itself. The experience has given me a fresh perspective on my career and
        equipped me with valuable skills that apply to any professional setting,
        whether independent or within an organization.
      </p>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        1. Adapting to Different Work Styles
      </h2>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        1.1 Navigating Diverse Client Expectations
      </h3>
      <p className="mb-28">
        One of the most valuable skills I’ve gained as a freelancer is the
        ability to quickly adapt to different work styles. Every client operates
        differently—some prefer detailed documentation and structured workflows,
        while others favor a more agile, fast-paced approach. Learning to
        navigate these varying expectations has strengthened my ability to
        communicate clearly, manage priorities effectively, and integrate
        seamlessly into different teams and project structures.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        1.2 Managing Time and Productivity
      </h3>
      <p className="mb-28">
        Without the structure of a traditional office environment, I had to
        develop strong time management habits and self-discipline. I
        experimented with different productivity techniques, from time blocking
        to prioritization frameworks, to ensure I stayed on track without
        micromanagement or rigid schedules.
      </p>
      <p className="mb-28">
        This experience reinforced an important lesson: productivity isn’t about
        working longer hours but about structuring time effectively. Whether in
        a freelance or corporate setting, the ability to manage tasks
        efficiently, balance multiple projects, and maintain focus is key to
        long-term success.
      </p>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        2. Broadening My Technical Skill Set
      </h2>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        2.1 Exposure to a Variety of Technologies
      </h3>
      <p className="mb-28">
        One of the aspects I’ve enjoyed most about freelancing is the exposure
        to a diverse range of projects, codebases, and technologies. Since I’m
        not tied to a single product or tech stack, I’ve had the opportunity to
        work on both greenfield projects and legacy modernization, switching
        between frameworks like Vue.js, React, and Next.js depending on the
        project’s needs.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        2.2 Keeping Up with Emerging Trends
      </h3>
      <p className="mb-28">
        With the rapid evolution of AI and modern development practices, staying
        up to date is more important than ever. Freelancing has allowed me to
        explore new technologies as they emerge, whether integrating AI-driven
        solutions, experimenting with fresh methodologies, or optimizing
        workflows with automation.
      </p>
      <p className="mb-28">
        Unlike in structured organizations, where technology adoption often
        follows a set roadmap, freelancing gives me the flexibility to set up my
        own processes and immediately implement new tools that enhance
        productivity and efficiency. This level of autonomy has encouraged me to
        be more proactive in research and innovation, a habit that I believe is
        just as valuable in any team environment where staying ahead of industry
        trends is a priority.
      </p>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        3. Learning to Manage Uncertainty
      </h2>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        3.1 Handling Financial Variability
      </h3>
      <p className="mb-28">
        Unlike a salaried position, freelance income can fluctuate, which
        initially felt like a challenge. Fortunately, I started out with a
        high-workload client, and by my third month, I had already tripled my
        previous monthly earnings—an eye-opening realization of freelancing’s
        potential. However, as that initial project came to an end, I faced the
        reality of securing new clients, a process that required persistence,
        networking, and strategic planning.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        3.2 Managing Multiple Projects and Priorities
      </h3>
      <p className="mb-28">
        Freelancing often involves juggling multiple clients and projects, each
        with its own timelines, requirements, and workflows. Learning to
        navigate these complexities has strengthened my ability to manage
        competing priorities, set clear expectations, and ensure deliverables
        are met on time.
      </p>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        5. Closing Thoughts
      </h2>

      <p className="mb-28">
        After a year of freelancing, I’ve gained not only technical experience
        but also valuable lessons in adaptability, communication, and strategic
        thinking. This journey has reinforced the importance of continuous
        learning, taking ownership, and staying flexible in an ever-changing
        industry.
      </p>

      <p className="mb-28">
        Regardless of the work model, success ultimately comes down to
        problem-solving, collaboration, and delivering meaningful results.
        Looking ahead, I’m excited to keep growing, refining my skills, and
        embracing the opportunities that come next.
      </p>

      <p className="mb-28">
        Curious to hear more about my journey or discuss opportunities? Feel
        free to{" "}
        <a
          className="font-bold cursor-pointer"
          onClick={() => changeNav("contact")}
        >
          reach out
        </a>{" "}
        or explore my{" "}
        <a
          className="font-bold cursor-pointer"
          onClick={() => changeNav("portfolio")}
        >
          portfolio
        </a>
        . I’m always open to connecting, sharing knowledge, and discussing the
        future of work in tech.
      </p>
    </div>
  );
};
