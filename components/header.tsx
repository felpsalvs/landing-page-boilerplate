import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline"
          >
            Recursos
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline"
          >
            Depoimentos
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline">
            Preços
          </Link>
        </nav>
        <Button>Começar Agora</Button>
      </div>
    </header>
  );
}
