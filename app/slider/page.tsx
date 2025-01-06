

import { LoadingSpinner } from "@/clb-js/ui/LoadingSpinner";
import MidiaCard from "@/clb-js/ui/MidiaSlider";
import img0 from "@/public/pix/i0 (1).jpg";
import img1 from "@/public/pix/i0 (2).jpg";
import img2 from "@/public/pix/i0 (3).jpg";


const 
   imgs = {
      a: "https://5252.s3.de01.sonic.r-cdn.com/pack11/00-bsladb-GGUug44561d-a1s5d656d1-1v56156hgjkhg1k.jpg",
      b: "https://5252.s3.de01.sonic.r-cdn.com/pack11/01-d1f561dsg1h-k156io1k-er1e6rt1h5-ear151h1thgf.jpg",
      c: "https://5252.s3.de01.sonic.r-cdn.com/pack11/02-dg5f45h45f-y8u789eg51561io-87878989123487dg.jpg",
   }
;

export default function SliderPage() {
   return( <>
      <div className="flex flex-col items-center justify-center w-[50dvw] h-[50dwv] m-auto">
         {/* <MidiaCard userName="NadiaFans" images={[ img0.src, img1.src, img2.src, ]}/> */}
         <MidiaCard userName="NadiaFans" images={ Object.values( imgs ).map( r => r ) }/>
      </div>
      <LoadingSpinner />
   </> );
}