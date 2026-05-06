import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

type ShowAuthorProps = {
  author: {
    id: number
    name: string
    description: string
  }
  children: React.ReactNode
}

export function ShowAuthor({ author, children }: ShowAuthorProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{author.name}</DrawerTitle>
          <DrawerDescription>Author details and description.</DrawerDescription>
        </DrawerHeader>

        <div className="no-scrollbar overflow-y-auto px-4 space-y-4">
          <div className="rounded-lg border bg-muted p-4">
            <p className="text-sm text-muted-foreground">Author ID</p>
            <p className="font-medium">{author.id}</p>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Description</p>
            <p className="mt-2 whitespace-pre-wrap">{author.description}</p>
          </div>
        </div>

        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default ShowAuthor
