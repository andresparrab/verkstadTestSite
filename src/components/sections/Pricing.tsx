import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const PopularPlanType = {
  NO: 0,
  YES: 1,
} as const;

interface PricingProps {
  title: string;
  popular: number;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Grundservice",
    popular: 0,
    price: 899,
    description:
      "Perfekt för regelbunden underhåll och för att hålla din bil i god kondition.",
    buttonText: "Boka Nu",
    benefitList: [
      "Oljebyte + filter",
      "Bromskontroll",
      "Däcktryck",
      "Belysningskontroll",
      "6 månaders garanti",
    ],
  },
  {
    title: "Komplett Service",
    popular: 1,
    price: 1599,
    description:
      "Vår mest populära service som inkluderar omfattande kontroll och underhåll.",
    buttonText: "Boka Service",
    benefitList: [
      "Allt i Grundservice",
      "Motor diagnostik",
      "Växellådsservice",
      "Kylsystemkontroll",
      "12 månaders garanti",
    ],
  },
  {
    title: "Premium Inspektion",
    popular: 0,
    price: 2499,
    description:
      "Fullständig genomgång av ditt fordon med detaljerad rapport och rekommendationer.",
    buttonText: "Kontakta Oss",
    benefitList: [
      "Komplett fordonsgranskning",
      "Avancerad diagnostik",
      "Detaljerad rapport",
      "Prioriterad service",
      "24 månaders garanti",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Våra
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Servicepaket{" "}
        </span>
        & Priser
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Välj det servicepaket som passar dina behov bäst. Alla priser inkluderar
        arbetskostnad och grundläggande delar.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Populärast
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}kr</span>
                <span className="text-muted-foreground"> /service</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
