import { link } from "fs";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import { ComponentAnchor } from "../componentAnchor";
import Container from "../ui/container";
import { Headline } from "../ui/headline";
import LinkHover from "../ui/linkHover";

interface iSponsor {
  href: string;
  width: number;
  height: number;
  slug: string;
}

type iLink = {
  href: string;
  text: string;
};

export function Sponsors() {
  const { t } = useTranslation();
  const sponsors: iSponsor[] = [
    {
      href: "/sponsor/umag.svg",
      height: 300,
      width: 300,
      slug: "umag",
    },
    {
      href: "/sponsor/epam.png",
      height: 300,
      width: 300,
      slug: "epam",
    },
    {
      href: "/sponsor/zapis.svg",
      height: 300,
      width: 300,
      slug: "zapis",
    },
    {
      href: "/sponsor/tassay.svg",
      height: 300,
      width: 300,
      slug: "tassay",
    },
  ];
  return (
    <ComponentAnchor id="sponsors">
      <Container>
        <Headline>{t("sponsors.headline")}</Headline>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-40 w-full sm:w-[1028px] mx-auto">
          {sponsors.map((sponsor, i) => (
            <div key={i}>
              <Image
                className="w-40"
                src={sponsor.href}
                alt={""}
                width={sponsor.width}
                height={sponsor.height}
              />
              <div className="text-xl">
                {t(`sponsors.${sponsor.slug}.body`)}
              </div>

              <div className="text-xl space-x-2">
                {t(`sponsors.${sponsor.slug}.links`).map(
                  (link: iLink, indexLink: number) => (
                    <LinkHover
                      key={indexLink}
                      href={link.href}
                      className="text-base text-rose-300"
                      customColor="rose"
                      isThin
                    >
                      {link.text}
                    </LinkHover>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ComponentAnchor>
  );
}
