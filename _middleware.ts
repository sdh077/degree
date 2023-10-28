import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
    const subdomain = request.headers.get('host')?.split('.')[0]!;
    const newURL = new URL(`/${subdomain}`, request.url);
    return NextResponse.rewrite(newURL);
};

export const config = {
    matcher: '/',
};