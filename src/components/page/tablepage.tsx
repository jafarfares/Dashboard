import Search from "../search/Search";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Card } from "../ui/card";
import { useNavigate } from "@tanstack/react-router";
import { DataTable } from "./table/data-table";
import data from "./table/data.json";
export default function Tablepage() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="flex w-full flex-row items-center justify-between p-2">
        <Search />
        <Button onClick={() => navigate({ to: "/Create" })}>
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
