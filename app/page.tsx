

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { AppBar, Text, View } from "@/clb-js";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function LandingPage() {
   return( <>
      <AppBar className="bg-black h-[81px]">
         <section className="flex items-center justify-center h-full">
            <SignedOut>
               <SignInButton />
            </SignedOut>
            <SignedIn>
               <UserButton />
            </SignedIn>
         </section>

         {/* <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
         </Avatar> */}

         <Link href={'/signin'}>Sign in[]</Link>
      </AppBar>
      <View bg="#458" w="100%" h="150px">
         <Text title>oi</Text>
         <Text subTitle>oi</Text>
         <Text description>oi</Text>
         <Text>oi</Text>
      </View>
      <Card>
         <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
         </CardHeader>
         <CardContent>
            <p>Card Content</p>
         </CardContent>
         <CardFooter>
            <p>Card Footer</p>
         </CardFooter>
      </Card>

      <Drawer>
         <DrawerTrigger>Open</DrawerTrigger>
         <DrawerContent>
            <DrawerHeader>
               <DrawerTitle>Are you absolutely sure?</DrawerTitle>
               <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
               <Button className="bg-[#fc3a9b]">Submit</Button>
               <DrawerClose>
               <Button variant="outline">Cancel</Button>
               </DrawerClose>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>

   </> );
}