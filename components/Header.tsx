import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { Flex, Spacer, Button } from "@chakra-ui/react";

import muxLogo from "../public/mux-logo.svg";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <Flex
      zIndex={2}
      padding="2"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#292929"
      borderBottom="1px solid #e8e8e8"
    >
      <Flex alignItems="center" padding="10px" width="290px">
        <a
          href="https://www.mux.com/real-time-video"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            priority
            alt="logo"
            width={150}
            src={muxLogo}
            style={{ height: "auto" }}
          />
        </a>
      </Flex>
      <Spacer />
      <Flex alignItems="center" padding="10px">
        <Link
          href="https://github.com/SujalShah3234/mux-meet"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub color="white" size="40px" />
        </Link>
      </Flex>
    </Flex>
  );
}
