<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'

import { Mail, MapPin, Phone } from 'lucide-vue-next'
</script>

<template>
  <section
    id="contact"
    class="section-spacing"
  >
    <div class="section-container">
      <SectionTitle
        label="Contact"
        title="Let’s create something meaningful together."
        description="Get in touch to discuss your vision, ideas and upcoming projects."
      />

      <div
        class="grid lg:grid-cols-2 gap-10"
      >
        <!-- Info -->
        <div
          class="glass-card rounded-[2rem] p-10 reveal"
        >
          <div class="space-y-10">
            <div class="flex gap-5">
              <div
                class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center"
              >
                <Mail class="w-6 h-6 text-accent" />
              </div>

              <div>
                <p class="text-zinc-500 mb-2">
                  Email
                </p>

                <h3 class="text-xl font-semibold">
                  hello@lunastudio.com
                </h3>
              </div>
            </div>

            <div class="flex gap-5">
              <div
                class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center"
              >
                <Phone class="w-6 h-6 text-accent" />
              </div>

              <div>
                <p class="text-zinc-500 mb-2">
                  Phone
                </p>

                <h3 class="text-xl font-semibold">
                  +1 (555) 842-1933
                </h3>
              </div>
            </div>

            <div class="flex gap-5">
              <div
                class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center"
              >
                <MapPin class="w-6 h-6 text-accent" />
              </div>

              <div>
                <p class="text-zinc-500 mb-2">
                  Location
                </p>

                <h3 class="text-xl font-semibold">
                  New York, USA
                </h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <form
          class="glass-card rounded-[2rem] p-10 space-y-6 reveal reveal-delay-1"
        >
          <div>
            <label
              class="block text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3"
            >
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              class="contact-input"
            />
          </div>

          <div>
            <label
              class="block text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3"
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Your email"
              class="contact-input"
            />
          </div>

          <div>
            <label
              class="block text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3"
            >
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              class="contact-input resize-none"
            ></textarea>
          </div>

          <button
            class="bg-accent text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>