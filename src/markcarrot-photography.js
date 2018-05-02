
/*
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
//  import "@polymer/paper-card/paper-card.js";

class MarkcarrotPhotography extends PolymerElement {
  
  static get is() { return 'markcarrot-photography'; }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'markcarrot-photography'
      }
    };
  }

  static get template() {
    return html`
      <style>

        .wrap {
          display:                -webkit-flex; /* Safari */
          -webkit-align-items:    center; /* Safari 7.0+ */
          display:                flex;
          align-items:            center;
          margin:                 0px 20px;
        }

        img {
          height:         100%;
          width :         100%;
          margin:         auto;
          max-width:      400px;
          max-height:     600px;
        }

        iframe {
          margin:         auto;
        }

        h2 {
          color:          red;
          text-align:     center;
        }

        h3 {
          text-align:     center;
        }

        .card {
          background-color:     #e8e8e8;
          margin:               12px;
          border-radius:        5px;
          padding:              16px;
          line-height:          1.4;
          color:                black;
          text-align:           justify;
        }

        p::first-letter {
          color:          red;
          font-weight:    900;
          font-size:      2em;
        }

        .regular {
          line-height:    1.4;
          margin:         20px;
          text-align:     justify;
        }

        a {
          color:          white;
        }

      </style>
      
      <div class="card">
        <h2>Exhibition Announcement</h2>
        <p>
          Gdzie? W Galerii “Po prawej Stronie Wisły”, Warszawa, ul. Konopacka 15/1A
          Kiedy? 19 — 31 V, 2018
          Co? Wystawa fotografii, serigrafii i projekcja filmu
          Rzeczywistość, fotograficzny zapis fragmentów
        </p>
      </div>

      <div class="wrap">
        <img src="images/marks.JPG" alt="Mark Carrot Photography">
      </div>

      <h3><a href="http://www.poprawejstroniewisly.pl/">Noc Muzeów 19 maja 2018 r. w Galerii Sztuki Po Prawej Stronie</a></h3>

      <p class="regular">
        Na początku było światło i później pojawiła się nasza świadomość..
        Czy należy rozważać granicę pomiędzy fotografią dokumentarną a fotografiami-symbolami naszej wewnętrznej rzeczywistości? 
        Na twarzach - skomplikowane życiorysy, wewnątrz w sercach namiętności przeróżne, pod czaszkami zaś wszelakie wizje rzeczywistości. Jak to wszystko zawrzeć w obrazie fotograficznym?
      </p>


      <div class="wrap">
        <iframe frameborder="0" allowfullscreen
          src="https://www.youtube.com/embed/3duD2xFW5N4">
        </iframe>
      </div>

        `;
      }
    }

    window.customElements.define(MarkcarrotPhotography.is, MarkcarrotPhotography)
