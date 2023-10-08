import { AR_One_Sans, Darumadrop_One } from "next/font/google";
import Image from "next/image";

const daruma = Darumadrop_One({
  weight: "400",
  subsets: ["latin"],
});
const arone = AR_One_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div
      className={`${arone.className} overflow-y-scroll max-h-96 p-1 bg-black`}
    >
      <p>
        <span className={`${daruma.className} text-2xl`}>BanyoeHirup</span> is
        an interactive web-based program targeting middle schoolers to learn
        about Climate Change. The name of this program derives from the Javanese
        word &apos;Banyu&apos;, meaning water, and the Sundanese word
        &apos;Hirup&apos;, meaning life. When combined, they symbolize &apos;the
        water of life&apos;, underscoring water&apos;s role as a source of life
        for all living things on Earth.
      </p>
      <p className="mt-4">
        Our goal with BanyoeHirup is to make information about climate change
        accessible to the younger generation, primarily middle schoolers. This
        is why we designed it with an unconventional web UI, resembling more of
        a game to ensure it remains engaging and prevents boredom. BanyoeHirup
        can be used as an engaging way to educate children. Our vision is for
        this web-based app to be utilized within schools, with the addition of
        local-level impact content. This way, we also contribute to slowing the
        rapid climate change, creating a better world for future generations.
      </p>

      <p className="mt-4">
        Access the repository here{" "}
        <a
          href="https://github.com/heryandjaruma/banyoehirup"
          target="_blank"
          className="underline text-blue-600"
        >
          https://github.com/heryandjaruma/banyoehirup
        </a>
      </p>

      <div className="mt-8">
        <p className="text-2xl">Our Team</p>
        <div className="grid grid-cols-3 place-items-start mt-2">
          <Image
            src="/bjir.jpg"
            width={500}
            height={500}
            className="p-3 bg-white w-44 rounded-lg"
            priority
            alt="team logo"
          />
          <div className="col-span-2">
            <p className="mb-2">
              Hi folks! We are Beyond Journeys in Innovative Research (BJIR), an
              Indonesian-based team of 5.
            </p>
            <p>
              Bryan Viriya Kurniawan | Protoyping |{" "}
              <a
                href="https://www.linkedin.com/in/bryan-viriya-kurniawan/"
                target="_blank"
                className="underline"
              >
                Linkedin
              </a>
            </p>
            <p>
              Cindara Nissa Septesatarin | Designer |{" "}
              <a
                href="https://www.linkedin.com/in/cindara-nissa/"
                target="_blank"
                className="underline"
              >
                Linkedin
              </a>
            </p>
            <p>
              Eleanor Maritsa Maharani | Data/Content Planner |{" "}
              <a
                href="https://www.linkedin.com/in/eleanormaritsa/"
                target="_blank"
                className="underline"
              >
                Linkedin
              </a>
            </p>
            <p>
              Faishal Kamil | Data/Content Planner |{" "}
              <a
                href="https://www.linkedin.com/in/faishal-kamil/"
                target="_blank"
                className="underline"
              >
                Linkedin
              </a>
            </p>
            <p>
              Heryan Djaruma | Lead |{" "}
              <a
                href="https://www.linkedin.com/in/heryandjaruma/"
                target="_blank"
                className="underline"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
