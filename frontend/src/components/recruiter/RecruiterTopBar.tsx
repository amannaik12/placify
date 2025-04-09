import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RecruiterTopBarProps {
  toggleSidebar: () => void;
}

const RecruiterTopBar = ({ toggleSidebar }: RecruiterTopBarProps) => {
  return (
    <div className="glass h-20 flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="search-container max-w-2xl w-full mx-4">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600 z-10" />
        <Input 
          type="text"
          placeholder="Search for anything..." 
          className="pl-14 glass-input w-full"
        />
      </div>
      
      <div className="flex-1 max-w-[100px]">
        {/* Empty space for balance */}
      </div>
    </div>
  );
};

export default RecruiterTopBar;
