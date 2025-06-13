import { Wrench, Shield, Clock } from "lucide-react";
import type { JSX } from "react";

import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Professionell Reparation",
    description:
      "Våra certifierade mekaniker utför alla typer av bilreparationer med expertis och precision. Vi använder modern utrustning för att säkerställa högsta kvalitet.",
    icon: <Wrench />,
  },
  {
    title: "Garanti & Trygghet",
    description:
      "Vi står bakom vårt arbete med omfattande garanti på alla reparationer. Du kan känna dig trygg med att ditt fordon är i säkra händer.",
    icon: <Shield />,
  },
  {
    title: "Snabb Service",
    description:
      "Vi förstår att din tid är värdefull. Därför erbjuder vi effektiv service med snabba leveranstider utan att kompromissa med kvaliteten.",
    icon: <Clock />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Kundcentrerade{" "}
            </span>
            Tjänster
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Vi erbjuder omfattande bilservice med fokus på kvalitet, trygghet
            och kundnöjdhet. Din bil är i trygga händer hos oss.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
