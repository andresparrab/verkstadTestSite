import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import hjulintallning from "../../assets/hjulinsteallning.jpg";
// import image4 from "../../assets/Media (1).jpg";
import image3 from "../../assets/Media (2).jpg";
// import image from "../../assets/Media (3).jpg";
import MotorOptimering from "../../assets/MotorOptimering.jpg";
import AcImage from "../../assets/ac-image.jpg";
import diagnos from "../../assets/diagnos.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

interface ServiceItem {
  name: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Professionell Diagnostik",
    description:
      "Vi använder den senaste teknologin för att snabbt och exakt diagnostisera problem med ditt fordon. Våra certifierade mekaniker kan identifiera fel som andra missar.",
    image: diagnos,
  },
  // {
  //   title: "Snabb & Pålitlig Service",
  //   description:
  //     "Vi förstår att din bil är viktig för din vardag. Därför erbjuder vi snabb service utan att kompromissa med kvaliteten. De flesta reparationer slutförs samma dag.",
  //   image: image,
  // },
  {
    title: "Professionell Hjulinställning",
    description:
      "Korrekt hjulinställning förbättrar både körkomfort och däckens livslängd. Vi erbjuder noggrann och effektiv hjulinställning med modern utrustning – snabbt och pålitligt.",

    image: hjulintallning,
  },
  {
    title: "Motoroptimering med Högsta Kvalitet",
    description:
      "Få ut maximal prestanda och bränsleeffektivitet ur din bil. Vi erbjuder säker och noggrant anpassad motoroptimering med modern teknik – för en starkare, smidigare körupplevelse.",

    image: MotorOptimering,
  },
  {
    title: "AC-service och Reparation",
    description:
      "Komplett AC-service inklusive felsökning, reparation och påfyllning av köldmedium. Vi utför regelbunden kontroll och underhåll för optimal klimatkomfort året runt – för både kyla och avfuktning.",
    image: AcImage,
  },
  {
    title: "Kvalitetsdelar & Garanti",
    description:
      "Vi använder endast originaldelar och högkvalitativa reservdelar från välkända tillverkare. Alla våra reparationer kommer med omfattande garanti för din trygghet.",
    image: image3,
  },
];

const featureList: ServiceItem[] = [
  {
    name: "Oljebyten",
    description:
      "Regelbundna oljebyten med högkvalitativa oljor för motorns hälsa",
  },
  // {
  //   name: "Motorservice",
  //   description:
  //     "Komplett motorunderhåll och reparationer för optimal prestanda och livslängd",
  // },
  {
    name: "Bromsreparationer",
    description: "Säker och pålitlig bromsservice för din trygghet på vägen",
  },
  {
    name: "Bilbesiktning",
    description:
      "Auktoriserad besiktning för att säkerställa att din bil uppfyller alla krav",
  },
  {
    name: "Renovering av Automat och Manuell Växellåda",
    description:
      "Service och reparation av manuella och automatiska växellådor för smidig körning",
  },
  {
    name: "Karossreparationer",
    description: "Professionell karossreparation efter skador eller slitage",
  },
  {
    name: "Däckbyte",
    description:
      "Professionell däckmontering och balansering för alla årstider",
  },
  {
    name: "Motoroptimering",
    description:
      "maximera prestanda och bränsleeffektivitet med vår motoroptimering",
  },
  {
    name: "AC-service",
    description:
      "komplett AC-service inklusive felsökning, reparation och påfyllning av köldmedium",
  },
  {
    name: "Hjulinställning",
    description:
      "Noga utförd hjulinställning för att förbättra körkomfort och däckens livslängd",
  },
  {
    name: "Avgassystem",
    description:
      "modernisering och reparation av avgassystem för bättre prestanda och lägre utsläpp",
  },
  {
    name: "Felsökning",
    description:
      "Avancerad diagnostik för att identifiera och lösa komplexa problem",
  },
  {
    name: "Akutservice",
    description: "24/7 bärgning och akutservice när du behöver hjälp mest",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Våra{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Specialområden
        </span>
      </h2>

      <TooltipProvider>
        <div className="flex flex-wrap md:justify-center gap-3">
          {featureList.map((service: ServiceItem) => (
            <Tooltip key={service.name} delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Badge
                    variant="secondary"
                    className="text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {service.name}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="max-w-xs text-center p-4 bg-popover text-popover-foreground border border-border shadow-lg rounded-md"
              >
                <p className="text-sm font-semibold mb-2 text-foreground">
                  {service.name}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            key={title}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="Bilverkstad tjänster"
                className="w-[200px] lg:w-[300px] lg:h-[400px] mx-auto rounded-lg"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
