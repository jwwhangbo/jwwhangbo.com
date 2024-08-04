"use client";
import styles from "@/app/home.module.css";
import { getTimeline, Experience } from "../lib/data";
import { useEffect, useState } from "react";

export default function Timeline() {
  const [timeline, setTimeline] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      const data = await getTimeline();
      setTimeline(data);
    };

    fetchTimeline();
  }, []);

  let currentYear = "";
  return (
    <div
      className={`block h-[calc(100vh-133px)] overflow-y-scroll [&::-webkit-scrollbar]:hidden ${styles.mystyle}`}
    >
      <div className="h-1/2"></div>
      <div className="flex">
        <div className="w-1 bg-[#778392] dark:bg-white"></div>
        <div className="pl-2 w-full">
          {timeline.map((item) => {
            return (
              <div className="flex flex-row pb-5" key={item.company}>
                <div>
                  {(() => {
                    if (currentYear == item.start_date.split(".")[0]) {
                      return (
                        <p className="opacity-0">
                          {item.start_date.split(".")[0]}
                        </p>
                      );
                    } else {
                      currentYear = item.start_date.split(".")[0];
                      return <p>{item.start_date.split(".")[0]}</p>;
                    }
                  })()}
                </div>
                <div className="pl-4 w-full">
                  <p className="text-4xl">{item.company}</p>
                  <p>{item.position}</p>
                  <p className="text-sm py-2 text-[#ababab]">
                    {item.start_date} - {item.end_date}
                  </p>
                  <ul className="space-y-1">
                    {item.responsibilities?.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-1/2"></div>
    </div>
  );
}
