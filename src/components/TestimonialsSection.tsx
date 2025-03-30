
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialCard = ({ quote, author, position }: { quote: string; author: string; position: string }) => (
  <Card className="eco-card h-full">
    <CardContent className="pt-6 px-6 pb-6">
      <div className="text-4xl text-eco-green mb-4">"</div>
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div className="mt-auto">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">
            お客様の声
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CO2フリー名刺を導入された企業様からの評価
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="CO2フリー名刺に変えてから、取引先からの評価が格段にアップしました。エコな取り組みが確実に企業イメージを向上させています！"
            author="大手IT企業"
            position="経営者"
          />
          <TestimonialCard 
            quote="品質はもちろん、環境にやさしい名刺という点で自社のCSR活動に直結。導入して本当に良かったです！"
            author="ベンチャー企業"
            position="マーケティング担当"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
