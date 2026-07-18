import React from 'react';
import Image from "next/image";
import { ArrowRight } from "lucide-react";
const features = [
  {
    title: "High-quality protein for muscle growth",
  },
  {
    title: "Faster recovery after every workout",
  },
  {
    title: "Supports strength, stamina & endurance",
  },
  {
    title: "Lab-tested ingredients you can trust",
  },
];

export default function CreatineUseSection() {
  return (
    <section className="creatine-use-section">
      <div className="creatine-use-wrap">
        <div className="creatine-left">
          <h3 className="creatine-how-title">
           Premium Nutrition That Helps You Perform Better Every Day
          </h3>

          <p className="creatine-description">
            From high-quality Whey Protein and Creatine to daily wellness supplements, Rijova Biotech provides scientifically formulated nutrition to help you build strength, support muscle recovery, improve performance, and stay active every day.
          </p>

          <div className="creatine-features">
            {features.map((item) => (
              <div key={item.title} className="creatine-feature">
                  
                <span className="w-1.5 h-1.5 rounded-full bg-[#065f46] mt-1"></span><p>{item.title}</p>
              </div>
            ))}
          </div>

          {/* <h2 className="creatine-how-title">HOW TO USE</h2> */}

          {/* <p className="creatine-note">
           Choose the supplement that fits your goal and follow the recommended serving size. Simply mix with water or milk, shake well, and enjoy before or after your workout, or as directed on the product label.
          </p> */}

      <div className="creatine-cta-row">
  <a href="#" className="creatine-btn">
    <span>Shop Best Sellers</span>
    <ArrowRight className="creatine-btn-arrow" size={18} />
  </a>
</div>

         
        </div>

        <div className="creatine-right">
          <div className="creatine-stage">
            <div className="creatine-brush" />

            <div className="creatine-tip creatine-tip-top">
              Premium supplements made with trusted ingredients 
            </div>

            <div className="creatine-tip creatine-tip-middle">
            Perfect for fitness, muscle growth & daily wellness
            </div>

            <div className="creatine-tip creatine-tip-bottom">
             Use consistently with a balanced diet and exercise for the best results
              the day
            </div>

            <div className="creatine-glass">
              <div className="creatine-mug">
  <Image
    src="/images/mug.png"
    alt="Creatine Bag"
    width={500}
    height={700}
    className="w-full h-100 object-contain"
    priority
  />
</div>
            </div>

           <div className="creatine-bag">
  <Image
    src="/images/protein.png"
    alt="Creatine Bag"
    width={500}
    height={700}
    className="w-full h-100 object-contain"
    priority
  />
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
