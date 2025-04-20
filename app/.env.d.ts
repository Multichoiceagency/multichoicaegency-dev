declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USER: string
      EMAIL_PASSWORD: string
      NOTIFICATION_EMAIL: string
      NEXT_PUBLIC_SITE_URL: string
    }
  }
}

export {}
