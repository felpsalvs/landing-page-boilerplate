import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "&quot;Este produto transformou completamente nossas operações comerciais. É um divisor de águas!&quot;",
    author: "Jane Doe",
    title: "CEO, TechCorp",
    avatar: "/avatar1.png",
  },
  {
    quote:
      "&quot;Não consigo imaginar gerenciar minha empresa sem esta ferramenta. Tornou-se uma parte essencial do nosso fluxo de trabalho.&quot;",
    author: "John Smith",
    title: "Fundador, StartupX",
    avatar: "/avatar2.png",
  },
  {
    quote:
      "&quot;O suporte ao cliente é excepcional. Eles estão sempre presentes quando precisamos.&quot;",
    author: "Emily Brown",
    title: "CTO, InnovateNow",
    avatar: "/avatar3.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
