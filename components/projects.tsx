import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Roshan Chaturvedi Portfolio Website",
    description:
      "Modern and dynamic personal portfolio website with blog system, works showcase, articles, and admin panel. Features API-driven dynamic data, SEO optimization, and LinkedIn-inspired experience timeline.",
    technologies: ["Laravel", "React", "TypeScript", "TailwindCSS", "Framer Motion", "SEO"],
    liveUrl: "https://roshanchaturvedi.com",
    adminUrl: "https://admin.roshanchaturvedi.com",
    period: "June 2025 - July 2025",
    highlights: [
      "Dynamic content management system",
      "SEO optimized with meta tags",
      "Smooth animations with Framer Motion",
      "Responsive design with TailwindCSS",
    ],
  },
  {
    title: "Rajyog Foundation Website",
    description:
      "Dynamic NGO website showcasing social initiatives, vision, and activities. Features multilingual content, responsive UI, and modern frontend design with Laravel-powered content management.",
    technologies: ["Laravel", "Bootstrap", "CMS", "Responsive UI", "Multilingual"],
    liveUrl: "https://rajyogfoundation.org/",
    adminUrl: "https://admin.rajyogfoundation.org/login",
    period: "June 2025 - August 2025",
    highlights: [
      "Multilingual content support",
      "Social initiatives showcase",
      "Secure admin dashboard",
      "Mobile-responsive design",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl sm:text-4xl text-primary mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="font-work-sans text-xl text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary text-sm">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-card-foreground">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Site
                    </a>
                  </Button>
                  {project.adminUrl && (
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      <a href={project.adminUrl} target="_blank" rel="noopener noreferrer">
                        Admin Panel
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
