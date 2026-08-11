"use client";
import { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Fancybox = ({ children, options = {} }) => {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {
      ...options,
    });

    return () => {
      NativeFancybox.destroy();
    };
  }, [options]);

  return <>{children}</>;
};

export default Fancybox;