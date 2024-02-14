
"use client"

import * as React from "react"
import "../app/MyComponent.module.css"
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import Pagetitle from "@/components/Pagetitle";



import { Activity, Play, Sparkle, Subtitles, UserCheck, UserX, Video, } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area";
import UsersPage from "./users/page";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
type Payment = {
  name: string;
  email: string;
  lastName: string;
  PhoneNumber: string;
  Role: string;
};




const data: Payment[] = [
  {
    name: "John ",
    email: "john@example.com",
    lastName: "Doe",
    PhoneNumber: "0335018413",
    Role: "students"

  },
  {
    name: "Alice Smith",
    email: "alice@example.com",
    lastName: " Smith",
    PhoneNumber: "05678942358",
    Role: "admin",
  },
  {
    name: "Bob ",
    email: "bob@example.com",
    lastName: "Johnson",
    PhoneNumber: "+92458257532",
    Role: "New User",
  },
  {
    name: "Emma ",
    email: "emma@example.com",
    lastName: "Brown",
    PhoneNumber: "7352985629853",
    Role: "Our Students",
  },
  {
    name: "Michael ",
    email: "michael@example.com",
    lastName: "Davis",
    PhoneNumber: "47326472"
    ,
    Role: "admin",
  },
  {
    name: "Sophia ",
    email: "sophia@example.com",
    lastName: "Wilson",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  },
  {
    name: "Liam ",
    email: "liam@example.com",
    lastName: "Garcia",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  },
  {
    name: "Olivia ",
    email: "olivia@example.com",
    lastName: "Martinez",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  },
  {
    name: "Noah ",
    email: "noah@example.com",
    lastName: "Rodriguez",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  },
  {
    name: "Ava ",
    email: "ava@example.com",
    lastName: "Wilson",
    PhoneNumber: "0332568413"
    ,
    Role: "admin",
  },
  {
    name: "Elijah ",
    email: "elijah@example.com",
    lastName: "Rodriguez",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  },
  {
    name: "Mia ",
    email: "mia@example.com",
    lastName: "Rodriguez",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  },
  {
    name: "James ",
    email: "james@example.com",
    lastName: "Rodriguez",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  },
  {
    name: "Charlotte ",
    email: "charlotte@example.com",
    lastName: "Rodriguez",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  },
  {
    name: "Benjamin ",
    email: "benjamin@example.com",
    lastName: "Rodriguez",
    PhoneNumber: "0335018413"
    ,
    Role: "admin",
  }
];




