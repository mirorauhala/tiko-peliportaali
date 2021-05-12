<template>
  <tiko-small-header>Webinaari</tiko-small-header>
  <article class="max-w-4xl mx-auto mb-12 px-3">

    <h2 class="font-bold text-2xl text-tuni mb-4 text-center">Voittajat</h2>

    <div class="mb-3">
      <h3 class="font-bold text-tuni">Pelitalojen valinta</h3>
      <p>Kunniamaininnat</p>
      <ul class="list-disc list-inside mb-3">
        <li>Labyrinth of life</li>
        <li>Turn or Fall</li>
        <li>When the March Ends</li>
      </ul>

      <p>Voittaja</p>
      <p><b>Mental Run</b></p>
    </div>

    <div class="mb-3">
      <h3 class="font-bold text-tuni">Asiakkaan valinta</h3>
      <p>Kunniamaininnat</p>
      <ul class="list-disc list-inside mb-3">
        <li>Labyrinth of life</li>
        <li>Tunteiden veto</li>
        <li>Nightmarescape</li>
      </ul>

      <p>Voittaja</p>
      <p><b>Feelin' Ballz</b></p>
    </div>

    <div class="mb-3">
      <h3 class="font-bold text-tuni">Yleisöäänestyksen voittaja</h3>
      <p><b>Mental Survival</b></p>
      <ul class="list-disc list-inside">
        <li>Santeri Puttonen</li>
        <li>Joona Rämö</li>
        <li>Joel Eklund</li>
        <li>Edgar Sarelainen</li>
      </ul>
    </div>


    <h2 class="font-bold text-2xl text-tuni mb-4 text-center">Ohjelma</h2>
    <div class="overflow-auto">
      <table class="table-auto">
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">12.00</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Alkupuheenvuorot: Tietojenkäsittelyn tutkinto-ohjelma ja ELOS-hanke.</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Toni Männistö (TAMK) ja Mari Vikman (TAMK)</td>
        </tr>
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">12.20</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Pelillisyys mielenterveyden edistämisessä</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Katja Kokkinen (JAMK)</td>
        </tr>
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">12.40</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Puheenvuoro peliammattilaiselta / ICT-ammattilaiselta tuleville peliammattilaisille</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Webinaarivieraat pelitaloista</td>
        </tr>
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">12.50</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Millaista on ollut olla mobiilipeliprojektien asiakkaana?</td>
          <td class="p-3 border border-tuni text-tuni font-medium">ELOS-asiakastiimi</td>
        </tr>
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">13.00</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Opiskelijapuheenvuoro. Opiskelijan näkökulma peliprojektista.</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Robin Karlsson (TAMK)</td>
        </tr>
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">13.10</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Kysymyksiä, vastauksia, ja keskustelua</td>
          <td class="p-3 border border-tuni text-tuni font-medium"></td>
        </tr>
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">13.20</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Tauko</td>
          <td class="p-3 border border-tuni text-tuni font-medium"></td>
        </tr>
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">13.30</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Palkintojenjako - palkitaan parhaat pelit</td>
          <td class="p-3 border border-tuni text-tuni font-medium"></td>
        </tr>
        <tr>
          <td class="p-3 border border-tuni text-tuni font-medium">14.00</td>
          <td class="p-3 border border-tuni text-tuni font-medium">Webinaari päättyy</td>
          <td class="p-3 border border-tuni text-tuni font-medium"></td>
        </tr>
      </table>
    </div>


  </article>
</template>

<script>
import TikoSmallHeader from "./TikoSmallHeader.vue";
export default {
  name: 'tiko-webinar',
  components: {TikoSmallHeader},
  props: ['language'],
}
</script>
