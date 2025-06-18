import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Statistics } from "./Statistics";

export const AboutTeamSection = () => {


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

      <div className="grid lg:grid-cols-1 gap-8 xl:gap-12">
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
                Sedan 2020 har Stäket Mek & Däck levererat exceptionell
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
      </div>
    </section>
  );
};
