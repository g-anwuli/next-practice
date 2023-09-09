import React from "react";

export function Loading2() {
  return (
    <div className="space-y-5 flex-1">
      <div className="border p-3.5 md:p-5 rounded-lg space-y-5 shadow-md w-full">
        <div className="w-full h-[100vw] max-h-[350px] bg-black/10 animate-pulse rounded" />
        <div className="w-full h-[32px] bg-black/10 animate-pulse rounded" />
      </div>
      <div className="border p-3.5 md:p-5 rounded-lg space-y-5 shadow-md w-full">
        <div className="w-full h-[100vw] max-h-[350px] bg-black/10 animate-pulse rounded" />
      </div>
    </div>
  );
}

