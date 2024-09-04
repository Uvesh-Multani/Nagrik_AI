import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes (accessible without authentication)
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/privacy', // Add Privacy Policy as public
  '/term', 
  '/about',
  '/faq',
  '/feedback',
  '/api/webhooks/clerk',
]);

// Middleware to protect routes
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect(); // Protect routes that are not public
  }
});

export const config = {
  matcher: [
    // Apply middleware to all routes except static files and Next.js internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)', // Apply middleware to all API routes
  ],
};
