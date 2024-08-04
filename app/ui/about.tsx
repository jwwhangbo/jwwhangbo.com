import ResumeButton from "./resume-button";

export default function About() {
    return (
      <div className="text-m space-y-3">
        <p>Hi, my name is</p>
        <p className="text-5xl text-[#b6b6b6] font-semibold">
          Jongwook Whangbo
        </p>
        <p>and I build stuff on the 🌐</p>
        <ResumeButton />
        <p>in case you&apos;re interested in what I can do :&#41;</p>
      </div>
    );
}