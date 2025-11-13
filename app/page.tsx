"use client"
import { WaitlistForm } from "@/components/form";
import SpaceTravel from "@/components/spacebg";
import Image from "next/image";

export default function Home() {
  const images = [
    { image: "/images/pic1.jpg" },
    { image: "/images/pic2.png" },
    { image: "/images/pic3.jpg" },
    { image: "/images/pic4.jpg" },
    { image: "/images/pic5.jpg" },
    { image: "/images/pic6.jpg" },
    { image: "/images/pic.png" },
  ]
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black">
      <div className="w-full min-h-screen overflow-hidden flex items-center justify-center">
          <SpaceTravel
          
            items={images}
            renderChild={(item) => (
              <div className="w-56 h-32">
                <Image
                  src={item.image}
                  alt={item.image}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          >
              <WaitlistForm/>
          </SpaceTravel>
        
      </div>
    </div>
  );
}
