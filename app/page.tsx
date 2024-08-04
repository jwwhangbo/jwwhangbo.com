import About from "./ui/about";
import Contact from "./ui/contact";
import Projects from "./ui/projects";
import ResumeButton from "./ui/resume-button";
import Timeline from "./ui/timeline";

export default function Home() {
  return (
    <div data-name="content" className="max-w-[980px] mx-auto px-4 space-y-5">
      <div className="h-screen flex items-center" id="about">
        <About />
      </div>
      <div className="-top-[133px] block relative" id="experience"></div>
      <Timeline />
      <div className="-top-[133px] block relative" id="projects"></div>
      <Projects />
      <div className="-top-[133px] block relative" id="contact"></div>
      <Contact />
    </div>
  );
}
