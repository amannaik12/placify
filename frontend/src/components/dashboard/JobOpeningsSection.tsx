
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  postedTime: string;
  description: string;
  requirements: string[];
  image: string;
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Backend Development",
    company: "Emergence Ltd",
    location: "Remote",
    salary: "10-14 LPA",
    postedTime: "1 day ago",
    description: "Join our backend team to build robust APIs and server-side applications.",
    requirements: [
      "3+ years of experience with Node.js or Python",
      "Strong knowledge of database design (SQL/NoSQL)",
      "Experience with containerization (Docker)",
      "Understanding of cloud services (AWS/Azure/GCP)",
      "Experience with CI/CD pipelines"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "2",
    title: "Cyberforensics",
    company: "Emergence Ltd",
    location: "Hybrid",
    salary: "12-18 LPA",
    postedTime: "1 day ago",
    description: "Work on digital forensics investigations and help secure our client's systems.",
    requirements: [
      "Background in computer forensics or cybersecurity",
      "Knowledge of forensic tools and techniques",
      "Understanding of security vulnerabilities and exploits",
      "Experience with incident response",
      "Certifications like GCFA, EnCE, or equivalent"
    ],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "3",
    title: "Game Development",
    company: "Emergence Ltd",
    location: "On-site",
    salary: "8-15 LPA",
    postedTime: "1 day ago",
    description: "Create engaging gaming experiences using cutting-edge technologies.",
    requirements: [
      "Experience with Unity or Unreal Engine",
      "Strong programming skills in C# or C++",
      "3D modeling and animation knowledge",
      "Understanding of game physics and mechanics",
      "Portfolio demonstrating game development projects"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: "4",
    title: "Software Tester",
    company: "Emergence Ltd",
    location: "Remote",
    salary: "6-10 LPA",
    postedTime: "1 day ago",
    description: "Ensure software quality through comprehensive testing methodologies.",
    requirements: [
      "Experience with manual and automated testing",
      "Knowledge of testing frameworks (Selenium, JUnit, etc.)",
      "Understanding of CI/CD workflows",
      "Experience writing detailed test cases",
      "Bug reporting and tracking skills"
    ],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  }
];

const JobOpeningsSection = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [isQuizDialogOpen, setIsQuizDialogOpen] = useState(false);
  
  const handleOpenDetails = (job: Job) => {
    setSelectedJob(job);
    setIsDetailDialogOpen(true);
  };
  
  const handleApplyNow = () => {
    setIsDetailDialogOpen(false);
    setIsQuizDialogOpen(true);
  };
  
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Job Openings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <Card 
              key={job.id} 
              className="glass-card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-purple-100/40 to-pink-100/40 backdrop-blur-md"
              onClick={() => handleOpenDetails(job)}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <p>{job.location}</p>
                  <p>{job.postedTime}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 bg-purple-100/50 hover:bg-purple-200/50"
                >
                  Know More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedJob && (
        <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
          <DialogContent className="sm:max-w-[700px] bg-gradient-to-br from-purple-100/80 to-pink-200/80 backdrop-blur-xl">
            <DialogHeader>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-4 top-4" 
                onClick={() => setIsDetailDialogOpen(false)}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Go back</span>
              </Button>
              <div className="w-full aspect-[3/1] rounded-lg overflow-hidden mb-4 mt-6">
                <img 
                  src={selectedJob.image} 
                  alt={selectedJob.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <DialogTitle className="text-2xl mb-1">{selectedJob.title}</DialogTitle>
                <p className="text-lg">{selectedJob.company}</p>
              </div>
            </DialogHeader>
            <div className="grid gap-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Job Details</h3>
                <div className="space-y-1">
                  <p><span className="font-medium">Salary:</span> {selectedJob.salary}</p>
                  <p><span className="font-medium">Location:</span> {selectedJob.location}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Requirements</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ol>
              </div>
              <p>{selectedJob.description}</p>
            </div>
            <DialogFooter>
              <Button onClick={handleApplyNow} className="w-full md:w-auto bg-pink-400 hover:bg-pink-500">
                Apply Now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      <Dialog open={isQuizDialogOpen} onOpenChange={setIsQuizDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-purple-200/80 to-pink-200/80 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-center">Application Process</DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-lg">You will have to answer a short quiz to be able apply for this job/internship</p>
          </div>
          <DialogFooter className="flex justify-center">
            <Button onClick={() => setIsQuizDialogOpen(false)} className="bg-pink-400 hover:bg-pink-500 px-8">
              Answer Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobOpeningsSection;
