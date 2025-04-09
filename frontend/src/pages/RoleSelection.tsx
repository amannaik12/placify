
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const RoleSelection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl glass-card">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome to the Training & Placement Cell</CardTitle>
          <CardDescription className="text-lg mt-2">
            Please select your role to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card className="glass-card hover:shadow-lg transition-all duration-300 hover:bg-white/30">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-center">Student</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Access courses, apply for jobs and internships, and track your placement journey.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/student-dashboard">Continue as Student</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="glass-card hover:shadow-lg transition-all duration-300 hover:bg-white/30">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="text-center">Recruiter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Post job openings, review applications, and connect with potential candidates.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/recruiter-dashboard">Continue as Recruiter</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleSelection;
