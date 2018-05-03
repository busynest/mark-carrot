
/*
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

  import { PolymerElement, html }                   from "@polymer/polymer/polymer-element.js";
  import { setPassiveTouchGestures, setRootPath }   from '@polymer/polymer/lib/utils/settings.js';

    //  APP ROUTE
    import "@polymer/app-route/app-location.js";
    import "@polymer/app-route/app-route.js";

    //  import { connect }                  from 'pwa-helpers/connect-mixin.js';
    //  import { installRouter }            from 'pwa-helpers/router.js';
    //  import { installOfflineWatcher }    from 'pwa-helpers/network.js';
    //  import { updateMetadata }           from 'pwa-helpers/metadata.js';

      // APP-LAYOUT ELEMENTS
  import "@polymer/app-layout/app-header-layout/app-header-layout.js";
  import "@polymer/app-layout/app-header/app-header.js";
  import "@polymer/app-layout/app-toolbar/app-toolbar.js";
  import '@polymer/iron-pages/iron-pages.js';
  import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
  //import "@polymer/paper-card/paper-card.js";
  //import "@polymer/iron-selector/iron-selector.js";

    /**
    * @customElement
    * @polymer
    */

  // CUSTOM ELEMENTS
   import "./markcarrot-photography.js";
   //import "./markcarrot-page404.js";

  setPassiveTouchGestures(true);

  setRootPath(Polymer.rootPath);

  class ApplicationShell extends PolymerElement {

    static get is() { return 'application-shell'; }

    static get properties() {
      return {
        page: { type: String, reflectToAttribute: true, observer: '_pageChanged' },
        routeData:  Object,
        subroute:   Object,
      };
    }

    static get observers() {
      return [
        '_routePageChanged(routeData.page)',
      ];
    }

    constructor() {
      super();
      // Get root pattern for app-route, for more info about `rootPath` see:
      // https://www.polymer-project.org/2.0/docs/upgrade#urls-in-templates
      // this.rootPattern = (new URL(this.rootPath)).pathname;
    }
/*
    _routePageChanged(page) {
      //this.page = page || 'markcarrot-photography';
      if (!page) {
        // If no page was found in the route data, page will be an empty string.
        // Default to 'view1' in that case.
        this.page = 'markcarrot-photography';
      } else if (['markcarrot-photography'].indexOf(page) !== -1) {
        this.page = page;
      } else {
        this.page = 'markcarrot-page404';
      }
    }

    _pageChanged(page) {
      switch(page) {
        case 'markcarrot-photography':
          import('./markcarrot-photography.js');
          break;
        case 'markcarrot-page404':
          import('./markcarrot-page404.js');
          break;
      }
    }
*/



    static get template() {
      return html`
    <style>
      
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }
      
      app-toolbar   { background-color: #303030; }
      app-header    {
        background-color: pink; width: 100%;
        /*

          --app-header-background-front-layer: {
            background-image: url(/images/marks.JPG);
          };

        */
      }
      
      paper-card {
        background-color: white;
        padding: 20px;
        margin: 15px 0px 10px 0px;
        width: 100%;
      }

      main {
        margin: 8px;
      }

      markcarrot-photography {
 
      }

      h2 {
        font-size: .9em;
      }
      .appTitle, .appDescription {
        color:    orange;
        margin:   0px;
      }

      iron-pages {
        width: 100%;
        height: 100%;
      }

      @media print {
        html {margin: 10px !important;}
        body {background: none !important; color: black !important; text-shadow: none !important; padding: 8mm;}
      }

      /* 480px Screen*/
      @media only screen and (max-width: 480px) {
        .appTitle, .appDescription { font-size: 70%; }
      }

      /* 480px Screen*/
      @media only screen and ( min-width: 480px) {
        .appTitle, .appDescription { font-size: 70%; }
      }

      /* 520px to 699px Screen*/
      @media only screen and (min-width: 640px) {
        .appTitle, .appDescription {  }
        
      }

      /* 768px Screen */
      @media only screen and ( min-width: 780px) {
        .appTitle, .appDescription { font-size: 90%; }
      }

      /* 700px to 1000px Screen */
      @media only screen and (min-width: 1000px) {
        .appTitle, .appDescription {font-size: 90%;}
      }

      /* 1001px + Screen */
      @media only screen and (min-width: 1001px) {
        .appTitle, .appDescription { font-size: 90%; }
      }

      /* 1151px + Screen */
      @media only screen and (min-width: 1151px) {
        .appTitle, .appDescription { font-size: 90%; }
      }

    </style>
  
  <!--
  <app-location
      route=              "{{route}}"
      url-space-regex=    "^[[rootPath]]>
  </app-location>
  
  <app-route
    route=      "{{route}}"
    pattern=    "[[rootPath]]:page"
    data=       "{{routeData}}"
    tail=       "{{subroute}}">
  </app-route>
  -->


    <!-- APP HEADER LAYOUT -->
    <app-header-layout>

      <!-- APP HEADER -->
      <app-header
        slot="header"
        fixed
        condenses
        shadow>

        <!-- style="height: 100%;" effects="parallax-background" -->

        <!-- APP-TOOLBAR -->
        <app-toolbar>

          <!-- BUSINESS LOGO -->
          <h2
            class="appTitle information"
            main-title>
            Mark Carrot Photography: Exhibition Announcement</h2>

          <!-- DIVIDER
          <span class="flex" style="flex:1;"></span>
          
          <!-- DRAWER TOGGLE 
          <paper-icon-button
            drawer-toggle
            class="colored"
            role="button"
            icon="icons:menu"></paper-icon-button>

          <!-- PAPER-PROGRESS 
          <paper-progress
            bottom-item>
          </paper-progress>
          -->

        </app-toolbar>
      </app-header>

      <!-- MAIN #1 -->
      <main>

      <!-- PAGE 1 -->
      <markcarrot-photography
        name="markcarrot-photography"></markcarrot-photography>
        
        <!-- IRON PAGES 
        <iron-pages
          class="magicPagesOne"
          selected="[[page]]"
          fallback-selection="markcarrot-page404"
          attr-for-selected="name"
          role="main">
          
            <!-- PAGE 2
          <markcarrott-page404
            name="markcarrot-page404"></markcarrot-page404>
        </iron-pages>
        -->

      </main>

      <div style="height: 100px; background-color: #303030; color: white;"><h3 style="margin: auto; text-align: center;">© Mark Carrot</h3></div>

    </app-header-layout>
    
        `;
      }
    }

    window.customElements.define("application-shell", ApplicationShell);

