import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json()

    if (email !== 'admin' || password !== 'admin') {
        return Response.json({
            error: "Invalid email or password"
        }, { status: 401 })
    }

    const response = NextResponse.json({
        message: 'Login successful',
        user: { id: 1, name: "Super Admin" }
    })

    return response

}