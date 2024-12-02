import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Bem-vindo ao Nosso Produto Incrível
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Descubra como nossa solução inovadora pode transformar seu negócio e
          aumentar sua produtividade.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary">
            Saiba Mais
          </Button>
          <Button size="lg">Começar Agora</Button>
        </div>
      </div>
    </section>
  );
}
