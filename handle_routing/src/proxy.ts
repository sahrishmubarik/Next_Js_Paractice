```ts
import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {

    /*
      Learning Note:
      I am only practicing these Proxy features for now.
      Later, I will come back and learn in detail why and when
      we use custom matchers, conditions, redirect, rewrite,
      headers, and cookies.
    */

    /* Custom matcher config
       I will learn later why and when we use custom matchers.
       
       return NextResponse.redirect(new URL("/", request.url));
    */

    /* Conditional
       I will learn later why and when we use conditions
       inside Proxy.

       if (request.nextUrl.pathname === "/profile") {
           return NextResponse.redirect(new URL("/time", request.url));
           return NextResponse.rewrite(new URL("/time", request.url));
       }
    */

    /* Cookies
       I will learn later why and when cookies are useful
       in Proxy.
    */
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");

    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    /* Set custom header
       I will learn later why and when custom headers
       are useful in Proxy.
    */
    response.headers.set("custom-header", "custom-value");

    return response;
}


// Custom matcher config
// I will learn later why and when we use matcher configuration.

// export const config = {
//     matcher: "/profile",
// };
```
