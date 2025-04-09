
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Placeholder data for activity chart
const activityData = [
  { day: "Mon", hours: 1.5 },
  { day: "Tue", hours: 2.3 },
  { day: "Wed", hours: 0.8 },
  { day: "Thu", hours: 3.2 },
  { day: "Fri", hours: 2.7 },
  { day: "Sat", hours: 1.9 },
  { day: "Sun", hours: 0.5 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-md shadow-md border">
        <p className="text-sm">{`${label}: ${payload[0].value} hours`}</p>
      </div>
    );
  }
  return null;
};

const ActivityChart = () => {
  return (
    <Card className="glass">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Productivity</CardTitle>
        <p className="text-sm text-gray-500">Your course progress over the week</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                hide={true}
                domain={[0, 4]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="hours" 
                fill="url(#colorGradient)" 
                radius={[4, 4, 0, 0]} 
                barSize={20}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)" />
                  <stop offset="100%" stopColor="rgba(168, 85, 247, 0.6)" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
