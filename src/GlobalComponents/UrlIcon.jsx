import { useEffect } from "react";

export default function UrlIcon() {
  useEffect(() => {
    // Set custom page title
    document.title = "Fhatuwani | Software Engineer";

    // Set favicon
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = "TFlogoicon.png"; // must be in public/
    link.sizes = "1000x1000"; // or "512x512" if you have that

    document.head.appendChild(link);
  }, []);

  return null;
}