export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  const columns: ColumnDef<Payment>[] = [
    // {
    //     accessorKey: "name",
    //     header: "Name",
    //     cell: ({ row }) => {
    //         return (
    //             <div className="flex  items-center">
    //                 <img
    //                     className="h-10 w-10"
    //                     src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
    //                         "name"
    //                     )}`}
    //                     alt="user-image"
    //                 />
    //                 <p>{row.getValue("name")} </p>
    //             </div>
    //         );
    //     }
    // },
    {
      accessorKey: "lastName",
      header: "last Name "
    },
    {
      accessorKey: "email",
      header: "Email"
    },
    {
      accessorKey: "PhoneNumber",
      header: "Phone Number"
    },
    {
      accessorKey: "Role",
      header: "Role",

    },
    {
      id: "actions", // Unique identifier for the column
      header: "", // Header label for the column
      cell: ({ row }) => (
        <div className="flex gap-2 justify-end">
          {/* <Button variant="secondary" onClick={() => console.log(`Button 1 clicked for ${row.getValue("name")}`)}>
            View
          </Button> */}
          <Button onClick={() => setModalOpen(true)} variant="destructive">
            Details
          </Button>
        </div>
      )
    }

  ];
  // const { setTheme } = useTheme()
  return (<>




    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-between">


        <Pagetitle title="Dashboard" className="text-4xl" />

      </div>
      <div className="mt-10">
        <div className="grid grid-cols-4 gap-4">
          <div className="" >
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Current Students</h3>

                <Subtitles />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">71,986</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </div>
            </div>
          </div>
          <div className="" >
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Subscribed Students</h3>

                <UserCheck />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">2,038</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </div>
            </div>
          </div>
          <div className="" >
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">UnSubscribed Students</h3>
                <UserX />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">70,012
                </div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </div>
            </div>
          </div>
          <div className="" >
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Videos</h3>
                <Video />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">1,323</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4" >
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">Active Students</h3>

              <Activity />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">10,000</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </div>
          </div>
        </div>





        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
          <div className="rounded-xl border bg-card text-card-foreground shadow col-span-4">
            <div className="flex flex-col space-y-1.5 p-6"><h3 className="font-semibold leading-none tracking-tight">Overview</h3></div>
            <div className="">
              <div className="p-6 pt-0 pl-2">
                <div className="p-6 pt-0 pl-2 "><div className="recharts-responsive-container" ><div className="recharts-wrapper" role="region"><svg className="recharts-surface transition-all" viewBox="0 0 685 350"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="65" y="5" height="310" width="615"></rect></clipPath></defs><g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="90.625" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="90.625" dy="0.71em">Jan</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="141.875" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="141.875" dy="0.71em">Feb</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="193.125" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="193.125" dy="0.71em">Mar</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="244.375" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="244.375" dy="0.71em">Apr</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="295.625" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="295.625" dy="0.71em">May</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="346.875" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="346.875" dy="0.71em">Jun</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="398.125" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="398.125" dy="0.71em">Jul</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="449.375" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="449.375" dy="0.71em">Aug</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="500.625" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="500.625" dy="0.71em">Sep</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="551.875" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="551.875" dy="0.71em">Oct</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="603.125" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="603.125" dy="0.71em">Nov</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="bottom" width="615" height="30" x="654.375" y="323" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="654.375" dy="0.71em">Dec</tspan></text></g></g></g><g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="left" width="60" height="310" x="57" y="315" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="57" dy="0.355em">$0</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="left" width="60" height="310" x="57" y="237.5" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="57" dy="0.355em">$1500</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="left" width="60" height="310" x="57" y="160" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="57" dy="0.355em">$3000</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="left" width="60" height="310" x="57" y="82.5" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="57" dy="0.355em">$4500</tspan></text></g><g className="recharts-layer recharts-cartesian-axis-tick"><text stroke="none" font-size="12" orientation="left" width="60" height="310" x="57" y="9" fill="#888888" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="57" dy="0.355em">$6000</tspan></text></g></g></g><g className="recharts-layer recharts-bar fill-primary"><g className="recharts-layer recharts-bar-rectangles"><g className="recharts-layer"><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="231.62166666666667" name="Jan" x="70.125" y="83.37833333333333" d="M70.125,87.37833333333333A 4,4,0,0,1,74.125,83.37833333333333L 107.125,83.37833333333333A 4,4,0,0,1,
                        111.125,87.37833333333333L 111.125,315L 70.125,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="67.01166666666663" name="Feb" x="121.375" y="247.98833333333337" d="M121.375,251.98833333333337A 4,4,0,0,1,125.375,247.98833333333337L 158.375,247.98833333333337A 4,4,0,0,1,
                          162.375,251.98833333333337L 162.375,315L 121.375,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="161.45833333333334" name="Mar" x="172.625" y="153.54166666666666" d="M172.625,157.54166666666666A 4,4,0,0,1,176.625,153.54166666666666L 209.625,153.54166666666666A 4,4,0,0,1,
                           213.625,157.54166666666666L 213.625,315L 172.625,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="159.23666666666668" name="Apr" x="223.875" y="155.76333333333332" d="M223.875,159.76333333333332A 4,4,0,0,1,227.875,155.76333333333332L 260.875,155.76333333333332A 4,4,0,0,1,
                              264.875,159.76333333333332L 264.875,315L 223.875,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="146.4233333333333" name="May" x="275.125" y="168.5766666666667" d="M275.125,172.5766666666667A 4,4,0,0,1,279.125,168.5766666666667L 312.125,168.5766666666667A 4,4,0,0,1,
                          316.125,172.5766666666667L 316.125,315L 275.125,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="261.12333333333333" name="Jun" x="326.375" y="53.876666666666665" d="M326.375,57.876666666666665A 4,4,0,0,1,330.375,53.876666666666665L 363.375,53.876666666666665A 4,4,0,0,1,
                         367.375,57.876666666666665L 367.375,315L 326.375,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="64.22166666666669" name="Jul" x="377.625" y="250.7783333333333" d="M377.625,254.7783333333333A 4,4,0,0,1,381.625,250.7783333333333L 414.625,250.7783333333333A 4,4,0,0,1,
                                418.625,254.7783333333333L 418.625,315L 377.625,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="295.275" name="Aug" x="428.875" y="19.725000000000023" d="M428.875,23.725000000000023A 4,4,0,0,1,432.875,19.725000000000023L 465.875,19.725000000000023A 4,4,0,0,1,
                        469.875,23.725000000000023L 469.875,315L 428.875,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="141.61833333333334" name="Sep" x="480.125" y="173.38166666666666" d="M480.125,177.38166666666666A 4,4,0,0,1,484.125,173.38166666666666L 517.125,173.38166666666666A 4,4,0,0,1,
                               521.125,177.38166666666666L 521.125,315L 480.125,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="148.12833333333336" name="Oct" x="531.375" y="166.87166666666664" d="M531.375,170.87166666666664A 4,4,0,0,1,535.375,166.87166666666664L 568.375,166.87166666666664A 4,4,0,0,1,
                             572.375,170.87166666666664L 572.375,315L 531.375,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="169.77666666666664" name="Nov" x="582.625" y="145.22333333333336" d="M582.625,149.22333333333336A 4,4,0,0,1,586.625,145.22333333333336L 619.625,145.22333333333336A 4,4,0,0,1,
                             623.625,149.22333333333336L 623.625,315L 582.625,315Z"></path></g><g className="recharts-layer recharts-bar-rectangle" role="img"><path fill="currentColor" radius="4,4,0,0" className="recharts-rectangle fill-primary" width="41" height="183.31333333333333" name="Dec" x="633.875" y="131.68666666666667" d="M633.875,135.68666666666667A 4,4,0,0,1,637.875,131.68666666666667L 670.875,131.68666666666667A 4,4,0,0,1,
                                   674.875,135.68666666666667L 674.875,315L 633.875,315Z"></path></g></g></g><g className="recharts-layer"></g></g></svg></div></div></div>

              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow col-span-3">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold leading-none tracking-tight">Recent Sales</h3>
              <p className="text-sm text-muted-foreground">You made 265 sales this month.</p>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-8">
                <div className="flex items-center">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                    <img className="aspect-square h-full w-full" alt="Avatar" src="https://ui.shadcn.com/avatars/01.png" />
                  </span>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                    <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center">
                  <span className="relative shrink-0 overflow-hidden rounded-full flex h-9 w-9 items-center justify-center space-y-0 border">
                    <img className="aspect-square h-full w-full" alt="Avatar" src="https://ui.shadcn.com/avatars/02.png" />
                  </span><div className="ml-4 space-y-1"><p className="text-sm font-medium leading-none">Jackson Lee</p>
                    <p className="text-sm text-muted-foreground">jackson.lee@email.com</p></div>
                  <div className="ml-auto font-medium">+$39.00</div>
                </div><div className="flex items-center"><span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                  <img className="aspect-square h-full w-full" alt="Avatar" src="https://ui.shadcn.com/avatars/03.png" /></span>
                  <div className="ml-4 space-y-1"><p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                    <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p></div>
                  <div className="ml-auto font-medium">+$299.00</div></div><div className="flex items-center">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                    <img className="aspect-square h-full w-full" alt="Avatar" src="https://ui.shadcn.com/avatars/03.png" /></span>
                  <div className="ml-4 space-y-1"><p className="text-sm font-medium leading-none">William Kim</p><p className="text-sm text-muted-foreground">will@email.com</p></div>
                  <div className="ml-auto font-medium">+$99.00</div></div><div className="flex items-center"><span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                    <img className="aspect-square h-full w-full" alt="Avatar" src="https://ui.shadcn.com/avatars/03.png" /></span><div className="ml-4 space-y-1" />
                  <p className="text-sm font-medium leading-none">Sofia Davis</p><p className="text-sm text-muted-foreground">sofia.davis@email.com</p></div>

              </div>
            </div>
          </div>
        </div>
        <div className="mt-4" >
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-lg font-medium m-auto">Most Watched Videos</h3>

              <Play />
            </div>
            <ScrollArea className="h-[500px]">
              <div className="p-5">


                <DataTable columns={columns} data={data} />
              </div>
            </ScrollArea>

          </div>
        </div>
      </div>

    </div>


  </>


  );
}
