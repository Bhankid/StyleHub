"use client";
import { Scissors, Palette, Crown, Clock, DollarSign, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export function ServicesList() {
  const serviceCategories = [
    {
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Hair Styling",
      description: "Expert cuts and styling for all hair types",
      services: [
        { name: "Women's Cut", price: "₵45", duration: "60 min" },
        { name: "Men's Cut", price: "₵35", duration: "45 min" },
        { name: "Children's Cut", price: "₵25", duration: "30 min" },
        { name: "Blow Dry", price: "₵30", duration: "45 min" },
        { name: "Special Occasion", price: "₵75", duration: "90 min" }
      ]
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Color Services",
      description: "Premium color treatments for vibrant results",
      services: [
        { name: "Full Color", price: "₵120", duration: "120 min" },
        { name: "Highlights", price: "₵150", duration: "150 min" },
        { name: "Balayage", price: "₵200", duration: "180 min" },
        { name: "Color Correction", price: "₵180", duration: "180 min" },
        { name: "Toner", price: "₵50", duration: "45 min" }
      ]
    },
    {
      icon: <Crown className="h-8 w-8 text-primary" />,
      title: "Treatments",
      description: "Luxury treatments for healthy, beautiful hair",
      services: [
        { name: "Deep Conditioning", price: "₵45", duration: "45 min" },
        { name: "Keratin", price: "₵250", duration: "180 min" },
        { name: "Scalp Treatment", price: "₵65", duration: "60 min" },
        { name: "Hair Mask", price: "₵55", duration: "45 min" },
        { name: "Olaplex", price: "₵85", duration: "60 min" }
      ]
    }
  ]

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive beauty services tailored to your needs, delivered by our expert stylists
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div 
              key={category.title} 
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {category.services.map((service) => (
                  <li 
                    key={service.name} 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{service.price}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button className="w-full mt-6" asChild>
            <Link href="/appointments">Book Appointment</Link>
            </Button>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesList
