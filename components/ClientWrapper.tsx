"use client";
import React from "react";
import ExitIntentPopup from "./ExitIntentPopup";

export default function ClientWrapper() {
  return (
    <ExitIntentPopup
      enabled={true}
      backgroundImageUrl="/images/mijn-achtergrond.jpg"
    />
  );
}
