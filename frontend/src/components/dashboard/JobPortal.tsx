
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import InternshipSection from "./InternshipSection";
import JobOpeningsSection from "./JobOpeningsSection";
import AppliedListingsSection from "./AppliedListingsSection";

const JobPortal = () => {
  return (
    <div className="space-y-8">
      <InternshipSection />
      <JobOpeningsSection />
      <AppliedListingsSection />
    </div>
  );
};

export default JobPortal;
