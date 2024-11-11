import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from 'next/link';
import { Phone, KeyRound, House, LockKeyhole, MapPin } from "lucide-react"


const NAV_MENU = [
  {
    name: "Ana Sayfa",
    icon: House,
    href: "/#anasayfa",
  },
  {
    name: "Hizmetlerimiz",
    icon: LockKeyhole,
    href: "/#hizmetlerimiz"
  },
  {
    name: "Bölgelerimiz",
    icon: MapPin,
    href: "/#bolgelerimiz",
  },
  {
    name: "İletişim",
    icon: Phone,
    href: "/#iletisim",
  },
];


function NavItem({ children, href }) {
  return (
    <li>
      <Link href={href || "#"} passHref>
        <p className="flex items-center gap-2 font-medium text-gray-900">
          {children}
        </p>
      </Link>
    </li>
  );
  //     <Typography
  //       href={href || "#"}
  //       target={href ? "_blank" : "_self"}
  //       variant="paragraph"
  //       color="gray"
  //       className="flex items-center gap-2 font-medium text-gray-900"
  //     >
  //       {children}
  //     </Typography>
  //   </li>
  // );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          <div className="flex items-center justify-between">
            <Typography color="blue-gray" className="text-lg font-bold flex gap-1 items-center">
              <KeyRound size={24} />Bursa Batı Çilingir
            </Typography>
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon size={24} className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="tel:05426910157"
              >
                <Button className="flex gap-2 items-center !bg-[#f26419] "><Phone size={18} />Arayın</Button>
              </a>
            </div>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon size={24} className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <a
                  href="tel:05426910157"
                >
                  <Button className="flex gap-2 items-center !bg-[#f26419] "><Phone size={18} />Arayın</Button>
                </a>
              </div>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
