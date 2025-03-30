
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const FloatingCta = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      // ヒーローセクションを過ぎたらボタンを表示する
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const scrollToPurchase = () => {
    document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-2 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button
        className="bg-eco-green hover:bg-eco-green/90 rounded-full p-3 shadow-lg"
        size="icon"
        onClick={scrollToTop}
        aria-label="ページ上部へ"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      
      <Button
        className="bg-eco-accent hover:bg-eco-accent/90 text-white shadow-lg animate-pulse"
        onClick={scrollToPurchase}
      >
        今すぐ購入する
      </Button>
    </div>
  );
};

export default FloatingCta;
