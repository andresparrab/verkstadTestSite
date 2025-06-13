import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Vilka typer av fordon servar ni?",
    answer:
      "Vi servar alla typer av personbilar, lätta lastbilar och transportbilar från alla tillverkare. Oavsett märke eller modell kan våra certifierade mekaniker hjälpa dig.",
    value: "item-1",
  },
  {
    question: "Hur lång tid tar en vanlig service?",
    answer:
      "En grundservice tar vanligtvis 2-4 timmar beroende på fordonets tillstånd och vilka åtgärder som behövs. Vi informerar alltid om beräknad tid när du bokar.",
    value: "item-2",
  },
  {
    question: "Erbjuder ni garanti på reparationer?",
    answer:
      "Ja, vi erbjuder 12 månaders garanti på alla våra reparationer och använder endast kvalitetsdelar. Din trygghet är vår prioritet.",
    value: "item-3",
  },
  {
    question: "Kan jag boka tid online?",
    answer:
      "Ja, du kan enkelt boka tid via vår hemsida eller ringa oss direkt. Vi erbjuder flexibla tider och kan ofta ta emot brådskande ärenden samma dag.",
    value: "item-4",
  },
  {
    question: "Vad ingår i en grundservice?",
    answer:
      "En grundservice inkluderar oljebyte, filter, bromskontroll, däcktryck, belysning och en allmän säkerhetskontroll. Vi går alltid igenom vad som behöver göras innan vi börjar arbeta.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Vanliga{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frågor
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
