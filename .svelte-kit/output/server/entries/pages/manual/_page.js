import { c as create_ssr_component } from "../../../chunks/index2.js";
import { e as error } from "../../../chunks/index.js";
const Manual = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>How to Build a Handmade Radio: A Manual</h1>
<p>𞠕 April Chu <br>
𞠕 Last updated on 11.30.2023</p>
<hr>
<h4>Table of Contents</h4>
<ol><li><a href="#setting-intentions">Setting Intentions</a></li>
<li><a href="#network-overview">Network Overview</a><ul><li><a href="#the-network">The Network</a></li>
<li><a href="#the-internet-radio-toolchain">The Internet Radio Toolchain</a></li></ul></li>
<li><a href="#materials">Materials</a></li>
<li><a href="#building-a-local-radio">Building a Local Radio</a><ul><li><a href="#set-up-the-online-radio-toolchain">Set up the Online Radio Toolchain</a></li>
<li><a href="#optional-stream-vlc-to-butt">Optional: Stream VLC to BUTT</a></li>
<li><a href="#optional-set-up-ssh">Optional: Set up SSH</a></li></ul></li>
<li><a href="#configuring-the-public-radio">Configuring the Public Radio</a><ul><li><a href="#set-up-port-forwarding">Set Up Port Forwarding</a></li>
<li><a href="#set-up-dynamic-dns-ddns">Set up Dynamic DNS (DDNS)</a></li>
<li><a href="#update-firewall-settings">Update Firewall Settings</a></li>
<li><a href="#optional-use-a-custom-domain">Optional: Use a Custom Domain</a></li>
<li><a href="#optional-set-up-ssl">Optional: Set Up SSL</a></li></ul></li>
<li><a href="#glossary">Glossary</a></li></ol>
<hr>
<h2>Setting Intentions</h2>
<blockquote><p>When you liberate programming from the requirement to be professional and scalable, it becomes a different activity altogether, just as cooking at home is really nothing like cooking in a commercial kitchen. I can report to you: not only is this different activity rewarding in almost exactly the same way that cooking for someone you love is rewarding, there’s another feeling, too, specific to this realm…What is this feeling? Independence? Security? Sovereignty?</p>
<br>
𞠕 Robin Sloan, An App Can Be A Home-cooked Meal
</blockquote>
<p>This manual is not a technical tutorial to building a reliable and scalable online radio. It is not intended to be an authoritative or exhaustive reference.</p>
<p>Instead, this guide is an invitation to build your own “home-cooked” radio. This manual will walk through how to assemble free and open source software on a Raspberry Pi to stream audio online. It covers the construction of a radio within a local network and offers steps to make it public (if and when you choose to do so). It is for those who have no experience with servers and the command line, for people who have even the slightest interest in building or understanding networks and infrastructure.</p>
<p>This guide aims to serve as a resource to those seeking to participate as collaborators, and not mere consumers, in our increasingly technical world. This guide aligns with notions of liberating technological creation from industrial hands. I hope that the act of creating handmade platforms built by and for us, we can begin to re-enchant our digital realms. Even more so, I hope that you will begin to engage with new feelings of <em>independence</em>, <em>security</em>, and <em>sovereignty</em>.</p>
<hr>
<h2>Network Overview</h2>
<p>Before we begin building the radio, let’s take a step back and look at ① the parts of a network and ② the Internet radio toolchain.</p>
<h3>The Network</h3>
<p>A “local network” refers to a network within a scoped geographic area like a home or office. Devices within a local network can communicate directly with each other without the Internet using local IP addresses.</p>
<h4>Common Terms</h4>
<p><strong>Internet Service Provider (ISP)</strong>: The company that provides your local network with an Internet connection.</p>
<p><strong>Local Network Devices</strong>: The devices connected to your local network such as computers, smartphones, and IoT (Internet of Things) devices. The Raspberry Pi is a server within the local network, hosting various services like a web and radio server.</p>
<p><strong>Networking Equipment</strong></p>
<ul><li><strong>Router</strong>: The central device that serves as a gateway that manages traffic between devices in the local network and the Internet. The router assigns local IP addresses to devices on your local network, allowing them to communicate with each other and connect to the Internet.</li>
<li><strong>Modem</strong>: A device that connects the local network to the ISP, translating the Internet signal from your ISP into a format the local network can use.</li></ul>
<p><strong>Network Services</strong></p>
<ul><li><strong>Domain Name System (DNS)</strong>: Translates human-readable domain names into IP addresses, allowing users to access websites using domain names instead of numbers.</li>
<li><strong>Dynamic Host Configuration Protocol (DHCP)</strong>: Assigns IP addresses dynamically to devices on the network. This ensures that each device gets a unique IP address so devices can communicate within the local network and access the Internet.</li>
<li><strong>Network Address Translation (NAT)</strong>: Allows multiple devices in your home to share a single public IP address provided by the ISP. It replaces the private IP addresses of the devices with the public IP address of your router and keeps track of which device requested what data so that the responses are sent to the correct device.</li>
<li><strong>Firewall</strong>: Protects the network by controlling incoming and outgoing traffic based on security rules.</li></ul>
<h4>How Does Data Flow?</h4>
<p>Most of the data that flows in and out of your home is managed automatically by the network devices.</p>
<p>Let’s picture a Raspberry Pi connected to your home’s local network.</p>
<p>For all outbound traffic from the Pi, like streaming music online, the router assigns a private IP to the Raspberry Pi and uses NAT to replace the private address with the router’s public IP. The request is forwarded to the Internet, traveling through the modem to your ISP to the target server. The target server processes the request, generates a response, and sends it back through the same path. Your router uses NAT to direct the response back to the Pi by replacing its public IP with the Pi’s private IP.</p>
<p>Inbound traffic, such as accessing a website hosted on the Pi, first reaches the router’s public IP address. The router uses NAT to forward the requests to the Raspberry Pi’s local IP address and the appropriate port. The Pi processes the request and sends an appropriate response back through the router. The responses traverse the modem and reach the device that initiated the request.</p>
<p>Beyond the automatic processes handled by the networking equipment, there are additional actions needed to secure external access to services hosted on the Pi:</p>
<ul><li><strong>Port Forwarding</strong>: The router needs to be configured to allow external requests to be directed to specific ports of the internal IP address of the Pi.</li>
<li><strong>Dynamic DNS (DDNS)</strong>: Since the router has a dynamic IP address, a hostname from a DDNS provider needs to be associated with the changing IP address for more reliable service.</li>
<li><strong>Firewalls</strong>: Firewalls on both the router the Pi need to be configured to permit incoming connections on the required ports for the specific services.</li>
<li><strong>SSL Encryption</strong>: The website hosted on the Pi needs to implement SSL encryption to secure communications.</li></ul>
<h3>The Internet Radio Toolchain</h3>
<p>Online radio is usually composed of three parts:</p>
<ul><li><strong>Stream Generator</strong>: The software responsible for creating an audio stream in a specific format, such as MP3 or Ogg Vorbis. It takes input from various sources such as live audio feeds, pre-recorded content, or playlists (ex: BUTT, Liquidsoap, ices, and DarkIce).</li>
<li><strong>Streaming Media Server</strong>: The central hub. It is software that relays audio streams to listeners by receiving input from the stream generator and relaying it to listeners (ex: Icecast).</li>
<li><strong>Media Player</strong>: The software or application used by listeners to access and play the audio stream (ex: VLC, web browsers).</li></ul>
<p>For this project, Broadcast Using This Tool (BUTT) is the <em>stream generator</em>. It captures and encodes audio to send to the Icecast server. Icecast is the <em>streaming media server</em> hosted on the Pi that distributes the stream from the Pi to listeners. Listeners can use the stream’s web page as the <em>media player</em> to tune in to the broadcast.</p>
<p>Additionally, we will be using a virtual audio cable to connect output from VLC to BUTT. This will allow us to stream pre-recorded media as well as broadcast live input at the some time.</p>
<hr>
<h2>Materials</h2>
<h3>Hardware:</h3>
<p>You will need a Raspberry Pi and peripherals to interact with the computer:</p>
<ul><li>A Raspberry Pi<ul><li>This is your computer and server. I am using a Raspberry Pi 4 Model B. Any Raspberry Pi model with Wi-Fi capabilities will work for this project.</li></ul></li>
<li>A keyboard</li>
<li>A mouse</li>
<li>A display monitor</li>
<li>An HDMI to micro HDMI cable</li>
<li>A 15W USB-C power supply (for the Pi)<ul><li>The official <a href="https://www.raspberrypi.com/products/type-c-power-supply/" rel="nofollow">Raspberry Pi USB-C Power Supply</a>.</li></ul></li>
<li>A Micro SD card with Raspberry Pi OS installed<ul><li>You can buy a pre-loaded SD card along with your Raspberry Pi, or you can install it the Raspberry Pi OS using <a href="https://www.raspberrypi.com/software/" rel="nofollow">Raspberry Pi imager</a>.</li></ul></li></ul>
<p>I have not included any audio equipment. For the purposes of testing out your radio, having a computer with a microphone and speakers is sufficient. You can get additional equipment for the Pi if you want to broadcast from the Pi.</p>
<h3>Software:</h3>
<p>This guide prioritizes open source software. The following software are available to download and use for free:</p>
<ul><li><a href="https://httpd.apache.org/" rel="nofollow">Apache2</a> (Web Server)</li>
<li><a href="https://www.icecast.org/" rel="nofollow">Icecast2</a> (Streaming Server)</li>
<li><a href="https://danielnoethen.de/butt/" rel="nofollow">BUTT - Broadcast Using This Tool</a> (Stream Generator)</li>
<li><a href="https://www.videolan.org/" rel="nofollow">VLC</a> (Multimedia Player)</li>
<li><a href="https://vb-audio.com/Cable/" rel="nofollow">VB-Cable</a> (Virtual Audio Cable)</li></ul>
<hr>
<h2>Building a Local Radio</h2>
<h3>Set up the Raspberry Pi</h3>
<p>The <a href="https://www.raspberrypi.com/documentation/computers/getting-started.html" rel="nofollow">Raspberry Pi website has great documentation</a> on how to set up your Pi out of the box. We will mostly be interfacing with the Raspberry Pi through the terminal in this guide.</p>
<blockquote class="note"><h4>Common Terminal Commands</h4>
	<ul><li><code>sudo</code>: Stands for &quot;Super User Do.&quot; Allows user to execute commands with elevated privileges. 
	</li><li><code>apt</code>: Stands for &quot;Advanced Package Tool.&quot; A package management system install and remove software packages. 
	</li><li><code>systemctl</code>: Manages services and provides commands to start, stop, restart, enable, disable, and view status.
	</li><li><code>nano</code>: Opens up a lightweight text editor within the terminal.
	</li></ul></blockquote>
