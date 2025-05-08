"use client";

import { useEffect } from "react";
import BackLink from "@/components/BackLink";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased">
      <BackLink />
      {children}
    </div>
  );
}
