
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RecruiterWelcomeBlock = () => {
  return (
    <Card className="glass-card mb-6 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Side Content */}
        <div className="p-6 md:p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-2">Hello John!</h2>
          <p className="text-gray-600 mb-6">How can I help you?</p>
          <div className="bg-white/50 rounded-full px-4 py-2 w-full md:w-3/4 flex items-center">
            <span className="text-gray-500">Type your doubts here</span>
          </div>
        </div>
        
        {/* Right Side Image */}
        <div className="bg-indigo-100/70 p-6 md:w-1/3 flex flex-col items-center justify-center">
          <img 
            src="/lovable-uploads/6202e298-c9d2-4f8b-a32b-46e26908fbb9.png"
            alt="AI Assistant" 
            className="h-32 object-contain" 
          />
          <div className="flex gap-2 mt-4">
            <Button size="icon" variant="outline" className="rounded-full">
              <ArrowLeft size={16} />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecruiterWelcomeBlock;
