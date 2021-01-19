(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{633:function(e,a,t){"use strict";t.r(a);var r=t(18),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"understanding-the-zowe-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-zowe-release"}},[e._v("#")]),e._v(" Understanding the Zowe release")]),e._v(" "),t("h2",{attrs:{id:"zowe-releases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zowe-releases"}},[e._v("#")]),e._v(" Zowe releases")]),e._v(" "),t("p",[e._v("Zowe uses semantic versioning for its releases, also known as SemVer.  Each release has a unique ID made up of three numbers that are separated by periods.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<Major Version>.<Minor Version>.<Patch Version>\n")])])]),t("p",[e._v("Each time a new release is created, the release ID is incremented.  Each number represents the content change since the previous release.  For example,")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("1.5.0")]),e._v(" represents the fifth minor release since the first major release.")]),e._v(" "),t("li",[t("code",[e._v("1.5.1")]),e._v(" represents the first patch to the "),t("code",[e._v("1.5.0")]),e._v(" release.")]),e._v(" "),t("li",[t("code",[e._v("1.6.0")]),e._v(" is the first minor release to be created after "),t("code",[e._v("1.5.1")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"patch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patch"}},[e._v("#")]),e._v(" Patch")]),e._v(" "),t("p",[e._v("A patch is usually reserved for a bug fix to a minor release.")]),e._v(" "),t("h3",{attrs:{id:"minor-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-release"}},[e._v("#")]),e._v(" Minor release")]),e._v(" "),t("p",[e._v("A minor release indicates that new functionality is added but the code is compatible with an earlier version.  The Zowe community works on two-week sprints and creates a minor release at the end of these, typically once per month although the frequency might vary.")]),e._v(" "),t("h3",{attrs:{id:"major-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#major-release"}},[e._v("#")]),e._v(" Major release")]),e._v(" "),t("p",[e._v("A major release is required if changes are made to the public API and the code is no longer compatible with an earlier version.")]),e._v(" "),t("p",[e._v("When Zowe is version one, it is associated with the Zowe v1 "),t("RouterLink",{attrs:{to:"/extend/zowe-conformance-program.html"}},[e._v("conformance program")]),e._v('. Offerings that extend Zowe and achieve the Zowe v1 conformance badge will remain compatible with Zowe throughout its version 1 lifetime. A major release increment because of incompatibility is sometimes referred to as a "breaking" change.')],1),e._v(" "),t("p",[e._v("The first SMP/E build for Zowe v1 has a Functional Module ID (FMID) of AZWE001, which was created with content from the 1.9.0 release. Each major release will be its own SMP/E FMID where the last digit is updated, for example AZWE00V where V represents the major version.")]),e._v(" "),t("p",[e._v("Subsequent minor and patch releases to V1 are delivered as SMP/E PTF SYSMODs.  Because of the size of the content, two co-requisite PTFs are created for each Zowe release.")]),e._v(" "),t("p",[e._v('While Major releases are required for a "breaking" change, they also can be used to indicate to the community a significant content update over and above what would be included in a minor release.')]),e._v(" "),t("h2",{attrs:{id:"check-the-zowe-release-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-the-zowe-release-number"}},[e._v("#")]),e._v(" Check the Zowe release number")]),e._v(" "),t("p",[e._v("To see the release number of Zowe, look at the "),t("code",[e._v("manifest.json")]),e._v(" file.  This is included in the top-level "),t("RouterLink",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html"}},[e._v("directory of where a Zowe convenience build is expanded to")]),e._v(", the top-level directory of a Zowe runtime "),t("code",[e._v("<RUNTIME_DIR>")]),e._v(", and the "),t("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html"}},[e._v("Zowe instance directory")]),e._v(" "),t("code",[e._v("<INSTANCE_DIR>/workspace")]),e._v(".")],1),e._v(" "),t("p",[e._v("To see the version of a Zowe release, use the Unix grep command in a directory that contains a "),t("code",[e._v("manifest.json")]),e._v(" file.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(">cat manifest.json | grep version | head -1\n")])])]),t("p",[e._v("will return a single line with the Zowe release number. For example,")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"version": "1.10.0",\n')])])])])}),[],!1,null,null,null);a.default=s.exports}}]);