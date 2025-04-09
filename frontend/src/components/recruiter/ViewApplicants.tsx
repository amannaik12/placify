
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const applicants = [
  { id: 1, name: "Cody Fischer", position: "Software Development Intern" },
  { id: 2, name: "Esther Howard", position: "Marketing Intern" },
  { id: 3, name: "Kristin Watson", position: "Data Analyst" },
  { id: 4, name: "Arlene McCoy", position: "Product Manager" },
  { id: 5, name: "Brooklyn Simmons", position: "UI/UX Designer" },
  { id: 6, name: "Leslie Alexander", position: "Frontend Developer" },
  { id: 7, name: "Jenny Wilson", position: "Backend Developer" }
];

const ViewApplicants = () => {
  return (
    <div className="space-y-6">
      {/* Application Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500">Internships</h3>
            <p className="text-4xl font-bold mt-2">285</p>
            <p className="text-sm text-gray-500 mt-1">applications received</p>
          </div>
        </Card>
        
        <Card className="glass-card p-6">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500">Placements</h3>
            <p className="text-4xl font-bold mt-2">127</p>
            <p className="text-sm text-gray-500 mt-1">applications received</p>
          </div>
        </Card>
      </div>
      
      {/* Applicants Table */}
      <Card className="glass-card">
        <CardHeader className="pb-0">
          <CardTitle className="text-xl">Applicants</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id} className="hover:bg-white/20">
                  <TableCell className="font-medium">{applicant.name}</TableCell>
                  <TableCell>{applicant.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewApplicants;
