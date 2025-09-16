"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  Star,
  CheckCircle,
  AlertCircle,
  Zap,
} from "lucide-react"
import Link from "next/link"

interface EventDetailsPageProps {
  eventId: string
}

export function EventDetailsPage({ eventId }: EventDetailsPageProps) {
  const [isRegistered, setIsRegistered] = useState(false)
  const [showRegistrationDialog, setShowRegistrationDialog] = useState(false)

  // Mock event data - replace with actual API call
  const event = {
    id: Number.parseInt(eventId),
    title: "Tech Innovation Summit 2024",
    description:
      "Join industry leaders and innovators for a day of cutting-edge tech discussions, workshops, and networking opportunities. This summit brings together the brightest minds in technology to share insights, showcase innovations, and discuss the future of tech.",
    longDescription: `
      The Tech Innovation Summit 2024 is a premier event that brings together technology enthusiasts, industry leaders, and innovators from across the country. This full-day summit features keynote speeches, panel discussions, hands-on workshops, and networking sessions.

      What to expect:
      • Keynote speeches from industry leaders
      • Panel discussions on emerging technologies
      • Hands-on workshops on AI, ML, and blockchain
      • Networking opportunities with professionals
      • Startup showcase and pitch sessions
      • Career guidance and mentorship sessions

      This event is perfect for students, professionals, and anyone interested in staying ahead of the technology curve.
    `,
    date: "March 15, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "IIT Delhi",
    venue: "Main Auditorium, IIT Delhi Campus",
    category: "Technology",
    participants: 500,
    maxParticipants: 800,
    price: "Free",
    organizer: {
      name: "Tech Society IIT Delhi",
      avatar: "/tech-society-logo.jpg",
      description: "Leading technology community at IIT Delhi",
      contact: "tech.society@iitd.ac.in",
    },
    image: "/tech-conference-hall.png",
    tags: ["AI", "Machine Learning", "Innovation", "Networking"],
    status: "open",
    agenda: [
      { time: "10:00 AM", title: "Registration & Welcome Coffee", speaker: "" },
      { time: "10:30 AM", title: "Opening Keynote: Future of AI", speaker: "Dr. Rajesh Kumar, Google AI" },
      { time: "11:30 AM", title: "Panel: Emerging Technologies", speaker: "Industry Leaders" },
      { time: "12:30 PM", title: "Lunch Break", speaker: "" },
      { time: "1:30 PM", title: "Workshop: Machine Learning Basics", speaker: "Prof. Anita Sharma" },
      { time: "3:00 PM", title: "Startup Pitch Session", speaker: "Young Entrepreneurs" },
      { time: "4:30 PM", title: "Networking Session", speaker: "" },
      { time: "5:30 PM", title: "Closing Remarks", speaker: "Event Organizers" },
    ],
    speakers: [
      {
        name: "Dr. Rajesh Kumar",
        title: "Senior AI Researcher, Google",
        avatar: "/indian-tech-professional.jpg",
        bio: "Leading AI researcher with 15+ years of experience",
      },
      {
        name: "Prof. Anita Sharma",
        title: "Professor, IIT Delhi",
        avatar: "/indian-professor-woman.jpg",
        bio: "Expert in machine learning and data science",
      },
      {
        name: "Vikram Singh",
        title: "CTO, TechStart Inc.",
        avatar: "/indian-startup-founder.jpg",
        bio: "Serial entrepreneur and technology innovator",
      },
    ],
    requirements: [
      "Laptop (recommended for workshops)",
      "Student ID for verification",
      "Basic programming knowledge (for technical sessions)",
    ],
    benefits: [
      "Certificate of participation",
      "Networking opportunities",
      "Free lunch and refreshments",
      "Access to workshop materials",
      "Career guidance sessions",
    ],
  }

  const handleRegistration = () => {
    setIsRegistered(true)
    setShowRegistrationDialog(false)
    // Here you would typically make an API call to register the user
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/events">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Events
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CampusEventHub
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-8">
          <div className="aspect-video bg-gray-100 relative">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex space-x-2">
              <Badge variant="secondary">{event.category}</Badge>
              <Badge className={getStatusColor(event.status)}>
                {event.status === "open" ? "Registration Open" : event.status}
              </Badge>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{event.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-3" />
                    <span>
                      {event.participants}/{event.maxParticipants} registered
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="lg:w-80">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{event.price}</CardTitle>
                    <CardDescription className="text-center">Registration fee</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isRegistered ? (
                      <div className="text-center">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <p className="text-green-600 font-semibold mb-4">Successfully Registered!</p>
                        <Button variant="outline" className="w-full bg-transparent">
                          View Registration Details
                        </Button>
                      </div>
                    ) : (
                      <Dialog open={showRegistrationDialog} onOpenChange={setShowRegistrationDialog}>
                        <DialogTrigger asChild>
                          <Button className="w-full mb-4" size="lg">
                            Register Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Confirm Registration</DialogTitle>
                            <DialogDescription>You are about to register for {event.title}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-2">Event Details:</h4>
                              <p className="text-sm text-gray-600">
                                {event.date} at {event.time}
                              </p>
                              <p className="text-sm text-gray-600">{event.venue}</p>
                              <p className="text-sm font-semibold text-blue-600 mt-2">Fee: {event.price}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button onClick={handleRegistration} className="flex-1">
                                Confirm Registration
                              </Button>
                              <Button variant="outline" onClick={() => setShowRegistrationDialog(false)}>
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}

                    <div className="text-center text-sm text-gray-500">
                      <div className="flex items-center justify-center mb-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {event.maxParticipants - event.participants} spots remaining
                      </div>
                      <p>Registration closes 24 hours before event</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Organizer Info */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Organized by</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={event.organizer.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{event.organizer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{event.organizer.name}</p>
                        <p className="text-sm text-gray-600">{event.organizer.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                      Contact Organizer
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {event.longDescription.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card>
              <CardHeader>
                <CardTitle>Event Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 pb-4 border-b last:border-b-0">
                      <div className="w-20 text-sm font-medium text-blue-600 flex-shrink-0">{item.time}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        {item.speaker && <p className="text-sm text-gray-600">{item.speaker}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Speakers */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={speaker.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{speaker.name}</h4>
                        <p className="text-sm text-blue-600 mb-2">{speaker.title}</p>
                        <p className="text-sm text-gray-600">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>What You'll Get</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
