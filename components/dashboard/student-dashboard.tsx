"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Settings, User, BookOpen, Trophy, Clock, ChevronRight, Home, LogOut } from "lucide-react"

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data - replace with actual user context
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@du.ac.in",
    college: "Delhi University",
    course: "Computer Science",
    year: "3rd Year",
    phone: "+91 98765 43210",
    avatar: "/diverse-student-profiles.png",
    verified: true,
    joinedDate: "September 2022",
  }

  const registeredEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      time: "10:00 AM",
      location: "IIT Delhi",
      status: "upcoming",
      category: "Technology",
      description: "Join industry leaders and innovators for a day of cutting-edge tech discussions.",
      registrationDate: "Feb 20, 2024",
    },
    {
      id: 2,
      title: "Cultural Fest - Rang De",
      date: "March 22, 2024",
      time: "6:00 PM",
      location: "Delhi University",
      status: "upcoming",
      category: "Cultural",
      description: "Celebrate diversity through music, dance, and art performances.",
      registrationDate: "Feb 25, 2024",
    },
    {
      id: 3,
      title: "Hackathon 2024",
      date: "February 10, 2024",
      time: "9:00 AM",
      location: "BITS Pilani",
      status: "completed",
      category: "Technology",
      description: "48-hour coding challenge with amazing prizes.",
      registrationDate: "Jan 15, 2024",
      result: "Winner - 1st Place",
    },
  ]

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "events", label: "My Events", icon: Calendar },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h2>
              <p className="text-gray-600 mt-2">Here's what's happening with your events</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Registered Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{registeredEvents.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {registeredEvents.filter((e) => e.status === "upcoming").length} upcoming
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Events</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {registeredEvents.filter((e) => e.status === "completed").length}
                  </div>
                  <p className="text-xs text-muted-foreground">This semester</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Certificates earned</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events you're registered for</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registeredEvents
                    .filter((event) => event.status === "upcoming")
                    .map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{event.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {event.date} at {event.time}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "profile":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Profile Information</h2>
              <p className="text-gray-600 mt-2">Manage your personal information and preferences</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
                <CardDescription>Your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-lg">{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                    <p className="text-sm text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <p className="mt-1 text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">College</label>
                    <p className="mt-1 text-gray-900">{user.college}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Course</label>
                    <p className="mt-1 text-gray-900">{user.course}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Year</label>
                    <p className="mt-1 text-gray-900">{user.year}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="mt-1 text-gray-900">{user.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Badge variant={user.verified ? "default" : "secondary"}>
                    {user.verified ? "Verified" : "Pending Verification"}
                  </Badge>
                  <span className="text-sm text-gray-500">Member since {user.joinedDate}</span>
                </div>

                <Button>Edit Profile</Button>
              </CardContent>
            </Card>
          </div>
        )

      case "events":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">My Events</h2>
              <p className="text-gray-600 mt-2">All events you've registered for</p>
            </div>

            <div className="space-y-4">
              {registeredEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <span>{event.title}</span>
                          <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>{event.status}</Badge>
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
                          <span>
                            {event.date} at {event.time}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>Registered on {event.registrationDate}</span>
                        </div>
                        {event.result && (
                          <div className="flex items-center text-sm text-green-600">
                            <Trophy className="w-4 h-4 mr-2" />
                            <span>{event.result}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {event.status === "upcoming" && (
                        <Button variant="outline" size="sm">
                          Cancel Registration
                        </Button>
                      )}
                      {event.status === "completed" && (
                        <Button variant="outline" size="sm">
                          Download Certificate
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "achievements":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
              <p className="text-gray-600 mt-2">Your accomplishments and certificates</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span>Hackathon Winner</span>
                  </CardTitle>
                  <CardDescription>1st Place in Hackathon 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Won first place in the 48-hour coding challenge with an innovative solution.
                  </p>
                  <Button variant="outline" size="sm">
                    View Certificate
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span>Event Participation</span>
                  </CardTitle>
                  <CardDescription>Active participant badge</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Participated in 5+ events this semester.</p>
                  <Button variant="outline" size="sm">
                    View Badge
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "settings":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
              <p className="text-gray-600 mt-2">Manage your account preferences</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive event updates via email</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-gray-500">Get SMS reminders for events</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline">Change Password</Button>
                <Button variant="outline">Two-Factor Authentication</Button>
                <Button variant="destructive">Delete Account</Button>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Fixed Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full overflow-y-auto">
        <div className="p-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <Avatar className="w-20 h-20 mx-auto mb-4">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-lg">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.college}</p>
            <p className="text-sm text-gray-500">{user.course}</p>
            {user.verified && (
              <Badge variant="default" className="mt-2">
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
                      ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
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
    </div>
  )
}