<h3>Set up the Online Radio Toolchain</h3>
<ol><li><p>First, install the Apache web server.
We need to set up a web server to use with Icecast, the streaming media server. This enables us to access Icecast’s web-based administration interface and host a webpage.</p>
<ul><li>From the terminal, update and upgrade the system<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo apt update
sudo apt upgrade</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Install Apache 2<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo apt install apache2</code>`}<!-- HTML_TAG_END --></pre></li>
<li>You might see a prompt to ask if you want to continue. Type <code>Y</code> for “Yes” and hit <code>Enter</code></li>
<li>Once the installation is complete, you can start the service<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo systemctl start apache2</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Make sure Apache start when you turn on the Pi<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo systemctl enable apache2</code>`}<!-- HTML_TAG_END --></pre></li>
<li>To test if Apache is installed correctly, open <code>http://localhost/</code> on the Pi’s browser or enter the Pi’s IP address on another computer on the local network. You should see the Apache 2 default welcome page.<ul><li>To find the Pi’s IP address:<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">hostname -I</code>`}<!-- HTML_TAG_END --></pre></li></ul></li></ul></li>
<li><p>Install Icecast2, the media streaming server.</p>
<ul><li>Install Icecast2<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo apt install icecast2 -y</code>`}<!-- HTML_TAG_END --></pre><ul><li>Click <code>Yes</code> on the pop-up that asks if you want to configure Icecast. Don’t change anything, just hit <code>Enter</code>.</li></ul></li>
<li>Let’s edit the Icecast2 configuration file to change the default passwords and server name<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo nano /etc/icecast2/icecast.xml</code>`}<!-- HTML_TAG_END --></pre><ul><li>I changed the <code>Source Password</code> (used for the source client authentication) and <code>Admin Password</code> (used for authenticating admin features of Icecast) for security. You can read the <a href="https://icecast.org/docs/icecast-2.4.1/basic-setup.html" rel="nofollow">Icecast Documentation</a> to learn more about basic setup.</li></ul></li>
<li>After updating the configuration file, restart the Icecast2 server and check the status.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">systemctl restart icecast2
systemctl status icecast2</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Now that we have a web server and Icecast installed, we can access the Icecast stream interface at port 8000 of your Pi. Go to <code>http://192.168.0.34:8000/</code> (use the IP address of your Pi) to see the status page of your stream. There will be nothing under “Server Status” because you have not started a stream yet. We have to install BUTT or a stream generator software to begin broadcasting. <img src="/manual_images/Screenshot%202023-11-24%20at%202.02.18%20PM.png" alt="Icecast Status Page"></li></ul></li></ol>
<ol start="3"><li><p>Download and configure BUTT, the stream generator.</p>
<blockquote class="note"><h4>Download Location </h4>
<p>You can download BUTT on your Pi or your computer, depending on where you want to stream audio from. I downloaded it on both but remember that if you use your Pi to stream audio you need a mic for audio input and speakers or headphones for output.</p></blockquote>
<ul><li><p>Before installing anything, update and upgrade the system</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo apt-get update
sudo apt-get upgrade</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Choose and download the appropriate source package for your OS from the <a href="https://danielnoethen.de/butt/" rel="nofollow">BUTT site</a> and follow the <a href="https://danielnoethen.de/butt/manual.html" rel="nofollow">installation directions on the manual</a>.</p>
<ul><li>On the Pi, you can install BUTT<ul><li>Click on the main menu (the raspberry icon in the top left) and go to <code>Preferences</code> &gt; <code>Add/Remove Software</code>.</li>
<li>A window with the application catalog will show up. Search for <code>butt</code>. Check the box next to the highlighted package and click <code>Apply</code>. This will install the <code>butt</code>.</li>
<li>Once installed, if you go the main menu and hover over <code>Sound &amp; Video</code> you should see <code>butt</code> as an available application.</li></ul></li></ul></li>
<li><p>Open BUTT from terminal or by opening the application from the GUI.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">butt</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Go to <code>Settings</code> &gt; <code>Main</code> &gt; <code>Server Settings</code> &gt; <code>Add</code> to add a server and link your BUTT broadcast to your Icecast2 stream.</p>
 
