<script setup>
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section
    id="about"
    class="section-spacing"
  >
    <div
      class="section-container grid lg:grid-cols-2 gap-20 items-center"
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
          alt="About"
          class="rounded-[2rem] h-[650px] object-cover w-full"
        />
      </div>

      <div>
        <SectionTitle
          label="About"
          title="Creating visual stories with emotion and elegance."
          description="We specialize in capturing authentic moments through cinematic and editorial-inspired photography."
        />

        <div class="space-y-8">
          <div class="glass-card rounded-3xl p-6">
            <h3 class="text-xl font-semibold mb-3">
              Artistic Direction
            </h3>

            <p class="text-zinc-400 leading-relaxed">
              Every session is designed with storytelling,
              composition and emotional depth in mind.
            </p>
          </div>

          <div class="glass-card rounded-3xl p-6">
            <h3 class="text-xl font-semibold mb-3">
              Premium Experience
            </h3>

            <p class="text-zinc-400 leading-relaxed">
              From planning to final delivery, every detail is
              curated to provide a luxury experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>