
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const placementData = [
  {
    year: "2019",
    students: 40,
  },
  {
    year: "2020",
    students: 55,
  },
  {
    year: "2021",
    students: 70,
  },
  {
    year: "2022",
    students: 85,
  },
  {
    year: "2023",
    students: 110,
  },
];

const topStudents = [
  {
    id: 1,
    name: "Raj Sharma",
    company: "Google",
    role: "Software Engineer",
    package: "₹42 LPA",
    rank: 1,
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "Microsoft",
    role: "Product Manager",
    package: "₹38 LPA",
    rank: 2,
  },
  {
    id: 3,
    name: "Arjun Singh",
    company: "Amazon",
    role: "Software Development Engineer",
    package: "₹36 LPA",
    rank: 3,
  },
  {
    id: 4,
    name: "Kavita Reddy",
    company: "Oracle",
    role: "Database Architect",
    package: "₹32 LPA",
    rank: 4,
  },
  {
    id: 5,
    name: "Rohit Kumar",
    company: "Uber",
    role: "Backend Developer",
    package: "₹30 LPA",
    rank: 5,
  },
  {
    id: 6,
    name: "Neha Gupta",
    company: "Goldman Sachs",
    role: "Technology Analyst",
    package: "₹28 LPA",
    rank: 6,
  },
  {
    id: 7,
    name: "Vikram Choudhary",
    company: "Adobe",
    role: "UX Designer",
    package: "₹26 LPA",
    rank: 7,
  },
  {
    id: 8,
    name: "Aisha Khan",
    company: "Meta",
    role: "iOS Developer",
    package: "₹25 LPA",
    rank: 8,
  }
];

const PlacementStatistics = () => {
  return (
    <div className="space-y-8">
      {/* Chart Section */}
      <Card className="glass-card overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Annual Placement Statistics</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={placementData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderRadius: '8px',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }} 
                />
                <Bar 
                  dataKey="students" 
                  fill="url(#colorGradient)" 
                  radius={[8, 8, 0, 0]}
                  animationDuration={1500}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9b87f5" stopOpacity={1} />
                    <stop offset="100%" stopColor="#7E69AB" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard Section */}
      <Card className="glass-card overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Placement Leaderboard</h2>
          <div className="overflow-auto max-h-[400px] pr-2">
            <div className="grid gap-4">
              {topStudents.map((student) => (
                <div 
                  key={student.id}
                  className={`p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all
                    ${student.rank <= 3 
                      ? `glass-card border-2 ${
                          student.rank === 1 
                            ? 'border-yellow-300 shadow-lg shadow-yellow-100/30' 
                            : student.rank === 2 
                              ? 'border-gray-300 shadow-lg shadow-gray-100/30' 
                              : 'border-amber-600 shadow-lg shadow-amber-100/30'
                        }` 
                      : 'glass-card'}`
                  }
                >
                  <div className="flex flex-col md:flex-row items-center gap-4 flex-1">
                    {student.rank <= 3 && (
                      <div className={`flex items-center justify-center rounded-full w-10 h-10 text-white font-bold
                        ${student.rank === 1 
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-300' 
                          : student.rank === 2 
                            ? 'bg-gradient-to-r from-gray-400 to-gray-300' 
                            : 'bg-gradient-to-r from-amber-600 to-amber-500'}`
                        }
                      >
                        {student.rank}
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{student.name}</h3>
                      <p className="text-sm opacity-80">{student.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-white/30 px-4 py-2 rounded-lg text-center">
                      <p className="text-sm opacity-70">Company</p>
                      <p className="font-medium">{student.company}</p>
                    </div>

                    <div className="bg-white/30 px-4 py-2 rounded-lg text-center">
                      <p className="text-sm opacity-70">Package</p>
                      <p className="font-medium">{student.package}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlacementStatistics;
