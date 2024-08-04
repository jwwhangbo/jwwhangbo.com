import { Card, CardContent, Typography } from "@mui/material";
import { getProjects, Project } from "../lib/data";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {ButtonNavScrollElement} from "./buttonnav-scroll-element";

export function ProjectContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const scrollPrev = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex h-fit w-fill overflow-x-scroll space-x-7 py-[2px] snap-x snap-mandatory">
      <div className="w-[10%]"></div>
      {projects.map((proj) => {
        return (
          <Card
            className="snap-center"
            key={proj.index}
            variant="elevation"
            elevation={2}
          >
            <CardContent
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {proj.name}
              </Typography>
              <Typography variant="body2">{proj.date}</Typography>
              <Typography variant="body2">{`language: ${proj.language}`}</Typography>
              <Typography variant="body2">{`framework: ${proj.framework}`}</Typography>
              <Typography variant="body2">{proj.description}</Typography>
              {proj.images ? (
                <ButtonNavScrollElement className="h-full w-full" onClickLeft={scrollPrev} onClickRight={scrollNext}>
                  <div ref={containerRef} className="flex overflow-x-scroll space-x-4 snap-x snap-mandatory w-full items-center">
                    {proj.images.map((img) => {
                      return (
                        <a
                          className="max-sm:w-full h-fit sm:h-full flex-shrink-0 aspect-[4/3] relative snap-center"
                          href={img}
                          target="_blank"
                          key={img}
                          id={proj.images?.indexOf(img).toString()}
                        >
                          <Image
                            className="rounded-md"
                            //   key={img}
                            src={img}
                            alt={`${proj.name}-${
                              proj.images?.indexOf(img)! + 1
                            }`}
                            fill={true}
                            // width={400}
                            // height={300}
                            style={{
                              //   height: "100%",
                              //   width: "auto",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      );
                    })}
                  </div>
                </ButtonNavScrollElement>
              ) : null}
            </CardContent>
          </Card>
        );
      })}
      <div className="w-[10%]"></div>
    </div>
  );
}
