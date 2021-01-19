(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{402:function(e,t,i){e.exports=i.p+"assets/img/Basic-Routing.193c2ee6.png"},599:function(e,t,i){"use strict";i.r(t);var s=i(18),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"api-mediation-layer-routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-mediation-layer-routing"}},[e._v("#")]),e._v(" API Mediation Layer routing")]),e._v(" "),s("p",[e._v("As an application developer, you can route your service through the Gateway using the API Mediation Layer to consume a specific resource.")]),e._v(" "),s("p",[e._v("There are two ways to route your service to the API Mediation Layer:")]),e._v(" "),s("ul",[s("li",[e._v("Basic Routing (using Service ID and version)")]),e._v(" "),s("li",[e._v("Basic Routing (using only the service ID)")])]),e._v(" "),s("h2",{attrs:{id:"terminology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Service")])]),e._v(" "),s("p",[e._v('A service provides one or more APIs, and is identified by a service ID. Note that sometimes the term "service name" is used to mean service ID.')]),e._v(" "),s("p",[e._v("The default service ID is provided by the service developer in the service configuration file.")]),e._v(" "),s("p",[e._v("A system administrator can replace the service ID with a deployment environment specific name using additional configuration that is external to the service deployment unit. Most often, this is configured in a JAR or WAR file.")]),e._v(" "),s("p",[e._v("Services are deployed using one or more service instances, which share the same service ID and implementation.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("URI (Uniform Resource Identifier)")])]),e._v(" "),s("p",[e._v("A string of characters used to identify a resource. Each URI must point to a single corresponding resource that does not require any additional information, such as HTTP headers.")])])]),e._v(" "),s("h2",{attrs:{id:"apiml-basic-routing-using-service-id-and-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apiml-basic-routing-using-service-id-and-version"}},[e._v("#")]),e._v(" APIML Basic Routing (using Service ID and version)")]),e._v(" "),s("p",[e._v("This method of basic routing is based on the service ID that identifies the service. The specific instance is selected by the API Gateway. All instances require an identical response. Eureka and Zuul expect this type of routing.")]),e._v(" "),s("p",[e._v("The URI identifies the resource, but does not identify the instance of the service as unique when multiple instances of the same service are provided. For example, when a service is running in high-availability (HA) mode.")]),e._v(" "),s("p",[e._v("Services of the same product that provide different resources, such as CA SYSVIEW on one system and CA SYSVIEW in a different sysplex, cannot have the same service ID (the same URI cannot have two different meanings).")]),e._v(" "),s("p",[e._v("In addition to the basic Zuul routing, the Zowe API Gateway supports versioning in which you can specify a major version. The Gateway routes a request only to an instance that provides the specified major version of the API.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("/api/")]),e._v(" prefix is used for REST APIs. The prefix "),s("code",[e._v("/ui/")]),e._v(" applies to web UIs and the prefix "),s("code",[e._v("/ws/")]),e._v(" applies to WebSockets.")]),e._v(" "),s("p",[e._v("You can implement additional routing using a Zuul pre-filter. For more information about how to implement a Zuul filter, see "),s("a",{attrs:{href:"https://cloud.spring.io/spring-cloud-netflix/multi/multi__router_and_filter_zuul.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Router and Filter: Zuul"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("The URL format expected by the API Gateway is:")]),e._v(" "),s("p",[s("code",[e._v("https://{gatewayHost}:{port}/api/v{majorVersion}/{serviceId}/{resource}")])]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("p",[e._v("The following address shows the original URL of a resource exposed by a service:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://service:10015/enablerv1sampleapp/api/v1/samples\n")])])]),s("p",[e._v("The following address shows the API Gateway URL of the resource:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://gateway:10010/api/v1/enablerv1sampleapp/samples\n")])])]),s("p",[e._v("The following diagram illustrates how basic routing works:")]),e._v(" "),s("img",{attrs:{src:i(402),alt:"Zowe API Mediation basic routing"}}),e._v(" "),s("h3",{attrs:{id:"implementation-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[e._v("#")]),e._v(" Implementation Details")]),e._v(" "),s("p",[e._v("Service instances provide information about routing to the API Gateway via Eureka metadata.")]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('metadata-map:\n    apiml:\n        routes:\n            ui_v1:\n                gatewayUrl: "ui/v1"\n                serviceUrl: "/helloworld"\n            api_v1:\n                gatewayUrl: "api/v1"\n                serviceUrl: "/helloworld/v1"\n            api_v2:\n                gatewayUrl: "api/v2"\n                serviceUrl: "/helloworld/v2"\n')])])]),s("p",[e._v("In this example, the service has a service ID of "),s("code",[e._v("helloworldservice")]),e._v(" that exposes the following endpoints:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("UI")]),e._v(" - "),s("code",[e._v("https://gateway/ui/v1/helloworldservice")]),e._v(" routed to "),s("code",[e._v("https://hwServiceHost:port/helloworld/")])]),e._v(" "),s("li",[s("strong",[e._v("API major version 1")]),e._v(" - "),s("code",[e._v("https://gateway/api/v1/helloworldservice")]),e._v(" routed to "),s("code",[e._v("https://hwServiceHost:port/helloworld/v1")])]),e._v(" "),s("li",[s("strong",[e._v("API major version 2")]),e._v(" - "),s("code",[e._v("https://gateway/api/v2/helloworldservice")]),e._v(" routed to "),s("code",[e._v("https://hwServiceHost:port/helloworld/v2")])])]),e._v(" "),s("p",[e._v("where:")]),e._v(" "),s("ul",[s("li",[e._v("The gatewayUrl is matched against the prefix of the URL path used at the Gateway "),s("code",[e._v("https://gateway/urlPath")]),e._v(", where "),s("code",[e._v("urlPath")]),e._v(" is "),s("code",[e._v("prefix/serviceId/resourcePath")]),e._v(".")]),e._v(" "),s("li",[e._v("The service ID is used to find the service host and port.")]),e._v(" "),s("li",[e._v("The "),s("code",[e._v("serviceUrl")]),e._v(" is used to prefix the "),s("code",[e._v("resourcePath")]),e._v(" at the service host.")])]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" The service ID is not included in the routing metadata, but the service ID is in the basic Eureka metadata.")]),e._v(" "),s("h2",{attrs:{id:"basic-routing-using-only-the-service-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-routing-using-only-the-service-id"}},[e._v("#")]),e._v(" Basic Routing (using only the service ID)")]),e._v(" "),s("p",[e._v("This method of routing is similar to the previous method, but does not use the version part of the URL. This approach is useful for services that handle versioning themselves with different granularity.")]),e._v(" "),s("p",[e._v("One example that only uses a service ID is z/OSMF.")]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("p",[e._v("z/OSMF URL through the Gateway: "),s("code",[e._v("https://gateway:10010/api/zosmf/restjobs/jobs/...")])]),e._v(" "),s("p",[e._v("where:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("zosmf")]),e._v(" is the service ID.")]),e._v(" "),s("li",[s("code",[e._v("/restjobs/1.0/...")]),e._v(" is the rest of the endpoint segment.")])]),e._v(" "),s("p",[e._v("Note that no version is specified in this URL.")])])}),[],!1,null,null,null);t.default=a.exports}}]);