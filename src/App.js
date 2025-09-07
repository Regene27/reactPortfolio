import React from "react";
// Removed react-router-dom imports
import Navbar from "./Navbar";
import ProfilePage from "./Profile";
import ContactPage from "./Contact";
import ProjectsPage from "./Projects";

// Example home component
const HomePage = ({ hellos }) => {
  const [index, setIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [phase, setPhase] = React.useState("typing");

  React.useEffect(() => {
    let timeout;
    const current = hellos[index].text;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          120
        );
      } else {
        timeout = setTimeout(() => setPhase("waiting"), 800);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => setPhase("deleting"), 700);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          60
        );
      } else {
        timeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % hellos.length);
          setPhase("typing");
        }, 300);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, index, hellos]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="text-white text-4xl font-bold min-h-[2.5rem]">
        {displayed}
        <span className="animate-pulse text-blue-400">|</span>
      </div>
      <div className="text-blue-400 mt-2 text-lg">{hellos[index].lang}</div>
    </div>
  );
};

function App() {
  const hellos = [
    { lang: "English", text: "Hello" },
    { lang: "Spanish", text: "Hola" },
    { lang: "French", text: "Bonjour" },
    { lang: "German", text: "Hallo" },
    { lang: "Italian", text: "Ciao" },
    { lang: "Japanese", text: "こんにちは" },
    { lang: "Korean", text: "안녕하세요" },
    { lang: "Russian", text: "Привет" },
  ];

  return (
    <>
      {/* Show message on mobile screens */}
      <div className="sm:hidden min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-center text-xl font-bold p-8">
          Please open in a computer
        </div>
      </div>
      {/* Show app only on screens sm and up */}
      <div className="hidden sm:flex min-h-screen bg-black flex-col sm:flex-row">
        <Navbar />
        <div className="flex-1 overflow-y-auto w-full">
          <section
            id="home"
            className="min-h-screen flex items-center justify-center px-2 sm:px-0"
          >
            <HomePage hellos={hellos} />
          </section>
          <section
            id="profile"
            className="min-h-screen flex items-center justify-center px-2 sm:px-0"
          >
            <ProfilePage />
          </section>
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center px-2 sm:px-0"
          >
            <ProjectsPage />
          </section>
          <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-2 sm:px-0"
          >
            <ContactPage />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
