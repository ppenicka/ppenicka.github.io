"use client";
import { useContext } from "react";
import { SiteContext } from "@/context/context";

export const Blog1 = () => {
  const { dark, changeNav } = useContext(SiteContext);

  return (
    <div className="font-Open-sans mb-60">
      <p className="mb-28">
        When I first got into frontend development in 2020, frameworks like
        React, Vue.js, and Angular were already widely adopted as the de-facto
        standard. My experience therefore revolved around component-based
        architecture, modular code organization, and virtual DOM rendering.
        jQuery and raw DOM manipulation were more of a history lesson than an
        everyday practice.
      </p>

      <p className="mb-28">
        At the same time, when talking to more senior engineers throughout my
        initial years, it became obvious that their experience in the
        pre-framework era is one of the key differentiators that gives them a
        deeper understanding of the subject, making them better engineers as a
        result. So, when a client approached me to modernize an older codebase
        built primarily with jQuery and vanilla JavaScript utilizing the DOM
        API, I immediately saw a unique opportunity—not only to help them
        upgrade but also to fill the gaps in my own understanding of how
        frontend was done before the frameworks took over.
      </p>

      {/* H2 Heading using text-fs-26 for larger font */}
      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        1. Understanding the Challenge
      </h2>

      <p className="mb-28">
        Modernizing an old codebase can mean various things:
      </p>
      {/* Unordered List with bullet points and extra vertical margins */}
      <ul className="list-in-blog mb-28 list-disc my-6 pl-6 text-gray-700 dark:text-gray-300">
        <li className="mb-8">
          Migrating from jQuery-dependent scripts to a modern library or
          framework.
        </li>
        <li className="mb-8">
          Refactoring scattered DOM manipulation into more structured,
          component-like patterns.
        </li>
        <li className="mb-8">
          Introducing build tools, linting, testing, and other modern
          development practices.
        </li>
      </ul>

      <p className="mb-28">
        But before deciding on any path forward, I needed to fully grasp what
        was already in place. The code I encountered was developed in an era
        where lengthy JavaScript files—often several hundreds of lines
        long—handled every aspect of client-side interaction, from AJAX calls to
        DOM manipulation. jQuery was the backbone of this setup, powering
        everything from event handling to animations. While this approach can
        still work for smaller sites, it quickly becomes unwieldy on larger or
        more complex projects. This particular codebase suffered from that exact
        challenge.
      </p>

      {/* H2 Heading */}
      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        2. Diving into Legacy Code
      </h2>

      <p className="mb-28">
        Whenever I start on a new project, my go-to move is to open the code in
        my editor, examine the file structure, and look for clues about the
        overall organization. This time, I immediately noticed how all the
        JavaScript was crammed into a few large files—each overflowing with
        jQuery calls and direct DOM manipulations that seemed to handle every
        aspect of the UI. It was a stark contrast to the modular,
        component-driven patterns I’m used to seeing in modern React or Vue.js
        projects.
      </p>

      <p className="mb-28">
        Digging deeper, I discovered a few key observations:
      </p>
      {/* Unordered List */}
      <ul className="list-in-blog mb-28 list-disc list-inside my-6 pl-6 text-gray-700 dark:text-gray-300">
        <li className="mb-8">
          <strong>Event Handling:</strong> Pre-React workflows typically rely on
          direct DOM event listeners or jQuery’s <code>.on()</code> methods.
          Modern React apps, on the other hand, tuck these inside components,
          sometimes using hooks or prop drilling.
        </li>
        <li className="mb-8">
          <strong>DOM Manipulation:</strong> Without a virtual DOM or a
          state-driven rendering approach, the code frequently queried and
          updated the DOM in real time. It was a potent reminder of just how
          much work we offload to modern frameworks nowadays.
        </li>
        <li className="mb-8">
          <strong>Spaghetti Code:</strong> Because there wasn’t a clear
          separation of concerns, the HTML structure, styling hooks, and
          business logic often intermingled. Identifiers reappeared throughout,
          making it challenging to see how a single change might affect other
          parts of the application.
        </li>
      </ul>

      <p className="mb-28">
        While this legacy approach felt quite cumbersome compared to
        contemporary best practices, it also highlighted exactly why frameworks
        like React gained such widespread popularity: they address the very pain
        points I saw in this codebase. Manual DOM queries, scattered event
        bindings, and tightly coupled business logic and presentation all
        underscored the necessity for a more structured and declarative
        approach. By experiencing firsthand how things were done before, I came
        away with a deeper appreciation for how component-based architectures
        streamline maintenance, reduce complexity, and pave the way for future
        scalability.
      </p>

      {/* H2 Heading */}
      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        3. Planning the Modernization
      </h2>

      <p className="mb-28">
        One of my first decisions was to remove jQuery entirely. Although it
        served a purpose back in the day—particularly for DOM queries, event
        handling, and AJAX calls—modern browsers now handle these tasks natively
        without any additional library overhead. By doing away with jQuery, we
        eliminated an unnecessary dependency, streamlined the codebase, and
        could rely on a single, consistent set of modern APIs moving forward.
      </p>

      <p className="mb-28">Here’s how I approached the planning phase:</p>
      {/* Ordered List */}
      <ul className="list-in-blog mb-28 list-decimal pl-6 my-6 text-gray-700 dark:text-gray-300">
        <li className="mb-8">
          <strong>Assess the Business Requirements:</strong> I first needed to
          confirm which aspects of the application were mission-critical,
          ensuring I didn’t accidentally break core functionality during the
          refactoring process.
        </li>
        <li className="mb-8">
          <strong>Decide on a Framework (or Not):</strong> While I ultimately
          chose React for new feature development and scalable UI architecture,
          I also recognized that many of the existing jQuery calls could be
          replaced with pure DOM methods (e.g.,
          <code>document.querySelector</code>, <code>fetch</code>) for smaller,
          utility-level interactions.
        </li>
        <li className="mb-8">
          <strong>Identify Modular Boundaries:</strong> To keep the refactoring
          organized, I identified logical sections of the UI that could become
          self-contained. Some areas were better suited for a full React
          component refactor, while others only needed quick DOM manipulation.
        </li>
        <li className="mb-8">
          <strong>Adopt a Gradual Transition:</strong> Rather than tackle
          everything at once, I migrated features incrementally—swapping out
          jQuery for native DOM calls in smaller pieces, and introducing React
          components where it made sense. This approach let me validate each
          change before moving on to the next, reducing the likelihood of
          introducing new bugs.
        </li>
      </ul>

      <p className="mb-28">
        By removing jQuery and relying on modern APIs, I set the stage for a
        cleaner, more maintainable codebase that’s easier to extend—be it with
        React or any other technology the project might need in the future.
      </p>

      {/* H2 Heading */}
      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        4. The Refactoring Process
      </h2>

      <p className="mb-28">
        I’m not a fan of an all-or-nothing “big bang” approach, which often
        creates more risks and complexities than necessary. Instead, I
        modernized the codebase step by step:
      </p>

      {/* Ordered List */}
      <ul className="list-in-blog mb-28 list-decimal pl-6 my-6 text-gray-700 dark:text-gray-300">
        <li className="mb-8">
          <strong>Replace jQuery with Native DOM APIs:</strong> Wherever jQuery
          calls existed, I swapped them out for direct DOM queries (e.g.,{" "}
          <code>document.querySelector</code>) and the
          <code>fetch</code> API. This helped break the project’s reliance on an
          outdated library, making the code leaner and easier to maintain.
        </li>
        <li className="mb-8">
          <strong>Adopt TypeScript for Strong Typing:</strong> To boost
          reliability and catch potential errors earlier, I introduced
          TypeScript. I began gradually converting key JavaScript files to
          TypeScript, focusing on critical modules first. This allowed for
          better type checking, improved editor support, and more predictable
          refactoring as the project grew.
        </li>
        <li className="mb-8">
          <strong>Consolidate Redundant Logic:</strong> One challenge in legacy
          code is scattered, duplicated functions or utilities. I identified
          common patterns and merged them into centralized helper modules, which
          simplified maintenance and improved overall consistency. By
          establishing naming conventions along the way, the code became much
          more navigable for future changes.
        </li>
        <li className="mb-8">
          <strong>Incremental UI Updates:</strong> I tackled UI adjustments in
          small chunks—either with minimal native DOM manipulation where needed
          or by gradually bringing in modern practices, such as lightweight
          React components if suitable. This approach enabled me to verify each
          enhancement thoroughly before proceeding, maintaining a stable
          codebase throughout the refactoring process.
        </li>
      </ul>

      <p className="mb-28">
        By proceeding iteratively, I was able to confirm functionality at each
        step, mitigating the risk of major regressions and ensuring that each
        improvement built upon a solid foundation.
      </p>

      {/* H2 Heading */}
      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        5. Key Lessons Learned
      </h2>

      {/* H3 Headings using text-fs-26 for a slightly smaller font */}
      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        5.1 Respect for Legacy Approaches
      </h3>
      <p className="mb-28">
        Working with a jQuery-centric codebase was a humbling reminder of just
        how much manual effort goes into event handling, DOM manipulation, and
        maintaining UI state. It gave me a renewed appreciation for the
        developers who honed these skills before modern frameworks became the
        norm.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        5.2 Benefits of Modern Frameworks
      </h3>
      <p className="mb-28">
        Manually tracking UI state can be cumbersome, and that’s precisely where
        frameworks like React shine. State-driven rendering, modular components,
        and clear data flow patterns help large applications remain both
        organized and maintainable.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        5.3 Incremental Refactoring is Your Friend
      </h3>
      <p className="mb-28">
        Refactoring doesn’t have to be stressful or all-encompassing. By
        approaching it in small steps, you can stabilize each section of the
        application before proceeding, minimizing the risk of introducing new
        bugs or disrupting core functionality.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        5.4 Code Consistency &amp; Readability
      </h3>
      <p className="mb-28">
        In the process of stripping out jQuery and organizing the code, I
        discovered numerous small opportunities to standardize function names,
        reduce duplication, and make logic more transparent. These incremental
        improvements not only enhanced readability but also made the project
        easier to navigate for future maintainers.
      </p>

      {/* H2 Heading */}
      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        6. Conclusion
      </h2>

      <p className="mb-28">
        Refactoring a jQuery-era application into a modern React-based stack has
        been a journey through both past and present. While React and Vue.js
        dominate the conversation these days, I discovered there’s real value in
        understanding the manual DOM manipulation and event management patterns
        that came before. This broader perspective not only makes me a more
        adaptable engineer but also enhances my ability to troubleshoot complex
        legacy issues.
      </p>

      <p className="mb-28">
        For the client, the end result was a faster, more maintainable
        application—one that’s set up for smoother upgrades and future growth.
        For me, it was a chance to deepen my technical knowledge and sharpen my
        refactoring skills. As the industry continues to evolve, having a foot
        in both the old and new worlds helps me bridge the gap for clients who
        need to modernize without losing the core of what their applications
        were built to do.
      </p>

      <p className="mb-28">
        If you’d like to learn more about my experience with software
        modernization, frontend engineering best practices, or how I approach
        refactoring, feel free to{" "}
        <a className="font-bold" onClick={() => changeNav("contact")}>
          reach out
        </a>{" "}
        or explore my &nbsp;
        <a className="font-bold" onClick={() => changeNav("portfolio")}>
          portfolio
        </a>
        . I’m always open to connecting, sharing knowledge, and hearing about
        new challenges in the ever-changing landscape of web development.
      </p>
    </div>
  );
};
