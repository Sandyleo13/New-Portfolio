import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Crown, Target } from "lucide-react"

const awards = [
  {
    icon: Trophy,
    title: "Best College Trophy",
    event: "Mithibai Techspark 2024",
    year: "2024",
    description:
      "Represented the department in Techspark 2024, securing the Best College Trophy in cultural and technical events. This major recognition is still showcased in the department lab.",
    color: "text-yellow-600",
  },
  {
    icon: Crown,
    title: "House Captain Appointment",
    event: "RD & SH National College",
    year: "2024-2025",
    description:
      "Appointed as House Captain for the academic year, leading teams in cultural, sports, and administrative activities during intra-college fests.",
    color: "text-purple-600",
  },
  {
    icon: Target,
    title: "District-Level Chess Representation",
    event: "RD & SH National College Sports Committee",
    year: "2022",
    description:
      "Represented college at district-level chess competition, leading the team and advancing through competitive rounds.",
    color: "text-blue-600",
  },
]

export function Awards() {
  return (
    <section id="awards" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl sm:text-4xl text-primary mb-4">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for leadership, technical excellence, and competitive achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <award.icon className={`h-8 w-8 ${award.color}`} />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-work-sans font-semibold text-lg text-primary">{award.title}</h3>
                  <p className="text-accent font-medium text-sm">{award.event}</p>
                  <p className="text-xs text-muted-foreground font-medium">{award.year}</p>
                </div>

                <p className="text-sm text-card-foreground leading-relaxed">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
