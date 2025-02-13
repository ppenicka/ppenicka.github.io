"use client";
import { useContext } from "react";
import { SiteContext } from "@/context/context";

export const Blog2 = () => {
  const { dark, changeNav } = useContext(SiteContext);

  return (
    <div className="font-Open-sans mb-60">
      <p className="mb-28">
        When I first stepped into the world of frontend engineering, React was
        the hot technology everyone was talking about and migrating to. As
        someone new to the frontend game, I adopted it as a foundational part of
        my stack, immersing myself in virtual DOM rendering, JSX syntax, and
        unidirectional data flows. As my career progressed, however, changing
        employers introduced me to
        <strong> Vue.js </strong> and its server-side sibling,{" "}
        <strong> Nuxt.js </strong>— where I discovered a similar yet distinctly
        flavored way of building component-based UIs. Today, I often switch
        between React, Vue.js, and modern SSR solutions like{" "}
        <strong> Next.js </strong> and <strong> Nuxt.js </strong>. Through this
        cross-framework journey, I’ve come to realize that React and Vue.js
        share far more common ground than many people assume: once you grasp the
        fundamentals in one, you’re already halfway to mastering the other.
      </p>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        1. My Personal Timeline
      </h2>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        First Year: ManoMano with React
      </h3>
      <p className="mb-28">
        I launched my engineering career at ManoMano, where React reigned
        supreme. From day one, I was immersed in JSX, functional components, and
        unidirectional data flow patterns—alongside community-driven solutions
        like
        <strong> React Router </strong> for routing and <strong> Redux </strong>{" "}
        for state management. Because this was my first professional engineering
        role, I assumed these techniques were simply how modern frontend
        development was done. Looking back, I’m grateful that my first employer
        adopted such a cutting-edge stack; it meant I got to learn best
        practices from the very start.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        Second to Fourth Year: Glovo with Vue.js and Nuxt.js
      </h3>
      <p className="mb-28">
        After a year at ManoMano, an unexpected email from Glovo landed in my
        inbox—a compelling offer I couldn’t refuse. The only catch was the need
        to become proficient with <strong> Vue.js </strong> shortly after
        joining. I saw it as a unique opportunity and embraced the challenge.
        Initially, single-file components in <code>.vue</code> felt unfamiliar,
        but I quickly recognized the same core principles of component
        hierarchy, reactivity, and modular design. Within a week, I was writing
        my first components confidently; a couple of weeks later, I’d reached
        the same productivity level I had with React. This was a pivotal “aha”
        moment, showing me that differences between frontend technologies aren’t
        as drastic as they might appear and that strong fundamentals enable
        rapid switching.
      </p>
      <p className="mb-28">
        Toward the end of my time at Glovo, I led a project to migrate a courier
        onboarding website from WordPress to a modern <strong> Nuxt.js </strong>
        -based stack with static site rendering and Prismic CMS integration.
        This experience underscored how frameworks like Nuxt.js (and by
        extension Next.js) streamline the development of even relatively simple
        websites.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        Fifth Year: Slash.digital, Pura Design, and Switching Between Vue.js,
        React, Nuxt.js, and Next.js
      </h3>
      <p className="mb-28">
        Currently, I juggle multiple projects: <strong> Vue.js/Nuxt.js </strong>{" "}
        at Slash.digital, <strong> React/Next.js </strong> at Pura Design, and
        this very portfolio site (plus other personal projects) in{" "}
        <strong> Next.js </strong>. Although it might sound hectic, switching
        between React and Vue.js is surprisingly straightforward once you
        understand their shared principles around state management, lifecycle
        hooks, and component-driven UIs. Thanks to these similarities, I
        experience minimal friction when context-switching, allowing me to serve
        my clients’ needs—no matter which framework they prefer.
      </p>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        2. Similarities Between React and Vue.js
      </h2>
      <p className="mb-28">
        Despite having distinct syntaxes and tooling, React and Vue.js share a
        foundation that makes it easy to jump from one to the other:
      </p>

      <ul className="list-in-blog mb-28 list-decimal pl-6 my-6 text-gray-700 dark:text-gray-300">
        <li className="mb-8">
          <strong>Virtual DOM &amp; Reactive Rendering</strong>
          <br />
          Both frameworks use a virtual DOM to track changes to the
          application’s state, only re-rendering the parts that actually change.
          <ul className="list-disc list-inside ml-6 my-2">
            <li>
              <strong>React:</strong> Relies on state or prop updates to trigger
              re-renders.
            </li>
            <li>
              <strong>Vue.js:</strong> Uses a more granular reactivity system,
              but the outcome—“change data, update UI”—remains the same.
            </li>
          </ul>
        </li>
        <li className="mb-8">
          <strong>Component-Centric Architecture</strong>
          <br />
          Both React and Vue.js emphasize small, reusable components to manage
          state, handle logic, and render UIs.
          <ul className="list-disc list-inside ml-6 my-2">
            <li>
              <strong>React:</strong> Integrates markup with logic via JSX (or
              TSX).
            </li>
            <li>
              <strong>Vue.js:</strong> Single-file components break out
              templates, scripts, and styles, but the fundamentals—“props in,
              events out”— mirror React’s approach.
            </li>
          </ul>
        </li>
        <li className="mb-8">
          <strong>Robust Ecosystems</strong>
          <br />
          No matter which framework you pick, you’ll find well-established,
          well-documented tools for routing, state management, testing, and
          server-side rendering.
          <ul className="list-disc list-inside ml-6 my-2">
            <li>
              <strong>React:</strong> React Router, Redux, Jest, Next.js.
            </li>
            <li>
              <strong>Vue.js:</strong> Vue Router, Vuex (or Pinia), Vitest/Jest,
              Nuxt.js.
            </li>
          </ul>
        </li>
        <li className="mb-8">
          <strong>Modern Toolchains</strong>
          <br />
          Both frameworks integrate seamlessly with bundlers, build tools, and
          TypeScript. React offers Create React App or Next.js; Vue.js offers
          the Vue CLI or Nuxt.js. This keeps setup time short and paves the way
          for hot reloading, ES modules, and code splitting.
        </li>
      </ul>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        3. Diving Deeper: Differences in Syntax and Approach
      </h2>
      <p className="mb-28">
        Even with their shared philosophies, React and Vue.js take distinct
        paths on a few details:
      </p>

      <ul className="list-in-blog mb-28 list-decimal pl-6 my-6 text-gray-700 dark:text-gray-300">
        <li className="mb-8">
          <strong>Templating vs. JSX</strong>
          <br />
          <strong>React:</strong> Embraces JSX, blending HTML-like syntax with
          JavaScript for maximum flexibility.
          <br />
          <strong>Vue.js:</strong> Primarily uses templates with directives like
          <code className="mx-1">v-if</code>,<code className="mx-1">v-for</code>
          , and
          <code className="mx-1">v-bind</code>. While the Composition API
          supports a JSX approach, templates remain the default.
        </li>
        <li className="mb-8">
          <strong>Reactivity Models</strong>
          <br />
          <strong>React:</strong> Hooks like
          <code className="mx-1">useState</code> and
          <code className="mx-1">useEffect</code> manage local state and side
          effects, re-rendering the entire component on state change.
          <br />
          <strong>Vue.js:</strong> Monitors reactive data at a granular level,
          re-rendering only the affected components. The Composition API (
          <code className="mx-1">setup</code>) may look like React hooks, but
          reactivity is still built into Vue’s core.
        </li>
        <li className="mb-8">
          <strong>State Management</strong>
          <br />
          <strong>React:</strong> Often relies on external libraries—Redux,
          Recoil, or MobX—for global state.
          <br />
          <strong>Vue.js:</strong> Tends to use Vuex or Pinia, which integrate
          closely with the core framework. Both share the principle of a single
          source of truth for data across components.
        </li>
        <li className="mb-8">
          <strong>Opinionated vs. Unopinionated</strong>
          <br />
          <strong>React:</strong> Encourages you to build your own conventions
          or adopt community-driven standards.
          <br />
          <strong>Vue.js:</strong> Provides official solutions (Vuex, Vue
          Router) and, via Nuxt.js, offers an opinionated structure for file
          organization and server-side rendering.
        </li>
      </ul>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        4. Lessons Learned in My Cross-Framework Journey
      </h2>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        4.1 Master the Basics
      </h3>
      <p className="mb-28">
        Regardless of framework, the essential skills—HTML, CSS, JavaScript, and
        a solid grasp of core web APIs—make transitioning between React and
        Vue.js far less intimidating. Strong fundamentals are what truly matter.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        4.2 Embrace SSR Solutions
      </h3>
      <p className="mb-28">
        <strong>Nuxt.js</strong> for Vue.js and <strong>Next.js</strong> for
        React both streamline server-side rendering. They solve similar
        problems: improved SEO, faster initial loads, and structured
        data-fetching approaches. Knowing one makes learning the other
        straightforward.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        4.3 Adapt Patterns, Don’t Reinvent Them
      </h3>
      <p className="mb-28">
        React developers may lean on Redux or Context, while Vue.js developers
        often use Vuex or Pinia. The names change, but the principle—managing
        global state efficiently—remains the same. Embrace that mental model,
        and the syntax switch becomes trivial.
      </p>

      <h3 className="mt-8 mb-3 text-fs-21 font-bold text-gray-800 dark:text-gray-100">
        4.4 Explore Official and Community Tools
      </h3>
      <p className="mb-28">
        Vue.js’s core team maintains Vue Router and Vuex, while React’s
        equivalents tend to be community-driven (e.g., Redux, React Router).
        Both ecosystems are robust; experimenting with different solutions
        reinforces your understanding of how each framework operates.
      </p>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        5. Where I Am Now
      </h2>
      <p className="mb-28">
        Between my roles at Slash.digital (<strong>Vue.js/Nuxt.js</strong>) and
        Pura Design (React), alongside building this blog in{" "}
        <strong>Next.js</strong>, I’ve discovered the flexibility that comes
        from working with multiple frameworks. Once you’ve spent significant
        time with both, toggling between them is more about small syntax
        differences than re-learning architectural principles. These
        cross-framework insights also reveal patterns—like how SSR simplifies
        SEO or how centralized stores reduce prop-drilling—regardless of which
        ecosystem you use.
      </p>

      <h2 className="mb-20 mt-35 text-fs-26 font-bold text-gray-800 dark:text-gray-100">
        6. Conclusion
      </h2>
      <p className="mb-28">
        Having spent time with React at ManoMano, Vue.js at Glovo, and now
        Nuxt.js and Next.js in my later years, I’m convinced React and Vue.js
        are more alike than different. Their core philosophies—component-driven
        design, reactive rendering, and an active ecosystem—remain consistent.
        Syntax is merely the wrapping paper.
      </p>
      <p className="mb-28">
        If you’ve mastered one of these frameworks, you have a significant head
        start in learning the other. The real skills—structuring your app,
        managing state effectively, and building maintainable components—apply
        across both ecosystems. That’s what makes modern frontend development so
        exciting: once you learn the patterns, you can pick up new tools without
        starting from scratch.
      </p>
      <p className="mb-28">
        Curious about more of my experiences switching between Vue.js and React?
        Feel free to{" "}
        <a className="font-bold" onClick={() => changeNav("contact")}>
          drop me a message
        </a>{" "}
        or explore my{" "}
        <a className="font-bold" onClick={() => changeNav("portfolio")}>
          portfolio
        </a>
        . I’m always up for discussing how these frameworks overlap, diverge,
        and ultimately shape our ever-evolving landscape of web development.
      </p>
    </div>
  );
};
