import { AR_One_Sans } from "next/font/google";

const arone = AR_One_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Resources() {
  return (
    <div
      className={`${arone.className} overflow-y-scroll max-h-96 p-1 bg-black overflow-x-clip`}
    >
      <p>This tab will show you all resources used in BanyoeHirup</p>

      <p className="mt-8 text-2xl mb-1">Content</p>
      <div className="">
        <p>
          NASA Global Climate Change{" - "}
          <a
            href="https://climate.nasa.gov/"
            className="underline"
            target="_blank"
          >
            https://climate.nasa.gov/
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p>
          Impacts of Climate Change{" - "}
          <a
            href="https://australian.museum/learn/climate-change/climate-change-impacts/"
            className="underline"
            target="_blank"
          >
            https://australian.museum/learn/climate-change/climate-change-impacts/
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p>
          IPCC Sea Level Rise{" - "}
          <a
            href="https://www.ipcc.ch/report/ar1/wg1/sea-level-rise/"
            className="underline"
            target="_blank"
          >
            https://www.ipcc.ch/report/ar1/wg1/sea-level-rise/
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p>
          As Jakarta Grows, So Do the Water Issues{" - "}
          <a
            href="https://earthobservatory.nasa.gov/images/148303/as-jakarta-grows-so-do-the-water-issues"
            className="underline"
            target="_blank"
          >
            https://earthobservatory.nasa.gov/images/148303/as-jakarta-grows-so-do-the-water-issues
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p>
          Water - at the center of the climate crisis{" - "}
          <a
            href="            https://www.un.org/en/climatechange/science/climate-issues/water"
            className="underline"
            target="_blank"
          >
            https://www.un.org/en/climatechange/science/climate-issues/water
          </a>
        </p>
      </div>

      <p className="mt-8 text-2xl mb-1">Illustration, Graph, and Image</p>
      <div className="">
        <p>
          Resources are retreived from various sources. Each source is cited on
          screen where it is being used.
        </p>
      </div>
      <div className="mt-4">
        <p>
          Flat design climate change landing page{" - "}
          <a
            href="https://www.freepik.com/free-vector/flat-design-climate-change-landing-page_18393850.htm#query=climate%20change&position=48&from_view=search&track=ais"
            className="underline"
            target="_blank"
          >
            https://www.freepik.com/free-vector/flat-design-climate-change-landing-page_18393850.htm#query=climate%20change&position=48&from_view=search&track=ais
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p>
          Shock emoji{" - "}
          <a
            href="https://parspng.com/en/images/shock-emoji-png/"
            className="underline"
            target="_blank"
          >
            https://parspng.com/en/images/shock-emoji-png/
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p>
          Purification plant isometric{" - "}
          <a
            href="https://www.freepik.com/free-vector/purification-plant-isometric_5972692.htm#query=smart%20water%20management&position=9&from_view=search&track=ais"
            className="underline"
            target="_blank"
          >
            https://www.freepik.com/free-vector/purification-plant-isometric_5972692.htm#query=smart%20water%20management&position=9&from_view=search&track=ais
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p>World Map - BJIR Team</p>
      </div>

      <p className="mt-8 text-2xl mb-1">Music</p>
      <div className="">
        <p>Under The Ocean - BJIR Team</p>
      </div>

      <p className="mt-8 text-2xl mb-1">Tools/Techstack</p>
      <div className="">
        <p>Vercel - Hosting</p>
      </div>
      <div className="mt-4">
        <p>Porkbun - DNS Provider</p>
      </div>
      <div className="mt-4">
        <p>Figma - User Interface and Prototyping</p>
      </div>
      <div className="mt-4">
        <p>NextJS - Language</p>
      </div>
    </div>
  );
}
