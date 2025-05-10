"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const routes = [
    { name: "Matemática Básica", path: "/matematica-basica" },
    { name: "Matemática Avançada", path: "/matematica_avancada" },
    { name: "Matemática Aplicada", path: "/matematica_aplicada" },
    { name: "Matemática Financeira", path: "/matematica_financeira" },
    { name: "Matemática Estatística", path: "/matematica_estatistica" },
  ];

  return (
    <div className="flex flex-col mt-8">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Matemática Básica</h2>
      </div>
      <div className="p-4">
        <SidebarLink href="#" className="list-none">
          Comece aqui
        </SidebarLink>

        <Collapse title="Matemática Básica" className="mt-4">
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

        <Collapse title="Noções Lógicas" className="mt-4">
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
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
  const router = useRouter();
  const isActive = true; //router.pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center p-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
        isActive ? "" : ""
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
  return (
    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 p-2">
      <div className="collapse-title font-semibold">{title}</div>
      <div className={`collapse-content text-sm ${className}`}>{children}</div>
    </div>
  );
};
