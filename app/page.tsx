"use client";
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Sparkles, Star } from 'lucide-react'
import { useState, useEffect } from 'react'


const heroImages = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
]

export default function Home() {
 const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Salon Interior ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 max-w-3xl px-4">
            <h1 className="text-5xl font-bold">Transform Your Style</h1>
            <p className="text-xl">Experience the perfect blend of traditional expertise and modern trends at StyleHub</p>
            <Button size="lg" asChild>
              <Link href="/appointments">Book Your Appointment</Link>
            </Button>
          </div>
        </div>
        
        {/* Optional: Add navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <Calendar className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Easy Booking</h3>
              <p className="text-muted-foreground">Book your appointments online 24/7 with our easy-to-use system</p>
            </div>
            <div className="text-center space-y-4">
              <Star className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Expert Stylists</h3>
              <p className="text-muted-foreground">Our team of experienced professionals is here to make you look your best</p>
            </div>
            <div className="text-center space-y-4">
              <Sparkles className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Premium Services</h3>
              <p className="text-muted-foreground">From classic cuts to modern styles, we offer a full range of premium services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${service.price}</span>
                    <Button variant="outline" asChild>
                      <Link href="/appointments">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    name: "Haircut & Styling",
    description: "Professional haircut and styling tailored to your preferences",
    price: "45",
    image: "https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Color Treatment",
    description: "Full color service using premium products for vibrant results",
    price: "85",
    image: "https://images.unsplash.com/photo-1560869713-da86a9ec0686?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Beard Grooming",
    description: "Expert beard trimming and shaping for the perfect look",
    price: "35",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
]