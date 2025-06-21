"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CalendarView {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

const calendarViews: CalendarView[] = [
  {
    id: "month",
    name: "Maandoverzicht",
    description: "Bekijk alle beschikbare tijden per maand",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    id: "week",
    name: "Weekoverzicht",
    description: "Gedetailleerd overzicht per week",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    id: "agenda",
    name: "Agenda lijst",
    description: "Lijst met alle geplande afspraken",
    icon: <Users className="h-5 w-5" />,
  },
]

const appointmentTypes = [
  {
    id: "consultation",
    name: "Gratis Consultatie",
    duration: "30 minuten",
    description: "Vrijblijvend gesprek over uw project",
    color: "bg-blue-500",
  },
  {
    id: "project-meeting",
    name: "Project Bespreking",
    duration: "60 minuten",
    description: "Uitgebreide bespreking van uw project",
    color: "bg-green-500",
  },
  {
    id: "demo",
    name: "Product Demo",
    duration: "45 minuten",
    description: "Demonstratie van onze oplossingen",
    color: "bg-purple-500",
  },
  {
    id: "support",
    name: "Support Sessie",
    duration: "30 minuten",
    description: "Technische ondersteuning en hulp",
    color: "bg-orange-500",
  },
]

export default function CalendarSelector() {
  const [selectedView, setSelectedView] = useState("month")
  const [selectedAppointment, setSelectedAppointment] = useState("consultation")
  const [calendarError, setCalendarError] = useState(false)

  const getCalendarUrl = () => {
    const baseUrl = "https://calendar.google.com/calendar/embed"
    const calendarId = "c_b4e56ac6f27ee66833a1e97b5ff728fab1ad700024c16100ed02358534a77d92%40group.calendar.google.com"
    const timezone = "Europe/Brussels"

    let mode = "MONTH"
    switch (selectedView) {
      case "week":
        mode = "WEEK"
        break
      case "agenda":
        mode = "AGENDA"
        break
      default:
        mode = "MONTH"
    }

    return `${baseUrl}?src=${calendarId}&ctz=${timezone}&mode=${mode}&showTitle=1&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1`
  }

  const handleCalendarError = () => {
    setCalendarError(true)
  }

  return (
    <div className="space-y-8">
      {/* Appointment Type Selector */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Kies het type afspraak</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointmentTypes.map((type) => (
            <motion.div key={type.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Card
                className={`cursor-pointer transition-all duration-200 ${
                  selectedAppointment === type.id ? "ring-2 ring-[#2D4625] shadow-lg" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedAppointment(type.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full ${type.color} mt-2 flex-shrink-0`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{type.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{type.duration}</p>
                      <p className="text-sm text-gray-500">{type.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Calendar View Selector */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Kies kalenderweergave</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {calendarViews.map((view) => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedView === view.id
                  ? "bg-[#2D4625] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {view.icon}
              <span className="font-medium">{view.name}</span>
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-6">{calendarViews.find((v) => v.id === selectedView)?.description}</p>
      </div>

      {/* Calendar Embed */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-[#2D4625] text-white">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Beschikbare tijden - {calendarViews.find((v) => v.id === selectedView)?.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {calendarError ? (
            <div className="h-[600px] flex items-center justify-center bg-gray-50">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Kalender tijdelijk niet beschikbaar</h4>
                  <p className="text-gray-600 mb-4">
                    De kalender kan momenteel niet worden geladen. Neem direct contact met ons op om een afspraak in te
                    plannen.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:0103220410"
                      className="inline-flex items-center space-x-2 bg-[#2D4625] text-white px-4 py-2 rounded-lg hover:bg-[#a6e267] hover:text-[#2D4625] transition-colors"
                    >
                      <span>Bel ons: 010-3220410</span>
                    </a>
                    <br />
                    <a
                      href="mailto:sales@multichoiceagency.nl"
                      className="inline-flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <span>Email: sales@multichoiceagency.nl</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <iframe
                src={getCalendarUrl()}
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                onError={handleCalendarError}
                className="w-full"
                title="Multichoice Agency Calendar"
              />

              {/* Loading overlay */}
              <div
                className="absolute inset-0 bg-white flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300"
                id="calendar-loading"
              >
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2D4625] mx-auto mb-2"></div>
                  <p className="text-gray-600">Kalender laden...</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Snelle acties</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="https://calendly.com/multichoiceagency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Online Afspraak</p>
              <p className="text-sm text-gray-600">Plan direct online</p>
            </div>
          </a>

          <a
            href="tel:0103220410"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Clock className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Direct Bellen</p>
              <p className="text-sm text-gray-600">010-3220410</p>
            </div>
          </a>

          <a
            href="https://meet.google.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <Video className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Video Call</p>
              <p className="text-sm text-gray-600">Online vergadering</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
