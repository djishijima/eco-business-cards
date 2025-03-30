
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Clock, Check } from "lucide-react";

const CtaSection = () => {
  // カウントダウン機能を追加
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // リセット
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="purchase" className="py-16 md:py-24 eco-gradient text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Leaf className="h-16 w-16 mx-auto mb-6 animate-bounce" />
        
        <div className="bg-white/20 inline-block py-2 px-6 rounded-full mb-6">
          <span className="text-xl font-bold">200枚 3,000円（税別）</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          今こそ、環境に優しいビジネススタイルを！
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          CO2フリー名刺で、あなたのビジネスと地球環境、両方に貢献しませんか？
        </p>
        
        <div className="mb-8 bg-white/10 p-4 rounded-lg inline-block">
          <p className="text-lg mb-2 font-bold">この特別価格の終了まで残り</p>
          <div className="flex justify-center gap-4">
            <div className="bg-eco-dark/70 p-2 rounded-lg min-w-[4rem]">
              <span className="text-2xl font-mono">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <p className="text-xs">時間</p>
            </div>
            <div className="bg-eco-dark/70 p-2 rounded-lg min-w-[4rem]">
              <span className="text-2xl font-mono">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <p className="text-xs">分</p>
            </div>
            <div className="bg-eco-dark/70 p-2 rounded-lg min-w-[4rem]">
              <span className="text-2xl font-mono">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <p className="text-xs">秒</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-white mr-2 bg-eco-accent p-1 rounded-full" />
            <span>特急印刷対応</span>
          </div>
          <div className="flex items-center">
            <Check className="h-5 w-5 text-white mr-2 bg-eco-accent p-1 rounded-full" />
            <span>環境認証取得済み</span>
          </div>
          <div className="flex items-center">
            <Check className="h-5 w-5 text-white mr-2 bg-eco-accent p-1 rounded-full" />
            <span>デザイン無料相談</span>
          </div>
        </div>
        
        <Button 
          className="bg-eco-accent hover:bg-opacity-90 text-white text-lg px-10 py-7 rounded-md shadow-lg relative"
          size="lg"
        >
          今すぐ購入する
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            在庫限り
          </span>
        </Button>
        
        <p className="mt-6 text-sm md:text-base opacity-80">
          ※在庫に限りがあります。朝8時までのご注文で当日発送。購入前の詳細なご質問はお気軽にお問い合わせください。
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
