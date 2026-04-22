import {
  Card
} from "@/components/ui/card"
import { Users } from "lucide-react"
import {ChartRadialStacked} from "../chart/chartredus"
import { ChartAreaInteractive } from "../chart/areachart"
import { ChartRadarDefault } from "../chart/radarchart"
import { ChartPieLegend } from "../chart/piechart"
import { createFileRoute } from '@tanstack/react-router'



 
export default function Home(){
    const card=[{title:"Total Users",value:"1,245"},{title:"Total Users",value:"1,245"},{title:"Total Users",value:"1,245"},{title:"Total Users",value:"1,245"}]
    return(
      <div className="w-full flex flex-col gap-6">
            <div className="flex gap-1 flex-col">
                <h2 className="font-bold text-2xl">dashborad</h2>
                <h6>Welcome to your dashboard</h6>
            </div>
            {/* className="w-full gap-2 flex flex-row padding-4 flex-wrap" */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 gap-4">
              {card.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 flex flex-row items-center justify-between flex-nowrap"
                >
                  <div className="space-y-1">
                    <p className="text-sm">{item.title}</p>
                    <h2 className="text-2xl font-bold">{item.value}</h2>
                  </div>
              
                  <div className="bg-white/20 p-3 rounded-lg flex flex-col">
                    <Users className="w-6 h-6" />
                  </div>
                </Card>
              ))}
            </div>
            <ChartAreaInteractive />
            <div className="flex gap-2 w-full flex-wrap grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-1">
              <ChartRadialStacked />
              <ChartRadarDefault/>
              <ChartPieLegend/>
            </div>
      </div>

    )
}