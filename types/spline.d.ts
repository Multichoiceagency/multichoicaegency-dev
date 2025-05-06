import type React from "react"
declare namespace JSX {
  interface IntrinsicElements {
    "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string
      "loading-anim-type"?: string
      background?: string
      "auto-resize"?: string
      "render-on-demand"?: string
      "pixel-ratio"?: string
    }
  }
}

// Declare the global Spline viewer element
interface SplineViewerElement extends HTMLElement {
  url: string
  loaded: boolean
}

declare global {
  interface HTMLElementTagNameMap {
    "spline-viewer": SplineViewerElement
  }
}
