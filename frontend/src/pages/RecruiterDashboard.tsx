import { useState } from "react";
import { cn } from "@/lib/utils";
import RecruiterSidebar from "@/components/recruiter/RecruiterSidebar";
import RecruiterTopBar from "@/components/recruiter/RecruiterTopBar";
import RecruiterWelcomeBlock from "@/components/recruiter/RecruiterWelcomeBlock";
import RecruiterStatistics from "@/components/recruiter/RecruiterStatistics";
import RecruiterNotifications from "@/components/recruiter/RecruiterNotifications";
import ViewApplicants from "@/components/recruiter/ViewApplicants";
import PostJobs from "@/components/dashboard/PostJobs";
import PostInternships from "@/components/dashboard/PostInternships";

const RecruiterDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentSection, setCurrentSection] = useState<'home' | 'post-internships' | 'post-jobs' | 'view-applicants'>('home');
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  const contentMargin = sidebarCollapsed ? "ml-[70px]" : "ml-[250px]";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex">
      {/* Sidebar */}
      <RecruiterSidebar 
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
        <RecruiterTopBar toggleSidebar={toggleSidebar} />
        
        {/* Content Area */}
        <div className="p-4 md:p-6">
          {currentSection === 'home' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content Column */}
              <div className="lg:col-span-2">
                <RecruiterWelcomeBlock />
                <RecruiterStatistics />
              </div>
              
              {/* Right Sidebar */}
              <div className="space-y-6">
                <RecruiterNotifications />
              </div>
            </div>
          ) : currentSection === 'view-applicants' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content Column */}
              <div className="lg:col-span-2">
                <RecruiterWelcomeBlock />
                <ViewApplicants />
              </div>
              
              {/* Right Sidebar */}
              <div className="space-y-6">
                <RecruiterNotifications />
              </div>
            </div>
          ) : currentSection === 'post-jobs' ? (
            <PostJobs />
          ) : currentSection === 'post-internships' ? (
            <PostInternships />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
