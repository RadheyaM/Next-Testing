export { default } from "next-auth/middleware"

// disable complete site authentication checks:
export const config = { matcher: ["/dashboard"] }