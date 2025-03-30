
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-r from-eco-paper to-white">
      <div className="absolute -right-20 top-10 opacity-10">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="text-eco-green fill-current"
        >
          <path
            d="M42.7,-73.2C55.9,-65.7,67.7,-54.9,75.7,-41.4C83.7,-27.9,87.8,-11.7,87,3.8C86.3,19.3,80.6,34.1,71.2,45.9C61.9,57.6,48.8,66.3,35,72.7C21.1,79.1,6.4,83.2,-8.8,84.3C-24,85.4,-39.8,83.5,-51.9,75.4C-64,67.4,-72.4,53.3,-76.4,38.8C-80.4,24.3,-79.9,9.5,-77.4,-4.5C-74.8,-18.5,-70.1,-31.5,-61.6,-41C-53.1,-50.5,-40.8,-56.4,-28.8,-64.2C-16.9,-72.1,-5.2,-82,6.7,-82.7C18.7,-83.5,29.6,-80.7,42.7,-73.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-eco-accent text-white text-sm px-3 py-1 font-bold">200枚3000円</Badge>
              <Badge className="bg-eco-green text-white text-sm px-3 py-1 font-bold flex items-center">
                <Clock className="mr-1 h-3 w-3" /> 朝8時までの注文で夕方納品
              </Badge>
              <Badge className="bg-red-500 text-white text-sm px-3 py-1 font-bold">在庫限定</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-eco-dark">
              未来を変える名刺<br />
              <span className="text-eco-green">CO2ゼロ</span>で、<br />
              あなたのビジネスも<br />グリーンに！
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              環境に配慮した最新技術で印刷した高品質なCO2フリー名刺。今すぐ、エコで洗練されたビジネスツールを手に入れよう。
            </p>
            
            <div className="pt-4">
              <Button 
                className="bg-eco-accent hover:bg-opacity-90 text-white text-lg px-8 py-6 relative"
                size="lg"
                onClick={() => document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" })}
              >
                今すぐ購入する
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  即日発送
                </span>
              </Button>
            </div>
            
            <div className="flex items-center gap-3 mt-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-eco-green mr-1" />
                <span>環境認証取得済み</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-eco-green mr-1" />
                <span>高品質保証</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-eco-green mr-1" />
                <span>安心サポート</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-eco-green rounded-lg"></div>
              <img 
                src="/placeholder.svg" 
                alt="環境に優しいCO2ゼロ名刺" 
                className="w-full max-w-lg rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-3 -right-3">
                <div className="bg-eco-accent text-white text-sm font-bold py-2 px-4 rounded-full">
                  CO2ゼロ印刷
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
