"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const routes = [
  { name: "Noções Lógicas", path: "/conjuntos/nocoes-logicas" },
  { name: "Polinomios", path: "#" },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col mt-8">
      <div className="p-8">
        {/* <h2 className="text-lg font-semibold">Matemática Básica</h2> */}
      </div>
      <div className="p-4">
        <SidebarLink href="/" className="mb-4 list-none">
          Comece aqui
        </SidebarLink>

        <Collapse title="Conjuntos">
          <ul className="flex flex-col gap-2">
            {routes.map((route) => (
              <li key={route.path}>
                <SidebarLink href={route.path} className="list-none">
                  {route.name}
                </SidebarLink>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

// Component link , where if route is active, it will be highlighted
const SidebarLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center text-sm font-medium transition-colors duration-200 text-muted-foreground ${
        isActive ? "font-bold text-highlighted bg-sidebar p-1 rounded" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

const Collapse = ({
  children,
  title,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex cursor-pointer items-center w-full">
        <ChevronRight
          className={`w-5 mr-2 transition-transform ${
            isOpen ? "transform rotate-90" : ""
          }`}
        />
        {title}
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-4 mt-4">{children}</CollapsibleContent>
    </Collapsible>
  );
};
