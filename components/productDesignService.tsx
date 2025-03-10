import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const ProductDesignService: React.FC = () => {
  return (
    <div className="p-10 bg-gray-50 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-6">We provide Product Design Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 flex flex-col items-center text-center">
          <motion.img 
            src="/mvp-icon.png" 
            alt="MVP" 
            className="w-20 mb-4"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/80")}
          />
          <h3 className="text-xl font-semibold">Designing for MVP</h3>
          <p className="text-gray-600 mt-2">Design a market-ready MVP with scalability, business alignment, and ensure it meets user needs.</p>
        </Card>
        
        <Card className="p-6 flex flex-col items-center text-center">
          <motion.img 
            src="/revamp-icon.png" 
            alt="Revamp" 
            className="w-20 mb-4"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/80")}
          />
          <h3 className="text-xl font-semibold">Total Revamp</h3>
          <p className="text-gray-600 mt-2">Refresh your product with our tailored revamp solution for better visual, usability, and performance.</p>
        </Card>
        
        <Card className="p-6 flex flex-col items-center text-center">
          <motion.img 
            src="/support-icon.png" 
            alt="Support" 
            className="w-20 mb-4"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/80")}
          />
          <h3 className="text-xl font-semibold">Assisting Ongoing Work</h3>
          <p className="text-gray-600 mt-2">Continuous expert support to refine your vision, stay on track, and ensure flawless execution.</p>
        </Card>
      </div>
      
      <div className="flex justify-center mt-8">
        <Link href="/contact" passHref>
          <Button className="px-6 py-2 flex items-center gap-2 text-lg font-medium">
            Let’s Talk <ArrowRight size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDesignService;
