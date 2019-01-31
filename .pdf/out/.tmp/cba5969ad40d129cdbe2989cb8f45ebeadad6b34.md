<?xml version="1.0" encoding="UTF-8"?><?workdir /opt/dita-ot/out/.tmp?><?workdir-uri file:/opt/dita-ot/out/.tmp/?><?path2project ../?><?path2project-uri ../?><?path2rootmap-uri ../?><topic xmlns:ditaarch="http://dita.oasis-open.org/architecture/2005/" xmlns:dita-ot="http://dita-ot.sourceforge.net/ns/201007/dita-ot" class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="troubleshooting-the-installation" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:1;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:1;182:3">Troubleshooting the installation</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:1;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:1;182:3">Review the following troubleshooting tips if you have problems with Zowe installation.</p></body><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="troubleshooting-installing-zowe-runtime" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:2;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:2;182:3">Troubleshooting installing Zowe runtime</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:2;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:2;182:3">The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior installing Zowe runtime.</p></body><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="troubleshooting-installing-explorer-server" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:3;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:3;182:3">Troubleshooting installing explorer server</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:3;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:3;182:3">If explorer server REST APIs do not function properly, check the following items:</p><ul class="- topic/ul " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="ul:1;182:3"><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:1;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:4;182:3">Check whether your Liberty explorer server is running.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:5;182:3">You can check this in the Display Active \(DA\) panel of SDSF under ISPF. The ZOWESVR started task should be running. If the ZOWESVR task is not running, start the explorer server by using the following <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:1;182:3">START</codeph> operator command:</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:1;182:3">/S ZOWESVR</codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:6;182:3">You can also use the operator command <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:2;182:3">/D A,ZOWESVR</codeph> to verify whether the task is active, which alleviates the need for the DA panel of SDSF. If the started task is not running, ensure that your ZOWESVR procedure resides in a valid PROCLIB data set, and check the task’s job output for errors.</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:2;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:7;182:3">Check whether the explorer server is started without errors.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:8;182:3">In the DA panel of SDSF under ISPF, select the ZOWESVR job to view the started task output. If the explorer server is started without errors, you can see the following messages:</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:2;182:3">CWWKE0001I: The server Atlas has been launched.</codeblock><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:3;182:3">CWWKF0011I: The server Atlas is ready to run a smarter planet.</codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:9;182:3">If you see error messages that are prefixed with "ERROR" or stack traces in the ZOWESVR job output, respond to them.</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:3;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:10;182:3">Check whether the URL that you use to call explorer server REST APIs is correct. For example: https://your.server:atlasport/api/v1/system/version. The URL is case-sensitive.</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:4;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:11;182:3">Ensure that you enter a valid z/OS® user ID and password when initially connecting to the explorer server.</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:5;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:12;182:3">If testing the explorer server REST API for jobs information fails, check the z/OSMF IZUSVR1 task output for errors. If no errors occur, you can see the following messages in the IZUSVR1 job output:</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:4;182:3">CWWKE0001I : The server zosmfServer has been launched.</codeblock><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:5;182:3">CWWKF0011I: The server zosmfServer is ready to run a smarter planet.</codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:13;182:3">If you see error messages, respond to them.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:14;182:3">For RESTJOBS, you can see the following message if no errors occur:</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:6;182:3">CWWKZ0001I: Application IzuManagementFacilityRestJobs started in n.nnn seconds.</codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:15;182:3">You can also call z/OSMF RESTJOBS APIs directly from your Internet browser with a URL, for example,</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:7;182:3">https://your.server:securezosmfport/zosmf/restjobs/jobs</codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:16;182:3">where the <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:1;182:3">securezosmfport</i> is 443 by default. You can verify the port number by checking the <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:2;182:3">izu.https.port</i> variable assignment in the z/OSMF <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:3;182:3">bootstrap.properties</codeph> file.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:17;182:3">You might get error message IZUG846W, which indicates that a cross-site request forgery (CSRF) was attempted. To resolve the issue, update your browser by adding the <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:4;182:3">X-CSRF-ZOSMF-HEADER</codeph> HTTP custom header to every cross-site request. This header can be set to any value or an empty string (""). For details, see the z/OSMF documentation. If calling the z/OSMF RESTJOBS API directly fails, fix z/OSMF before explorer server can use these APIs successfully.</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:6;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:18;182:3">If testing the explorer server REST API for data set information fails, check the z/OSMF IZUSVR1 task output for errors and confirm that the z/OSMF RESTFILES services are started successfully. If no errors occur, you can see the following message in the IZUSVR1 job output:</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:8;182:3">CWWKZ0001I: Application IzuManagementFacilityRestFiles started in n.nnn seconds.</codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:19;182:3">To test z/OSMF REST APIs you can run curl scripts from your workstation.</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:9;182:3">curl --user &lt;username&gt;:&lt;password&gt; -k -X GET --header 'Accept: application/json' --header 'X-CSRF-ZOSMF-HEADER: true' "https://&lt;z/os host name&gt;:&lt;securezosmfport&gt;/zosmf/restjobs/jobs?prefix=*&amp;owner=*</codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:20;182:3">where the <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:3;182:3">securezosmfport</i> is 443 by default. You can verify the port number by checking the <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:4;182:3">izu.https.port</i> variable assignment in the z/OSMF <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:5;182:3">bootstrap.properties</codeph> file.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:21;182:3"><codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:6;182:3">/zosmf/restjobs/jobs?prefix=*&amp;owner=*</codeph> will return a list of the jobs.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:22;182:3">If z/OSMF returns jobs correctly you can test whether it is able to returns files using</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:10;182:3">curl --user &lt;username&gt;:&lt;password&gt; -k -X GET --header 'Accept: application/json' --header 'X-CSRF-ZOSMF-HEADER: true' "https://&lt;z/os host name&gt;:&lt;securezosmfport&gt;/zosmf/restfiles/ds?dslevel=SYS1"</codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:23;182:3">If the restfiles curl statement returns a TSO SERVLET EXCEPTION error check that the the z/OSMF installation step of creating a valid IZUFPROC procedure in your system PROCLIB has been completed. For more information, see the <xref class="- topic/xref " href="https://www-01.ibm.com/servers/resourcelink/svc00100.nsf/pages/zOSV2R3sc278419?OpenDocument" format="html" scope="external" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="xref:1;182:3">z/OSMF Configuration Guide</xref>.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:24;182:3">The IZUFPROC member resides in your system PROCLIB, which is similar to the following sample:</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:11;182:3">//IZUFPROC PROC ROOT='/usr/lpp/zosmf'  /* zOSMF INSTALL ROOT     */
//IZUFPROC EXEC PGM=IKJEFT01,DYNAMNBR=200                          
//SYSEXEC  DD DISP=SHR,DSN=ISP.SISPEXEC                            
//         DD DISP=SHR,DSN=SYS1.SBPXEXEC                           
//SYSPROC  DD DISP=SHR,DSN=ISP.SISPCLIB                            
//         DD DISP=SHR,DSN=SYS1.SBPXEXEC                           
//ISPLLIB  DD DISP=SHR,DSN=SYS1.SIEALNKE                           
//ISPPLIB  DD DISP=SHR,DSN=ISP.SISPPENU                            
//ISPTLIB  DD RECFM=FB,LRECL=80,SPACE=(TRK,(1,0,1))                
//         DD DISP=SHR,DSN=ISP.SISPTENU                            
//ISPSLIB  DD DISP=SHR,DSN=ISP.SISPSENU                            
//ISPMLIB  DD DISP=SHR,DSN=ISP.SISPMENU                            
//ISPPROF  DD DISP=NEW,UNIT=SYSDA,SPACE=(TRK,(15,15,5)),            
//         DCB=(RECFM=FB,LRECL=80,BLKSIZE=3120)                     
//IZUSRVMP DD PATH='&amp;ROOT./defaults/izurf.tsoservlet.mapping.json'  
//SYSOUT   DD SYSOUT=H                                              
//CEEDUMP  DD SYSOUT=H                                              
//SYSUDUMP DD SYSOUT=H                                              
//                                                                 </codeblock><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:25;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:1;182:3">Note:</b> You might need to change paths and data sets names to match your installation.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:26;182:3">A known issue and workaround for RESTFILES API can be found at <xref class="- topic/xref " href="http://www-01.ibm.com/support/docview.wss?crawler=1&amp;uid=isg1PI63398" format="wss" scope="external" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="xref:2;182:3">TSO SERVLET EXCEPTION ATTEMPTING TO USE RESTFILE INTERFACE</xref>.</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:7;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:27;182:3">Check your system console log for related error messages and respond to them.</p></li></ul><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:28;182:3">If the explorer server cannot connect to the z/OSMF server, check the following item:</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:29;182:3">By default, the explorer server communicates with the z/OSMF server on the localhost address. If your z/OSMF server is on a different IP address to the explorer server, for example, if you are running z/OSMF with Dynamic Virtual IP Addressing (DVIPA), you can change this by adding a <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:7;182:3">ZOSMF_HOST</codeph> parameter to the <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:8;182:3">server.env</codeph> file. For example: <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:9;182:3">ZOSMF_HOST=winmvs27</codeph>.</p></body></topic><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="troubleshooting-installing-the-zowe-application-framework" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:4;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:4;182:3">Troubleshooting installing the Zowe Application Framework</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:4;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:30;182:3">To help Zowe research any problems you might encounter, collect as much of the following information as possible and open an issue in GitHub with the collected information.</p><ul class="- topic/ul " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="ul:2;182:3"><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:8;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:31;182:3">Zowe version and release level</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:9;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:32;182:3">z/OS release level</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:10;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:33;182:3">Job output and dump (if any)</p><ul class="- topic/ul " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="ul:3;182:3"><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:11;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:34;182:3">Javascript console output (Web Developer toolkit accessible by pressing F12)</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:12;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:35;182:3">Log output from the Zowe Application Server</p></li></ul></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:13;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:36;182:3">Error message codes</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:14;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:37;182:3">Screenshots (if applicable)</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:15;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:38;182:3">Other relevant information (such as the version of Node.js that is running on the Zowe Application Server and the browser and browser version).</p></li></ul></body></topic></topic><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="troubleshooting-installing-zowe-cli" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:5;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:5;182:3">Troubleshooting installing Zowe CLI</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:5;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:39;182:3">The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior using Zowe CLI.</p></body><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="command-not-found-message-displays-when-issuing-npm-install-commands" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:6;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:6;182:3"><i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:5;182:3">Command not found</i> message displays when issuing npm install commands</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:6;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:40;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:2;182:3">Valid on all supported platforms</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:41;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:3;182:3">Symptom:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:42;182:3">When you issue nmp commands to install Zowe CLI, the message <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:6;182:3">command not found</i> displays in your CLI.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:43;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:4;182:3">Solution:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:44;182:3">The <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:7;182:3">command not found</i> message displays because Node.js and NPM are not installed on your computer. To correct this behavior, install Node.js and NPM and reissue the npm command to install Zowe CLI.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:45;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:5;182:3">More Information:</b> <xref class="- topic/xref " href="d500a715b4aa8200d010e3e4f66a48d4090048e9.md" dita-ot:orig-format="markdown" format="dita" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="xref:3;182:3">System requirements for Zowe CLI</xref></p></body></topic><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="npm-install--g-command-fails-due-to-an-eperm-error" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:7;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:7;182:3"><codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:10;182:3">npm install -g </codeph>Command Fails Due to an EPERM Error</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:7;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:46;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:6;182:3">Valid on Windows</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:47;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:7;182:3">Symptom:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:48;182:3">This behavior is due to a problem with Node Package Manager (npm). There
is an open issue on the npm GitHub repository to fix the defect.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:49;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:8;182:3">Solution:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:50;182:3">If you encounter this problem, some users report that repeatedly
attempting to install Zowe CLI yields success. Some users also
report success using the following workarounds:</p><ul class="- topic/ul " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="ul:4;182:3"><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:16;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:51;182:3">Issue the <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:11;182:3">npm cache clean</codeph> command.</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:17;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:52;182:3">Uninstall and reinstall Zowe CLI. For more information,
see <xref class="- topic/xref " href="3c5639783a4a2573d79d3f8de6929684303817ff.md" dita-ot:orig-format="markdown" format="dita" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="xref:4;182:3">Install Zowe CLI</xref>.</p></li><li class="- topic/li " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="li:18;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:53;182:3"><codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:12;182:3">Add the --no-optional</codeph> flag to the end of the <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:13;182:3">npm install</codeph> command.</p></li></ul></body></topic><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="sudo-syntax-required-to-complete-some-installations" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:8;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:8;182:3"><codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:14;182:3">Sudo</codeph> syntax required to complete some installations</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:8;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:54;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:9;182:3">Valid on Linux and macOS</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:55;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:10;182:3">Symptom:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:56;182:3">The installation fails on Linux or macOS. </p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:57;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:11;182:3">Solution:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:58;182:3">Depending on how you configured Node.js on Linux or macOS, you might need to add the prefix <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:15;182:3">sudo </codeph> before the <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:16;182:3">npm install -g</codeph> command or the <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:17;182:3">npm uninstall -g</codeph> command. This step gives Node.js write access to the installation directory.</p></body></topic><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="npm-install--g-command-fails-due-to-npm-err-cannot-read-property-pause-of-undefined-error" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:9;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:9;182:3"><codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:18;182:3">npm install -g</codeph> command fails due to <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:19;182:3">npm ERR! Cannot read property 'pause' of undefined</codeph> error</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:9;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:59;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:12;182:3">Valid on Windows or Linux</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:60;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:13;182:3">Symptom:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:61;182:3">You receive the error message <codeph class="+ topic/ph pr-d/codeph " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeph:20;182:3">npm ERR! Cannot read property 'pause' of undefined</codeph> when you attempt to install the product.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:62;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:14;182:3">Solution:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:63;182:3">This behavior is due to a problem with Node Package Manager (npm). If
you encounter this problem, revert to a previous version of npm that
does not contain this defect. To revert to a previous version of npm,
issue the following command:</p><codeblock class="+ topic/pre pr-d/codeblock " xml:space="preserve" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="codeblock:12;182:3">npm install npm@5.3.0 -g</codeblock></body></topic><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="nodejs-commands-do-not-respond-as-expected" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:10;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:10;182:3">Node.js commands do not respond as expected</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:10;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:64;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:15;182:3">Valid on Windows or Linux</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:65;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:16;182:3">Symptom:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:66;182:3">You attempt to issue node.js commands and you do not receive the expected  output.</p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:67;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:17;182:3">Solution:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:68;182:3">There might be a program that is named <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:8;182:3">node</i> on your path. The Node.js installer automatically adds a program that is named <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:9;182:3">node</i> to your path. When there are pre-existing programs that are named <i class="+ topic/ph hi-d/i " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="i:10;182:3">node</i> on your computer, the program that appears first in the path is used. To correct this behavior, change the order of the programs in the path so that Node.js appears first.</p></body></topic><topic class="- topic/topic " ditaarch:DITAArchVersion="1.2" domains="(topic hi-d) (topic ut-d) (topic indexing-d) (topic hazard-d) (topic abbrev-d) (topic pr-d) (topic sw-d) (topic ui-d)" id="installation-fails-on-oracle-linux-6" xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="topic:11;182:3"><title class="- topic/title " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="title:11;182:3">Installation fails on Oracle Linux 6</title><body class="- topic/body " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="body:11;182:3"><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:69;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:18;182:3">Valid on Oracle Linux 6</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:70;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:19;182:3">Symptom:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:71;182:3">You receive error messages when you attempt to install the product on an
Oracle Linux 6 operating system. </p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:72;182:3"><b class="+ topic/ph hi-d/b " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="b:20;182:3">Solution:</b></p><p class="- topic/p " xtrf="file:/opt/dita-ot/data/troubleshoot/troubleshootinstall.md" xtrc="p:73;182:3">Install the product on Oracle Linux 7 or another Linux or Windows OS. Zowe CLI is not compatible with Oracle Linux 6.</p></body></topic></topic></topic>