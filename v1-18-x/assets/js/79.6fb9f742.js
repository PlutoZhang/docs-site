(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{632:function(e,t,a){"use strict";a.r(t);var n=a(18),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"embedding-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embedding-plugins"}},[e._v("#")]),e._v(" Embedding plugins")]),e._v(" "),a("p",[e._v("Add these imports to a component where you want to embed another plugin:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import {Inject, Injector, ViewChild, ViewContainerRef} from '@angular/core';  \nimport {Angular2InjectionTokens, Angular2PluginEmbedActions, EmbeddedInstance} from 'pluginlib/inject-resources';\n")])])]),a("p",[e._v("Inject Angular2PluginEmbedActions into your component constructor:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" constructor(@Inject(Angular2InjectionTokens.PLUGIN_EMBED_ACTIONS) private embedActions: Angular2PluginEmbedActions) {  \n    }\n")])])]),a("p",[e._v("In the component template prepare a container where you want to embed the plugin:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.html\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    <div class="container-for-embedded-window">  \n       <ng-container #embedded></ng-container>  \n    </div>\n')])])]),a("p",[e._v("In the component class add a reference to the container:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    @ViewChild('embedded', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;\n")])])]),a("p",[e._v("In the component class add a reference to the embedded instance:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    private embeddedInstance: EmbeddedInstance;\n")])])]),a("p",[e._v("Everything is ready to start embedding, you just need to know the pluginId that you want to embed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    embedPlugin(): void {\n      const pluginId = 'org.zowe.zlux.sample.angular';  \n      const launchMetadata = null;  \n      this.embedActions.createEmbeddedInstance(pluginId, launchMetadata, this.viewContainerRef)  \n        .then(embeddedInstance => this.embeddedInstance = embeddedInstance)  \n        .catch(e => console.error(`couldn't embed plugin ${pluginId} because ${e}`));\n   }\n")])])]),a("h2",{attrs:{id:"how-to-interact-with-embedded-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-interact-with-embedded-plugin"}},[e._v("#")]),e._v(" How to interact with embedded plugin")]),e._v(" "),a("p",[e._v("If the main component of embedded plugin declares Input and Output properties then you can interact with it. ApplicationManager provides methods to set Input properties and get Output properties of the embedded plugin. Suppose, that the embedded plugin declares Input and Output properties like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("plugin.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    @Input() sampleInput: string;\n    @Output() sampleOutput: EventEmitter<string> = new EventEmitter<string>();\n")])])]),a("p",[e._v("Obtain a reference to AppicationManager in your component constructor:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    private applicationManager: MVDHosting.ApplicationManagerInterface;\n    constructor(\n      @Inject(Angular2InjectionTokens.PLUGIN_EMBED_ACTIONS) private embedActions: Angular2PluginEmbedActions,\n      // @Inject(MVDHosting.Tokens.ApplicationManagerToken) private applicationManager: MVDHosting.ApplicationManagerInterface\n      injector: Injector\n    ) {\n      this.applicationManager = this.injector.get(MVDHosting.Tokens.ApplicationManagerToken);   \n    }\n")])])]),a("p",[a("em",[e._v("Note:")]),e._v(" We are unable to inject "),a("code",[e._v("AppicationManager")]),e._v(" with "),a("code",[e._v("@Inject()")]),e._v(" until an AoT-compiler issue with namespaces is resolved: "),a("a",{attrs:{href:"https://github.com/angular/angular/issues/15613",target:"_blank",rel:"noopener noreferrer"}},[e._v("angular/angular#15613"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Now you can set "),a("code",[e._v("sampleInput")]),e._v(" property, obtain "),a("code",[e._v("sampleOutput")]),e._v(" property and subscribe to it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("this.applicationManager.setEmbeddedInstanceInput(this.embeddedInstance, 'sampleInput', 'some value');   \n\n    const sampleOutput: Observable<string> = this.applicationManager.getEmbeddedInstanceOutput(this.embeddedInstance, 'sampleOutput');\n    sampleOutput.subscribe(value => console.log(`get new value ${value} from sampleOutput`));\n")])])]),a("h2",{attrs:{id:"how-to-destroy-embedded-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-destroy-embedded-plugin"}},[e._v("#")]),e._v(" How to destroy embedded plugin")]),e._v(" "),a("p",[e._v("There is no special API to destroy embedded plugin. If you want to destroy the embedded plugin just clear the container for the embedded plugin and set "),a("code",[e._v("embeddedInstance")]),e._v(" to null:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.ts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    this.viewContainerRef.clear();\n    this.embeddedInstance = null;\n")])])]),a("h2",{attrs:{id:"how-to-style-a-container-for-the-embedded-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-style-a-container-for-the-embedded-plugin"}},[e._v("#")]),e._v(" How to style a container for the embedded plugin")]),e._v(" "),a("p",[e._v("It is hard to give a universal recipe for a container style. At least, the container needs "),a("code",[e._v('position: "relative"')]),e._v(" because the embedded plugin may have absolutely positioned elements. Here is sample styles you can start with if your component utilizes flexbox layout:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.component.css\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    .container-for-embedded-window {\n      position: relative;\n      flex: 1 1 auto;\n      align-self: stretch;\n      display: flex;\n      flex-direction: column;\n      align-items: stretch;\n    }\n")])])]),a("h2",{attrs:{id:"applications-that-use-embedding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applications-that-use-embedding"}},[e._v("#")]),e._v(" Applications that use embedding")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/zowe/zlux-workflow/blob/master/webClient/src/app/workflow-step-wizard/workflow-step-wizard.component.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Workflow app"),a("OutboundLink")],1),e._v(" demonstrates advanced usage.")])])}),[],!1,null,null,null);t.default=s.exports}}]);