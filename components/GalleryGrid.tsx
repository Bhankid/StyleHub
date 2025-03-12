"use client";
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryImages = [
    {
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11",
    alt: "Elegant Hairstyle",
    category: "haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
      alt: "Modern Cut",
      category: "haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486",
      alt: "Color Treatment",
      category: "color"
    },
    {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
      alt: "Styling Session",
      category: "styling"
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
      alt: "Wedding Hair",
      category: "wedding"
    },
    {
      src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      alt: "Luxury Treatment",
      category: "treatments"
    },
    {
      src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0",
      alt: "Hair Extension",
      category: "extensions"
    },
    {
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3",
      alt: "Beard Grooming",
      category: "beard"
    },
    {
      src: "https://images.unsplash.com/photo-1584297091622-af8e5bd80b13",
      alt: "Premium Styling",
      category: "styling"
    }
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'haircuts', label: 'Haircuts' },
    { id: 'color', label: 'Color' },
    { id: 'styling', label: 'Styling' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'treatments', label: 'Treatments' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-muted-foreground mb-8">Showcase of our finest work and creative excellence</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryGrid
