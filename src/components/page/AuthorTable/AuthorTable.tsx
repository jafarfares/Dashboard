// "use client"

// import * as React from "react"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// import { Button } from "@/components/ui/button"
// import { Pencil, Trash2 } from "lucide-react"
// import { useAuthors } from "#/hooks/useAuthors"


// export default function AuthorTable() {
//   const [page, setPage] = React.useState(1)

//   const { data, isLoading } = useAuthors(page)

//   if (isLoading) return <p>Loading...</p>

//   return (
//     <div className="w-full space-y-4">
//       {/* TABLE */}
//       <div className="rounded-2xl border overflow-hidden">
//         <div className="w-full overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="min-w-[150px]">Name</TableHead>
//                 <TableHead className="min-w-[250px]">
//                   Description
//                 </TableHead>
//                 <TableHead className="text-center min-w-[120px]">
//                   Actions
//                 </TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {data.data.map((author:{id:number, author_name:string, dec:string}) => (
//                 <TableRow key={author.id}>
//                   <TableCell className="font-medium">
//                     {author.author_name}
//                   </TableCell>


//                   <TableCell
//                     className="text-muted-foreground"
//                     dangerouslySetInnerHTML={{ __html: author.dec }}
//                   />

//                   <TableCell>
//                     <div className="flex items-center justify-center gap-2">
//                       <Button size="icon" variant="outline">
//                         <Pencil className="w-4 h-4" />
//                       </Button>

//                       <Button size="icon" variant="destructive">
//                         <Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>

//       {/* PAGINATION */}
//       <div className="flex justify-center items-center gap-2">
//         <Button
//           variant="outline"
//           disabled={!data.prev_page_url}
//           onClick={() => setPage((p) => p - 1)}
//         >
//           Prev
//         </Button>

//         {Array.from({ length: data.last_page }).map((_, i) => (
//           <Button
//             key={i}
//             variant={page === i + 1 ? "default" : "outline"}
//             onClick={() => setPage(i + 1)}
//           >
//             {i + 1}
//           </Button>
//         ))}

//         <Button
//           variant="outline"
//           disabled={!data.next_page_url}
//           onClick={() => setPage((p) => p + 1)}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   )
// }

















"use client"

import * as React from "react"
import { useAuthors } from "#/hooks/useAuthors"
import ShowAuthor from "./DrawerShowAuthor/ShowAuthor"

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table"
import type { ColumnDef } from "@tanstack/react-table"

import {
  DndContext,
  closestCenter,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable"

import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import { CSS } from "@dnd-kit/utilities"

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { IconGripVertical, IconDotsVertical } from "@tabler/icons-react"

// ✅ data type
type Author = {
  id: number
  name: string
  description: string
}

// ✅ Drag handle
function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({ id })

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="size-7"
    >
      <IconGripVertical className="size-4" />
    </Button>
  )
}

