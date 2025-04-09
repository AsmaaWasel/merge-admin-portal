import Image from "next/image";
import Link from "next/link";
import { Headphones, MessageSquare, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-white py-3 px-4 flex items-center justify-between z-10 shadow-sm">
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center">
          <div className="bg-blue-100 rounded-full p-1.5 mr-2">
            <Image
              src="/placeholder.svg?height=30&width=30"
              alt="Merge Logo"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <span className="text-xl font-semibold text-gray-800">Merge</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center relative max-w-md w-full mx-8">
        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
        />
      </div>

      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-50"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-50"
        >
          <Headphones className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-50"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
          AD
        </div>
      </div>
    </header>
  );
}
