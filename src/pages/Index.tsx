import { Phone, Mail, MapPin, Download, QrCode, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const phoneNumber = "+94 769 635 678";
  const email = "adithyafleetandtransport@gmail.com";
  const address = "763/1 Romiyal Mawatha, Panagoda, Homagama";
  const whatsappNumber = "94769635457";
  const instagramHandle = "@adithya_fandtadithyafleetandtransport";

  const handleCall = () => window.open(`tel:${phoneNumber}`, "_self");
  const handleWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  const handleEmail = () => window.open(`mailto:${email}`, "_self");
  const handleDownloadVCard = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Adithya Fleet And Transport
ORG:Adithya Fleet And Transport
TEL:${phoneNumber}
EMAIL:${email}
ADR:;;${address}
URL:https://instagram.com/${instagramHandle}
END:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "adithya-fleet-transport.vcf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-3xl bg-card border-border shadow-2xl animate-fade-in overflow-hidden">
        <div className="p-6 md:p-12 space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 animate-fade-in-up">
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary flex items-center justify-center shadow-xl animate-glow">
                <span className="text-4xl md:text-5xl font-bold text-primary-foreground">AFT</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Adithya Fleet And Transport
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                One Name. Endless Possibilities
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Logistics • Fleet Management • Transportation Solutions
              </p>
            </div>

            <div className="shrink-0 text-sm text-muted-foreground">
              Est. 2025
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href={`tel:${phoneNumber}`} className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors break-all">
                  {phoneNumber}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href={`mailto:${email}`} className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors break-all">
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <p className="text-base md:text-lg font-semibold text-foreground">{address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-block mt-1"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              onClick={handleCall}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              variant="secondary"
              className="w-full font-semibold transition-all hover:scale-105"
            >
              WhatsApp
            </Button>
            
            <Button 
              onClick={handleEmail}
              size="lg"
              variant="secondary"
              className="w-full font-semibold transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            
            <Button 
              onClick={handleDownloadVCard}
              size="lg"
              variant="secondary"
              className="w-full font-semibold transition-all hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download vCard
            </Button>
          </div>

          {/* Social Media & QR Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center md:text-left">Follow</p>
              <p className="text-base font-semibold text-foreground break-all text-center md:text-left">
                {instagramHandle}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center mb-2">
                  <QrCode className="w-full h-full text-background" />
                </div>
                <p className="text-xs text-muted-foreground">Scan to connect</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center md:text-left">Quick actions</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <Button 
                  size="icon"
                  variant="secondary"
                  className="w-12 h-12 rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(`https://instagram.com/${instagramHandle}`, "_blank")}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  size="icon"
                  variant="secondary"
                  className="w-12 h-12 rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open("https://www.linkedin.com", "_blank")}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p>© 2025 Adithya Fleet And Transport</p>
            <p className="flex items-center gap-2">
              Made with <span className="text-red-500 animate-pulse">❤️</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
