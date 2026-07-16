import React from "react";
import GuideTitle from "../components/GuideTitle";
import CodeBlock from "../components/CodeBlock";

const ReactPage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="h-[89vh] flex py-6 lg:py-12 bg-bg border-t border-surface2">
        <div className="w-3/12 h-full flex flex-col items-center border-r border-surface2/10 overflow-y-scroll">
          <div>
            <div className="flex gap-3 items-center">
              <div className="border border-accent py-1 px-3 text-accent rounded-sm">
                R
              </div>
              <div>
                <h4 className="text-lg text-white font-medium">
                  React.js গাইড
                </h4>
                <p className="text-xs font-firaCode text-white">
                  MERN · FRONTEND DOCS
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col gap-3 mt-4">
              <h4 className="text-xs text-white font-medium">শুরু করা</h4>
              <ul className="text-xs font-firaCode text-white/60 flex flex-col gap-2">
                <li
                  onClick={() => scrollToSection("00")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  00 ভূমিকা
                </li>
                <li
                  onClick={() => scrollToSection("01")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  01 সেটআপ ও টুলস
                </li>
                <li
                  onClick={() => scrollToSection("02")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  02 প্রজেক্ট স্ট্রাকচার
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h4 className="text-xs text-white font-medium">মূল ধারণা</h4>
              <ul className="text-xs font-firaCode text-white/60 flex flex-col gap-2">
                <li
                  onClick={() => scrollToSection("03")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  03 JSX ও কম্পোনেন্ট
                </li>
                <li
                  onClick={() => scrollToSection("04")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  04 Props
                </li>
                <li
                  onClick={() => scrollToSection("05")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  05 State ও useState
                </li>
                <li
                  onClick={() => scrollToSection("06")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  06 useEffect
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h4 className="text-xs text-white font-medium">গভীরে</h4>
              <ul className="text-xs font-firaCode text-white/60 flex flex-col gap-2">
                <li
                  onClick={() => scrollToSection("07")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  07 আরও Hooks
                </li>
                <li
                  onClick={() => scrollToSection("08")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  08 ইভেন্ট ও ফর্ম
                </li>
                <li
                  onClick={() => scrollToSection("09")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  09 React Router
                </li>
                <li
                  onClick={() => scrollToSection("10")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  10 API কল (Axios)
                </li>
                <li
                  onClick={() => scrollToSection("11")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  11 API কল (Fetch)
                </li>
                <li
                  onClick={() => scrollToSection("12")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  12 Context API
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h4 className="text-xs text-white font-medium">প্রোডাকশন</h4>
              <ul className="text-xs font-firaCode text-white/60 flex flex-col gap-2">
                <li
                  onClick={() => scrollToSection("13")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  13 ভালো প্র্যাকটিস
                </li>
                <li
                  onClick={() => scrollToSection("14")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  14 ডিপ্লয়মেন্ট
                </li>
                <li
                  onClick={() => scrollToSection("15")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  15 পরবর্তী পদক্ষেপ
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h4 className="text-xs text-white font-medium">🔥 Interview Question</h4>
              <ul className="text-xs font-firaCode text-white/60 flex flex-col gap-2">
                <li
                  onClick={() => scrollToSection("14")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  14 Basic
                </li>
                <li
                  onClick={() => scrollToSection("14")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  14 ডিপ্লয়মেন্ট
                </li>
                <li
                  onClick={() => scrollToSection("15")}
                  className="hover:text-accent cursor-pointer duration-200 ease-in"
                >
                  15 পরবর্তী পদক্ষেপ
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-9/12 flex flex-col gap-12 overflow-y-scroll">
          <section id="00" className="px-6 py-4 border-b border-surface2/10">
            <div>
              <div className="flex gap-3 items-center">
                <div className="w-12 h-0.5 bg-accent"></div>
                <h4 className="font-firaCode text-accent text-xs">
                  MERN · REACT.JS · COMPONENT-BASED UI
                </h4>
              </div>
              <h1 className="text-5xl font-bold text-white w-200 mt-6 leading-20">
                প্রতিটা কম্পোনেন্ট একটা ইট,{" "}
                <span className="text-accent">পুরো অ্যাপ</span> একটা দালান —
              </h1>
              <p className="text-white/60 mt-2">
                React হলো JavaScript এর একটি library যেটা ব্যবহার করে User
                Interface (UI) তৈরি করা হয়। বিশেষ করে: - Single Page Application
                (SPA) - Dynamic Website - Fast Rendering UI তৈরির জন্য React
                ব্যবহার করা হয়। React তৈরি করেছে Meta (Facebook)।
              </p>
              <h2 className="text-2xl text-accent font-medium mt-4">
                Why Use React ❓
              </h2>
              <div className="flex gap-3 items-center mt-6">
                <div className="border border-accent py-2 px-4 text-accent rounded-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-xs text-white/80">Reusable Components</p>
                </div>
                <div className="border border-accent py-2 px-4 text-accent rounded-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-xs text-white/80">Fast Performance</p>
                </div>
                <div className="border border-accent py-2 px-4 text-accent rounded-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-xs text-white/80">Virtual DOM</p>
                </div>
                <div className="border border-accent py-2 px-4 text-accent rounded-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-xs text-white/80">React Router</p>
                </div>
                <div className="border border-accent py-2 px-4 text-accent rounded-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-xs text-white/80">Easy Maintenance</p>
                </div>
                <div className="border border-accent py-2 px-4 text-accent rounded-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-xs text-white/80">
                    Large Community Support
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="01" className="px-6 py-4 border-b border-surface2/10">
            <div>
              <div>
                <GuideTitle number={"01"} text={"সেটআপ ও টুলস"} />
                <p className="text-white/60 mt-4">
                  React প্রজেক্ট শুরু করার সবচেয়ে দ্রুত ও আধুনিক উপায় হলো Vite
                  ব্যবহার করা (Create React App এখন আর সুপারিশ করা হয় না।)
                </p>
              </div>
              <CodeBlock
                path={"Terminal"}
                language={"javascript"}
                code={`npm create vite@latest my-app 
cd my-app
npm install
npm run dev`}
              />
              <p className="text-white/60 mt-4">
                প্রজেক্ট চালানোর পর ডিফল্টভাবে <span className="text-accent/90">http://localhost:5173</span> এ অ্যাপটা
                চলবে।
              </p>
              <h2 className="text-white text-lg mt-6">
                প্রয়োজনীয় কিছু প্যাকেজ (পরে কাজে লাগবে)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="py-3 px-4 bg-surface2/50 mt-4 rounded-lg flex flex-col gap-2">
                  <h4 className="text-accent">React-Router</h4>
                  <p className="text-white/60">পেজ থেকে পেজে নেভিগেশনের জন্য</p>
                </div>
                <div className="py-3 px-4 bg-surface2/50 mt-4 rounded-lg flex flex-col gap-2">
                  <h4 className="text-accent">Axios</h4>
                  <p className="text-white/60">
                    ব্যাকএন্ড API থেকে ডেটা আনার জন্য
                  </p>
                </div>
                <div className="py-3 px-4 bg-surface2/50 mt-4 rounded-lg flex flex-col gap-2">
                  <h4 className="text-accent">React-Icons</h4>
                  <p className="text-white/60">আইকন ব্যবহারের জন্য</p>
                </div>
                <div className="py-3 px-4 bg-surface2/50 mt-4 rounded-lg flex flex-col gap-2">
                  <h4 className="text-accent">Tailwindcss</h4>
                  <p className="text-white/60">CSS ফ্রেমওয়ার্ক</p>
                </div>
                <div className="py-3 px-4 bg-surface2/50 mt-4 rounded-lg flex flex-col gap-2">
                  <h4 className="text-accent">GSAP</h4>
                  <p className="text-white/60">
                    GSAP (GreenSock Animation Platform) হলো একটি অত্যন্ত জনপ্রিয়
                    এবং শক্তিশালী JavaScript animation library
                  </p>
                </div>
              </div>
              <h2 className="text-white text-lg mt-6">⚙️ Basic Syntax</h2>
              <div>
                <CodeBlock
                  path={'src/App.jsx'}
                  language={"javascript"}
                  code={`function App() {
  return <h1>Hello React</h1>;
}`}
                />
              </div>
              <h2 className="text-white text-lg mt-12">🧠 Explanation</h2>
              <div>
                <p className="mt-2 text-white/60">এখানে:</p>
                <ul className="text-white/60 mt-2 list-disc list-inside flex flex-col gap-2">
                  <li><span className="py-0.5 px-2 rounded-md bg-accent/20">function Welcome()</span> → Component তৈরি করেছে</li>
                  <li><span className="py-0.5 px-2 rounded-md bg-accent/20">return</span> → UI return করছে</li>
                  <li><span className="py-0.5 px-2 rounded-l-md bg-accent/20">export default</span>  → অন্য file এ use করার জন্য export করেছে</li>
                </ul>
              </div>
              <h2 className="text-white text-lg mt-12">❌ Common Mistakes</h2>
              <div>
                <p className="text-white/60 mt-2">⚠️ Small Letter Component Name</p>
                <div>
                  <CodeBlock language={'javascript'} code={`function welcome() {
  // ❌ Wrong
}

function Welcome() {
  // ✅ Correct
}`} />
                </div>
              </div>
            </div>
          </section>

          <section id="02" className="px-6 py-4 border-b border-surface2/10">
            <div>
              <GuideTitle number={"02"} text={"প্রজেক্ট স্ট্রাকচার"} />
              <p className="text-white/60 mt-4">
                প্রজেক্ট যত বড় হবে, একটা পরিষ্কার স্ট্রাকচার তত গুরুত্বপূর্ণ
                হয়ে উঠবে:
              </p>
            </div>
            <div className="mt-4 py-4 px-6 bg-surface2/50 text-white/70 rounded-lg">
              my-app/
              <br />
              ├── <span class="dir">src/</span>
              <br />│ ├── <span class="dir">components/</span>
              <span class="comment"> // রিইউজেবল ছোট কম্পোনেন্ট</span>
              <br />
              │ │ ├── Navbar.jsx
              <br />
              │ │ └── Button.jsx
              <br />│ ├── <span class="dir">pages/</span>
              <span class="comment"> // রাউট-ভিত্তিক পেজ</span>
              <br />
              │ │ ├── Home.jsx
              <br />
              │ │ └── Login.jsx
              <br />│ ├── <span class="dir">hooks/</span>
              <span class="comment"> // কাস্টম hooks</span>
              <br />│ ├── <span class="dir">context/</span>
              <span class="comment"> // গ্লোবাল state (Context API)</span>
              <br />│ ├── <span class="dir">services/</span>
              <span class="comment"> // axios/API কল</span>
              <br />
              │ │ └── api.js
              <br />
              │ ├── App.jsx
              <br />
              │ └── main.jsx
              <br />
              ├── index.html
              <br />
              └── package.json
            </div>
            <h2 className="text-white text-lg mt-12">💡 Important Notes</h2>
            <ul className="text-white/60 mt-2 list-disc list-inside flex flex-col gap-2">
              <li>React component এর নাম সবসময় Capital Letter দিয়ে শুরু হয়</li>
              <li>React এ UI component based হয়</li>
              <li>JSX দেখতে HTML এর মতো হলেও এটা JavaScript</li>
            </ul>
          </section>

          <section id="03" className="px-6 py-4 border-b border-surface2/10">
            <div>
              <GuideTitle number={"03"} text={"JSX ও কম্পোনেন্ট"} />
              <p className="text-white/60 mt-4"><span className="text-accent">🎯 Definition :</span> JSX এর পূর্ণরূপ হলো : JavaScript XML , JSX ব্যবহার করে JavaScript এর ভিতরে HTML এর মতো syntax লেখা যায়। React এ UI তৈরি করার জন্য JSX ব্যবহার করা হয়।</p>
              <p className="text-white/60 mt-4">
                <span className="text-accent">🎯 Another Definition : </span>
                JSX হলো JavaScript এর ভেতরে HTML-এর মতো সিনট্যাক্স লেখার একটা
                পদ্ধতি। প্রতিটা কম্পোনেন্ট হলো একটা ফাংশন যা UI রিটার্ন করে —
                এটাকে একটা স্বাধীন, পুনর্ব্যবহারযোগ্য বিল্ডিং ব্লক ভাবতে পারো।
              </p>
            </div>

            {/* code */}
            <div>
              <CodeBlock
                code={`function Welcome() {
  return (
    <div className="welcome">
      <h1>স্বাগতম!</h1>
      <p>এটা আমাদের প্রথম React কম্পোনেন্ট।</p>
    </div>
  );
}

export default Welcome;`}
                language="javascript"
                path="src/components/Welcome.jsx"
              />
            </div>

            <div className="mt-4">
              <h2 className="text-white text-lg mt-12">
                JSX-এর কিছু নিয়ম মাথায় রাখো:
              </h2>
              <ul className="text-white/60 mt-2 list-disc list-inside flex flex-col gap-2">
                <li>
                  একটা কম্পোনেন্ট অবশ্যই একটা মূল (parent) ট্যাগ রিটার্ন করবে
                </li>
                <li>HTML-এর class এর বদলে JSX-এ className লিখতে হয়</li>
                <li>
                  JavaScript ভ্যারিয়েবল দেখাতে কার্লি ব্র্যাকেট {} ব্যবহার করতে
                  হয়
                </li>
              </ul>
            </div>

            {/* code */}
            <div className="mt-6">
              <CodeBlock
                language={"javascript"}
                path={"src/App.jsx"}
                code={`import Welcome from './components/Welcome';

function App() {
  const userName = 'রাহিম';

  return (
    <div>
      <Welcome />
      <p>স্বাগতম, {userName}!</p>
    </div>
  );
}

export default App;`}
              />
            </div>
            <div className="mt-12">
              <a className="text-accent/80 hover:underline" target="_blank" href="https://media.geeksforgeeks.org/wp-content/uploads/20250813142958772966/react_jsx-1.webp">JSX More Info...</a>
            </div>
          </section>

          <section id="14" className="px-6 py-4 border-b border-surface2/10">
            <div>
              <GuideTitle number={'14'} text={'🔥 Interview Question'} />
            </div>
            <div>
              <h4 className="text-white text-lg mt-6">Q1: React কি framework নাকি library?</h4>
              <p className="text-white/60 ">Answer: React একটি JavaScript library।</p>
            </div>
            <div>
              <h4 className="text-white text-lg mt-6">Q1: React কি framework নাকি library?</h4>
              <p className="text-white/60 ">Answer: React একটি JavaScript library।</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ReactPage;
