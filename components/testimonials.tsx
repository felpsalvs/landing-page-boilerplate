export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Este produto transformou completamente nossas operações comerciais. É revolucionário!",
      author: "Jane Doe",
      title: "CEO, TechCorp",
      avatar: "/avatar1.png",
    },
    {
      quote:
        "Não consigo imaginar gerenciar minha empresa sem esta ferramenta. Tornou-se parte essencial do nosso fluxo de trabalho.",
      author: "John Smith",
      title: "Fundador, StartupX",
      avatar: "/avatar2.jpg",
    },
    {
      quote:
        "O suporte ao cliente é excepcional. Eles estão sempre presentes quando precisamos.",
      author: "Emily Brown",
      title: "CTO, InnovateNow",
      avatar: "/avatar3.jpg",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 bg-white rounded-lg shadow"
            >
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
