import { AR_One_Sans } from "next/font/google";

const arone = AR_One_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Instruction() {
  return (
    <div
      className={`${arone.className} overflow-y-scroll max-h-96 p-1 bg-black`}
    >
      <p className={`text-2xl`}>How to Use (General)</p>
      <p>
        Using BanyoeHirup is fairly simple. Navigate through the user interface
        displayed on the screen. Banyoe will take you on an awesome journey
        about climate change. Each screen and content has been designed to be
        interactive, accessible solely with your cursor, eliminating the need
        for typing or using your keyboard. Begin your exploration and follow the
        story presented, diving into the details about climate change.
      </p>
      <p className={`text-2xl mt-4`}>How to Use (What is Climate Change?)</p>
      <p>
        We&apos;ve designed this section as a story. Use the next or previous
        button to navigate through screens. Press the home button to go back to
        the main menu. Don&apos;t forget to read the content, as you might miss
        important details about climate change!
      </p>
      <p className={`text-2xl mt-4`}>How to Use (World, Water, Climate)</p>
      <p>
        Hey, look—a world map! No need to be confused, just press any red
        pinpoint you see—this will take you closer to see what climate change
        has to do in each pinpointed location. On the bottom left of the screen,
        there is Banyoe, who will guide you to learn more about water!
      </p>
      <p className={`text-2xl mt-4`}>How to Use (How can I help Banyoe?)</p>
      <p>
        This menu will take you on a journey to help Banyoe himself and his
        friends from losing their existence! Navigate with the next or previous
        button, and press the home button to return to the main menu.
      </p>
      <p className={`text-2xl mt-4`}>Screen Requirement</p>
      <p>
        While it is possible to use BanyoeHirup on hand-held devices such as
        phones and tablets, we recommend using a device with a minimum screen
        resolution of 1920 x 1080 to fully enjoy the experience.
      </p>
      <p className={`text-2xl mt-4`}>Music</p>
      <p>
        BanyoeHirup accompanies you with calming music to enhance relaxation
        while exploring. Nevertheless, you can mute the sound using the floating
        speaker button on the top right of your screen. Volume adjustment is
        available, but only when using a desktop screen with a certain minimum
        resolution.
      </p>
      <p className={`text-2xl mt-4`}>Lag Issue</p>
      <p>
        For smooth exploration, ensure you have a good internet connection. A
        slow connection may result in unloaded images, laggy transitions, or
        missing content on the screen.
      </p>
    </div>
  );
}
