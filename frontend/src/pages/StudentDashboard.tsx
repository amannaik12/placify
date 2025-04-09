import { useState } from "react";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import WelcomeBlock from "@/components/dashboard/WelcomeBlock";
import CourseSection from "@/components/dashboard/CourseSection";
import RecommendedCourses from "@/components/dashboard/RecommendedCourses";
import JobPortal from "@/components/dashboard/JobPortal";
import JobPostings from "@/components/dashboard/JobPostings";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import ActivityChart from "@/components/dashboard/ActivityChart";
import PlacementStatistics from "@/components/dashboard/PlacementStatistics";
import GuidesResources from "@/components/dashboard/GuidesResources";
import Profile from "@/components/dashboard/Profile";
import MyCourses from "@/components/dashboard/MyCourses";

const StudentDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentSection, setCurrentSection] = useState<'home' | 'job-portal' | 'guides-resources' | 'placement-statistics' | 'profile' | 'courses'>('home');
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  const contentMargin = sidebarCollapsed ? "ml-[70px]" : "ml-[250px]";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex">
      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={toggleSidebar} 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      
      {/* Main Content */}
      <div 
        className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          contentMargin
        )}
      >
        {/* Top Bar */}
        <TopBar toggleSidebar={toggleSidebar} />
        
        {/* Content Area */}
        <div className="p-4 md:p-6">
          {currentSection === 'home' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content Column */}
              <div className="lg:col-span-2">
                <WelcomeBlock />
                <MyCourses />
                <JobPostings />
              </div>
              
              {/* Right Sidebar */}
              <div className="space-y-6">
                <NotificationsPanel />
                <ActivityChart />
              </div>
            </div>
          ) : currentSection === 'job-portal' ? (
            <JobPortal />
          ) : currentSection === 'guides-resources' ? (
            <GuidesResources />
          ) : currentSection === 'placement-statistics' ? (
            <PlacementStatistics />
          ) : currentSection === 'profile' ? (
            <Profile />
          ) : currentSection === 'courses' ? (
            <div className="space-y-8">
              <CourseSection />
              <RecommendedCourses />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
