"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Search, Filter, Clock, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  // Mock events data - replace with actual API call
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description:
        "Join industry leaders and innovators for a day of cutting-edge tech discussions, workshops, and networking opportunities.",
      date: "March 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "IIT Delhi",
      category: "Technology",
      participants: 500,
      maxParticipants: 800,
      price: "Free",
      organizer: "Tech Society IIT Delhi",
      image: "/tech-conference.png",
      tags: ["AI", "Machine Learning", "Innovation"],
      status: "open",
    },
    {
      id: 2,
      title: "Cultural Fest - Rang De",
      description:
        "Celebrate diversity through music, dance, and art performances. Experience the rich cultural heritage of India.",
      date: "March 22, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Delhi University",
      category: "Cultural",
      participants: 1200,
      maxParticipants: 1500,
      price: "₹200",
      organizer: "Cultural Committee DU",
      image: "/vibrant-cultural-festival.png",
      tags: ["Music", "Dance", "Art"],
      status: "open",
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      description:
        "Present your startup ideas to top investors and win funding. Network with entrepreneurs and industry experts.",
      date: "April 5, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "BITS Pilani",
      category: "Business",
      participants: 300,
      maxParticipants: 400,
      price: "₹500",
      organizer: "Entrepreneurship Cell BITS",
      image: "/startup-pitch.png",
      tags: ["Startup", "Investment", "Entrepreneurship"],
      status: "open",
    },
    {
      id: 4,
      title: "Hackathon 2024",
      description:
        "48-hour coding challenge with amazing prizes. Build innovative solutions and compete with the best developers.",
      date: "April 12, 2024",
      time: "9:00 AM - 9:00 AM (48 hours)",
      location: "IIT Bombay",
      category: "Technology",
      participants: 800,
      maxParticipants: 1000,
      price: "Free",
      organizer: "Coding Club IIT Bombay",
      image: "/hackathon-coding.jpg",
      tags: ["Coding", "Development", "Competition"],
      status: "open",
    },
    {
      id: 5,
      title: "Photography Workshop",
      description:
        "Learn professional photography techniques from award-winning photographers. Hands-on workshop with equipment provided.",
      date: "March 28, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Jamia Millia Islamia",
      category: "Workshop",
      participants: 45,
      maxParticipants: 50,
      price: "₹300",
      organizer: "Photography Society JMI",
      image: "/photography-workshop.png",
      tags: ["Photography", "Art", "Learning"],
      status: "filling-fast",
    },
    {
      id: 6,
      title: "Sports Championship",
      description:
        "Inter-college sports championship featuring cricket, football, basketball, and more. Show your sporting spirit!",
      date: "April 20, 2024",
      time: "8:00 AM - 8:00 PM",
      location: "Jawaharlal Nehru University",
      category: "Sports",
      participants: 2000,
      maxParticipants: 2500,
      price: "₹100",
      organizer: "Sports Committee JNU",
      image: "/sports-championship-celebration.png",
      tags: ["Sports", "Competition", "Team"],
      status: "open",
    },
  ]

  const categories = ["all", "Technology", "Cultural", "Business", "Workshop", "Sports"]
  const locations = [
    "all",
    "IIT Delhi",
    "Delhi University",
    "BITS Pilani",
    "IIT Bombay",
    "Jamia Millia Islamia",
    "Jawaharlal Nehru University",
  ]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesLocation = selectedLocation === "all" || event.location === selectedLocation

    return matchesSearch && matchesCategory && matchesLocation
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800"
      case "filling-fast":
        return "bg-yellow-100 text-yellow-800"
      case "closed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Open"
      case "filling-fast":
        return "Filling Fast"
      case "closed":
        return "Closed"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CampusEventHub
                </h1>
              </div>
            </div>
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover Events</h1>
          <p className="text-xl text-gray-600">Find and register for amazing campus events near you</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events, tags, or organizers..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <MapPin className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredEvents.length} of {events.length} events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{event.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(event.status)}>{getStatusText(event.status)}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2">{event.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {event.participants}/{event.maxParticipants}
                    </span>
                    <span className="font-semibold text-blue-600">{event.price}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Link href={`/events/${event.id}`} className="flex-1">
                    <Button className="w-full" size="sm">
                      View Details
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    Register
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
