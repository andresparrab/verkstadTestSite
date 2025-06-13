import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast("Meddelande skickat!", {
        description: "Vi återkommer till dig inom 24 timmar.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      globalThis.console.log(error);
      toast("Något gick fel", {
        description: "Försök igen eller ring oss direkt.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Skicka oss ett meddelande</CardTitle>
          <CardDescription>
            Vi svarar vanligtvis inom 24 timmar. För brådskande ärenden, ring
            oss direkt.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Namn *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ditt fullständiga namn"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-post *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="din@email.se"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefonnummer</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+46 70 123 45 67"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Ämne *</Label>
              <Select onValueChange={handleSelectChange} required>
                <SelectTrigger>
                  <SelectValue placeholder="Välj ämne för ditt meddelande" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="service">Boka service</SelectItem>
                  <SelectItem value="repair">Reparation</SelectItem>
                  <SelectItem value="inspection">Besiktning</SelectItem>
                  <SelectItem value="tires">Däck & fälgar</SelectItem>
                  <SelectItem value="quote">Prisförfrågan</SelectItem>
                  <SelectItem value="warranty">Garanti</SelectItem>
                  <SelectItem value="other">Övrigt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Meddelande *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Beskriv ditt ärende, bilmodell, problem eller vad vi kan hjälpa dig med..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                "Skickar..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Skicka meddelande
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
