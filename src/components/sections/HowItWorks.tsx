import {
  Phone,
  Calendar,
  Wrench,
  CheckCircle,
  Clock,
  Star,
  Timer,
  Truck,
} from "lucide-react";
import type { JSX } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { TextGenerateEffect } from "../ui/text-generate-effect";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Phone />,
    title: "Kontakta Oss",
    description:
      "Ring oss eller boka online för att schemalägga din fordonsservice. Vår vänliga personal hjälper dig att välja rätt servicepaket.",
  },
  {
    icon: <Calendar />,
    title: "Boka Tid",
    description:
      "Välj en tid som passar dig. Vi erbjuder flexibel schemaläggning inklusive samma dag-bokningar för brådskande reparationer.",
  },
  {
    icon: <Timer />,
    title: "Drop-in Service",
    description:
      "För enklare ärenden som oljebyten, batteritester eller snabba kontroller kan du komma direkt under våra öppettider utan att boka tid i förväg.",
  },
  {
    icon: <Truck />,
    title: "Hämtning & Lämning",
    description:
      "Vi erbjuder bekväm hämtning och lämning av ditt fordon inom Järfälla kommun. Perfekt när du inte har tid att komma till verkstaden själv.",
  },
  {
    icon: <Wrench />,
    title: "Expertservice",
    description:
      "Våra certifierade mekaniker utför en grundlig inspektion och slutför alla nödvändiga reparationer med kvalitetsdelar och avancerade verktyg.",
  },
  {
    icon: <CheckCircle />,
    title: "Kvalitetskontroll",
    description:
      "Vi provkör ditt fordon och utför slutliga kvalitetskontroller för att säkerställa att allt möter våra höga standarder före uthämtning.",
  },
  {
    icon: <Clock />,
    title: "Öppettider",
    description:
      "Vi är öppna måndag-fredag 08:00-17:00 och lördag 09:00-15:00. Boka tid i förväg för att garantera att vi kan ta emot ditt fordon när det passar dig.",
  },
  {
    icon: <Star />,
    title: "Omdömen",
    description:
      "Över 1000+ nöjda kunder har gett oss 4.9/5 stjärnor. Läs våra kundrecensioner och se varför bilägare väljer oss för sin fordonsservice.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        {/* Våra{" "} */}
        <TextGenerateEffect
          words="Våra"
          className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
          duration={1}
          filter={true}
        />
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Erbjudanden{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Att få ditt fordon servicerat har aldrig varit enklare. Följ dessa enkla
        steg för att uppleva vår professionella bilservice.
      </p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-2 pt-4 md:-ml-4">
          {features.map(({ icon, title, description }: FeatureProps) => (
            <CarouselItem
              key={title}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 group cursor-pointer transition-all duration-300 ease-in-out hover:bg-card hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] border-transparent hover:border-primary/30 h-full">
                <CardHeader>
                  <CardTitle className="grid gap-4 place-items-center group-hover:text-primary transition-colors duration-300">
                    <span className="transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                      {icon}
                    </span>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="group-hover:text-foreground transition-colors duration-300">
                  {description}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Mobile navigation dots */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex space-x-2">
          {[...Array(Math.ceil(features.length / 1))].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted transition-colors duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
