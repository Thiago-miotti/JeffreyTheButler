import { ReactNode } from "react"
import Sidebar from "./sidebar";
import Fab from "./ui/fab";

interface WrapperProps {
    children: ReactNode;
}

export default function MainWrapper({ children }: WrapperProps) {
    return (
        <div className="w-full h-screen bg-base-200 p-4 flex gap-8 ">
            <Sidebar />
            <div className="w-[calc(100%-300px)] h-full">
                {children}
            </div>
            <Fab />
        </div>
    )
}