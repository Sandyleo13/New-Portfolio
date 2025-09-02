"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState, useRef } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive UIs",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "shadcn/ui", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing scalable backend systems",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "PHP", level: 85 },
      { name: "REST API", level: 90 },
      { name: "Authentication", level: 80 },
      { name: "MVC Architecture", level: 85 },
    ],
  },
  {
    title: "Database & Tools",
    description: "Database management and development tools",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Database Design", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
    ],
  },
  {
    title: "Design & UI/UX",
    description: "Creating user-friendly interfaces",
    skills: [
      { name: "Figma", level: 80 },
      { name: "UI/UX Design", level: 75 },
      { name: "Responsive Design", level: 90 },
      { name: "Wireframing", level: 75 },
      { name: "Prototyping", level: 70 },
    ],
  },
]

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  const [animatedValue, setAnimatedValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 1500
        const steps = 60
        const increment = value / steps
        let current = 0

        const interval = setInterval(() => {
          current += increment
          if (current >= value) {
            setAnimatedValue(value)
            clearInterval(interval)
          } else {
            setAnimatedValue(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(interval)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, value, delay])

  return (
    <div ref={ref}>
      <Progress value={animatedValue} className="h-2 transition-all duration-300" />
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl sm:text-4xl text-primary mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills and proficiency levels across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-work-sans text-xl text-primary">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <AnimatedProgress value={skill.level} delay={skillIndex * 100} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="font-work-sans font-semibold text-xl text-primary mb-4">Additional Interests</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Mobile App Development (Flutter)",
                  "Artificial Intelligence & Automation",
                  "Open Source Contribution",
                  "Cybersecurity & Ethical Hacking",
                  "Cloud Computing",
                  "Software Engineering",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
