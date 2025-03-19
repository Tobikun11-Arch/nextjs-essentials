import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

//Create a new user using prisma to postgreSQL
export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        //add validation soon for email if it already exists
        
        const createUser = await prisma.user.create({
            data: {
                username,
                password
            }
        })

        //return the created user to the client
        return NextResponse.json(createUser, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to create user" }, { status: 500 })
    }
}

