
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Star, Users } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <Card className="eco-card">
    <CardHeader>
      <div className="flex items-center space-x-2">
        <div className="bg-eco-green p-2 rounded-full">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700">{description}</p>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">
            特徴・メリット
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            環境への配慮と高品質を両立した、次世代のビジネス名刺
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-eco-green border-b-2 border-eco-green pb-2">
              CO2ゼロ印刷技術で実現する環境貢献
            </h3>
            <FeatureCard 
              icon={Check}
              title="完全ゼロ排出"
              description="最新のエコ印刷工程でCO2排出ゼロを実現。企業の脱炭素宣言をサポート。"
            />
            <FeatureCard 
              icon={Shield}
              title="環境認証取得済み"
              description="グリーンプリンティング認定済み。お客様にも安心してお使いいただける品質を保証。"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-eco-green border-b-2 border-eco-green pb-2">
              高品質な仕上がりで印象アップ
            </h3>
            <FeatureCard 
              icon={Star}
              title="鮮やかな発色と耐久性"
              description="先進の印刷技術で、ビジネスシーンにふさわしい高級感を実現。"
            />
            <FeatureCard 
              icon={Users}
              title="洗練されたデザイン"
              description="プロのデザイナーによるカスタマイズが可能。あなたのブランドイメージを引き立てる名刺に。"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-eco-green border-b-2 border-eco-green pb-2">
              持続可能なビジネスの武器
            </h3>
            <FeatureCard 
              icon={Shield}
              title="エコな取り組みで信頼感向上"
              description="SDGs時代にふさわしい、環境意識の高さをアピールできる名刺。"
            />
            <FeatureCard 
              icon={Star}
              title="差別化の強いPRツール"
              description="取引先や顧客へのアピール効果抜群。環境配慮を前面に出すことで、企業イメージを強化。"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
