import { NextResponse } from 'next/server';

export function middleware(request) {
	const user = 'logged'

	if (!user) {
		return NextResponse.redirect(
			new URL('/auth', request.url)
		)
	}

	return NextResponse.next();
}

export const config = {
	matcher: '/dashboard'
}