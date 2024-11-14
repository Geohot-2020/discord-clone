import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Ghost } from "lucide-react";
import Image from "next/image";


const state = true;

export default function Home() {
  return (
    <div>
      <UserButton />
      <ModeToggle />
    </div>

  );
}
