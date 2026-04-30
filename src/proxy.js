import { NextResponse } from "next/server";

export function proxy(request) {
    return NextResponse.redirect("/");
}

export const config = {
    matcher: []
}