// ✅ صف draggable
function DraggableRow({ row }: any) {
  const { transform, transition, setNodeRef } = useSortable({
    id: row.original.id,
  })

  return (
    <TableRow
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {row.getVisibleCells().map((cell: any) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

export default function AuthorTable() {
  // const [page] = React.useState(1)
  const [page, setPage] = React.useState(1)
  const [perPage, setPerPage] = React.useState(10)
  const { data, isLoading } = useAuthors(page, perPage)

  // ✅ hooks لازم تكون فوق دائمًا
  const [tableState, setTableState] = React.useState<Author[]>([])
  const [rowSelection, setRowSelection] = React.useState({})

  const sensors = useSensors(useSensor(MouseSensor))



  // ✅ تحديث البيانات بعد التحميل
  React.useEffect(() => {
    if (data) {
      const mapped = data.data.map((author: any) => ({
        id: author.id,
        name: author.author_name,
        description: author.dec,
      }))

      setTableState(mapped)
    }

  }, [data])

  // ✅ columns
  const columns: ColumnDef<Author>[] = [
    {
      id: "drag",
      header: () => null,
      cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(v) => row.toggleSelected(!!v)}
        />
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <ShowAuthor author={row.original}>
          <span className="font-medium hover:underline">
            {row.original.name}
          </span>
        </ShowAuthor>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div
          className="text-muted-foreground line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: row.original.description.length > 40 ? row.original.description.slice(0, 40) + "..." : row.original.description,
          }}
        />
      ),
    },
    {
      id: "actions",
      cell: () => (
        <Button variant="ghost" size="icon">
          <IconDotsVertical />
        </Button>
      ),
    },
  ]

  const table = useReactTable({
    data: tableState,
    columns,
    getRowId: (row) => row.id.toString(),
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  })

  const dataIds = tableState.map((item) => item.id)

  // ✅ drag logic
  function handleDragEnd(event: any) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      const oldIndex = dataIds.indexOf(active.id)
      const newIndex = dataIds.indexOf(over.id)
      setTableState((items) => arrayMove(items, oldIndex, newIndex))
    }
  }

  // ✅ loading بعد تثبيت hooks
  if (isLoading) return <p>Loading...</p>

  return (
    <div className="w-full space-y-4">
      <div className="rounded-lg border overflow-hidden">
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          sensors={sensors}
          onDragEnd={handleDragEnd}
        >
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              <SortableContext
                items={dataIds}
                strategy={verticalListSortingStrategy}
              >
                {table.getRowModel().rows.map((row) => (
                  <DraggableRow key={row.id} row={row} />
                ))}
              </SortableContext>
            </TableBody>
          </Table>





          {/* <div className="flex justify-center items-center gap-2 py-4">
            <Button
              variant="outline"
              disabled={!data?.prev_page_url}
              onClick={() => setPage((p) => p - 1)}
            >
              Prev
            </Button>

            {Array.from({ length: data?.last_page || 1 }).map((_, i) => (
              <Button
                key={i}
                variant={page === i + 1 ? "default" : "outline"}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              disabled={!data?.next_page_url}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>





          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Rows per page:</span>
            {[10, 20, 30].map((size) => (
              <Button
                key={size}
                size="sm"
                variant={perPage === size ? "default" : "outline"}
                onClick={() => {
                  setPerPage(size)
                  setPage(1) // reset to page 1 when changing per page
                }}
              >
                {size}
              </Button>
            ))}
          </div> */}



          {/* PAGINATION BAR */}
          <div className="flex justify-between items-center px-4 py-3 text-sm text-muted-foreground border-t">

            {/* Left: Showing info */}
            <span>
              Showing {(page - 1) * perPage + 1} to {Math.min(page * perPage, data?.total || 0)} of {data?.total || 0}
            </span>

            {/* Right: Rows per page + navigation */}
            <div className="flex items-center gap-4">

              {/* Rows per page dropdown */}
              <div className="flex items-center gap-2">
                <span>Rows per page</span>
                <select
                  value={perPage}
                  onChange={(e) => {
                    setPerPage(Number(e.target.value))
                    setPage(1)
                  }}
                  className="border rounded px-2 py-1 bg-background text-foreground text-sm"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>
              </div>

              {/* Page info */}
              <span>Page {page} of {data?.last_page || 1}</span>

              {/* Navigation arrows */}
              <div className="flex items-center gap-1">
                {/* First page */}
                <Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage(1)}>
                  «
                </Button>
                {/* Prev */}
                <Button variant="outline" size="icon" disabled={!data?.prev_page_url} onClick={() => setPage((p) => p - 1)}>
                  ‹
                </Button>
                {/* Next */}
                <Button variant="outline" size="icon" disabled={!data?.next_page_url} onClick={() => setPage((p) => p + 1)}>
                  ›
                </Button>
                {/* Last page */}
                <Button variant="outline" size="icon" disabled={page === data?.last_page} onClick={() => setPage(data?.last_page)}>
                  »
                </Button>
              </div>

            </div>
          </div>

        </DndContext>
      </div>
    </div>
  )
}