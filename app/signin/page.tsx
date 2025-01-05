
// 'use client';
import { AppBar } from "@/clb-js";
import DrawerCn from "@/clb-js/ui/drawer";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";


export default function SignInPage() {
   return( <>
      <AppBar >
         <Link href={'/'}>Home</Link>
      </AppBar>
      <DrawerCn 
         drawerTrigger={ <>
            {/* <div className={`
               bg-[#27f7] 
               aspect-square 
               w-[56px] 
               rounded-full
               items-center
               text-center
               justify-center
            `}>
               abrir
            </div> */}
            <Avatar />
         </> }
         drawerTitle="Planos"
         drawerDescription="escolha um plano"
         drawerClose="x"
         drawerFooter={ <>
            <div className="bg-[#]" style={{ width:"100%", height: "250px", }}>oi</div>
         </> }
      >
         {
            process.env.SECRET as unknown as number * 2
         }
      </DrawerCn>
   </> );
}