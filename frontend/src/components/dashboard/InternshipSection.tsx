
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";

interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  postedTime: string;
  description: string;
  stipend: string;
  requirements: string[];
  image: string;
}

const internships: Internship[] = [
  {
    id: "1",
    title: "Frontend Development",
    company: "Emergence Ltd",
    location: "Remote",
    duration: "6 Months",
    postedTime: "1 day ago",
    stipend: "20k Rupees/Month",
    description: "Join our team to work on exciting web projects and gain real-world experience in frontend development.",
    requirements: [
      "Strong knowledge of HTML, CSS, and JavaScript",
      "Responsive design using Flexbox/Grid & media queries",
      "Experience with a framework like React.js",
      "Version control using Git & GitHub",
      "Understanding of API integration (fetching and displaying data)"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: "2",
    title: "Backend Development",
    company: "Emergence Ltd",
    location: "Hybrid",
    duration: "3 Months",
    postedTime: "3 days ago",
    stipend: "25k Rupees/Month",
    description: "Work on our server infrastructure and develop APIs that power our applications.",
    requirements: [
      "Knowledge of Python, Node.js, or Java",
      "Basic understanding of databases (SQL/NoSQL)",
      "Experience with RESTful API design",
      "Understanding of server deployment",
      "Version control with Git"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "3",
    title: "Cybersecurity",
    company: "Emergence Ltd",
    location: "On-site",
    duration: "4 Months",
    postedTime: "6 days ago",
    stipend: "30k Rupees/Month",
    description: "Help us strengthen our security protocols and learn about real-world cybersecurity challenges.",
    requirements: [
      "Basic understanding of network security",
      "Knowledge of common security vulnerabilities",
      "Familiarity with security tools and practices",
      "Problem-solving skills",
      "Understanding of privacy regulations"
    ],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "4",
    title: "Data Analytics",
    company: "Emergence Ltd",
    location: "Remote",
    duration: "5 Months",
    postedTime: "2 weeks ago",
    stipend: "28k Rupees/Month",
    description: "Analyze data patterns and help our team make data-driven decisions.",
    requirements: [
      "Experience with data analysis tools (Excel, Python, or R)",
      "Basic statistical knowledge",
      "Data visualization skills",
      "Attention to detail",
      "Strong analytical thinking"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

const InternshipSection = () => {
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [isQuizDialogOpen, setIsQuizDialogOpen] = useState(false);
  
  const handleOpenDetails = (internship: Internship) => {
    setSelectedInternship(internship);
    setIsDetailDialogOpen(true);
  };
  
  const handleApplyNow = () => {
    setIsDetailDialogOpen(false);
    setIsQuizDialogOpen(true);
  };
  
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Internship Opportunities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internships.map((internship) => (
            <Card 
              key={internship.id} 
              className="glass-card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-green-100/40 to-green-200/40 backdrop-blur-md"
              onClick={() => handleOpenDetails(internship)}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{internship.title}</h3>
                <p className="text-sm text-gray-600">{internship.company}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <p>{internship.location}</p>
                  <p>{internship.postedTime}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 bg-blue-100/50 hover:bg-blue-200/50"
                >
                  Know More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedInternship && (
        <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
          <DialogContent className="sm:max-w-[700px] bg-gradient-to-br from-blue-100/80 to-blue-300/80 backdrop-blur-xl">
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
                  src={selectedInternship.image} 
                  alt={selectedInternship.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <DialogTitle className="text-2xl mb-1">{selectedInternship.title}</DialogTitle>
                <p className="text-lg">{selectedInternship.company}</p>
              </div>
            </DialogHeader>
            <div className="grid gap-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Internship</h3>
                <div className="space-y-1">
                  <p><span className="font-medium">Duration:</span> {selectedInternship.duration}</p>
                  <p><span className="font-medium">Stipend:</span> {selectedInternship.stipend}</p>
                  <p><span className="font-medium">Location:</span> {selectedInternship.location}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Requirements</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  {selectedInternship.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ol>
              </div>
              <p>{selectedInternship.description}</p>
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
        <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-blue-200/80 to-blue-300/80 backdrop-blur-xl">
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

export default InternshipSection;
