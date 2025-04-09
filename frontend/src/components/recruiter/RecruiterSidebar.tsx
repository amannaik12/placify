import { Briefcase, Home, LogOut, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RecruiterSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  currentSection: 'home' | 'post-internships' | 'post-jobs' | 'view-applicants';
  onSectionChange: (section: 'home' | 'post-internships' | 'post-jobs' | 'view-applicants') => void;
}

const RecruiterSidebar = ({ collapsed, onToggle, currentSection, onSectionChange }: RecruiterSidebarProps) => {
  const iconSize = 20;

  const menuItems = [
    { icon: <Home size={iconSize} />, label: "Home", value: 'home' },
    { icon: <Briefcase size={iconSize} />, label: "Post Internships", value: 'post-internships' },
    { icon: <Briefcase size={iconSize} />, label: "Post Jobs", value: 'post-jobs' },
    { icon: <Users size={iconSize} />, label: "View Applicants", value: 'view-applicants' },
  ];

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 ease-in-out z-30",
        collapsed ? "w-[70px]" : "w-[250px]"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-center border-b border-gray-800">
          {!collapsed ? (
            <h1 className="text-xl font-bold font-sans">Plcfy</h1>
          ) : (
            <h1 className="text-xl font-bold font-sans">P</h1>
          )}
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-8">
          <ul className="space-y-2 px-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full flex items-center justify-start px-5 py-3 text-gray-300 hover:text-white rounded-full font-medium transition-all duration-200",
                    (currentSection === item.value) && "bg-[#E8B7CB] text-black font-semibold"
                  )}
                  onClick={() => onSectionChange(item.value as any)}
                >
                  <div className="flex items-center">
                    {item.icon}
                    {!collapsed && (
                      <span className="ml-4 font-sans">{item.label}</span>
                    )}
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Logout Button */}
        <div className="p-4">
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-start px-5 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-full"
          >
            <LogOut size={iconSize} />
            {!collapsed && (
              <span className="ml-4 font-sans">Logout</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterSidebar;
