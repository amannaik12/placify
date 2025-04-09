
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  message: string;
  type: "info" | "success" | "warning";
  time: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    message: "New job posting available!",
    type: "info",
    time: "Just now"
  },
  {
    id: "2",
    message: "Your application for MN TECH has been accepted.",
    type: "success",
    time: "2 hours ago"
  },
  {
    id: "3",
    message: "Check out the suggested courses for you.",
    type: "info",
    time: "3 hours ago"
  },
  {
    id: "4",
    message: "New job posting available!",
    type: "info",
    time: "5 hours ago"
  }
];

const NotificationsPanel = () => {
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
            <div className="flex justify-between items-start mb-1">
              <Badge 
                variant="outline" 
                className={`
                  ${notification.type === 'success' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                  ${notification.type === 'warning' ? 'bg-amber-100 text-amber-800 border-amber-200' : ''}
                  ${notification.type === 'info' ? 'bg-blue-100 text-blue-800 border-blue-200' : ''}
                `}
              >
                {notification.type}
              </Badge>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm">{notification.message}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default NotificationsPanel;
