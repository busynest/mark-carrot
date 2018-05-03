
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

      @media only screen and (min-width: 500px) {
        img         { margin-right: 20px; }  
        .wrapImage  { float: left; }
        .wrapVideo  { margin-top: 4em; }
        h3          { margin-left: 1em; }
      }

      @media only screen and (max-width: 500px) {
        img { margin: auto; }
        h3  { text-align: center; }
        p   { margin: 18px; }
      }

      @media only screen and (max-width: 500px) {
        iframe { 
          width :         256px;
          height:         144px;
        }
      }

      @media only screen and (min-width: 500px) {
        iframe { 
          width :         426px;
          height:         240px;
        }
      }

      @media only screen and (min-width: 650px) {
        iframe { 
          width :         640px;
          height:         360px;
        }
      }

        .page {
          max-width:      650px;
          margin:         auto;
        }

        img {
          height:         100%;
          width :         100%;
          max-width:      266px;
          max-height:     400px;
        }

        .wrapImage {
          display:                -webkit-flex; /* Safari */
          -webkit-align-items:    center; /* Safari 7.0+ */
          display:                flex;
          align-items:            center;
        }

        iframe {
          margin:         auto;
          margin-bottom:  1em;
        }

        .wrapVideo {
          display:                -webkit-flex; /* Safari */
          -webkit-align-items:    center; /* Safari 7.0+ */
          display:                flex;
          align-items:            center;
        }

        h2 {
          color:          red;
          text-align:     center;
        }

        h3 {
          margin-bottom: 2em;
        }

        p {
          line-height:    1.4;
          font-size:      1.1em;
          font-weight:    600;
  
        }

        a {
          color:          #303030;
        }


      </style>
      
      <div class="page">



<!-- PARAGRAPH 1 -->
        
        <p>
          Gdzie? W Galerii “Po prawej Stronie Wisły”, Warszawa, ul. Konopacka 15/1A
        </p>

        <p>
          Kiedy? 19 — 31 V, 2018
        </p>

        <p>
          Co? Wystawa fotografii, serigrafii i projekcja filmu “Rzeczywistość, fotograficzny zapis fragmentów”
        </p>


    
        <div class="wrapImage">
          <img src="images/marks.JPG" alt="Mark Carrot Photography">
        </div>

        <h3><a href="http://www.poprawejstroniewisly.pl/">Noc Muzeów 19 maja 2018 r. w Galerii Sztuki Po Prawej Stronie Wisły</a></h3>



<!-- PARAGRAPH 2 -->

        <p>
          Na początku było światło i później pojawiła się nasza świadomość..
        </p>

        <p>
          Czy należy rozważać granicę pomiędzy fotografią dokumentarną a fotografiami-symbolami naszej wewnętrznej rzeczywistości? 
        </p>

        <p> 
          Na twarzach - skomplikowane życiorysy, wewnątrz w sercach namiętności przeróżne, pod czaszkami zaś wszelakie wizje rzeczywistości. Jak to wszystko zawrzeć w obrazie fotograficznym?
        </p>



        <div class="wrapVideo">
          <iframe frameborder="0" allowfullscreen
            src="https://www.youtube.com/embed/RLhEyymHSTY">
          </iframe>
        </div>
        
      </div>

        `;
      }
    }

    window.customElements.define(MarkcarrotPhotography.is, MarkcarrotPhotography)
