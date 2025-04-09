
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Notification {
  id: string;
  message: string;
  time: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    message: "New Job posting available!",
    time: "Just now"
  },
  {
    id: "2",
    message: "Your Application for MN TECH has been accepted.",
    time: "2 hours ago"
  },
  {
    id: "3",
    message: "Check out the suggested courses for you.",
    time: "3 hours ago"
  },
  {
    id: "4",
    message: "New Job posting available!",
    time: "5 hours ago"
  }
];

const RecruiterNotifications = () => {
  return (
    <Card className="glass mb-8">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="bg-white/40 rounded-lg p-3 border border-white/50 hover:shadow-md transition-shadow cursor-pointer"
          >
            <p className="text-sm mb-1">{notification.message}</p>
            <span className="text-xs text-gray-500">{notification.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecruiterNotifications;
