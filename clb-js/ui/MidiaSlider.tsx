

'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

// In a real application, replace these with actual image URLs
// const images = [
//   '/placeholder.svg?height=400&width=600',
//   '/placeholder.svg?height=400&width=600&text=Image+2',
//   '/placeholder.svg?height=400&width=600&text=Image+3',
// ]

export type MidiaSlider_props = {
   userName: string | React.ReactNode;
   images: string[];
};
// export default function MidiaCard({ userName }: { userName: string }) {
export default function MidiaSLider( { ...props }: MidiaSlider_props ) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const goToPreviousImage = () => {
    setIsLoading(true)
    setCurrentImageIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : props.images.length - 1
    )
  }

  const goToNextImage = () => {
    setIsLoading(true)
    setCurrentImageIndex((prevIndex) => 
      prevIndex < props.images.length - 1 ? prevIndex + 1 : 0
    )
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <CardHeader className="h-[81px] flex items-center justify-center bg-primary text-primary-foreground">
        <h2 className="text-2xl font-bold">{ props.userName }</h2>
      </CardHeader>
      <CardContent className="p-0 relative">
        <div className="relative aspect-[3/2]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          )}
          <img
            src={ props.images[currentImageIndex] }
            alt={`Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2"
          onClick={goToPreviousImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={goToNextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

