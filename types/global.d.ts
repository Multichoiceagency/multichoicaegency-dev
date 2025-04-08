// Add TypeScript declarations for Tawk_API
interface Window {
  Tawk_API?: {
    maximize?: () => void
    minimize?: () => void
    toggle?: () => void
    popup?: () => void
    endChat?: () => void
    onLoad?: () => void
    onBeforeLoad?: () => void
    onStatusChange?: (status: string) => void
    onChatMaximized?: () => void
    onChatMinimized?: () => void
    onChatHidden?: () => void
    onChatStarted?: () => void
    onChatEnded?: () => void
    onPrechatSubmit?: (data: unknown) => void
    onOfflineSubmit?: (data: unknown) => void
    addEvent?: (event: string, metadata: Record<string, string | number | boolean>) => void
    addTags?: (tags: string[]) => void
    removeTags?: (tags: string[]) => void
    customStyle?: {
      zIndex?: number
      visibility?: {
        desktop?: {
          position?: string
          xOffset?: number
          yOffset?: number
        }
        mobile?: {
          position?: string
          xOffset?: number
          yOffset?: number
        }
      }
      popup?: {
        width?: number
        height?: number
      }
      widget?: {
        width?: string
        height?: string
      }
      bubble?: {
        width?: string
        height?: string
      }
    }
  }
  Tawk_LoadStart?: Date
}
