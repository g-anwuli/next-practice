import React from "react";

export function Loading() {
  return (
    <div className="border p-4 md:p-5 rounded-lg max-w-sm w-full h-max space-y-3.5 shadow-md sticky top-[60px]">
      <div className="w-full aspect-square2 bg-black/10 animate-pulse rounded" />
      <div className="w-full h-[23px] bg-black/10 animate-pulse rounded" />
      <div className="w-full h-[23px] bg-black/10 animate-pulse rounded" />
      <div className="w-full h-[23px] bg-black/10 animate-pulse rounded" />
      <div className="w-full h-[23px] bg-black/10 animate-pulse rounded" />
      <div className="w-full h-[23px] bg-black/10 animate-pulse rounded" />
    </div>
  );
}

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

