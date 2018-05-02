
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
        .wrapper {
          color:              #303030;
          background-color:   #e8e8e8;
          padding:            12px;
          margin:             10px 0px 10px 0px;
        }

  		</style>
  
   
      <div class="wrapper">


        <h2>Mark Carrot's Photography</h2>


      </div>

        `;
      }
    }

    window.customElements.define(MarkcarrotPhotography.is, MarkcarrotPhotography)