<p><img src="manual_images/Screenshot%202023-11-24%20at%202.05.43%20PM.png" alt="BUTT Settings"></p>
<ul><li><strong>Name</strong>: the name of your radio</li>
<li><strong>Address</strong>: <code>localhost</code> or the IP address of your Pi</li>
<li><strong>Port</strong>: <code>8000</code> is the default from Icecast2 but use the number at <code>&lt;listen-socket&gt;</code> in the Icecast2 configuration file</li>
<li><strong>Password</strong>: from <code>&lt;source-password&gt;</code></li>
<li><strong>Icecast mountpoint</strong>: <code>stream</code></li>
<li><strong>Icecast user</strong>: <code>source</code></li></ul></li>
<li><p>Hit the Play button on BUTT to begin the stream</p>
<ul><li>Visit the stream at <code>http://localhost:8000/stream</code> or replace <code>localhost</code> with the IP address of your Pi</li>
<li>If you are not hearing anything on <code>http://localhost:8000/stream</code>, make sure you have configured the input device on BUTT. Click on <code>Settings</code>, go to the <code>Audio</code> tab, and choose a device under <code>Primary Audio Device</code>.</li></ul></li></ul></li></ol>
<blockquote class="success"><h4>We&#39;re local!</h4>
<p>We now have a working local radio. Now you should be able to hear your broadcast from <code>http://localhost:8000/stream</code>. The radio can only be accessed from devices connected to the same local network and not available publicly on the Internet. We have to make some configurations so that listeners can stream the broadcast.
</p></blockquote>
<h3>Optional: Stream VLC to BUTT</h3>
<p>If you want to stream pre-recorded media, like a playlist, you should connect VLC to BUTT with a virtual audio cable (VAC).</p>
<ol><li><p>Download VLC from the <a href="https://www.videolan.org/" rel="nofollow">website</a>. Make sure to choose the appropriate package for your operating system.</p></li>
<li><p>Download VB-Cable VAC from the <a href="https://vb-audio.com/Cable/" rel="nofollow">website</a>. This is currently only available on Windows and MacOS. For Linux, try <a href="https://jackaudio.org/" rel="nofollow">Jack Audio Connection Kit (JACK)</a>.</p>
<ul><li>Open the VB-Cable application and change <code>Latency</code> to <code>7168 smp</code>. This will help synchronize the audio from VLC to the Icecast stream so we can hear the media from VLC on the stream.</li></ul>
<p><img src="manual_images/Screenshot%202023-11-25%20at%202.31.16%20AM.png" alt="VB-Cable application"></p></li>
<li><p>Open VLC and upload some media to the <code>Playlist</code>. Go to <code>Audio</code> &gt; <code>Audio Device</code> and choose <code>VB-Cable</code> or the name of the VAC you are using. This will output the media from VLC to the VAC.</p></li>
<li><p>Open BUTT and go to <code>Settings</code> &gt; <code>Audio</code> to change the input devices.</p>
<ul><li>I chose my <code>Macbook Microphone</code> as the <code>Primary Audio Device</code> and <code>VB-Cable</code> as the <code>Secondary Audio Device</code>. This allows me to stream the media from VLC and my microphone input at the same time. You can set <code>VB-Cable</code> as the only audio device if you only want to stream from VLC.</li></ul></li>
<li><p>Verify the media is streaming from VLC</p>
<ul><li>Start you broadcast from BUTT and go to the link of your stream at <code>http://localhost:8000/stream</code>. You should be able to hear the media from VLC.</li>
<li>You can also view the input and output levels on the VB-Cable dashboard. It should be working fine as long as the numbers are constantly changing. <img src="manual_images/Screenshot%202023-11-25%20at%202.40.06%20AM.png" alt="VB-Cable input and ouput levels"></li></ul></li></ol>
<h3>Optional: Set up SSH</h3>
<p>You might find it helpful to set up SSH on your Pi so you can access the computer remotely. SSH lets you control the Pi from your laptop without setting up a monitor.</p>
<blockquote class="note"><p>Follow <a href="https://www.howtogeek.com/768053/how-to-ssh-into-your-raspberry-pi/">this guide</a> from Tom&#39;s Hardware.
</p></blockquote>
<ol><li><p>Make sure you know our username and password for the Pi. To change the default password:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">passwd</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Enable SSH</p>
<ul><li><p>Option 01: Enable SSH through the Pi desktop</p>
<ul><li>Go to <code>Preferences</code> &gt; <code>Raspberry Pi Configuration</code></li>
<li>Go to the <code>Interfaces</code> tab and toggle on <code>SSH</code></li></ul></li>
<li><p>Option 02: Enable SSH from the terminal</p>
<ul><li>Open configuration panel from the terminal.</li></ul>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo raspi-config</code>`}<!-- HTML_TAG_END --></pre>
<ul><li><p>Select <code>Interface Options</code></p>
 
<p><img src="manual_images/Screenshot%202023-11-24%20at%201.31.41%20PM.png" alt="Raspberry Pi OS Interface Options menu"></p></li>
<li><p>Select <code>SSH</code>. Then choose <code>Yes</code> when asked to enable SSH. Hit <code>Enter</code> on the confirmation box.</p>
 
<p><img src="manual_images/Screenshot%202023-11-24%20at%201.32.30%20PM.png" alt="Raspberry Pi OS SSH menu"></p></li>
<li><p>Make sure you select <code>Finish</code> at the end</p></li></ul></li></ul></li>
<li><p>Check if SSH is running. If not, start the SSH service.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"># Check SSH status
sudo service ssh status

# Start SSH
sudo service ssh start</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Disable Root Login</p>
<blockquote class="note"><p>Disabling direct root login enhances the security of your system by reducing the risk of unauthorized access. It&#39;s recommended to log in as a regular user and then use <code>sudo</code> to perform administrative tasks.
</p></blockquote>
<ul><li>In the terminal, open the SSH configuration file.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">nano /etc/ssh/sshd_config</code>`}<!-- HTML_TAG_END --></pre><ul><li>Find this line in the document: <code>#PermitRootLogin prohibit-password</code></li>
<li>Replace the line with: <code>#PermitRootLogin no</code></li></ul></li>
<li>Save the file and restart the SSH server<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo systemctl restart sshd</code>`}<!-- HTML_TAG_END --></pre></li></ul></li>
<li><p>Now we should be able to login from another computer on the same network!</p>
<ul><li>Open the terminal from the other computer and SSH into the Pi<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">ssh username@[address]</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Replace the <code>username</code> and <code>address</code> with your username and Pi’s IP address (ex <code>ssh april@192.168.0.20</code>).</li>
<li>The first time you SSH into your Pi, there will be a prompt that asks you to accept the encryption ket. Accept it.</li>
<li>Enter the password to your Pi. It will look like you are not typing anything but your keystrokes are being entered.</li>
<li>If successful, you should see something like <code>username@rpi:~</code> at the beginning of the line in your terminal.</li></ul></li>
<li><p>To exit out of SSH use:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">exit</code>`}<!-- HTML_TAG_END --></pre></li></ol>
<hr>
<h2>Configuring the Public Radio</h2>
<p>Once your radio is working locally, we can set up port forwarding and dynamic DNS to make sure your radio is available publicly.</p>
<h3>Set Up Port Forwarding</h3>
<p>If your Raspberry Pi is connected to a router, you’ll need to set up port forwarding to forward external traffic to your Raspberry Pi’s local IP address. I set up port forwarding on 8000 (for Icecast), port 80 (for HTTP), port 22 (for SSH), and port 443 (for HTTPS).</p>
<ol><li>Access your router’s settings.<ul><li>Open a web browser and enter your router’s IP address in the address bar. The router’s IP address is usually <code>192.168.0.1</code> or <code>192.168.1.1</code>. If you’re not sure, check your router’s documentation or your ISP. My router had a label on the bottom of the device with the address and settings password.</li>
<li>Once you have logged in to the settings page, navigate to the “Port Forwarding” section.</li>
<li>Create a new port forwarding rule for each of the four services.</li></ul></li></ol>
<table><thead><tr><th>Service</th>
<th>Internal IP Address</th>
<th>Internal Port</th>
<th>External Port</th>
<th>Protocol</th></tr></thead>
<tbody><tr><td><strong>Icecast</strong></td>
<td>Pi’s Local IP</td>
<td>8000</td>
<td>8000</td>
<td>Both (TCP &amp; UDP)</td></tr>
<tr><td><strong>SSH</strong></td>
<td>Pi’s Local IP</td>
<td>22</td>
<td>22</td>
<td>TCP</td></tr>
<tr><td><strong>HTTP</strong></td>
<td>Pi’s Local IP</td>
<td>80</td>
<td>80</td>
<td>TCP</td></tr>
<tr><td><strong>HTTPS</strong></td>
<td>Pi’s Local IP</td>
<td>443</td>
<td>443</td>
<td>TCP</td></tr></tbody></table>
<blockquote class="note"><ul><li>If your router settings uses port ranges (ex: local start port, local end port, external start port, external end port), just set them all to the same port number.
</li><li>Port 8000 is the default port for Icecast. If you changed the port number in your Icecast configuration file, use the port that you specified. This should also be the same port you used in your BUTT settings. 
</li></ul></blockquote>
<ol start="2"><li>To verify that your ports are set up correctly, go to an <a href="https://www.yougetsignal.com/tools/open-ports/" rel="nofollow">online port check tool</a>.<ul><li>Enter your router’s public IP address and the port you forwarded and see if it’s connected. You can find your router’s public IP address by through an <a href="https://www.whatismyip.com/" rel="nofollow">online IP address checker</a>.</li></ul></li></ol>
<h3>Set up Dynamic DNS (DDNS)</h3>
<p>The public IP address assigned to your router is often dynamic, meaning it can change periodically due to actions by your Internet Service Provider (ISP) or when you switch networks. By configuring a Dynamic DNS, you can associate a domain name with your router’s changing public IP address. This makes it easier to maintain the access to your stream.</p>
<p>I provide steps to register with two free DDNS providers, No-IP and DuckDNS. No-IP requires you to manually confirm that the hostname is in use every 30 days while DuckDNS does not require any verification. I found that I ran into more issues with network security using a DuckDNS hostname which is why I switched over to No-IP.</p>
<h4>OPtion 01 - No-ip</h4>
<blockquote class="note"><p>No-IP will send you and email every 30 days to confirm that the hostname is still in use. If you do not confirm the hostname is active, your hostname will be deleted.</p></blockquote>
<ol><li><p>Register with No-IP</p>
<ul><li>Create an account on the <a href="https://www.noip.com/" rel="nofollow">no-ip website</a>. The sign-up page will ask you to create a hostname (you can also check the box to create one later). Use any hostname you want.</li>
<li>When you are logged in to the dashboard, go to the <code>Dynamic DNS</code> tab &gt; <code>No-IP Hostname</code>. If you created a hostname, you should be able to see your hostname on the dashboard. If not, create a hostname.</li>
<li>Modify the hostname to add your router’s public IP address as the <code>IP/ Target</code> and make sure the <code>Hostname Type</code> is <code>DNS Hostname A</code>. This will map your hostname to the public IP address of your router, which forwards traffic to your Pi.<ul><li>You can find your router’s public IP address by through an <a href="https://www.whatismyip.com/" rel="nofollow">online IP address checker</a>.</li></ul></li></ul></li>
<li><p>Configure DDNS on the Raspberry Pi</p>
<blockquote class="note"><p>Follow <a href="https://www.noip.com/support/knowledgebase/install-linux-3-x-dynamic-update-client-duc#install_from_source">No-IP&#39;s official documentation</a>.
</p></blockquote>
<ul><li>SSH into your Pi or open the terminal on the Pi.</li>
<li>Download the Linux DUC, the program that will automatically update the DNS records with your router’s IP address.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">wget https://dmej8g5cpdyqd.cloudfront.net/downloads/noip-duc_3.0.0-beta.7.tar.gz</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Extract the file<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">tar xf noip-duc_3.0.0-beta.7.tar.gz</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Install the DUC<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">cd /home/$USER/noip-duc_3.0.0-beta.7/binaries &amp;&amp; sudo apt install ./noip-duc_3.0.0-beta.7_armhf.deb</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Once it is installed, run the program<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">noip-duc -g name.ddns.net -u username -p password</code>`}<!-- HTML_TAG_END --></pre><ul><li>Replace <code>name.ddns.net</code> with your hostname.</li>
<li>Replace <code>username</code> and <code>password</code> with your email and account password. If your password uses special characters, put it in single quotes (ex: <code>&#39;!Password&#39;</code>) to prevent errors.</li></ul></li>
<li>You should see a response with the status about the program. The default behavior of the program is to check the IP of the router every 5 minutes and to update the hostname if the IP changes.</li></ul></li>
<li><p>Verify DDNS by entering the domain you just set up (ex <code>http://radio.ddns.net</code>) into a web browser. You should see the same web page as when you use your router’s public IP.</p></li></ol>
<h4>option 02 - Duck DNS</h4>
<ol><li><p>Register with Duck DNS</p>
<ul><li><p>Create an account on <a href="https://www.duckdns.org/" rel="nofollow">Duck DNS</a>or sign in with an existing account.</p></li>
<li><p>Once you are logged in, you will see the section to add a domain. Choose a subdomain name and click <code>Add Domain</code>.</p>
 
<p><img src="manual_images/Capture-2023-11-24-175259.png" alt="DuckDNS add domain section"></p></li>
<li><p>You should your router’s public IP address automatically filled next the domain name. You can find your router’s public IP address by through an <a href="https://www.whatismyip.com/" rel="nofollow">online IP address checker</a>.</p></li></ul></li>
<li><p>Configure DDNS with the Raspberry Pi</p>
<blockquote class="note"><p>Follow the <a href="https://www.duckdns.org/install.jsp">Duck DNS official documentation</a>. Choose <code>pi</code> as the operating system.
</p></blockquote>
<ul><li><p>SSH into your Pi or open the terminal on your Pi. We will be setting up a script to intermittently check the router’s IP address and to update DuckDNS with any changes.</p></li>
<li><p>Make a directory for duckdns, and create the script in the directory.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mkdir duckdns
cd duckdns
nano duck.sh</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>In the <code>duck.sh</code> document, add the follow line.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">echo url=&quot;https://www.duckdns.org/update?domains=YOUR_DOMAIN&amp;token=YOUR_TOKEN&amp;ip=&quot; | curl -k -o ~/duckdns/duck.log -K -</code>`}<!-- HTML_TAG_END --></pre>
<ul><li><p>Replace <code>YOUR_DOMAIN</code> with the DuckDNS subdomain associated with your Pi (ex <code>http://radio.duckdns.org</code>).</p></li>
<li><p>Replace <code>YOUR_TOKEN</code> with the token provided on your DuckDNS account page.</p>
 
<p><img src="manual_images/Screenshot%202023-11-24%20at%206.10.26%20PM.png" alt="Duck DNS token"></p></li>
<li><p>The API will detect the IP address automatically so there is no need to enter an IP address.</p></li></ul></li>
<li><p>Save the file (enter <code>ctrl + X</code> to exit and enter <code>Y</code> to save).</p></li>
<li><p>Make the script file executable:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">chmod 700 duck.sh</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Then using cron, we will make the script run every 5 minutes. First, open cron:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">crontab -e</code>`}<!-- HTML_TAG_END --></pre>
<ul><li>Paste the following command at the bottom of the document.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">*/5 * * * * ~/duckdns/duck.sh &gt;/dev/null 2&gt;&amp;1</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Save the file (enter <code>ctrl + X</code> to exit and enter <code>Y</code> to save).</li></ul></li>
<li><p>You can verify the script is running if the following comand returns a prompt.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">./duck.sh</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>You can also check the log to see if the last attempt was successful (returns <code>OK</code>).</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">cat duck.log</code>`}<!-- HTML_TAG_END --></pre></li></ul></li>
<li><p>Verify DDNS by entering the domain you just set up (ex <code>http://radio.duckdns.org</code>) into a web browser. You should see the same web page as when you use your router’s public IP.</p></li></ol>
<h3>Update Firewall Settings</h3>
<p>A firewall is a security system that enhances the security of the Pi by regulating the flow of traffic between the Pi and local network. We have to update the Pi’s firewall rules to allow traffic at specific ports. <code>iptables</code> is the command-line utility uses on a Pi to define the rules for network traffic.</p>
<ol><li><p>Check if <code>iptables</code> is installed from the terminal</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo iptables --version</code>`}<!-- HTML_TAG_END --></pre>
<ul><li>If not installed, update packages and install <code>iptables</code><pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo apt-get update
sudo apt-get install iptables</code>`}<!-- HTML_TAG_END --></pre></li></ul></li>
<li><p>Allow the four ports for which we have set up port forwarding.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo iptables -A INPUT -p tcp --dport 8000 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Save and restart <code>iptables</code></p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo service iptables save
sudo service iptables restart</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Check the current firewall rules. The output should list the four ports above.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo iptables -L</code>`}<!-- HTML_TAG_END --></pre></li></ol>
<blockquote class="success"><h4>We&#39;re public!</h4>
<p>From a device outside of the local network that your Pi is connected to, you can access your stream from  <code>http://public-ip:8000/stream</code>  (replace <code>public-ip</code> with your router&#39;s Public IP address) or <code>http://radio.ddns.org:8000/stream</code>. Make sure you are streaming from BUTT or there will be an 404 error.
</p></blockquote>
<h3>Optional: Use a Custom Domain</h3>
<p>A downside with dynamic DNS hostnames is that they often get blocked by enterprise wifi networks (like school and company networks). This means blocked access to the stream.</p>
<p>One workaround is to buy a custom domain and connect the DDNS hostname to the domain. Using a custom domain associated with a DDNS hostname is not guaranteed to work in all situations, as network administrators can employ various methods to control access. Some domain providers like <code>namecheap.com</code> offer free DDNS services with domain registration so you don’t have to use third-party DDNS services.</p>
<ol><li><p>Purchase a domain on Namecheap</p></li>
<li><p>Configure Dynamic DNS on the domain in Namecheap</p>
<ul><li><p><a href="https://www.namecheap.com/support/knowledgebase/article.aspx/595/11/how-do-i-enable-dynamic-dns-for-a-domain/" rel="nofollow">Enable Dynamic DNS</a> for the domain</p>
<ul><li>For the relevant domain on <code>Domain List</code>, click on <code>Manage</code> &gt; <code>Advanced DNS</code> &gt; Enable the <code>Dynamic DNS</code> toggle.</li>
<li>Take a note of the <code>Dynamic DNS Password</code>. You will need this later when configuring the Pi.</li></ul></li>
<li><p>Create <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/43/11/how-do-i-set-up-a-host-for-dynamic-dns/" rel="nofollow">A+Dynamic DNS records</a>. This associates an IP Address with the domain name.</p>
<ul><li><p>Click on <code>Manage</code> for the domain. On the <code>Advanced DNS</code> tab, go to <code>Host records</code>.</p></li>
<li><p>Click on <code>Add New Record</code>.</p>
<ul><li><p>If you want your stream to be accessed at <code>your-domain.com</code> and <code>www.your-domain.com</code>, add the following records.</p>
<ol><li>Bare domain (<code>your-domain.com</code>)<ul><li><strong>Type</strong>: <code>A+ Dynamic DNS Record</code></li>
<li><strong>Host</strong>: <code>@</code></li>
<li><strong>Value</strong>: <code>127.0.0.1</code>*</li></ul></li>
<li>www subdomain ( <code>www.your-domain.com</code>)<ul><li><strong>Type</strong>: <code>A+ Dynamic DNS Record</code></li>
<li><strong>Host</strong>: <code>www</code></li>
<li><strong>Value</strong>: <code>127.0.0.1</code>*</li></ul></li></ol></li>
<li><p>I have main website deployed on <a href="https://vercel.com/home" rel="nofollow">Vercel</a> on my base domain and the stream is only accessible on the subdomain <code>stream.domain.com</code>. To set up the record on a subdomain:</p>
<ol><li>Custom subdomain (<code>stream.your-domain.com</code>)<ul><li><strong>Type</strong>: <code>A+ Dynamic DNS Record</code></li>
<li><strong>Host</strong>: <code>stream</code></li>
<li><strong>Value</strong>: <code>127.0.0.1</code>*</li></ul></li></ol></li></ul>
<blockquote class="note"><p>You can use any IP address for <code>Value</code>. Once the DDNS client is configured, the IP address will be automatically updated. 
</p></blockquote></li></ul></li></ul></li>
<li><p><a href="https://gist.github.com/PhilMurwin/22ac3674825daa8e22f265178d69c084" rel="nofollow">Configure DDNS</a> on Raspberry Pi</p>
<ul><li><p>Like we did above when we set up DDNS, we have to configure a client to update the A record on Namecheap to correct the public IP address.</p></li>
<li><p>From the Pi’s terminal or via SSH, update packages and install <code>ddclient</code>:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo apt-get update
sudo apt-get install ddclient</code>`}<!-- HTML_TAG_END --></pre>
<ul><li>An installation pop-up will open. Feel free to enter dummy answers because we will be changing the configuration file manually.</li></ul></li>
<li><p>Open the configuration file using <code>nano</code>:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo nano /etc/ddclient.conf</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>You will see the answers to the installation pop-up. Replace the <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/583/11/how-do-i-configure-ddclient/" rel="nofollow">file’s content</a>:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">use=web, web=dynamicdns.park-your-domain.com/getip
protocol=namecheap
server=dynamicdns.park-your-domain.com
login=[your-domain.com]
password=[your namecheap dyndns password]
[subdomain]</code>`}<!-- HTML_TAG_END --></pre>
<ul><li><strong>Login</strong>: replace <code>[your-domain.com]</code> with your domain name</li>
<li><strong>Password</strong>: use the password from Namecheap under <code>Advanced DNS</code></li>
<li><strong>Subdomain</strong>: this is the subdomain that you want to update. Use <code>@</code> to update the base domain, <code>www</code> for <code>www.domain.com</code> or <code>subdomain</code> for <code>subdomain.domain.com</code>.</li></ul></li>
<li><p>Exit (<code>CTRL + X</code>)and save the file (Hit <code>Y</code>)</p></li>
<li><p>Setup the client to run at startup</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo systemctl start ddclient.service</code>`}<!-- HTML_TAG_END --></pre></li></ul></li>
<li><p>Update Icecast configuration</p>
<ul><li><p>We have to update the Icecast configuration with the new hostname</p></li>
<li><p>Before making changes, create a backup of the Icecast configuration file</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"># Navigate to configuration file directory
cd /etc/icecast2/

