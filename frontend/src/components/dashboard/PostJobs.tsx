import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface JobPosting {
  id: string;
  title: string;
  company: string;
  postedDays: string;
}

const jobPostings: JobPosting[] = [
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
    postedDays: "3 weeks ago"
  }
];

const PostJobs = () => {
  const [jobRole, setJobRole] = useState("");
  const [duration, setDuration] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ jobRole, duration, salary, location, requirements });
    
    // Clear form after submission
    setJobRole("");
    setDuration("");
    setSalary("");
    setLocation("");
    setRequirements("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Job postings</h1>
      
      {/* Job Postings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {jobPostings.map((job) => (
          <Card key={job.id} className="bg-green-100 hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-xs text-gray-500 mb-3">{job.postedDays}</p>
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
      
      {/* Add New Job Form */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add a new Job</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="jobRole" className="block text-sm mb-1">Job Role</label>
                <Input
                  id="jobRole"
                  className="w-full bg-green-50"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
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
                  <label htmlFor="salary" className="block text-sm mb-1">Salary</label>
                  <Input
                    id="salary"
                    className="w-full bg-green-50"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
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
                  Post New Job
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostJobs; 