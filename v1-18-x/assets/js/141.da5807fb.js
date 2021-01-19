(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{540:function(e,t,r){"use strict";r.r(t);var o=r(18),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"configure-zowe-with-z-osmf-workflows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-zowe-with-z-osmf-workflows"}},[e._v("#")]),e._v(" Configure Zowe with z/OSMF Workflows")]),e._v(" "),r("p",[e._v("As a system programmer, after you install Zowe, you can register and execute the z/OSMF workflows in the web interface to complete the Zowe configuration. z/OSMF helps to simplify the Zowe configuration tasks and reduce the level of expertise that is needed for Zowe configuration.")]),e._v(" "),r("p",[e._v("Ensure that you meet the following requirements before you start the Zowe configuration:")]),e._v(" "),r("ul",[r("li",[e._v("Installed and configured z/OSMF")]),e._v(" "),r("li",[e._v("Installed Zowe with either SMP/E build or convenience build")])]),e._v(" "),r("p",[e._v("You can complete the following tasks with the z/OSMF workflows:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#configure-zos-security-manager"}},[e._v("Configure z/OS Security Manager to prepare for launching the Zowe started tasks")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#configure-zowe-certificates"}},[e._v("Configure Zowe certificates")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#configure-zowe-cross-memory-server"}},[e._v("Configure Zowe Cross Memory Server")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#create-and-configure-the-zowe-instance-directory-and-start-the-zowe-started-task"}},[e._v("Create and configure the Zowe instance directory and start the Zowe started task")])])]),e._v(" "),r("h2",{attrs:{id:"configure-z-os-security-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-z-os-security-manager"}},[e._v("#")]),e._v(" Configure z/OS Security Manager")]),e._v(" "),r("p",[e._v("Configure the z/OS security manager to prepare for launching the Zowe started tasks. The workflow definition file is provided to assist with the security configuration. The workflow definition file allows you to configure z/OS security manager by using one of RACF, ACF2, or TSS security systems.")]),e._v(" "),r("p",[e._v("Register the "),r("strong",[e._v("ZWESECUR.xml")]),e._v(" workflow definition file in the z/OSMF web interface to configure z/OS security manager. The path to the workflow\ndefinition file is "),r("code",[e._v("<pathPrefix>/workflows/")]),e._v(".")]),e._v(" "),r("p",[e._v("Perform the following steps after you register the workflow definition file:")]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("Define Values for Variables")])]),e._v(" "),r("p",[e._v("Review all the parameters and customize the values for variables to meet the z/OS security requirements. We recommend that the security administrator at your site reviews and edits the values for security group variables.")]),e._v(" "),r("p",[e._v("Zowe package includes the variable input file that is "),r("strong",[e._v("ZWESECUR.properties")]),e._v(". Optionally, you can use this file to customize the values for variables in advance. Upload the prepared properties file while your register the workflow definition. Values from this file override the default values for the workflow variables.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Execute JCL")])]),e._v(" "),r("p",[e._v("Execute the step to complete the z/OS security manager configuration.")])])]),e._v(" "),r("p",[e._v("After you execute these steps, the groups, user IDs and started tasks are assigned based on the customized values. For instructions on how to register and execute the workflow, see "),r("a",{attrs:{href:"#register-and-execute-workflow-in-the-zosmf-web-interface"}},[e._v("Register and execute workflow in the z/OSMF Web Interface")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"configure-zowe-certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-zowe-certificates"}},[e._v("#")]),e._v(" Configure Zowe certificates")]),e._v(" "),r("p",[e._v("z/OSMF workflow lets you generate certificate signed by the Zowe API Mediation Layer and keystores in the specified location. Zowe uses the keystore directory to hold the certificate to encrypt communication between Zowe clients and the Zowe z/OS servers. The keystore directory also holds the truststore that is used to hold public keys of any servers that Zowe trusts.")]),e._v(" "),r("p",[e._v("Register the ZWEWRF05 member that is located "),r("code",[e._v("<pathPrefix>/workflows/ZWEWRF05.xml")]),e._v(" data set in the z/OSMF web interface. After you register the workflow definition file, you can execute the following steps.")]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("Define Variables")])]),e._v(" "),r("p",[e._v("Review all the parameters and customize the values for variables to meet the z/OS security requirements.")]),e._v(" "),r("p",[e._v("Zowe package includes the variable input file ZWEWRF05.properties and the path is "),r("code",[e._v("<pathPrefix>/workflows/ZWEWRF05.properties")]),e._v(". Optionally you can use this file to customize the values for variables in advance. Upload the prepared properties file when you register the workflow definition file. Values from this file override the default values for the workflow variables.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Generate new custom zowe-setup-certificates.env file")])]),e._v(" "),r("p",[e._v("Execute the step to generate a new custom "),r("code",[e._v("zowe-setup-certificates.env")]),e._v(" file based on the custom values that you provide for variables in the first step.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Execute zowe-setup-certificates.sh")])]),e._v(" "),r("p",[e._v("Execute the step to run the shell script to generate the custom certificates based on the defined values for variables and values for parameters in the provided environment file.")])])]),e._v(" "),r("p",[e._v("After you execute these steps, the keystore and certificates are successfully generated based on the custom values. For general instruction on how to register and execute the workflow, see "),r("a",{attrs:{href:"#register-and-execute-workflow-in-the-zosmf-web-interface"}},[e._v("Register and execute workflow in the z/OSMF Web Interface")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"configure-zowe-cross-memory-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-zowe-cross-memory-server"}},[e._v("#")]),e._v(" Configure Zowe Cross Memory Server")]),e._v(" "),r("p",[e._v("The Zowe cross memory server provides privileged cross-memory services to the Zowe Desktop and runs as an APF-authorized program. Multiple Zowe desktop instances can use the same cross memory server. Use the z/OSMF workflow to install, configure, and launch the cross memory server if you want to use the Zowe desktop. The z/OSMF workflow also lets you create APF-authorized load libraries that are required to install and configure the cross memory server.")]),e._v(" "),r("p",[e._v("Register the ZWEWRF06.xml workflow definition file that is located in "),r("code",[e._v("<pathPrefix>/workflows/")]),e._v(". After you complete the workflow registration, Perform the following steps to configure the Zowe cross memory server:")]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("Define values for Variables")])]),e._v(" "),r("p",[e._v("The workflow includes the list of Zowe cross memory server configuration and the started task variables. Enter the custom values for variables based on your mainframe environment and Zowe cross memory server configuration requirements.")]),e._v(" "),r("p",[e._v("Zowe package includes ZWEWRF06.properties variable input file and the path is "),r("code",[e._v("<pathPrefix>/workflows/ZWEWRF05.properties")]),e._v(". Optionally you can use this file to customize the values for variables in advance. Upload the prepared properties file when your register the workflow definition file. Values from this file override the default values for the workflow variables.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Allocate Cross Memory Server Data Sets")])]),e._v(" "),r("p",[e._v("Execute the step to allocate Target DSN for PARMLIB, Target DSN for PROCLIB, and log directory data sets that are required for XMEM configuration.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Copy artifacts")])]),e._v(" "),r("p",[e._v("Execute the step to populate the data sets that are allocated in the previous step with the necessary artifacts such as load modules, parmlib members and others. This step also copies the cross memory server STC to the proclib.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Add PPT entries to the system PARMLIB")])]),e._v(" "),r("p",[e._v("The cross memory server and its auxiliary address spaces must run in key 4 and be non-swappable. For the server to start in this environment, add the following PPT entries for the server and address spaces to the SCHEDxx member of the system PARMLIB.\n"),r("code",[e._v("PPT PGMNAME(ZWESIS01) KEY(4) NOSWAP")])]),e._v(" "),r("p",[e._v("The PDS member SZWESAMP contains the PPT lines for reference. Issue the following command to make the SCHEDxx changes effective.\n"),r("code",[e._v("/SET SCH=xx")])]),e._v(" "),r("p",[e._v("For more information, see "),r("RouterLink",{attrs:{to:"/user-guide/configure-xmem-server.html#key-4-non-swappable"}},[e._v("Key 4 non-swappable")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Retrieve the LOADLIB volume")])]),e._v(" "),r("p",[e._v("This step allows you to automatically retrieve the VOLUME for non-SMS LOADLIB. Run this step to retrieve the actual VOLUME of the LOADLIB.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("APF Authorize Load Library")])]),e._v(" "),r("p",[e._v("Creates APF-authorized load library that is required to install and configure the cross memory server. Execute the step to APF authorize the XMEM LOADLIB.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Start the XMEM Server")])]),e._v(" "),r("p",[e._v("Execute this step to start the Cross Memory Server started task.")])])]),e._v(" "),r("p",[e._v("After you complete these steps, the Zowe cross memory server is configured and installed to start the Zowe Desktop instance. For instruction on how to register and execute the workflow, See, "),r("a",{attrs:{href:"#register-and-execute-workflow-in-the-zosmf-web-interface"}},[e._v("Register and execute workflow in the z/OSMF Web Interface")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"create-and-configure-the-zowe-instance-directory-and-start-the-zowe-started-task"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-and-configure-the-zowe-instance-directory-and-start-the-zowe-started-task"}},[e._v("#")]),e._v(" Create and configure the Zowe instance directory and start the Zowe started task")]),e._v(" "),r("p",[e._v("The Zowe instance directory contains configuration data that is required to launch a Zowe runtime. This includes port numbers, location of dependent runtimes such as Java, Node, z/OSMF, as well as log files. When Zowe is started, configuration data is read from files in the instance directory and logs will be written to files in the instance directory. Zowe has three runtimes namely: the z/OS Service microservice server, the Zowe Application Server, and the Zowe API Mediation Layer microservices.")]),e._v(" "),r("p",[e._v("Register "),r("strong",[e._v("ZWEWRF03.xml")]),e._v(" workflow definition file in the z/OSMF web interface to create a Zowe instance directory and start the Zowe started task. The path to the workflow definition file is "),r("code",[e._v("<pathPrefix>/workflows/")])]),e._v(" "),r("p",[e._v("After you register the workflow definition file, perform the following steps to complete the process:")]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("Define Variables")])]),e._v(" "),r("p",[e._v("The workflow includes the list of instance configuration and the Zowe started task variables. Enter the values for variables based on your mainframe environment, Zowe instance configuration, and started task requirements.")]),e._v(" "),r("p",[e._v("Zowe package includes the variable input file that is "),r("strong",[e._v("ZWEWRF03.properties")]),e._v(" and the path is "),r("code",[e._v("<pathPrefix>/files/workflows/ZWEWRF03.properties")]),e._v(". Optionally you can use this file to customize the values for variables in advance. This automates the workflow execution, saving time and effort when deploying multiple standardized Zowe instances. Values from this file override the default values for the workflow variables.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Create a Zowe instance")])]),e._v(" "),r("p",[e._v("Execute the step to create a Zowe instance directory. This step creates instances for all the micro services. That is z/OS Service microservice server, the Zowe Application Server, and the Zowe API Mediation Layer microservices.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Change the instance configuration")])]),e._v(" "),r("p",[e._v("Execute the step to configure the Zowe instance. The configuration of the Zowe instance depends on the values for variables that you defined in the first step.\n"),r("strong",[e._v("Note: If you are planning to use Docker, be sure to select only to start LAUNCH_COMPONENT_GROUP=ZSS, otherwise more components of Zowe than necessary will be run on z/OS, such as API Mediation Layer and the App Framework. You can skip configuration for those components here, as they will run in Docker.")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Copy the STC to the procedure library")])]),e._v(" "),r("p",[e._v("Skip this step if the procedure library is empty.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Start the Zowe instance")])]),e._v(" "),r("p",[e._v("Execute the step to start the instance.")])])]),e._v(" "),r("p",[e._v("After you execute each step, the step is marked as Complete. After completing the workflow execution, you can view the Zowe started task.")]),e._v(" "),r("h2",{attrs:{id:"register-and-execute-workflow-in-the-z-osmf-web-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#register-and-execute-workflow-in-the-z-osmf-web-interface"}},[e._v("#")]),e._v(" Register and execute workflow in the z/OSMF web interface")]),e._v(" "),r("p",[e._v("z/OSMF workflow simplifies the procedure to configure and start Zowe. Perform the following steps to register and execute the workflow in the z/OSMF web interface:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Log in to the z/OSMF web interface and select "),r("strong",[e._v("Use Desktop Interface")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Select the Workflows File.")])]),e._v(" "),r("li",[r("p",[e._v("Select "),r("strong",[e._v("Create Workflow")]),e._v(" from the "),r("strong",[e._v("Actions")]),e._v(" menu.")]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("Create Workflow")]),e._v(" panel appears.")])]),e._v(" "),r("li",[r("p",[e._v("Enter the complete USS path to the workflow you want to register in the "),r("strong",[e._v("Workflow Definition File")]),e._v(" field.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("If you installed Zowe with the SMP/E build, the workflow is located in the SMP/E target zFS file system that was mounted during the installation.")])]),e._v(" "),r("li",[r("p",[e._v("(Optional) Enter the complete USS path to the edited workflow properties file in the Workflow Variable Input File field. Use this file to customize product instances and automate workflow execution, saving time and effort when deploying multiple standardized Zowe instances. Values from this file override the default values for the workflow variables.")]),e._v(" "),r("p",[e._v("The sample properties file is located in the same directory with the workflow definition file.\nCreate a copy of this file, and then modify as described in the file. Set the field to the path where the new file is located.\nNote: if you use the convenience build, the workflows and variable input files are located in the USS runtime folder in files/workflows")]),e._v(" "),r("p",[e._v("The following table provides the list of Zowe Components Workflow Definition files and their corresponding variable input files.")])])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Configuration Tasks")]),e._v(" "),r("th",[e._v("Workflow Definition File Name")]),e._v(" "),r("th",[e._v("Properties File Name")]),e._v(" "),r("th",[e._v("Workflow Definition File Path")]),e._v(" "),r("th",[e._v("Variable Input file Path")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Configure z/OS Security Manager")]),e._v(" "),r("td",[e._v("ZWESECUR.xml")]),e._v(" "),r("td",[e._v("ZWESECUR.properties")]),e._v(" "),r("td",[r("code",[e._v("<pathPrefix>/workflows/")]),e._v(" /ZWESECUR.xml")]),e._v(" "),r("td",[r("code",[e._v("<pathPrefix>/workflows/ ZWESECUR.properties")])])]),e._v(" "),r("tr",[r("td",[e._v("Configure Zowe Certificates")]),e._v(" "),r("td",[e._v("ZWEWRF05.xml")]),e._v(" "),r("td",[e._v("ZWEWRF05.properties")]),e._v(" "),r("td",[r("code",[e._v("<pathPrefix>/workflows/")]),e._v(" / ZWEWRF05.xml")]),e._v(" "),r("td",[r("code",[e._v("<pathPrefix>/workflows/ ZWEWRF05.properties")])])]),e._v(" "),r("tr",[r("td",[e._v("Configure Cross Memory Server")]),e._v(" "),r("td",[e._v("ZWEWRF06.xml")]),e._v(" "),r("td",[e._v("ZWEWRF06.properties")]),e._v(" "),r("td",[r("code",[e._v("<pathPrefix>/workflows/")]),e._v(" / ZWEWRF06.xml")]),e._v(" "),r("td",[r("code",[e._v("<pathPrefix>/workflows/ZWEWRF06.properties")])])]),e._v(" "),r("tr",[r("td",[e._v("Create Instance Directory and Start the Zowe started Task")]),e._v(" "),r("td",[e._v("ZWEWRF03.xml")]),e._v(" "),r("td",[e._v("ZWEWRF03.properties")]),e._v(" "),r("td",[r("code",[e._v("<pathPrefix>/workflows/")]),e._v(" / ZWEWRF03.xml")]),e._v(" "),r("td",[r("code",[e._v("<pathPrefix>/workflows/ ZWEWRF03.properties")])])])])]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[r("p",[e._v("Select the System where the workflow runs.")])]),e._v(" "),r("li",[r("p",[e._v("Select "),r("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Specify a unique Workflow name.")])]),e._v(" "),r("li",[r("p",[e._v("Select or enter an Owner user ID, and select "),r("strong",[e._v("Assign all steps to owner user ID")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Select Finish.")]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("workflow")]),e._v(" is registered in z/OSMF. The workflow is available for execution to deploy and configure the Zowe instance.")])]),e._v(" "),r("li",[r("p",[e._v("Execute the steps in order. Perform the following steps to execute each step individually:")]),e._v(" "),r("p",[e._v("a. Double-click the title of the step.")]),e._v(" "),r("p",[e._v("b. Select the "),r("strong",[e._v("Perform")]),e._v(" tab.")]),e._v(" "),r("p",[e._v("c. Review the step contents and update the input values as\nrequired.")]),e._v(" "),r("p",[e._v("d. Select "),r("strong",[e._v("Next")]),e._v(".")]),e._v(" "),r("p",[e._v("Repeat the previous two steps to complete all items until the option Finish is available.")])]),e._v(" "),r("li",[r("p",[e._v("Select "),r("strong",[e._v("Finish")]),e._v(".")])])]),e._v(" "),r("p",[e._v("After you execute each step, the step is marked as Complete. The workflow is executed.")])])}),[],!1,null,null,null);t.default=i.exports}}]);