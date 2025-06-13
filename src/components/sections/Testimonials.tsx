import {
  Card,
  CardContent,
  CardDescription,
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
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  userName: string;
  comment: string;
  email?: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Anna Eriksson",
    userName: "Privatperson",
    email: "anna.eriksson@email.com",
    rating: 5,
    comment:
      "Fantastisk service! Min bil var klar samma dag och körde perfekt. Personalen var mycket hjälpsam och förklarade allt tydligt.",
  },
  {
    name: "Lars Petersson",
    userName: "Återkommande kund",
    rating: 5,
    comment:
      "Har anlitat dem i flera år för alla mina bilbehov. Alltid professionellt arbete, rimliga priser och de håller alltid sina löften om leveranstid.",
  },
  {
    name: "Maria Johansson",
    userName: "Företagskund",
    email: "maria.johansson@företag.se",
    rating: 5,
    comment:
      "Som företag med flera fordon uppskattar vi deras flexibilitet och snabba service. De har hjälpt oss hålla våra bilar på vägen utan onödiga stopp.",
  },
  {
    name: "Erik Lindqvist",
    userName: "Nöjd kund",
    rating: 5,
    comment:
      "Bästa bilverkstaden i staden! De hittade ett fel som andra verkstäder missat och fixade det till ett mycket rimligt pris. Rekommenderar varmt!",
  },
  {
    name: "Sofie Andersson",
    userName: "Privatperson",
    email: "sofie.andersson@gmail.com",
    rating: 5,
    comment:
      "Mycket nöjd med deras service. Ärliga och transparenta med både priser och vad som behöver göras. Känner mig alltid trygg när jag lämnar bilen här.",
  },
  {
    name: "Magnus Nilsson",
    userName: "Återkommande kund",
    rating: 4,
    comment:
      "Snabb och pålitlig service varje gång. De går igenom allt noggrant och ser till att bilen är säker innan jag hämtar den. Toppenklass!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Se Varför
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}
            Våra Kunder{" "}
          </span>
          Väljer Oss
        </h2>

        <p className="text-xl text-muted-foreground pt-4">
          Läs vad våra nöjda kunder säger om vår service och se varför vi är den
          mest betrodda bilverkstaden i området.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map(
            ({ name, userName, comment, email, rating }: TestimonialProps) => (
              <CarouselItem
                key={name + userName}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-muted/50 group cursor-pointer transition-all duration-300 ease-in-out hover:bg-card hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] border-transparent hover:border-primary/30 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {rating}/5
                      </span>
                    </div>

                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {name}
                    </CardTitle>

                    <div className="space-y-1">
                      <CardDescription className="text-sm">
                        {userName}
                      </CardDescription>
                      {email && (
                        <CardDescription className="text-xs text-muted-foreground">
                          {email}
                        </CardDescription>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="group-hover:text-foreground transition-colors duration-300">
                    <p className="text-sm leading-relaxed">"{comment}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Mobile navigation dots */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex space-x-2">
          {[...Array(Math.ceil(testimonials.length / 1))].map((_, index) => (
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
