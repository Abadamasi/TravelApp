import { auth } from "@/auth"

export default auth((req) => {
  // Middleware logic is handled in auth.config.ts
})

export const config = {
  matcher: [
    "/trips/:path*",
    "/bookings/:path*",
    "/profile/:path*",
    "/auth/signin",
  ],
} 