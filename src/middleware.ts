import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest)
{
    const url = request.nextUrl.clone();
    let isLogin = request.cookies.get("userState");

    console.log(isLogin)

    if (!isLogin) {
        if (request.nextUrl.pathname.startsWith("/HomePage")) {
            url.pathname = "/";
            return NextResponse.redirect(url);
        }
    }else{
        if(url.pathname === "/"){
            url.pathname = "/HomePage";
            return NextResponse.redirect(url);
        }
    }


}