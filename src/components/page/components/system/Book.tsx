
import { Plus } from "lucide-react";

import { useNavigate } from "@tanstack/react-router";

import { DataTable } from "../../table/data-table";
import { Card } from "#/components/ui/card";
import data from "../../table/data.json";
import { Button } from "#/components/ui/button";
import Search from "#/components/search/Search";
export default function Book() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="flex w-full flex-row items-center justify-between p-2">
        <Search />
        <Button onClick={() => navigate({ to: "/System/Create" })}>
          Create <Plus />
        </Button>
      </Card>
      <Card className="w-full overflow-x-auto">
        {" "}
        {/* overflow-x-auto, not hidden */}
        <DataTable data={data} />
      </Card>
    </div>
  );
}
