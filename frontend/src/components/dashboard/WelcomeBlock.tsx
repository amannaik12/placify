import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";

const WelcomeBlock = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [question, setQuestion] = useState("");
  
  return (
    <>
      <div className="relative mb-12 overflow-visible">
        <div className="bg-[#8495F4] rounded-xl backdrop-blur-md border border-white/20 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-white drop-shadow-md">
                Hello John!
              </h1>
              <p className="text-white/90 text-xl font-medium">How can I help you today?</p>
            </div>
            
            <div className="relative p-6 flex items-center justify-center">
              {/* Message box */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-md w-[80%] z-10 absolute top-10 md:top-auto">
                <Input 
                  placeholder="Type your doubts here" 
                  className="border-none bg-transparent focus-visible:ring-0 text-gray-800 placeholder:text-gray-500"
                  onClick={() => setIsDialogOpen(true)}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Robot image that extends outside the welcome block */}
        <div className="absolute bottom-0 right-8 md:right-12 translate-y-1/4 w-48 h-48 md:w-56 md:h-56">
          <img 
            src="/chatbot.png" 
            alt="AI Assistant" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Chat with AI Assistant</DialogTitle>
          </DialogHeader>
          <div className="h-[300px] bg-gray-50 rounded-md p-4 overflow-y-auto mb-4">
            <div className="flex flex-col gap-3">
              <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">Hi John, how can I help you today?</p>
              </div>
              {question && (
                <>
                  <div className="bg-gray-200 rounded-lg p-3 max-w-[80%] self-end">
                    <p className="text-sm">{question}</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">I'm just a placeholder response. In the real application, I would answer your question about "{question}".</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="relative">
            <Input 
              placeholder="Type your question here..." 
              className="pr-10"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button 
              size="icon" 
              className="absolute right-0 top-0 h-full rounded-l-none"
              onClick={() => {
                if (question.trim()) {
                  // In a real application, this would send the question to an API
                  console.log("Question submitted:", question);
                }
              }}
            >
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WelcomeBlock;
