
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AppliedListing {
  id: string;
  title: string;
  company: string;
  type: "internship" | "job";
  status: "applied" | "in-review" | "interview" | "rejected" | "accepted";
  appliedDate: string;
}

const appliedListings: AppliedListing[] = [
  {
    id: "1",
    title: "Java Full Stack",
    company: "Emergence Ltd",
    type: "job",
    status: "applied",
    appliedDate: "1 day ago"
  },
  {
    id: "2",
    title: "AI Developer",
    company: "Emergence Ltd",
    type: "internship",
    status: "in-review",
    appliedDate: "1 day ago"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "applied": return "bg-blue-100 text-blue-800";
    case "in-review": return "bg-yellow-100 text-yellow-800";
    case "interview": return "bg-purple-100 text-purple-800";
    case "rejected": return "bg-red-100 text-red-800";
    case "accepted": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "in-review": return "In Review";
    default: return status.charAt(0).toUpperCase() + status.slice(1);
  }
};

const AppliedListingsSection = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Internships and Jobs applied for</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {appliedListings.map((listing) => (
          <Card 
            key={listing.id} 
            className="glass-card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-blue-50/40 to-blue-100/40 backdrop-blur-md border border-blue-200/50"
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{listing.title}</h3>
                <Badge className={`${getStatusColor(listing.status)} border-0`}>
                  {getStatusText(listing.status)}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{listing.company}</p>
              <div className="mt-4 space-y-2 text-sm">
                <p>Applied {listing.appliedDate}</p>
                <p className="capitalize">{listing.type}</p>
              </div>
              <Button 
                variant="outline" 
                className="w-full mt-4 bg-blue-100/50 hover:bg-blue-200/50"
              >
                Know More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AppliedListingsSection;
