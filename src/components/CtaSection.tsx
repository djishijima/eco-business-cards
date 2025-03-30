
import React from "react";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="purchase" className="py-16 md:py-24 eco-gradient text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Leaf className="h-16 w-16 mx-auto mb-6 animate-bounce" />
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          今こそ、環境に優しいビジネススタイルを！
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          CO2フリー名刺で、あなたのビジネスと地球環境、両方に貢献しませんか？
        </p>
        
        <Button 
          className="bg-eco-accent hover:bg-opacity-90 text-white text-lg px-10 py-7 rounded-md shadow-lg"
          size="lg"
        >
          今すぐ購入する
        </Button>
        
        <p className="mt-6 text-sm md:text-base opacity-80">
          ※在庫に限りがあります。購入前の詳細なご質問はお気軽にお問い合わせください。
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
