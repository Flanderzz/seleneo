"use client";

import Spinner from "@/components/spinner/spinner";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("@/components/studio/studio-main"), {
    ssr: false,
    loading: () => (
        <div className="flex-1 flex items-center justify-center h-full w-full">
            <Spinner />
        </div>
    ),
});

export default Canvas;
