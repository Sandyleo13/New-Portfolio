import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl sm:text-4xl text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with a strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-card-foreground leading-relaxed">
              I'm a Full-Stack Web Developer specializing in Laravel and React with experience in creating scalable,
              user-focused applications. My journey in web development has been driven by a passion for solving complex
              problems and creating innovative digital solutions.
            </p>
            <p className="text-card-foreground leading-relaxed">
              Currently pursuing Information Technology at RD and SH National College, I complement my academic learning
              with hands-on experience through internships and personal projects. I have strong problem-solving skills
              and exposure to AI integration and automation tools.
            </p>
            <p className="text-card-foreground leading-relaxed">
              Beyond coding, I'm actively involved in leadership roles, having served as House Captain and participated
              in various technical competitions. I believe in continuous learning and staying updated with the latest
              trends in software development.
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-work-sans font-semibold text-lg text-primary mb-3">Quick Facts</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-card-foreground">Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="text-card-foreground">IT Student (7.0 CGPA)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="text-card-foreground">Full-Stack Intern</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages:</span>
                    <span className="text-card-foreground">4 (EN, HI, MR, BN)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-work-sans font-semibold text-lg text-primary mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Mobile App Development",
                    "AI & Automation",
                    "Open Source",
                    "Cybersecurity",
                    "Chess",
                  ].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
