"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center p-4">
      <div className="flex max-w-md flex-col items-center text-center space-y-6">
        <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
          <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Something went wrong!
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            We encountered an unexpected error. Please try again later.
          </p>
          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 rounded-lg bg-gray-100 p-2 text-center text-sm font-mono text-red-600">
              {error.message}
            </div>
          )}
        </div>

        <Button
          onClick={() => reset()}
          size="lg"
          className="group bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <RefreshCcw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
