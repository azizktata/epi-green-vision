"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
} from "@nextui-org/navbar";

import Link from "next/link";
import { Image } from "@nextui-org/image";

export default function Header({ logoUrl }: { logoUrl: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Our values", path: "/#values" },
    { label: "Our vision", path: "/#vision" },
    { label: "Our services", path: "/#services" },
    { label: "Contact us", path: "/#contact" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="  py-2 flex justify-center"
      isBordered
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="hidden sm:flex">
          <Link href={"/"} className="font-bold text-inherit">
            <Image
              src={logoUrl && logoUrl.length > 0 ? logoUrl : "/logo-green.png"}
              alt="logo epigreenvision"
              width={112}
              height={50}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-12 text-lg mx-auto bord "
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" className="hover:text-gray-500" href="/">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-base hover:text-gray-500" href="/#values">
            Our values
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-base hover:text-gray-500" href="/#vision">
            Our vision
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="hover:text-gray-500"
            href="/#services"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-base hover:text-gray-500" href="/#contact">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem>
          <Button
            className="flex gap-2 text-[#DD7DB8] border-[#DD7DB8]"
            href="#"
            variant="bordered"
            onPress={handleWhatsAppCall}
          >
            <Phone size={16} />
            <span>+216 98 797 410</span>
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu className="flex flex-col  gap-8 pt-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            onClick={handleMenuItemClick}
            key={`${item}-${index}`}
            className="border-b border-gray-300 pb-2 w-auto"
          >
            <Link
              className="w-auto text-xl"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
