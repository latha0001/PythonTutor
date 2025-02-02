"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Settings() {
  const [apiKey, setApiKey] = useState("")

  useEffect(() => {
    const storedApiKey = localStorage.getItem("openai_api_key")
    if (storedApiKey) {
      setApiKey(storedApiKey)
    }
  }, [])

  const handleSaveApiKey = () => {
    localStorage.setItem("openai_api_key", apiKey)
    alert("API key saved successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="max-w-md">
        <Label htmlFor="api-key">OpenAI API Key</Label>
        <Input
          id="api-key"
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your OpenAI API key"
          className="mb-4"
        />
        <Button onClick={handleSaveApiKey}>Save API Key</Button>
      </div>
    </div>
  )
}

