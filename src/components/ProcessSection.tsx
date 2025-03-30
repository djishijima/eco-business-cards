
import React from "react";

const ProcessStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center md:items-start">
    <div className="bg-eco-green text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 text-center md:text-left">{description}</p>
  </div>
);

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">
            製作プロセス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            スムーズな注文から安心のお届けまで
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-eco-green z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <ProcessStep
              number="1"
              title="ご注文"
              description="オンラインフォームまたはお電話で簡単に注文。スピーディな対応でストレスフリー！"
            />
            <ProcessStep
              number="2"
              title="デザイン確認"
              description="専任デザイナーがあなたのブランドに合わせたデザインを提案。カスタマイズも自由自在。"
            />
            <ProcessStep
              number="3"
              title="CO2ゼロ印刷"
              description="最新のエコ印刷技術で、CO2を一切排出せずに名刺を製作。品質と環境を両立！"
            />
            <ProcessStep
              number="4"
              title="迅速なお届け"
              description="厳選された梱包で、丁寧かつスピーディにお手元へお届け。購入後のフォローも万全です。"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
