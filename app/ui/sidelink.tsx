import { vt323 } from "./fonts";

export default function Sidelink() {
  return (
    <div className="w-full h-[120px] fixed bottom-0 max-[980px]:opacity-0 ">
      <div className="w-[980px] h-full mx-auto flex justify-end">
        <p
          className={`text-gray text-sm ${vt323.className} transform rotate-90 origin-center`}
        >
          jwwhangbo.com
        </p>
      </div>
    </div>
  );
}
