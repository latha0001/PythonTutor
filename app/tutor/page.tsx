"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCompletion } from "ai/react"
import { tutorCharacters } from "@/lib/tutorConfig"

export default function Tutor() {
  const [apiKey, setApiKey] = useState("")
  const [selectedCharacter, setSelectedCharacter] = useState(tutorCharacters[0])
  const [showChallenge, setShowChallenge] = useState(false)

  const { completion, input, handleInputChange, handleSubmit, setInput } = useCompletion({
    api: "/api/chat",
    body: { apiKey, character: selectedCharacter },
  })

  useEffect(() => {
    const storedApiKey = localStorage.getItem("openai_api_key")
    if (storedApiKey) {
      setApiKey(storedApiKey)
    }
  }, [])

  const handleCharacterChange = (characterId: string) => {
    const character = tutorCharacters.find((c) => c.id === characterId)
    if (character) {
      setSelectedCharacter(character)
    }
  }

  const handleChallengeRequest = () => {
    setInput("Can you give me a simple Python coding challenge suitable for beginners?")
    setShowChallenge(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Chat with Your Python Tutor</h1>
      <div className="mb-4">
        <Select onValueChange={handleCharacterChange} defaultValue={selectedCharacter.id}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a character" />
          </SelectTrigger>
          <SelectContent>
            {tutorCharacters.map((character) => (
              <SelectItem key={character.id} value={character.id}>
                {character.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mb-4">
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Ask your Python question here..."
          className="w-full h-32"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <Button onClick={() => handleSubmit()}>Ask Question</Button>
        <Button variant="outline" onClick={handleChallengeRequest}>
          Get Coding Challenge
        </Button>
      </div>
      {completion && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Tutor's Response:</h2>
          <p className="whitespace-pre-wrap">{completion}</p>
        </div>
      )}
      {showChallenge && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Coding Challenge:</h2>
          <Textarea placeholder="Write your solution here..." className="w-full h-32 mb-2" />
          <Button onClick={() => setShowChallenge(false)}>Submit Challenge</Button>
        </div>
      )}
    </div>
  )
}

