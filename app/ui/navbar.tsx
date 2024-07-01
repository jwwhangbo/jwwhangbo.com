import { BlogSocialLogo, GithubSocialLogo, JWLogo, LinkedinSocialLogo } from "@/app/ui/logos";

export default function Navbar() {
    return (
      <div className="flex justify-center bg-slate-200 w-full h-fit dark:bg-[#1D2228] shadow-lg">
        <div data-name="content" className="w-[980px] h-fit">
          <div className="flex w-full justify-end py-[10px]">
            <div className="flex space-x-[10px] w-fit">
              <LinkedinSocialLogo />
              <GithubSocialLogo />
              <BlogSocialLogo />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <JWLogo />
          </div>
        </div>
      </div>
    );
}