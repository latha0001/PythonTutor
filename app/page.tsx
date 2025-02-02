import Link from "next/link"
import {Button} from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        PythonPal: Your AI Python Tutor!
      </h1>
      <div className="prose max-w-none mb-8">
        <p>
        PythonPal is an engaging and interactive AI-powered tutor designed to help children learn basic Python coding.
          Our user-friendly interface and adaptive learning approach make it fun and easy for kids to start their coding
          journey. With customizable tutor characters and interactive coding challenges, PythonPal creates a
          personalized and exciting learning experience for every child.
        </p>
        <p>
          Our design focuses on simplicity and engagement, with colorful visuals and clear instructions to keep young
          learners motivated. The AI tutor provides real-time feedback and adapts its teaching style to each child's
          pace and interests, ensuring a truly tailored learning experience.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/tutor">Start Learning</Link>
        </Button>
        <Button>
          <Link href="/settings">Settings</Link>
        
        </Button>
      </div>
    </div>
  )
}