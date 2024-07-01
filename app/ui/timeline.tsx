import styles from "@/app/home.module.css"

export default function Timeline() {
    return (
      <div
        className={`block h-[calc(100vh-133px)] overflow-y-scroll [&::-webkit-scrollbar]:hidden ${styles.mystyle}`}
      >
        <div className="h-1/2"></div>
        <div className="flex">
          <div className="w-1 bg-white"></div>
          <div className="pl-2 w-full">
            <p>2016</p>
            <div className="h-[500px]"></div>
          </div>
        </div>
        <div className="h-1/2"></div>
      </div>
    );
}