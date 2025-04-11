"use client"

import { useEffect, useRef } from "react"
import "./WaterBenefits.css"

const benefits = [
  {
    icon: "🌱",
    title: "Planting Stage",
    description: "Our seed treatment technology ensures optimal germination rates (90–100%) and stronger initial growth, reducing seed costs by 30–50%.",
  },
  {
    icon: "💧",
    title: "Irrigation",
    description: "Water treatment enables use of brackish water (up to 8000ppm) while preventing salt buildup in irrigation systems.",
  },
  {
    icon: "📈",
    title: "Growth Period",
    description: "Enhances nutrient uptake (P, K, N, Fe) leading to 15–50% increased yields and stronger disease resistance.",
  },
  {
    icon: "🌿",
    title: "Soil Health",
    description: "Improves soil aeration and structure over time, reducing fertilizer requirements by up to 50% while maintaining productivity.",
  },
]

const WaterBenefits = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")

            setTimeout(() => {
              const heading = entry.target.querySelector(".section-title")
              const description = entry.target.querySelector(".section-description")
              const howItWorks = entry.target.querySelector(".how-it-works")

              if (heading) heading.classList.add("animate")
              if (description) description.classList.add("animate")
              if (howItWorks) howItWorks.classList.add("animate")
            }, 100)

            const cards = Array.from(entry.target.querySelectorAll(".card"))
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate")
              }, 400 + 150 * index)
            })

            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
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
      <div className="how-it-works">
        <div className="how-it-works-content">
          <div className="visual-explanation">
            <div className="water-drop-animation">
              <div className="drop"></div>
              <div className="ripple"></div>
              <div className="ripple delay-1"></div>
              <div className="ripple delay-2"></div>
            </div>
          </div>
          <div className="text-content">
            <h3>The Science Behind Our Solution</h3>
            <p>
              Our magnetic water treatment devices use precisely calibrated magnetic fields to alter water's molecular structure. 
              This process breaks large water clusters into smaller, more bioavailable units that penetrate soil more effectively 
              and enhance nutrient absorption. For seeds, the treatment activates enzymes and stimulates metabolic processes, 
              resulting in faster germination and stronger initial growth - all without chemicals or electricity.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">30-50%</div>
                <div className="stat-label">Water Savings</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">90-100%</div>
                <div className="stat-label">Germination Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">8000ppm</div>
                <div className="stat-label">Saltwater Tolerance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="water-background"></div>

      <div className="section-header">
        <h2 className="section-title">
          How our <span>Water Treatment</span> Transforms Agriculture
        </h2>
        <p className="section-description">
          Revolutionary technology that supports every stage of modern agriculture – from planting to harvest.
        </p>
      </div>

      <div className="benefit-cards-container">
        <div className="benefit-cards">
          {benefits.map((item, index) => (
            <div key={index} className="card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-circle">
                    <span className="icon">{item.icon}</span>
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <div className="card-back">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WaterBenefits
