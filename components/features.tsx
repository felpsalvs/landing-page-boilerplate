import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Lightbulb, Zap, Shield } from "lucide-react";

const features = [
  {
    title: "Soluções Inovadoras",
    description:
      "Nossa tecnologia de ponta fornece soluções inovadoras para problemas complexos.",
    icon: Lightbulb,
  },
  {
    title: "Velocidade Incrível",
    description:
      "Experimente um desempenho ultrarrápido que mantém seu negócio à frente da concorrência.",
    icon: Zap,
  },
  {
    title: "Seguro e Confiável",
    description:
      "Fique tranquilo sabendo que seus dados estão protegidos com nossas medidas de segurança de última geração.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossos Recursos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
