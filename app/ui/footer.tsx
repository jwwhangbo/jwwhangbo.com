import { vt323 } from "./fonts"

export default function Footer() {
    return (
        <div className="w-full h-[100px] flex justify-center items-center">
            <p className={`text-lg ${vt323.className}`}>Hosted by Github pages</p>
        </div>
    )
}