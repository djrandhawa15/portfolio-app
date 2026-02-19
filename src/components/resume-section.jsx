import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Resume
          </h2>
          <Button asChild className="gap-2">
            <a href="/Dilraj_Randhawa_Resume.pdf" download>
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="space-y-8">
          {/* Summary */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Full-Stack Developer with hands-on experience building web applications. Developed an inventory management system using React, Node.js, and PostgreSQL that streamlined supply tracking, and created a responsive e-commerce site that reduced page load time by 40%. Skilled in JavaScript, TypeScript, C#, Python, cloud services, and Agile collaboration. Eager to leverage these abilities to deliver high-quality solutions as a software engineering intern.
              </p>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Briefcase className="w-5 h-5" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">International Longshore and Warehouse Union</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">Union Worker &middot; Surrey, BC</p>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 sm:mt-0">Oct 2014 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 dark:text-zinc-300 mt-3">
                  <li>Load and unload cargo from ships, handling containers, bulk goods, and other items with cranes and forklifts while following safety protocols, keeping vessel turnaround on schedule and maintaining zero injury incidents.</li>
                  <li>Operate specialized equipment—including cranes, forklifts, and tractor-trailers—to move cargo across the dock, ensuring smooth workflow and preventing equipment downtime, supporting continuous operations during peak shifts.</li>
                  <li>Respond to emergencies such as accidents, spills, and equipment failures as a certified first-aid attendant, providing immediate care and containment that minimizes downtime and protects crew safety.</li>
                  <li>Handle hazardous materials by following OSHA-approved procedures and using proper containment equipment, ensuring regulatory compliance and preventing safety incidents.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">British Columbia Institute of Technology (BCIT)</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">Full Stack Development Diploma, Front End Web Development Certificate, Coding Classes in Python/C++</p>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 sm:mt-0">2023 - 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300 mt-2">
                  <li><strong>Achievements:</strong> Graduated With Distinction</li>
                  <li><strong>Coursework:</strong> Web Application Development, Database Management, Cloud Computing, IT Law, Business Communications, Software Development, Mathematics for Computing, Digital Marketing, Entrepreneurship</li>
                </ul>
              </div>

              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Kwantlen Polytechnic University</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">Bachelor of Science, Biology</p>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 sm:mt-0">2014 - 2022</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Award className="w-5 h-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Certified Scrum Master</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Scrum Alliance</p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 sm:mt-0">2025 - 2027</span>
              </div>
              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Digital Marketing Certificate</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Stukent, Inc. (Perpetual Certificate)</p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 sm:mt-0">2025</span>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Coding Languages</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Angular", "C#", "C++", "HTML5", "CSS", "JavaScript", "TypeScript", "SaaS", "PHP"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Back-End</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Python (FastAPI)", "Ruby on Rails", ".NET", "Next.js", "Hono", "Bun", "YAML"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Databases</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["MySQL", "PostgreSQL", "Firebase", "MongoDB"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Development Tools</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Git", "GitHub", "RESTful APIs", "Docker", "Adobe Photoshop", "Figma", "VS Code", "Vercel", "Render", "Jira", "Trello", "Slack", "MySQL Bench", "Avian", "Linux", "Windows", "Mac OS"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Other</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Agile", "Kanban", "CI/CD", "Cloud Computing", "CSM", "DOM", "Marketing", "IT Law", "Networking", "VM", "AWS S3", "E-commerce", "UI Design", "UX Design", "SEO"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
