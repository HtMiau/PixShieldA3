// src/components/ui/sonner.tsx (ou qualquer wrapper)
import { Toaster as SonnerToaster, toast } from "sonner";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
    const isMobile = useMediaQuery("(max-width: 1024px)"); // sm breakpoint
    return (
        <SonnerToaster
            position={isMobile ? "top-center" : "top-right"}
            richColors
            {...props}
        />
    );
}

export { toast };
