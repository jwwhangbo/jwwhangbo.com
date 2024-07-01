import Contact from "./ui/contact";
import Projects from "./ui/projects";
import ResumeButton from "./ui/resume-button";
import Timeline from "./ui/timeline";

export default function Home() {
  return (
    <div data-name="content" className="max-w-[980px] mx-auto px-4">
      <div className="h-screen flex items-center" id="about">
        <div className="text-m space-y-3">
          <p>Hi, my name is</p>
          <p className="text-5xl text-[#b6b6b6] font-semibold">
            Jongwook Whangbo
          </p>
          <p>and I build stuff on the 🌐</p>
          <ResumeButton />
          <p>in case you&apos;re interested in what I can do :&#41;</p>
        </div>
      </div>
      <div className="h-[133px]" id="experience"></div>
      <Timeline />
      <div className="h-[133px]" id="projects"></div>
      <Projects />
      <div className="h-[133px]" id="contact"></div>
      <Contact />
    </div>
  );
}
