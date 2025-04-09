
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, Upload } from "lucide-react";

interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  postedDate: string;
  description: string;
  requirements: string[];
  salaryRange: string;
  backgroundColor: string;
}

const jobPostings: JobPosting[] = [
  {
    id: "1",
    title: "Frontend Development",
    company: "TechGlobal Ltd",
    location: "Remote",
    experience: "Entry Level",
    postedDate: "1 day ago",
    description: "We are looking for a passionate Frontend Developer to join our team. You'll be working on cutting-edge web applications using modern JavaScript frameworks.",
    requirements: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
    salaryRange: "$60,000 - $80,000",
    backgroundColor: "from-green-200 to-green-100"
  },
  {
    id: "2",
    title: "Backend Development",
    company: "InnovateSoft",
    location: "Hybrid",
    experience: "Mid Level",
    postedDate: "1 day ago",
    description: "Join our backend team to design and implement scalable APIs and server-side solutions for our growing product suite.",
    requirements: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
    salaryRange: "$80,000 - $100,000",
    backgroundColor: "from-purple-200 to-purple-100"
  },
  {
    id: "3",
    title: "Java Full Stack",
    company: "Enterprise Solutions",
    location: "On-site",
    experience: "Entry Level",
    postedDate: "1 day ago",
    description: "Looking for Java developers with knowledge of Spring Boot and modern frontend frameworks to build enterprise applications.",
    requirements: ["Java", "Spring Boot", "SQL", "JavaScript"],
    salaryRange: "$70,000 - $90,000",
    backgroundColor: "from-blue-200 to-blue-100"
  }
];

const quizQuestions = [
  {
    id: "q1",
    question: "Which of the following is NOT a JavaScript framework or library?",
    options: ["React", "Vue", "Angular", "Jakarta"]
  },
  {
    id: "q2",
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets", 
      "Cascading Style Sheets", 
      "Creative Style Sheets", 
      "Colorful Style Sheets"
    ]
  },
  {
    id: "q3",
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<css>", "<style>", "<link>"]
  }
];

const JobPostings = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  
  const handleOpenJobDetails = (job: JobPosting) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
    setIsQuizMode(false);
    setQuizSubmitted(false);
  };
  
  const handleStartQuiz = () => {
    setIsQuizMode(true);
    setAnswers({});
    setQuizSubmitted(false);
  };
  
  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };
  
  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
  };
  
  const calcQuizScore = () => {
    // In a real app, this would calculate the actual score based on correct answers
    return `${Math.floor(Math.random() * 4)}/3`;
  };
  
  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Latest Job Postings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobPostings.map((job) => (
            <Card 
              key={job.id}
              className={`rounded-xl hover:shadow-lg transition-shadow cursor-pointer overflow-hidden bg-gradient-to-br ${job.backgroundColor}`}
              onClick={() => handleOpenJobDetails(job)}
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                <p className="text-gray-700 mb-4">{job.company}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-white/50">
                    {job.location}
                  </Badge>
                  <Badge variant="outline" className="bg-white/50">
                    {job.experience}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{job.postedDate}</span>
                  <Button size="sm">Know More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedJob && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            {!isQuizMode ? (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedJob.title}</DialogTitle>
                  <DialogDescription>{selectedJob.company} • {selectedJob.location}</DialogDescription>
                </DialogHeader>
                <div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Description</h4>
                    <p className="text-gray-700">{selectedJob.description}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Requirements</h4>
                    <ul className="list-disc pl-5">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="text-gray-700">{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>
                      <h4 className="font-semibold mb-1">Salary Range</h4>
                      <p className="text-gray-700">{selectedJob.salaryRange}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Posted</h4>
                      <p className="text-gray-700">{selectedJob.postedDate}</p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Close</Button>
                  <Button onClick={handleStartQuiz}>Take Quiz</Button>
                </DialogFooter>
              </>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle>
                    {quizSubmitted ? "Quiz Results" : `Quiz for ${selectedJob.title} Position`}
                  </DialogTitle>
                </DialogHeader>
                
                {!quizSubmitted ? (
                  <div className="space-y-6">
                    {quizQuestions.map((q) => (
                      <div key={q.id} className="space-y-3">
                        <h4 className="font-medium">{q.question}</h4>
                        <RadioGroup 
                          onValueChange={(value) => handleAnswerChange(q.id, value)}
                          value={answers[q.id] || ""}
                        >
                          {q.options.map((option, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <RadioGroupItem value={option} id={`${q.id}-${i}`} />
                              <Label htmlFor={`${q.id}-${i}`}>{option}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6 py-4">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">Quiz Completed!</h3>
                      <p className="text-gray-600 mb-4">Your score: {calcQuizScore()}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="mb-4">Based on your score, you're eligible to apply for this position.</p>
                      <Button className="flex items-center gap-2" onClick={() => alert("Upload feature will be implemented later")}>
                        <Upload className="h-4 w-4" />
                        <span>Upload Resume</span>
                      </Button>
                    </div>
                  </div>
                )}
                
                <DialogFooter>
                  {!quizSubmitted ? (
                    <>
                      <Button variant="outline" onClick={() => setIsQuizMode(false)}>Back</Button>
                      <Button 
                        onClick={handleSubmitQuiz}
                        disabled={Object.keys(answers).length !== quizQuestions.length}
                      >
                        Submit
                      </Button>
                    </>
                  ) : (
                    <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
                  )}
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default JobPostings;
