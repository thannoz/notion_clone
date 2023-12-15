"use client";

import { Id, Doc } from "@/convex/_generated/dataModel";

interface DocumentListProps {
  parentDocument?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

export const DocumentList = ({
  parentDocument,
  level,
  data,
}: DocumentListProps) => {
  return <div>Document list</div>;
};
