"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <ClipLoader size={40} />
    </div>
  );
}
