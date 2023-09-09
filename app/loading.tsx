import React from "react";

function Loading() {
  return (
    <div className="max-w-xs space-y-2 w-full py-5">
      <div className="w-full h-[80px] border bg-black/10 rounded animate-pulse" />
      <div className="w-full h-[80px] border bg-black/10 rounded animate-pulse" />
      <div className="w-full h-[80px] border bg-black/10 rounded animate-pulse" />
      <div className="w-full h-[80px] border bg-black/10 rounded animate-pulse" />
      <div className="w-full h-[80px] border bg-black/10 rounded animate-pulse" />
    </div>
  );
}

export default Loading;
