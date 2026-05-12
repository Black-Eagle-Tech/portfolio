<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import CTASection from '@/components/sections/CTASection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import CustomCursor from '@/components/ui/CustomCursor.vue'
import LoadingScreen from '@/components/ui/LoadingScreen.vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

useSmoothScroll()

import SpotlightEffect from '@/components/ui/SpotlightEffect.vue'
import StatsSection from '@/components/sections/StatsSection.vue'

</script>

<template>
  <main>
    <SpotlightEffect />

    <LoadingScreen />

    <CustomCursor />

    <Navbar />

    <HeroSection />
    <AboutSection />
    <StatsSection />
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <PricingSection />
    <CTASection />
    <ContactSection />

    <Footer />
  </main>
</template>
