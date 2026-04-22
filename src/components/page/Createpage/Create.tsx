import { Input } from "#/components/ui/input";
import { Card } from "#/components/ui/card";
import TextEditor from "#/components/Editor/TextEditor";
import { Button } from "#/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Create() {
  const [image, setImage] = useState<string | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      return () => URL.revokeObjectURL(imageUrl);
    }
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Create Book</h3>

      {/* card 1 */}
      <Card className="w-full p-6 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold">Main Info</h2>
          <h6 className="text-sm text-muted-foreground">
            Basic details about the book
          </h6>
          <hr className="border-muted" />
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Title*</label>
            <Input placeholder="Enter Title" className="h-10" />
          </div>

          {/* Publish Year */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Publish Year</label>
            <Input placeholder="Enter Year" className="h-10" />
          </div>

          {/* Author Select */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Author</label>

            <Select>
              <SelectTrigger className="w-full h-10 justify-between">
                <SelectValue placeholder="Select Author" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="author1">Author 1</SelectItem>
                  <SelectItem value="author2">Author 2</SelectItem>
                  <SelectItem value="author3">Author 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Language*</label>
            <Input placeholder="Enter Language" className="h-10" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Description</label>
            <TextEditor />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Status*</label>

            <Select>
              <SelectTrigger className="w-full h-10 justify-between">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="author1">Draft</SelectItem>
                  <SelectItem value="author2">Published</SelectItem>
                  <SelectItem value="author3">Archived</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* card 2 */}
      <Card className="w-full p-6 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold">Categories & Rating</h2>
          <h6 className="text-sm text-muted-foreground">
            Select Categories and set rating
          </h6>
          <hr className="border-muted" />
        </div>

        {/* select */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Categories*</label>
          <Select>
            <SelectTrigger className="w-full h-10 justify-between">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="author1">Draft</SelectItem>
                <SelectItem value="author2">Published</SelectItem>
                <SelectItem value="author3">Archived</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Rating */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Rating (Stars)*</label>
          <Input className="h-10" />
        </div>
      </Card>

      {/* card 3 */}
      <Card className="w-full p-6 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold">Categories & Rating</h2>
          <h6 className="text-sm text-muted-foreground">
            Select Categories and set rating
          </h6>
          <hr className="border-muted" />
        </div>
        {/* Downloadable File */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Downloadable PDF/Image</label>
          <label className="h-30 border rounded-md flex items-center justify-center cursor-pointer text-muted-foreground gap-1">
            Drag & Drop your files or{" "}
            <span className="text-black dark:text-white bold">Browse</span>
            <Input type="file" className="hidden" />
          </label>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Downloadable PDF/Image</label>
          <label className="h-30 border rounded-md flex items-center justify-center cursor-pointer text-muted-foreground gap-1">
            Drag & Drop your files or{" "}
            <span className="text-black dark:text-white bold">Browse</span>
            <Input type="file" className="hidden" />
          </label>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Downloadable PDF/Image</label>
          <label className="h-30 border rounded-md flex items-center justify-center cursor-pointer text-muted-foreground gap-1">
            Drag & Drop your files or{" "}
            <span className="text-black dark:text-white bold">Browse</span>
            <Input type="file" className="hidden" />
          </label>
        </div>

        <div className="flex flex-col gap-1 ">
          <label className="text-sm font-medium">Downloadable PDF/Image</label>

          <label
            className={`relative border rounded-md cursor-pointer overflow-hidden flex items-center justify-center 
            ${image ? "h-60 " : "h-32"}`}
          >
            {/* image */}
            {image && (
              <img
                src={image}
                alt="preview"
                className="w-full h-full object-contain"
              />
            )}

            {/* text */}
            {!image && (
              <span className="text-muted-foreground flex gap-1">
                Drag & Drop your files or
                <span className="text-black dark:text-white font-bold">
                  Browse
                </span>
              </span>
            )}

            <Input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Create Page</Button>
      </div>
    </div>
  );
}
