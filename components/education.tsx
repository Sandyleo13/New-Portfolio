import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, Trophy } from "lucide-react"

export function Education() {
  const achievements = [
    {
      icon: Trophy,
      title: "Best College Trophy",
      subtitle: "Techspark 2024",
      description: "Secured Best College Trophy in cultural and technical events",
    },
    {
      icon: Users,
      title: "House Captain",
      subtitle: "2024-2025",
      description: "Leading teams in cultural, sports, and administrative activities",
    },
    {
      icon: Award,
      title: "District Chess Representation",
      subtitle: "2022",
      description: "Represented college at district-level chess competition",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl sm:text-4xl text-primary mb-4">Education & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and leadership accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-work-sans text-xl text-primary">Information Technology</CardTitle>
                    <p className="text-accent font-medium">RD and SH National College and SWA Science College</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-card-foreground font-medium">Aug 2021 - Present</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">CGPA:</span>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    7.0 / 10.0
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "Database Management",
                      "Software Engineering",
                      "Mobile App Development",
                      "Cloud Computing",
                    ].map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Leadership Roles:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-card-foreground">
                    <li>Admin Sub-HOD for departmental fest Techtris (First Year)</li>
                    <li>Admin BOD for Goonj, handling Vayu House administration (Second Year)</li>
                    <li>House Captain leading intra-college events (Third Year)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="font-work-sans font-semibold text-xl text-primary text-center lg:text-left">
              Key Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <achievement.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary text-sm">{achievement.title}</h4>
                      <p className="text-xs text-accent font-medium mb-1">{achievement.subtitle}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
