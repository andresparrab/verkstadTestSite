import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  // Function to check if drop-in is available (this would normally connect to your booking system)
  const getDropInStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Check if it's within business hours (Mon-Fri 7-17, Sat 8-14, Sun closed)
    const isWeekday = currentDay >= 1 && currentDay <= 5;
    const isSaturday = currentDay === 6;
    const isSunday = currentDay === 0;

    if (isSunday) {
      return {
        available: false,
        nextSlot: "Måndag 07:00",
      };
    }

    if (isWeekday && currentHour >= 7 && currentHour < 17) {
      return {
        available: true,
        nextSlot: null,
      };
    }

    if (isSaturday && currentHour >= 8 && currentHour < 14) {
      return {
        available: true,
        nextSlot: null,
      };
    }

    // Outside business hours - calculate next available slot
    if (isWeekday && currentHour >= 17) {
      return {
        available: false,
        nextSlot: currentDay === 5 ? "Måndag 07:00" : "Imorgon 07:00",
      };
    }

    if (isSaturday && currentHour >= 14) {
      return {
        available: false,
        nextSlot: "Måndag 07:00",
      };
    }

    return {
      available: false,
      nextSlot: "Idag 07:00",
    };
  };

  const dropInStatus = getDropInStatus();

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="space-y-4">
        {/* Contact Information */}
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kontakta{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Oss
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Har du frågor om din bil eller vill boka en tid? Vi hjälper dig
              gärna! Kontakta oss direkt eller fyll i formuläret nedan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">Ring oss direkt</p>
                    <a
                      href="tel:+46123456789"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +46 734923081
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <Mail className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">E-post</p>
                    <a
                      href="mailto:info@staketmek.se"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@staketmek.se
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">Besöksadress</p>
                    <p className="text-muted-foreground text-sm">
                      Skarprättarvägen 1
                      <br />
                      176 77 Järfälla
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      Ö
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Öppettider</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>Mån-Fre: 07:00-17:00</div>
                      <div>Lördag: 08:00-14:00</div>
                      <div>Söndag: Stängt</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={
                dropInStatus.available
                  ? "border-green-500 bg-green-50 dark:bg-green-950"
                  : "border-orange-500 bg-orange-50 dark:bg-orange-950"
              }
            >
              <CardContent className="pt-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  {dropInStatus.available ? (
                    <Clock className="w-8 h-8 text-green-600" />
                  ) : (
                    <Calendar className="w-8 h-8 text-orange-600" />
                  )}
                  <div>
                    <p className="font-semibold mb-1">
                      {dropInStatus.available
                        ? "Drop-in Tillgänglig"
                        : "Nästa Lediga Tid"}
                    </p>
                    {dropInStatus.available ? (
                      <div className="space-y-1">
                        <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                          Kom direkt!
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400">
                          För enklare ärenden
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <p className="text-orange-700 dark:text-orange-300 text-sm font-medium">
                          {dropInStatus.nextSlot}
                        </p>
                        <p className="text-xs text-orange-600 dark:text-orange-400">
                          Ring för att boka
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
