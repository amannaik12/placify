import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface InternshipPosting {
  id: string;
  title: string;
  company: string;
  postedDays: string;
}

const internshipPostings: InternshipPosting[] = [
  {
    id: "1",
    title: "Frontend Development",
    company: "Emergence Ltd",
    postedDays: "1 day ago"
  },
  {
    id: "2",
    title: "Backend Development",
    company: "Emergence Ltd",
    postedDays: "3 days ago"
  },
  {
    id: "3",
    title: "Cybersecurity",
    company: "Emergence Ltd",
    postedDays: "5 days ago"
  },
  {
    id: "4",
    title: "Data Analytics",
    company: "Emergence Ltd",
    postedDays: "2 weeks ago"
  }
];

const PostInternships = () => {
  const [internshipRole, setInternshipRole] = useState("");
  const [duration, setDuration] = useState("");
  const [stipend, setStipend] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ internshipRole, duration, stipend, location, requirements });
    
    // Clear form after submission
    setInternshipRole("");
    setDuration("");
    setStipend("");
    setLocation("");
    setRequirements("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Internship postings</h1>
      
      {/* Internship Postings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {internshipPostings.map((internship) => (
          <Card key={internship.id} className="bg-green-100 hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{internship.title}</h3>
              <p className="text-sm text-gray-600">{internship.company}</p>
              <p className="text-xs text-gray-500 mb-3">{internship.postedDays}</p>
              <Button 
                variant="secondary" 
                size="sm" 
                className="text-xs bg-white hover:bg-gray-100 text-blue-600 w-full"
              >
                Know More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Add New Internship Form */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add a new Internship</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="internshipRole" className="block text-sm mb-1">Internship Role</label>
                <Input
                  id="internshipRole"
                  className="w-full bg-green-50"
                  value={internshipRole}
                  onChange={(e) => setInternshipRole(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="duration" className="block text-sm mb-1">Duration</label>
                  <Input
                    id="duration"
                    className="w-full bg-green-50"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="stipend" className="block text-sm mb-1">Stipend</label>
                  <Input
                    id="stipend"
                    className="w-full bg-green-50"
                    value={stipend}
                    onChange={(e) => setStipend(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm mb-1">Location</label>
                  <Input
                    id="location"
                    className="w-full bg-green-50"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="requirements" className="block text-sm mb-1">Requirements</label>
                <Textarea
                  id="requirements"
                  className="w-full bg-green-50 min-h-[100px]"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white"
                >
                  Post New Internship
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostInternships; 