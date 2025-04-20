"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Mail, RefreshCw } from "lucide-react"

export default function EmailTestPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const testEmail = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/test-email")
      const data = await response.json()

      if (response.ok && data.success) {
        setResult(data)
      } else {
        setError(data.error || "Failed to send test email")
        setResult(data)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Email Configuration Test</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mail className="mr-2 h-5 w-5" />
            Email Configuration Test
          </CardTitle>
          <CardDescription>Test your email configuration by sending a test email</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <RefreshCw className="h-8 w-8 animate-spin text-gray-400" />
              <span className="ml-3 text-lg">Sending test email...</span>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3" />
                <div>
                  <h3 className="text-red-800 font-medium">Email Configuration Error</h3>
                  <p className="text-red-700 mt-1">{error}</p>

                  {result?.troubleshooting && (
                    <div className="mt-4 bg-white p-4 rounded border border-red-100">
                      <h4 className="font-medium mb-2">Troubleshooting Steps:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {result.troubleshooting.map((tip: string, index: number) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : result ? (
            <div>
              <div className="flex items-center mb-4 bg-green-50 text-green-700 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>{result.message}</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Email Configuration Details:</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Message ID:</span> {result.messageId}
                  </li>
                  <li>
                    <span className="font-medium">Sender Email:</span> {result.emailUser}
                  </li>
                  <li>
                    <span className="font-medium">Notification Email:</span> {result.notificationEmail}
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center p-8">
              <Mail className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">Click the button below to test your email configuration</p>
              <Button onClick={testEmail}>Send Test Email</Button>
            </div>
          )}
        </CardContent>
        {(result || error) && (
          <CardFooter>
            <Button onClick={testEmail} disabled={loading} className="flex items-center">
              {loading && <RefreshCw className="mr-2 h-4 w-4 animate-spin" />}
              Send Another Test Email
            </Button>
          </CardFooter>
        )}
      </Card>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-800 mb-2">Email Configuration Guide</h3>
        <p className="text-blue-700 mb-3">
          To use email notifications, you need to set up the following environment variables:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-blue-700">
          <li>
            <strong>EMAIL_USER</strong>: Your email address (e.g., info@yourdomain.com)
          </li>
          <li>
            <strong>EMAIL_PASSWORD</strong>: Your email password or app password
          </li>
          <li>
            <strong>NOTIFICATION_EMAIL</strong>: Where to send notifications (optional, defaults to EMAIL_USER)
          </li>
        </ul>

        <div className="mt-4 bg-white p-4 rounded border border-blue-100">
          <h4 className="font-medium mb-2">Gmail Configuration:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Go to your Google Account settings at{" "}
              <a
                href="https://myaccount.google.com/security"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                myaccount.google.com/security
              </a>
            </li>
            <li>Enable 2-Step Verification if not already enabled</li>
            <li>
              Go to{" "}
              <a
                href="https://myaccount.google.com/apppasswords"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Passwords
              </a>
            </li>
            <li>Create a new app password for "Mail" and "Other (Custom name)"</li>
            <li>Use this generated password as your EMAIL_PASSWORD</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
