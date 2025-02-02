"use client";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";
import { useState } from "react";
import Image from "next/image";

import project1 from "./images/1.jpeg";
import project2 from "./images/2.jpeg";
import project3 from "./images/3.jpeg";
import project4 from "./images/4.jpeg";
import project5 from "./images/5.jpeg";
import project6 from "./images/6.jpeg";
import project7 from "./images/7.jpeg";
import project8 from "./images/8.jpeg";
import project9 from "./images/9.jpeg";
import project10 from "./images/10.jpeg";
import project11 from "./images/11.jpeg";
import project12 from "./images/12.jpeg";
import project13 from "./images/13.png";


import { Separator } from "@radix-ui/react-separator";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = [
  {
    id: "01",
    title: "",
    category: "e-commerce perfume website",
    description:
      "I've built a fully responsive e-commerce perfume website using HTML, CSS, and JavaScript. 💻🛍️ The website is designed to offer an immersive shopping experience for perfume lovers.",
    image: project1,
    githubUrl: "https://github.com/Mozma123/ecomerence-perfume-website-",
  },
  {
    id: "02",
    category: "Todo app",
    description:
      "🔹 The app allows users to add, edit, and delete tasks, with a minimal and user-friendly design.🔹 State management is handled using useState, while useEffect ensures the tasks persist across page reloads by syncing with local storage.",
    image: project2,
    githubUrl: "",
  },
  {
    id: "03",
    category: "image gallery",
    description:"Create an image gallery where users can view a collection of images. Use HTML/CSS for layout and JavaScript for image navigation and any interactive features.",
    image: project3,
    githubUrl: "https://github.com/Mozma123/galleriya",
  },
  {
    id: "04",

    category: " Currency exchange",
    description:  "Currency exchange rate app.Using Html,Css,js and Fetch APi.",
    image: project4,
    githubUrl: "https://github.com/Mozma123/currency-exchanger",
  },
  {
    id: "05",
    category: "Quiz website",
    description:
      "I've created a simple quiz website using HTML, CSS, and JavaScript .",
    image: project5,
    githubUrl: "https://github.com/Mozma123/quiz2",
  },
  {
    id: "06",
    category: "Calculator",
    description:"I create a Calculator. Using html for sturucture ,css for styling and JS for functionality.",
    image: project6,
    githubUrl: "https://github.com/Mozma123/CodSoft/tree/main/calculator",
  },
  {
    id: "07",
    category: "Digital clock",
    description:   "Language use:   ➡️Html  ➡️Css ➡️js",
    image: project7,
    githubUrl: "",
  },
  {
    id: "08",
    category: "Landing page",
    description:
      "I developed an interactive landing page using HTML, CSS, and animation I structured the layout with HTML to create a main display area . CSS was used for styling and ensure the landing page is visually appealing and responsive.",
    image: project8,
    githubUrl: "https://github.com/Mozma123/CodSoft/tree/main/landing%20page/codsoft",
  },
  {
    id: "09",
    category: " Toggle",
    description:
      " I create Toggle using html css and js. ",
    image: project9,
    githubUrl: "https://github.com/Mozma123/Toggle-button",
  },
  {
    id: "10",
    category: "scratch Story",
    description:
      "A simple and clean calculator app that performs basic arithmetic operations on interger as well as floating point numbers.",
    image: project10,
    githubUrl: "",
  },
  {
    id: "11",
    category: "Flower website",
    description:
      " Take a look at my newest creation: A flower website landing page I crafted using HTML, CSS, bootstrap and media queries for full responsiveness! 💻",
    image: project11,
    githubUrl: ""
  },
  {
    id: "12",
    category: "2D/3D Animation box",
    description:
      "A simple and clean calculator app that performs basic arithmetic operations on interger as well as floating point numbers.",
    image: project12,
    githubUrl: "",
  },
  {
    id: "13",
    category: "Taskmanger app",
    description:
      "Taskmanger",
    stack: [""],
    image: project13,
    githubUrl: "https://github.com/Mozma123/tasko",
  },
];

const ProjectPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {Projects?.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20 hover:border-lightSky/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      {/* description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <div>
                            <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                              {project?.id}
                            </h2>

                            <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                              {project?.category} Project
                            </h3>
                            <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal py-4 ">
                              {project?.description}
                            </p>

                            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                              {project?.stack?.map((item, index) => (
                                <li
                                  key={index}
                                  className="text-xs md:text-base text-lightSky/80"
                                >
                                  {item}
                                  {index !== project?.stack?.length - 1 && ","}
                                </li>
                              ))}
                            </div>
                            <Separator className="bg-gray-700 h-px my-4" />

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    size="icon"
                                    className=" items-center text-lightSky border border-hoverColor/30 hover:bg-lightSky/10 hover:border-lightSky/70"
                                  >
                                    <Link
                                      href={project?.githubUrl}
                                      target="_blank"
                                    >
                                      <Github />{""}
                                      <span className="sr-only">View Github repositry</span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      {/* image */}

                      <div className="w-full md:w-1/2 order-1 md:order-2 ">
                        <div className="relative h-64  md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                          {/* <Image
                            src={project?.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          /> */}
                          <Image
  src={project?.image || '/default-image.jpg'} // Image fallback handle karta hai
  alt={project?.title || 'Default Title'} // Alt attribute ka fallback
  fill // Next.js Image ke liye "fill" prop sahi hai
  className="object-cover"
/>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8 ">
            <CarouselPrevious className="rounded-md bg-transparent 
            border border-lightSky/50 
            hover:bg-lightSky/10 
            hover:border-hoverColor/80 
            hoverEffect hover:text-white p-5"/>
            <CarouselNext className="rounded-md bg-transparent 
            border border-lightSky/50 
            hover:bg-lightSky/10 
            hover:border-hoverColor/80 
            hoverEffect hover:text-white p-5"/>
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default ProjectPage;
