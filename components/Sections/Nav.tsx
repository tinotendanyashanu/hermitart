"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { ModeToggle } from "../modeToggle";

import Icon from "../icon";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Gallery", "Shop", "About"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <div className="hidden sm:flex gap-4">
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Gallery
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Shop
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent className="sm:flex" justify="center">
        <NavbarItem isActive>
          <NavbarBrand className="mt-10">
            <Icon />
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Image
            src="/cart.svg"
            alt="Cart"
            width={50}
            height={50}
            className=" cursor-pointer"
          />
        </NavbarItem>
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
