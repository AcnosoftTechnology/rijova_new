'use client'
import Image from "next/image";

export default function Banshow() {
  return (
    <section className="w-full">
      <Image
        src="/images/your-image.jpeg"
        alt="Banner"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
      />
    </section>
  );
}