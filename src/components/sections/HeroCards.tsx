import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Wrench, Facebook, Linkedin } from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>AE</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Anna Eriksson</CardTitle>
            <CardDescription>@anna_eriksson</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Fantastisk service! Min bil var klar samma dag och körde perfekt.
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=35"
            alt="Erik Johansson mekaniker"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Erik Johansson</CardTitle>
          <CardDescription className="font-normal text-primary">
            Bilmekaniker
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Jag brinner för att hålla alla fordon i toppskick och ge kunderna
            den bästa servicen.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin ikon</span>
              <Linkedin size="20" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Facebook ikon</span>
              <Facebook size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Grundservice
            <Badge variant="secondary" className="text-sm text-primary">
              Populärast
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">699kr</span>
            <span className="text-muted-foreground"> /service</span>
          </div>

          <CardDescription>
            Komplett grundservice för att hålla din bil i toppskick året runt.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Boka Nu</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Oljebyte", "Bromskontroll", "12 mån garanti"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <Wrench />
          </div>
          <div>
            <CardTitle>Professionell Diagnostik</CardTitle>
            <CardDescription className="text-md mt-2">
              Vi använder den senaste teknologin för att snabbt och exakt
              diagnostisera problem med ditt fordon.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