# Create a backup of the configuration file
sudo cp icecast.xml icecast.xml.bak</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Open the configuration file using <code>nano</code>:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo nano /etc/icecast2/icecast.xml</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Update the <code>hostname</code> tag with your domain. If you set it up on your subdomain (<code>stream.your-domain.com</code>), then use the subdomain.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;hostname&gt;your-domain.com&lt;/hostname&gt;</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Exit (<code>CTRL + X</code>)and save the file (Hit <code>Y</code>)</p></li>
<li><p>Restart Icecast</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo service icecast2 restart</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Now if you go to <code>your-domain.com</code> or <code>stream.subdomain.com</code>, you should see the Icecast status page.</p></li></ul></li>
<li><p>Update BUTT</p>
<ul><li>We have to update BUTT with the new domain as well</li>
<li>Open BUTT and click on <code>Settings</code>. On the <code>Main</code> tab, go to <code>Server Settings</code> and click on <code>Edit</code></li>
<li>Update <code>Address</code> with your domain (or subdomain). Hit <code>Save</code>.</li>
<li>Hit play to start streaming. If everything is set up correctly, the BUTT log should say “Connection Established” and you should be able to access your stream at <code>your-domain.com/stream</code> or <code>stream.your-domain.com/stream</code>.</li></ul></li></ol>
<h3>Optional: Set Up SSL</h3>
<p>Now that you have a domain, it’s a good idea to set up SSL. When your site has a HTTPS padlock, it enhances security, ensures encryption, and reduces the likelihood of browsers blocking it.</p>
<h4>obtain a certificate</h4>
<ol><li><p>Install Cerbot, a client for Let’s Encrypt and a free Certificate Authority. From the terminal, run:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo apt-get update
sudo apt-get install certbot</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Obtain an SSL certificate for the domain.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo certbot certonly --standalone -d your-domain.com</code>`}<!-- HTML_TAG_END --></pre>
<ul><li>Remember to replace <code>your-domain.com</code> with your actual domain.</li></ul></li>
<li><p>Check the certificate for your domain is listed when you run:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo certbot certificates</code>`}<!-- HTML_TAG_END --></pre>
<ul><li>You should see a certificate with your domain name, expiry date, and paths to the certificate and private key.</li></ul></li>
<li><p>Configure automatic renewal</p>
<ul><li>Let’s Encrypt certificates usually expire after 90 days. Cerbot will handle the renewal process but we have to schedule a cron job to automatically renew the certificates.</li>
<li>Check Certbot can renew the certificate by running the renewal process:<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo certbot renew --dry-run</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Open <code>crontab</code> to add a job.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo crontab -e</code>`}<!-- HTML_TAG_END --></pre></li>
<li>At the bottom of the document, add this line to check for renewal twice a day (every 12 hours)<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">0 */12 * * * certbot renew</code>`}<!-- HTML_TAG_END --></pre></li></ul></li></ol>
<h4>update icecast</h4>
<ol><li>Open the Icecast configuration file:<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo nano /etc/icecast2/icecast.xml</code>`}<!-- HTML_TAG_END --></pre></li>
<li>At the bottom of the file, add your SSL certificate details<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;!-- Enable SSL --&gt;
&lt;ssl&gt;1&lt;/ssl&gt;
&lt;ssl-certificate&gt;/etc/letsencrypt/live/[your-domain.com]/fullchain.pem&lt;ssl-certificate&gt;
&lt;ssl-private-key&gt;/etc/letsencrypt/live/[your-domain.com]/privkey.pem&lt;ssl-private-key&gt;
&lt;port&gt;443&lt;/port&gt;</code>`}<!-- HTML_TAG_END --></pre><ul><li>Replace <code>[your-domain.com]</code> for both the <code>&lt;ssl-certificate&gt;</code> and <code>&lt;ssl-private-key&gt;</code> with the your actual domain.</li></ul></li>
<li>Exit (<code>CTRL + X</code>) and save the changes (<code>Y</code>)</li>
<li>Restart Icecast to apply the changes:<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo service icecast2 restart</code>`}<!-- HTML_TAG_END --></pre></li>
<li>You can check your SSL with an <a href="https://www.ssllabs.com/ssltest/" rel="nofollow">online SSL tester</a>.</li></ol>
<hr>
<h2>Glossary</h2>
<p><a href="https://apache.org/" rel="nofollow">Apache</a></p>
<ul><li>A foundational, open-source web server software for deploying websites and web applications.</li></ul>
<p><a href="https://danielnoethen.de/butt/" rel="nofollow">Broadcast Using This Tool (BUTT)</a></p>
<ul><li>A free, open-source software application to broadcast live audio streams over the Internet.</li></ul>
<p><a href="https://certbot.eff.org/" rel="nofollow">Certbot</a></p>
<ul><li>An open-source command-line tool that simplifies the process of obtaining and renewing SSL/TLS certificates. It is the recommended client for Let’s Encrypt, helping to automate the certificate issuance and renewal process.</li></ul>
<p>Domain Name System (DNS)</p>
<ul><li>Translates human-readable domain names into IP addresses, allowing users to access websites using domain names instead of numbers.</li></ul>
<p>Dynamic DNS (DDNS)</p>
<ul><li>A service that automatically updates the DNS whenever the public IP address of a device changes. This allows users to access their devices or services using a hostname (e.x. radio.ddns.org) rather than relying on a changing and potentially unknown IP address.</li></ul>
<p>Dynamic Host Configuration Protocol (DHCP)</p>
<ul><li>Assigns IP addresses dynamically to devices on the network. This ensures that each device gets a unique IP address so devices can communicate within the local network and access the Internet.</li></ul>
<p><a href="https://letsencrypt.org/" rel="nofollow">Let’s Encrypt</a></p>
<ul><li>A nonprofit certificate authority (CA) that provides free SSL/TLS certificates for websites to enable HTTPS.</li></ul>
<p><a href="https://www.icecast.org/" rel="nofollow">Icecast</a></p>
<ul><li>A free, open-source software to set up and run a streaming media server on the Internet.</li></ul>
<p>Internet Service Provider (ISP)</p>
<ul><li>A company that provides users with Internet access by deploying and maintain the necessary infrastructure to deliver Internet services.</li></ul>
<p>IP Address</p>
<ul><li>An Internet Protocol address a numerical address that uniquely identifies a device on a network, helping them find and communicate with each other. Public IP addresses are assigned by ISPs and are unique globally on the Internet. Private IP addresses are used within local networks and cannot be accesible from the public Internet.</li></ul>
<p>Modem</p>
<ul><li>A device that connects the local network to the ISP, translating the Internet signal from your ISP into a format the local network can use.</li></ul>
<p>Network Address Translation (NAT)</p>
<ul><li>Allows multiple devices in your home to share a single public IP address provided by the ISP. It replaces the private IP addresses of the devices with the public IP address and keeps track of which device requested what data so that the responses are sent to the correct device.</li></ul>
<p>Ports</p>
<ul><li>A communication endpoint (picture a numbered door) on a device that is used for network communication. Ports are a numerical value ranging from 0 to 65535 that identifies a unique process or service on a device within a network. Certain ports are reserved for certain processes like port 80 for web browsing or port 22 for SSH.</li></ul>
<p>Radio Server</p>
<ul><li>A server equipped with specialized software that enables the broadcasting or streaming of media files.</li>
<li>The radio server in this project is comprised of Icecast2 (software) that distributes audio files and the Raspberry Pi (hardware) that hosts and runs the streaming application.</li></ul>
<p>Raspberry Pi</p>
<ul><li>A single-board computer (SBC) that operates in the open source ecosystem. It runs Linux and its main supported operating system, Pi OX, is open source and runs a suite of open source software.</li></ul>
<p>Router</p>
<ul><li>The central device that serves as a gateway that manages traffic between devices in the local network and the Internet. The router assigns local IP addresses to devices on your local network, allowing them to communicate with each other and connect to the Internet.</li></ul>
<p>Secure Shell (SSH)</p>
<ul><li>A cryptographic network protocol to securely connect to and control another computer over the internet, usually used to secure remote access to servers. It keeps communication private and ensures connection to the right computer.</li></ul>
<p>Secure Sockets Layer (SSL)</p>
<ul><li>A cryptographic protocol that ensures information exchanged between a user’s web browser and a web server is secure and private. SSL encrypts the data during transmission to prevent the tampering of data in online communication.</li>
<li>When websites use HTTPS (instead of HTTP), it means they are a more secure version to encrypt the data exchanged between the user’s web browser and the web server.</li></ul>
<p>Server</p>
<ul><li>Servers are usually high-powered computers built to store, process, and manage network data, devices, and systems. However, any computer with the necessary software can function as a server.</li>
<li>Servers are both the software that handles a specific task (like web servers) and the hardware (computers that handle the software) that supports the software.</li></ul>
<p>Web Server</p>
<ul><li>A software application or hardware device that stores, processes, and delivers web content to users over the Internet. It handles tasks such as processing HTTP requests to access a web pages or dynamically generates content based on the request.</li>
<li>The web server in this project uses Apache2 (software) to handle web-related tasks which is hosted and run on the Raspberry Pi (hardware).</li></ul>
<p>Virtual Audio Cable (VAC)</p>
<ul><li>Software that allows you to route audio signals between different applications or devices on your computer virtually.</li></ul>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Manual
}, Symbol.toStringTag, { value: "Module" }));
function load() {
  const postsModules = /* @__PURE__ */ Object.assign({ "./manual.md": __vite_glob_0_0 });
  let posts = Object.values(postsModules)[0];
  if (!posts) {
    throw error(404, "This page does not exist");
  } else {
    return {
      posts
    };
  }
}
export {
  load
};
