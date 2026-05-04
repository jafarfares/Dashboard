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

// type Item = {
//   id: number
//   name: string
//   description: string
// }

// const data: Item[] = Array.from({ length: 23 }, (_, i) => ({
//   id: i + 1,
//   name: `User ${i + 1}`,
//   description: `This is description for user ${i + 1}`,
// }))

// const ITEMS_PER_PAGE = 5

// export default function AuthorTable() {
//   const [page, setPage] = React.useState(1)

//   const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

//   const currentData = data.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   )

  

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
//               {currentData.map((item) => (
//                 <TableRow key={item.id}>
//                   <TableCell className="font-medium">
//                     {item.name}
//                   </TableCell>

//                   <TableCell className="text-muted-foreground">
//                     {item.description}
//                   </TableCell>

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
//           disabled={page === 1}
//           onClick={() => setPage((p) => p - 1)}
//         >
//           Prev
//         </Button>

//         {Array.from({ length: totalPages }).map((_, i) => (
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
//           disabled={page === totalPages}
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

import { useAuthors } from "#/hooks/useAuthors"

export default function AuthorTable() {
  const [page, setPage] = React.useState(1)

  const { data, isLoading } = useAuthors(page)

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="w-full space-y-4">
      {/* TABLE */}
      <div className="rounded-2xl border overflow-hidden">
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[150px]">Name</TableHead>
                <TableHead className="min-w-[250px]">
                  Description
                </TableHead>
                <TableHead className="text-center min-w-[120px]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.data.map((author:{id:number,author_name:string,dec:string}) => (
                <TableRow key={author.id}>
                  <TableCell className="font-medium">
                    {author.author_name}
                  </TableCell>

                  {/* ⚠️ يحتوي HTML */}
                  <TableCell
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: author.dec }}
                  />

                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button size="icon" variant="outline">
                        <Pencil className="w-4 h-4" />
                      </Button>

                      <Button size="icon" variant="destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2">
        <Button
          variant="outline"
          disabled={!data.prev_page_url}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </Button>

        {Array.from({ length: data.last_page }).map((_, i) => (
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
          disabled={!data.next_page_url}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}