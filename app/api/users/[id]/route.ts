import { NextResponse } from 'next/server'

// GET single user
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id
        // In a real app, you would fetch from your database
        const user = { id: parseInt(id), name: 'John Doe', email: 'john@example.com' }
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch user' },
            { status: 500 }
        )
    }
}

// UPDATE user
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id
        const body = await request.json()
        // In a real app, you would update in your database
        const updatedUser = {
            id: parseInt(id),
            ...body
        }
        return NextResponse.json(updatedUser)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update user' },
            { status: 500 }
        )
    }
}

// DELETE user
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id
        // In a real app, you would delete from your database
        return NextResponse.json(
            { message: `User ${id} deleted successfully` },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete user' },
            { status: 500 }
        )
    }
} 