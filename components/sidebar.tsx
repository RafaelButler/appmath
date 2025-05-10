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

type Routes = {
  name: string;
  path: string;
  group?: string;
};

const conjuntos: Routes[] = [
  {
    name: "Noções Lógicas",
    path: "/conjuntos/nocoes-logicas",
  },
  { name: "Conjuntos Numéricos", path: "#" },
];

const funcoes: Routes[] = [
  {
    name: "Função 1",
    path: "#",
  },
];

const logaritmos: Routes[] = [
  {
    name: "Logaritmos",
    path: "",
  },
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
            {conjuntos.map((route) =>
              route.group ? (
                <Collapse key={route.path} title="Alguma coisa">
                  <li>
                    <SidebarLink href={route.path} className="list-none">
                      {route.name}
                    </SidebarLink>
                  </li>
                </Collapse>
              ) : (
                <li key={route.path}>
                  <SidebarLink href={route.path} className="list-none">
                    {route.name}
                  </SidebarLink>
                </li>
              )
            )}
          </ul>
        </Collapse>
        <Collapse title="Funções">
          <ul className="flex flex-col gap-2">
            {funcoes.map((route) =>
              route.group ? (
                <Collapse key={route.path} title="Alguma coisa">
                  <li>
                    <SidebarLink href={route.path} className="list-none">
                      {route.name}
                    </SidebarLink>
                  </li>
                </Collapse>
              ) : (
                <li key={route.path}>
                  <SidebarLink href={route.path} className="list-none">
                    {route.name}
                  </SidebarLink>
                </li>
              )
            )}
          </ul>
        </Collapse>
        <Collapse title="Logaritmo">
          <ul className="flex flex-col gap-2">
            {logaritmos.map((route) =>
              route.group ? (
                <Collapse key={route.path} title="Alguma coisa">
                  <li>
                    <SidebarLink href={route.path} className="list-none">
                      {route.name}
                    </SidebarLink>
                  </li>
                </Collapse>
              ) : (
                <li key={route.path}>
                  <SidebarLink href={route.path} className="list-none">
                    {route.name}
                  </SidebarLink>
                </li>
              )
            )}
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
      <CollapsibleTrigger className="flex cursor-pointer items-center w-full mt-4">
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
