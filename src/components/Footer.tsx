
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-eco-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">会社情報</h3>
            <address className="not-italic">
              <p className="mb-2">文唱堂印刷株式会社</p>
              <p className="mb-2">東京都千代田区神田佐久間町3-37</p>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-4 w-4" />
                <span>03-3851-0111</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>eigyoinfo@b-p.co.jp</span>
              </div>
            </address>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">ナビゲーション</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-eco-leaf transition-colors">サービス内容</a></li>
              <li><a href="#process" className="hover:text-eco-leaf transition-colors">会社概要</a></li>
              <li><a href="#testimonials" className="hover:text-eco-leaf transition-colors">お客様の声</a></li>
              <li><a href="#" className="hover:text-eco-leaf transition-colors">よくあるご質問</a></li>
              <li><a href="#" className="hover:text-eco-leaf transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">SNSリンク</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-eco-leaf transition-colors">
                <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                  F
                </div>
              </a>
              <a href="#" className="hover:text-eco-leaf transition-colors">
                <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                  X
                </div>
              </a>
              <a href="#" className="hover:text-eco-leaf transition-colors">
                <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                  In
                </div>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} 文唱堂印刷株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
