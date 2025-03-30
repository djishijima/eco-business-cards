
import React from "react";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-eco-green" />
          <span className="text-xl font-bold text-eco-dark">
            文唱堂<span className="text-eco-green">印刷</span>
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-eco-dark">
          <a href="#features" className="hover:text-eco-green transition-colors">特徴</a>
          <a href="#process" className="hover:text-eco-green transition-colors">製作プロセス</a>
          <a href="#testimonials" className="hover:text-eco-green transition-colors">お客様の声</a>
          <a href="#contact" className="hover:text-eco-green transition-colors">お問い合わせ</a>
        </nav>
        
        <Button 
          className="bg-eco-accent hover:bg-opacity-90 text-white px-4 py-2"
          onClick={() => document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" })}
        >
          今すぐ購入する
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
