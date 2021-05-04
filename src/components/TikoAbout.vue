<template>
  <article
    v-if="language === 'fi'"
    class="max-w-4xl mx-auto mb-12">
    <p class="text-lg mb-5 leading-relaxed">Kevään 2021 toimeksiantona on ollut kehittää mobiilipelejä TAMKin hankkeelle nimeltä <a href="https://www.tuni.fi/fi/tutkimus/elaytyen-osalliseksi" class="text-tuni underline">Eläytyen osalliseksi (ELOS)</a>. Opiskelijat ovat tehneet peliprojektia tammikuusta lähtien. Pelejä ollaan työstetty ELOS-hankkeen kolmen eri sisällöllisen teeman kautta, jotka ovat mielenterveyttä tukeva arki, osallisuus ja tunnetaidot. Tavoitteena on ollut tehdä mobiilipelejä, jotka tukevat nuoria ja heidän kasvattajiaan näiden kolmen teeman kautta:</p>

    <ul class="text-lg mb-5 leading-relaxed list-disc list-inside">
      <li>tutustumaan mielenterveyttä tukeviin arkisiin asioihin ja valintoihin,</li>
      <li>tutustumaan tunteisiin ja opettamaan nuorille tunnetaitoja ja</li>
      <li>houkuttelemaan ja auttamaan tutustumisessa osallisuuden käsitteeseen.</li>
    </ul>

    <p class="text-lg mb-5 leading-relaxed">Pelien kohderyhmänä ovat 15-18 -vuotiaat nuoret yläkoulussa ja toisella asteella sekä opettajat ja ammattikasvattajat yläkoulussa ja toisella asteella.</p>

    <p class="text-lg mb-5 leading-relaxed">Projektissa valmistuneisiin peleihin voit tutustua tämän peliportaalin kautta. Jos pelien lisäksi haluat tutustua myös peliprojektiin ja hankkeeseen, tule paikalle peliprojektin webinaariin keskiviikkona 12.5.2021 klo 12.00 alkaen. Webinaarin ohjelma julkaistaan näillä sivuilla viimeistään pe 7.5. Voit tutustua peleihin ennakkoon ja äänestää mielestäsi parasta peliä. Äänestyslomake julkaistaan pe 7.5. Äänestäjien kesken arvotaan 50 euron lahjakortti.
    </p>
  </article>

  <article
    v-if="language === 'en'"
    class="max-w-4xl mx-auto mb-12">
    <p class="text-lg mb-5 leading-relaxed">lorem ipsum dolor sit amet</p>
  </article>
</template>

<script>
export default {
  name: 'tiko-about',
  props: ['language'],
}
</script>
