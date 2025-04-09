"use client"

import { useEffect, useRef } from "react"
import "./WaterBenefits.css"

const benefits = [
  {
    icon: "🌱",
    title: "Planting Stage",
    description:
      "Our seed treatment technology ensures optimal germination rates (90–100%) and stronger initial growth, reducing seed costs by 30–50%.",
    linkText: "View Case Study",
  },
  {
    icon: "💧",
    title: "Irrigation",
    description:
      "Water treatment enables use of brackish water (up to 8000ppm) while preventing salt buildup in irrigation systems.",
    linkText: "See Results",
  },
  {
    icon: "📈",
    title: "Growth Period",
    description:
      "Enhances nutrient uptake (P, K, N, Fe) leading to 15–50% increased yields and stronger disease resistance.",
    linkText: "Learn How",
  },
  {
    icon: "🌿",
    title: "Soil Health",
    description:
      "Improves soil aeration and structure over time, reducing fertilizer requirements by up to 50% while maintaining productivity.",
    linkText: "Read More",
  },
]

const WaterBenefits = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class to the section itself
            entry.target.classList.add("in-view")

            // Animate heading and description
            setTimeout(() => {
              const heading = entry.target.querySelector(".section-title")
              const description = entry.target.querySelector(".section-description")

              if (heading) heading.classList.add("animate")
              if (description) description.classList.add("animate")
            }, 100)

            // Add staggered animation to each card
            const cards = Array.from(entry.target.querySelectorAll(".card"))
            cards.forEach((card, index) => {
              setTimeout(
                () => {
                  card.classList.add("animate")
                },
                400 + 150 * index,
              ) // Delay cards until after heading/description
            })

            // Unobserve after animation is triggered
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the section is visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="water-section" ref={sectionRef}>
      <h2 className="section-title">
        How our <span>Water Treatment Devices</span> Helps on the Field
      </h2>
      <p className="section-description">
        Water Treatment Devices supports every stage of modern agriculture – from planting to harvest.
      </p>
      <div className="benefit-cards">
        {benefits.map((item, index) => (
          <div key={index} className="card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#">{item.linkText}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WaterBenefits
