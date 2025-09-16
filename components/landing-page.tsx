"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award, BookOpen, Zap } from "lucide-react"
import { LoginDialog } from "@/components/auth/login-dialog"
import { RegisterDialog } from "@/components/auth/register-dialog"

export function LandingPage() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [user, setUser] = useState<any>(null) // This will be replaced with proper auth context

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      location: "IIT Delhi",
      participants: 500,
      category: "Technology",
      description: "Join industry leaders and innovators for a day of cutting-edge tech discussions.",
    },
    {
      id: 2,
      title: "Cultural Fest - Rang De",
      date: "March 22, 2024",
      location: "Delhi University",
      participants: 1200,
      category: "Cultural",
      description: "Celebrate diversity through music, dance, and art performances.",
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "April 5, 2024",
      location: "BITS Pilani",
      participants: 300,
      category: "Business",
      description: "Present your startup ideas to top investors and win funding.",
    },
  ]

  const handleDashboardNavigation = () => {
    if (user) {
      switch (user.role) {
        case "admin":
          window.location.href = "/admin"
          break
        case "organization":
          window.location.href = "/organization"
          break
        case "student":
        default:
          window.location.href = "/dashboard"
          break
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CampusEventHub
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">{user.name?.charAt(0) || "U"}</span>
                </div>
                <span className="text-sm font-medium">{user.name}</span>
                <Badge
                  variant={
                    user.role === "admin" ? "destructive" : user.role === "organization" ? "secondary" : "default"
                  }
                >
                  {user.role}
                </Badge>
                <Button variant="outline" size="sm" onClick={() => (window.location.href = "/events")}>
                  Events
                </Button>
                <Button variant="outline" size="sm" onClick={handleDashboardNavigation}>
                  Dashboard
                </Button>
                <Button variant="outline" size="sm" onClick={() => setUser(null)}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" onClick={() => setShowLogin(true)}>
                  Login
                </Button>
                <Button onClick={() => setShowRegister(true)}>Register</Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-balance">Discover Amazing Campus Events</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Connect with your campus community through exciting events, competitions, and cultural activities. Join
            thousands of students already making memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => (window.location.href = "/events")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Explore Events
            </Button>
            <Button size="lg" variant="outline">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose CampusEventHub?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Connect & Network</h4>
              <p className="text-gray-600">
                Meet like-minded students and build lasting connections through shared interests.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Win & Achieve</h4>
              <p className="text-gray-600">
                Participate in competitions and showcase your talents to win exciting prizes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Learn & Grow</h4>
              <p className="text-gray-600">Attend workshops and seminars to enhance your skills and knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{event.category}</Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {event.participants}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => (user ? alert("Registration feature coming soon!") : setShowLogin(true))}
                  >
                    {user ? "Register Now" : "Login to Register"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">CampusEventHub</h4>
              </div>
              <p className="text-gray-400">Connecting students through amazing campus experiences.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <p>Email: support@campuseventhub.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Address: New Delhi, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CampusEventHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Dialogs */}
      <LoginDialog
        open={showLogin}
        onOpenChange={setShowLogin}
        onSuccess={(userData) => {
          setUser(userData)
          setShowLogin(false)
        }}
        onSwitchToRegister={() => {
          setShowLogin(false)
          setShowRegister(true)
        }}
      />
      <RegisterDialog
        open={showRegister}
        onOpenChange={setShowRegister}
        onSuccess={(userData) => {
          setUser(userData)
          setShowRegister(false)
        }}
        onSwitchToLogin={() => {
          setShowRegister(false)
          setShowLogin(true)
        }}
      />
    </div>
  )
}
