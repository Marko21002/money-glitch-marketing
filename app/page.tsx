import { Button } from "@/components/ui/button";
import Cta from "@/components/ui/cta";

import FeatureCreator from "@/components/ui/feature-creator";
import Footer from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import Image from "next/image";


export default function Home() {
  return (
  <div>
   <Hero></Hero>
    
    <Cta></Cta>
    <Footer></Footer>
  </div>
  );
}
