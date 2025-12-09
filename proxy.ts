import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { Locale, defaultLocale } from "@/lib/i18n";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    // THIS IS NOT SECURE!
    // This is the recommended approach to optimistically redirect users
    // We recommend handling auth checks in each page/route
    if(!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Handle locale from cookie or Accept-Language header
    const cookieLocale = request.cookies.get("locale")?.value;
    const acceptLanguage = request.headers.get("accept-language");
    
    let locale: Locale = defaultLocale;
    
    if (cookieLocale === "es" || cookieLocale === "en") {
        locale = cookieLocale;
    } else if (acceptLanguage?.includes("es")) {
        locale = "es";
    } else if (acceptLanguage?.includes("en")) {
        locale = "en";
    }

    // Set locale cookie if not present
    const response = NextResponse.next();
    if (!cookieLocale) {
        response.cookies.set("locale", locale, { path: "/", maxAge: 31536000 });
    }

    return response;
}

export const config = {
  matcher: ["/dashboard"], // Specify the routes the middleware applies to
};