import { Statistics } from "./Statistics";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Anna Lindberg",
    position: "Verkstadschef",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Erik Johansson",
    position: "Bilmekaniker",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Maria Svensson",
    position: "Diagnostekniker",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Lars Andersson",
    position: "Karossreparatör",
    socialNetworks: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export const AboutTeamSection = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="about-team" className="container py-24 sm:py-32">
      {/* Shared Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Om Oss{" "}
          </span>
          & Vårt Team
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Lär känna vår verkstad och det erfarna team av certifierade mekaniker
          som ser till att din bil får den professionella service den förtjänar.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
        {/* About Section */}
        <Card className="bg-muted/50 h-full flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Vår Historia
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Sedan 2003 har Stäket Mek & Däck levererat exceptionell
                bilreparation och underhållsservice med precision och omsorg.
                Vårt team av certifierade mekaniker kombinerar decennier av
                erfarenhet med toppmodern diagnostisk utrustning för att lösa
                alla fordonsproblem effektivt.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">
                    Auktoriserad verkstad för alla bilmärken
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">
                    Miljöcertifierade processer och återvinning
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-muted-foreground text-sm">
                    Omfattande garanti på alla reparationer
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <Statistics />
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="bg-muted/50 h-full flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Våra Experter
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Möt våra certifierade och erfarna mekaniker som arbetar med
              passion för att ge din bil den bästa möjliga servicen.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full flex-1"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {teamList.map(
                  ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
                    <CarouselItem
                      key={name}
                      className="pl-2 md:pl-4 md:basis-1/2"
                    >
                      <Card className="bg-background/50 relative mt-8 flex flex-col justify-center items-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border/50">
                        <CardHeader className="mt-8 flex justify-center items-center pb-2">
                          <img
                            src={imageUrl}
                            alt={`${name} ${position}`}
                            className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover border-4 border-background shadow-lg"
                          />
                          <CardTitle className="text-center text-lg">
                            {name}
                          </CardTitle>
                          <CardDescription className="text-primary text-center">
                            {position}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="text-center pb-4 px-4 flex-1">
                          <p className="text-sm text-muted-foreground">
                            Certifierad mekaniker med mångårig erfarenhet av
                            alla typer av bilreparationer och service.
                          </p>
                        </CardContent>

                        <CardFooter className="pb-4">
                          <div className="flex gap-2">
                            {socialNetworks.map(
                              ({ name, url }: SociaNetworkslProps) => (
                                <a
                                  key={name}
                                  rel="noreferrer noopener"
                                  href={url}
                                  target="_blank"
                                  className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                  })}
                                >
                                  <span className="sr-only">{name} icon</span>
                                  {socialIcon(name)}
                                </a>
                              )
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>

            {/* Mobile navigation dots for team carousel */}
            <div className="flex justify-center mt-6 sm:hidden">
              <div className="flex space-x-2">
                {[...Array(Math.ceil(teamList.length / 1))].map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-muted transition-colors duration-200"
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
