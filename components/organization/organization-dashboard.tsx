"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Calendar,
  Users,
  Settings,
  BarChart3,
  Plus,
  Eye,
  Edit,
  Trash2,
  MapPin,
  Clock,
  DollarSign,
  Home,
  LogOut,
  Building,
} from "lucide-react"

export function OrganizationDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showCreateEvent, setShowCreateEvent] = useState(false)

  // Mock organization user data
  const organization = {
    id: 1,
    name: "Tech Society IIT Delhi",
    email: "tech.society@iitd.ac.in",
    college: "IIT Delhi",
    role: "organization",
    avatar: "/placeholder.svg?key=org1",
    description: "Leading technology community at IIT Delhi",
    verified: true,
    memberSince: "January 2023",
  }

  // Mock organization stats
  const stats = {
    totalEvents: 24,
    activeEvents: 5,
    totalParticipants: 3420,
    upcomingEvents: 3,
    completedEvents: 19,
    revenue: "₹45,000",
  }

  // Mock events data
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description: "Join industry leaders and innovators for a day of cutting-edge tech discussions.",
      date: "March 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "IIT Delhi Main Auditorium",
      category: "Technology",
      participants: 500,
      maxParticipants: 800,
      price: "Free",
      status: "approved",
      registrations: 500,
    },
    {
      id: 2,
      title: "AI Workshop Series",
      description: "Hands-on workshop on artificial intelligence and machine learning.",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "IIT Delhi Lab Complex",
      category: "Workshop",
      participants: 45,
      maxParticipants: 50,
      price: "₹500",
      status: "pending",
      registrations: 45,
    },
    {
      id: 3,
      title: "Hackathon 2024",
      description: "48-hour coding challenge with amazing prizes.",
      date: "February 10, 2024",
      time: "9:00 AM - 9:00 AM (48 hours)",
      location: "IIT Delhi Campus",
      category: "Competition",
      participants: 200,
      maxParticipants: 200,
      price: "Free",
      status: "completed",
      registrations: 200,
    },
  ]

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "events", label: "My Events", icon: Calendar },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "profile", label: "Organization Profile", icon: Building },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const handleCreateEvent = (eventData: any) => {
    // Handle event creation logic
    console.log("Creating event:", eventData)
    setShowCreateEvent(false)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome back, {organization.name}!</h2>
              <p className="text-gray-600 mt-2">Manage your events and track performance</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalEvents}</div>
                  <p className="text-xs text-muted-foreground">{stats.activeEvents} active</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Participants</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalParticipants.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">All time</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.upcomingEvents}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.completedEvents}</div>
                  <p className="text-xs text-muted-foreground">This year</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.revenue}</div>
                  <p className="text-xs text-muted-foreground">This year</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground">From participants</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your events and organization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button onClick={() => setShowCreateEvent(true)} className="h-20 flex-col">
                    <Plus className="w-6 h-6 mb-2" />
                    Create New Event
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <BarChart3 className="w-6 h-6 mb-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Settings className="w-6 h-6 mb-2" />
                    Organization Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Events */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>Your latest event activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.slice(0, 3).map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{event.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{event.date}</span>
                            <Badge
                              variant={
                                event.status === "approved"
                                  ? "default"
                                  : event.status === "pending"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {event.status}
                            </Badge>
                            <span>{event.registrations} registered</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "events":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">My Events</h2>
                <p className="text-gray-600 mt-2">Manage all your organization's events</p>
              </div>
              <Button onClick={() => setShowCreateEvent(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>

            <div className="grid gap-6">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <span>{event.title}</span>
                          <Badge
                            variant={
                              event.status === "approved"
                                ? "default"
                                : event.status === "pending"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {event.status}
                          </Badge>
                        </CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{event.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          <span>
                            {event.registrations}/{event.maxParticipants} registered
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <DollarSign className="w-4 h-4 mr-2" />
                          <span>{event.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="w-4 h-4 mr-1" />
                        Analytics
                      </Button>
                      {event.status !== "completed" && (
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Feature Coming Soon</h3>
            <p className="text-gray-600">This section is under development</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Fixed Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full overflow-y-auto">
        <div className="p-6">
          {/* Organization Profile Section */}
          <div className="text-center mb-8">
            <Avatar className="w-20 h-20 mx-auto mb-4">
              <AvatarImage src={organization.avatar || "/placeholder.svg"} alt={organization.name} />
              <AvatarFallback className="text-lg">{organization.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-gray-900">{organization.name}</h3>
            <p className="text-sm text-gray-500">{organization.college}</p>
            <Badge variant="secondary" className="mt-2">
              Organization
            </Badge>
            {organization.verified && (
              <Badge variant="default" className="mt-1 ml-2">
                Verified
              </Badge>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-purple-50 text-purple-600 border-r-2 border-purple-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
          <Button variant="outline" className="w-full bg-transparent" onClick={() => (window.location.href = "/")}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-8">{renderContent()}</div>
      </div>

      {/* Create Event Dialog */}
      <Dialog open={showCreateEvent} onOpenChange={setShowCreateEvent}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
            <DialogDescription>Fill in the details to create a new event</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" placeholder="Enter event title" />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe your event" rows={3} />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input id="time" placeholder="e.g., 10:00 AM - 6:00 PM" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Event venue" />
              </div>
              <div>
                <Label htmlFor="maxParticipants">Max Participants</Label>
                <Input id="maxParticipants" type="number" placeholder="100" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="Free or ₹500" />
              </div>
              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="AI, Workshop, Tech (comma separated)" />
              </div>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button type="submit" onClick={() => handleCreateEvent({})}>
                Create Event
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowCreateEvent(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
