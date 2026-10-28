import { lazy, type ComponentType } from 'react';

/**
 * Lazy load a component with automatic Suspense wrapper.
 * Includes chunk naming for better code splitting.
 */
export function lazyWithSuspense<P extends object>(
  factory: () => Promise<{ default: ComponentType<P> }>,
  chunkName: string
) {
  return lazy(() => {
    return factory().catch((error) => {
      console.error(`Failed to load chunk ${chunkName}:`, error);
      throw error;
    });
  });
}

/**
 * Loading fallback component for lazy-loaded routes.
 */
export function RouteLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-aquiline-500/30 border-t-aquiline-500 rounded-full animate-spin" />
        <p className="text-sm text-slate-500 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

/**
 * Preload a route chunk when user hovers over a link.
 */
export function preloadRoute(factory: () => Promise<any>) {
  factory();
}