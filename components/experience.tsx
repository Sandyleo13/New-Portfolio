import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ExternalLink } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl sm:text-4xl text-primary mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience building scalable web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="font-work-sans text-xl text-primary">Full Stack Web Developer Intern</CardTitle>
                  <p className="text-accent font-medium">TRRev Technology</p>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    June 2025 - Present
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    Mumbai, Maharashtra
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-card-foreground leading-relaxed">
                  Contributing to the development of a Laravel + React based web application with dynamic content
                  management system including blogs, works, articles, FAQs, testimonials, and pricing modules.
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-card-foreground text-sm">
                    <li>Designed and implemented admin dashboards with CRUD operations and RESTful APIs</li>
                    <li>Built optimized frontend components with React, TypeScript, and Tailwind CSS</li>
                    <li>Developed AI-powered Blog Generator and automation features</li>
                    <li>Collaborated with design team to create UI/UX prototypes in Figma</li>
                    <li>Gained exposure to version control (GitHub), deployment, and agile workflows</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Laravel",
                    "React",
                    "TypeScript",
                    "MySQL",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "REST API",
                    "Figma",
                    "GitHub",
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://trrev.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Visit Company Website
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
