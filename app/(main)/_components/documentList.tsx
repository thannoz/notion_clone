"use client";

import { api } from "@/convex/_generated/api";
import { Id, Doc } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { Item } from "./item";

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
  const params = useParams();
  const router = useRouter();
  const [expdaned, setExpanded] = useState<Record<string, boolean>>({});

  const onExpanded = (documentID: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [documentID]: !prevExpanded[documentID],
    }));
  };

  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocument,
  });

  const onRedirect = (documentID: string) => {
    router.push(`/documents/${documentID}`);
  };

  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }
  return <div>Document list</div>;
};
