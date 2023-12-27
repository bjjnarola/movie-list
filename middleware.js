
import { NextResponse } from 'next/server'

export function middleware(request) {
    const token = request.cookies.get('token')?.value
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/', '/movie/:path*', '/api/addMovie/:path*'],
}