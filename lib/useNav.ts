import { useTranslations } from "next-intl";

export const useNav = () => {
  const t = useTranslations("Navbar");

  return [
    {
      href: "/#web-design",
      title: t("WebDesign"),
    },
    {
      href: "/#graphical-design",
      title: t("GraphDesign"),
    },
    {
      href: "/#automatyzacje",
      title: t("Automation"),
    },
    {
      href: "/#o-mnie",
      title: t("Aboutme"),
    },
    {
      href: "/#kontakt",
      title: t("Contact"),
    },
  ];
};
