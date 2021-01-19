(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{553:function(e,t,s){"use strict";s.r(t);var a=s(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"installing-and-starting-the-zowe-started-task-zwesvstc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-and-starting-the-zowe-started-task-zwesvstc"}},[e._v("#")]),e._v(" Installing and starting the Zowe started task (ZWESVSTC)")]),e._v(" "),s("p",[e._v("Zowe has a number of runtimes on z/OS: the z/OS Service microservice server, the Zowe Application Server, and the Zowe API Mediation Layer microservices. A single PROCLIB "),s("code",[e._v("ZWESVSTC")]),e._v(" is used to start all of these microservices.  This member is installed by Zowe into the data set SAMPLIB "),s("code",[e._v("SZWESAMP")]),e._v(" during the installation or either a convenience build or SMP/E.")]),e._v(" "),s("p",[e._v("This topic describes how to configure the z/OS runtime in order to launch Zowe. You can do these manually (as described in this topic) or use scripts to install and configure the cross memory server (see "),s("RouterLink",{attrs:{to:"/user-guide/scripted-configure-server.html#zowe-z-os-components"}},[e._v("Installing and Configuring Zowe z/OS components using scripts")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"step-1-copy-the-proclib-member-zwesvstc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-copy-the-proclib-member-zwesvstc"}},[e._v("#")]),e._v(" Step 1: Copy the PROCLIB member ZWESVSTC")]),e._v(" "),s("p",[e._v("When the Zowe runtime is launched, it is run under a z/OS started task with the PROCLIB member named "),s("code",[e._v("ZWESVSTC")]),e._v(". A sample PROCLIB is created during installation into the PDS "),s("code",[e._v("SZWESAMP(ZWESVSTC)")]),e._v(". To launch Zowe as a started task, you must copy this member to a PDS that is in the proclib concatenation path.")]),e._v(" "),s("h2",{attrs:{id:"step-2-configure-zwesvstc-to-run-under-the-correct-user-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-zwesvstc-to-run-under-the-correct-user-id"}},[e._v("#")]),e._v(" Step 2: Configure ZWESVSTC to run under the correct user ID")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ZWESVSTC")]),e._v(" should be configured as a started task under the "),s("code",[e._v("ZWESVUSR")]),e._v("user ID with the administrator user ID of "),s("code",[e._v("ZWEADMIN")]),e._v(".  If you do not have these IDs already created, the commands to create the user ID and group are supplied in the PDS member "),s("code",[e._v("ZWESECUR")]),e._v(". See "),s("RouterLink",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring the z/OS system for Zowe")]),e._v(".  To associate the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task with the user ID and group, see "),s("RouterLink",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring a z/OS system for Zowe")]),e._v(".  This step will be done once per z/OS environment by a system programmer who has sufficient security privileges.")],1),e._v(" "),s("h2",{attrs:{id:"step-3-launch-the-zwesvstc-started-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-launch-the-zwesvstc-started-task"}},[e._v("#")]),e._v(" Step 3: Launch the ZWESVSTC started task")]),e._v(" "),s("p",[e._v("You can launch the Zowe started task in two ways.")]),e._v(" "),s("h3",{attrs:{id:"option-1-starting-zowe-from-a-uss-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-1-starting-zowe-from-a-uss-shell"}},[e._v("#")]),e._v(" Option 1: Starting Zowe from a USS shell")]),e._v(" "),s("p",[e._v("To launch the "),s("code",[e._v("ZWESVSTC")]),e._v(" started task, run the "),s("code",[e._v("zowe-start.sh")]),e._v(" script from a USS shell.  This reads the configuration values from the "),s("code",[e._v("instance.env")]),e._v(" file in the Zowe instance directory.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd <ZOWE_INSTANCE_DIR>/bin\n./zowe-start.sh\n")])])]),s("p",[e._v("where,")]),e._v(" "),s("p",[s("em",[e._v("<ZOWE_INSTANCE_DIR>")]),e._v(" is the directory where you set the instance directory to. This script starts "),s("code",[e._v("ZWESVSTC")]),e._v(" for you so you do not have to log on to TSO and use SDSF.")]),e._v(" "),s("h3",{attrs:{id:"option-2-starting-zowe-with-a-s-tso-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-2-starting-zowe-with-a-s-tso-command"}},[e._v("#")]),e._v(" Option 2: Starting Zowe with a "),s("code",[e._v("/S")]),e._v(" TSO command")]),e._v(" "),s("p",[e._v("You can use SDSF to start Zowe.")]),e._v(" "),s("p",[e._v("If you issue the SDSF command "),s("code",[e._v("/S ZWESVSTC")]),e._v(", the JCL will need to know the instance directory containing the launch and configuration information.  To do this add the "),s("code",[e._v("INSTANCE")]),e._v(" parameter on the START command when you start Zowe in SDSF:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/S ZWESVSTC,INSTANCE='$ZOWE_INSTANCE_DIR',JOBNAME='ZWEXSV'\n")])])]),s("p",[e._v("The "),s("code",[e._v("$ZOWE_INSTANCE_DIR")]),e._v(" argument is the fully qualifed path to the USS directory containing the "),s("code",[e._v("instance.env")]),e._v(" file containing the Zowe configuration.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("JOBNAME='ZWEXSV'")]),e._v(" argument is optional and the started task will operate correctly without it, however having it specified ensures that the address spaces will be prefixed with "),s("code",[e._v("ZWEXSV")]),e._v(" which makes them easier to find in SDSF or locate in RMF records.")]),e._v(" "),s("p",[e._v("If you have a default instance directory you want you always start Zowe with, you can tailor the JCL member "),s("code",[e._v("ZWESVSTC")]),e._v(" at this line")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("//ZWESVSTC   PROC INSTANCE='{{instance_directory}}'\n")])])]),s("p",[e._v("to replace the "),s("code",[e._v("instance_directory")]),e._v(" with the location of the Zowe instance directory that contains the configurable Zowe instance directory.")])])}),[],!1,null,null,null);t.default=o.exports}}]);