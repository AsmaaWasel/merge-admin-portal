import Image from "next/image";
import { Headphones, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white p-2 flex items-center justify-between z-10">
      <div className="flex items-center space-x-2">
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <div className="flex items-center">
          <div className="bg-white rounded-full p-1 mr-2">
            <Image
              src="/placeholder.svg?height=30&width=30"
              alt="Merge Logo"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <span className="text-xl font-bold">Merge</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Headphones className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
