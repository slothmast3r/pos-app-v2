"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

const navigationItems = [
  { name: "Home", pathName: "#" },
  { name: "Price", pathName: "#" },
  { name: "About Us", pathName: "#" },
  { name: "Contact", pathName: "#" },
];

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar position="static">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarBrand>
        <p className="font-bold text-inherit">EzytraPOS</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navigationItems.map((link) => (
          <NavigationElement
            key={link.name}
            name={link.name}
            pathName={link.pathName}
          />
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="app">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navigationItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === navigationItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.pathName}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavigationBar;

type NavigationElemenetProps = {
  name: string;
  pathName: string;
};

function NavigationElement({ name, pathName }: NavigationElemenetProps) {
  return (
    <NavbarItem>
      <Link color="foreground" href={pathName}>
        {name}
      </Link>
    </NavbarItem>
  );
}
