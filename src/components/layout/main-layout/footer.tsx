import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import assert from "@/assets";
import { LucideProps, Mail, MapPin, Phone } from "lucide-react";

interface ContactProps {
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const contactList: ContactProps[] = [
  { name: "185 đường Lộc Vượng", icon: MapPin },
  { name: "090 123 4567", icon: Phone },
  { name: "picokoi.gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="py-10 bg-primary">
      <div className="container flex flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <Avatar>
            <AvatarImage src={assert.logo} alt="Koi" className="size-24" />
            <AvatarFallback>
              <span>Koi</span>
            </AvatarFallback>
          </Avatar>
          <span className="text-2xl italic font-bold">PicoKoi</span>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            {contactList.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 ">
          <div>About us</div>
          <div>Farms</div>
          <div>Fish</div>
          <div>Service</div>
        </div>
        <div className="space-y-3">
          <div>Support</div>
          <div>Privacy Policy</div>
          <div>Term of Service</div>
          <div>Feedback</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
