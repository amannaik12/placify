import { useState } from "react";
import { Home, User, BookOpen, FileText, Briefcase, BarChart, LogOut, BookOpen as GuideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  currentSection: 'home' | 'job-portal' | 'guides-resources' | 'placement-statistics' | 'profile' | 'courses';
  onSectionChange: (section: 'home' | 'job-portal' | 'guides-resources' | 'placement-statistics' | 'profile' | 'courses') => void;
}

const Sidebar = ({ collapsed, onToggle, currentSection, onSectionChange }: SidebarProps) => {
  const iconSize = 20;

  const menuItems = [
    { icon: <Home size={iconSize} />, label: "Home", value: 'home' },
    { icon: <User size={iconSize} />, label: "Profile", value: 'profile' },
    { icon: <BookOpen size={iconSize} />, label: "Courses", value: 'courses' },
    { icon: <GuideIcon size={iconSize} />, label: "Guides & Resources", value: 'guides-resources' },
    { icon: <Briefcase size={iconSize} />, label: "Job Portal", value: 'job-portal' },
    { icon: <BarChart size={iconSize} />, label: "Placement Statistics", value: 'placement-statistics' },
  ];

  const handleMenuClick = (value: string) => {
    if (value === 'home' || value === 'job-portal' || value === 'guides-resources' || value === 'placement-statistics' || value === 'profile' || value === 'courses') {
      onSectionChange(value as 'home' | 'job-portal' | 'guides-resources' | 'placement-statistics' | 'profile' | 'courses');
    }
  };

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
            <h1 className="text-xl font-bold font-sans">Placify</h1>
          ) : (
            <h1 className="text-xl font-bold font-sans">Plcfy</h1>
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
                  onClick={() => handleMenuClick(item.value)}
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

export default Sidebar;
