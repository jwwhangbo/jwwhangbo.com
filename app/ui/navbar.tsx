import { BlogSocialLogo, GithubSocialLogo, JWLogo, LinkedinSocialLogo } from "@/app/ui/logos";

export default function Navbar() {

    return (
      <div className="flexbox justify-center fixed top-0 bg-slate-200 w-full h-fit dark:bg-[#1D2228] shadow-lg z-10">
        <div
          data-name="content"
          className="max-w-[980px] w-full h-fit mx-auto px-2"
        >
          <div className="flex w-full justify-end py-[10px]">
            <div className="flex justify-end space-x-[10px]">
              <LinkedinSocialLogo />
              <GithubSocialLogo />
              <BlogSocialLogo />
            </div>
          </div>
          <div className="flex justify-center w-full pb-[17px]">
            <JWLogo />
          </div>
          <ul className="flex space-x-[20px] sm:space-x-[40px] justify-center w-full font-medium">
            <a href="#about"><li>About</li></a>
            <a href="#experience"><li>Experience</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    );
}