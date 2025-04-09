
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', jobsOffered: 5, internshipsOffered: 7, studentsPlaced: 4, students: 3 },
  { name: 'Feb', jobsOffered: 10, internshipsOffered: 6, studentsPlaced: 5, students: 4 },
  { name: 'Mar', jobsOffered: 18, internshipsOffered: 15, studentsPlaced: 8, students: 7 },
  { name: 'Q1', jobsOffered: 15, internshipsOffered: 12, studentsPlaced: 7, students: 6 },
  { name: 'May', jobsOffered: 10, internshipsOffered: 8, studentsPlaced: 6, students: 3 },
  { name: 'Jun', jobsOffered: 4, internshipsOffered: 3, studentsPlaced: 2, students: 1 },
  { name: 'Q2', jobsOffered: 7, internshipsOffered: 5, studentsPlaced: 4, students: 6 },
  { name: 'Jul', jobsOffered: 3, internshipsOffered: 2, studentsPlaced: 1, students: 3 },
  { name: 'Aug', jobsOffered: 11, internshipsOffered: 9, studentsPlaced: 7, students: 17 },
  { name: 'Sep', jobsOffered: 7, internshipsOffered: 5, studentsPlaced: 4, students: 10 },
  { name: 'Q3', jobsOffered: 8, internshipsOffered: 6, studentsPlaced: 5, students: 7 },
  { name: 'Nov', jobsOffered: 4, internshipsOffered: 3, studentsPlaced: 5, students: 6 },
  { name: 'Q4', jobsOffered: 11, internshipsOffered: 8, studentsPlaced: 7, students: 5 },
];

const RecruiterStatistics = () => {
  return (
    <Card className="chart-container mb-6">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl">Recruiter Statistics</CardTitle>
        <Select defaultValue="monthly">
          <SelectTrigger className="w-[120px] bg-white/50">
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Legend />
              <Bar dataKey="jobsOffered" name="Jobs Offered" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="internshipsOffered" name="Internships Offered" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="studentsPlaced" name="Students Placed (Jobs)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              <Bar dataKey="students" name="Students" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecruiterStatistics;
