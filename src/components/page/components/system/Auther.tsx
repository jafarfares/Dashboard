import { Plus } from "lucide-react";
import { Card } from "#/components/ui/card";
import { Button } from "@/components/ui/button";
import TextEditor from "#/components/Editor/TextEditor";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Search from "#/components/search/Search";
import AuthorTable from "../../AuthorTable/AuthorTable";
import { useCreateAuthor } from "#/api/AuthorsAPI/mutations";
import { useState } from "react";
export default function Auther() {


  const [author_name, setName] = useState("");
  const [dec, setDescription] = useState("");

  const { mutate, isPending } = useCreateAuthor();

  const handleCreate = () => {
    mutate(
      {
        author_name,
        dec,
      },
      {
        onSuccess: () => {
          setName("");
          setDescription("");
        },
      }
    );
  };


  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="flex w-full flex-row items-center justify-between p-2">
        <Search />
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              new Author <Plus />
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Author Details</DialogTitle>
            </DialogHeader>
            <hr />
            <Label>Name*</Label>
            <Input  value={author_name}
              onChange={(e) => setName(e.target.value)}/>

            <Label>Description*</Label>
            <Input value={dec} onChange={(e) => setDescription(e.target.value)} />

            <DialogClose asChild>
              <div className="flex w-full items-center justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleCreate} >
                 {isPending ? "Creating..." : "Create"}
                </Button>
              </div>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </Card>
      
      {/* <Card> */}
        <AuthorTable/>
      {/* </Card> */}
      
    </div>
  );
}
