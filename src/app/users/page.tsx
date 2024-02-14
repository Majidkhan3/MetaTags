"use client"



import { Button } from "@/components/ui/button";
import { DataTable } from "../../components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Search } from "lucide-react";

// import PageTitle from "@/components/PageTitle";

type Props = {};
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

export default function UsersPage({ }: Props) {
    const [modalOpen, setModalOpen] = useState(false)

    const columns: ColumnDef<Payment>[] = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => {
                return (
                    <div className="flex  items-center">
                        <img
                            className="h-10 w-10"
                            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
                                "name"
                            )}`}
                            alt="user-image"
                        />
                        <p>{row.getValue("name")} </p>
                    </div>
                );
            }
        },
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
                    <Button variant="secondary" onClick={() => console.log(`Button 1 clicked for ${row.getValue("name")}`)}>
                        View
                    </Button>
                    <Button onClick={() => setModalOpen(true)}>
                        Details
                    </Button>
                </div>
            )
        }

    ];
    return (
        <>
            <Dialog modal open={modalOpen} onOpenChange={() => setModalOpen(false)} >
                {/* <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger> */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <div className="flex flex-col gap-10  w-full">
                <div className="flex justify-between items-center" >
                    <div className="grid gap-y-4	" >

                        <h1 className="text-5xl font-medium">Students</h1>
                        <p>Total 7165 students</p>
                    </div>
                    <div className="flex gap-2">
                        <Input className="outline-none" placeholder="...Search Students" type="email" />
                        <Search className="absolute  right-40 top-[12rem]" />
                        <Button variant="destructive" >Create User</Button>
                    </div>
                </div>
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}