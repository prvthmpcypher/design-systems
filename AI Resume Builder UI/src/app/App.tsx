import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Sparkles, Download, Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react";

type ResumeData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  jobTitle: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
};

export default function App() {
  const [template, setTemplate] = useState("modern");
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "Alex Morgan",
    email: "alex.morgan@email.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    jobTitle: "Senior Product Designer",
    summary: "Creative and results-driven product designer with 5+ years of experience crafting user-centered digital experiences.",
    experience: "Senior Product Designer at TechCorp (2021-Present)\n• Led design for 3 major product launches\n• Improved user engagement by 45%\n\nProduct Designer at StartupXYZ (2019-2021)\n• Designed mobile app used by 100K+ users",
    education: "Bachelor of Design\nDesign University, 2019",
    skills: "UI/UX Design, Figma, Adobe Creative Suite, User Research, Prototyping, Design Systems",
  });

  const updateField = (field: keyof ResumeData, value: string) => {
    setResumeData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAIEnhance = () => {
    // AI enhancement simulation
    setResumeData((prev) => ({
      ...prev,
      summary: prev.summary + " Passionate about creating innovative solutions that drive business growth and enhance user satisfaction.",
    }));
  };

  const handleExport = () => {
    alert("Exporting resume as PDF...");
  };

  return (
    <div className="size-full flex flex-col bg-background">
      {/* Top Bar */}
      <div className="border-b bg-card px-6 py-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2">
          <Sparkles className="size-5 text-primary" />
          <span>AI Resume Builder</span>
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="template" className="text-sm">Template:</Label>
            <Select value={template} onValueChange={setTemplate}>
              <SelectTrigger id="template" className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleExport} variant="default">
            <Download />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-1/2 border-r overflow-y-auto p-6 space-y-6">
          <div className="space-y-4">
            <h2>Personal Information</h2>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={resumeData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={resumeData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={resumeData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={resumeData.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="City, State"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2>Professional Details</h2>

            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                value={resumeData.jobTitle}
                onChange={(e) => updateField("jobTitle", e.target.value)}
                placeholder="e.g., Senior Software Engineer"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                value={resumeData.summary}
                onChange={(e) => updateField("summary", e.target.value)}
                placeholder="Brief overview of your professional background"
                className="min-h-24"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Work Experience</Label>
              <Textarea
                id="experience"
                value={resumeData.experience}
                onChange={(e) => updateField("experience", e.target.value)}
                placeholder="List your work experience"
                className="min-h-32"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <Textarea
                id="education"
                value={resumeData.education}
                onChange={(e) => updateField("education", e.target.value)}
                placeholder="Your educational background"
                className="min-h-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Textarea
                id="skills"
                value={resumeData.skills}
                onChange={(e) => updateField("skills", e.target.value)}
                placeholder="List your key skills, separated by commas"
                className="min-h-20"
              />
            </div>
          </div>

          <Button onClick={handleAIEnhance} variant="default" className="w-full">
            <Sparkles />
            AI Enhance Resume
          </Button>
        </div>

        {/* Right Side - Live Preview */}
        <div className="w-1/2 overflow-y-auto bg-muted/30 p-8">
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-lg p-8 space-y-6">
            {/* Header */}
            <div className="text-center border-b pb-4">
              <h1 className="text-3xl mb-2">{resumeData.name}</h1>
              <p className="text-muted-foreground mb-3">{resumeData.jobTitle}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="size-4" />
                  {resumeData.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="size-4" />
                  {resumeData.phone}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="size-4" />
                  {resumeData.location}
                </div>
              </div>
            </div>

            {/* Summary */}
            {resumeData.summary && (
              <div>
                <h2 className="flex items-center gap-2 mb-2 pb-1 border-b">
                  <Briefcase className="size-5" />
                  Professional Summary
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{resumeData.summary}</p>
              </div>
            )}

            {/* Experience */}
            {resumeData.experience && (
              <div>
                <h2 className="flex items-center gap-2 mb-2 pb-1 border-b">
                  <Briefcase className="size-5" />
                  Work Experience
                </h2>
                <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {resumeData.experience}
                </div>
              </div>
            )}

            {/* Education */}
            {resumeData.education && (
              <div>
                <h2 className="flex items-center gap-2 mb-2 pb-1 border-b">
                  <GraduationCap className="size-5" />
                  Education
                </h2>
                <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {resumeData.education}
                </div>
              </div>
            )}

            {/* Skills */}
            {resumeData.skills && (
              <div>
                <h2 className="flex items-center gap-2 mb-2 pb-1 border-b">
                  <Sparkles className="size-5" />
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}