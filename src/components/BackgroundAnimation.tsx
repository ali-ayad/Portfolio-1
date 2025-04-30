"use client"

import { useEffect, useRef } from "react"

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make canvas taller to cover scrolling content
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    interface Star {
      x: number
      y: number
      size: number
      color: string
      twinkleSpeed: number
      twinklePhase: number
      sparkleTime: number
      speed: number // Scrolling speed
    }

    // Create shooting stars
    interface ShootingStar {
      x: number
      y: number
      length: number
      angle: number
      speed: number
      opacity: number
      active: boolean
      width: number
      trail: { x: number; y: number; opacity: number }[]
    }

    const stars: Star[] = []
    const shootingStars: ShootingStar[] = []

    // Create color palette for stars - bright, cartoon-like colors with green tint
    const starColors = [
      "#ffffff", // White
      "#e0ffee", // Pale green
      "#c0ffdd", // Light green
      "#aaffcc", // Mint green
    ]

    // Create stars with cartoon-like appearance
    const createStars = () => {
      // Calculate star count - many small stars
      const starCount = Math.floor((canvas.width * canvas.height) / 1500) // Higher density

      for (let i = 0; i < starCount; i++) {
        // Small, uniform stars
        const size = Math.random() * 0.8 + 0.3 // Very small (0.3-1.1px)

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: Math.random() * 0.08 + 0.04, // Faster twinkling
          twinklePhase: Math.random() * Math.PI * 2,
          sparkleTime: Math.random() < 0.1 ? Date.now() + Math.random() * 10000 : 0, // 10% of stars will sparkle
          speed: Math.random() * 0.15 + 0.05, // Scrolling speed - slow but varied
        })
      }
    }

    // Create a new shooting star
    const createShootingStar = () => {
      // Start position - anywhere along the top half of the screen
      const startX = Math.random() * canvas.width
      const startY = Math.random() * (canvas.height / 3)

      // Angle - diagonal downward trajectory
      const angle = (Math.random() * Math.PI) / 4 + Math.PI / 8 // Between PI/8 and 3PI/8

      // Create the shooting star
      const shootingStar: ShootingStar = {
        x: startX,
        y: startY,
        length: Math.random() * 150 + 100, // Length of the tail
        angle: angle,
        speed: Math.random() * 5 + 8, // Speed of movement
        opacity: 0, // Start invisible and fade in
        active: true,
        width: Math.random() * 2 + 1, // Width of the shooting star
        trail: [], // Store trail positions for a more realistic effect
      }

      shootingStars.push(shootingStar)
    }

    // Initialize stars
    createStars()

    // Animation loop
    const animate = () => {
      // Clear canvas with very dark background
      ctx.fillStyle = "#0a0f0d" // Very dark with slight green tint
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const now = Date.now()

      // Draw and update stars
      stars.forEach((star) => {
        // Update star twinkling
        star.twinklePhase += star.twinkleSpeed
        const twinkle = (Math.sin(star.twinklePhase) + 1) / 2 // 0 to 1

        // Move star downward (scrolling effect)
        star.y += star.speed

        // Reset position if star moves off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Draw simple dot star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.fill()

        // Occasional sparkle effect (cartoon-like)
        if (star.sparkleTime > 0 && now > star.sparkleTime) {
          // Draw sparkle (simple cross)
          const sparkleSize = star.size * 4

          ctx.beginPath()
          // Horizontal line
          ctx.moveTo(star.x - sparkleSize, star.y)
          ctx.lineTo(star.x + sparkleSize, star.y)
          // Vertical line
          ctx.moveTo(star.x, star.y - sparkleSize)
          ctx.lineTo(star.x, star.y + sparkleSize)
          // Diagonal lines
          ctx.moveTo(star.x - sparkleSize * 0.7, star.y - sparkleSize * 0.7)
          ctx.lineTo(star.x + sparkleSize * 0.7, star.y + sparkleSize * 0.7)
          ctx.moveTo(star.x - sparkleSize * 0.7, star.y + sparkleSize * 0.7)
          ctx.lineTo(star.x + sparkleSize * 0.7, star.y - sparkleSize * 0.7)

          ctx.strokeStyle = star.color
          ctx.lineWidth = star.size * 0.5
          ctx.stroke()

          // Reset sparkle time
          star.sparkleTime = now + Math.random() * 15000 + 5000
        }

        // Randomly set some stars to sparkle
        if (star.sparkleTime === 0 && Math.random() < 0.0001) {
          // Very rare
          star.sparkleTime = now + Math.random() * 1000
        }
      })

      // Randomly create new shooting stars
      if (Math.random() < 0.005 && shootingStars.length < 3) {
        // 0.5% chance each frame, max 3 at once
        createShootingStar()
      }

      // Update and draw shooting stars
      shootingStars.forEach((star, index) => {
        // Fade in
        if (star.opacity < 1) {
          star.opacity += 0.05
        }

        // Move shooting star
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        // Add current position to trail
        star.trail.push({
          x: star.x,
          y: star.y,
          opacity: star.opacity,
        })

        // Limit trail length
        if (star.trail.length > 20) {
          star.trail.shift()
        }

        // Draw trail
        if (star.trail.length > 1) {
          // Create gradient for the trail
          const gradient = ctx.createLinearGradient(
            star.trail[star.trail.length - 1].x,
            star.trail[star.trail.length - 1].y,
            star.trail[0].x,
            star.trail[0].y,
          )

          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
          gradient.addColorStop(0.3, `rgba(160, 255, 200, ${star.opacity * 0.6})`)
          gradient.addColorStop(1, `rgba(160, 255, 200, 0)`)

          // Draw the trail
          ctx.beginPath()
          ctx.moveTo(star.trail[0].x, star.trail[0].y)

          for (let i = 1; i < star.trail.length; i++) {
            ctx.lineTo(star.trail[i].x, star.trail[i].y)
          }

          ctx.strokeStyle = gradient
          ctx.lineWidth = star.width
          ctx.lineCap = "round"
          ctx.stroke()

          // Draw glow effect
          ctx.beginPath()
          ctx.moveTo(star.trail[0].x, star.trail[0].y)

          for (let i = 1; i < star.trail.length; i++) {
            ctx.lineTo(star.trail[i].x, star.trail[i].y)
          }

          ctx.strokeStyle = `rgba(160, 255, 200, ${star.opacity * 0.3})`
          ctx.lineWidth = star.width * 3
          ctx.lineCap = "round"
          ctx.stroke()
        }

        // Draw the head of the shooting star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.width * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Remove if off screen or trail is too long
        if (star.x < -100 || star.x > canvas.width + 100 || star.y > canvas.height + 100 || star.y < -100) {
          shootingStars.splice(index, 1)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}
