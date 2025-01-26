"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      setError('')
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      router.push('/auth/signin')
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="rounded-lg border px-3 py-2 text-sm"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="rounded-lg border px-3 py-2 text-sm"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="password" className="text-sm font-medium">Password</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          className="rounded-lg border px-3 py-2 text-sm"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
      >
        {isLoading ? "Creating account..." : "Create account"}
      </button>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/auth/signin" className="text-blue-600 hover:underline">
          Sign in
        </a>
      </div>
    </form>
  )
}