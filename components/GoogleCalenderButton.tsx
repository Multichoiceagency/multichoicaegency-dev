'use client'
import { useState, useEffect, useRef } from 'react'

const GoogleCalendarButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const lastScrollY = useRef(0)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Voeg globale functie toe
  useEffect(() => {
    window.openGoogleCalendarModal = () => setIsOpen(true)
    return () => {
      delete window.openGoogleCalendarModal
    }
  }, [])

  return (
    <>
      <button
        id="googleCalendarButton"
        onClick={handleOpen}
        className={`fixed bottom-4 left-4 z-40 inline-flex py-2 px-4 items-center justify-center text-sm font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition-opacity duration-500 transform active:scale-95 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        Gratis Adviesgesprek
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-lg p-6 relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2r-BtK2ByjLdjbUzHD56gv5PjOLFiNHnB-Oso70N81dDkz_lVzTcx3r8AaqK1G3248W7QF59lc?gv=true"
              className="w-full h-[600px] rounded-lg"
              frameBorder="0"
              title="Google Calendar Appointment Scheduling"
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default GoogleCalendarButton
