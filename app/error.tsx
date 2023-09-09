"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 w-full flex flex-col justify-center items-center gap-6">
      <h2 className="text-xl tracking-wide font-normal">Not General. Something went wrong!</h2>
      <button
        className="border px-5 py-3 rounded bg-neutral-900 text-white"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
