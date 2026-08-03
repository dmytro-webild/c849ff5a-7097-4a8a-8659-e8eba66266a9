import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import HeroOverlayMarquee from '@/components/sections/hero/HeroOverlayMarquee';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { CheckCircle } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlayMarquee
      tag="Expert Landscaping Services"
      title="Precision Lawn Care for Macon Landscapes"
      description="Transforming your outdoor spaces into vibrant, professional landscapes with unmatched attention to detail."
      primaryButton={{
        text: "Book Consultation",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Our Services",
        href: "#services",
      }}
      items={[
        {
          text: "Lawn Maintenance",
          icon: CheckCircle,
        },
        {
          text: "Hardscaping",
          icon: CheckCircle,
        },
        {
          text: "Tree Care",
          icon: CheckCircle,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-architecture-blends-with-nature-s-vibrant-colors-generated-by-ai_188544-30782.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Story"
      quote="Southern Blades consistently delivers excellence. My lawn has never looked this healthy or professional."
      author="Mark R."
      role="Homeowner in Macon"
      imageSrc="http://img.b2bpic.net/free-photo/cactus-plant-pot-with-gardening-tools-wooden-desk_23-2148181136.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
      tag="Our Expertise"
      title="Comprehensive Landscape Solutions"
      description="Professional services tailored to your property needs."
      items={[
        {
          title: "Precision Mowing",
          description: "Regular maintenance for pristine lawn health.",
          tags: [
            "Weekly",
            "Professional",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-friends-playing-petanque-together_23-2149530380.jpg",
        },
        {
          title: "Hardscaping Design",
          description: "Custom pavers and retaining wall construction.",
          tags: [
            "Construction",
            "Durable",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/photo-ground-texture-pattern_58702-11771.jpg",
        },
        {
          title: "Seasonal Cleanup",
          description: "Leaf removal and mulch installation for all seasons.",
          tags: [
            "Cleanup",
            "Seasonal",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cleaning-leaves-profile-young-cheerful-man-jeans-vest-with-armful-leaves-hands-leaning-basket-standing-lawn-garden-autumn-day_259150-58548.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Testimonials"
      title="Trusted by Local Homeowners"
      description="See why we're rated 4.7 out of 5 stars."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Client",
          quote: "Reliable and thorough. The team at Southern Blades is unmatched.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-man-home-office_329181-20664.jpg",
        },
        {
          name: "David K.",
          role: "Client",
          quote: "Excellent work on my hardscaping project.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-shirt-smiling-posing-kitchen_23-2148414940.jpg",
        },
        {
          name: "Linda M.",
          role: "Client",
          quote: "Beautiful results every single time they visit.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-beautiful-blond-hair-gentle-smile-dressed-green-robe-with-belt-is-working-greenhouse_197531-12312.jpg",
        },
        {
          name: "James P.",
          role: "Client",
          quote: "Professional, punctual, and very meticulous.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-green-suit-using-phone-outside-street_1303-29546.jpg",
        },
        {
          name: "Robert B.",
          role: "Client",
          quote: "Best landscape service I've hired in Macon.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-potted-plants_23-2149412616.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Impact"
      title="By The Numbers"
      description="Proven experience and customer satisfaction metrics."
      metrics={[
        {
          value: "45+",
          title: "Reviews",
          features: [
            "Consistently High Rating",
            "Trusted Local Partner",
          ],
        },
        {
          value: "4.7",
          title: "Rating",
          features: [
            "Exceptional Customer Feedback",
            "Quality Guaranteed",
          ],
        },
        {
          value: "100%",
          title: "Satisfaction",
          features: [
            "Professional Approach",
            "Local Expertise",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Questions"
      title="Frequently Asked Questions"
      description="Everything you need to know about our services."
      items={[
        {
          question: "What areas do you serve?",
          answer: "We serve Macon, GA and surrounding areas.",
        },
        {
          question: "Are you insured?",
          answer: "Yes, we are fully licensed and insured for your peace of mind.",
        },
        {
          question: "How do I request a quote?",
          answer: "Contact us at (478) 954-7989 to discuss your needs.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-gardener-shirt-mowing-lawn-with-modern-lawn-mower-summer-season-side-view-brunet_7502-10485.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Associations"
      title="Serving Our Community"
      description="Proud to contribute to beautiful neighborhoods."
      names={[
        "Macon Neighborhoods",
        "Local Business Association",
        "Georgia Landscapes",
        "Professional Mowers Guild",
        "Green Care Professionals",
        "Landscape Excellence Union",
        "Community Pride Initiative",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Call us at (478) 954-7989 to revitalize your property today."
      primaryButton={{
        text: "Call Now",
        href: "tel:4789547989",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:info@southernblades.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
