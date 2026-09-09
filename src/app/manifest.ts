import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.nameEn,
    short_name: "Ujjain Puja",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF3E4",
    theme_color: "#7A1F2B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
