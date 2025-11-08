import { Phone, Mail, MapPin, Download, QrCode, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const phoneNumber = "+94 769 635 457";
  const email = "adithyafleetandtransport@gmail.com";
  const address = "763/1 Romiyal Mawatha, Panagoda, Homagama";
  const whatsappNumber = "94769635457";
  const instagramHandle = "adithya_fandt";

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
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Snow Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80 animate-fall"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 10}s`,
              transform: `translateX(${Math.random() * 20 - 10}px)`,
            }}
          />
        ))}
      </div>

      {/* Main Card */}
      <Card className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="p-8 md:p-12 space-y-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            {/* Company Logo */}
            <div className="shrink-0 animate-fade-in-up">
              <img
                src="/Final With BG.png"
                alt="Adithya Fleet And Transport Logo"
                className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-2xl shadow-lg bg-white/5 p-2"
              />
            </div>

            {/* Company Info */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Adithya Fleet And Transport
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                One Name. Endless Possibilities
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Logistics • Fleet Management • Transportation Solutions
              </p>
            </div>

            <div className="text-gray-400 text-sm font-medium">Est. 2025</div>
          </div>

          {/* Contact Details */}
          <div className="space-y-5">
            {/* Phone */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
              <Phone className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-lg font-semibold text-white hover:text-blue-300 transition"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
              <Mail className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-lg font-semibold text-white hover:text-blue-300 transition break-all"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
              <MapPin className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400 mb-1">Address</p>
                <p className="text-lg font-semibold text-white">{address}</p>
                <a
                  href="https://www.google.com/maps/place//@6.8519521,80.0225342,19.52z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-300 hover:underline inline-block mt-1"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>

            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              WhatsApp
            </Button>

            <Button
              onClick={handleEmail}
              size="lg"
              className="bg-gradient-to-r from-blue-gray-600 to-blue-gray-800 hover:from-blue-gray-500 hover:to-blue-gray-700 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>

            <Button
              onClick={handleDownloadVCard}
              size="lg"
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              vCard
            </Button>
          </div>

          {/* Social Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-white/20">
            <div className="text-center md:text-left space-y-2">
              <p className="text-sm text-gray-400">Follow</p>
              <p className="text-base font-semibold text-white">
                @{instagramHandle}
              </p>
            </div>

            {/* QR */}
            <div className="text-center">
              <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center shadow-inner p-2">
                <QrCode className="w-full h-full text-gray-900" />
              </div>
              <p className="text-xs text-gray-400 mt-2">Scan to connect</p>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <Button
                size="icon"
                className="bg-white/10 hover:bg-blue-500 text-white rounded-full w-12 h-12 hover:scale-110 hover:shadow-lg transition-transform"
                onClick={() =>
                  window.open(`https://instagram.com/${instagramHandle}`, "_blank")
                }
              >
                <Instagram className="w-6 h-6" />
              </Button>

              <Button
                size="icon"
                className="bg-white/10 hover:bg-blue-700 text-white rounded-full w-12 h-12 hover:scale-110 hover:shadow-lg transition-transform"
                onClick={() =>
                  window.open("https://www.linkedin.com/company/adithya-fleet-transport", "_blank")
                }
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/20 text-sm text-gray-400">
            <p>© 2025 Adithya Fleet And Transport</p>
            <p className="flex items-center gap-2">
              Made with <span className="text-red-500 animate-pulse">❤️</span> in Sri Lanka
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
