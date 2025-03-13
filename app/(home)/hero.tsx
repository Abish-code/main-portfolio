"use client"

import { motion } from "framer-motion"
import { ChevronRight, ExternalLink, Github, Code, Zap } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import Container from "@/components/shared/container"
import FlipWords from "@/components/shared/flip-words"
import Link from "@/components/shared/link"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/constants"
import { cn } from "@/lib/utils"

import CurrentTechStack from "./current-tech-stack"

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={cn("bg-grid py-16 relative overflow-hidden", "lg:py-20")}>
      {/* Enhanced subtle background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/3 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/3 blur-3xl rounded-full"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Subtle minimalist decorative elements */}
        <div className="absolute -top-10 right-0 w-40 h-px bg-primary/10"></div>
        <div className="absolute top-1/3 -left-10 w-20 h-px bg-primary/10"></div>
        <div className="absolute bottom-20 right-10 w-px h-20 bg-primary/10"></div>

        {/* Distinctive page marker */}
        <div className="absolute -left-4 top-0 h-12 w-1 bg-gradient-to-b from-primary/50 to-primary/0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content area */}
          <div className={cn("font-cal lg:col-span-7")}>
            {/* Updated badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium mb-4 text-foreground/80"
            >
              Exploring new technologies
            </motion.div>

            <motion.h1
              className={cn(
                "from-foreground via-foreground/90 to-foreground/70 mb-6 flex flex-col justify-center gap-1 bg-gradient-to-b to-90% bg-clip-text pb-2 text-4xl font-bold text-transparent",
                "sm:text-5xl",
                "lg:text-6xl",
              )}
              initial={{ x: -32, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span>
                Hi, I'm <span className={cn("text-primary")}>Abish!!</span>
              </span>
              <span>Web Developer</span>
            </motion.h1>

            <motion.div
              className={cn(
                "from-foreground via-foreground/90 to-foreground/70 bg-gradient-to-b to-90% bg-clip-text font-bold text-transparent text-lg",
                "md:text-xl",
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I like to build{" "}
              <FlipWords
                words={["interactive", "amazing", "fantastic", "beautiful"]}
                className={cn("text-primary font-black")}
              />{" "}
              things with code. I enjoy learning about new technologies.
            </motion.div>

            {/* Enhanced action buttons with more distinctive styling */}
            <motion.div
              className={cn("mt-8 flex flex-wrap gap-4")}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                variant="default"
                asChild
                className={cn(
                  "group bg-primary/90 hover:bg-primary transition-all duration-300 relative overflow-hidden rounded-lg",
                )}
              >
                <Link href={ROUTES.about}>
                  <span className="relative z-10 flex items-center">
                    Explore more{" "}
                    <ChevronRight className={cn("ml-1 transition-transform duration-200 group-hover:translate-x-1")} />
                  </span>
                  <span className="absolute inset-0 translate-y-[101%] bg-foreground/10 group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className={cn(
                  "group border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden rounded-lg",
                )}
              >
                <Link href={ROUTES.projects || "#"}>
                  <span className="relative z-10 flex items-center">
                    <Code className="mr-1.5 h-4 w-4" />
                    View Projects{" "}
                    <ExternalLink
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-y-[-2px] group-hover:translate-x-[2px]",
                      )}
                    />
                  </span>
                  <span className="absolute inset-0 translate-y-[101%] bg-primary/5 group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                asChild
                className={cn("group hover:bg-primary/5 transition-all duration-300 rounded-lg")}
              >
                <Link href="https://github.com/Abish-code" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right image area with enhanced circular frame hover effects */}
          <motion.div
            className="relative flex justify-center lg:justify-end lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {/* Enhanced circular frame with hover effects */}
              <div
                className={cn(
                  "relative h-[220px] w-[220px] sm:h-[240px] sm:w-[240px] rounded-full overflow-hidden transition-all duration-500",
                  "before:absolute before:inset-0 before:border before:border-primary/20 before:rounded-full before:transition-all before:duration-500",
                  "after:absolute after:inset-0 after:border after:border-primary/0 after:rounded-full after:transition-all after:duration-500",
                  isHovered && "before:scale-105 before:border-primary/0 after:border-primary/30 after:scale-110",
                )}
              >
                {/* Image container */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/media/bonabrian/bonabrian.jpg"
                    alt="Abish - Web Developer"
                    fill
                    className={cn(
                      "object-cover transition-all duration-700 ease-in-out",
                      isHovered && "scale-110 rotate-3",
                    )}
                  />

                  {/* Enhanced overlay with hover effect */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent transition-opacity duration-500",
                      isHovered ? "opacity-30" : "opacity-50",
                    )}
                  ></div>
                </div>
              </div>

              {/* Enhanced minimalist decorative elements */}
              <div
                className={cn(
                  "absolute -bottom-2 -right-2 w-4 h-4 border-r border-b border-primary/20 transition-all duration-500",
                  isHovered && "border-primary/40 w-6 h-6",
                )}
              ></div>

              <div
                className={cn(
                  "absolute -top-2 -left-2 w-4 h-4 border-l border-t border-primary/20 transition-all duration-500",
                  isHovered && "border-primary/40 w-6 h-6",
                )}
              ></div>

              {/* More distinctive floating elements */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="flex flex-col gap-3">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300",
                      isHovered && "bg-primary/20",
                    )}
                  >
                    <Zap className="w-3 h-3 text-primary" />
                  </div>
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300",
                      isHovered && "bg-primary/20",
                    )}
                  >
                    <Code className="w-3 h-3 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced tech stack section with more distinctive UI */}
        <motion.div
          className={cn("mt-16", "lg:mt-20")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-6 bg-primary/20 mr-3"></div>
            <h2 className="text-2xl font-bold">My Tech Stack</h2>
            <div className="h-px flex-grow ml-4 bg-gradient-to-r from-border to-transparent"></div>
          </div>

          <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-border/30 transition-all duration-300 hover:border-primary/20 relative overflow-hidden">
            {/* More distinctive corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/10 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/10 rounded-br-lg"></div>

            {/* Subtle accent line */}
            <div className="absolute top-6 bottom-6 left-0 w-1 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0"></div>

            <div className="pl-4">
              <CurrentTechStack />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Hero

