window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.networking = {
  "id": "networking",
  "name": "Networking",
  "shortLabel": "NET",
  "accent": "#E8A33D",
  "description": "Concepte de rețea, infrastructură, echipamente, protocoale și depanare în medii cu fir și wireless.",
  "CHAPTERS": [
    {
      "id": "concepte-retea",
      "name": "Concepte de rețea"
    },
    {
      "id": "infrastructura",
      "name": "Infrastructura de rețea"
    },
    {
      "id": "echipamente",
      "name": "Echipamente de rețea"
    },
    {
      "id": "protocoale",
      "name": "Protocoale și servicii"
    },
    {
      "id": "depanare-unelte",
      "name": "Depanare și instrumente"
    }
  ],
  "QUESTIONS": [
    {
      "id": "net-001",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "Networking Fundamentals 1.1 includes which topics? Choose two.",
      "options": [
        "Internet, intranet, extranet and client-server concepts",
        "Only graphic design and video editing",
        "Transmission types such as unicast, multicast and broadcast",
        "Only Microsoft Word formatting"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "The two networking topics are network scope/roles and transmission types. Internet, intranet and extranet distinguish audiences and access, while client–server describes service roles. Unicast targets one receiver, multicast a selected group, and broadcast all hosts in a broadcast domain. Graphic design, video editing and Word formatting are application-use skills, not the network concepts or transmission methods asked for here."
    },
    {
      "id": "net-002",
      "chapter": "protocoale",
      "type": "single",
      "question": "An IPv4 LAN uses private addresses and accesses the public Internet through a gateway with a public IPv4 address. Which gateway function translates the private source addresses?",
      "options": [
        "Network address translation (NAT)",
        "Dynamic Host Configuration Protocol (DHCP)",
        "Network Access Protection (NAP)",
        "Dynamic domain name system (DDNS)"
      ],
      "correct": 0,
      "explanation": "NAT rewrites the private IPv4 source address as traffic leaves through the public gateway; commonly PAT also translates ports so many clients share one public address. Return traffic is mapped back using the translation state. DHCP supplies clients with configuration rather than translating packets. DDNS changes DNS records when an address changes. NAP checks endpoint health under a legacy Windows framework; it does not perform address translation."
    },
    {
      "id": "net-003",
      "chapter": "echipamente",
      "type": "single",
      "question": "A Media Access Control (MAC) address identifies a/an:",
      "options": [
        "UPnP device",
        "Local broadcast domain",
        "Network interface card (NIC)",
        "Local area network (LAN)"
      ],
      "correct": 2,
      "explanation": "A MAC address identifies a network interface at the data-link layer. A computer with Ethernet and Wi-Fi can therefore have multiple MAC addresses, and locally administered or randomized addresses need not be permanent hardware identifiers. A LAN and a broadcast domain contain many interfaces rather than having one identifying MAC address. UPnP is a discovery/control technology; a UPnP device may have a MAC-addressed interface, but that is not the definition being tested."
    },
    {
      "id": "net-004",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Two companies want to share data by using the Internet. Which type of network provides the solution?",
      "options": [
        "Ethernet",
        "Intranet",
        "Extranet",
        "Perimeter"
      ],
      "correct": 2,
      "explanation": "An extranet gives selected external organizations controlled access to shared organizational resources. That fits two companies collaborating over the Internet without making all internal resources public. An intranet is primarily for an organization's internal users. Ethernet specifies LAN connectivity rather than the external-access relationship. A perimeter network isolates exposed services; it can support an extranet but is not itself the partner-sharing model."
    },
    {
      "id": "net-005",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which technology can you use to extend an internal network across shared or public networks?",
      "options": [
        "VLAN",
        "Microsoft ASP.NET",
        "Microsoft .NET Framework",
        "VPN"
      ],
      "correct": 3,
      "explanation": "A VPN carries private-network traffic through a tunnel over a shared or public network, typically with authentication and encryption. That extends access beyond the local physical network. A VLAN separates Layer 2 broadcast domains on switching infrastructure but does not by itself secure traffic across the Internet. ASP.NET is a web application framework, and the .NET Framework is an application runtime/library platform; neither is the network-extension technology requested."
    },
    {
      "id": "net-006",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "One purpose of a perimeter network is to:",
      "options": [
        "Make resources available to the intranet",
        "Link campus area networks (CANs)",
        "Link local area networks (LANs)",
        "Make resources available to the Internet"
      ],
      "correct": 3,
      "explanation": "A perimeter network, or DMZ, can host Internet-facing services while firewall rules restrict their access to the trusted internal LAN. Thus making selected resources available to the Internet is its relevant purpose, not exposing every resource indiscriminately. Internal users may also access DMZ services, but that alone does not define a perimeter network. Linking LANs or campus networks is an interconnection/routing task and does not inherently provide the DMZ security separation."
    },
    {
      "id": "net-007",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A private network that allows members of an organization to exchange data is an:",
      "options": [
        "Extranet",
        "Ethernet",
        "Intranet",
        "Internet"
      ],
      "correct": 2,
      "explanation": "An intranet is a private organizational network or internal service environment where authorized members exchange information. The membership restriction is the decisive clue. An extranet extends controlled access to external partners. The Internet is the global public internetwork rather than an employee-only environment. Ethernet is a link-layer/physical networking technology that can carry intranet traffic, not a term describing the permitted audience."
    },
    {
      "id": "net-008",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each network type to its corresponding definition.",
      "dragItems": [
        {
          "id": "a",
          "text": "Extranet"
        },
        {
          "id": "b",
          "text": "Intranet"
        },
        {
          "id": "c",
          "text": "Internet"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Controlled access for authorized external business or educational partners",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Access only within an organization",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "System of interconnected networks",
          "correctItemId": "c"
        }
      ],
      "explanation": "Match Extranet to controlled access for authorized external partners, Intranet to organization-internal access, and Internet to the global system of interconnected networks. Business or educational use alone does not define an extranet; the external-partner relationship is the distinguishing clue. These terms describe audience and scope rather than cable types. An organization can use Internet connectivity for its extranet while restricting its intranet to internal users."
    },
    {
      "id": "net-009",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What technology takes data, breaks it into packets, and sends it over a network, sometimes using different routes for each packet?",
      "options": [
        "Circuit switching",
        "Connection switching",
        "Packet switching",
        "Network switching"
      ],
      "correct": 2,
      "explanation": "Packet switching divides traffic into independently handled units that share network links. Depending on the service and routing state, different packets may follow different paths; they are reassembled or processed at the destination. Circuit switching instead establishes an end-to-end circuit and reserves resources for the connection. “Connection switching” and “network switching” are not the specific standard contrast to circuit switching requested by this description."
    },
    {
      "id": "net-010",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What name does Windows Server 2008 R2 use for terminal service?",
      "options": [
        "MS telnet server",
        "MS primary services",
        "MS thin server",
        "Remote Desktop Service"
      ],
      "correct": 3,
      "explanation": "Windows Server 2008 R2 uses the name Remote Desktop Services for the role formerly called Terminal Services. It allows remote sessions and, in appropriate deployments, published applications. The option uses the singular “Service,” but clearly refers to that role. Telnet Server provides a different, text-terminal service. “MS primary services” and “MS thin server” are not the renamed Windows Server role."
    },
    {
      "id": "net-011",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What would you use to create VPN tunnels so users can connect to your internal network while at home using Windows Server 2008 R2?",
      "options": [
        "Microsoft RAS",
        "Microsoft RRAS",
        "Microsoft RDC",
        "Microsoft VPN Server"
      ],
      "correct": 1,
      "explanation": "Routing and Remote Access Service (RRAS) is the Windows Server component used for routing and remote-access VPN connections. In this scenario it terminates tunnels from users at home. RAS is a more general/older remote-access name, not the best role designation here. RDC is the Remote Desktop Connection client, which connects to desktop sessions rather than configuring a VPN gateway. “Microsoft VPN Server” is not the named Windows Server role in the choices."
    },
    {
      "id": "net-012",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "VPNs are implemented to provide:",
      "options": [
        "A secure connection within a private network",
        "A secure connection through public networks",
        "Additional encryption by using IPSec",
        "Additional security for selected computers"
      ],
      "correct": 1,
      "explanation": "The intended purpose is a secure connection through a public network so remote users or sites can exchange private traffic. A VPN may also cross a shared private transport, but the public-network answer captures the usual use case. It is not merely extra security for selected computers or an ordinary secure connection confined to one private LAN. IPsec is one possible VPN security mechanism, not a requirement for every VPN implementation."
    },
    {
      "id": "net-013",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A VPN is a/an:",
      "options": [
        "Encrypted connection across the Internet",
        "Virtual network within your LAN",
        "Communication tunnel between VLANs",
        "Personal network for your use only"
      ],
      "correct": 0,
      "explanation": "Of these choices, an encrypted connection across the Internet describes the usual remote-access or site-to-site VPN. A tunnel carries private traffic across an untrusted transport. Strictly, not all technologies called VPNs provide encryption, so the choice describes a common secure VPN rather than every provider VPN. A VLAN within a LAN, inter-VLAN communication, and a personal-use-only network do not define this tunneling service."
    },
    {
      "id": "net-014",
      "chapter": "echipamente",
      "type": "single",
      "question": "“A/an virtual private network (VPN)” protects a network's perimeter by monitoring traffic as it enters and leaves. What is correct instead?",
      "options": [
        "Extranet",
        "Firewall",
        "Intranet",
        "No change is needed"
      ],
      "correct": 1,
      "explanation": "Replace VPN with firewall. A firewall evaluates traffic entering or leaving a protected boundary and permits or denies it according to policy; stateful models also track connections. A VPN establishes a tunnel and is not, by itself, the general perimeter filtering function described. An extranet is controlled partner access, while an intranet is an internal network. Neither is the enforcement device, so leaving the original wording unchanged would confuse distinct functions."
    },
    {
      "id": "net-015",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each VPN connection type to its corresponding definition.",
      "dragItems": [
        {
          "id": "a",
          "text": "SSL VPN"
        },
        {
          "id": "b",
          "text": "Site-to-Site VPN"
        },
        {
          "id": "c",
          "text": "L2TP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Connects a remote user from the Internet",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Connects two private networks",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Creates an unencrypted connection (needs IPsec for encryption)",
          "correctItemId": "c"
        }
      ],
      "explanation": "Match SSL VPN to remote-user access over the Internet, site-to-site VPN to connectivity between two private networks, and L2TP to tunneling without intrinsic payload encryption. Modern “SSL VPNs” normally use TLS. A site-to-site tunnel joins gateways rather than just one user's client. L2TP supplies the tunnel but normally needs IPsec for confidentiality; it should not be confused with L2TP/IPsec, which combines those separate functions. The labels describe typical roles, not exclusive capabilities of every deployment."
    },
    {
      "id": "net-016",
      "chapter": "protocoale",
      "type": "single",
      "question": "What port does Remote Desktop Services use?",
      "options": [
        "443",
        "501",
        "389",
        "3389"
      ],
      "correct": 3,
      "explanation": "RDP normally uses port 3389, initially associated with TCP and also used with UDP by modern implementations. That is the service port being tested, although administrators can change it or publish access through an HTTPS Remote Desktop Gateway. Port 443 is normally HTTPS and is relevant to that gateway case, not the default direct RDP listener. Port 389 is LDAP. Port 501 is not the standard RDP port."
    },
    {
      "id": "net-017",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which umbrella technology category allows a remote user to connect securely to a corporate network over the Internet, rather than naming an individual tunneling/security protocol?",
      "options": [
        "VPN",
        "VPC",
        "PPTP",
        "IPSec"
      ],
      "correct": 0,
      "explanation": "VPN is the umbrella technology for protected remote access to a corporate network over the Internet. PPTP is an obsolete VPN tunneling protocol, while IPsec is a security suite commonly used to implement VPNs; neither is the general category requested. A VPC is an isolated virtual network in a cloud environment, not the remote-access connection itself. Choosing VPN therefore identifies the overall solution without implying that every implementation uses the same protocol."
    },
    {
      "id": "net-018",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which listed legacy, unencrypted command connects to a remote Telnet service to execute commands?",
      "options": [
        "Ftp",
        "nslookup",
        "telnet",
        "nbtstat"
      ],
      "correct": 2,
      "explanation": "The telnet command opens a Telnet remote terminal session, allowing commands to run on the remote host if its service accepts the connection. Standard Telnet does not encrypt credentials or session content, so SSH is preferred for secure administration. FTP transfers files rather than providing this terminal service. nslookup queries DNS. nbtstat examines NetBIOS-over-TCP/IP names and statistics, not an interactive remote command session."
    },
    {
      "id": "net-019",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A network that separates an organization's private network from a public network is a/an:",
      "options": [
        "Firewall",
        "Extranet",
        "Perimeter",
        "Internet"
      ],
      "correct": 2,
      "explanation": "A perimeter network, commonly a DMZ, is an isolated network segment between public-facing access and the trusted internal environment. It hosts services whose exposure should not grant direct access to the internal LAN. A firewall enforces separation but is a device/function rather than the network asked for. An extranet describes controlled partner access. The Internet is the public internetwork, not the separating segment."
    },
    {
      "id": "net-020",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "In local area network (LAN) topologies, the primary media access methods are: Choose two.",
      "options": [
        "Contention",
        "Negotiation",
        "Kerberos",
        "Token passing"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Contention and token passing are the two media-access categories in the choices. Under contention, stations compete for use of a shared medium; under token passing, a station transmits when it holds the token. “Negotiation” alone is not the named LAN media-access category here; speed/duplex negotiation is a different function. Kerberos authenticates users and services and does not determine which station may transmit on a shared LAN medium."
    },
    {
      "id": "net-021",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In a traditional hub-based Ethernet physical star, what is the central repeating device called?",
      "options": [
        "Bridge",
        "Server",
        "Segmenter",
        "Hub"
      ],
      "correct": 3,
      "explanation": "In a traditional hub-based physical star, every endpoint cable meets at the hub. The hub repeats incoming signals onto other ports and does not learn destination MAC addresses. A bridge filters traffic between link-layer segments rather than simply repeating it. A server provides services and need not be the central wiring point. “Segmenter” is not the standard name of this repeating device. Modern Ethernet stars normally use switches, but the stem explicitly specifies the older hub design."
    },
    {
      "id": "net-022",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "The topology of a local area network (LAN) is defined by the:",
      "options": [
        "Number of devices to connect",
        "Physical and logical characteristics",
        "Distance between workstations",
        "Type of cable being used"
      ],
      "correct": 1,
      "explanation": "Topology describes both physical arrangement and logical traffic relationships: where devices and links are placed, and how communication flows between them. The physical and logical characteristics option therefore covers the definition. Device count, workstation distance and cable type can influence topology selection, but each is only one design constraint. None alone tells whether the network is a star, ring, bus or mesh, or how its logical connectivity operates."
    },
    {
      "id": "net-023",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "On an IPv4 LAN, which kind of address must a host have to send IPv4 packets?",
      "options": [
        "Network account",
        "Table of all network nodes",
        "Host address",
        "Resource to share"
      ],
      "correct": 2,
      "explanation": "A host must have an IPv4 host address on its interface to originate ordinary IPv4 traffic on the LAN. That address identifies its network-layer source; a MAC address serves a different link-layer role. A network account is not needed merely to transmit IP packets. Hosts need not store a table of every network node, and a computer can communicate as a client without sharing any resource of its own."
    },
    {
      "id": "net-024",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which type of port is used to support VLAN traffic between two switches?",
      "options": [
        "Virtual port",
        "WAN port",
        "Trunk port",
        "LAN port"
      ],
      "correct": 2,
      "explanation": "A trunk port carries traffic for multiple VLANs between switches, normally using IEEE 802.1Q tags to identify VLAN membership. A native VLAN can be untagged depending on configuration. An access port normally belongs to one data VLAN, whereas the purpose here is preserving several VLANs across the link. “Virtual,” “WAN,” and “LAN” are not the specific switch-port mode requested; a LAN-facing physical port is not automatically a trunk."
    },
    {
      "id": "net-025",
      "chapter": "infrastructura",
      "type": "single",
      "question": "One reason to incorporate VLANs in a network is to:",
      "options": [
        "Increase the number of available IP addresses",
        "Increase the number of available MAC addresses",
        "Reduce the number of broadcast domains",
        "Reduce the number of nodes in a broadcast domain"
      ],
      "correct": 3,
      "explanation": "VLANs split a switched network into separate broadcast domains. Each resulting VLAN contains fewer nodes, so a broadcast need not reach all endpoints in the original larger domain. This generally increases, rather than reduces, the number of broadcast domains. VLAN creation does not manufacture additional IP or MAC addresses; address planning is separate. Communication between VLANs requires routing or an equivalent Layer 3 function."
    },
    {
      "id": "net-026",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each network topology to its characteristic.",
      "dragItems": [
        {
          "id": "a",
          "text": "Star"
        },
        {
          "id": "b",
          "text": "Ring"
        },
        {
          "id": "c",
          "text": "Mesh"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Has a central device",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Each node connects to two other nodes",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Each computer connects to every other computer",
          "correctItemId": "c"
        }
      ],
      "explanation": "A star puts each endpoint on a spoke to a central hub or switch, which explains the central-device description and makes endpoint additions straightforward. A simple ring joins each node to exactly two neighbors, closing one continuous path; it is not every node connected directly to all others. The all-pairs description is a full mesh, with n(n−1)/2 links and alternate paths at much higher cabling cost. A partial mesh has fewer connections, so the generic Mesh label here must be read as full mesh. Physical shape does not alone specify media access: a hub star shares a medium, while a switched star can have independent full-duplex links."
    },
    {
      "id": "net-027",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "To set lower security settings in Internet Explorer for an extranet site, add the site's URL to the “Local Intranet” zone. What is correct instead?",
      "options": [
        "Internet",
        "Trusted Sites",
        "Extranet Sites",
        "No change is needed"
      ],
      "correct": 1,
      "explanation": "Trusted Sites is the appropriate legacy Internet Explorer security zone for a vetted external partner site when policy allows less restrictive settings. Local Intranet is intended for internal sites, not automatically every extranet. The Internet zone is the normal external-site category and does not express the requested trust exception. There is no standard “Extranet Sites” zone. Lowering settings carries risk and should follow policy; the zone name is not a recommendation to trust arbitrary external URLs."
    },
    {
      "id": "net-028",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which Windows 7 console provides connection security rules for configuring IPsec?",
      "options": [
        "Windows Firewall with Advanced Security snap-in",
        "LAN adapter properties",
        "Remote Access snap-in",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Windows Firewall with Advanced Security exposes connection security rules for IPsec authentication and protection in Windows 7. Such rules are distinct from ordinary inbound/outbound filtering rules, though the same console manages both. LAN adapter properties configure interface settings rather than providing this policy rule console. Remote Access is not the requested Windows 7 IPsec rules interface. “No change” does not identify an alternative console and is not the correct response here."
    },
    {
      "id": "net-029",
      "chapter": "echipamente",
      "type": "single",
      "question": "You need to divide a network into three subnets. Which device should you use?",
      "options": [
        "Hub",
        "Bridge",
        "Router",
        "Segmenter"
      ],
      "correct": 2,
      "explanation": "A router connects distinct IP subnets and forwards packets between them using routes. Subnet masks and address allocation define the three subnets; the router provides their Layer 3 interconnection. A hub repeats Layer 1 signals and a conventional bridge forwards Layer 2 frames, so neither alone routes between IP subnets. “Segmenter” is not the standard Layer 3 device name. A multilayer switch could also route, but that is not among these choices."
    },
    {
      "id": "net-030",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "A coffee shop isolates public-facing and guest resources from its trusted payment and staff LAN. Which TWO listed resources belong on isolated public/guest segments rather than the trusted LAN?",
      "options": [
        "Network printer",
        "Web server",
        "File server",
        "Wi-Fi network",
        "Point of sale terminals"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "Place the public-facing web server and guest Wi-Fi on isolated segments rather than the trusted payment/staff LAN. They have different exposure and trust requirements: the web service accepts external access, and guest devices are not managed staff endpoints. This does not mean guest Wi-Fi and the web server must share one subnet or unrestricted access. Point-of-sale terminals need strong isolation from guests; internal file servers and printers are not inherently public-facing resources."
    },
    {
      "id": "net-031",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "An ordinary host on an IPv4 LAN needs which TWO listed interface/addressing components to exchange IPv4 traffic?",
      "options": [
        "Username and password",
        "Share name",
        "NIC",
        "IP address",
        "Table of all network nodes"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Select NIC and IP address: the network interface provides link connectivity and its IPv4 address supplies network-layer identity. A username/password is needed only for protected services, not basic packet exchange. A share name is unnecessary for a client-only host, and hosts need not store a table of every node. A mask and routes can also be required in a real configuration, but they are not offered here. Non-IP Ethernet nodes are outside the clarified IPv4 scope."
    },
    {
      "id": "net-032",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are two advantages of using star topology rather than ring topology in a computer lab workgroup? Choose two.",
      "options": [
        "Failure of a central device does not bring down the entire network",
        "A central connection point allows flexibility and scalability",
        "Data travels on redundant paths",
        "Failure of one endpoint cable normally affects only that endpoint"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "A star offers a central wiring point that makes adding and managing endpoints straightforward. Also, failure of one endpoint cable normally disconnects only that endpoint rather than breaking a serial ring path. These are the two stated advantages. Failure of the central hub or switch can bring down the entire star, so that option reverses the risk. A basic star does not inherently give endpoints redundant paths; redundancy requires extra links or devices."
    },
    {
      "id": "net-033",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are three characteristics of Ethernet network topology? Choose three.",
      "options": [
        "It uses tokens to avoid collisions",
        "It can use coaxial, twisted pair, and fiber optic media",
        "It comprises the largest share of networks in place today",
        "It is a non-switching protocol",
        "It can negotiate different transmission speeds"
      ],
      "correct": [
        1,
        2,
        4
      ],
      "explanation": "Ethernet has used coaxial cable historically and uses twisted-pair copper and fiber today. It is widely deployed, and compatible Ethernet interfaces can auto-negotiate supported speeds and duplex settings. Those are the three relevant characteristics. Token passing belongs to technologies such as Token Ring and FDDI, not standard Ethernet. Calling Ethernet non-switching is wrong because switching is central to modern Ethernet LANs. Auto-negotiation applies only where the particular Ethernet interfaces support it."
    },
    {
      "id": "net-034",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are two characteristics of the CSMA/CD access method? Choose two.",
      "options": [
        "It checks to see if a collision has been detected",
        "It does a round robin search for requests",
        "It signals its intent to transmit",
        "It waits until the transmission medium is idle"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "CSMA/CD listens for an idle medium before transmitting and detects collisions when simultaneous transmissions occur on shared half-duplex Ethernet. After a collision, stations stop and retry after a randomized backoff. It does not assign access by a round-robin request search or send an advance reservation announcing intent. Modern full-duplex switched Ethernet does not have collision contention on the point-to-point link, so CSMA/CD is a historical/shared-medium access concept here."
    },
    {
      "id": "net-035",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which statement about certificate-based enterprise wireless authentication is correct?",
      "options": [
        "802.1X with EAP-TLS uses certificates for mutual authentication",
        "Every 802.1X method requires a client certificate",
        "WEP requires client certificates",
        "WPA-PSK requires client certificates"
      ],
      "correct": 0,
      "explanation": "802.1X using EAP-TLS authenticates with certificates on both the client and authentication-server sides, enabling mutual authentication when certificates are correctly validated. Not every 802.1X EAP method requires a client certificate; other methods can authenticate users with credentials inside a protected tunnel. WEP and WPA-PSK do not require client certificates. PSK means a shared secret rather than the per-client certificate authentication specified in the question."
    },
    {
      "id": "net-036",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Perimeter network statements. Which variant is correct?",
      "options": [
        "A DMZ automatically allows all traffic to the internal LAN",
        "A DMZ commonly hosts public-facing servers; access between it and the LAN is controlled by firewall rules",
        "The internal LAN can never access a DMZ",
        "A DMZ is a synonym for the trusted internal LAN"
      ],
      "correct": 1,
      "explanation": "A DMZ commonly holds public-facing services while firewall policy limits traffic to and from the internal LAN. It is a separate trust zone, not a synonym for the trusted LAN. Creating a DMZ does not automatically allow all traffic inward. Conversely, the internal LAN can be permitted to access appropriate DMZ services; “never” is too absolute. The key captures controlled exposure rather than either unrestricted connectivity or a total prohibition."
    },
    {
      "id": "net-037",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In a legacy Windows security-zone configuration, Contoso policy assigns its private hr.contoso.com site to Local Intranet and its vetted external partner sales.northwindtrades.com to Trusted Sites. Which pair is correct, in sales/HR order?",
      "options": [
        "Internet; Internet",
        "Trusted Sites; Local Intranet",
        "Restricted Sites; Internet",
        "Local Intranet; Restricted Sites"
      ],
      "correct": 1,
      "explanation": "The policy explicitly maps sales.northwindtrades.com to Trusted Sites and hr.contoso.com to Local Intranet. Because the requested order is sales first and HR second, select Trusted Sites; Local Intranet. The other pairs either ignore the stated assignments or reverse/misclassify the sites. Domain names alone do not prove the correct zone; this answer follows the supplied legacy security policy, not a general rule that every partner site must receive reduced security."
    },
    {
      "id": "net-038",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which device terminates a digital leased WAN line such as T1 and interfaces it with a router?",
      "options": [
        "Analog modem",
        "Telco incoming router",
        "Packet switcher",
        "CSU/DSU"
      ],
      "correct": 3,
      "explanation": "A CSU/DSU terminates and interfaces a digital leased line such as T1 to customer networking equipment. Its channel service/data service functions address the digital carrier connection. An analog modem converts for an analog telephone service and is not the T1 interface requested. A telco router could contain suitable line hardware, but that generic description does not identify the termination function. “Packet switcher” likewise does not specify the digital circuit interface."
    },
    {
      "id": "net-039",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which listed access type commonly lets a nearby outsider attempt network access without touching a cable or using a telephone connection?",
      "options": [
        "Dial-up",
        "Wireless",
        "Broadband",
        "Leased line"
      ],
      "correct": 1,
      "explanation": "Wireless uses radio signals that may extend beyond the controlled premises, allowing a nearby outsider to receive signals or attempt association without plugging in. Dial-up needs a telephone connection, while the ordinary broadband/leased-line access cases involve provider links rather than this nearby radio-access path. This is an exposure distinction, not proof that wireless is always less secure: strong authentication/encryption can protect Wi-Fi, while badly configured wired services can be highly vulnerable."
    },
    {
      "id": "net-040",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which type of network covers the broadest area?",
      "options": [
        "WAN",
        "CAN",
        "LAN",
        "PAN"
      ],
      "correct": 0,
      "explanation": "A WAN spans broad geographic distances and can connect networks across cities, countries or continents. A campus area network covers an institution's campus, a LAN covers a limited local site, and a personal area network connects a person's nearby devices. Exact distance thresholds vary by technology and design, but the usual scope hierarchy makes WAN the broadest category among these options. This is geographic scope, not a claim that WAN links always have the highest speed."
    },
    {
      "id": "net-041",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following is a Layer 2 WAN protocol?",
      "options": [
        "Point-to-Point Protocol (PPP)",
        "Simple Network Management Protocol (SNMP)",
        "Transmission Control Protocol (TCP)",
        "Internet Protocol (IP)"
      ],
      "correct": 0,
      "explanation": "PPP is a data-link-layer protocol for point-to-point links, including historical WAN access. It encapsulates network-layer traffic and can negotiate link settings and authentication. IP operates at the network layer and TCP at the transport layer. SNMP is an application-layer management protocol. Therefore PPP, not the others, matches the Layer 2 requirement; the question is about functional layer rather than whether a protocol can appear in traffic crossing a WAN."
    },
    {
      "id": "net-042",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "Which TWO options name traditional WAN access services based on an on-demand telephone connection or a dedicated rented circuit?",
      "options": [
        "Token ring",
        "Ethernet",
        "Dial-up",
        "Leased line"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Dial-up is the on-demand telephone access service, and a leased line is the dedicated rented circuit. Token Ring and Ethernet identify networking technologies rather than those two access-service models. Ethernet can certainly be used in provider WAN services such as Metro Ethernet, so it should not be dismissed as universally LAN-only. The clarified question asks for the named telephone/dedicated-circuit service options, not every technology that can carry WAN traffic."
    },
    {
      "id": "net-043",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the bit rate for a North American T3 circuit?",
      "options": [
        "6.312 Mbit/s",
        "44.736 Mbit/s",
        "274.176 Mbit/s",
        "400.352 Mbit/s"
      ],
      "correct": 1,
      "explanation": "A North American T3/DS3 circuit carries 44.736 Mbit/s. This is its standardized aggregate line rate, not an arbitrary application throughput promise. The 6.312 Mbit/s option corresponds to a different hierarchy level, and 274.176 Mbit/s is associated with a higher digital signal level. 400.352 Mbit/s is not the T3 rate. Keep T3 distinct from T1 at 1.544 Mbit/s and from the approximate 45 Mbit/s shorthand."
    },
    {
      "id": "net-044",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A university has network links between various locations. Where would a T3 connection be appropriate?",
      "options": [
        "Server to network in the main campus server room",
        "Main campus to a large satellite campus",
        "Computer lab PC to lab printer",
        "Library laptop PC to Internet"
      ],
      "correct": 1,
      "explanation": "The main-campus to large-satellite-campus link is the WAN connection in this scenario, making it the appropriate historical use of a T3 leased service. T3 supplies roughly 44.736 Mbit/s across a telecommunications circuit. A server-room link or lab printer connection would ordinarily use local Ethernet rather than a carrier T3. A library laptop would use a LAN or Wi-Fi access connection, not directly terminate a T3 circuit."
    },
    {
      "id": "net-045",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two features of a Windows Server 2008 R2 server should you install to use that server as a software router? Choose two.",
      "options": [
        "Network Policy and Access Services",
        "Routing and Remote Access Services",
        "Remote Administration",
        "DirectAccess"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "In Windows Server 2008 R2, the Network Policy and Access Services role includes Routing and Remote Access Services, which supplies the routing functionality. The two selections therefore identify the parent role and relevant role service, not two unrelated routing protocols. Remote Administration is management access, not packet forwarding. DirectAccess is a remote connectivity solution and does not replace the RRAS role-service selection for the ordinary software-router setup asked for here."
    },
    {
      "id": "net-046",
      "chapter": "infrastructura",
      "type": "single",
      "question": "In a network diagram, where is a T3 connection most appropriate?",
      "options": [
        "Between two computers in the same lab",
        "Between a local PC and a printer",
        "Between a WAN/telecom link and the organization network/perimeter router",
        "Between a keyboard and a workstation"
      ],
      "correct": 2,
      "explanation": "A T3 belongs at the WAN/telecommunications handoff toward the organization's edge or perimeter router. It is a carrier circuit rather than a normal local endpoint cable. Two lab computers, a PC and printer, or a keyboard and workstation would use appropriate LAN or peripheral interfaces, not a T3 leased link. The question provides a textual location choice, so no missing diagram is required to distinguish the WAN boundary from local connections."
    },
    {
      "id": "net-047",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the primary disadvantage of X.25?",
      "options": [
        "Digital circuit",
        "Small data payloads",
        "Circuit switching",
        "Slow speeds"
      ],
      "correct": 3,
      "explanation": "Slow speeds are the intended major disadvantage of legacy X.25 relative to later WAN technologies. Its extensive hop-by-hop checking and older network environment add overhead and delay. It is packet-switched with virtual circuits, not a circuit-switched service in the sense claimed by that distractor. Being digital is not itself a disadvantage. Small payloads can contribute overhead, but the broad performance limitation is the best answer among the choices."
    },
    {
      "id": "net-048",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The _____________ is the largest WAN in the world.",
      "options": [
        "Internet",
        "Intranet",
        "WWW",
        "MSDN"
      ],
      "correct": 0,
      "explanation": "The Internet is the global interconnection of networks and is conventionally described in introductory material as the largest WAN. An intranet is an organization's private network. The World Wide Web is a collection of linked resources and services accessed over the Internet, not the underlying global network itself. MSDN is a Microsoft developer resource/community name, not a wide-area network of comparable scope."
    },
    {
      "id": "net-049",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which historical Web term describes interactive websites with user-generated content, such as blogs and wikis?",
      "options": [
        "1.0",
        "1.1",
        "2.0",
        "3.0"
      ],
      "correct": 2,
      "explanation": "Web 2.0 is the historical label associated with participatory websites, blogs, wikis and other user-generated content. It describes an evolution in how websites were used, not a literal wire-protocol version negotiation. Web 1.0 is commonly associated with primarily read-only sites. “1.1” is not the established name for this transition, and Web 3.0 has different, inconsistent uses such as semantic or decentralized-web visions rather than this particular historical classification."
    },
    {
      "id": "net-050",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is a logical connection through a packet-switched network, rather than a dedicated end-to-end physical wire, called?",
      "options": [
        "Virtual circuit",
        "Emulated circuit",
        "Joined circuit",
        "Multitasked circuit"
      ],
      "correct": 0,
      "explanation": "A virtual circuit is a logical path or connection provided across a packet-switched network. The network maintains connection identifiers/state without dedicating one continuous physical wire end to end. X.25 and Frame Relay are familiar examples of virtual-circuit services. “Emulated,” “joined” and “multitasked” circuit are not the standard term requested by this definition. A virtual circuit should not be confused with a physically reserved circuit merely because both offer connection-oriented service."
    },
    {
      "id": "net-051",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What replaced X.25?",
      "options": [
        "Frame relay",
        "ATM",
        "ISDN BRI",
        "DSL"
      ],
      "correct": 0,
      "explanation": "Frame Relay is the expected successor to X.25 in the historical WAN progression. It reduced much of X.25's per-hop error-control overhead and suited more reliable digital links. ATM also became an important WAN technology but is not the direct conventional replacement identified here. ISDN BRI is a digital access service and DSL is broadband over telephone copper; neither is the corresponding packet-switching successor to X.25 in this question."
    },
    {
      "id": "net-052",
      "chapter": "infrastructura",
      "type": "single",
      "question": "At what speed does a T3 line run?",
      "options": [
        "1.5 Mbps",
        "4.5 Mbps",
        "44.7 Mbps",
        "128 Mbps"
      ],
      "correct": 2,
      "explanation": "A T3 has an exact nominal rate of 44.736 Mbps, so 44.7 Mbps is the rounded option. The roughly 1.5 Mbps choice belongs to T1, not T3. Neither 4.5 Mbps nor 128 Mbps is the standardized T3 line rate. The distinction concerns the aggregate telecommunications bit rate; user application throughput will be lower because framing and protocol overhead consume some capacity."
    },
    {
      "id": "net-053",
      "chapter": "infrastructura",
      "type": "single",
      "question": "In Europe, what circuit would be similar to the T1 found in the United States?",
      "options": [
        "E1",
        "J1",
        "T2",
        "F1"
      ],
      "correct": 0,
      "explanation": "E1 is the corresponding common European digital carrier level, with a 2.048 Mbps line rate. It is similar in service role to a North American T1, although it is not identical in framing or capacity. J1 is the Japanese T1-related hierarchy, T2 is a different North American hierarchy level, and F1 is not the standard European equivalent in this set. T1 itself runs at 1.544 Mbps."
    },
    {
      "id": "net-054",
      "chapter": "infrastructura",
      "type": "single",
      "question": "How many B channels does an ISDN PRI support? Assume North American T1-based ISDN PRI.",
      "options": [
        "2",
        "8",
        "23",
        "48"
      ],
      "correct": 2,
      "explanation": "North American T1-based ISDN PRI provides 23 bearer channels plus one signaling D channel, commonly written 23B+D. Each B channel carries 64 kbps. Two B channels describes BRI rather than PRI. Eight and 48 are not the bearer-channel count for this specified service. The regional qualifier matters: E1-based PRI commonly provides 30 B channels, so a universal unqualified PRI count would be misleading."
    },
    {
      "id": "net-055",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What technology uses wires from the telephone company to provide broadband Internet connection?",
      "options": [
        "Cable",
        "DSL",
        "FDDI",
        "Frame relay"
      ],
      "correct": 1,
      "explanation": "DSL uses telephone-company copper pairs to provide broadband data, often alongside voice service through suitable filtering or splitting. Cable broadband instead uses the cable operator's coaxial/hybrid fiber network. FDDI is a 100 Mbps fiber LAN technology, not residential broadband over telephone wires. Frame Relay is a legacy WAN packet service rather than the usual broadband copper-loop technology described here."
    },
    {
      "id": "net-056",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which term describes the committed data rate specified in a Frame Relay service agreement?",
      "options": [
        "Committed Information Rate (CIR)",
        "Pivotal information route",
        "Next hop policy route",
        "Frame x frame route"
      ],
      "correct": 0,
      "explanation": "Committed Information Rate is the contracted Frame Relay data rate associated with the service agreement. It describes committed capacity under the provider's terms, not necessarily the physical access line's full speed or a guarantee of unlimited bursts. The other phrases are not recognized names for the commitment. “Next hop” is a routing concept, whereas this question asks about the service's bandwidth commitment."
    },
    {
      "id": "net-057",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What speed does a T1 run at?",
      "options": [
        "1.544 Mbps",
        "2.889 Mbps",
        "3.101 Gbps",
        "2.54 Mbps"
      ],
      "correct": 0,
      "explanation": "A T1 line operates at 1.544 Mbps. Its 24 basic 64 kbps channels account for 1.536 Mbps, with framing bringing the line rate to 1.544 Mbps. The 2.889 Mbps and 2.54 Mbps options are not the standardized T1 rate, and 3.101 Gbps is far outside its capacity. Do not substitute the European E1 rate of 2.048 Mbps or the much higher T3 rate."
    },
    {
      "id": "net-058",
      "chapter": "infrastructura",
      "type": "single",
      "question": "How fast is a DS0 circuit?",
      "options": [
        "32 Kbps",
        "64 Kbps",
        "128 Kbps",
        "1024 Kbps"
      ],
      "correct": 1,
      "explanation": "A DS0 is a 64 kbps digital channel, conventionally derived from 8,000 samples per second times eight bits per sample. A 32 kbps channel is half that rate; 128 kbps is two DS0-sized channels, and 1024 kbps is much larger. DS0 is a base digital signal unit rather than the aggregate T1 circuit, which combines 24 channels plus framing."
    },
    {
      "id": "net-059",
      "chapter": "infrastructura",
      "type": "single",
      "question": "X.25 and frame relay are examples of what type of WAN technology?",
      "options": [
        "Circuit switching",
        "Connection switching",
        "Packet switching",
        "Network switching"
      ],
      "correct": 2,
      "explanation": "X.25 and Frame Relay are packet-switched WAN technologies that commonly provide virtual circuits. They share transport links among traffic rather than reserving a dedicated physical end-to-end circuit for each conversation. Virtual-circuit state does not turn them into ordinary circuit switching. “Connection switching” and “network switching” are nonspecific alternatives rather than the standard technology category that includes both examples."
    },
    {
      "id": "net-060",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What part of the network is the point where the administrator's responsibility ends and the telecommunications provider's responsibility begins?",
      "options": [
        "Last mile",
        "Demarc",
        "Router array",
        "PAD interface"
      ],
      "correct": 1,
      "explanation": "The demarcation point, or demarc, marks the service responsibility boundary between customer and telecommunications provider. The exact physical handoff and maintenance obligations depend on the agreement, but that boundary is what the question describes. The last mile is the access portion of the provider network, not necessarily the responsibility boundary. A router array describes equipment, and PAD refers to packet assembly/disassembly rather than the general demarcation point."
    },
    {
      "id": "net-061",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which factor has the biggest impact on data transmission speed in a wireless network? Compare theoretical maximum rates of the listed standards, assuming otherwise equivalent conditions.",
      "options": [
        "The access method used for the network",
        "The transmission standard of the equipment used",
        "The use of strong encryption",
        "The transmission wattage rating used on the NIC"
      ],
      "correct": 1,
      "explanation": "Under the stated comparison of theoretical maximum rates, the equipment's transmission standard is the determining choice. Standards define modulation, channel widths, spatial streams and supported PHY rates. Access method, encryption implementation and transmit power can affect performance in practice, but are not the defining answer under otherwise equivalent conditions. Higher transmit wattage alone does not proportionally increase a link's nominal bit rate. Actual throughput also depends on contention, signal quality and overhead."
    },
    {
      "id": "net-062",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which of the following uses a tunneling protocol?",
      "options": [
        "Internet",
        "VPN",
        "Extranet",
        "VLAN"
      ],
      "correct": 1,
      "explanation": "A VPN commonly encapsulates private traffic in a tunnel across another network, making VPN the intended choice. The Internet, extranet and VLAN describe scope or segmentation rather than inherently requiring that tunnel. VLAN tagging is not itself VPN tunneling. Some extranet services may be reached through a VPN, and the Internet carries tunnels, but those facts do not make tunneling their defining feature. Encryption and tunneling are related but separate functions."
    },
    {
      "id": "net-063",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "Which two are published IEEE 802.11 wireless transmission standards? Choose two.",
      "options": [
        "802.11f",
        "802.11g",
        "802.11k",
        "802.11m",
        "802.11n"
      ],
      "correct": [
        1,
        4
      ],
      "explanation": "802.11g and 802.11n are the intended wireless transmission amendments: g supports a nominal 54 Mbps in 2.4 GHz, while n adds features such as MIMO and wider channels. The distinction is transmission capability, not simply whether a suffix ever appeared in IEEE work. 802.11k concerns radio resource measurement, 802.11f concerned inter-access-point operation, and 802.11m refers to maintenance activity. Thus they are not the two PHY-generation choices requested."
    },
    {
      "id": "net-064",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What happens when an 802.11b node starts broadcasting within the range of an 802.11g access point?",
      "options": [
        "The access point will transmit, but the node will be unable to receive",
        "A connection will be established",
        "Both will be unable to transmit",
        "The node will transmit, but the access point will be unable to receive"
      ],
      "correct": 1,
      "explanation": "An 802.11g access point can normally support 802.11b clients because both use the 2.4 GHz band and g includes backward-compatible operation. Thus a connection can be established if compatibility mode, channel, credentials and security settings allow it. The options claiming inherently one-way communication or complete inability to transmit are not the normal result. Mere radio range is not an authentication guarantee, and a g-only configuration can deliberately exclude b clients."
    },
    {
      "id": "net-065",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which technology provides the highest bit rate?",
      "options": [
        "T1",
        "E1",
        "DS3",
        "ISDN"
      ],
      "correct": 2,
      "explanation": "DS3 has a nominal 44.736 Mbps rate, greater than T1 at 1.544 Mbps or E1 at 2.048 Mbps. The conventional ISDN BRI/PRI services intended here also operate below DS3. Therefore DS3 is the highest-rate listed carrier option. ISDN without a service qualifier is a broad family, but the question's introductory comparison concerns ordinary access services, not an unlimited claim about every possible ISDN-derived implementation."
    },
    {
      "id": "net-066",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which wireless authentication method provides the highest level of security? Select the strongest of the listed legacy choices, not the newest Wi-Fi security standard.",
      "options": [
        "Wired Equivalency Privacy (WEP)",
        "IEEE 802.11n",
        "Wi-Fi Protected Access (WPA)",
        "IEEE 802.11a"
      ],
      "correct": 2,
      "explanation": "WPA is stronger than WEP among the listed legacy security choices. WEP has fundamental cryptographic weaknesses and should not be used. 802.11a and 802.11n identify wireless transmission standards, not authentication/security methods competing with WPA. This answer is deliberately limited to these options: it does not claim original WPA/TKIP is a modern best practice or stronger than WPA2-AES or WPA3, which are absent from the choices."
    },
    {
      "id": "net-067",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the maximum nominal PHY data rate of IEEE 802.11g?",
      "options": [
        "2.4 GHz",
        "54 GHz",
        "2.4 Mbps",
        "54 Mbps"
      ],
      "correct": 3,
      "explanation": "802.11g has a maximum nominal PHY rate of 54 Mbps. Its radio band is 2.4 GHz, which is a frequency, not a data rate. Thus 2.4 GHz is a plausible band description but cannot answer the speed question. 54 GHz is neither its normal band nor a throughput unit, and 2.4 Mbps is not its maximum rate. Real application throughput is lower than the 54 Mbps PHY value because of contention and protocol overhead."
    },
    {
      "id": "net-068",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each 802.11 standard to its characteristics.",
      "dragItems": [
        {
          "id": "a",
          "text": "802.11a"
        },
        {
          "id": "b",
          "text": "802.11b"
        },
        {
          "id": "c",
          "text": "802.11g"
        },
        {
          "id": "d",
          "text": "802.11n"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "5 GHz / 54 Mbps",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "2.4 GHz / 11 Mbps",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "2.4 GHz / 54 Mbps",
          "correctItemId": "c"
        },
        {
          "id": "z4",
          "label": "2.4–5 GHz / 65–600 Mbps",
          "correctItemId": "d"
        }
      ],
      "explanation": "802.11a uses 5 GHz and reaches 54 Mbps; b uses 2.4 GHz and reaches 11 Mbps. 802.11g uses 2.4 GHz with faster OFDM modes up to 54 Mbps, distinguishing it from b despite sharing that band. 802.11n adds MIMO spatial streams, optional 40-MHz channels and aggregation, allowing operation in either band and a maximum 600 Mbps with four streams and suitable settings. Its listed 65 Mbps is one common configuration, not an absolute minimum. Matching only speed would confuse a with g; matching only band would confuse b with g. GHz measures radio frequency, while Mbps is nominal signaling rate, not guaranteed file-transfer throughput."
    },
    {
      "id": "net-069",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Security is a concern on wireless networks due to:",
      "options": [
        "The radio broadcast access method",
        "Spread spectrum issues",
        "Frequency modulation issues",
        "The potential for cross-talk"
      ],
      "correct": 0,
      "explanation": "Radio transmissions can extend beyond a building's controlled physical boundary, allowing nearby parties to receive signals or attempt association. That exposure explains the security concern and the need for strong authentication and encryption. Spread spectrum and frequency modulation are radio techniques, not inherently the security vulnerability requested. Crosstalk is unwanted coupling/interference and primarily concerns signal quality; it does not describe unauthorized reception as directly as the broadcast nature of radio access."
    },
    {
      "id": "net-070",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The IEEE standards 802.11a, b, g, and n are collectively known as what?",
      "options": [
        "WiMAX",
        "Bluetooth",
        "WiFi",
        "Mobile ad hoc networks"
      ],
      "correct": 2,
      "explanation": "The 802.11a/b/g/n wireless LAN family is commonly called Wi-Fi. WiMAX refers to a different broadband wireless family, associated with IEEE 802.16. Bluetooth is a different short-range personal-area technology. A mobile ad hoc network is an organizational arrangement without fixed infrastructure, not the collective commercial name for these 802.11 generations. Wi-Fi networks can use infrastructure or certain ad hoc modes depending on equipment and standard support."
    },
    {
      "id": "net-071",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which listed IEEE Wi-Fi standard introduced MIMO and can operate in the 2.4 GHz or 5 GHz band?",
      "options": [
        "802.11a",
        "802.11b",
        "802.11g",
        "802.11n"
      ],
      "correct": 3,
      "explanation": "802.11n introduced MIMO into this set of Wi-Fi generations and can use either the 2.4 GHz or 5 GHz band. Multiple spatial streams and other enhancements increase its possible data rate. 802.11a operates at 5 GHz and b/g at 2.4 GHz, but none of those earlier listed generations supplies the n feature combination. Dual-band capability does not mean every n device necessarily supports both bands or uses both simultaneously."
    },
    {
      "id": "net-072",
      "chapter": "infrastructura",
      "type": "single",
      "question": "“WEP” wireless encryption is the most susceptible to interception and decryption. What is the correct answer?",
      "options": [
        "WPA-AES",
        "WPA2",
        "WPA-PSK",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "No change is needed: WEP is the weakest listed wireless encryption choice. Its design permits practical key-recovery attacks, so capturing sufficient traffic can compromise confidentiality. WPA-PSK is not the same mechanism, and WPA2 with appropriate AES-based protection is stronger when properly configured. “WPA-AES” is imprecise terminology but does not make WEP secure. A weak passphrase can harm stronger systems too; the comparison here concerns WEP's intrinsic protocol weaknesses."
    },
    {
      "id": "net-073",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which wireless problem is specifically caused by unwanted competing electromagnetic emissions disrupting the desired radio signal?",
      "options": [
        "Fading",
        "Attenuation",
        "Interference",
        "Diffraction"
      ],
      "correct": 2,
      "explanation": "Interference is unwanted electromagnetic energy disrupting reception of the desired wireless signal. Fading is variation in received strength, attenuation is loss over distance/obstacles, and diffraction is wave bending around an obstruction. Those phenomena also involve electromagnetic waves, but they are not specifically competing emissions. Identifying the interference source or choosing a better channel can help; increasing signal power alone does not necessarily solve contention or unwanted transmissions."
    },
    {
      "id": "net-074",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which access-control framework supports EAP-TLS certificate authentication in an enterprise Wi-Fi network?",
      "options": [
        "802.1X",
        "WPA2-PSK",
        "WPA-PSK",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "802.1X is the port-based access-control framework that can carry EAP authentication, including certificate-based EAP-TLS, through an authenticator to an authentication server. WPA2-PSK and WPA-PSK use a pre-shared secret rather than this enterprise EAP-TLS identity model. They can secure radio traffic but do not supply the requested certificate authentication framework. “No change is needed” does not identify a competing mechanism and is not the answer to this direct question."
    },
    {
      "id": "net-075",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Wireless bridge statements. Which variant is correct?",
      "options": [
        "Can connect Ethernet LANs wirelessly: True; inherently boosts an AP transmitter power: False; always works only in pairs: False",
        "All statements are True",
        "Cannot connect Ethernet LANs; always boosts AP transmitter power",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "A wireless bridge can join Ethernet LAN segments over a radio link, so that statement is true. It does not inherently increase another access point's transmitter power; bridging traffic and amplifying a radio transmitter are different functions. Wireless bridging also supports designs such as point-to-multipoint, so it is not universally restricted to one exclusive pair. Those distinctions make the first combined option correct and rule out the all-true and all-false alternatives."
    },
    {
      "id": "net-076",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of the following is not a characteristic of 802.11n?",
      "options": [
        "Frame aggregation",
        "Channel bonding",
        "RFI protection",
        "MIMO"
      ],
      "correct": 2,
      "explanation": "RFI protection is not an intrinsic 802.11n feature that guarantees immunity to radio interference. The other three are actual n enhancements: frame aggregation reduces overhead, channel bonding permits wider channels, and MIMO supports multiple antennas/spatial streams. These features can improve capacity or robustness but cannot eliminate interference. The negative wording matters: select the item that is not a characteristic rather than one of the well-known performance features."
    },
    {
      "id": "net-077",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which of the following determines the media access method used in a network?",
      "options": [
        "Number of hosts connected",
        "Number of domain servers",
        "Maximum speed of the media",
        "Topology and protocols"
      ],
      "correct": 3,
      "explanation": "Topology and the protocols in use determine how access to the medium is organized. For example, shared Ethernet contention and token-based logical rings employ different rules. Host count and the number of domain servers can affect load or administration, not define the access method. Maximum media speed is a link capability, not the rule deciding who transmits. Physical topology alone is also insufficient, which is why the combined topology-and-protocol choice is strongest."
    },
    {
      "id": "net-078",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In which physical network topology is each computer connected to a central point?",
      "options": [
        "Star",
        "Mesh",
        "Ring",
        "Bus"
      ],
      "correct": 0,
      "explanation": "A physical star connects every endpoint to a central hub, switch or other concentrator. Each endpoint has its own spoke to that center rather than connecting directly to all peers. A mesh offers multiple peer links, a ring joins neighbors in a loop, and a bus places devices on a shared backbone. The word physical distinguishes the wiring arrangement from logical traffic behavior; an older hub-based star can still behave as one shared collision medium."
    },
    {
      "id": "net-079",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A characteristic of the mesh topology is that it:",
      "options": [
        "Uses a central hub",
        "Cannot use wired connections",
        "Uses redundant paths",
        "Cannot use wireless connections"
      ],
      "correct": 2,
      "explanation": "Mesh topology provides redundant paths through multiple interconnections. That redundancy can preserve connectivity after a link failure if routing or bridging control uses an alternate path correctly. A single central hub characterizes a star, not a mesh. Meshes can be built with wired links or wireless links, so neither categorical prohibition is correct. Full mesh connects every pair directly; partial mesh retains some redundancy without requiring all possible links."
    },
    {
      "id": "net-080",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are two characteristics of a full mesh network topology? Choose two.",
      "options": [
        "It is fault tolerant because of redundant connections",
        "Every node connects to every other node",
        "It works best for a large number of nodes",
        "It requires less cabling than star or ring"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "In a full mesh, every node connects directly to every other node, providing redundant connectivity. With n nodes, the number of undirected links is n(n−1)/2, so cabling and port requirements grow quickly. That makes a large full mesh expensive, not inherently the best choice for many nodes. It also generally requires more links than a simple star or ring. Redundancy improves fault tolerance but does not remove shared power or device-failure risks."
    },
    {
      "id": "net-081",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What speed does FDDI use?",
      "options": [
        "10 Mbps",
        "44 Mbps",
        "54 Mbps",
        "100 Mbps"
      ],
      "correct": 3,
      "explanation": "FDDI's nominal data rate is 100 Mbps. Its dual-ring design provides resilience; it should not be interpreted as automatically providing 200 Mbps of usable endpoint throughput. Ten Mbps is associated with earlier Ethernet, 54 Mbps with Wi-Fi a/g, and 44 Mbps resembles a rounded T3 rate. None of those is the standardized FDDI rate being tested."
    },
    {
      "id": "net-082",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What topology does FDDI use?",
      "options": [
        "Bus",
        "Star",
        "Ring",
        "Mesh"
      ],
      "correct": 2,
      "explanation": "FDDI uses a dual-ring architecture, traditionally with counter-rotating primary and secondary rings. The secondary path can provide recovery around a failure. It is therefore classified as ring rather than bus, star or mesh in this introductory topology question. Concentrators can alter the physical cabling arrangement, but that does not change the logical FDDI token-ring architecture the item asks about."
    },
    {
      "id": "net-083",
      "chapter": "echipamente",
      "type": "single",
      "question": "A network device that associates a MAC address with a port is a:",
      "options": [
        "DSL modem",
        "Hub",
        "Router",
        "Switch"
      ],
      "correct": 3,
      "explanation": "A switch learns source MAC addresses on ingress ports and uses its forwarding table to select the output port for known destination MAC addresses. A hub merely repeats signals and does not learn this mapping. A router primarily makes forwarding decisions using destination IP prefixes. A DSL modem terminates a broadband access link; combined home devices may include a switch, but that extra function is not what “modem” defines."
    },
    {
      "id": "net-084",
      "chapter": "echipamente",
      "type": "single",
      "question": "A Layer 2 device that connects multiple computers within a network is a:",
      "options": [
        "Repeater",
        "Switch",
        "Router",
        "Packet"
      ],
      "correct": 1,
      "explanation": "A conventional Ethernet switch connects multiple endpoints and forwards frames at Layer 2 using MAC addresses. A repeater works at Layer 1 and regenerates signals without frame-level forwarding decisions. A router works at Layer 3 and connects IP networks. A packet is a unit of data, not a connecting device. Multilayer switches exist, but the unqualified switch option is the standard Layer 2 device intended here."
    },
    {
      "id": "net-085",
      "chapter": "echipamente",
      "type": "single",
      "question": "In addition to switching, multilayer switches also:",
      "options": [
        "Provide Layer 3 routing functions",
        "Interface only with CAT3",
        "Support only 10 MB LAN ports",
        "Operate only by Layer 1 and 2 protocols"
      ],
      "correct": 0,
      "explanation": "A multilayer switch adds Layer 3 routing functions to ordinary Layer 2 switching, often supporting inter-VLAN routing. It is not limited to CAT3 cabling or 10-megabit ports, and “10 MB” would denote bytes rather than the usual bit-rate notation. Saying it operates only at Layers 1 and 2 contradicts the extra layer capability. Actual routing features depend on the model and configuration, not merely the presence of Ethernet ports."
    },
    {
      "id": "net-086",
      "chapter": "echipamente",
      "type": "single",
      "question": "One reason to replace an unmanaged switch with a managed switch is to:",
      "options": [
        "Manage routing tables",
        "Support multiple VLANs",
        "Reduce collision domains",
        "Route between networks"
      ],
      "correct": 1,
      "explanation": "A managed switch permits configuration of features such as multiple VLANs, making it suitable for deliberate Layer 2 segmentation. An unmanaged switch generally offers little or no administrative control. Managing routing tables and routing between networks require Layer 3 capability, which not every managed switch has. Both unmanaged and managed switches already separate collision domains per port, so reducing collision-domain count is not the distinguishing advantage."
    },
    {
      "id": "net-087",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which device uses a routing table to associate destination IP prefixes with next hops and outgoing interfaces?",
      "options": [
        "Switch",
        "Router",
        "Hub",
        "DSL modem"
      ],
      "correct": 1,
      "explanation": "A router consults routes that associate destination IP prefixes with next hops and/or outgoing interfaces, using the most-specific matching route. An ordinary Layer 2 switch uses MAC forwarding information instead. A hub has no such forwarding table and simply repeats signals. A DSL modem provides access-link termination, although integrated consumer devices may also contain a router. The routing function, not the combined product label, determines the answer."
    },
    {
      "id": "net-088",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which network device interconnects computers in a workgroup, can be remotely configured, and provides the best throughput?",
      "options": [
        "Unmanaged switch",
        "Hub",
        "Router",
        "Managed switch"
      ],
      "correct": 3,
      "explanation": "A managed switch combines switched LAN forwarding with administrative configuration and monitoring, fitting both the workgroup interconnection and remote-configuration requirements. An unmanaged switch can provide similar wire-speed throughput but lacks the required management facilities; “managed” alone does not inherently make forwarding faster. A hub shares bandwidth and collision exposure. A router primarily interconnects different IP networks rather than supplying this workgroup's ordinary high-throughput Layer 2 access."
    },
    {
      "id": "net-089",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "What are two differences between switches and hubs? Choose two.",
      "options": [
        "Switches are slower than hubs",
        "Switches send data to all computers for efficiency",
        "Switches can send and receive data at the same time",
        "Switches identify the intended destination of received data"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Switches can support full-duplex links, transmitting and receiving simultaneously, and can use destination MAC information to forward known unicast frames toward the intended receiver. Hubs repeat signals across one shared half-duplex collision domain. A switch does not deliberately send all data to every computer for efficiency, although broadcasts and unknown unicasts are flooded within the VLAN. Switches are not generally slower than hubs; they allow independent concurrent link use."
    },
    {
      "id": "net-090",
      "chapter": "echipamente",
      "type": "single",
      "question": "Switch statements. Which variant is correct? Assume a known unicast destination MAC address, not an unknown-unicast or broadcast frame.",
      "options": [
        "Unicast to one destination port – True; floods unknown destination – True; broadcasts only to uplink – False",
        "All statements are True",
        "Unicast to all ports – True; floods unknown destination – False; broadcasts only to uplink – True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "For a known unicast destination, the switch normally forwards to the learned destination port. For an unknown unicast destination, it floods eligible ports in the VLAN other than the ingress port. Broadcast frames are also flooded within that broadcast domain, not only sent to an uplink. These three facts make the first combined choice correct. Flooding is constrained by VLAN membership and forwarding state; it does not mean every physical port in every VLAN receives the frame."
    },
    {
      "id": "net-091",
      "chapter": "echipamente",
      "type": "single",
      "question": "One advantage of dynamic routing is that it:",
      "options": [
        "Automatically maintains routing tables",
        "Limits traffic derived from routing protocols",
        "Reduces broadcast traffic",
        "Automatically enables DHCP"
      ],
      "correct": 0,
      "explanation": "Dynamic routing protocols exchange reachability information and update routing tables as topology or metrics change. That automatic maintenance is the advantage over individually configured static routes. Routing exchanges themselves add overhead, so dynamic routing does not inherently minimize protocol traffic or reduce broadcasts in every design. DHCP distributes host configuration and is separate from learning routes; enabling a routing protocol does not automatically enable a DHCP service."
    },
    {
      "id": "net-092",
      "chapter": "echipamente",
      "type": "single",
      "question": "A router's static route is set by the:",
      "options": [
        "Adjacent network",
        "Next upstream router",
        "Network administrator",
        "Routing protocol"
      ],
      "correct": 2,
      "explanation": "A static route is configured by the network administrator, directly or through management automation. Unlike dynamically learned routes, it does not arise from a routing protocol's neighbor exchanges. An adjacent network or upstream router does not automatically define the local router's static configuration. Its next hop may point at an upstream router, but that destination is a route parameter, not the actor responsible for configuring it."
    },
    {
      "id": "net-093",
      "chapter": "protocoale",
      "type": "single",
      "question": "The query protocol used to locate resources on a network is:",
      "options": [
        "UDP",
        "LDAP",
        "Tracert",
        "Telnet"
      ],
      "correct": 1,
      "explanation": "LDAP queries and manages directory information, such as directory entries describing users, computers and published resources. It is the relevant application protocol among these choices. UDP is a transport protocol and does not itself define directory queries. tracert displays a path toward a destination, and Telnet supplies a remote terminal session. Neither is a directory query protocol. LDAP does not imply that every resource on every network is automatically discoverable."
    },
    {
      "id": "net-094",
      "chapter": "echipamente",
      "type": "single",
      "question": "The function of a router is to:",
      "options": [
        "Provide IP subnet masks for hosts",
        "Forward traffic to other networks",
        "Broadcast routing tables to clients",
        "Store tables for name resolution"
      ],
      "correct": 1,
      "explanation": "A router forwards packets between IP networks using its routing information. It selects an appropriate next hop or output interface for the destination. Supplying host subnet masks is normally a DHCP or manual configuration function, not routing itself. Routers may exchange routing information with peers, but broadcasting tables to clients is not their defining purpose. Name-resolution tables belong to DNS or other naming mechanisms rather than the core forwarding task."
    },
    {
      "id": "net-095",
      "chapter": "echipamente",
      "type": "single",
      "question": "If a router cannot determine the next hop for a packet, the router will: Assume a default route is configured and no more-specific matching route exists.",
      "options": [
        "Forward the packet to the default route",
        "Send the packet back to the source",
        "Broadcast the packet",
        "Store the packet in memory"
      ],
      "correct": 0,
      "explanation": "With no more-specific matching route and a configured default, the router forwards according to the default route. The default is the least-specific prefix and is used only when a better match is absent. The router does not broadcast the packet, return the original packet to its source, or store it indefinitely. Without a usable route, it would normally discard the packet and may send an ICMP error; that is not the stated case."
    },
    {
      "id": "net-096",
      "chapter": "protocoale",
      "type": "single",
      "question": "If a router separates a DHCP server from its clients, the clients will: Assume no DHCP relay is configured on the router.",
      "options": [
        "Immediately lose connectivity to all segments",
        "Be unable to obtain their leases from the server",
        "Immediately lose connectivity to the local segment",
        "Receive an immediate renewal"
      ],
      "correct": 1,
      "explanation": "Initial DHCP discovery is broadcast-based, and an ordinary router does not forward that local broadcast to a server in another subnet. Without a relay, these clients cannot obtain new leases from that remote server. They do not necessarily lose all connectivity immediately: an existing lease can remain valid, and local communication may continue. Nor is an immediate renewal guaranteed. A properly configured relay would bridge the discovery exchange at the application level."
    },
    {
      "id": "net-097",
      "chapter": "protocoale",
      "type": "single",
      "question": "IP routers on the Internet forward traffic using the IP layer of the TCP/IP suite. Is TCP/IP the correct suite in this statement?",
      "options": [
        "HTTP",
        "FTP",
        "SNMP",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "No change is needed: Internet routers forward using IP within the TCP/IP suite. They do not need every packet to use TCP, since IP can carry UDP, ICMP and other protocols too. HTTP and FTP are application protocols, and SNMP is for management. None is a replacement network-layer suite for ordinary Internet forwarding. Distinguish the suite's conventional TCP/IP name from the specific IP header used for the forwarding decision."
    },
    {
      "id": "net-098",
      "chapter": "echipamente",
      "type": "single",
      "question": "“Dynamic routing” is fault tolerant. What is correct? Assume an alternate usable path exists and the routing protocol converges after failure.",
      "options": [
        "Static routing",
        "Default route",
        "Least cost routing",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "No change is needed under the stated assumptions. Dynamic routing can detect changes and converge on an alternate usable path after failure. This is recovery after convergence, not a promise of instantaneous or loss-free failover. A static route does not ordinarily adapt without additional tracking or intervention, and a default route alone does not ensure redundancy. “Least cost” describes route selection by a metric rather than establishing fault tolerance by itself."
    },
    {
      "id": "net-099",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is an example of a Layer 3 device that connects multiple computers and networks?",
      "options": [
        "Packet",
        "Repeater",
        "Switch",
        "Router"
      ],
      "correct": 3,
      "explanation": "A router is the conventional Layer 3 device that forwards traffic between networks. A repeater regenerates Layer 1 signals, while an ordinary switch forwards Layer 2 frames within a LAN or VLAN. A packet is data, not a device. Multilayer switches can also route, but the unqualified switch option does not establish that additional capability, making router the intended answer among the choices."
    },
    {
      "id": "net-100",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which metric does Routing Information Protocol (RIP) use to determine the least costly route?",
      "options": [
        "Delay",
        "Host ID",
        "Hop count",
        "Interface"
      ],
      "correct": 2,
      "explanation": "RIP selects routes using hop count, with each traversed router contributing to the metric. A reachable route can have at most 15 hops; 16 represents infinity/unreachable. RIP does not choose paths by measured delay, a host identifier or the interface name. Thus a path with fewer hops can be preferred even if another path has greater bandwidth, which is an important limitation of this simple metric."
    },
    {
      "id": "net-101",
      "chapter": "protocoale",
      "type": "single",
      "question": "Quality of Service (QoS) statements. Which variant is correct?",
      "options": [
        "Defines priority traffic – True; controls bandwidth – True; assigns protocols dynamically – False",
        "All statements are True",
        "Defines priority – False; controls bandwidth – False; assigns protocols dynamically – True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "QoS can classify traffic, prioritize delay-sensitive flows and control bandwidth through mechanisms such as queuing, policing and shaping. It does not dynamically assign application protocols to computers. Therefore the first two statements are true and the third false. QoS manages contention and service treatment; it cannot create unlimited physical capacity, and marking traffic alone does not guarantee every intervening network will honor the requested priority."
    },
    {
      "id": "net-102",
      "chapter": "echipamente",
      "type": "single",
      "question": "________ is a route that must be manually defined on each router.",
      "options": [
        "Static",
        "Dynamic",
        "Persistent",
        "Global"
      ],
      "correct": 0,
      "explanation": "A static route is explicitly configured rather than learned through a routing protocol. Each router needing that particular static information must have suitable configuration, although default routes and automation can reduce the administrative work. Dynamic routes are learned and updated automatically. A persistent route is one retained across restart, which describes lifetime rather than learning method. “Global” does not identify the manual route category."
    },
    {
      "id": "net-103",
      "chapter": "echipamente",
      "type": "single",
      "question": "What feature within Windows allows the server to act as a router?",
      "options": [
        "IPSec",
        "DHCP",
        "IP forwarding",
        "RDC"
      ],
      "correct": 2,
      "explanation": "IP forwarding allows a Windows computer to pass IP packets between interfaces instead of treating all received traffic as locally destined. Routes and appropriate service/firewall configuration are also necessary for a working router. IPsec protects IP traffic, DHCP leases host settings, and RDC provides remote desktop access. None of those functions by itself enables the fundamental packet-forwarding behavior asked for here."
    },
    {
      "id": "net-104",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which type of serial WAN communication uses a clock signal to synchronize sender and receiver?",
      "options": [
        "Static route",
        "Dynamic route",
        "PPTP route",
        "Synchronous serial communication"
      ],
      "correct": 3,
      "explanation": "Synchronous serial communication uses timing/clocking to keep sender and receiver aligned. One side or the circuit provides the clock for transmission. Static and dynamic routes describe how forwarding information is configured or learned, not how a serial link synchronizes bits. PPTP is a tunneling protocol, not a clocking method. Distinguish link timing from the routing information carried over the link."
    },
    {
      "id": "net-105",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which classic distance-vector routing protocol uses hop count as its metric?",
      "options": [
        "RIP",
        "OSPF",
        "BGP",
        "IGMP"
      ],
      "correct": 0,
      "explanation": "RIP is a classic distance-vector protocol and uses hop count as its metric. OSPF is link-state and uses cost, commonly based on interface bandwidth. BGP is a path-vector interdomain protocol with policy-based path selection. IGMP manages IPv4 multicast group membership rather than distributing unicast routes. Thus only RIP matches both the protocol family and the specified metric."
    },
    {
      "id": "net-106",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which link-state routing protocol computes shortest paths using Dijkstra’s algorithm?",
      "options": [
        "RIP",
        "OSPF",
        "BGP",
        "IGMP"
      ],
      "correct": 1,
      "explanation": "OSPF is a link-state routing protocol that builds a topology database and runs a shortest-path-first computation based on Dijkstra's algorithm. RIP instead exchanges distance-vector reachability and uses hop count. BGP is path-vector and policy-driven rather than this interior link-state calculation. IGMP handles multicast membership. “Shortest” here means lowest accumulated OSPF cost, not necessarily the fewest routers or smallest geographic distance."
    },
    {
      "id": "net-107",
      "chapter": "echipamente",
      "type": "single",
      "question": "When a packet traverses a network, each router is a ____________.",
      "options": [
        "Jump point",
        "CSU/DSU",
        "Jump switch",
        "Hop"
      ],
      "correct": 3,
      "explanation": "Each router traversed is a hop in the network-layer path. Hop count can therefore describe the number of routing steps toward a destination, though different tools may show different visibility. A CSU/DSU terminates a digital WAN circuit, not every routing step. “Jump point” and “jump switch” are not the standard routing term. An ordinary Layer 2 switch does not count as an IP router hop."
    },
    {
      "id": "net-108",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A cable that meets the 1000BaseT standard has a maximum length of:",
      "options": [
        "100 m",
        "250 m",
        "500 m",
        "1,000 m"
      ],
      "correct": 0,
      "explanation": "1000BASE-T supports a copper channel up to 100 meters under the applicable cabling specifications. A typical structured channel comprises a 90-meter permanent link plus patch cords within the total allowance. The 250, 500 and 1,000 meter alternatives exceed that ordinary copper channel limit and require a different medium or active intermediate equipment. The limit concerns a compliant channel, not an unlimited length merely because the cable is labeled Ethernet."
    },
    {
      "id": "net-109",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Attenuation in a wireless network signal is a result of:",
      "options": [
        "Number of wireless nodes connected",
        "Distance from the access point",
        "Interference from cellular phones",
        "Encryption of the signal"
      ],
      "correct": 1,
      "explanation": "Increasing distance from the access point reduces received signal strength through propagation loss, so distance is the intended attenuation cause. Obstacles also add loss. Additional nodes primarily cause contention, encryption processes data without inherently weakening radio amplitude, and interfering phones introduce competing emissions rather than defining attenuation itself. Signal loss and interference can both lower throughput, but they are different mechanisms."
    },
    {
      "id": "net-110",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the maximum cable length for a single Cat5 UTP cable run?",
      "options": [
        "285 feet / 86.87 meters",
        "328 feet / 99.97 meters",
        "432 feet / 131.67 meters",
        "600 feet / 182.88 meters"
      ],
      "correct": 1,
      "explanation": "The conventional Ethernet twisted-pair channel limit is 100 meters, approximately 328 feet, so select 328 feet/99.97 meters. The slight numerical difference reflects rounding. The shorter 285-foot choice is not the standard maximum, and 432 or 600 feet exceed it. A structured-cabling permanent link is normally limited to 90 meters to leave room for patch cords within the overall 100-meter channel budget."
    },
    {
      "id": "net-111",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which cable type transmits data the greatest distance?",
      "options": [
        "Multi-mode fiber",
        "Single-mode fiber",
        "Cat5e",
        "Cat6"
      ],
      "correct": 1,
      "explanation": "Single-mode fiber normally supports the greatest distances of these media because its narrow optical path minimizes modal dispersion. Multimode fiber supports shorter optical runs, while Cat5e and Cat6 copper Ethernet commonly have 100-meter channel limits at their supported rates. Exact fiber reach depends on the transceivers, wavelength, speed and loss budget; “single-mode” alone is not an unlimited-distance guarantee, but it is the best long-distance medium among the choices."
    },
    {
      "id": "net-112",
      "chapter": "infrastructura",
      "type": "single",
      "question": "To directly connect the Ethernet NICs of two computers, you should use a: Assume the interfaces do not support Auto MDI-X.",
      "options": [
        "Crossover cable",
        "Straight cable",
        "Rollover cable",
        "Coaxial cable"
      ],
      "correct": 0,
      "explanation": "Without Auto MDI-X, two ordinary computer Ethernet ports need a crossover cable to connect one port's transmit pairs to the other's receive pairs. A straight-through cable was traditionally used between unlike port types, such as PC and switch. A rollover cable is commonly a serial console cable, not an Ethernet data crossover. Coaxial cabling does not fit the twisted-pair NIC connection assumed by these choices."
    },
    {
      "id": "net-113",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the minimum cabling requirement for a 100BaseTX network?",
      "options": [
        "Category 3 UTP cable",
        "Category 5 UTP cable",
        "Category 6 UTP cable",
        "Multimode fiber cable"
      ],
      "correct": 1,
      "explanation": "100BASE-TX requires at least Category 5 twisted-pair cabling for its 100 Mbps operation. Category 3 is insufficient for this particular TX specification, even though other historical 100 Mbps variants existed. Category 6 can carry the traffic but is not the minimum. Multimode fiber is used by a different Ethernet physical variant, such as 100BASE-FX, not the copper TX implementation being asked about."
    },
    {
      "id": "net-114",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which feature of Category 5e STP cable reduces external interference?",
      "options": [
        "Crosstalk",
        "Shielding",
        "Length",
        "Twisting"
      ],
      "correct": 1,
      "explanation": "Shielding is the added STP feature intended to reduce coupling from external electromagnetic interference when properly installed and bonded. Twisting also helps reject noise and reduce crosstalk, but it is present in both UTP and STP. Crosstalk is an unwanted effect, not a protective feature. Cable length affects loss and exposure but is not the defining interference-reduction component of shielded Category 5e cable."
    },
    {
      "id": "net-115",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A home office needs a new copper Ethernet link supporting at least 300 Mbps. Which listed category is the conventional baseline recommendation for a new 1000BASE-T installation, without upgrading to Cat6?",
      "options": [
        "Cat3",
        "Cat5",
        "Cat5e",
        "Cat6"
      ],
      "correct": 2,
      "explanation": "Cat5e is the conventional baseline recommendation for a new gigabit 1000BASE-T channel, whose nominal 1 Gbps exceeds 300 Mbps. Cat3 is inadequate. Cat6 can also support the requirement but is the higher category excluded by the requested baseline. Compliant legacy Cat5 can sometimes support gigabit, so the answer is a new-installation recommendation rather than a claim that every Cat5 channel is physically incapable of exceeding 100 Mbps. Actual application throughput depends on endpoints and overhead."
    },
    {
      "id": "net-116",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The type of connector used on a 100BaseT Ethernet cable is:",
      "options": [
        "RJ-11",
        "RJ-45",
        "TNC",
        "BNC"
      ],
      "correct": 1,
      "explanation": "Twisted-pair 100BASE-T Ethernet normally uses the eight-position modular connector commonly called RJ-45, more precisely an 8P8C connector in Ethernet wiring. RJ-11 is associated with telephone wiring and has fewer contacts. BNC is associated with coaxial interfaces, including historical coax Ethernet, while TNC is another coaxial RF connector. Neither is the connector used for the copper twisted-pair Ethernet cable in this question."
    },
    {
      "id": "net-117",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "What are two characteristics of fiber optic cable? Choose two.",
      "options": [
        "Conducts electricity",
        "Requires metal conduit",
        "Supports splicing",
        "Carries data as light rather than electrical current"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "Optical fibers carry encoded light rather than electrical current and can be joined by suitable fusion or mechanical splicing. Those are the two correct characteristics. The optical data path does not conduct electricity, though a complete cable can contain metallic armor or strength elements. Metal conduit is not inherently required; installation rules depend on the environment and cable rating. Splicing needs specialized methods to keep optical loss within budget."
    },
    {
      "id": "net-118",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You need to run Ethernet drops where interference exists. Which cable type should you use?",
      "options": [
        "STP Cat5e",
        "UTP Cat5e",
        "Cat3",
        "UTP Cat6"
      ],
      "correct": 0,
      "explanation": "STP Cat5e adds shielding that can reduce external electromagnetic interference when grounding, bonding and termination are correct. The unshielded Cat5e and Cat6 choices lack that shield; a higher category does not itself mean shielded construction. Cat3 is an older lower-performance option and does not solve the interference requirement. Fiber would be immune to electromagnetic coupling on the optical path, but it is not among the supplied choices."
    },
    {
      "id": "net-119",
      "chapter": "infrastructura",
      "type": "single",
      "question": "When a signal degrades as it runs through a wire, you have:",
      "options": [
        "Degradation",
        "Attenuation",
        "Crossover",
        "Resistance"
      ],
      "correct": 1,
      "explanation": "Attenuation is the reduction in signal strength as it travels through a medium. Loss increases with distance and frequency and can eventually make reception unreliable. “Degradation” is a broad description rather than the specific technical term. A crossover is a wiring arrangement, and resistance is one electrical property that can contribute to loss, not the general name for weakening of the propagated signal."
    },
    {
      "id": "net-120",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What does X.25 use at its DTE device?",
      "options": [
        "Telco incoming router",
        "Packet switcher",
        "Analog modem",
        "PAD"
      ],
      "correct": 3,
      "explanation": "A PAD, or packet assembler/disassembler, adapts terminal-style data for an X.25 packet network, assembling outgoing data into packets and disassembling incoming packets. This is the expected legacy terminal-access component. A packet switch belongs to the packet network, while a generic telco router or analog modem does not identify the assembly/disassembly function. Not every native X.25 DTE needs a separate PAD, so the option reflects the traditional terminal-access scenario."
    },
    {
      "id": "net-121",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of the following represents a MAC address?",
      "options": [
        "GV:ZC:KK:DK:FZ:CA",
        "255.255.255.0",
        "05:35:AB:6E:A1:25",
        "127.0.0.1"
      ],
      "correct": 2,
      "explanation": "05:35:AB:6E:A1:25 has six hexadecimal octets, the textual format of a 48-bit MAC address. Letters outside A–F make the GV:ZC:KK:DK:FZ:CA choice invalid hexadecimal. 255.255.255.0 is a dotted-decimal IPv4 subnet mask, and 127.0.0.1 is an IPv4 loopback address. The 05 first octet has its group bit set, so this is a group/multicast-form MAC address rather than an ordinary unicast NIC source address; the question asks only for MAC format."
    },
    {
      "id": "net-122",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is the correct order of the OSI model layers from Layer 1 up to Layer 7?",
      "options": [
        "Physical, Data Link, Network, Transport, Session, Presentation, Application",
        "Application, Presentation, Session, Transport, Network, Data Link, Physical",
        "Physical, Network, Data Link, Transport, Session, Presentation, Application",
        "Data Link, Physical, Network, Transport, Application, Session, Presentation"
      ],
      "correct": 0,
      "explanation": "From Layer 1 upward the order is Physical, Data Link, Network, Transport, Session, Presentation and Application. The second choice lists those same layers in the reverse, top-down direction, so it does not answer the clarified bottom-up requirement. The other alternatives swap layers into incorrect positions. Physical carries signals, Data Link frames them, Network routes packets and the remaining layers provide increasingly endpoint/application-oriented functions."
    },
    {
      "id": "net-123",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In which OSI layer does routing occur?",
      "options": [
        "Transport",
        "Network",
        "Data Link",
        "Physical"
      ],
      "correct": 1,
      "explanation": "Routing is a Network-layer, Layer 3 function: routers select paths and forward packets between logical networks. Transport handles end-to-end process communication, such as TCP or UDP ports. Data Link handles frames and local-link addressing, while Physical handles signaling and media. A Layer 2 switch may forward frames, but that is distinct from choosing an IP route between subnets."
    },
    {
      "id": "net-124",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol is a transport layer protocol?",
      "options": [
        "FTP",
        "IP",
        "UDP",
        "ASCII"
      ],
      "correct": 2,
      "explanation": "UDP is a transport-layer protocol. It provides datagrams and port-based application demultiplexing without TCP-style connection setup, ordering or retransmission. FTP is an application-layer file-transfer protocol, IP is a network-layer protocol, and ASCII is a character encoding rather than a transport protocol. The distinction is functional layer, not whether these components can all appear together in one application's communication stack."
    },
    {
      "id": "net-125",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol is responsible for automatically assigning IP addresses?",
      "options": [
        "HTTP",
        "DHCP",
        "DNS",
        "WINS"
      ],
      "correct": 1,
      "explanation": "DHCP automatically leases IP addresses and can supply parameters such as subnet mask, default gateway and DNS servers. HTTP transfers web resources. DNS resolves names and other records, while WINS resolves legacy NetBIOS names. Name resolution is not the same as assigning an interface's address, so DHCP is the only choice matching automatic host addressing."
    },
    {
      "id": "net-126",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "At what layer in the OSI model are hardware addresses referenced?",
      "options": [
        "Network",
        "Application",
        "Data Link",
        "Physical"
      ],
      "correct": 2,
      "explanation": "Hardware/MAC addresses are used in Data Link-layer frames, so Layer 2 is the answer. Physical describes electrical, optical or radio signaling rather than interpreting MAC-addressed frames. Network uses logical addresses such as IP, and Application supplies higher-level services. A MAC address is associated with an interface, but the word hardware does not mean it belongs to the Physical layer."
    },
    {
      "id": "net-127",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "According to the OSI model, encryption takes place on the transport layer. What is correct instead?",
      "options": [
        "Presentation",
        "Network",
        "Application",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "In the conventional OSI teaching model, encryption and representation/translation are assigned to the Presentation layer, so replace Transport with Presentation. This is a model-function answer, not a claim that real encryption exists only at Layer 6: IPsec protects at the network layer, TLS sits above transport, and applications can encrypt payloads themselves. Network and Application can therefore host real encryption mechanisms, but they are not the canonical OSI function requested."
    },
    {
      "id": "net-128",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each protocol to its description.",
      "dragItems": [
        {
          "id": "a",
          "text": "UDP"
        },
        {
          "id": "b",
          "text": "TCP"
        },
        {
          "id": "c",
          "text": "ARP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Connectionless / best-effort delivery",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Connection-oriented / reliable, ordered byte stream",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Resolves an IPv4 address to a MAC address on the local link",
          "correctItemId": "c"
        }
      ],
      "explanation": "UDP matches connectionless best-effort datagram service: it has no built-in retransmission or ordered-stream guarantee. TCP matches a connection-oriented reliable ordered byte stream, using acknowledgments and retransmission while the connection remains viable. ARP matches local-link IPv4-to-MAC resolution. ARP is neither a transport nor a host-name lookup service, and UDP's checksum does not turn it into TCP-style reliable delivery. Reliability does not guarantee recovery from every possible network failure."
    },
    {
      "id": "net-129",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each OSI layer to its description.",
      "dragItems": [
        {
          "id": "a",
          "text": "Application"
        },
        {
          "id": "b",
          "text": "Session"
        },
        {
          "id": "c",
          "text": "Network"
        },
        {
          "id": "d",
          "text": "Data Link"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Provides services to user applications",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Controls the dialogue between systems",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Handles path determination",
          "correctItemId": "c"
        },
        {
          "id": "z4",
          "label": "Checks frames (CRC)",
          "correctItemId": "d"
        }
      ],
      "explanation": "Application exposes network services to software, such as HTTP web requests or file-transfer operations. Session coordinates dialogues and synchronization between communicating applications; it is not the same as choosing an IP route. Network performs logical addressing and path determination so packets can cross different networks. Data Link packages traffic as local frames and checks link-level corruption, for example with an Ethernet CRC/FCS. A failed CRC normally causes frame discard rather than correcting its contents. The distinctions are service, conversation, routed path and local frame. All four cooperate during a transfer, but that does not make routing an application service or make a local frame check equivalent to end-to-end transport reliability."
    },
    {
      "id": "net-130",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "OSI statements. Which variant is correct?",
      "options": [
        "HTTP/TELNET/FTP/SMTP operate on Layer 7 – True; Layer 4 controls dialogue – False; Layer 3 controls routing – True",
        "All statements are True",
        "All statements are False",
        "Layer 4 controls dialogue – True; Layer 3 controls routing – False"
      ],
      "correct": 0,
      "explanation": "HTTP, Telnet, FTP and SMTP are application-layer protocols, conventionally OSI Layer 7. Dialogue/session management belongs to Layer 5 rather than Layer 4; Layer 4 is transport. Routing belongs to Layer 3. Thus the first combined option has the correct true/false pattern. Real TCP/IP implementations do not necessarily separate all OSI session functions into a standalone protocol, but that does not move the model's dialogue function to transport."
    },
    {
      "id": "net-131",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer in the OSI model covers routing between networks?",
      "options": [
        "Physical",
        "Data Link",
        "Network",
        "Transport"
      ],
      "correct": 2,
      "explanation": "The Network layer, Layer 3, handles routing between networks using logical destination addresses. Physical concerns the medium and signaling. Data Link concerns frames on a local link, and Transport concerns process-to-process delivery. Those layers cooperate in end-to-end communication, but it is the Network-layer forwarding decision that chooses the next network hop."
    },
    {
      "id": "net-132",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "_____________ is used to send packets from one network to another network.",
      "options": [
        "Routing",
        "Transport",
        "BGP",
        "Encapsulation"
      ],
      "correct": 0,
      "explanation": "Routing is the general process of selecting paths and forwarding packets between networks. BGP is one particular routing protocol that distributes reachability, not the general operation every packet transfer requires. Transport provides endpoint communication above IP, while encapsulation wraps data in headers and occurs at multiple layers. Encapsulation alone does not select an inter-network path."
    },
    {
      "id": "net-133",
      "chapter": "protocoale",
      "type": "single",
      "question": "The protocol that maps IP addresses to MAC addresses is:",
      "options": [
        "IMAP",
        "DHCP",
        "RIP",
        "UDP",
        "ARP"
      ],
      "correct": 4,
      "explanation": "ARP resolves an IPv4 address to a link-layer address on the local link. For an off-subnet destination, the host typically resolves the next-hop gateway's MAC address, not the remote host's MAC across the Internet. IMAP retrieves mail, DHCP supplies configuration, RIP exchanges routes and UDP transports datagrams. IPv6 uses Neighbor Discovery instead of ARP, so the mapping described is specifically an IPv4 mechanism."
    },
    {
      "id": "net-134",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of these is an application layer protocol?",
      "options": [
        "TCP",
        "FTP",
        "IP",
        "UDP"
      ],
      "correct": 1,
      "explanation": "FTP is an application-layer file-transfer protocol, conventionally using a control channel and separate data connections. TCP and UDP are transport protocols, and IP is the network-layer protocol carrying packets. FTP commonly uses TCP, but using a transport does not place the application protocol at that same layer. The question asks about the protocol's own function rather than every lower layer needed to carry it."
    },
    {
      "id": "net-135",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "After enabling Windows Firewall, you can no longer access websites. Which two TCP ports should you add exceptions for? Choose two. Assume outbound standard HTTP and HTTPS connections are blocked.",
      "options": [
        "Port 21",
        "Port 23",
        "Port 25",
        "Port 80",
        "Port 443"
      ],
      "correct": [
        3,
        4
      ],
      "explanation": "Permit outbound TCP destination ports 80 and 443 for standard HTTP and HTTPS respectively, as the stem explicitly says those outbound connections are blocked. Port 21 is FTP control, 23 Telnet and 25 SMTP; opening them would not restore ordinary web access. Stateful firewall handling normally permits matching reply traffic. This is not a recommendation to open inbound web-server ports on a browsing client, nor does it address nonstandard web ports or DNS failures."
    },
    {
      "id": "net-136",
      "chapter": "protocoale",
      "type": "single",
      "question": "TCP/IP model statements. Which variant is correct?",
      "options": [
        "The four-layer TCP/IP model has four layers: True; its application layer roughly covers OSI layers 5–7: True; its transport and Internet layers correspond to OSI layers 4 and 3, respectively: True",
        "All three statements are False",
        "TCP/IP application corresponds only to OSI layer 4",
        "TCP/IP Internet corresponds to OSI layer 7"
      ],
      "correct": 0,
      "explanation": "In the four-layer TCP/IP model, Application roughly encompasses OSI Application, Presentation and Session; Transport corresponds to OSI Layer 4, and Internet to OSI Layer 3. The remaining link/network-access layer covers much of OSI Layers 1–2. Therefore the all-true statement is the correct combined option. Some textbooks use a five-layer variation, but the stem explicitly specifies the four-layer model."
    },
    {
      "id": "net-137",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each service to its TCP port.",
      "dragItems": [
        {
          "id": "a",
          "text": "SMTP"
        },
        {
          "id": "b",
          "text": "FTP"
        },
        {
          "id": "c",
          "text": "HTTPS"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Port 25",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Port 21",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Port 443",
          "correctItemId": "c"
        }
      ],
      "explanation": "SMTP sends or relays email, with TCP 25 conventionally used between mail servers. A mail client's authenticated submission commonly uses 587 or 465, so those roles should not be confused with server-to-server delivery. FTP control uses TCP 21 for login and commands; transferred file content uses separate data connections, historically server TCP 20 in active mode or negotiated server ports in passive mode. HTTPS uses TLS to protect web traffic on conventional TCP 443, unlike plaintext HTTP on 80. Modern HTTP/3 can use UDP 443, but this matching exercise specifically asks for TCP ports. These numbers identify ordinary listeners, not every socket involved in a complete session."
    },
    {
      "id": "net-138",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to connect to an FTP server to download a file?",
      "options": [
        "nslookup",
        "Ssh",
        "telnet",
        "Ftp"
      ],
      "correct": 3,
      "explanation": "The ftp client command starts an FTP session from which files can be downloaded using FTP commands. nslookup queries DNS, ssh opens secure shell sessions, and telnet opens an unencrypted terminal/TCP session rather than implementing FTP transfers. Standard FTP does not encrypt credentials or content; SFTP is a different protocol over SSH, not simply FTP made secure by choosing the ssh command."
    },
    {
      "id": "net-139",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The default subnet mask for a Class B network is:",
      "options": [
        "0.0.0.255",
        "0.0.255.255",
        "255.0.0.0",
        "255.255.0.0"
      ],
      "correct": 3,
      "explanation": "Under historical classful addressing, Class B uses a 16-bit network prefix, written 255.255.0.0. The inverse 0.0.255.255 is a wildcard-style mask, not the subnet mask. 0.0.0.255 is also not a contiguous leading-ones subnet mask, while 255.0.0.0 is the Class A default. Modern CIDR networks use explicitly assigned prefix lengths rather than deriving the mask solely from an address class."
    },
    {
      "id": "net-140",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which network does the IP address 220.100.100.100 belong to? Use historical classful addressing, without a separately specified subnet mask.",
      "options": [
        "220.100.100.0/24",
        "220.100.100.1/24",
        "255.255.255.0/24",
        "255.255.255.1/24"
      ],
      "correct": 0,
      "explanation": "The first octet 220 falls in the historical Class C range, giving the default /24 mask. Applying 255.255.255.0 to 220.100.100.100 yields network 220.100.100.0/24. The .1 address is a host in that network, not its network address. The choices beginning with 255 do not preserve the address's network prefix. This answer relies on the stem's explicit classful assumption; an arbitrary modern prefix cannot be inferred from the address alone."
    },
    {
      "id": "net-141",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which subnet mask is valid?",
      "options": [
        "255.255.255.240",
        "255.255.255.228",
        "255.255.255.164",
        "255.255.255.245"
      ],
      "correct": 0,
      "explanation": "255.255.255.240 is valid because 240 is binary 11110000: all mask ones precede all zeroes, giving /28. In contrast, 228 is 11100100, 164 is 10100100 and 245 is 11110101; each has a one after a zero. Those noncontiguous patterns are not standard CIDR subnet masks. Validity depends on bit continuity, not merely each decimal octet being between 0 and 255."
    },
    {
      "id": "net-142",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the default subnet mask for a Class C Internet network?",
      "options": [
        "255.255.255.252",
        "255.255.255.240",
        "255.255.255.192",
        "255.255.255.0"
      ],
      "correct": 3,
      "explanation": "The historical Class C default mask is 255.255.255.0, or /24, leaving eight host bits. The other masks are valid more-specific prefixes: .192 is /26, .240 is /28 and .252 is /30. They may be used to subnet a Class C-sized block but are not its classful default. Current address allocation is CIDR-based, so a real interface's mask should be obtained from configuration rather than assumed from class."
    },
    {
      "id": "net-143",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of the following is a public IP address?",
      "options": [
        "10.156.89.1",
        "68.24.78.221",
        "172.16.152.48",
        "192.168.25.101"
      ],
      "correct": 1,
      "explanation": "68.24.78.221 is outside the listed RFC 1918 private ranges and is the public-address choice. 10.156.89.1 belongs to 10.0.0.0/8; 172.16.152.48 belongs to 172.16.0.0/12; and 192.168.25.101 belongs to 192.168.0.0/16. Public classification does not prove that this particular address is assigned, reachable or permitted through a firewall; it distinguishes its address space from the explicitly private alternatives."
    },
    {
      "id": "net-144",
      "chapter": "infrastructura",
      "type": "single",
      "question": "To which IP configuration does the CIDR notation 192.168.1.1/25 refer?",
      "options": [
        "192.168.1.1 255.255.255.64",
        "192.168.1.1 255.255.255.1",
        "192.168.1.1 255.255.255.32",
        "192.168.1.1 255.255.255.256",
        "192.168.1.1 255.255.255.128"
      ],
      "correct": 4,
      "explanation": "A /25 has 25 leading network bits: 24 make 255.255.255, and the next most-significant bit adds 128 in the last octet. Thus the mask is 255.255.255.128. Last-octet values 64, 1 and 32 do not provide a contiguous leading-ones mask after those 24 bits. An octet of 256 is impossible. The interface remains 192.168.1.1; the suffix specifies its mask, not a replacement host address."
    },
    {
      "id": "net-145",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The default gateway address identifies the:",
      "options": [
        "Device that will connect the computer to the local network",
        "Device that will connect the computer to a remote network",
        "Server that will provide name services",
        "Server that will authenticate the user"
      ],
      "correct": 1,
      "explanation": "The default gateway is the on-link next-hop router used to reach destinations for which the host has no more-specific route, typically remote networks. It is not the NIC or switch that merely provides local attachment. DNS supplies name resolution, and authentication servers verify identities; neither function defines a gateway. A gateway can run additional services, but its address in IP configuration identifies the routing next hop."
    },
    {
      "id": "net-146",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv4 multicast addresses range from 192.168.0.0 to 192.168.255.255. What is correct instead?",
      "options": [
        "127.0.0.0 to 127.255.255.255",
        "172.16.0.0 to 172.31.255.255",
        "224.0.0.0 to 239.255.255.255",
        "No change is needed"
      ],
      "correct": 2,
      "explanation": "IPv4 multicast occupies 224.0.0.0 through 239.255.255.255, or 224.0.0.0/4. The original 192.168 range is private unicast space. The 127/8 range is loopback, and 172.16/12 is another private unicast range. Multicast identifies receiver groups, not all hosts on a subnet; it differs from broadcast as well as from ordinary one-to-one addressing."
    },
    {
      "id": "net-147",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The loopback address of your computer is 127.0.0.1. What is correct?",
      "options": [
        "10.0.1.1",
        "169.254.0.5",
        "192.168.1.1",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "No change is needed: 127.0.0.1 is the familiar IPv4 loopback address, used to communicate with the local host's networking stack. The broader 127.0.0.0/8 block is reserved for loopback. 10.0.1.1 and 192.168.1.1 are private-network addresses rather than universal self-addresses. 169.254.0.5 is in link-local space, not loopback. A successful loopback test does not prove the physical cable or remote network works."
    },
    {
      "id": "net-148",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of these is a public address space?",
      "options": [
        "192.168.0.0/16",
        "197.16.0.0/16",
        "10.0.0.0/8",
        "172.16.0.0/12"
      ],
      "correct": 1,
      "explanation": "197.16.0.0/16 is the public-space choice because it is not one of the RFC 1918 private blocks. The other three are exactly the private ranges: 10/8, 172.16/12 and 192.168/16. Private addresses can be used internally without global uniqueness, whereas public allocations must be coordinated. Public space classification does not guarantee every address within a block is assigned or currently Internet-reachable."
    },
    {
      "id": "net-149",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv4 address statements. Which variant is correct?",
      "options": [
        "IPv4 has 64 bits – True; octets are 8-bit fields – True; octet values are 0–256 – True",
        "IPv4 has 64 bits – False; octets are 8-bit fields – True; octet values are 0–256 – False",
        "IPv4 has 32 bits – False; octets are 16-bit fields – True; octet values are 0–256 – True",
        "All statements are False"
      ],
      "correct": 1,
      "explanation": "An IPv4 address has 32 bits, divided into four eight-bit octets. An unsigned eight-bit field has 2^8 = 256 possible values, numbered 0 through 255, not 0 through 256. Therefore “64 bits” is false, “octets are eight-bit” is true, and the proposed range is false. The other combined options confuse the number of values with the highest representable value or change the size of an octet."
    },
    {
      "id": "net-150",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Each IPv4 address consists of a MAC address and data-link layer address. What is correct instead?",
      "options": [
        "Network ID and a host ID",
        "DNS record and a default route",
        "64-bit binary number divided into octets",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "An IPv4 address is interpreted as a network prefix and host portion according to its subnet mask/prefix length. These are not separate MAC and data-link addresses: MAC addressing belongs to a different layer. A DNS record and default route are related configuration concepts but are not parts of the address. IPv4 is 32 bits, not 64, so the binary-length alternative is also wrong."
    },
    {
      "id": "net-151",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each IP address to its IPv4 address class.",
      "dragItems": [
        {
          "id": "a",
          "text": "64.123.12.1"
        },
        {
          "id": "b",
          "text": "133.234.23.2"
        },
        {
          "id": "c",
          "text": "201.111.22.3"
        },
        {
          "id": "d",
          "text": "224.100.20.3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class A",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Class B",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Class C",
          "correctItemId": "c"
        },
        {
          "id": "z4",
          "label": "Class D",
          "correctItemId": "d"
        }
      ],
      "explanation": "Classify by the first octet under historical classful rules: 64 lies in ordinary Class A 1–126, 133 in Class B 128–191, 201 in Class C 192–223, and 224 in Class D 224–239. Thus the four addresses map to A, B, C and D respectively. Historical default prefixes were /8 for A, /16 for B and /24 for C, leaving progressively fewer host bits. Class D instead identifies multicast groups and is not another ordinary host-subnet size. The later octets do not change the class. Modern CIDR requires an actual prefix length; identifying a class does not prove the mask configured on a real network."
    },
    {
      "id": "net-152",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each IPv4 address type to its definition.",
      "dragItems": [
        {
          "id": "a",
          "text": "Multicast"
        },
        {
          "id": "b",
          "text": "Broadcast"
        },
        {
          "id": "c",
          "text": "Unicast"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "One-to-many",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "To everyone on a subnet",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "One-to-one",
          "correctItemId": "c"
        }
      ],
      "explanation": "Unicast is one-to-one delivery to one destination address. Multicast is one-to-selected-many delivery to a receiver group, not automatically every host. Broadcast addresses all eligible hosts in an IPv4 broadcast domain/subnet and is normally confined by routers. These audience distinctions are why “one-to-many” maps to multicast and “everyone on a subnet” to broadcast. Receiving a frame does not mean every host must process it as an application message."
    },
    {
      "id": "net-153",
      "chapter": "echipamente",
      "type": "single",
      "question": "Dynamic routing statements. Which variant is correct?",
      "options": [
        "Learns networks automatically – True; removes routes automatically – True; selects best route using metrics – True",
        "Only the first statement is True",
        "Only the second statement is True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "A dynamic routing protocol can learn advertised networks, withdraw or age out unusable routes, and choose preferred paths according to its metric and protocol rules. All three statements are therefore true. This automation depends on participating neighbors and valid configuration; it does not discover every possible network without advertisements. Route changes also require convergence time, so automatic removal is not necessarily instantaneous after a failure."
    },
    {
      "id": "net-154",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each address range to its address type.",
      "dragItems": [
        {
          "id": "a",
          "text": "127.0.0.0–127.255.255.255"
        },
        {
          "id": "b",
          "text": "192.168.0.0–192.168.255.255"
        },
        {
          "id": "c",
          "text": "224.0.0.0–239.255.255.255"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Loopback",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Private",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Multicast",
          "correctItemId": "c"
        }
      ],
      "explanation": "127.0.0.0/8 is loopback: traffic addressed there stays inside the local host for stack/service testing and should not be forwarded onto the LAN. 192.168.0.0/16 is private unicast space for internal networks; different organizations may reuse it, so it is not globally unique Internet addressing. 224.0.0.0/4 is multicast, identifying selected receiver groups rather than one host. These purposes distinguish the three ranges even though none is ordinary globally assigned host-unicast space. Private addresses can be routed across an organization's internal subnets, unlike loopback. Multicast also differs from broadcast: group members, not automatically every subnet host, are the intended recipients."
    },
    {
      "id": "net-155",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "The ipconfig command will:",
      "options": [
        "Configure routers",
        "Configure DHCP clients",
        "Display a client's address",
        "Display a client's broadcast mode"
      ],
      "correct": 2,
      "explanation": "With no special switches, ipconfig displays a Windows client's current interface IP configuration, including addresses and relevant masks/gateways. It does not administer an external router or display a generic “broadcast mode.” Some switches such as /renew affect DHCP client configuration, but the bare command in this question is primarily a display tool. Use ipconfig /all when more details such as DHCP and DNS information are required."
    },
    {
      "id": "net-156",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to release the IP configuration handed out by a DHCP server?",
      "options": [
        "ipconfig /renew",
        "ipconfig /releasedns",
        "ipconfig /savestatic",
        "ipconfig /release"
      ],
      "correct": 3,
      "explanation": "ipconfig /release relinquishes a DHCP-provided IPv4 lease on the selected adapter, or eligible adapters if none is specified. It can interrupt connectivity until configuration is reacquired. /renew requests renewal or acquisition rather than releasing. /releasedns and /savestatic are not the standard Windows ipconfig options shown for this task. Releasing a lease is different from flushing DNS cache entries."
    },
    {
      "id": "net-157",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to reacquire IP configuration from a DHCP server?",
      "options": [
        "ipconfig /renew",
        "ipconfig /releasedns",
        "ipconfig /savestatic",
        "ipconfig /release"
      ],
      "correct": 0,
      "explanation": "ipconfig /renew asks the DHCP client to renew or obtain leased configuration. It does not promise that a different IP address will be returned; the server may renew the existing lease. /release gives up the lease, and /releasedns and /savestatic are not the relevant standard options. This operation applies to automatically configured adapters, not to replacing an administrator's static settings by magic."
    },
    {
      "id": "net-158",
      "chapter": "protocoale",
      "type": "single",
      "question": "List the four steps for a client to get an IP address from a DHCP server in the correct order.",
      "options": [
        "Discovery, offering, request, acknowledge",
        "Request, offering, discovery, acknowledge",
        "Discovery, request, offering, acknowledge"
      ],
      "correct": 0,
      "explanation": "The initial DHCPv4 exchange is Discover, Offer, Request, Acknowledge, often remembered as DORA. The client discovers servers, receives an offered lease, requests one offer, and receives confirmation. Request cannot logically select an initial offer before discovery and offering. Renewal exchanges can omit the full initial sequence, but this question asks about a client initially obtaining an address, so the first order is the appropriate model."
    },
    {
      "id": "net-159",
      "chapter": "protocoale",
      "type": "single",
      "question": "What protocol automatically configures IP configuration for a client?",
      "options": [
        "DNS",
        "DHCP",
        "WINS",
        "FTP"
      ],
      "correct": 1,
      "explanation": "DHCP automatically supplies a client with IP configuration through leases and options. DNS and WINS resolve names to addresses rather than assigning the client's own interface settings. FTP transfers files. These services may coexist on a server, but their functions remain distinct: automatic addressing points to DHCP, not to a naming or file-transfer protocol."
    },
    {
      "id": "net-160",
      "chapter": "protocoale",
      "type": "single",
      "question": "Teredo tunneling is a protocol that:",
      "options": [
        "Translates IPv4 to IPv6",
        "Allows IPv6 connectivity through IPv4 devices",
        "Provides VPN security",
        "Dynamically allocates IPv6 addresses"
      ],
      "correct": 1,
      "explanation": "Teredo carries IPv6 packets inside IPv4 UDP traffic, enabling IPv6 connectivity through some IPv4 NAT environments. It is tunneling, not a general translation of IPv4 addresses into IPv6 addresses. It does not inherently provide VPN confidentiality, and dynamic IPv6 address allocation is not its core purpose. Successful operation depends on the NAT/firewall environment; it is a transition mechanism, not a preferred substitute for native IPv6 deployment."
    },
    {
      "id": "net-161",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv6 statements. Which variant is correct? This asks about the historical, deprecated IPv6 site-local prefix, not a recommended current deployment.",
      "options": [
        "0:0:0:0:0:0:0:1 is loopback – True; FEC0::9C5A is site-local – True; FE80::F856:02AA is link-local – True",
        "Only loopback is True",
        "Only link-local is True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "All three are correct under the explicitly historical scope. 0:0:0:0:0:0:0:1 is the expanded loopback ::1. FEC0::9C5A falls in the former site-local FEC0::/10 range, which is deprecated. FE80::F856:02AA belongs to the FE80::/10 link-local range. The site-local answer should not be read as current deployment advice; unique-local FC00::/7 space serves a different modern purpose."
    },
    {
      "id": "net-162",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of these represents the IPv6 loopback address?",
      "options": [
        "127.0.0.1",
        "192.168.0.1",
        "FEC0:A8C0::AA01",
        "::1"
      ],
      "correct": 3,
      "explanation": "::1 is the compressed IPv6 loopback address; it expands to seven zero groups followed by 1. 127.0.0.1 is IPv4 loopback, not IPv6. 192.168.0.1 is private IPv4 unicast, and FEC0:A8C0::AA01 is in deprecated IPv6 site-local space rather than loopback. A loopback packet addresses the local host itself and does not test a remote path."
    },
    {
      "id": "net-163",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of these addresses is a multicast address?",
      "options": [
        "127.0.0.1",
        "169.254.0.1",
        "192.168.0.1",
        "224.0.0.1"
      ],
      "correct": 3,
      "explanation": "224.0.0.1 is in IPv4 multicast space and identifies the all-hosts group on the local network. 127.0.0.1 is loopback, 169.254.0.1 is in link-local space, and 192.168.0.1 is private unicast. The classification depends on the address block, not on whether a host happens to respond to a ping. Multicast is group delivery, distinct from subnet broadcast."
    },
    {
      "id": "net-164",
      "chapter": "infrastructura",
      "type": "single",
      "question": "How many bits are there in an IPv6 address?",
      "options": [
        "32",
        "64",
        "128",
        "256"
      ],
      "correct": 2,
      "explanation": "IPv6 addresses contain 128 bits, conventionally displayed as eight hexadecimal groups of 16 bits each. IPv4 has 32 bits. A /64 is a common IPv6 subnet prefix length, not the full address length. 256 bits is not the IPv6 address size. Compression of zero groups changes how the address is written but does not reduce its actual number of bits."
    },
    {
      "id": "net-165",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv6 address validity. Which variant is correct?",
      "options": [
        "21DA:D3:0:2F3B:2AA:FF:FE28:9C5A – True; FE80::2AA:FF:FE28:9C5A – True; 21DA:02AA:::FF:FE28:9C5A – False",
        "All three are valid",
        "Only the last one is valid",
        "All are invalid"
      ],
      "correct": 0,
      "explanation": "21DA:D3:0:2F3B:2AA:FF:FE28:9C5A has eight legal hexadecimal groups and is valid syntax. FE80::2AA:FF:FE28:9C5A uses one double-colon to replace enough zero groups to total eight, also valid. The third string contains a triple colon, which is invalid IPv6 syntax. Leading zeros can be omitted, but compression must use ::, at most once in an address."
    },
    {
      "id": "net-166",
      "chapter": "infrastructura",
      "type": "single",
      "question": "IPv6 general statements. Which variant is correct?",
      "options": [
        "IPv6 addresses are 64-bit – True; divided into 8-bit blocks – True; represented by dotted-decimal notation – True",
        "IPv6 addresses are 64-bit – False; divided into 8-bit blocks – False; represented by dotted-decimal notation – False",
        "Only dotted-decimal notation is True",
        "Only 8-bit blocks are True"
      ],
      "correct": 1,
      "explanation": "All three proposed statements are false. IPv6 uses 128-bit addresses, conventionally written as eight 16-bit hexadecimal groups separated by colons. It does not use a 64-bit complete address or IPv4-style dotted-decimal notation. Although the underlying data can of course be viewed as bytes, the conventional textual blocks referenced here are 16-bit hextets, not eight-bit decimal octets. A common /64 subnet does not change the total address length."
    },
    {
      "id": "net-167",
      "chapter": "protocoale",
      "type": "single",
      "question": "The default port used for SMTP is:",
      "options": [
        "23",
        "25",
        "80",
        "8080"
      ],
      "correct": 1,
      "explanation": "SMTP's conventional server-to-server port is TCP 25. Port 23 is Telnet, port 80 HTTP, and 8080 is often an alternate HTTP service port. Mail clients commonly submit through 587 or 465, so port 25 should not be treated as the only port involved in email. The question asks for the standard default SMTP service among these choices."
    },
    {
      "id": "net-168",
      "chapter": "protocoale",
      "type": "single",
      "question": "The default port used for Telnet is:",
      "options": [
        "23",
        "25",
        "80",
        "8080"
      ],
      "correct": 0,
      "explanation": "Telnet conventionally listens on TCP port 23. TCP 25 is SMTP, TCP 80 HTTP, and 8080 is commonly alternate HTTP/proxy traffic. Port numbers can be administratively changed, but the standard service assignment determines this answer. Telnet's familiar default does not make it secure; ordinary Telnet transmits session data without encryption."
    },
    {
      "id": "net-169",
      "chapter": "protocoale",
      "type": "single",
      "question": "All session data is encrypted between all machines while using Telnet. What is correct instead?",
      "options": [
        "Not encrypted",
        "Encrypted between any Windows machines",
        "Encrypted only to any non-Windows machines",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Standard Telnet does not encrypt session content or credentials. This is independent of whether either endpoint runs Windows or another operating system. Thus “not encrypted” is the correct replacement, and leaving the statement unchanged would falsely promise confidentiality. SSH is the usual secure remote terminal alternative. Wrapping a session in an external secure tunnel is a separate mechanism, not an inherent property of Telnet itself."
    },
    {
      "id": "net-170",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command displays the ports that your computer is listening for?",
      "options": [
        "nslookup",
        "nbtstat",
        "ping",
        "netstat"
      ],
      "correct": 3,
      "explanation": "netstat displays network connections and listening endpoints when invoked with appropriate options, such as netstat -a on Windows. nslookup queries DNS, nbtstat examines NetBIOS-over-TCP/IP state, and ping sends reachability probes. None of those substitutes lists all local listeners. Bare netstat may omit listening sockets on some platforms, so the tool is correct but its options still matter."
    },
    {
      "id": "net-171",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of these ports does DHCP use?",
      "options": [
        "80",
        "67",
        "23",
        "500"
      ],
      "correct": 1,
      "explanation": "DHCPv4 servers use UDP port 67, and clients use UDP port 68. Therefore 67 is the correct offered option. Port 80 belongs to HTTP, 23 to Telnet, and UDP 500 is used by IKE rather than DHCP. DHCPv6 uses a different port pair, 546/547; do not generalize the DHCPv4 assignment to every IP version."
    },
    {
      "id": "net-172",
      "chapter": "protocoale",
      "type": "single",
      "question": "What port does DNS use?",
      "options": [
        "443",
        "389",
        "51",
        "53"
      ],
      "correct": 3,
      "explanation": "DNS conventionally uses port 53 over UDP and TCP. UDP is common for ordinary queries, while TCP is used for zone transfers and also normal queries when needed. Port 443 is HTTPS, and 389 is LDAP; 51 is not the standard DNS service port. Modern encrypted DNS transports can use other ports, but the ordinary DNS assignment asked for remains 53."
    },
    {
      "id": "net-173",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which listed tool sends DNS queries to test name resolution and shows the DNS server it is querying?",
      "options": [
        "TELNET",
        "NSLOOKUP",
        "PATHPING",
        "NETSTAT"
      ],
      "correct": 1,
      "explanation": "nslookup sends DNS queries and normally displays which DNS server is handling the query, making it the targeted diagnostic tool. Telnet tests a terminal/TCP connection, pathping examines route/loss behavior, and netstat shows local connection or socket information. Those tools can help other network investigations but do not replace a direct DNS query. A returned server name/address should be distinguished from the address resolved for the requested host."
    },
    {
      "id": "net-174",
      "chapter": "protocoale",
      "type": "single",
      "question": "A service that resolves NetBIOS names to IP addresses is:",
      "options": [
        "Domain Name Service (DNS)",
        "Internet Service Provider (ISP)",
        "Address Resolution Protocol (ARP)",
        "Windows Internet Name Service (WINS)"
      ],
      "correct": 3,
      "explanation": "WINS is the legacy Windows service for resolving NetBIOS names to IP addresses. DNS resolves domain-style names, ARP maps on-link IPv4 addresses to MAC addresses, and an ISP provides network access rather than this specific naming service. Modern Windows networks commonly rely on DNS, but that does not change WINS's historical NetBIOS role."
    },
    {
      "id": "net-175",
      "chapter": "protocoale",
      "type": "single",
      "question": "What type of DNS record maps host names to addresses?",
      "options": [
        "Mail Exchanger (MX) DNS record",
        "Service (SRV) DNS record",
        "Host (A) DNS record",
        "Canonical (CNAME) DNS record"
      ],
      "correct": 2,
      "explanation": "An A record maps a DNS owner/host name directly to an IPv4 address. An AAAA record would supply IPv6, but it is not listed. MX identifies mail exchangers, SRV locates a particular service, and CNAME points one name to another name rather than directly holding the destination IP address. Thus “addresses” here should be read as the IPv4 mapping represented by the available A-record choice."
    },
    {
      "id": "net-176",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You can ping a server by IP address but not by FQDN. Why?",
      "options": [
        "PING is improperly configured",
        "The DNS is not resolving",
        "The DHCP server is offline",
        "NSLOOKUP is stopped"
      ],
      "correct": 1,
      "explanation": "If the same server responds when addressed numerically but its FQDN fails, name resolution is the primary suspect. Check DNS configuration, the queried record and resolver behavior before assuming the physical path is broken. DHCP being offline does not necessarily invalidate an existing lease, and nslookup is a diagnostic program rather than a background service that must remain running. An incorrect FQDN can also cause failure, so the symptom suggests DNS rather than proving one exact server fault."
    },
    {
      "id": "net-177",
      "chapter": "protocoale",
      "type": "single",
      "question": "A secondary zone is the first DNS zone to which all updates are written. What is correct instead?",
      "options": [
        "Primary zone",
        "Stub zone",
        "Conditional forwarding zone",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "In the conventional primary/secondary zone model, updates are written to the primary zone, and a secondary holds a read-only transferred copy. A stub zone retains limited referral information rather than the full writable zone. Conditional forwarding directs queries for selected domains and is not the authoritative update source. Active Directory-integrated DNS can use multimaster updates, but the question's standard primary-versus-secondary distinction makes primary the intended correction."
    },
    {
      "id": "net-178",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following uses pointer records and A records?",
      "options": [
        "IDS",
        "DNS Server",
        "NAT Server",
        "IPS"
      ],
      "correct": 1,
      "explanation": "A DNS server stores and serves resource records including A records for forward IPv4 lookup and PTR records for reverse lookup. NAT translates addresses, while IDS and IPS detect or prevent suspicious activity. Those security/translation functions do not define ownership of DNS record types. PTR records refer to names; they are not ARP entries and do not resolve a local MAC address."
    },
    {
      "id": "net-179",
      "chapter": "protocoale",
      "type": "single",
      "question": "The top-level domain of www.adventureworks.com is:",
      "options": [
        "Www",
        "Adventureworks",
        "Adventureworks.com",
        "Com"
      ],
      "correct": 3,
      "explanation": "The rightmost label, com, is the top-level domain in www.adventureworks.com. adventureworks is a label beneath that TLD, and adventureworks.com is a domain name containing both labels. www is the leftmost host/service label in this example. DNS hierarchy is read from the root at the right toward more specific names on the left, not from the first visible label toward the top level."
    },
    {
      "id": "net-180",
      "chapter": "protocoale",
      "type": "single",
      "question": "What type of record does DNS use to find a mail service?",
      "options": [
        "Service (SRV) DNS record",
        "Canonical (CNAME) DNS record",
        "Mail Exchanger (MX) DNS record",
        "Host (A) DNS record"
      ],
      "correct": 2,
      "explanation": "MX records identify mail exchangers responsible for receiving mail for a domain, with preference values for selection. An A record maps a host name to an IPv4 address and may then be needed to reach the mail exchanger, but it does not itself declare the domain's mail destination. CNAME creates an alias. SRV locates named services in other contexts rather than replacing the normal SMTP MX lookup."
    },
    {
      "id": "net-181",
      "chapter": "protocoale",
      "type": "single",
      "question": "An ARP table is used to associate IP addresses with host names. What is correct instead?",
      "options": [
        "MAC addresses",
        "HomeGroup membership",
        "Preferred routers",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "An ARP cache associates on-link IPv4 addresses with MAC addresses, not host names. This lets the sender construct a frame for a local neighbor or next-hop router. DNS and other naming mechanisms handle names. HomeGroup membership and preferred-router lists are unrelated to the ARP address mapping. IPv6 uses Neighbor Discovery rather than ARP for the corresponding link-neighbor task."
    },
    {
      "id": "net-182",
      "chapter": "protocoale",
      "type": "single",
      "question": "The host name of the FQDN mail.exchange.corp.nwtraders.com is:",
      "options": [
        "Corp",
        "Com",
        "Nwtraders",
        "Exchange",
        "Mail"
      ],
      "correct": 4,
      "explanation": "mail is the leftmost host label in mail.exchange.corp.nwtraders.com. The remaining labels identify increasingly broader domains to its right: exchange, corp, nwtraders and the com TLD. exchange is therefore part of the domain hierarchy in this example, not the leftmost host name. The full FQDN includes all of the labels, whereas the question asks for the short host component."
    },
    {
      "id": "net-183",
      "chapter": "protocoale",
      "type": "single",
      "question": "The service that resolves FQDNs to IP addresses is:",
      "options": [
        "Windows Internet Name Service (WINS)",
        "Domain Name Service (DNS)",
        "Internet Service Provider (ISP)",
        "Address Resolution Protocol (ARP)"
      ],
      "correct": 1,
      "explanation": "DNS resolves fully qualified domain names to addresses through records such as A and AAAA. WINS resolves legacy NetBIOS names, not the general FQDN hierarchy. ARP resolves local IPv4 neighbors to MAC addresses, and an ISP supplies connectivity rather than naming being its defining function. A provider may operate a DNS resolver, but the requested service is DNS itself."
    },
    {
      "id": "net-184",
      "chapter": "protocoale",
      "type": "single",
      "question": "The process of replicating a zone file to multiple DNS servers is called zone replication. What is correct instead?",
      "options": [
        "Zone transfer",
        "Zone synchronization",
        "Start of authority",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Zone transfer is the conventional term for copying DNS zone data between authoritative servers, using full AXFR or incremental IXFR transfer where supported. “Zone synchronization” is descriptive rather than the named mechanism. SOA is a resource-record type, not the transfer operation. “Zone replication” can describe the result informally and Active Directory can replicate integrated zone data, but the question's zone-file primary/secondary model calls for zone transfer."
    },
    {
      "id": "net-185",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which DNS record contains the MNAME field identifying the primary/master name server for a zone in the conventional primary/secondary model?",
      "options": [
        "NS",
        "MX",
        "CNAME",
        "SOA"
      ],
      "correct": 3,
      "explanation": "SOA contains the MNAME primary/master-server field together with zone administrative data such as the serial and refresh/retry timers. NS identifies authoritative name servers but does not contain the SOA MNAME field. MX identifies mail exchangers, and CNAME aliases one DNS name to another. Specifying the primary/master field avoids confusing the zone administration record with the NS records used to advertise authoritative server membership."
    },
    {
      "id": "net-186",
      "chapter": "protocoale",
      "type": "single",
      "question": "What DNS record type specifies an alias name of another address record?",
      "options": [
        "MX",
        "CNAME",
        "NS",
        "SOA"
      ],
      "correct": 1,
      "explanation": "A CNAME record makes one DNS name an alias of another canonical name. The target is a name, not a literal address value; subsequent A or AAAA lookup obtains the address. MX identifies mail exchangers, NS identifies authoritative servers, and SOA supplies zone authority/administrative parameters. The wording “another address record” is loose, but the alias relationship clearly distinguishes CNAME from the other choices."
    },
    {
      "id": "net-187",
      "chapter": "protocoale",
      "type": "single",
      "question": "The NTP value in a resource record indicates how long DNS servers cache information. What is correct instead?",
      "options": [
        "TTL",
        "GPS",
        "SOA RR",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "TTL, time to live, tells a caching resolver how long a DNS resource record may remain cached before revalidation/refetching is needed. NTP synchronizes clocks and GPS is a positioning/time system; neither is the DNS cache-lifetime field. SOA is a record type with several administrative values, not the per-record field being replaced here. TTL does not promise that an authoritative record itself stops existing when the cache timer expires."
    },
    {
      "id": "net-188",
      "chapter": "protocoale",
      "type": "single",
      "question": "DNS query statements. Which variant is correct?",
      "options": [
        "A recursive resolver may contact other servers on behalf of the client; iterative responses can contain referrals; a resolver may start at root servers when it has no relevant cache or forwarder",
        "Only clients may contact root DNS servers",
        "An iterative reply must always contain the final answer",
        "DNS never uses caching"
      ],
      "correct": 0,
      "explanation": "The first option correctly distinguishes recursive service from iterative referrals. A recursive resolver can do additional querying for its client; an iterative reply can point toward other name servers. With no relevant cache and no configured forwarder, resolution can begin using root-server information. An iterative reply need not contain the final answer, and DNS does cache results. Root servers are not restricted to contact by end-user clients only."
    },
    {
      "id": "net-189",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "The ping tool is used to: Choose two.",
      "options": [
        "Determine the network portion of a host address",
        "Self-test a host's own network interface",
        "Determine whether a host is reachable",
        "Manage a host's session when UDP is used"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "ping can probe reachability using ICMP echo and can test the local stack/interface address. It does not calculate the network prefix or manage UDP sessions. A successful ping to the host's own address is only a limited self-test and need not exercise a cable, switch or remote route. Likewise, a failed remote ping can result from ICMP filtering rather than proving the destination is disconnected."
    },
    {
      "id": "net-190",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which of the following are features of DHCP? Choose two.",
      "options": [
        "IP address resolution to canonical names",
        "Secure shell connections",
        "Address reservation",
        "Network file transfer",
        "IP address exclusion"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "DHCP reservations bind specified clients to consistent leased addresses, while exclusions keep selected addresses from ordinary pool allocation. Both are DHCP administration features. Name-to-canonical-name resolution belongs to DNS, secure shell sessions to SSH, and file transfer to protocols such as FTP or SMB. Reservations remain DHCP-managed rather than becoming a manual static configuration simply because the resulting address is predictable."
    },
    {
      "id": "net-191",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "The command-line tool used to list a host's active incoming connections is:",
      "options": [
        "NETSTAT",
        "IPCONFIG",
        "NSLOOKUP",
        "PING"
      ],
      "correct": 0,
      "explanation": "netstat lists active transport connections and, with options, listeners and associated processes. This includes incoming established connections; it is not limited to one direction. ipconfig displays interface configuration, nslookup queries DNS, and ping tests ICMP reachability. Those tools answer different troubleshooting questions. Options such as -a and -n can help expose all relevant endpoints without hiding numeric addresses behind name resolution."
    },
    {
      "id": "net-192",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "A computer with IP address 169.254.1.1 cannot access the network. Which service should you confirm is available?",
      "options": [
        "WINS",
        "DNS",
        "DHCP",
        "TFTP"
      ],
      "correct": 2,
      "explanation": "DHCP is the service to check because 169.254.1.1 is a plausible APIPA/link-local fallback address on a Windows client that failed to acquire a lease. DNS and WINS resolve names, while TFTP transfers files; they do not lease the interface configuration. The address suggests a lease-acquisition problem rather than proving a server crash: link, VLAN, relay and filtering faults can also prevent replies. Link-local fallback normally does not provide routed access to other subnets."
    },
    {
      "id": "net-193",
      "chapter": "protocoale",
      "type": "single",
      "question": "When a client's DHCP-issued address expires, the client will: Assume the lease has expired without a successful renewal; the client must stop using that leased address.",
      "options": [
        "Select a new address and request approval from the DHCP server",
        "Require manual configuration with a static IP address",
        "Attempt to obtain a new address by broadcasting",
        "Continue to use the address until notified to stop"
      ],
      "correct": 2,
      "explanation": "After the lease fully expires without successful renewal, the client must stop using the leased address and try to acquire configuration again, ordinarily beginning with DHCP broadcast discovery. It may receive the same address or a different one. It must not continue using the expired lease indefinitely or select an arbitrary address as though already approved. Static configuration is not the mandatory next step. Earlier unicast renewal and rebinding attempts occur before final expiry."
    },
    {
      "id": "net-194",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Internet Key Exchange (IKE) is responsible for which two functions? Choose two.",
      "options": [
        "Establishing network speed parameters",
        "Verifying the client's patch level",
        "Negotiating algorithms to use",
        "Exchanging key information"
      ],
      "correct": [
        2,
        3
      ],
      "explanation": "IKE negotiates security parameters/algorithms and exchanges keying information to establish security associations, commonly for IPsec. It can authenticate peers as part of that process. It does not negotiate Ethernet line speed or automatically assess a client's patch compliance. Algorithm agreement and key establishment are distinct from the later protected data transfer, which uses the resulting security associations."
    },
    {
      "id": "net-195",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command is used to verify that a server is connected to the network?",
      "options": [
        "IPCONFIG",
        "ROUTE",
        "PING",
        "CHECK"
      ],
      "correct": 2,
      "explanation": "ping is the relevant first reachability test because it sends ICMP echo requests and reports replies. ipconfig displays local settings, route views/manages routing information, and CHECK is not the standard diagnostic command in these choices. A reply demonstrates a working IP path for that traffic, not that every server application is healthy. A failed ping is not conclusive disconnection evidence because hosts or firewalls may block ICMP."
    },
    {
      "id": "net-196",
      "chapter": "echipamente",
      "type": "single",
      "question": "To protect a network when it is connected to the Internet, you should use a:",
      "options": [
        "Bridge",
        "Firewall",
        "Switch",
        "Router"
      ],
      "correct": 1,
      "explanation": "A firewall enforces traffic policy at the Internet boundary and can block unauthorized connection attempts. A bridge or ordinary switch primarily forwards local frames; a router primarily forwards packets between networks. Routers can include firewall features, but routing alone is not the dedicated protective function asked for. A firewall should be part of layered security rather than treated as protection against every attack or compromised internal endpoint."
    },
    {
      "id": "net-197",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which service masks internal IP addresses from outside the network?",
      "options": [
        "DHCP",
        "WINS",
        "NAT",
        "DNS"
      ],
      "correct": 2,
      "explanation": "NAT translates internal private addresses to external addresses, so external peers normally see the translated address rather than the original internal source. PAT commonly also translates ports. DHCP distributes configuration, WINS resolves NetBIOS names and DNS resolves domain records; none performs this packet-address rewriting. NAT is not encryption and is not a complete substitute for a firewall, even though it can obscure internal addressing and affect inbound reachability."
    },
    {
      "id": "net-198",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Tracert is used to:",
      "options": [
        "Manage routing tables dynamically",
        "Manage session-oriented connections between nodes",
        "Report the route taken by packets across an IP network",
        "Report the shortest route between different networks"
      ],
      "correct": 2,
      "explanation": "tracert reports responding router hops toward a destination by increasing the IP TTL/hop limit of probes. It does not dynamically manage routes or establish application sessions. It also does not prove it found the shortest possible path: it observes responses along paths taken by the probes, and filtering or load balancing can hide or vary hops. Thus route reporting, with those limitations, is the correct description."
    },
    {
      "id": "net-199",
      "chapter": "protocoale",
      "type": "single",
      "question": "A school network uses DHCP. Settings are manual and websites do not work. Which changes are needed?",
      "options": [
        "Set IP address to manual and DNS to manual",
        "Obtain IP address automatically and obtain DNS server address automatically",
        "Only change the subnet mask",
        "Only disable DNS"
      ],
      "correct": 1,
      "explanation": "For the stated DHCP-managed school network, select automatic IP addressing and automatic DNS server assignment so the client obtains the intended lease and DNS options. Merely changing a subnet mask would not repair other incorrect manual values. Disabling DNS prevents normal name-based browsing. Manual IP/DNS settings could work if correctly supplied, but those values are not provided; the intended fix is to follow the network's DHCP configuration rather than guess."
    },
    {
      "id": "net-200",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "For which two reasons should you use IPsec between computers? Choose two.",
      "options": [
        "Data compression",
        "Data integrity",
        "Data redundancy",
        "Data confidentiality"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "IPsec can provide data integrity and, when encryption is enabled through suitable ESP configuration, confidentiality between peers. Integrity detects unauthorized modification; confidentiality prevents unauthorized reading of protected payloads. Data compression and data redundancy are not the two security goals requested. Protection depends on negotiated policy: AH does not encrypt, and not every IPsec security association automatically supplies both services."
    },
    {
      "id": "net-201",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which address indicates that a router's DHCP service is NOT functioning?",
      "options": [
        "169.254.1.15",
        "172.16.1.15",
        "192.168.1.15",
        "10.19.1.15"
      ],
      "correct": 0,
      "explanation": "169.254.1.15 is a plausible APIPA/link-local address selected when a Windows client cannot obtain DHCP configuration. The other choices are ordinary RFC 1918 private addresses and could be valid DHCP leases. This is evidence to investigate DHCP reachability, not proof that the router's DHCP process itself failed: a disconnected link, wrong VLAN or filtering can also prevent replies. Link-local addressing does not normally supply routed Internet connectivity."
    },
    {
      "id": "net-202",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A public-facing web server must be protected from the internal network. What should you do?",
      "options": [
        "Set the web server in a perimeter network",
        "Block access on ports 80 and 443 on the web server",
        "Configure the firewall to block ports 80 and 443",
        "Set the web server IP address within the LAN"
      ],
      "correct": 0,
      "explanation": "Put the public-facing web server in a perimeter network/DMZ and control traffic between that zone and the internal LAN. This isolates services with external exposure rather than placing them directly among trusted internal hosts. Blocking HTTP/HTTPS would prevent the intended public web service, and a LAN address alone supplies no isolation. Appropriate firewall rules are still required; a DMZ label does not automatically secure the server or permit unrestricted internal access."
    },
    {
      "id": "net-203",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "A computer has IP address 169.254.48.97 and cannot connect to resources. What should you do next?",
      "options": [
        "Flush the DNS server cache",
        "Reset the user's password",
        "Check router routing tables",
        "Verify that the DHCP service is available"
      ],
      "correct": 3,
      "explanation": "169.254.48.97 falls in the usual IPv4 link-local/APIPA range, so the next useful check is whether the client can obtain a DHCP lease. Verify link/VLAN and server/relay reachability as well as service status. Flushing DNS or changing a password will not repair missing routable IP configuration. Routing-table investigation may become relevant, but a local lease failure is the immediate clue and should be checked first."
    },
    {
      "id": "net-204",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which listed protocol protects web traffic in transit using TLS?",
      "options": [
        "SNMP",
        "HTTPS",
        "TFTP",
        "HTTP"
      ],
      "correct": 1,
      "explanation": "HTTPS protects HTTP traffic using TLS, supplying confidentiality and integrity in transit and normally server authentication when certificates are validated. HTTP without TLS does not provide those protections. TFTP is a simple file-transfer protocol without built-in TLS, while SNMP is for management and is not the protocol serving encrypted web pages. HTTPS does not guarantee that the site itself is trustworthy or that stored data is encrypted."
    },
    {
      "id": "net-205",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which Microsoft network service can establish a connection to a corporate LAN without user action?",
      "options": [
        "VPN",
        "Remote Desktop",
        "DirectAccess",
        "NAP"
      ],
      "correct": 2,
      "explanation": "DirectAccess was designed for automatic connectivity from eligible managed Windows clients to corporate resources without requiring the user to start a conventional VPN session. Remote Desktop provides a remote interactive desktop, and NAP was a health-enforcement framework. Generic VPN software can also support automatic connections, so the historical Microsoft product distinction is important; among these named choices, DirectAccess is the intended always-connected enterprise solution."
    },
    {
      "id": "net-206",
      "chapter": "protocoale",
      "type": "single",
      "question": "A Windows IPv4 client with APIPA enabled cannot obtain a DHCP lease. Which prefix contains its automatically selected link-local address?",
      "options": [
        "127.0.0.0–127.0.0.255",
        "169.254.0.0/16",
        "192.168.100.0–192.168.100.255",
        "No change is needed"
      ],
      "correct": 1,
      "explanation": "APIPA selects an IPv4 link-local address within 169.254.0.0/16 when DHCP fails, excluding reserved edge portions and checking for conflicts. The question asks for the containing prefix, not the exact selectable range, so /16 is correct. 127/8 is loopback and cannot provide neighbor communication. 192.168.100/24 is private space but is not the standard APIPA prefix. Link-local fallback does not by itself provide access to remote subnets."
    },
    {
      "id": "net-207",
      "chapter": "infrastructura",
      "type": "single",
      "question": "POTS, most ISDN lines, and switched T1 lines are examples of Message Switching. What is correct instead?",
      "options": [
        "Circuit Switching",
        "Packet Switching",
        "FDDI Switching",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "Circuit switching is the conventional classification for POTS calls and the circuit-switched ISDN/switched-T1 services specified. Resources are established for a connection rather than forwarding each independent message as the primary switching unit. Message switching is therefore the wrong term. Packet switching describes shared packet transport such as X.25/Frame Relay, and FDDI is a token-based LAN technology rather than this telephone-service switching category."
    },
    {
      "id": "net-208",
      "chapter": "protocoale",
      "type": "single",
      "question": "IPsec statements. Which variant is correct?",
      "options": [
        "Can secure communications between two machines – True; between two networks – True; traffic is always encrypted – False",
        "All statements are True",
        "Only the first statement is True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "IPsec can protect host-to-host communication and site-to-site traffic through gateways, so the first two statements are true. “Always encrypted” is false: AH provides authentication/integrity without confidentiality, and IPsec policy can choose different protection. ESP can provide encryption when configured accordingly. The all-true choice therefore overstates the guarantee, while the other combined answers wrongly deny valid deployment modes."
    },
    {
      "id": "net-209",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Tracert statements. Which variant is correct?",
      "options": [
        "Displays responding router addresses toward one destination – True; produces pathping-style per-hop packet-loss statistics – False; displays routes for all active connections – False",
        "All statements are True",
        "Only pathping-style packet-loss statistics is True",
        "All statements are False"
      ],
      "correct": 0,
      "explanation": "The first combined option is correct. Windows tracert displays responding hops toward one chosen destination. It does not produce pathping-style statistical per-hop loss estimates or enumerate routes for all active sockets. Probe timeouts can indicate lost/filtered replies, but they do not reliably measure forwarding loss because routers may rate-limit diagnostic responses. pathping performs repeated statistics gathering; netstat inspects active connections rather than showing every connection path."
    },
    {
      "id": "net-210",
      "chapter": "protocoale",
      "type": "single",
      "question": "What protocol is used with L2TP to provide encryption?",
      "options": [
        "IPsec",
        "MPPE",
        "HTTPS",
        "MS-CHAP"
      ],
      "correct": 0,
      "explanation": "L2TP is normally combined with IPsec to add encryption, integrity and peer authentication. L2TP itself provides a tunnel but not payload confidentiality. MPPE is associated with PPP-based protection such as legacy PPTP, HTTPS protects HTTP, and MS-CHAP is an authentication method rather than the standard L2TP encryption layer. Keeping tunneling, authentication and encryption separate explains why IPsec is the required companion here."
    },
    {
      "id": "net-211",
      "chapter": "protocoale",
      "type": "single",
      "question": "A Windows DHCP server in an Active Directory domain has a configured active scope but is not authorized in AD. Which administrative action is missing?",
      "options": [
        "Register the scope",
        "Register the server",
        "Authorize the server",
        "Register the clients"
      ],
      "correct": 2,
      "explanation": "Authorize the Windows DHCP server in Active Directory. In the stated domain environment, an installed server with an active scope can still refuse service if it lacks the required AD authorization. Registering a scope or individual clients is not the missing administrative action. “Register the server” is not the precise authorization step. This answer concerns the explicitly stated Windows/AD control, not a universal requirement for every vendor's DHCP implementation."
    },
    {
      "id": "net-212",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "A computer has address 169.254.32.23 and mask 255.255.0.0 but cannot connect to local file servers. What is most likely the problem?",
      "options": [
        "It cannot communicate with a DHCP server",
        "DNS servers are incorrect or down",
        "NetBIOS over TCP/IP is not enabled",
        "The network card is not connected properly"
      ],
      "correct": 0,
      "explanation": "169.254.32.23 with /16 is characteristic of APIPA fallback, suggesting the computer did not receive a DHCP lease. It may communicate with compatible link-local peers, but normally cannot reach file servers using the site's ordinary subnet addresses. DNS and NetBIOS problems do not explain why the interface received link-local configuration. A bad connection can cause DHCP failure, but the address alone does not establish that the NIC hardware is defective."
    },
    {
      "id": "net-213",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPsec-related protocol negotiates security associations and derives keying material?",
      "options": [
        "IKE (Internet Key Exchange)",
        "AH",
        "EP",
        "MPPE"
      ],
      "correct": 0,
      "explanation": "IKE negotiates IPsec security associations and derives/exchanges keying material while authenticating peers. AH is a data-protection protocol rather than the key negotiation mechanism. “EP” is not the standard named alternative for this function, and MPPE is a different PPP encryption mechanism. Negotiating the security context is distinct from applying AH or ESP to subsequent protected packets."
    },
    {
      "id": "net-214",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPSec component provides connectionless integrity and data authentication but not confidentiality?",
      "options": [
        "SA",
        "AH",
        "ESP",
        "MPPE"
      ],
      "correct": 1,
      "explanation": "AH, Authentication Header, supplies connectionless integrity, data-origin authentication and replay protection but no payload encryption. ESP can supply confidentiality as well as other protections. An SA is a set of negotiated security parameters/state rather than the packet-protection header requested. MPPE belongs to PPP encryption, not this IPsec component. Thus integrity without confidentiality is the key distinction selecting AH."
    },
    {
      "id": "net-215",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPSec component includes the most security, including confidentiality?",
      "options": [
        "SA",
        "AH",
        "ESP",
        "MPPE"
      ],
      "correct": 2,
      "explanation": "ESP, Encapsulating Security Payload, supports confidentiality through encryption and can also provide integrity/authentication and replay protection according to the selected algorithms. AH does not encrypt. An SA describes the security agreement/state rather than itself being a confidentiality protocol, and MPPE is not an IPsec component. “Most security” is informal: correct algorithm and policy choices matter, and the mere presence of ESP does not guarantee every optional protection is enabled."
    },
    {
      "id": "net-216",
      "chapter": "protocoale",
      "type": "single",
      "question": "What service on a Windows network translates between NetBIOS/computer names and IP addresses?",
      "options": [
        "DNS",
        "WINS",
        "DHCP",
        "LDAP"
      ],
      "correct": 1,
      "explanation": "WINS resolves legacy NetBIOS computer names to IP addresses and supports that historical Windows naming environment. DNS handles domain-name records, DHCP leases configuration, and LDAP queries directory information. A Windows computer can use multiple name-resolution mechanisms, but the explicit NetBIOS clue distinguishes WINS. It should not be confused with modern DNS-based name resolution merely because both can eventually return an IP address."
    },
    {
      "id": "net-217",
      "chapter": "protocoale",
      "type": "single",
      "question": "What provides name resolution between domain names and IP addresses?",
      "options": [
        "DHCP",
        "DNS",
        "ARP",
        "RPC"
      ],
      "correct": 1,
      "explanation": "DNS supplies domain-name-to-address mappings through records such as A and AAAA, with reverse mappings handled separately by PTR records. DHCP distributes interface configuration rather than resolving names. ARP resolves IPv4 neighbors to MAC addresses, and RPC is a remote procedure invocation framework. They operate in related communication workflows but do not implement the domain-name service being asked for."
    },
    {
      "id": "net-218",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which term describes controlled access to an organization’s private resources by authorized external partners?",
      "options": [
        "Intranet",
        "Extranet",
        "Internet",
        "DMZ"
      ],
      "correct": 1,
      "explanation": "An extranet grants selected outside partners controlled access to private organizational resources. An intranet is primarily internal, while the Internet is the global public network. A DMZ is an isolated security segment that may host an extranet service, but does not define who is authorized to collaborate. The partner-access relationship, rather than cable type or server placement, determines this answer."
    },
    {
      "id": "net-219",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to display and modify the network configuration of a local computer?",
      "options": [
        "Netsh",
        "netstat",
        "telnet",
        "nbtstat"
      ],
      "correct": 0,
      "explanation": "netsh is a Windows command-line environment for displaying and modifying many network settings through its contexts. netstat reports connections/statistics, telnet starts a remote terminal/TCP session, and nbtstat reports NetBIOS-over-TCP/IP information. Those tools are not general local network-configuration shells. Administrative privileges and the appropriate netsh context may be required for changes; newer Windows versions also offer PowerShell networking cmdlets."
    },
    {
      "id": "net-220",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command is used to add static routes to a Windows computer?",
      "options": [
        "nslookup",
        "telnet",
        "route",
        "nbtstat"
      ],
      "correct": 2,
      "explanation": "The Windows route command can add static routes, for example with route add followed by a destination, mask and gateway. It also supports viewing and deleting routes. nslookup queries DNS, telnet opens a remote terminal/TCP connection, and nbtstat examines NetBIOS state. They do not install IP forwarding entries. Persistence across restart is a separate route option and should not be assumed for every addition."
    },
    {
      "id": "net-221",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to display the routing table on a local system?",
      "options": [
        "route display",
        "route table",
        "route local",
        "route print"
      ],
      "correct": 3,
      "explanation": "route print displays the Windows IP routing table. The alternatives route display, route table and route local are not the Windows syntax requested. Output can include interface and route details for IPv4 and IPv6, depending on options and system state. Viewing a route does not itself prove that its next hop is reachable or that firewall policy permits the desired application traffic."
    },
    {
      "id": "net-222",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to display the MAC address on a system?",
      "options": [
        "ipconfig /all",
        "Pathping -m",
        "route /showmac",
        "nbtstat -r"
      ],
      "correct": 0,
      "explanation": "ipconfig /all displays detailed Windows adapter configuration, including each physical/MAC address. pathping -m and route /showmac are not the appropriate commands here. nbtstat -r reports NetBIOS name-resolution statistics rather than being the general local interface MAC display. Computers can have multiple physical and virtual interfaces, so the output must be matched to the adapter being investigated rather than assuming there is only one MAC address."
    },
    {
      "id": "net-223",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to retrieve or update your DHCP assigned configuration?",
      "options": [
        "ipconfig /flushdns",
        "ipconfig /all",
        "ipconfig /release",
        "ipconfig /renew"
      ],
      "correct": 3,
      "explanation": "ipconfig /renew requests DHCP lease renewal/acquisition for automatically configured adapters. /all displays details but does not renew them. /release relinquishes the lease and may temporarily remove connectivity. /flushdns clears the local DNS resolver cache, which does not repair lease configuration directly. Renewal can return the same settings; it is not a command to force the DHCP server to assign a new address."
    },
    {
      "id": "net-224",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command do you use to register the computer’s name and IP address with the nearest DNS server?",
      "options": [
        "ipconfig /renew",
        "ipconfig /renew all",
        "ipconfig /flushdns",
        "ipconfig /registerdns"
      ],
      "correct": 3,
      "explanation": "ipconfig /registerdns triggers dynamic registration of the computer's configured names and addresses with DNS according to its registration configuration. “Nearest” is not literal geographic selection: the relevant DNS/zone configuration determines where registration goes. /flushdns clears cached answers, while /renew concerns DHCP leases. /renew all is not the named DNS-registration operation. Registration still depends on server policy and permissions."
    },
    {
      "id": "net-225",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command displays Ethernet statistics?",
      "options": [
        "netstat -e",
        "netstat -x",
        "netstat -q",
        "netstat -t"
      ],
      "correct": 0,
      "explanation": "On Windows, netstat -e displays Ethernet statistics such as bytes, packets and errors, and can be combined with other options. The other listed switches have other meanings on particular Windows versions or are not the requested Ethernet-statistics switch. Command options are platform-specific, so this answer should not be transferred uncritically to Unix netstat. Statistics can indicate errors but may not alone identify a defective cable or driver."
    },
    {
      "id": "net-226",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What option do you use to ping constantly until you stop it?",
      "options": [
        "ping -t <host>",
        "ping -q <host>",
        "ping -r <host>",
        "ping -s <host>"
      ],
      "correct": 0,
      "explanation": "On Windows, ping -t sends repeated echo requests until interrupted, commonly with Ctrl+C. The -q, -r and -s choices do not mean continuous ping in this syntax; supported flags can instead concern route or timestamp behavior. On Unix-like systems, ping commonly continues by default and -t may mean TTL, so the keyed command relies on the Windows context of this tool set."
    },
    {
      "id": "net-227",
      "chapter": "protocoale",
      "type": "single",
      "question": "What server is used to translate host names to IP addresses?",
      "options": [
        "DNS",
        "WINS",
        "HOSTS",
        "DHCP"
      ],
      "correct": 0,
      "explanation": "DNS is the server-based service for resolving host/domain names to IP addresses. WINS addresses legacy NetBIOS naming rather than the general DNS namespace. HOSTS is a local text mapping file, not a server. DHCP supplies address configuration and can tell clients which DNS server to use, but that does not make DHCP the name-resolution service itself."
    },
    {
      "id": "net-228",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What command can you use to connect to a mail server so that you can test SMTP?",
      "options": [
        "Ftp",
        "nslookup",
        "telnet",
        "nbtstat"
      ],
      "correct": 2,
      "explanation": "telnet can open a TCP connection to a mail server's SMTP listener, conventionally by specifying port 25, to inspect a greeting and issue basic SMTP commands. FTP and nbtstat implement other services; nslookup can find MX records but does not hold an SMTP conversation. Telnet is suitable only for permitted plaintext diagnostics and does not negotiate modern TLS automatically. A server may require authenticated submission or STARTTLS before accepting mail."
    },
    {
      "id": "net-229",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "CompanyPro plans to migrate several servers to cloud-based virtual machines. You need to identify the administrative responsibilities that will be reduced after the planned migration. Which two responsibilities will be reduced? Choose two.",
      "options": [
        "Backing up application data",
        "Managing permissions to shared documents",
        "Updating server operating systems",
        "Replacing failed server hardware",
        "Managing physical server security"
      ],
      "correct": [
        3,
        4
      ],
      "explanation": "Moving servers to cloud-based virtual machines reduces the customer's responsibility for replacing failed physical servers and securing the physical data-center hardware. The provider manages that infrastructure. In an ordinary IaaS VM arrangement, the customer still manages guest operating-system updates, application-data backups and document permissions. Managed platform services can shift more responsibility, but the question specifies virtual machines rather than assuming a fully managed application service."
    },
    {
      "id": "net-230",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "An organization chooses a shared, provider-operated cloud deployment to move all its infrastructure off-premises. Which deployment model fits that stated choice?",
      "options": [
        "A public cloud",
        "A private cloud",
        "A virtual machine",
        "A hybrid cloud"
      ],
      "correct": 0,
      "explanation": "Public cloud fits the explicitly shared provider-operated deployment. Private cloud is reserved to one organization and can also be hosted off-premises, so location alone would not distinguish them. A virtual machine is a compute instance rather than a deployment model, and hybrid cloud combines environments rather than the stated complete move to this provider deployment. Off-premises does not remove customer responsibility for data, identity and guest/application configuration."
    },
    {
      "id": "net-231",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "You are configuring remote access for dial-in clients. You need to configure a solution that enables them to connect through standard phone lines without having access to the Internet. Which role should you install?",
      "options": [
        "Multipoint Services",
        "Network Policy and Access Services",
        "Remote Access",
        "Remote Desktop Services"
      ],
      "correct": 2,
      "explanation": "The Remote Access role is the intended Windows Server role for RRAS-style dial-in remote access over modem/telephone connections. It can support access without clients first having an Internet connection. Remote Desktop Services supplies interactive desktop sessions, while Multipoint Services addresses shared workstation use. Network Policy and Access Services can supply authentication/policy and historically housed RRAS in older versions, so role names are version-sensitive; this answer assumes the later Remote Access role organization."
    },
    {
      "id": "net-232",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "You use the ____________ to connect to a terminal server",
      "options": [
        "Remote Desktop Connection (RDC)",
        "Remote Desktop Protocol (RDP)",
        "Remote Session Call (RSC)",
        "Remote NetBIOS Connection (RNC)"
      ],
      "correct": 0,
      "explanation": "Remote Desktop Connection is the client application used to connect to a terminal/Remote Desktop server. RDP is the protocol carrying the session, so it is closely related but is not the client tool name requested by the keyed wording. “Remote Session Call” and “Remote NetBIOS Connection” are not the standard client names. If “use” were read broadly, both client and protocol participate; the intended distinction is application versus protocol."
    },
    {
      "id": "net-233",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What zone is used to publish external websites for an organization?",
      "options": [
        "Intranet",
        "Exanet",
        "Internetwork",
        "DMZ"
      ],
      "correct": 3,
      "explanation": "A DMZ/perimeter network is the security zone normally used for public-facing website servers. Firewall policy separates those servers from the trusted internal network while permitting required external web access. An intranet is internal; an extranet describes authorized partner access rather than inherently public websites. “Internetwork” is a generic interconnected-network term, not this trust zone. Merely placing a server in a DMZ does not eliminate the need for hardening and access controls."
    },
    {
      "id": "net-234",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is the primary purpose of a perimeter network?",
      "options": [
        "To act as a hidden location to deploy network clients",
        "To act as a secure location for deploying highly sensitive network servers",
        "To provide a buffer area between a private intranet and the public Internet",
        "To monitor traffic between routed subnets in a private LAN"
      ],
      "correct": 2,
      "explanation": "A perimeter network creates a buffer/trust zone between the private intranet and public Internet. Exposed services can be isolated there so compromise does not directly grant unrestricted internal access. It is not primarily a hidden client location or the preferred repository for the most sensitive internal servers. Monitoring routed internal subnets is a separate function and can occur without a DMZ. The key describes separation, not automatic absolute security."
    },
    {
      "id": "net-235",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "A perimeter design uses a NAT gateway at the boundary and a public-facing service on its isolated segment. Which TWO listed components serve those roles?",
      "options": [
        "NAT server",
        "Database server",
        "Secure file server",
        "DHCP server",
        "Public web server"
      ],
      "correct": [
        0,
        4
      ],
      "explanation": "The scenario explicitly requires a NAT gateway at the boundary and a public-facing service on the isolated segment, so select NAT server and public web server. A database or secure file server is not inherently the public-facing service specified, and DHCP supplies configuration rather than translating addresses. NAT need not be a universal DMZ requirement; it is correct here because the design states that it is used."
    },
    {
      "id": "net-236",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "What are two characteristics of VLANs? Choose two.",
      "options": [
        "VLANs act as though they are on the same LAN regardless of physical location",
        "A VLAN can logically address packets by using IP",
        "A VLAN compartmentalizes a network and isolates traffic",
        "A single switch can service only a single VLAN"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "VLAN membership groups interfaces into a logical LAN/broadcast domain independent of their placement within the supported switching infrastructure. VLANs also isolate traffic into separate domains. IP logical addressing is a Layer 3 function rather than what defines VLAN separation, and one capable switch can host multiple VLANs. Geographic independence is not unlimited automatic connectivity: links/trunks and configuration must extend that VLAN where required."
    },
    {
      "id": "net-237",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "What are three advantages of VLANs? Choose three.",
      "options": [
        "They can logically address packets by using IP",
        "They divide a switched network into separate broadcast domains",
        "They compartmentalize a network and isolate traffic",
        "They are efficient because a single switch can implement only a single VLAN",
        "They act as though they are on the same LAN regardless of physical location"
      ],
      "correct": [
        1,
        2,
        4
      ],
      "explanation": "VLANs divide a switched network into separate broadcast domains, compartmentalize traffic and let members of a logical LAN reside on different parts of the configured switching infrastructure. Those are the three advantages. A VLAN does not itself perform IP routing/addressing, and a single switch can support several VLANs, contradicting the single-VLAN restriction. Inter-VLAN communication requires a controlled Layer 3 function rather than ordinary within-VLAN bridging."
    },
    {
      "id": "net-238",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "What are two advantages of using DSL for WAN connections? Choose two.",
      "options": [
        "DSL bypasses the need to use an ISP to connect to the Internet",
        "DSL supports higher bandwidth than cable modems and ISDN",
        "DSL provides a cost-effective way for small office/home office connections to the Internet",
        "DSL is the preferred method for WAN point-to-point links in an enterprise network",
        "DSL is implemented using standard telephone company service lines"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "DSL is often a cost-effective SOHO Internet access option and uses telephone-company copper service lines. It still normally requires a service provider. It does not universally exceed cable or every ISDN service's bandwidth, and enterprise point-to-point WAN design does not universally prefer DSL. Actual suitability depends on available plans, distance, service guarantees and upstream capacity, not merely the fact that an access link is labeled DSL."
    },
    {
      "id": "net-239",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "You need to configure a VPN connection between two offices. You want to maximize the connection speed. Which connection should you use? Assume the cable plan offers a higher advertised speed than the other listed plans.",
      "options": [
        "ISDN",
        "Cable Modem",
        "T1",
        "DSL"
      ],
      "correct": 1,
      "explanation": "Select Cable Modem because the stem explicitly states that this plan has the highest advertised speed among the available plans. The VPN cannot exceed its bottleneck access bandwidth, and encryption processing or upstream rates may impose further limits. ISDN, T1 and DSL have different capacities and service properties, but their names alone do not establish a universal speed ranking. The added plan assumption is essential to the keyed comparison."
    },
    {
      "id": "net-240",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which connectivity option for wide area networks (WANs) is most readily available in most geographic areas? Consider legacy connectivity where an analog telephone line is available but broadband is not.",
      "options": [
        "Leased line",
        "ISDN",
        "T1",
        "Dial-up"
      ],
      "correct": 3,
      "explanation": "Under the stated legacy condition of an available analog telephone line but no broadband, dial-up is the readily obtainable access method. ISDN and leased/T1 circuits require provisioned digital services that may not be available or economical everywhere. This is not a modern universal coverage claim: telephone services and local infrastructure have changed. The answer follows the question's specific legacy availability premise rather than assuming dial-up remains the best current option."
    },
    {
      "id": "net-241",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Traditional POTS calls, circuit-switched ISDN calls and switched T1 services use which type of switching?",
      "options": [
        "Packet",
        "Circuit"
      ],
      "correct": 1,
      "explanation": "Circuit switching establishes a connection with allocated circuit resources for the call/service. That describes traditional POTS and the explicitly circuit-switched ISDN/T1 service examples. Packet switching instead multiplexes discrete packets across shared infrastructure. A T1 carrier can carry packet-based services too, so the answer does not classify every possible use of T1 as circuit switching; it follows the clarified service context."
    },
    {
      "id": "net-242",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which listed Wi-Fi standard has a maximum nominal PHY rate of 54 Mbps and operates only in the 2.4 GHz band?",
      "options": [
        "802.11a",
        "802.11g",
        "802.11n"
      ],
      "correct": 1,
      "explanation": "802.11g operates in 2.4 GHz with a maximum nominal PHY rate of 54 Mbps. 802.11a also reaches 54 Mbps but operates at 5 GHz, so it fails the frequency requirement. 802.11n can operate at 2.4 or 5 GHz and supports higher configuration-dependent rates. Both band and maximum rate must match; real application throughput is lower than the PHY figure."
    },
    {
      "id": "net-243",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the maximum theoretical PHY rate of 802.11n with four spatial streams, 40 MHz channels and a short guard interval?",
      "options": [
        "10 Mbps",
        "11-128 Mbps",
        "600 Mbps",
        "No change is needed"
      ],
      "correct": 2,
      "explanation": "802.11n reaches a theoretical 600 Mbps with four spatial streams, 40 MHz channels and short guard interval as stated. This is not the rate of every n adapter; fewer streams or narrower channels lower it. Ten Mbps and the 11–128 Mbps range do not represent this maximum configuration. The answer is a PHY rate, not a guarantee of 600 Mbps file-transfer throughput after Wi-Fi contention and protocol overhead."
    },
    {
      "id": "net-244",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What happens when an 802.11a node broadcasts within the range of an 802.11g access point?",
      "options": [
        "The access point transmits, but the node is unable to receive",
        "A connection occurs",
        "Both the node and the access point are unable to transmit",
        "The node transmits, but the access point is unable to receive"
      ],
      "correct": 3,
      "explanation": "An 802.11a-only client transmits in 5 GHz, whereas an 802.11g-only AP operates in 2.4 GHz, so the g AP cannot receive that a transmission. This explains the keyed choice. Neither radio loses its ability to transmit merely because the incompatible device is nearby, and a connection does not occur between these single-standard radios. A dual-band/multistandard AP would be a different case; band incompatibility here prevents two-way communication."
    },
    {
      "id": "net-245",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What does an SSID identify in a Wi-Fi network?",
      "options": [
        "The default administrator account",
        "The wireless network name",
        "The default communication protocol",
        "A WAN encryption protocol"
      ],
      "correct": 1,
      "explanation": "The SSID is the wireless network's identifying name, such as the name selected in a client's network list. It is not the administrator username, an encryption protocol or the overall communication protocol. Several APs can advertise the same SSID within a network, while the BSSID identifies a particular basic service set. Hiding or knowing an SSID is not a substitute for strong authentication and encryption."
    },
    {
      "id": "net-246",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which listed household device, specifically a model operating in the same 2.4 GHz band as 802.11g, is a common interference source?",
      "options": [
        "A cordless phone",
        "A cellular phone",
        "Incandescent lights",
        "Electromagnetic interference (EMI)"
      ],
      "correct": 0,
      "explanation": "A 2.4 GHz cordless phone is a common example of equipment that can interfere with 802.11g in the same band. Electromagnetic interference is the general phenomenon, not a household device. A cellular phone normally uses its cellular radio bands for calls, and an ordinary incandescent light is not this typical overlapping 2.4 GHz transmitter. Actual impact depends on frequency use, proximity and equipment; not every cordless phone operates at 2.4 GHz."
    },
    {
      "id": "net-247",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which is an example of external interference that can degrade the transmission quality of a UTP cable segment?",
      "options": [
        "Wireless access points",
        "Crosstalk",
        "Large electric motors",
        "Cell phones"
      ],
      "correct": 2,
      "explanation": "Large electric motors can generate external electromagnetic fields/noise that couple into nearby copper UTP and degrade signal quality. Crosstalk is typically coupling between adjacent wire pairs/circuits rather than the external machinery source requested. Wi-Fi APs and phones radiate too, but industrial motors are the strongest conventional cable-installation concern among these examples. Separation, correct cable routing and suitable shielding or fiber can mitigate the risk."
    },
    {
      "id": "net-248",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which physical network topology provides fault-tolerant communication by providing redundant communication paths?",
      "options": [
        "Bus",
        "Ring",
        "Star",
        "Mesh"
      ],
      "correct": 3,
      "explanation": "Mesh topology supplies multiple communication paths, enabling an alternate route after a link failure when the network control mechanisms support it. A simple bus, single ring or basic star lacks that general path redundancy. Redundant rings or redundant stars are possible engineered variants, but they are not the basic topologies implied by the choices. Redundancy improves resilience rather than making every possible device or power failure harmless."
    },
    {
      "id": "net-249",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "All devices on your company network connect to the same network switch. This is an example of a physical star topology. What is correct?",
      "options": [
        "Ring",
        "Bus",
        "Mesh",
        "No change is needed"
      ],
      "correct": 3,
      "explanation": "No change is needed: endpoints attached individually to one central switch form a physical star. They do not form a loop as in a ring or share one continuous bus cable. A mesh would require multiple interconnections rather than one central attachment per endpoint. The qualifier physical is important because forwarding and access behavior are separate from the visible cable layout."
    },
    {
      "id": "net-250",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A switched 1000BASE-T network has individual point-to-point links from endpoints to a central switch. Which listed topology best describes this arrangement?",
      "options": [
        "Mesh",
        "Ring",
        "Bus",
        "Star"
      ],
      "correct": 3,
      "explanation": "Individual point-to-point endpoint links to a central switch form a star. The gigabit transmission standard does not by itself determine every possible topology, but the described wiring does. A mesh connects nodes through multiple paths, a ring forms a loop, and a bus shares a backbone. A failed endpoint link normally affects one endpoint, while central-switch failure affects all dependent links."
    },
    {
      "id": "net-251",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which media-access method is used by a legacy IEEE 802.5 Token Ring network?",
      "options": [
        "Collision",
        "Token passing",
        "Avoidance",
        "Polling"
      ],
      "correct": 1,
      "explanation": "Token passing controls access in IEEE 802.5 Token Ring: a station must obtain the circulating token before sending data. Contention/collision behavior is associated with shared Ethernet, avoidance with conventional Wi-Fi contention, and polling is a different centrally controlled mechanism. A physical ring alone does not prove token passing, because Ethernet rings can use other loop-control methods; the clarified technology makes the access method unambiguous."
    },
    {
      "id": "net-252",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is the most common central device used today to connect computers to a network?",
      "options": [
        "Hub",
        "Switch",
        "SOHO router",
        "VPN router"
      ],
      "correct": 1,
      "explanation": "A switch is the conventional central access device for a modern wired Ethernet LAN. It forwards frames between endpoints and supports independent full-duplex links. Hubs are older shared-medium repeaters. SOHO and VPN routers serve network-boundary/remote-access functions and may include a built-in switch, but that integrated switching component is what performs ordinary endpoint LAN interconnection. “Most common” is intended within this access-LAN context rather than every possible network category."
    },
    {
      "id": "net-253",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which is not a routing protocol?",
      "options": [
        "EIGRP",
        "RIP",
        "OSPF",
        "TCP"
      ],
      "correct": 3,
      "explanation": "TCP is a transport protocol, not a routing protocol. EIGRP, RIP and OSPF all distribute routing information and help routers select paths, though their algorithms differ. TCP supplies reliable ordered byte-stream communication between endpoints. BGP can run over TCP, but carrying a routing protocol does not make TCP itself responsible for advertising routes."
    },
    {
      "id": "net-254",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "A routed school network is designed to use a dynamic routing protocol. One router has that protocol disabled and lacks a route to the email subnet. Which TWO listed actions inspect the problem and restore the intended design?",
      "options": [
        "Enable dynamic routing",
        "Look in the router's NAT table",
        "Enable multicast",
        "Look in the router's routing table"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Inspect the router's routing table to confirm the missing email-subnet route, then enable the dynamic routing protocol required by the design. NAT information concerns address translation rather than the missing destination route. Enabling multicast alone does not restore a disabled routing protocol, even though some protocols use multicast for neighbor exchanges. Neighbor, network and policy settings must also be correct for convergence; merely turning on an unrelated feature is insufficient."
    },
    {
      "id": "net-255",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which TWO listed terms describe address translation and its many-to-one form for 15 private IPv4 computers sharing one public IPv4 address?",
      "options": [
        "Static routing",
        "NAT",
        "PAT / NAPT (many private hosts share one public IPv4 address)",
        "RIP"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "NAT is the general address-translation category and PAT/NAPT is the many-to-one form that distinguishes connections using transport ports while sharing one public IPv4 address. Both terms therefore describe the stated mechanism at different levels of specificity. Static routing and RIP control route selection rather than rewriting addresses/ports. These are not necessarily two separately deployed systems; PAT is a form of NAT."
    },
    {
      "id": "net-256",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the most common cable used today?",
      "options": [
        "UTP",
        "STP",
        "Coaxial",
        "Fiber"
      ],
      "correct": 0,
      "explanation": "UTP is the intended common twisted-pair cabling for ordinary office Ethernet endpoint runs. It is inexpensive and easy to install relative to shielded alternatives. STP adds shielding where needed, coaxial cable serves other access/RF uses and older Ethernet, and fiber is important for backbones and long-distance links. “Most common today” depends on the population being measured; the question assumes routine copper LAN drops, not all telecommunications cabling worldwide."
    },
    {
      "id": "net-257",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "What are two characteristics of wired Ethernet network topology? Choose two.",
      "options": [
        "It uses tokens to avoid collisions on the network",
        "It is typically employed using twisted pair or fiber optic media",
        "It uses network adapters physically encoded with an IP address",
        "It can negotiate different transmission speeds"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "Modern wired Ethernet commonly uses twisted pair or fiber, and compatible interfaces can auto-negotiate supported speeds/duplex settings. Ethernet does not use token passing. NICs normally have link-layer MAC addresses; IP addresses are configured in software and are not permanently encoded as the required interface identity. Negotiation depends on the particular physical standard and configuration, so the answer does not mean every historical Ethernet interface can negotiate every speed."
    },
    {
      "id": "net-258",
      "chapter": "infrastructura",
      "type": "single",
      "question": "If you are making a crossover cable and one end is 568A, what should the other end be?",
      "options": [
        "568A",
        "568B",
        "568C",
        "BOGB"
      ],
      "correct": 1,
      "explanation": "A conventional two-pair Ethernet crossover uses T568A at one end and T568B at the other, swapping the transmit and receive pair assignments used by 10/100BASE-T interfaces. A-to-A would be straight-through. “568C” and “BOGB” are not the alternative pinout requested. Gigabit four-pair crossover details and Auto MDI-X can change practical requirements, but this question asks for the standard A/B wiring convention."
    },
    {
      "id": "net-259",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is a justification for using STP cable instead of UTP cable to wire a network expansion?",
      "options": [
        "You are routing cables through an area with high external interference",
        "You want to minimize the costs relating to the new installation",
        "You need to reduce attenuation",
        "You need the cable to be as light and flexible as possible"
      ],
      "correct": 0,
      "explanation": "High external interference is the reason to choose appropriately installed STP over UTP. Shielding reduces unwanted coupling when bonding and termination are correct. STP generally adds cost, bulk and installation requirements, so lowest price or maximum lightness/flexibility are not its advantages. Attenuation is a different loss characteristic; adding a shield is not a general solution for excessive cable length."
    },
    {
      "id": "net-260",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which media type is least susceptible to external interference including EMI and RFI?",
      "options": [
        "Fiber optic",
        "STP",
        "UTP",
        "Wireless"
      ],
      "correct": 0,
      "explanation": "Fiber's optical signal path is not electrically coupled to EMI or RFI, making it the least susceptible listed medium. STP mitigates electromagnetic coupling but remains copper and needs correct installation. UTP lacks an overall shield, while wireless intentionally relies on radio and can experience RF interference. Fiber can still suffer optical loss, bending damage or connector contamination; immunity to electromagnetic pickup does not mean immunity to all faults."
    },
    {
      "id": "net-261",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You need to install a network cable between two locations that are six miles from each other. What should you use?",
      "options": [
        "Multi-mode fiber",
        "Single-mode fiber",
        "Cat5e",
        "Cat6"
      ],
      "correct": 1,
      "explanation": "Six miles is approximately 9.66 kilometers, far beyond ordinary 100-meter twisted-pair Ethernet and typical multimode Ethernet reaches. Single-mode fiber with appropriate long-reach transceivers and an adequate optical budget is the suitable listed medium. Cat5e and Cat6 cannot provide this as one passive Ethernet channel. “Single-mode” still requires choosing compatible optics and checking total attenuation, connectors and splices rather than assuming any fiber module will reach."
    },
    {
      "id": "net-262",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You need to run four Ethernet network drops. Each drop is approximately 125 feet/38.1 meters. An interference exists along the path of each drop. You need to ensure that interference is reduced. Which cable type should you use? Assume properly grounded shielded cabling and suitable connectors.",
      "options": [
        "STP Cat5e",
        "UTPCat5e",
        "Cat3",
        "UTPCat6"
      ],
      "correct": 0,
      "explanation": "At 125 feet, approximately 38.1 meters, the runs are within ordinary copper Ethernet channel limits. The issue is interference, so properly grounded STP Cat5e is the targeted choice. UTP Cat5e and UTP Cat6 do not add shielding; a higher unshielded category alone is not the requested remedy. Cat3 is an older lower-performance option. Correct bonding and suitable shielded connectors are essential to realize the expected protection."
    },
    {
      "id": "net-263",
      "chapter": "protocoale",
      "type": "single",
      "question": "How many layers does the TCP/IP model have?",
      "options": [
        "3",
        "4",
        "6",
        "7"
      ],
      "correct": 1,
      "explanation": "The conventional TCP/IP model has four layers: Application, Transport, Internet and Link/Network Access. Seven belongs to OSI, while three and six are not the conventional TCP/IP count. A five-layer teaching variant separates Physical from Data Link, but it is not offered here. Layer counts depend on the model convention rather than the number of software components in a particular computer."
    },
    {
      "id": "net-264",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer is named Transport in both the OSI and four-layer TCP/IP models and provides end-to-end transport functions?",
      "options": [
        "Physical",
        "Data Link",
        "Transport",
        "Application"
      ],
      "correct": 2,
      "explanation": "Transport is the common layer for endpoint transport functions such as TCP reliability and UDP datagrams. Application is also present by name in both models, but it supplies higher network services rather than the requested transport function. In four-layer TCP/IP, Physical and Data Link are normally combined as Network Access/Link. The mapping is conceptual rather than a requirement for separate software modules per layer."
    },
    {
      "id": "net-265",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What model is used to describe how data communication occurs between hosts?",
      "options": [
        "Server-centric model",
        "Workgroup model",
        "Peer-to-peer model",
        "OSI reference model"
      ],
      "correct": 3,
      "explanation": "The OSI reference model provides a seven-layer framework for describing communication functions between hosts. Server-centric, workgroup and peer-to-peer describe service or administration arrangements, not the general layered communication reference model. OSI is conceptual and does not require every deployed TCP/IP implementation to have a separate software module for each layer. Its value here is classifying responsibilities and interfaces across the communication process."
    },
    {
      "id": "net-266",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "An ICMP ping message is sent at the application layer of the OSI model. What is correct instead?",
      "options": [
        "Network",
        "Transport",
        "Data-link",
        "No change is needed"
      ],
      "correct": 0,
      "explanation": "ICMP is conventionally classified at the Network layer with IP, so Network is the correction. The ping program is an application/tool, but the ICMP echo messages it generates are not an application-layer protocol over TCP or UDP. Data Link carries the resulting local frames, and Transport is not required for ICMP's own message delivery. Distinguish a tool's user interface from the protocol it uses."
    },
    {
      "id": "net-267",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer in the OSI model covers HTTP, FTP, and RDC?",
      "options": [
        "Physical",
        "Session",
        "Application",
        "Presentation"
      ],
      "correct": 2,
      "explanation": "HTTP, FTP and Remote Desktop application services are conventionally classified at the Application layer. Physical signaling, session coordination and representation functions are different conceptual responsibilities. RDC is technically the Remote Desktop Connection client rather than a protocol name, but its use represents a user-facing remote desktop service here. The fact that it uses lower-layer transport does not classify the entire service as Physical or Session."
    },
    {
      "id": "net-268",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "Which two functions are implemented at the application layer of the OSI model? Choose two.",
      "options": [
        "Remote file services",
        "Data encryption/decryption",
        "Data compression",
        "Directory services"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Remote file services and directory services are application-level functions, so those are the two selections. In the traditional OSI functional model, compression and encryption/decryption are assigned to Presentation. Real applications and lower-layer protocols can also perform encryption or compression, but the question asks for the conceptual classification. File and directory services expose useful network operations to applications rather than merely transforming the representation of bytes."
    },
    {
      "id": "net-269",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What layer in the OSI model is used to encrypt data? Use the traditional conceptual OSI classification, not a claim that all real implementations operate only at that layer.",
      "options": [
        "Physical",
        "Session",
        "Application",
        "Presentation"
      ],
      "correct": 3,
      "explanation": "Presentation is the traditional OSI layer associated with encryption, decryption, encoding and representation conversion. Physical handles signals, Session coordinates dialogue, and Application provides network services to applications. This answer is explicitly conceptual: real encryption can occur at several layers, including link encryption, IPsec and application-level encryption. The question's qualification prevents treating the Layer 6 classification as an exclusive implementation rule."
    },
    {
      "id": "net-270",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Encryption takes place at what layer of the OSI Model? Use the traditional conceptual OSI classification, not a claim that all real implementations operate only at that layer.",
      "options": [
        "7",
        "6",
        "4"
      ],
      "correct": 1,
      "explanation": "Layer 6 is Presentation, conventionally assigned representation transformations including encryption and decryption. Layer 7 is Application and Layer 4 Transport, so neither is the requested conceptual label. In real stacks, TLS, IPsec and application encryption do not map neatly to one universal OSI layer. The stem deliberately asks for the teaching-model classification rather than denying those implementations."
    },
    {
      "id": "net-271",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "POP3 is in what layer of the OSI model?",
      "options": [
        "7",
        "4",
        "2"
      ],
      "correct": 0,
      "explanation": "POP3 is an application-layer email retrieval protocol, so OSI Layer 7 is correct. It normally uses TCP below it, but that does not make POP3 itself a Layer 4 protocol. Layer 2 handles local frames and MAC addressing. Standard POP3 uses TCP 110, with implicit TLS commonly on 995; these ports illustrate transport use rather than changing the protocol's application-layer role."
    },
    {
      "id": "net-272",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer of the OSI model includes VLANs?",
      "options": [
        "Physical",
        "Data Link",
        "Network",
        "Transport"
      ],
      "correct": 1,
      "explanation": "VLANs are primarily a Data Link, Layer 2, segmentation mechanism. IEEE 802.1Q tagging identifies VLAN membership in Ethernet frames, separating broadcast domains. Physical describes the medium, Network handles IP routing between those domains, and Transport handles end-to-end process communication. VLANs are often paired with separate IP subnets, but the association does not turn VLAN tagging into a Layer 3 function."
    },
    {
      "id": "net-273",
      "chapter": "protocoale",
      "type": "single",
      "question": "NetBIOS protocol is what layer of the OSI model? Consider the NetBIOS session service specifically.",
      "options": [
        "Network",
        "Session",
        "Transport"
      ],
      "correct": 1,
      "explanation": "The specified NetBIOS session service is conventionally associated with the Session layer because it establishes and manages named sessions. Network handles routing and Transport handles underlying delivery mechanisms. NetBIOS includes multiple services and can run over TCP/IP, so treating the entire historical NetBIOS family as exclusively one OSI layer would be oversimplified. The session-service qualifier is what makes this mapping appropriate."
    },
    {
      "id": "net-274",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which layer in the OSI model is used to verify that data was delivered without error? Assume TCP, rather than every possible transport protocol.",
      "options": [
        "Physical",
        "Data Link",
        "Network",
        "Transport"
      ],
      "correct": 3,
      "explanation": "With TCP explicitly assumed, Transport provides end-to-end checksum checking, acknowledgments, sequencing and retransmission to deliver an ordered byte stream or report failure. Data Link CRC can detect corruption on one link, but does not provide TCP's end-to-end recovery. Network routes packets, and Physical carries signals. Not all transport protocols guarantee reliable delivery; UDP is the obvious counterexample, which is why the TCP qualification matters."
    },
    {
      "id": "net-275",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which transport-layer protocol is appropriate for reliable delivery of a video file where all bytes must arrive in order?",
      "options": [
        "TCP",
        "UDP",
        "FTP",
        "RDC"
      ],
      "correct": 0,
      "explanation": "TCP provides the required transport-layer reliable ordered byte stream, using sequencing, acknowledgments and retransmission. UDP alone lacks those delivery/order guarantees. FTP is an application-layer file-transfer service that commonly uses TCP, so it can meet the file-transfer goal but is not itself the transport-layer answer. RDC is a remote-desktop client/service. A permanent outage can still cause TCP to report failure; reliability is not an unconditional success guarantee."
    },
    {
      "id": "net-276",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which type of switch can provide a layer 3 function?",
      "options": [
        "Managed switch",
        "Multi layer switch",
        "Unmanaged switch"
      ],
      "correct": 1,
      "explanation": "A multilayer switch includes Layer 3 routing capabilities, such as routing between VLANs. “Managed” means configurable/monitorable and does not necessarily imply IP routing support. An unmanaged switch generally supplies basic Layer 2 forwarding without those administrative routing features. The required distinction is forwarding layer, not merely whether an administrator can log in to the device."
    },
    {
      "id": "net-277",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is a similarity between Layer 2 and Layer 3 switches?",
      "options": [
        "Both provide a high level of security to the network",
        "Both use logical addressing to forward transmissions",
        "Both route IP packets between different networks",
        "Both allow the implementation of VLANs"
      ],
      "correct": 3,
      "explanation": "Both VLAN-capable Layer 2 switches and Layer 3 switches support logical VLAN segmentation. Only the Layer 3 device adds routing between IP networks; pure Layer 2 forwarding uses MAC addresses rather than logical IP routes. High security is not automatic for either device. Thus VLAN support is the intended shared capability, while routing and IP-based decisions distinguish the additional layer. Capabilities still depend on the actual product rather than every minimal unmanaged switch supporting configurable VLANs."
    },
    {
      "id": "net-278",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "What is the purpose of a Media Access Control (MAC) address? Choose two.",
      "options": [
        "Identify the destination interface for frame delivery on the local link",
        "Identify a network interface at the data-link layer",
        "Manage permissions for shared network resources",
        "Provide a routing address on a local area network (LAN)"
      ],
      "correct": [
        1,
        0
      ],
      "explanation": "A MAC address identifies an interface at the data-link layer and appears as the destination identifier for local-link frame delivery. These are the two correct purposes. It does not grant shared-resource permissions, and it is not the network-layer routing address. For a remote IP destination, the Ethernet destination is generally the next-hop router's MAC, not the ultimate remote host's MAC."
    },
    {
      "id": "net-279",
      "chapter": "protocoale",
      "type": "single",
      "question": "At which OSI layer is ICMP normally classified?",
      "options": [
        "2",
        "4",
        "3"
      ],
      "correct": 2,
      "explanation": "ICMP is normally classified at OSI Layer 3, the Network layer, because it supports IP control and error reporting. It is not a TCP/UDP application transported at Layer 4 and is not merely a Layer 2 frame-control protocol. A ping utility may be a user application, but its ICMP messages remain Network-layer protocol messages."
    },
    {
      "id": "net-280",
      "chapter": "protocoale",
      "type": "single",
      "question": "TCP/IP and IPX/SPX are known as _________ stacks.",
      "options": [
        "Protocols",
        "Services",
        "Layers",
        "Lenses"
      ],
      "correct": 0,
      "explanation": "TCP/IP and IPX/SPX are protocol stacks/suites: related protocols that cooperate across communication functions. “Protocols” is the offered word matching that terminology, although “protocol stacks” is the more grammatical full phrase. Services are capabilities offered using protocols, and layers are individual functional levels rather than the name of the entire suite. “Lenses” has no standard networking meaning here."
    },
    {
      "id": "net-281",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the advantage of UDP over TCP?",
      "options": [
        "Less Overhead - Faster Performance",
        "Older - Larger pool of compatible hardware",
        "TCP is not IPv6 compatible UDP is",
        "UDP can operate at Layer 1"
      ],
      "correct": 0,
      "explanation": "UDP has a small header and lacks TCP's connection setup, acknowledgments and built-in retransmission, so it can impose less overhead and suit latency-sensitive applications. That does not guarantee faster completion for every task; an application needing reliability may reimplement it. TCP also supports IPv6, and UDP does not operate at Layer 1. Compatibility with older hardware is not the distinguishing advantage being tested."
    },
    {
      "id": "net-282",
      "chapter": "protocoale",
      "type": "single",
      "question": "___ protocol provides reliable, ordered delivery Reliability does not guarantee successful delivery during a permanent network outage.",
      "options": [
        "TCP",
        "UDP"
      ],
      "correct": 0,
      "explanation": "TCP provides a reliable, ordered byte stream using sequencing, acknowledgments and retransmission. UDP supplies datagrams without those built-in guarantees. Reliability means the connection either delivers the stream consistently or eventually reports failure; it does not promise successful delivery through a permanent outage. Applications must still handle timeout/disconnection conditions and verify their own higher-level transactions where necessary."
    },
    {
      "id": "net-283",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which of the following is a public address?",
      "options": [
        "10.1.1.1",
        "178.16.1.1",
        "192.168.1.1"
      ],
      "correct": 1,
      "explanation": "178.16.1.1 is outside the RFC 1918 private ranges and is the public-address choice. Do not confuse 178 with 172: private 172 space is specifically 172.16.0.0 through 172.31.255.255. 10.1.1.1 belongs to private 10/8, and 192.168.1.1 belongs to private 192.168/16. Public address space does not itself guarantee current reachability or ownership by a particular organization."
    },
    {
      "id": "net-284",
      "chapter": "protocoale",
      "type": "single",
      "question": "What ports are defined from 49,152 through 65,535?",
      "options": [
        "Well-known ports",
        "Registered ports",
        "Dynamic ports",
        "Sliding ports"
      ],
      "correct": 2,
      "explanation": "Ports 49152 through 65535 are the dynamic/private range in the standard service-port classification. Well-known/system ports are 0–1023 and registered/user ports 1024–49151. “Sliding ports” is not the corresponding allocation category. Operating systems choose ephemeral client ports according to their own configured ranges, which may differ, so the classification does not mean every client must always allocate only from this range."
    },
    {
      "id": "net-285",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "A server only needs direct IPv4 communication with devices on its local subnet. Which TWO IPv4 configuration values are required?",
      "options": [
        "Default gateway",
        "Mac address",
        "IP address",
        "Primary DNS server",
        "Subnet mask"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "For direct communication with local-subnet IPv4 neighbors, configure an IP address and subnet mask. The address identifies the host and the mask determines which destinations are on-link. A default gateway is needed for off-subnet routing, not the stated local-only case. DNS is unnecessary when using numeric addresses. The NIC has a MAC address, but the question asks for IPv4 configuration values rather than link-layer identity."
    },
    {
      "id": "net-286",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which prefix is reserved for IPv6 link-local unicast addresses?",
      "options": [
        "FEC0:",
        "fe80::/10",
        "FFF:"
      ],
      "correct": 1,
      "explanation": "FE80::/10 is reserved for IPv6 link-local unicast addressing. Such addresses operate on a single link and are not routed across ordinary routers. FEC0 refers to deprecated site-local space, not link-local. “FFF:” is not the specified link-local prefix. Interface scope identifiers may be required when using link-local addresses on a host with multiple links."
    },
    {
      "id": "net-287",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which is a IPv4 to IPv6 tunneling protocol?",
      "options": [
        "DHCP",
        "RDP",
        "Teredo"
      ],
      "correct": 2,
      "explanation": "Teredo tunnels IPv6 traffic over IPv4 UDP and can traverse some IPv4 NAT configurations. DHCP distributes address configuration, and RDP carries remote desktop sessions. The phrase “IPv4 to IPv6” is informal here: Teredo is encapsulation of IPv6 through IPv4 infrastructure, not arbitrary translation between IPv4 and IPv6-only applications. Native IPv6 is preferable when available."
    },
    {
      "id": "net-288",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which port categories include inbound ports of HTTP, HTTPS, FTP, and DNS?",
      "options": [
        "Well-known ports",
        "Registered ports",
        "Dynamic ports",
        "Private ports"
      ],
      "correct": 0,
      "explanation": "The conventional HTTP 80, HTTPS 443, FTP control 21 and DNS 53 ports all lie in the well-known/system range 0–1023. Registered ports occupy 1024–49151, while dynamic/private ports occupy 49152–65535. These assignments identify typical service listeners, not a rule that the protocol can never run on another configured port. FTP data behavior and encrypted DNS variants also involve additional details beyond these default assignments."
    },
    {
      "id": "net-289",
      "chapter": "protocoale",
      "type": "single",
      "question": "What information is contained in a client computer's HOSTS file?",
      "options": [
        "NetBIOS name to IP address mappings",
        "A list of local DNS Servers",
        "FQDN to IP address mapping",
        "A list of Internet and root DNS servers"
      ],
      "correct": 2,
      "explanation": "HOSTS contains static mappings from IP addresses to host names, including FQDNs and optional aliases. Local name resolution can use these mappings without querying DNS. LMHOSTS is the separate legacy NetBIOS mapping file. HOSTS does not list DNS server configuration or Internet root-server hints. Changes can override expected name resolution, so it is relevant when one computer resolves a name differently from others."
    },
    {
      "id": "net-290",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which listed action recognizes a request for the local computer’s own hostname without contacting a DNS server?",
      "options": [
        "The client checks the LMHOSTS file for an entry to the name",
        "The client checks its HOSTS file for an entry to the name",
        "The client checks to see if the name being resolved is its own name"
      ],
      "correct": 2,
      "explanation": "The specifically described action is checking whether the requested name is the local computer's own hostname. That can resolve a self-reference without consulting a DNS server. HOSTS and LMHOSTS are separate file-based mechanisms and are not required merely to recognize the computer's own configured name. The question does not establish a universal lookup order for all operating systems or all kinds of names."
    },
    {
      "id": "net-291",
      "chapter": "protocoale",
      "type": "single",
      "question": "What type of DNS resource record maps an IP address to a fully qualified domain name (FQDN)?",
      "options": [
        "CNAME",
        "PTR",
        "AAAA",
        "A"
      ],
      "correct": 1,
      "explanation": "A PTR record provides reverse DNS mapping from an address-derived reverse-zone name to a domain name. A and AAAA perform forward mappings to IPv4 and IPv6 addresses respectively. CNAME provides an alias between names. Reverse records must be maintained in the appropriate reverse zone; an A record does not automatically imply that a correct PTR record exists."
    },
    {
      "id": "net-292",
      "chapter": "protocoale",
      "type": "single",
      "question": "_____ query is when the DNS server sends request to the root server? Assume an uncached iterative query made by a recursive resolver.",
      "options": [
        "Advanced",
        "Iterative",
        "Complex"
      ],
      "correct": 1,
      "explanation": "Iterative is correct under the given scenario: the recursive resolver queries a root server and follows referrals as needed to find an answer. The end client's request to its resolver can still be recursive; that is a different leg of the process. “Advanced” and “complex” are not the standard DNS query-mode names. Cache entries or a forwarder can avoid a new root query entirely."
    },
    {
      "id": "net-293",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "DHCPServ has scopes for two routed subnets. Which TWO listed descriptions are valid ways to provide DHCP relay functionality for clients on the other subnet? These may be alternative implementations, not two separate mandatory deployments.",
      "options": [
        "Configure the router to support DHCP messages and BOOTP messages",
        "Deploy a DHCP relay in the other subnet",
        "Reconfigure both subnets with the same set of addresses",
        "Deploy a NAT Server"
      ],
      "correct": [
        1,
        0
      ],
      "explanation": "A DHCP relay on the client subnet forwards local DHCP broadcasts to a server on another subnet. A router configured for DHCP/BOOTP relay is a common way to implement that same function. These two options are valid mechanisms/descriptions, not two universally mandatory separate deployments. Reusing the same address set on distinct routed subnets does not solve broadcast forwarding and can break routing. NAT translates addresses and is not the required DHCP relay service."
    },
    {
      "id": "net-294",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Your home computer is having problems accessing the Internet. You suspect that your Internet router's DHCP service is not functioning, so you check your computer's IP address. Which address indicates that your router's DHCP service is NOT functioning?",
      "options": [
        "169.254.1.15",
        "172.16.1.15",
        "192.168.1.15",
        "10.19.1.15"
      ],
      "correct": 0,
      "explanation": "169.254.1.15 is a plausible Windows APIPA address, suggesting that the client failed to obtain a DHCP lease. The other choices are valid private address ranges and could be normal router-issued leases. The symptom does not uniquely prove the router service is faulty: client link, VLAN, wireless association or filtering problems can prevent DHCP replies too. Confirm lease acquisition and reachability before replacing the router."
    },
    {
      "id": "net-295",
      "chapter": "protocoale",
      "type": "single",
      "question": "You deploy Windows Server 2016 with the Remote Access role to provide Internet access for private IPv4 clients through one public IPv4 connection. Which function should you configure so those clients can browse multiple websites?",
      "options": [
        "DHCP",
        "NAT",
        "WAP",
        "VPN"
      ],
      "correct": 1,
      "explanation": "Configure NAT, normally including port translation, on the server providing the private clients Internet access. It rewrites source addresses and maps reply traffic back to the correct clients. DHCP can distribute their local settings but does not perform this translation. WAP proxies selected published web applications, and VPN creates private tunnels. Routing and firewall configuration are also needed; the Remote Access role name alone does not automatically enable correct Internet sharing."
    },
    {
      "id": "net-296",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "You are a network administrator at a small business. An employee is not able to access any websites. No other employees are having this problem. All computers are on the same intranet. You need to troubleshoot the problem. Which three actions should you complete? Choose three.",
      "options": [
        "Check the affected computer’s DNS and local firewall/proxy configuration",
        "Contact the internet service provider",
        "Check the employee’s network adapter to verify that it is working",
        "Check to see if the router is working properly",
        "Determine whether the employee’s computer has a valid IP address"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "Because other employees can browse normally, first investigate the affected computer: verify its adapter/link, valid IP configuration, and DNS plus local firewall/proxy settings. Those three actions target faults consistent with a single-host symptom. An ISP or general router failure would normally affect more users, so contacting the ISP or prioritizing shared-router checks is less efficient initially. This is a troubleshooting priority, not proof that infrastructure could never selectively affect one client."
    },
    {
      "id": "net-297",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "You are a network administrator at a small business. One morning at the start of business, you realize that no employees at the company can access external websites. However, all employees have the same intranet connected by a single router. You need to troubleshoot the problem. Which two actions should you complete? Choose two.",
      "options": [
        "Check the router for proper physical connectivity",
        "Check that each computer has a valid IP address",
        "Contact the internet service provider",
        "Check for bad network adapters on individual computers"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "A failure affecting all users' external web access points toward shared infrastructure. Check the common router's physical connectivity and contact/check the ISP service after local boundary checks. Simultaneous independent NIC failures are unlikely. Per-client address inspection can be useful, but checking every computer is less targeted than investigating the shared exit. DNS or firewall issues remain possible; these two choices are the best offered shared-path actions rather than a complete diagnostic procedure."
    },
    {
      "id": "net-298",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "A computer is connected to a switch through a network patch panel by using copper cable. The computer is getting lower-than-expected data speeds. Which two actions should you perform to identify the issue? Choose two.",
      "options": [
        "Test the data speed of the cable",
        "Use an optical time-domain reflectometer (OTDR) to test the line",
        "Search for broken wires in the cable by using a cable tester",
        "Tone the line from Unit A to Unit B"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Measure the achieved data rate/link capability and use a copper cable tester to identify opens, shorts, miswires or pair problems along the patch-panel path. A toner helps identify a cable but does not validate high-speed signal performance. An OTDR is for optical fiber, not copper Ethernet. Link negotiation and channel certification can distinguish a damaged pair or poor termination from software/application throughput limitations."
    },
    {
      "id": "net-299",
      "chapter": "infrastructura",
      "type": "single",
      "question": "The fiber network connection between Building A and Building B is 550 meters. There is attenuation on the line. Which tool should you use to test this?",
      "options": [
        "Multimeter",
        "Time-domain reflectometer (TDR)",
        "Toner",
        "Optical time-domain reflectometer (OTDR)"
      ],
      "correct": 3,
      "explanation": "An OTDR sends optical test pulses and analyzes returned light to locate fiber loss events, reflections, breaks or poor splices along the 550-meter run. A conventional electrical TDR is for copper, a multimeter measures electrical quantities, and a toner identifies conductors. An optical power meter/loss test set can measure end-to-end loss too, but is not offered. The medium, not merely the 550-meter distance, selects the optical instrument."
    },
    {
      "id": "net-300",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command shows the public IP information for a certain domain name?",
      "options": [
        "netstat",
        "nslookup",
        "tracert"
      ],
      "correct": 1,
      "explanation": "nslookup queries DNS for records associated with the domain, commonly returning public A/AAAA information when querying public DNS. netstat shows local connections/sockets, and tracert probes a route to a resolved destination rather than being the targeted DNS-record tool. DNS answers can vary by resolver, split-horizon configuration or geography, so “public IP information” means the returned DNS records, not a guarantee of one universal address for every client."
    },
    {
      "id": "net-301",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "On a Windows computer, which utility should you use to determine whether your Domain Name System (DNS) service is properly resolving fully qualified domain names (FQDNs) to IP addresses?",
      "options": [
        "netstat",
        "nslookup",
        "nbtstat",
        "ipconfig"
      ],
      "correct": 1,
      "explanation": "nslookup directly queries DNS and displays returned records, letting you test whether an FQDN resolves to the expected IP address and which DNS server answered. netstat reports sockets/connections, nbtstat concerns legacy NetBIOS names, and ipconfig shows local adapter settings. Those can support investigation but do not replace this DNS query. A successful result should still be checked against the intended name and expected record, not accepted solely because any address was returned."
    },
    {
      "id": "net-302",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "___ is the command you run to view your IP information on a Windows PC?",
      "options": [
        "Ifconfig",
        "Netconfig",
        "ipconfig"
      ],
      "correct": 2,
      "explanation": "ipconfig is the standard Windows command for displaying IP interface configuration. ifconfig is associated with Unix-like systems, though many modern Linux installations prefer ip. “Netconfig” is not the ordinary Windows command in this set. Use ipconfig /all when details such as DHCP status, DNS servers and MAC addresses are needed beyond the basic address/mask/gateway display."
    },
    {
      "id": "net-303",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command should you use to force a client computer to renew its address lease from a DHCP server?",
      "options": [
        "Pathping",
        "ipconfig /renew",
        "netstat",
        "Netsh"
      ],
      "correct": 1,
      "explanation": "ipconfig /renew asks the Windows DHCP client to renew or acquire a lease. pathping diagnoses path/loss behavior and netstat reports connections, not leases. netsh can configure many networking properties but is not the direct lease-renewal command offered. The DHCP server may return the same address; renewal is not a promise to replace it with a different one."
    },
    {
      "id": "net-304",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "A user reports that she cannot connect to network resources from a computer on the company network. The user was able to connect to the network resources yesterday. You verify that the user's computer is properly physically connected to the network. You discover that the computer's IP address is 169.254.48.97. You need to restore access to network resources. What should you do next?",
      "options": [
        "Flush the cache on the DNS server",
        "Reset the user's password on the server",
        "Check your router's current routing tables",
        "Verify that the DHCP service is available"
      ],
      "correct": 3,
      "explanation": "The 169.254.48.97 address suggests APIPA fallback after DHCP acquisition failed. Since the physical connection has already been checked, investigate DHCP availability and the path to it, including VLAN/relay settings. DNS cache clearing or a password reset would not correct the missing ordinary lease. Router tables could matter in some designs, but the specific immediate clue is failed address configuration rather than a proven general routing failure."
    },
    {
      "id": "net-305",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command shows all ports and incoming connects?",
      "options": [
        "netstat",
        "nslookup",
        "tracert"
      ],
      "correct": 0,
      "explanation": "netstat is the appropriate tool for examining active connections and listeners; on Windows, netstat -a includes listening endpoints. nslookup is for DNS records, and tracert is for responding network hops. “All ports” should mean relevant open/listening sockets, not all 65,536 possible port numbers. Options and privileges determine details such as numeric addresses and process ownership."
    },
    {
      "id": "net-306",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You are setting up a network computer game. You need to open up ports on your firewall so your friends can join the network. Which command displays the ports that your computer is listening for?",
      "options": [
        "nslookup",
        "nbtstat",
        "ping",
        "netstat"
      ],
      "correct": 3,
      "explanation": "Use netstat with options such as -a or -ano to identify listening endpoints and, where needed, their owning processes. nslookup queries DNS, nbtstat concerns NetBIOS, and ping tests ICMP reachability. Finding a game listener helps target the firewall rule rather than opening broad unrelated ranges. Router port forwarding, binding address and the game's required TCP/UDP ports may also matter; netstat alone does not create the access rule."
    },
    {
      "id": "net-307",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which command shows the hops or routers along a certain route?",
      "options": [
        "netstat",
        "nslookup",
        "tracert"
      ],
      "correct": 2,
      "explanation": "tracert probes increasing TTL values and displays responding hops toward a selected destination. netstat instead describes local connections/sockets, while nslookup queries DNS. A displayed sequence is an observation, not a guarantee of every forwarding device: some routers filter responses, and load-balanced or asymmetric paths can vary. Ordinary Layer 2 switches do not normally appear as IP hops."
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which TCP/IP layer contains TCP?",
      "options": [
        "Application",
        "Network Access",
        "Transport",
        "Internet"
      ],
      "correct": 2,
      "explanation": "TCP belongs to the Transport layer of TCP/IP, providing port-based endpoint communication and reliable ordered byte streams. Internet contains IP and routing functions, Network Access covers local-link delivery, and Application contains services such as HTTP. The fact that an application uses TCP does not place TCP in Application; it is the lower service carrying that application's data.",
      "id": "net-308"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "What is the first phase in a standard network-troubleshooting process?",
      "options": [
        "Run every possible test",
        "Identify every user before asking questions",
        "Identify the problem",
        "Replace the router"
      ],
      "correct": 2,
      "explanation": "First identify the problem: gather symptoms, scope, recent changes and relevant user information. That establishes what needs explaining before choosing tests or a corrective action. Running every test wastes time and may disrupt service. Replacing a router assumes an unproven cause, while identifying every user before asking any questions is unnecessarily rigid. The first phase should define the observed failure, not immediately prescribe hardware replacement.",
      "id": "net-309"
    },
    {
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "ping can test IP reachability, subject to ICMP filtering.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "tracert is the standard Linux command for tracing a route.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "host performs DNS lookups.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "netstat can show listening ports and active connections when called with appropriate options.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Select Yes for ping reachability, Yes for host DNS lookup and Yes for netstat listeners/connections with suitable options. Select No for tracert as the standard Linux command: traceroute, tracepath or related tools are normally used there, while tracert is Windows terminology. ICMP filtering can make ping fail despite other connectivity. Linux tools also depend on installed packages, so a missing utility is not proof that its described diagnostic role is wrong.",
      "id": "net-310"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A Layer 2 switch acts as a multiport bridge.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A Layer 2 switch forwards frames using an IP routing table.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A switch normally floods an unknown-unicast frame to other forwarding ports in the same VLAN.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Select Yes: a Layer 2 switch is a multiport bridge. Select No: ordinary Layer 2 forwarding uses MAC-address information, not an IP routing table. Select Yes: an unknown unicast is normally flooded through other eligible forwarding ports of the same VLAN. This flooding excludes the ingress port and respects forwarding state/VLAN boundaries; it does not mean the switch routes unknown frames to every network.",
      "id": "net-311"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A firewall can be a dedicated hardware appliance.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A firewall can be implemented in software.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A network firewall is a room that protects servers from fire.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A firewall can be a dedicated hardware appliance or software running on an endpoint/server, so both of those statements are Yes. It is not a literal fire-resistant room, so the third is No. In networking, a firewall applies traffic-control policy. Appliance and software implementations can offer similar filtering concepts; deployment form does not by itself establish the quality of the rules or provide protection against every threat.",
      "id": "net-312"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A traditional secondary DNS zone obtains records from another authoritative DNS server by zone transfer.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "AAAA records map hostnames to IPv4 addresses.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "On a normally configured Windows host, local HOSTS entries are checked before a fresh DNS lookup.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "A traditional secondary zone obtains authoritative zone data by transfer, so the first statement is Yes. AAAA maps names to IPv6, not IPv4, so the second is No; A is the IPv4 type. On a normally configured Windows host, HOSTS data can satisfy local resolution before a fresh DNS query, so the third is Yes. Application-specific resolvers can differ, but the statement explicitly concerns normal host behavior.",
      "id": "net-313"
    },
    {
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which two named transition mechanisms carry IPv6 over IPv4? Choose two.",
      "options": [
        "A generic Ethernet bridge",
        "ISATAP",
        "Teredo",
        "A VLAN"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "ISATAP and Teredo are IPv6-over-IPv4 transition/tunneling mechanisms. Teredo uses UDP encapsulation and can handle some NAT situations, while ISATAP was designed for IPv6 over an IPv4 infrastructure. A generic Ethernet bridge forwards local frames, and a VLAN partitions a Layer 2 broadcast domain; neither is intrinsically an IPv6-over-IPv4 transition tunnel. Tunneling is distinct from translating application traffic between IP versions.",
      "id": "net-314"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which Windows command shows detailed adapter information including DHCP status, DHCP server and DNS servers?",
      "options": [
        "ipconfig",
        "ping -d",
        "ping",
        "ipconfig /all"
      ],
      "correct": 3,
      "explanation": "ipconfig /all shows extended adapter details including DHCP enabled status, lease/server information and configured DNS servers. Bare ipconfig gives a shorter overview. ping tests ICMP reachability and ping -d is not the Windows detailed adapter-configuration command. An absent field can depend on whether the adapter uses DHCP or is connected, so interpret the relevant interface rather than assuming all adapters share one lease.",
      "id": "net-315"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which item is exactly a second-level domain directly beneath the .com top-level domain?",
      "options": [
        "edu",
        "gmetrix.com",
        "support.microsoft.com",
        "www.gmetrix.com"
      ],
      "correct": 1,
      "explanation": "gmetrix.com is exactly the domain directly beneath the com TLD in these choices. edu is itself a TLD, not a second-level .com name. support.microsoft.com and www.gmetrix.com contain an additional leftmost subdomain/host label. Although those longer names include second-level domains, they are not exactly the requested second-level domain as a whole.",
      "id": "net-316"
    },
    {
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each legacy access technology to its description.",
      "dragItems": [
        {
          "id": "i1",
          "text": "DSL"
        },
        {
          "id": "i2",
          "text": "ISDN BRI"
        },
        {
          "id": "i3",
          "text": "Cable modem"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Uses shared cable-TV broadband access",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Uses telephone copper pairs to reach provider equipment",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Provides two 64-kbps B channels",
          "correctItemId": "i2"
        }
      ],
      "explanation": "A cable modem connects through a cable-operator access network, commonly sharing neighborhood capacity across the cable-TV plant. DSL uses telephone copper pairs to provider DSL equipment, often separating broadband data from ordinary voice frequencies with suitable filtering. ISDN BRI is a different digital telephone service: two 64-kbps B channels carry bearer data, giving 2 × 64 = 128 kbps when bonded, while a separate D channel handles signaling. Telephone copper alone would not distinguish DSL from ISDN; the two-B-channel detail identifies BRI. Shared access does not mean every user receives an identical fixed rate, and nominal bearer/line capacity is not application throughput after overhead.",
      "id": "net-317"
    },
    {
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each network service to its primary role.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Remote Access Server"
        },
        {
          "id": "i2",
          "text": "DHCP"
        },
        {
          "id": "i3",
          "text": "Firewall"
        },
        {
          "id": "i4",
          "text": "NAT"
        },
        {
          "id": "i5",
          "text": "VPN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Allows or blocks packets",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Authenticates remote users",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Distributes IP configuration",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Translates private source addresses for Internet access",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Carries private communications across a public network",
          "correctItemId": "i5"
        }
      ],
      "explanation": "A firewall applies rules that allow or deny traffic, so it matches packet filtering. A Remote Access Server handles remote connections and user admission, often delegating credential validation to RADIUS rather than authenticating entirely by itself. DHCP leases IP configuration, including addresses and options such as gateway/DNS settings. NAT rewrites packet addresses, commonly also ports, so private clients can share public Internet access. A VPN encapsulates private communication across public transport, with appropriate encryption/authentication in a secure deployment. These functions can coexist on one gateway but are not interchangeable: NAT does not encrypt, DHCP does not authorize application traffic, and a firewall does not by itself create a protected remote-access tunnel.",
      "id": "net-318"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A router interconnects separate IP networks.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "VLAN membership is normally configured on switch ports.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Source NAT can translate a private source address to a public address.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "All three statements are Yes. A router interconnects IP networks, VLAN membership is commonly assigned to switch ports, and source NAT can replace a private source address with a public one. Dynamic VLAN assignment and tagged trunks are variations, not contradictions of “normally.” NAT can be integrated into a router, but routing and address translation remain separate functions; a router does not require NAT for every packet.",
      "id": "net-319"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Ordinary HTTP websites use TCP port 25 by default.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "HTTPS normally uses port 443.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "HTTP normally uses port 80.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Select No for HTTP on port 25: that is SMTP's conventional port. Select Yes for HTTPS on 443 and HTTP on 80. These are normal default service assignments, not unchangeable requirements for every deployment. HTTPS provides TLS protection, whereas ordinary HTTP does not. Firewall rules should also distinguish protocol and direction rather than treating the number alone as a complete access policy.",
      "id": "net-320"
    },
    {
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which classic coaxial Ethernet topology requires termination at both ends of its backbone?",
      "options": [
        "Bus",
        "Ring",
        "Mesh",
        "Star"
      ],
      "correct": 0,
      "explanation": "Classic coaxial Ethernet uses a bus with termination at both ends to suppress reflections. A missing or incorrect terminator can disrupt the shared medium. Star links meet at a central device, mesh links provide multiple peer paths, and a ring forms a closed loop rather than this terminated backbone. This is the historical coax Ethernet arrangement, not a claim that modern twisted-pair Ethernet requires exposed terminators on endpoint ports.",
      "id": "net-321"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "A home router supplies both IP and DNS settings through DHCP. Select the two client settings needed.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Obtain an IP address automatically"
        },
        {
          "id": "i2",
          "text": "Obtain DNS server address automatically"
        },
        {
          "id": "i3",
          "text": "Manually assign a random IP address"
        },
        {
          "id": "i4",
          "text": "Disable DNS"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "IP-address setting",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "DNS setting",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Choose automatic IP addressing and automatic DNS server addressing so the client accepts the router's DHCP lease/options. Manually choosing a random address risks conflicts, wrong subnet selection and incorrect gateway settings. Disabling DNS prevents normal name-based access. DHCP supplies the client configuration; it does not mean the router must itself be the final recursive DNS server, since it can advertise another resolver.",
      "id": "net-322"
    },
    {
      "chapter": "depanare-unelte",
      "type": "drag_drop",
      "question": "Match each Windows ping command or option to its behavior.",
      "dragItems": [
        {
          "id": "i1",
          "text": "ping -l <size> <host>"
        },
        {
          "id": "i2",
          "text": "ping 127.0.0.1"
        },
        {
          "id": "i3",
          "text": "ping -t <host>"
        },
        {
          "id": "i4",
          "text": "ping -n <count> <host>"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Sets the number of echo requests",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Pings continuously until stopped",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Sends the default four requests to loopback",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Sets the ICMP data-buffer size",
          "correctItemId": "i1"
        }
      ],
      "explanation": "For Windows ping, -n sets how many echo requests to send, useful for a bounded repeatable test. -t repeats until interrupted, useful when watching an intermittent failure. -l sets the ICMP data-buffer size, not the number of packets or the Ethernet link speed. ping 127.0.0.1 sends the default four probes to loopback, exercising local IP behavior rather than an external cable/router. A hostname target can require DNS resolution before probing, but none of these switches changes DHCP configuration. The platform matters: Unix-like ping commonly runs continuously by default and uses different flags, so Windows -t must not be assumed to mean the same thing everywhere.",
      "id": "net-323"
    },
    {
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match the minimum listed category commonly taught for each Ethernet rate.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Cat5e"
        },
        {
          "id": "i2",
          "text": "Cat5"
        },
        {
          "id": "i3",
          "text": "Cat2"
        },
        {
          "id": "i4",
          "text": "Cat3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1000BASE-T, using the conventional Cat5e deployment minimum",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "10BASE-T",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "100BASE-TX",
          "correctItemId": "i2"
        }
      ],
      "explanation": "10BASE-T maps to Cat3 because that category supports its 10-Mbps twisted-pair signaling. 100BASE-TX maps to Cat5 for the higher-frequency characteristics needed by that 100-Mbps physical variant. The stated conventional new-deployment baseline for 1000BASE-T is Cat5e, whose enhanced performance limits support gigabit operation across all four pairs. Cat2 is not suitable for the listed Ethernet rates. This is not a universal historical assertion that gigabit never works on Cat5: a compliant legacy channel can support it. Nor does Cat5e's capability force an endpoint to run at gigabit; both interfaces, all pairs, termination quality and channel length must support the negotiated rate.",
      "id": "net-324"
    },
    {
      "chapter": "protocoale",
      "type": "multiple",
      "question": "A router uses 192.168.1.100/24. Which two unused addresses can be assigned to another host on that subnet? Choose two.",
      "options": [
        "192.168.100.1",
        "192.168.1.100",
        "192.168.1.5",
        "192.168.1.255",
        "192.168.1.254",
        "192.168.0.10"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "With /24, the subnet is 192.168.1.0, broadcast is 192.168.1.255 and ordinary host range is .1–.254. The router already occupies .100. Therefore unused .5 and .254 are valid choices. .255 is broadcast, .100 would duplicate the router, and 192.168.100.1 plus 192.168.0.10 are outside the /24. This result comes from the explicit mask, not an assumed classful rule.",
      "id": "net-325"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which broadband technology uses a telephone copper pair to reach equipment at the telephone provider?",
      "options": [
        "Cable",
        "ISDN",
        "WAN as a specific access technology",
        "DSL"
      ],
      "correct": 3,
      "explanation": "DSL provides broadband over telephone copper pairs to provider DSL equipment. Cable uses a cable-operator network. ISDN also uses telephone infrastructure, but is a distinct digital service and is not normally classified as the broadband DSL technology requested. WAN is a scope/category, not one specific access medium. The provider-equipment and broadband clues together identify DSL.",
      "id": "net-326"
    },
    {
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "In the conceptual OSI model, which three communication relationships are recognized? Choose three.",
      "options": [
        "Any nonadjacent local layer directly",
        "A logical peer layer on another host",
        "No interlayer communication",
        "The immediately lower local layer",
        "All higher local layers directly",
        "The immediately higher local layer"
      ],
      "correct": [
        1,
        3,
        5
      ],
      "explanation": "In the layered model, each layer interacts with the immediately higher and lower local layers and logically communicates with its peer layer on the remote host. Peer communication is implemented through encapsulation and the lower layers, not a physical shortcut across the network. Arbitrary direct jumps to all higher or nonadjacent local layers violate the model's service-boundary abstraction. “No interlayer communication” would make the layered stack unable to operate.",
      "id": "net-327"
    },
    {
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "Which three OSI layers map to the TCP/IP Application layer? Choose three.",
      "options": [
        "Network",
        "Session",
        "Presentation",
        "Physical",
        "Data Link",
        "Application",
        "Transport"
      ],
      "correct": [
        1,
        2,
        5
      ],
      "explanation": "OSI Application, Presentation and Session map approximately to TCP/IP Application. TCP/IP Transport aligns with OSI Transport, Internet with Network, and Network Access with the lower link/physical functions. Therefore select Session, Presentation and Application rather than the lower layers. The mapping is conceptual; real protocols often combine functions that OSI describes separately.",
      "id": "net-328"
    },
    {
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match the IPv4 ranges to their classifications.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Public address space"
        },
        {
          "id": "i2",
          "text": "Multicast address space"
        },
        {
          "id": "i3",
          "text": "Private address space"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "192.168.0.0–192.168.255.255",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "224.0.0.0–239.255.255.255",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "75.0.0.0–75.255.255.255",
          "correctItemId": "i1"
        }
      ],
      "explanation": "192.168.0.0/16 is private unicast address space, commonly reused inside homes and organizations. It is not globally unique public addressing, and Internet access commonly needs translation or a suitable private interconnection. 224.0.0.0/4 is multicast: an address identifies a receiver group rather than one ordinary host or all hosts indiscriminately. 75.0.0.0/8 is the public-space example and is not one of the RFC 1918 private blocks. Public classification does not prove every address is assigned or reachable. These labels describe address purpose, not current connectivity: a private host can communicate internally, while a public address can still be unreachable through routing or firewall policy.",
      "id": "net-329"
    },
    {
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Assume traditional Ethernet ports with no Auto MDI-X. Choose cable wiring for these connections.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Straight-through"
        },
        {
          "id": "i2",
          "text": "Rollover"
        },
        {
          "id": "i3",
          "text": "Crossover"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Computer NIC to hub",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Hub to switch",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Without Auto MDI-X, connect a computer NIC to a hub with straight-through wiring because their conventional port pair roles complement each other. A hub-to-switch connection normally requires crossover wiring because those traditional network-device ports have like pair roles. A rollover is a serial-console wiring arrangement, not the Ethernet data connection. Uplink ports and automatic crossover can change practical requirements, but the exercise fixes the traditional case.",
      "id": "net-330"
    },
    {
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is a major weakness of a classic bus topology?",
      "options": [
        "Its backbone is a single point of failure",
        "Every endpoint is an independent router",
        "It requires several radio cards at every node",
        "It always uses one central switch"
      ],
      "correct": 0,
      "explanation": "A classic bus shares one backbone, so a break or termination fault can disrupt communication for many or all attached devices. That backbone is the major single point of failure. Endpoints need not be routers, the topology does not require multiple radio cards, and it does not use a sole central switch as a basic defining feature. Those alternatives describe unrelated equipment or a different topology.",
      "id": "net-331"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPv4 destination prefix denotes a default route?",
      "options": [
        "255.255.255.255/32",
        "127.0.0.1/32",
        "0.0.0.0/0",
        "1.1.1.1/32"
      ],
      "correct": 2,
      "explanation": "0.0.0.0/0 is the IPv4 default destination prefix. A zero-length prefix matches any destination and is used when no more-specific route is available. The /32 choices identify individual addresses: limited broadcast, loopback or one particular public host. A default route still needs a usable next hop/interface; the destination prefix alone does not prove Internet access works.",
      "id": "net-332"
    },
    {
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which statement best describes a basic peer-to-peer workgroup?",
      "options": [
        "It requires Active Directory",
        "Peers can share resources without a dedicated central server",
        "It requires domain single sign-on",
        "It requires RADIUS"
      ],
      "correct": 1,
      "explanation": "A basic peer-to-peer workgroup lets computers share resources without a dedicated central authentication/resource server. Individual peers can both request and provide services. Active Directory, domain single sign-on and RADIUS are not mandatory prerequisites. Workgroups can still use passwords and permissions; lacking a central domain does not mean unrestricted access or no administrative configuration.",
      "id": "net-333"
    },
    {
      "chapter": "echipamente",
      "type": "single",
      "question": "What is a virtual machine?",
      "options": [
        "An authentication-only server",
        "A smart thermostat",
        "A software-defined computer that runs a guest operating system on virtual hardware",
        "Cloud file storage"
      ],
      "correct": 2,
      "explanation": "A virtual machine is a software-defined computer with virtual hardware on which a guest operating system runs. A hypervisor mediates access to the underlying physical resources. It is not merely an authentication server role, a thermostat or cloud file storage. A VM can host many workloads and can run locally or in a cloud, so virtualization is not synonymous with off-premises hosting.",
      "id": "net-334"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which tool checks the wire map of a newly terminated copper Ethernet cable?",
      "options": [
        "Multimeter",
        "TDR only",
        "Cable tester",
        "Toner only"
      ],
      "correct": 2,
      "explanation": "A cable tester checks a copper cable's wire map for continuity, opens, shorts, reversed pairs and miswiring, depending on model. A toner mainly identifies/traces the cable. A multimeter can test simple continuity but does not conveniently validate the whole Ethernet pinout. A TDR measures reflections to locate impedance faults; “TDR only” is not the direct wire-map tool. Performance certification requires a suitably capable tester beyond a basic continuity device.",
      "id": "net-335"
    },
    {
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two fields can a basic packet-filtering firewall inspect? Choose two.",
      "options": [
        "Transport ports",
        "Image colors",
        "User account display names",
        "IP protocol number"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Basic packet filtering can inspect transport port numbers and the IP protocol field to distinguish traffic classes. Image colors and account display names are not ordinary IP/TCP/UDP header fields and require application inspection or identity integration rather than a basic filter. Rules commonly also use addresses and direction. A port-based permit does not automatically verify that the expected application is actually using that port.",
      "id": "net-336"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which link mode permits simultaneous sending and receiving?",
      "options": [
        "Simplex",
        "Full duplex",
        "Half duplex",
        "Gigabit as a duplex mode"
      ],
      "correct": 1,
      "explanation": "Full duplex permits simultaneous transmission and reception. Half duplex permits both directions but only one at a time, while simplex is one-way communication. Gigabit is a bit-rate description, not a duplex mode. A full-duplex Ethernet link avoids shared-medium collisions because separate communication paths support simultaneous traffic, provided both ends and the medium are configured compatibly.",
      "id": "net-337"
    },
    {
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "Which two are conventional dedicated digital leased-line services? Choose two.",
      "options": [
        "T1",
        "Dial-up",
        "Ordinary residential cable broadband",
        "E1"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "T1 and E1 are conventional dedicated digital leased-line options, with gross rates of 1.544 and 2.048 Mbps respectively. Dial-up establishes an on-demand switched connection, and ordinary residential cable broadband is a shared access service rather than the dedicated leased-line model. A carrier circuit can carry different higher-layer services; this classification concerns how the access service is provisioned.",
      "id": "net-338"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which wireless mode connects peers directly without an access point?",
      "options": [
        "Peer-to-peer Ethernet",
        "Bridged infrastructure",
        "Ad hoc",
        "Infrastructure"
      ],
      "correct": 2,
      "explanation": "Ad hoc Wi-Fi lets peers communicate without an infrastructure access point. Infrastructure mode uses an AP as the coordinating connection point. “Bridged infrastructure” still implies infrastructure, and peer-to-peer Ethernet is a different medium rather than the named wireless mode. Ad hoc should not be assumed to provide enterprise access control or Internet access automatically; those require additional configuration or another gateway.",
      "id": "net-339"
    },
    {
      "chapter": "echipamente",
      "type": "single",
      "question": "Which hypervisor type runs directly on host hardware rather than as an application inside a host OS?",
      "options": [
        "Type III",
        "Type II",
        "Type I",
        "Type IV"
      ],
      "correct": 2,
      "explanation": "A Type I hypervisor runs directly on host hardware in the standard classification. Type II runs as an application on a host operating system. Type III and Type IV are not the conventional alternative categories in this introductory model. Real implementations can have privileged management partitions, but that does not make every bare-metal hypervisor a hosted Type II design.",
      "id": "net-340"
    },
    {
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each service to its conventional server port.",
      "dragItems": [
        {
          "id": "i1",
          "text": "HTTPS"
        },
        {
          "id": "i2",
          "text": "SMTP"
        },
        {
          "id": "i3",
          "text": "FTP control"
        },
        {
          "id": "i4",
          "text": "DNS"
        },
        {
          "id": "i5",
          "text": "SSH"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "443",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "21",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "25",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "53",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "22",
          "correctItemId": "i5"
        }
      ],
      "explanation": "HTTPS is encrypted web traffic using TLS, conventionally on TCP 443; plaintext HTTP normally uses 80. FTP control uses TCP 21 for authentication and commands, not the file-data stream: active-mode data conventionally originates from server TCP 20, while passive mode negotiates another server port. SMTP relays mail between servers on TCP 25; client submission commonly uses 587 or implicit-TLS 465 instead. DNS resolves names and other records on port 53 using UDP and TCP; TCP is needed for zone transfers and also supported for normal queries. SSH supplies encrypted remote shell/control on TCP 22, contrasting with unencrypted Telnet on 23. Therefore the five mappings distinguish service roles as well as familiar numbers; opening one control port does not necessarily permit every related data channel.",
      "id": "net-341"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You will be late to a customer appointment. What is the best immediate response?",
      "options": [
        "Offer an unapproved discount",
        "Wait until arrival before explaining",
        "Cancel without notice",
        "Call promptly and explain the delay with an updated arrival estimate"
      ],
      "correct": 3,
      "explanation": "Call promptly, explain the delay and give an updated arrival estimate so the customer can plan or reschedule. Waiting until arrival or canceling without notice leaves the customer uninformed. Offering an unapproved discount commits resources without authorization and does not replace immediate communication. A professional response is timely and factual rather than making guarantees about arrival that cannot be supported.",
      "id": "net-342"
    },
    {
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which tool measures electrical voltage, current and resistance?",
      "options": [
        "Toner",
        "Multimeter",
        "OTDR",
        "TDR"
      ],
      "correct": 1,
      "explanation": "A multimeter measures electrical quantities such as voltage, current and resistance using the appropriate mode and safe connection method. A toner traces/identifies conductors. A TDR uses electrical reflections to locate cable faults, while an OTDR performs an optical counterpart for fiber. Neither reflectometer is the general voltage/current/resistance instrument described. Incorrect current-measurement setup can short a circuit, so using the correct meter mode matters.",
      "id": "net-343"
    },
    {
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two packet-header fields can basic firewall rules use? Choose two.",
      "options": [
        "IP addresses",
        "User display names",
        "Desktop application titles",
        "Transport ports"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "IP addresses and TCP/UDP transport ports are header values available to basic firewall rules. User display names and desktop application titles are not basic packet-header fields and need additional identity/process/application awareness. Filtering can also use protocol, interface and direction. The distinction is between information carried in ordinary network/transport headers and contextual information that a more sophisticated endpoint or application-aware system might know.",
      "id": "net-344"
    },
    {
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Some cordless phones can interfere with Wi-Fi in the same frequency band.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Fluorescent-light equipment can generate electromagnetic interference.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Microwave ovens are primarily a source of 2.4-GHz Wi-Fi interference, rather than the typical explanation for wired-link failures.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "All three statements are Yes. A cordless phone can interfere when it shares the Wi-Fi band; fluorescent-light equipment can generate EMI; and microwave ovens are a familiar 2.4 GHz Wi-Fi interference source rather than the usual explanation for copper-link failure. These are environment-dependent possibilities, not claims that every device always causes disruption. Frequency overlap, distance, shielding and equipment condition affect actual impact.",
      "id": "net-345"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "On a Cisco-style routing table, what is the administrative distance of a directly connected route?",
      "options": [
        "0",
        "255",
        "1",
        "120"
      ],
      "correct": 0,
      "explanation": "A directly connected route has administrative distance 0 in the Cisco-style scheme specified. A conventional static route defaults to 1, RIP to 120, and 255 denotes an unusable/untrusted route in that scheme. Administrative distance ranks route sources, not the metric used to compare paths inside one protocol. Other vendors can use different preference conventions, so the platform qualification is important.",
      "id": "net-346"
    },
    {
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which two statements about RIP are true? Choose two.",
      "options": [
        "A reachable route can have at most 15 hops",
        "It scales efficiently without limit",
        "It uses hop count as its routing metric",
        "Every change is broadcast instantly to every router"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "RIP uses hop count and considers at most 15 hops reachable; a metric of 16 means infinity/unreachable. Those are the two correct statements. It does not scale without limit, and routing changes are not magically broadcast instantly to every router. Updates propagate through neighbors and convergence takes time; RIP version and configuration also affect whether updates use broadcast or multicast.",
      "id": "net-347"
    },
    {
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two statements about legacy Internet Explorer security zones are true on a machine without restrictive policy? Choose two.",
      "options": [
        "There are four standard security zones",
        "Adding a site to a zone always blocks it",
        "Local Intranet and Trusted Sites must always have identical settings",
        "Restricted Sites security settings can be customized where policy permits",
        "Zones are managed only in Windows Firewall"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "The four normal user-visible IE zones are Internet, Local Intranet, Trusted Sites and Restricted Sites. Where policy allows, administrators/users can customize security settings, including Restricted Sites, so those two statements are true. Zone membership does not always block a site, Local Intranet and Trusted Sites need not have identical settings, and zones are configured through browser/Internet Options or policy rather than only Windows Firewall.",
      "id": "net-348"
    },
    {
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A failure of one spoke cable in a simple star normally affects only that endpoint’s link.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A central connection point can simplify adding endpoints.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Failure of the sole central device leaves all endpoint communication unaffected.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "The first two statements are Yes: a spoke-cable failure normally affects only that endpoint, and a central connection point simplifies endpoint additions. The last is No: failure of the sole central hub/switch can disrupt all dependent endpoint communication. These properties explain both the manageability advantage and central-device risk of a simple star. Redundant equipment can improve resilience but is not part of the stated basic topology.",
      "id": "net-349"
    },
    {
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "A single home computer securely connects to the company intranet over the Internet. Classify the connection.",
      "dragItems": [
        {
          "id": "i1",
          "text": "VPN"
        },
        {
          "id": "i2",
          "text": "GRE alone"
        },
        {
          "id": "i3",
          "text": "Host-to-site"
        },
        {
          "id": "i4",
          "text": "Site-to-site"
        },
        {
          "id": "i5",
          "text": "Host-to-host"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Protected connection technology",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "VPN connection type",
          "correctItemId": "i3"
        }
      ],
      "explanation": "The protected technology is a VPN, and a single home computer reaching a corporate network is host-to-site, also called remote-access VPN. Site-to-site would join network gateways, while host-to-host would protect a connection between individual endpoints rather than granting network access in this model. GRE alone provides encapsulation without inherent encryption/authentication, so it does not supply the stated secure connection by itself.",
      "id": "net-350"
    },
    {
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match the protocol data unit to its conventional OSI layer.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Transport"
        },
        {
          "id": "i2",
          "text": "Application"
        },
        {
          "id": "i3",
          "text": "Network"
        },
        {
          "id": "i4",
          "text": "Session"
        },
        {
          "id": "i5",
          "text": "Presentation"
        },
        {
          "id": "i6",
          "text": "Physical"
        },
        {
          "id": "i7",
          "text": "Data Link"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Bit",
          "correctItemId": "i6"
        },
        {
          "id": "z2",
          "label": "Frame",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Packet",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "TCP segment",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Physical carries bits as electrical, optical or radio symbols, so Bit belongs there. Data Link wraps local traffic in frames with addresses such as Ethernet MACs and a link-level check, making Frame its PDU. Network wraps transport data in packets with logical IP addresses for routing across links. Transport adds process endpoints and delivery behavior: TCP's PDU is a segment, whereas UDP uses datagrams. Application supplies services such as HTTP, Presentation concerns representation/encoding, and Session coordinates dialogues; none is the conventional layer named by these four lower PDU labels. A router removes/replaces link framing as packets move between links, illustrating why frame and packet are not interchangeable model terms.",
      "id": "net-351"
    },
    {
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "dhcp -release is the standard Windows command to release a DHCP lease.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "dhcp -renew is the standard Windows command to renew a DHCP lease.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "ipconfig /release releases the current DHCP IPv4 lease.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "ipconfig /renew requests renewal of DHCP configuration.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "Both dhcp -release and dhcp -renew are No: they are not the standard Windows client commands. ipconfig /release and ipconfig /renew are Yes. Release relinquishes the lease; renew requests DHCP configuration again. DNS cache management is separate. These commands affect eligible DHCP-configured interfaces and can interrupt connectivity; they do not turn arbitrary static settings into an approved DHCP lease.",
      "id": "net-352"
    },
    {
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match these decimal data rates.",
      "dragItems": [
        {
          "id": "i1",
          "text": "1 Gbps"
        },
        {
          "id": "i2",
          "text": "10 Mbps"
        },
        {
          "id": "i3",
          "text": "1000 Kbps"
        },
        {
          "id": "i4",
          "text": "1 Kbps"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "1 Mbps",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "1,000 bits per second",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "1,000 megabits per second",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "10,000,000 bits per second",
          "correctItemId": "i2"
        }
      ],
      "explanation": "With decimal networking prefixes, 1 Mbps equals 1000 Kbps, 1 Kbps equals 1000 bits/s, 1 Gbps equals 1000 Mbps, and 10 Mbps equals 10,000,000 bits/s. The mappings multiply by 1000 per prefix step, not 1024. Lowercase b denotes bits rather than bytes; dividing by eight is necessary when converting an ideal bit rate to bytes per second before accounting for protocol overhead.",
      "id": "net-353"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "Match each DNS need to a record type.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A"
        },
        {
          "id": "i2",
          "text": "CNAME"
        },
        {
          "id": "i3",
          "text": "PTR"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Create an alias for a canonical hostname",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Resolve an address back to a hostname",
          "correctItemId": "i3"
        }
      ],
      "explanation": "A CNAME creates an alias pointing at a canonical DNS name. A PTR supplies reverse address-to-name lookup. A is the distractor because it maps a name forward to an IPv4 address rather than providing either requested relationship. A CNAME target is a name, not an IP literal, and forward/reverse records must be managed independently rather than assumed to be automatically consistent.",
      "id": "net-354"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which is the strongest Wi-Fi security option among these listed legacy choices?",
      "options": [
        "RADIUS alone",
        "WEP",
        "WPA2 with AES-CCMP",
        "Original WPA with TKIP"
      ],
      "correct": 2,
      "explanation": "WPA2 with AES-CCMP is the strongest of the listed complete legacy Wi-Fi protection choices. WEP is fundamentally broken and original WPA/TKIP has known weaknesses. RADIUS supports centralized authentication/accounting but is not by itself an over-the-air encryption suite. WPA3 may be preferable for modern supported deployments, but is not an offered choice. Correct credentials, certificate validation and configuration remain important even with a stronger cipher suite.",
      "id": "net-355"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "IP itself is connection-oriented and guarantees reliable delivery.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "TCP provides a connection-oriented reliable ordered byte stream.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "UDP is connectionless and does not itself guarantee delivery or ordering.",
          "correctItemId": "i1"
        }
      ],
      "explanation": "IP's supposed connection-oriented guaranteed delivery is No: IP is best-effort packet delivery. TCP's connection-oriented reliable ordered byte stream is Yes, and UDP's connectionless service without built-in delivery/order guarantees is Yes. TCP achieves its service over unreliable IP through acknowledgments and retransmission, but can still report failure during an outage. An application can add reliability over UDP; it is not a guarantee of UDP itself.",
      "id": "net-356"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the nominal line rate of an E1 circuit with 32 time slots?",
      "options": [
        "2.048 Mbps",
        "34.368 Mbps",
        "44.736 Mbps",
        "1.544 Mbps"
      ],
      "correct": 0,
      "explanation": "An E1 gross line has 32 time slots at 64 kbps each: 32 × 64 = 2048 kbps = 2.048 Mbps. Framing/signaling consumes some slots in common applications, so user bearer capacity can be lower than gross line rate. 34.368 Mbps is a higher E-carrier level, 44.736 Mbps is T3/DS3, and 1.544 Mbps is T1. The explicit 32-slot qualifier makes the arithmetic direct.",
      "id": "net-357"
    },
    {
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each conventional WAN service to its nominal rate.",
      "dragItems": [
        {
          "id": "i1",
          "text": "56 kbps"
        },
        {
          "id": "i2",
          "text": "128 kbps"
        },
        {
          "id": "i3",
          "text": "1.544 Mbps"
        },
        {
          "id": "i4",
          "text": "2.048 Mbps"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Analog dial-up maximum downstream under suitable conditions",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "E1 gross line rate",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "ISDN BRI two-channel bearer rate",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "T1 gross line rate",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Analog dial-up's familiar maximum downstream is nominally 56 kbps under suitable digital-provider/analog-client conditions, not an ordinary symmetric guarantee. ISDN BRI combines two 64-kbps B bearer channels for 128 kbps; its signaling channel is separate from that data figure. E1 uses 32 × 64-kbps time slots for 2.048 Mbps gross, with some slots used for framing/signaling in common configurations. T1 carries 24 basic channels, 24 × 64 = 1.536 Mbps, plus framing to reach 1.544 Mbps gross. These calculations distinguish bearer capacity from total line rate. Actual application transfers are slower after protocol overhead, and the higher rate does not imply every service has identical latency or availability.",
      "id": "net-358"
    },
    {
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A CNAME record can only ever be created by a person manually typing it.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "DNS can map hostnames to IP addresses.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "LMHOSTS is the normal file for mapping arbitrary DNS FQDNs to IP addresses.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "The CNAME-only-manual statement is No because records can be created through software, APIs and supported update workflows as well as manually. DNS mapping names to addresses is Yes. LMHOSTS as the normal arbitrary-FQDN mapping file is No; HOSTS supplies ordinary local host-name mappings while LMHOSTS is for legacy NetBIOS names. These distinctions concern role, not whether a script happens to edit either file.",
      "id": "net-359"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Firewalls can only be installed on individual endpoints.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Firewalls can be hardware appliances or software.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Basic packet filters primarily identify users by account name.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Endpoint-only firewalls is No: network gateways and dedicated appliances also implement firewalls. Hardware appliances or software is Yes. Basic filters primarily identifying users by account name is No: they generally match header values such as addresses, protocols and ports. Advanced identity-aware systems can integrate usernames, but that is additional capability, not the defining mechanism of a basic packet filter.",
      "id": "net-360"
    },
    {
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "Complete the descriptions of a network-connected smart thermostat.",
      "dragItems": [
        {
          "id": "i1",
          "text": "An app"
        },
        {
          "id": "i2",
          "text": "A printed wall chart"
        },
        {
          "id": "i3",
          "text": "An IP address on its IP interface"
        },
        {
          "id": "i4",
          "text": "A personal account on every device"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "How a user may remotely control the thermostat",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Addressing required for the thermostat’s direct IP interface",
          "correctItemId": "i3"
        }
      ],
      "explanation": "An app can remotely control a smart thermostat, while a printed wall chart cannot issue network commands. The thermostat's direct IP interface needs an IP address to participate in IP networking. A personal user account on every device is not a universal addressing prerequisite; authentication design can vary. The network address enables packet delivery, whereas an app/account governs a separate user-control workflow.",
      "id": "net-361"
    },
    {
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "Which three listed commands can help diagnose networking on Linux when installed? Choose three.",
      "options": [
        "ip",
        "netbios",
        "ping",
        "ipconfig",
        "netstat"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "ip, ping and netstat are usable Linux networking diagnostics when installed. ip displays/manages interfaces and routes, ping probes ICMP reachability, and netstat reports sockets/statistics, although ss is common on modern systems. ipconfig is the Windows command, and netbios is not a standard general Linux diagnostic command in this list. Availability of a package and permissions can affect whether a particular command runs.",
      "id": "net-362"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which DNS server is authoritative for the complete set of records in a particular zone?",
      "options": [
        "An authoritative primary or secondary server for that zone",
        "Every root server for all Internet hosts",
        "Every recursive cache for all Internet hosts",
        "DNSSEC as a server type"
      ],
      "correct": 0,
      "explanation": "An authoritative primary or secondary server for the zone serves its authoritative records. Secondary does not mean merely an untrusted cache; it can be fully authoritative for transferred data. Root servers know the root zone and delegations, not every host record. Recursive caches store learned answers without becoming authoritative for all names. DNSSEC is a signing/validation mechanism rather than a server type that holds every zone.",
      "id": "net-363"
    },
    {
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "A compatible single-band 802.11ac access point runs at 5GHz with legacy modes enabled. Which two legacy standards can use that band? Choose two.",
      "options": [
        "802.11n with 5GHz support",
        "802.11b",
        "802.11a",
        "802.11g"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "802.11a and 5-GHz-capable 802.11n can operate in the AP's specified 5 GHz band when compatible legacy modes are enabled. 802.11b and g are 2.4 GHz generations and cannot use this single-band radio. Not every n client supports 5 GHz, which is why the option qualifies it. A dual-band access point with another radio would be a different scenario.",
      "id": "net-364"
    },
    {
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What topology connects devices in a closed loop with each device linked to its two neighbors?",
      "options": [
        "Ring",
        "Diamond as a standard topology category",
        "Star",
        "Full mesh"
      ],
      "correct": 0,
      "explanation": "A closed loop in which each node connects to two neighbors is a ring. A star instead attaches nodes to a central point, and a full mesh attaches every pair directly. “Diamond” is not the standard topology category intended by this definition, even though a four-node ring could be drawn as a diamond. Connectivity relationships, not the shape's orientation on the page, determine topology.",
      "id": "net-365"
    },
    {
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which IEEE family defines wireless LAN standards?",
      "options": [
        "802.11",
        "802.5",
        "802.2",
        "802.3"
      ],
      "correct": 0,
      "explanation": "IEEE 802.11 defines wireless LAN technologies. IEEE 802.3 concerns Ethernet, 802.5 concerns legacy Token Ring, and 802.2 concerns Logical Link Control. These are different members of the IEEE networking family rather than interchangeable names. Wi-Fi branding/certification is associated with interoperable 802.11 implementations, not a replacement numbering scheme for Ethernet or Token Ring.",
      "id": "net-366"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Using historical default classful masks, what is the smallest listed class with room for 750 hosts on one network?",
      "options": [
        "Class C",
        "Class B",
        "Class D",
        "Class A"
      ],
      "correct": 1,
      "explanation": "With historical classful masks, Class C offers 2^8 − 2 = 254 ordinary host addresses, too few for 750. Class B offers 2^16 − 2 = 65,534, making it the smallest listed usable class that fits. Class A is larger than needed, and Class D is multicast rather than a conventional host subnet. In modern CIDR planning, a /22 offers 1022 ordinary host addresses and is far smaller than a whole Class B.",
      "id": "net-367"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which is the private Class A network under historical classful addressing?",
      "options": [
        "192.168.1.0",
        "100.10.1.0",
        "172.168.0.1",
        "10.0.0.0"
      ],
      "correct": 3,
      "explanation": "10.0.0.0 is the RFC 1918 private Class A network under the historical /8 classification. 192.168.1.0 is private but historically Class C. 100.10.1.0 is not the private 10/8 block, and 172.168.0.1 is outside private 172.16/12. Similar-looking leading digits do not make an address private; the exact prefix range matters.",
      "id": "net-368"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPv6 address type delivers a packet to all members of a selected group?",
      "options": [
        "Broadcast",
        "Singlecast",
        "Anycast",
        "Multicast"
      ],
      "correct": 3,
      "explanation": "IPv6 multicast addresses a selected group and delivers to participating members. Anycast uses the same address on multiple nodes but routing selects one, ordinarily the nearest by routing policy. IPv6 does not provide IPv4-style broadcast, and “singlecast” is not the standard counterpart to unicast. Group delivery is the decisive clue, not merely the presence of multiple possible hosts somewhere in the network.",
      "id": "net-369"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which option is the shortest valid compressed representation of this IPv6 address?",
      "options": [
        "2001:4860:0:2001:0:0:0:68",
        "21:486::21:::68",
        "2001:4860::::68",
        "2001:4860:0:2001::68"
      ],
      "correct": 3,
      "explanation": "Remove leading zeros, then compress the longest consecutive zero run: 2001:4860:0000:2001:0000:0000:0000:0068 becomes 2001:4860:0:2001::68. The :: expands to three zero hextets, restoring eight groups. The first option represents the same address but retains the three zero groups separately, so it is not shortest. Triple or quadruple colons are invalid syntax and cannot replace valid double-colon compression.",
      "code": "2001:4860:0000:2001:0000:0000:0000:0068",
      "id": "net-370"
    },
    {
      "chapter": "protocoale",
      "type": "single",
      "question": "Which legacy Windows file maps NetBIOS names to IPv4 addresses?",
      "options": [
        "HOSTS",
        "WINS",
        "LMHOSTS",
        "DNS"
      ],
      "correct": 2,
      "explanation": "LMHOSTS is the legacy Windows file for static NetBIOS-name-to-IPv4 mappings. HOSTS is for ordinary host-name resolution, while WINS and DNS are naming services rather than this file name. LMHOSTS entries do not replace DNS's full hierarchy or zone data. The NetBIOS qualifier is essential because both files can relate readable names to addresses but serve different resolution mechanisms.",
      "id": "net-371"
    },
    {
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two publicly reachable server roles commonly belong on a perimeter segment rather than the trusted internal LAN? Choose two.",
      "options": [
        "Public mail gateway",
        "Internal file server",
        "Public web server",
        "Internal print server"
      ],
      "correct": [
        0,
        2
      ],
      "explanation": "Public mail gateways and public web servers need external reachability and are conventional perimeter/DMZ roles. Internal file and print servers serve trusted internal users and should not be exposed merely because a DMZ exists. Firewall rules should still limit the public servers to required protocols and approved back-end access. A public mail gateway need not mean exposing the entire internal mailbox/database infrastructure.",
      "id": "net-372"
    },
    {
      "id": "net-373",
      "chapter": "echipamente",
      "type": "single",
      "question": "In Hyper-V, which virtual switch permits VM-to-VM and VM-to-host communication, but no external-network access?",
      "options": [
        "Internal",
        "Endpoint",
        "Private",
        "External"
      ],
      "correct": 0,
      "explanation": "A Hyper-V Internal virtual switch allows VM-to-VM and VM-to-management-host communication without an external physical-network binding. A Private switch excludes host communication, while an External switch binds outward connectivity. “Endpoint” is not the corresponding switch type. Additional host routing/NAT could later extend access, but the base switch behavior in the question is Internal."
    },
    {
      "id": "net-374",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each function to the four-layer TCP/IP model.",
      "explanation": "Network Access adds local frame headers such as Ethernet source/destination MAC addresses and handles the medium used for the next link. Internet supplies IP addressing and routing across links; an off-subnet packet therefore needs a next-hop link address as well as its ultimate IP destination. Transport segments application data and identifies process endpoints, with TCP adding ordered reliable delivery and UDP offering datagrams. Application in the four-layer model includes upper-stack services and TLS-style protection because separate OSI Session and Presentation layers are folded into it. Calling a MAC address physical does not move frame addressing into a separate TCP/IP Physical layer. IPsec is a contrasting Internet-layer security mechanism, not proof that all encryption belongs to Application.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Network Access"
        },
        {
          "id": "i2",
          "text": "Application"
        },
        {
          "id": "i3",
          "text": "Transport"
        },
        {
          "id": "i4",
          "text": "Internet"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Adds physical MAC addressing to frames",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Uses IP addressing for packets",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "Segments an application data stream",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Provides application-layer encryption such as TLS",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-375",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which two listed protocols are used to send and retrieve email? Choose two.",
      "options": [
        "SMTP",
        "SSH",
        "FTP",
        "IMAP"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "SMTP sends/submits or relays email, and IMAP lets clients access mail stored on a server. SSH is secure remote access and FTP transfers files; neither is the ordinary email send/retrieve protocol pair. POP3 is another retrieval protocol but is not offered. Sending and retrieval are separate roles, often protected with TLS and authentication using service-specific ports."
    },
    {
      "id": "net-376",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Electrical TDR for optical fiber is No; use an OTDR for the optical path. Tone generator/probe for tracing copper is Yes. A multimeter alone certifying high-speed Ethernet performance is No: continuity or resistance does not validate bandwidth, crosstalk and return-loss requirements. Proper cable certification requires a tester suited to the category and performance standard, not merely finding that some electrical path exists.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A conventional electrical TDR is the appropriate tool for finding breaks in optical fiber.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "A tone generator and probe can trace a copper cable through a wall.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A multimeter alone can certify Ethernet cable performance at its rated network speed.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-377",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which Linux DNS utility uses the syntax shown here to request root-zone name-server records: dig . NS?",
      "options": [
        "nslookup",
        "host",
        "dnslookup",
        "dig"
      ],
      "correct": 3,
      "explanation": "dig is the utility used by dig . NS. The dot selects the root zone and NS selects name-server records. host and nslookup can also perform NS queries with their own syntax, so they are not incapable of root lookups; they simply are not the command shown. dnslookup is not the standard listed utility. The result depends on the queried resolver and response, not on dig being the only capable DNS client."
    },
    {
      "id": "net-378",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In the conventional OSI teaching model, which layer is associated with data representation and encryption?",
      "options": [
        "Presentation",
        "Data Link",
        "Application",
        "Session"
      ],
      "correct": 0,
      "explanation": "Presentation is the traditional OSI layer for character encoding, format conversion, compression and encryption/decryption. Data Link frames local traffic, Session manages dialogue, and Application provides network services. This is the teaching model's functional grouping, not a claim that encryption can never be implemented at another layer; real TLS, IPsec and application encryption span different practical boundaries."
    },
    {
      "id": "net-379",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "The screenshot shows cached DNS records. A single website fails on this computer but works on another device. Choose the command that displays this cache and the command that clears it.",
      "explanation": "The exhibit lists cached record names, types, TTLs, CNAME and A/AAAA data, consistent with ipconfig /displaydns. Use ipconfig /flushdns to clear that local resolver cache. /release relinquishes DHCP configuration, netstat -a shows sockets and tracert probes route hops, so none is the cache-clearing action. Clearing cache can remove a stale answer but does not prove that caching is the cause of the site's failure or repair an authoritative DNS error.",
      "image": "assets/networking/pdf-007-dns-cache.png",
      "imageAlt": "dns cache",
      "dragItems": [
        {
          "id": "i1",
          "text": "ipconfig /displaydns"
        },
        {
          "id": "i2",
          "text": "ipconfig /flushdns"
        },
        {
          "id": "i3",
          "text": "ipconfig /release"
        },
        {
          "id": "i4",
          "text": "netstat -a"
        },
        {
          "id": "i5",
          "text": "tracert"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display cached DNS records",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Clear the local DNS resolver cache",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-380",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which three are switch-port roles or configurations?",
      "options": [
        "Access",
        "Unmanaged",
        "Voice access",
        "Trunk",
        "Managed"
      ],
      "correct": [
        0,
        2,
        3
      ],
      "explanation": "Access, voice access and trunk describe switch-port roles/configuration. An access port commonly carries one data VLAN, a voice-VLAN arrangement supports phone traffic alongside data, and a trunk carries multiple VLANs. Managed and unmanaged describe the switch's administrative capabilities, not the port's traffic role. A managed switch may configure all these port roles, but the device label is not itself a port mode."
    },
    {
      "id": "net-381",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Every node connects directly to every other node. Which physical topology is this?",
      "options": [
        "Star",
        "Full mesh",
        "Ring",
        "Diamond"
      ],
      "correct": 1,
      "explanation": "Every node directly connected to every other node defines a full mesh. With n nodes there are n(n−1)/2 undirected links. A star uses a central connection point, a ring gives each node two neighbors, and “diamond” is not the required general topology category. Full mesh provides many alternate paths but rapidly increases cable and interface requirements as the node count grows."
    },
    {
      "id": "net-382",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which listed category is conventionally associated with a 10GBASE-T maximum reach of about 55 metres under suitable conditions, rather than the 100-metre reach of Cat6a or suitable Cat7 systems?",
      "options": [
        "Cat6a",
        "Cat7",
        "Cat5",
        "Cat6"
      ],
      "correct": 3,
      "explanation": "Cat6 is conventionally associated with 10GBASE-T reach up to about 55 meters, depending on installation and alien crosstalk. Cat6a is engineered for a compliant 100-meter 10-gigabit channel, and suitable Cat7 systems also support longer channels. Cat5 is not the 10-gigabit choice. All higher-capability categories can serve shorter links, so the question identifies the conventional maximum-reach comparison rather than mere ability to work at 55 meters."
    },
    {
      "id": "net-383",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Complete the statements about wireless network arrangements. Disabling SSID broadcast is not a replacement for WPA2/WPA3 authentication.",
      "explanation": "Ad hoc maps to both direct peer communication and absence of centralized AP control. Infrastructure maps to operation coordinated through an AP. SSID broadcast is the setting that affects ordinary beacon network-name listings; WPA encryption is not that visibility switch. Hiding the SSID does not make it secret against traffic observation and does not replace strong WPA2/WPA3 authentication. Reusing Ad hoc for two related descriptions is intentional, not a one-use-only matching error.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Ad hoc"
        },
        {
          "id": "i2",
          "text": "Infrastructure"
        },
        {
          "id": "i3",
          "text": "SSID broadcast"
        },
        {
          "id": "i4",
          "text": "WPA encryption"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Wi-Fi peers communicate directly without an access point",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Mode without centralized access-point control",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Mode controlled by a wireless access point",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Setting that can hide the network name from ordinary beacon listings",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-384",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "At which OSI layer does TCP operate?",
      "options": [
        "Layer 2",
        "Layer 4",
        "Layer 1",
        "Layer 3"
      ],
      "correct": 1,
      "explanation": "TCP operates at Layer 4, Transport, providing reliable ordered byte streams and ports. Layer 3 handles IP routing, Layer 2 handles frames/MAC addressing and Layer 1 handles signaling. TCP segments are encapsulated in IP packets and then link frames; that use of lower layers does not change TCP's own functional classification."
    },
    {
      "id": "net-385",
      "chapter": "infrastructura",
      "type": "single",
      "question": "For a home-office wired channel no longer than 100 m, which listed option is normally the least expensive that supports 1 Gbps Ethernet?",
      "options": [
        "Coaxial",
        "Cat3",
        "Fiber optic",
        "Cat5e"
      ],
      "correct": 3,
      "explanation": "Cat5e supports 1000BASE-T over a compliant channel up to 100 meters and is normally the economical listed choice for a home-office gigabit run. Cat3 is inadequate. Fiber can support gigabit but typically adds optical-interface and installation costs, while coax is not the ordinary 1000BASE-T cabling. The answer is a normal deployment-cost comparison, not a universal price guarantee for every supplier or existing installation."
    },
    {
      "id": "net-386",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each address to its historical IPv4 class. Modern routing uses CIDR.",
      "explanation": "Apply the historical first-octet ranges: 10 is Class A, 130 Class B, 199 Class C and 224 Class D. For ordinary unicast, the ranges are A 1–126, B 128–191 and C 192–223; their old default prefixes are /8, /16 and /24. Class D 224–239 is multicast group space rather than another host subnet size. Thus 10.123.12.1, 130.34.3.223, 199.11.221.4 and 224.2.200.35 map to A, B, C and D respectively. The address 10/8 is also private, but private/public purpose and historical class are different classifications. Modern CIDR requires an explicitly assigned prefix rather than assuming the old default.",
      "dragItems": [
        {
          "id": "i1",
          "text": "10.123.12.1"
        },
        {
          "id": "i2",
          "text": "199.11.221.4"
        },
        {
          "id": "i3",
          "text": "130.34.3.223"
        },
        {
          "id": "i4",
          "text": "224.2.200.35"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class A",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Class B",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Class C",
          "correctItemId": "i2"
        },
        {
          "id": "z4",
          "label": "Class D",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-387",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which NAT mechanism lets multiple private hosts share one public IPv4 address by translating transport port numbers?",
      "options": [
        "PAT",
        "Dynamic NAT without port translation",
        "Static one-to-one NAT",
        "One-to-one mapping"
      ],
      "correct": 0,
      "explanation": "PAT, also called NAPT, translates transport ports as well as addresses so multiple private hosts can share one public IPv4 address. Connection mappings distinguish their return traffic. Dynamic NAT without port translation generally uses a public-address pool, while static one-to-one NAT assigns a separate fixed mapping. NAT is not payload encryption; sharing an address does not provide confidentiality."
    },
    {
      "id": "net-388",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "A friend cannot reach the Louvre website. Identify the command shown and the Windows command that combines route discovery with packet-loss statistics.",
      "explanation": "The exhibit shows numbered hops with three timing probes per hop and “Tracing route,” identifying Windows tracert even though the original command text is obscured. pathping combines route discovery with subsequent loss/latency statistics. ping tests reachability without the hop sequence, and nslookup queries DNS. A trace reaching the displayed destination does not prove the website's HTTP service works, and nonresponding intermediate probes do not necessarily indicate forwarding failure.",
      "image": "assets/networking/pdf-008-tracert-louvre.png",
      "imageAlt": "tracert louvre",
      "dragItems": [
        {
          "id": "i1",
          "text": "tracert"
        },
        {
          "id": "i2",
          "text": "pathping"
        },
        {
          "id": "i3",
          "text": "ping"
        },
        {
          "id": "i4",
          "text": "nslookup"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Tool that generated the screenshot",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Tool for hops and per-hop packet-loss statistics",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-389",
      "chapter": "infrastructura",
      "type": "single",
      "question": "How many T1/DS1 tributaries are multiplexed into a T3/DS3?",
      "options": [
        "28",
        "2",
        "3",
        "16"
      ],
      "correct": 0,
      "explanation": "A T3/DS3 multiplexes 28 T1/DS1 tributaries. Their 28 × 1.544 Mbps equals 43.232 Mbps before higher-level framing/overhead; the DS3 gross line rate is 44.736 Mbps. Therefore neither 2, 3 nor 16 is the tributary count. The hierarchy relationship should not be derived by naively rounding the line-rate ratio because framing is included at multiple levels."
    },
    {
      "id": "net-390",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "All three statements are Yes. Layer 2 switching uses MAC addresses, and a Layer 3 switch generally retains that switching capability while also routing by destination IP address. Layer 3 capability adds a function rather than replacing every frame-forwarding decision. A packet traversing the device may be bridged within a VLAN or routed between VLANs depending on destination and configuration.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Layer 2 switches forward Ethernet frames using MAC addresses.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A Layer 3 switch can also perform Layer 2 MAC-based switching.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "A Layer 3 switch uses IP addresses when routing.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-391",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which two statements accurately describe ordinary Layer 2 switching? Choose two.",
      "options": [
        "Store-and-forward is always the lowest-latency forwarding method.",
        "A switch uses a learned MAC-address table to decide where to forward known unicast frames.",
        "An unknown-unicast frame is normally flooded to other forwarding ports in the same VLAN.",
        "A switch is faster than a hub under every conceivable condition.",
        "A Layer 2 switch normally forwards frames using an IP routing table."
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "A switch uses learned MAC forwarding information for known unicast and normally floods unknown unicast to other eligible ports within the same VLAN. Store-and-forward waits for the complete frame and is not always the lowest-latency method. “Faster under every conceivable condition” is unjustifiably absolute. An IP routing table is for Layer 3 forwarding, not the ordinary Layer 2 decision asked for here."
    },
    {
      "id": "net-392",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In the common introductory OSI grouping, which lower three layers are classified as the network-support/hardware-oriented layers?",
      "options": [
        "Layers 3–7",
        "Layers 4–7",
        "Layers 1–2 only",
        "Layers 1–3"
      ],
      "correct": 3,
      "explanation": "The conventional introductory grouping calls OSI Layers 1–3 the network-support/hardware-oriented layers: Physical signaling, Data Link framing and Network routing. The upper layers support endpoint/application functions, with Transport often described as the connecting layer. This is a teaching grouping, not an implementation restriction: software can implement routing and hardware can accelerate upper-layer processing. The other ranges either omit Layer 3 or include unrelated upper layers."
    },
    {
      "id": "net-393",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each networking function to its conventional OSI layer.",
      "explanation": "Data Link handles frames, MAC destinations and local-link error checks, so its scope is one link/VLAN rather than routed end-to-end delivery. Transport serves application endpoints: TCP supplies an ordered reliable byte stream, while UDP supplies best-effort datagrams. Session manages dialogues and synchronization between applications, not cable signaling. Network uses logical IP addresses and routing to select the next network hop. Physical specifies connectors, voltages and optical/radio/electrical signaling that carry bits. Application exposes services such as HTTP or file operations to software. Presentation concerns data representation, such as character encoding and image formats, conventionally including compression/encryption functions. An image transfer uses every layer, but its format is Presentation, its route Network and its actual wire signal Physical; the content does not collapse those distinct responsibilities into one layer.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Application"
        },
        {
          "id": "i2",
          "text": "Data Link"
        },
        {
          "id": "i3",
          "text": "Network"
        },
        {
          "id": "i4",
          "text": "Physical"
        },
        {
          "id": "i5",
          "text": "Presentation"
        },
        {
          "id": "i6",
          "text": "Session"
        },
        {
          "id": "i7",
          "text": "Transport"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Frames and MAC addressing",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "TCP reliable delivery or UDP best-effort transport",
          "correctItemId": "i7"
        },
        {
          "id": "z3",
          "label": "Manages separate dialogs/sessions",
          "correctItemId": "i6"
        },
        {
          "id": "z4",
          "label": "Logical IP routing",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Voltage, connectors and signalling",
          "correctItemId": "i4"
        },
        {
          "id": "z6",
          "label": "Network services exposed to applications",
          "correctItemId": "i1"
        },
        {
          "id": "z7",
          "label": "Data formats such as character encoding and images",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "net-394",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "Identify the address tested in the screenshot and its IPv6 equivalent.",
      "explanation": "The visible command is ping 127.0.0.1 and the replies are from that same address, so it is a loopback test. Its IPv6 counterpart is ::1. ff02::1 is an IPv6 link-local multicast group, while fe80::1 is a link-local unicast address, not universal loopback. The four successful replies test local IP behavior; they do not demonstrate a working gateway, cable or Internet route.",
      "image": "assets/networking/pdf-009-ping-loopback.png",
      "imageAlt": "ping loopback",
      "dragItems": [
        {
          "id": "i1",
          "text": "Loopback"
        },
        {
          "id": "i2",
          "text": "Default gateway"
        },
        {
          "id": "i3",
          "text": "Broadcast"
        },
        {
          "id": "i4",
          "text": "::1"
        },
        {
          "id": "i5",
          "text": "ff02::1"
        },
        {
          "id": "i6",
          "text": "fe80::1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "127.0.0.1 is a",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Equivalent IPv6 loopback address",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-395",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "Which three are conventional LAN-switch forwarding methods?",
      "options": [
        "ARPA mapping",
        "Store-and-forward",
        "Cut-through",
        "Fragment-free",
        "Routing",
        "Packet switching"
      ],
      "correct": [
        1,
        2,
        3
      ],
      "explanation": "Store-and-forward, cut-through and fragment-free are conventional switch forwarding methods. Store-and-forward buffers a complete frame for checking; cut-through begins once sufficient destination information arrives; fragment-free waits through the initial collision-fragment region before forwarding. Routing is a Layer 3 function, packet switching is a broader category and ARPA mapping is not one of these three frame-forwarding methods. Latency/error-handling tradeoffs distinguish the valid methods."
    },
    {
      "id": "net-396",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Ethernet framing and signalling are defined primarily at which part of the OSI model?",
      "options": [
        "WAN application protocols",
        "Routing",
        "Transport",
        "Physical and data link (LAN technologies)"
      ],
      "correct": 3,
      "explanation": "Ethernet defines framing/MAC behavior at Data Link and signaling/media behavior at Physical. Therefore the combined Physical-and-Data-Link answer is correct. Routing is an IP-layer function and Transport concerns protocols such as TCP/UDP. WAN application protocols do not describe Ethernet's primary scope, even though Ethernet services can be extended across provider networks. The question concerns the technology's functional layers rather than geographic reach."
    },
    {
      "id": "net-397",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match each tunneling protocol to its conventional control port.",
      "explanation": "SSTP carries PPP through a TLS-protected HTTPS-style connection using TCP 443, which explains that port rather than treating it as only a website port. PPTP uses TCP 1723 for tunnel control and GRE for its data transport; opening only 1723 can therefore leave the tunnel unusable. PPTP is obsolete and should not be selected for modern secure deployments. L2TP uses UDP 1701 to tunnel Layer 2/PPP traffic but supplies no payload encryption itself; L2TP/IPsec adds IKE/IPsec protection and related traffic. PPP is the underlying point-to-point framing/link protocol, not a standalone TCP/UDP listener with one of these ports. The mappings identify conventional tunnel/control endpoints, not every packet required by a complete secure VPN.",
      "dragItems": [
        {
          "id": "i1",
          "text": "L2TP"
        },
        {
          "id": "i2",
          "text": "PPP"
        },
        {
          "id": "i3",
          "text": "SSTP"
        },
        {
          "id": "i4",
          "text": "PPTP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "TCP 443",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "TCP 1723",
          "correctItemId": "i4"
        },
        {
          "id": "z3",
          "label": "UDP 1701",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-398",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Dynamic NAT using a public pool is Yes. PAT requiring at least two public addresses is No because many private flows can share one public address using translated ports. Static one-to-one NAT using a distinct public mapping per simultaneously mapped private address is Yes. These mechanisms differ in mapping lifetime and multiplexing, not in being different routing protocols. None inherently encrypts the translated payload.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Dynamic NAT can translate private addresses using a pool of public addresses.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "PAT requires at least two public IPv4 addresses.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Static one-to-one NAT assigns a separate public address to each simultaneously mapped private address.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-399",
      "chapter": "infrastructura",
      "type": "multiple",
      "question": "Which two listed access technologies are commonly used for residential Internet connections?",
      "options": [
        "Cable modem",
        "ISDN",
        "T1",
        "DSL",
        "E1"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "Cable modem and DSL are conventional residential broadband access technologies. ISDN, T1 and E1 may be used in particular installations, but are not the two typical residential options intended here. Cable commonly uses a cable-operator shared access plant; DSL uses telephone copper pairs. Availability and performance vary by location, and modern fiber or mobile access may be preferable but are not listed."
    },
    {
      "id": "net-400",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which type of switch is normally plug-and-play without user configuration?",
      "options": [
        "Virtual",
        "Unmanaged",
        "Multilayer",
        "Managed"
      ],
      "correct": 1,
      "explanation": "An unmanaged switch normally performs basic plug-and-play forwarding without user configuration. Managed switches expose administrative controls, and multilayer describes routing capability rather than absence of configuration. A virtual switch is a software/network-virtualization construct and can require configuration too. “Unmanaged” does not mean no internal forwarding logic; it still learns MAC addresses and handles frames according to its built-in behavior."
    },
    {
      "id": "net-401",
      "chapter": "protocoale",
      "type": "single",
      "question": "Is the statement correct: AAAA records map hostnames to 128-bit IPv6 addresses?",
      "options": [
        "No change is needed",
        "They map to IPv4 addresses",
        "The record type is A",
        "IPv6 addresses have 32 bits"
      ],
      "correct": 0,
      "explanation": "No change is needed: AAAA is the DNS record type for a name-to-128-bit-IPv6-address mapping. A records instead hold 32-bit IPv4 addresses. The alternatives either swap the record types or incorrectly reduce IPv6 to IPv4's length. One hostname can have multiple A and AAAA records, so selecting a record type does not imply that the host can use only one IP version."
    },
    {
      "id": "net-402",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match the addresses to their historical IPv4 classes.",
      "explanation": "Use the first octet: 100 is ordinary Class A 1–126, 170 is Class B 128–191 and 198 is Class C 192–223. Their historical default network lengths are /8, /16 and /24. The 224.0.0.2 address belongs to Class D 224–239, used for multicast groups, while 241.241.241.241 belongs to Class E 240–255, historically reserved/experimental rather than normal unicast host allocation. Therefore the addresses map to A, B, C, D and E as shown. Do not infer class from the number of nonzero octets or confuse a reserved class with RFC 1918 private space. Current CIDR routing needs the actual prefix instead of the historical class default.",
      "dragItems": [
        {
          "id": "i1",
          "text": "100.100.1.1"
        },
        {
          "id": "i2",
          "text": "241.241.241.241"
        },
        {
          "id": "i3",
          "text": "170.100.1.5"
        },
        {
          "id": "i4",
          "text": "224.0.0.2"
        },
        {
          "id": "i5",
          "text": "198.126.1.55"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class A",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Class B",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Class C",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Class D",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Class E",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-403",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match each Wi-Fi standard to the listed representative radio characteristics. Rates are theoretical PHY rates, not guaranteed application throughput.",
      "explanation": "802.11b is 2.4 GHz with 11-Mbps maximum PHY rate; g retains that band but adds OFDM rates up to 54 Mbps. 802.11a also reaches 54 Mbps using 5 GHz, so rate alone cannot distinguish a from g. 802.11n adds MIMO, aggregation and optional wider channels, operating at 2.4 or 5 GHz with configurations up to 600 Mbps. 802.11ac uses 5 GHz and wider-channel/multi-stream enhancements; the listed 1.3 Gbps is a common three-stream configuration, not its absolute maximum. A dual-band product can separately support older standards without making ac itself a 2.4-GHz standard. GHz denotes frequency and Mbps/Gbps nominal signaling speed; contention and overhead reduce usable throughput.",
      "dragItems": [
        {
          "id": "i1",
          "text": "802.11a"
        },
        {
          "id": "i2",
          "text": "802.11b"
        },
        {
          "id": "i3",
          "text": "802.11ac"
        },
        {
          "id": "i4",
          "text": "802.11n"
        },
        {
          "id": "i5",
          "text": "802.11g"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "2.4 or 5 GHz; up to 600 Mbps",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "5 GHz; 54 Mbps",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "5 GHz; 1.3 Gbps for a common three-stream configuration",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "2.4 GHz; 11 Mbps",
          "correctItemId": "i2"
        },
        {
          "id": "z5",
          "label": "2.4 GHz; 54 Mbps",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "net-404",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Match each description to the appropriate networking component.",
      "explanation": "Ethernet physical signaling describes how bits become electrical/optical signals on the medium, so it matches the Physical-layer function rather than a routing decision. A router reads network-layer destinations and uses routes to move packets between IP networks. A Layer 2 switch learns source MACs and selectively forwards known-destination frames within a LAN/VLAN. The unused NIC is an endpoint's network interface, supplying link attachment and typically physical plus MAC functions; it is not the inter-network routing or multiport switching role requested. Integrated equipment can contain a NIC, switch, router and physical transceivers together, but matching by function avoids confusing the product enclosure with the layer performing the operation.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Layer 2 switch"
        },
        {
          "id": "i2",
          "text": "Router"
        },
        {
          "id": "i3",
          "text": "Network interface card"
        },
        {
          "id": "i4",
          "text": "Ethernet physical signalling"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Physical-layer signalling used by Ethernet",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Routes packets between separate IP networks",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Forwards Ethernet frames using MAC addresses",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-405",
      "chapter": "depanare-unelte",
      "type": "drag_drop",
      "question": "Match each media issue to its description.",
      "explanation": "Simultaneous transmissions on shared half-duplex Ethernet produce collisions. Coupling from a nearby circuit is crosstalk. Gradual weakening with distance is attenuation. These faults have different causes: contention is addressed by access behavior/backoff, crosstalk by cabling quality/layout, and attenuation by respecting loss/reach budgets. Full-duplex point-to-point Ethernet does not use a shared collision medium, so collisions should not be treated as a normal feature of every modern Ethernet link.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Traffic collisions"
        },
        {
          "id": "i2",
          "text": "Attenuation"
        },
        {
          "id": "i3",
          "text": "Crosstalk"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Simultaneous transmissions on a shared half-duplex Ethernet segment",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Unwanted coupling of one nearby signal into another circuit",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Gradual loss of signal strength over distance",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-406",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "Identify the command whose output is shown, then restrict its output to TCP connections and listeners.",
      "explanation": "The exhibit lists Active Connections with local/foreign addresses and LISTENING/ESTABLISHED states, consistent with netstat output including listeners. netstat -a displays connections and listening endpoints; netstat -a -p tcp restricts the Windows display to TCP. ipconfig /all shows adapter configuration, not socket states, and tracert displays hops. Since the screenshot contains TCP rows, the exact original options cannot be uniquely recovered, but the requested functional commands are valid.",
      "image": "assets/networking/pdf-010-netstat.png",
      "imageAlt": "netstat",
      "dragItems": [
        {
          "id": "i1",
          "text": "netstat -a"
        },
        {
          "id": "i2",
          "text": "netstat -a -p tcp"
        },
        {
          "id": "i3",
          "text": "ipconfig /all"
        },
        {
          "id": "i4",
          "text": "tracert"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Display connections and listening endpoints",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Show only the TCP protocol",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-407",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "Count router hops from the source network to the destination network shown. Then choose a routing protocol that uses hop count as its metric.",
      "explanation": "Count four router icons between the source and destination networks, so the path traverses four routers. The repeated R3 label is a diagram-label defect, not a reason to ignore the fourth physical device. RIP uses hop count as its metric; OSPF uses cost instead. Do not confuse the number of drawn routers with the number of inter-router links or with RIP's advertised distance to a network from a particular router.",
      "image": "assets/networking/pdf-011-router-hops.png",
      "imageAlt": "router hops",
      "dragItems": [
        {
          "id": "i1",
          "text": "3"
        },
        {
          "id": "i2",
          "text": "4"
        },
        {
          "id": "i3",
          "text": "5"
        },
        {
          "id": "i4",
          "text": "RIP"
        },
        {
          "id": "i5",
          "text": "OSPF"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Number of routers traversed",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Protocol using hop count",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-408",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Match each network type to its purpose.",
      "explanation": "Internet is the global interconnection of independently operated networks, using shared protocol standards and routing between them. Intranet is the organization's private service/network environment for authorized internal users; it may span many sites rather than one building. Extranet extends controlled access to selected partners or customers without granting access to every internal resource. That external authorization relationship distinguishes it from an employee-only intranet. These categories do not prescribe a cable or require different protocol stacks: all can use TCP/IP and Ethernet/Wi-Fi locally. An extranet can be reached over the Internet through authenticated web access or VPN, while a DMZ is a possible hosting/security segment rather than an exact synonym for extranet.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Extranet"
        },
        {
          "id": "i2",
          "text": "Internet"
        },
        {
          "id": "i3",
          "text": "Intranet"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Global interconnection of networks",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Private organizational network",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Controlled partner/customer access to selected organizational services",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-409",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which listed address is a global-unicast IPv6 address rather than multicast, loopback, or a documentation prefix?",
      "options": [
        "::1",
        "2001:db8::",
        "2003:dead:beef:4dad:23:46:bb:101",
        "ff00::"
      ],
      "correct": 2,
      "explanation": "2003:dead:beef:4dad:23:46:bb:101 is the ordinary global-unicast choice. ::1 is loopback, ff00:: is in multicast space, and 2001:db8:: belongs to the documentation prefix reserved for examples. Syntactically valid IPv6 is not necessarily globally routable, and the selected address's format does not prove it is assigned or reachable. The alternatives have explicit special-purpose classifications rather than normal global host use."
    },
    {
      "id": "net-410",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which device gives each ordinary Ethernet port its own collision domain and supports full-duplex operation with a compatible endpoint?",
      "options": [
        "Router only",
        "Repeater",
        "Hub",
        "Switch"
      ],
      "correct": 3,
      "explanation": "A switch creates a separate collision domain per ordinary Ethernet port and can operate full duplex with a compatible endpoint. A hub/repeater shares and repeats signals, keeping its attached half-duplex segment in one collision domain. A router also separates interfaces, but “router only” is wrong because a switch clearly supplies the described LAN behavior. Full duplex removes collisions on that point-to-point link rather than merely reducing their frequency."
    },
    {
      "id": "net-411",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which route type is manually configured by an administrator?",
      "options": [
        "Dynamic",
        "Static",
        "Automatically learned",
        "Broadcast"
      ],
      "correct": 1,
      "explanation": "A static route is explicitly configured by an administrator or management automation. A dynamic/automatically learned route comes from a routing protocol or similar learning mechanism. Broadcast describes a delivery audience rather than this route-configuration method. A static route can still become unusable when its next hop fails; manual definition does not guarantee reachability."
    },
    {
      "id": "net-412",
      "chapter": "protocoale",
      "type": "single",
      "question": "Assume a current Microsoft Edge configuration that upgrades eligible domain-only navigations to secure URLs. Which protocol is attempted for an eligible public site?",
      "options": [
        "FTP",
        "HTTPS",
        "HTTP only",
        "UDP as a URL scheme"
      ],
      "correct": 1,
      "explanation": "Under the stated Edge policy of upgrading eligible domain-only navigation, HTTPS is attempted. The premise is essential because browser version, policy, eligibility and site behavior affect this action. FTP is unrelated, “HTTP only” contradicts the upgrade, and UDP is a transport protocol rather than the requested web URL scheme. HTTPS normally supplies TLS protection; an upgrade attempt is not proof that the destination will successfully accept the secure connection."
    },
    {
      "id": "net-413",
      "chapter": "protocoale",
      "type": "single",
      "question": "A server has only fe80::260:8ff:fec0:98d%4 as its IPv6 address. Why is that insufficient for direct global IPv6 communication?",
      "options": [
        "It is a logic-link address",
        "It is malformed",
        "It is necessarily a public address",
        "It is link-local and not forwarded beyond the local link"
      ],
      "correct": 3,
      "explanation": "The fe80 prefix identifies a link-local IPv6 address, which routers do not forward beyond its link. The %4 suffix is a zone/interface identifier, not malformed address data. A global destination therefore needs suitable global addressing/routing or a separate transition mechanism. “Logic-link” is not the relevant type, and link-local is not public global-unicast. Local neighbor communication may still work correctly with this address."
    },
    {
      "id": "net-414",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "TCP port 3389 is open on a scanned server. Which service is conventionally associated with it?",
      "options": [
        "DNS",
        "Remote Desktop Services",
        "WINS",
        "RRAS only"
      ],
      "correct": 1,
      "explanation": "Port 3389 is conventionally associated with RDP/Remote Desktop Services. DNS uses 53 and WINS has different legacy ports; RRAS is a remote-access/routing role rather than the specific 3389 service. A port scan establishes a listener, not incontrovertible application identity: another program can bind that port and an RDP administrator can change it. The question asks for the conventional association, not certainty from the number alone."
    },
    {
      "id": "net-415",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "The client shown is 10.1.3.105/24 and must reach servers on 192.168.1.0/24 through a router. Select the missing setting and the required on-link gateway subnet.",
      "explanation": "The exhibit shows 10.1.3.105 with mask 255.255.255.0 and a blank Default Gateway field; DNS is visibly set to 10.1.3.1. Thus the missing setting is the gateway, and its client-facing interface must ordinarily be a usable host address on 10.1.3.0/24. The destination 192.168.1.0/24 is remote. The image does not establish the actual router host address, so do not invent one or assume the DNS server is necessarily the gateway.",
      "image": "assets/networking/pdf-028-ipconfig-no-gateway.png",
      "imageAlt": "ipconfig no gateway",
      "dragItems": [
        {
          "id": "i1",
          "text": "No default gateway is configured"
        },
        {
          "id": "i2",
          "text": "The DNS address is missing"
        },
        {
          "id": "i3",
          "text": "10.1.3.0/24"
        },
        {
          "id": "i4",
          "text": "192.168.1.0/24"
        },
        {
          "id": "i5",
          "text": "255.255.255.0/24"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Problem visible in the screenshot",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Subnet containing the client-side router address",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-416",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Identify the cable wiring and its conventional use on legacy Ethernet ports without Auto MDI-X.",
      "explanation": "The diagram swaps the orange and green pair positions between the ends, the conventional T568A/T568B crossover for legacy 10/100 Ethernet. That supports switch-to-switch connection between like traditional ports without Auto MDI-X. Straight-through is used for a computer/router Ethernet port to a conventional switch port. A rollover reverses pin order for console use; it is not the partial pair crossover shown. Modern automatic crossover can remove this manual wiring requirement.",
      "image": "assets/networking/pdf-029-crossover-cable.png",
      "imageAlt": "crossover cable",
      "dragItems": [
        {
          "id": "i1",
          "text": "Crossover"
        },
        {
          "id": "i2",
          "text": "Rollover"
        },
        {
          "id": "i3",
          "text": "Straight-through"
        },
        {
          "id": "i4",
          "text": "Switch to switch"
        },
        {
          "id": "i5",
          "text": "Switch to computer"
        },
        {
          "id": "i6",
          "text": "Router Ethernet to switch"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Wiring",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Conventional use",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-417",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "Label the network areas shown.",
      "explanation": "Area A is the public Internet cloud, B the corporate internal intranet, and C the separately drawn perimeter service segment. The available “Extranet / perimeter services” label therefore maps to C. A DMZ/perimeter and an extranet are not exact synonyms: the former is a security segment and the latter controlled partner access, which may be hosted there. The diagram establishes C's perimeter placement, not unrestricted trust or a particular application protocol.",
      "image": "assets/networking/pdf-030-perimeter-network.png",
      "imageAlt": "perimeter network",
      "dragItems": [
        {
          "id": "i1",
          "text": "Internet"
        },
        {
          "id": "i2",
          "text": "Intranet"
        },
        {
          "id": "i3",
          "text": "Extranet / perimeter services"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Area A",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Area B",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Area C",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-418",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Identify the topology and count the links among these four routers.",
      "explanation": "The four routers each connect directly to the other three, giving a full mesh. Count the four perimeter links plus two diagonal links: six total. Equivalently 4 × 3 / 2 = 6 undirected links. A star would use a central node and fewer spokes, and a bus would share one backbone. Four counts devices rather than links, while three would be enough only for a minimal connected four-node tree.",
      "image": "assets/networking/pdf-031-mesh-routers.png",
      "imageAlt": "mesh routers",
      "dragItems": [
        {
          "id": "i1",
          "text": "Mesh"
        },
        {
          "id": "i2",
          "text": "Star"
        },
        {
          "id": "i3",
          "text": "Bus"
        },
        {
          "id": "i4",
          "text": "4"
        },
        {
          "id": "i5",
          "text": "6"
        },
        {
          "id": "i6",
          "text": "3"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Physical topology",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Router-to-router links",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "net-419",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Identify the physical topology of the hub network shown and a technology historically using it.",
      "explanation": "All endpoint cables meet at the pictured hub, so the physical arrangement is a star. Hub-based twisted-pair Ethernet historically used this layout while sharing one logical collision medium. That is why “physical star” does not mean every logical property is switched or independently full duplex. FDDI is associated with ring operation, and the Internet backbone is not a single hub star. Bus and mesh do not match the individual spokes shown.",
      "image": "assets/networking/pdf-033-star-hub.png",
      "imageAlt": "star hub",
      "dragItems": [
        {
          "id": "i1",
          "text": "Bus"
        },
        {
          "id": "i2",
          "text": "Mesh"
        },
        {
          "id": "i3",
          "text": "Star"
        },
        {
          "id": "i4",
          "text": "Hub-based twisted-pair Ethernet"
        },
        {
          "id": "i5",
          "text": "FDDI"
        },
        {
          "id": "i6",
          "text": "Internet backbone"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Physical topology",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Example technology",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-420",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "The client uses 10.1.13.5 with mask 255.255.255.0. Identify the shown gateway problem and the appropriate fix.",
      "explanation": "The screenshot gives client 10.1.13.5/24 and gateway 10.1.13.255. With /24, .0 is the network address and .255 the subnet broadcast, so the configured gateway is not a usable unicast router address. Replace it with the actual on-link router host address obtained from the network configuration. The exhibit does not reveal that value. Arbitrarily changing the mask or enabling DHCP regardless of policy is not a justified repair.",
      "image": "assets/networking/pdf-050-ipconfig-broadcast-gateway.png",
      "imageAlt": "ipconfig broadcast gateway",
      "dragItems": [
        {
          "id": "i1",
          "text": "The gateway is the subnet broadcast address"
        },
        {
          "id": "i2",
          "text": "The gateway is a usable router host address"
        },
        {
          "id": "i3",
          "text": "Replace the gateway with the actual on-link router host address"
        },
        {
          "id": "i4",
          "text": "Change the mask arbitrarily"
        },
        {
          "id": "i5",
          "text": "Enable DHCP regardless of policy"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Problem",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Fix",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-421",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "Identify the physical topology and the best listed device upgrade for this shared hub-based LAN.",
      "explanation": "The diagram is an extended/hierarchical star: endpoint spokes meet at hubs, which connect to a switch. Replacing a hub with a switch gives its endpoints separate collision domains and supports compatible full-duplex links. Fiber replacement alone does not remove a shared hub's forwarding limitations, and a router is not the ordinary substitute for multiport LAN switching. The keyed Star label is the closest category; this is not a full mesh or one physical bus backbone.",
      "image": "assets/networking/pdf-034-hub-switch-lan.png",
      "imageAlt": "hub switch lan",
      "dragItems": [
        {
          "id": "i1",
          "text": "Mesh"
        },
        {
          "id": "i2",
          "text": "Star"
        },
        {
          "id": "i3",
          "text": "Bus"
        },
        {
          "id": "i4",
          "text": "Replace the hub with a switch"
        },
        {
          "id": "i5",
          "text": "Replace every copper cable with fiber"
        },
        {
          "id": "i6",
          "text": "Replace the hub with a router only"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Topology",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Appropriate upgrade",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-422",
      "chapter": "echipamente",
      "type": "multiple",
      "question": "What are two characteristics of switches? (Choose 2.)",
      "explanation": "Switches learn MAC destinations and support simultaneous sending/receiving on full-duplex compatible links. They do not forward every frame to every attached computer: known unicast is normally sent only toward its learned destination. Broadcast and unknown-unicast flooding are exceptions within the VLAN. Switches reduce shared collision exposure compared with hubs rather than causing more collisions; a full-duplex point-to-point link has no normal collisions.",
      "options": [
        "Switches identify the intended destination of the data that they receive.",
        "Switches are capable of sending and receiving data at the same time.",
        "Switches send each frame to all of the computers that are connected to them.",
        "Switches cause more data collisions than hubs."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "net-423",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is a feature of the Teredo tunneling protocol?",
      "explanation": "Teredo encapsulates IPv6 in IPv4 UDP to carry it across IPv4 infrastructure and certain NAT environments. It is not generic IPv4/IPv6 protocol translation and does not intrinsically provide VPN confidentiality. Dynamic address allocation is not its primary role. Transition tunnels have deployment limitations, so the statement describes capability rather than guaranteeing every firewall/NAT permits it.",
      "options": [
        "It enables the passing of IPv6 traffic through IPv4 networks.",
        "It dynamically allocates IPv6 addresses.",
        "It provides VPN security.",
        "It translates IPv4 traffic to IPv6 traffic."
      ],
      "correct": 0
    },
    {
      "id": "net-424",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement about switches, select True or False.\nNote: You will receive partial credit for each correct selection.",
      "explanation": "Known unicast forwarding to the learned destination port is Yes. Unknown unicast flooding to other eligible ports in the VLAN is Yes. Broadcast only to the uplink is No: broadcasts are normally flooded within that VLAN, excluding ingress and blocked/ineligible ports. These distinctions reflect the MAC table and frame destination, not a rule that all traffic travels only toward upstream switches.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A switch forwards a known unicast frame to its learned destination port.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A switch floods an unknown unicast within the same VLAN, excluding the ingress port.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A switch sends broadcasts only to its uplink port.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-425",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Move each VPN term from the list on the left to the correct definition on the right.\nNote: You will receive partial credit for each correct answer.\n\n : Allows a remote user to connect to a private network from anywhere on the internet\n : Securely connects two portions of a private network or two private networks\n : Creates an unencrypted connection between two network devices",
      "explanation": "An SSL VPN, normally TLS-based today, is a common remote-access method: an individual user's client/browser establishes protected access through an Internet-facing gateway. Site-to-site VPN instead connects gateways serving networks, such as two branch LANs, so ordinary endpoints need not each initiate a tunnel. L2TP supplies a Layer 2 tunnel between endpoints but does not itself encrypt its payload; combining it with IPsec supplies the missing confidentiality and other protections. Thus the third description refers to L2TP alone, not L2TP/IPsec. Connection role and security protocol are separate dimensions: IPsec can support remote access too, and calling a link a tunnel does not by itself make the carried data secret.",
      "dragItems": [
        {
          "id": "i1",
          "text": "SSL VPN"
        },
        {
          "id": "i2",
          "text": "Layer 2 Tunneling Protocol"
        },
        {
          "id": "i3",
          "text": "Site-to-Site VPN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Allows a remote user to connect to a private network from anywhere on the internet",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Securely connects two portions of a private network or two private networks",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Creates an unencrypted connection between two network devices",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-426",
      "chapter": "protocoale",
      "type": "single",
      "question": "You need to configure a router to enable internal clients with private IPv4 addresses to\naccess the internet and navigate to multiple websites.\nWhat should you configure?",
      "explanation": "Configure NAT, commonly with port translation, so private IPv4 clients can share public Internet access and receive correctly mapped replies. DHCP supplies local settings, WAP publishes/proxies selected web applications, and VPN provides a private tunnel. None is the direct private-to-public source translation function. NAT still needs routing and suitable firewall policy; it is not itself an encrypted browsing protocol.",
      "options": [
        "WAP",
        "DHCP",
        "NAT",
        "VPN"
      ],
      "correct": 2
    },
    {
      "id": "net-427",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Move the appropriate TCP port numbers from the list on the left to the correct services\non the right.\nNote: You will receive partial credit for each correct answer.\n\n : SMTP\n : FTP\n : HTTPS",
      "explanation": "SMTP is mail transfer/relay, conventionally TCP 25 between mail servers; authenticated client submission commonly uses 587 or 465 instead. FTP control is TCP 21 for login and transfer commands, with separate data connections—traditionally TCP 20 from the server in active mode or negotiated ports in passive mode. HTTPS is HTTP protected by TLS on conventional TCP 443. The unused 80 is plaintext HTTP, while 53 is DNS for name/record queries over UDP or TCP. Therefore the mapping concerns each named server listener, not a claim that port 21 alone carries every byte of an FTP download or that every email-related connection uses 25.",
      "dragItems": [
        {
          "id": "i1",
          "text": "21"
        },
        {
          "id": "i2",
          "text": "25"
        },
        {
          "id": "i3",
          "text": "53"
        },
        {
          "id": "i4",
          "text": "80"
        },
        {
          "id": "i5",
          "text": "443"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SMTP",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "FTP",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "HTTPS",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "net-428",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "You are studying for finals in the student lounge. When your laptop is connected to the\nwireless network, access to the internet is slow. When you connect to the network by\nusing an Ethernet cable, you can no longer access the internet. You run the ipconfig\n/all command. The results are shown in the image.\n\nEvaluate the image and complete the statements by selecting the correct option from each\ndrop-down list.\n\nThe IP address of the wireless adapter is configured \n[1]\n\nThe IP address of the Ethernet adapter is configured \n[2]",
      "explanation": "The wireless adapter shows DHCP enabled, a lease, 192.168.11.48/24 and DHCP server 192.168.11.1, so blank 1 is By DHCP. Ethernet shows an Autoconfiguration IPv4 Address of 169.254.143.166 with /16 and no gateway, so blank 2 is APIPA after failed DHCP acquisition. “DHCP Enabled: Yes” alone means the client attempts DHCP, not that it succeeded. DNS lookup does not assign interface addresses, and the visible lease distinguishes wireless from manual static configuration.",
      "dragItems": [
        {
          "id": "i1",
          "text": "By DHCP"
        },
        {
          "id": "i2",
          "text": "Manually with a static address"
        },
        {
          "id": "i3",
          "text": "Automatically with APIPA after DHCP failed"
        },
        {
          "id": "i4",
          "text": "By DNS name lookup"
        },
        {
          "id": "i5",
          "text": "By DHCP"
        },
        {
          "id": "i6",
          "text": "Manually with a static address"
        },
        {
          "id": "i7",
          "text": "By DNS name lookup"
        },
        {
          "id": "i8",
          "text": "Automatically with APIPA after DHCP failed"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "image": "assets/networking/pdf-096-ipconfig-all.png"
    },
    {
      "id": "net-429",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which hardware is required to properly connect a LAN to a WAN?",
      "explanation": "A router supplies the Layer 3 boundary between LAN and WAN networks and forwards toward remote destinations. A stand-alone AP attaches wireless clients to a local network, a transceiver converts signals, and a Layer 2 switch bridges frames rather than supplying ordinary inter-network routing. Integrated broadband devices may combine modem, router, switch and AP, but the requested LAN-to-WAN forwarding role is the router.",
      "options": [
        "Stand-alone access point",
        "Router",
        "Transceiver",
        "Layer 2 switch"
      ],
      "correct": 1
    },
    {
      "id": "net-430",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "In Linux, which command-line tool should you use to list a host's active incoming\nconnections?",
      "explanation": "netstat can list Linux active sockets/connections with appropriate options; modern systems often use ss instead. host and dig query DNS, while ip addr shows interface addressing rather than connection sessions. Incoming connections are included among the relevant established endpoints; interpreting local service ports helps determine direction. Package availability and command options matter, so the bare tool name is not a guarantee that every installation has it enabled.",
      "options": [
        "host",
        "dig",
        "ip addr",
        "netstat"
      ],
      "correct": 3
    },
    {
      "id": "net-431",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You are a network support technician. The company president reports that his wired\nnetwork printer is not working. To test the line, you need to know where the jack is\nplugged into the patch panel. However, there are no labels in the main distribution\nframe (MDF), you discover a bundle of 35 cables.\n\nWhich tool should you use to isolate the correct cable?",
      "explanation": "Use a toner/tone-generator-and-probe set to identify the cable corresponding to the printer's jack among the unlabeled bundle. A cable tester checks electrical wiring, a multimeter measures electrical properties and a TDR locates impedance faults by distance; none is as directly suited to tracing an unknown cable among many. Use the toner safely on compatible/disconnected circuits according to the equipment instructions, then label the identified run.",
      "options": [
        "Toner",
        "Cable tester",
        "Multimeter",
        "Time-domain reflectometer (TDR)"
      ],
      "correct": 0
    },
    {
      "id": "net-432",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each statement about using a Type 2 hypervisor and virtual machines, select True or\nFalse.\nNote: You will receive partial credit for each correct selection.",
      "explanation": "All three statements are No. Rebooting one guest normally affects only that VM, not every sibling. Rebooting the physical host interrupts its hosted VMs, so it is not harmless to them. A guest reboot does not require rebooting the physical server first. Type II means the hypervisor depends on a host OS; isolation between guests does not eliminate their shared dependency on the host hardware and operating system.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "If you reboot one virtual machine, all the other virtual machines on the server reboot at the same time.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "You can reboot the host machine without it having any effect on the other virtual machines on the same physical server.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "If you need to reboot one virtual machine, you must first reboot the physical server.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-433",
      "chapter": "protocoale",
      "type": "single",
      "question": "In addition to switching, which feature is specific to a multilayer switch?",
      "explanation": "A multilayer switch adds Layer 3 routing to Layer 2 switching, commonly allowing inter-VLAN forwarding. Bridging physical media can occur in ordinary switching and does not identify the added layer. Protocol translation and client address management are separate functions and are not required characteristics of a multilayer switch. DHCP service may exist on some products, but it is not what makes them multilayer.",
      "options": [
        "Provides Layer 3 routing functions",
        "Bridges traffic between different physical topologies",
        "Translates between various network protocols",
        "Manages addresses for client computers"
      ],
      "correct": 0
    },
    {
      "id": "net-434",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You are a network administrator. Employees in the finance department are complaining\nabout slow data speeds while accessing the company network. One of the computers in the\ndepartment shows the connection is only 100Mbps, but the line should be 1000Mbps.\n\nWhich network hardware tool should you use to determine whether a cable is capable of\n1000Mbps full-duplex transmission?",
      "explanation": "Use a gigabit-capable cable certifier or qualifying tester to evaluate whether the copper channel supports the required Ethernet performance. A multimeter establishes only basic electrical properties, a toner identifies a run, and a TDR alone locates reflections/fault distance without fully qualifying gigabit operation. A missing/miswired pair can leave 100 Mbps working while gigabit fails, so test the complete channel including patch-panel terminations and patch leads.",
      "options": [
        "Multimeter",
        "Gigabit-rated cable certifier/qualifying tester",
        "Time-domain reflectometer only",
        "Toner"
      ],
      "correct": 1
    },
    {
      "id": "net-435",
      "chapter": "infrastructura",
      "type": "single",
      "question": "You need to run four Ethernet network drops on your company’s manufacturing floor. Each\ndrop is approximately 125 feet/38 meters. Each drop passes near heavy manufacturing\nequipment.\n\nYou need to ensure that interference is reduced.\n\nWhich cable type should you use?",
      "explanation": "STP Cat5e is the offered shielded choice for reducing interference near manufacturing equipment. The 38-meter distance is comfortably within normal copper Ethernet reach, so interference rather than length is the main selection factor. UTP Cat5e/Cat6 lacks the shielding, and Cat3 is older lower-performance cabling. Proper bonding, connectors and separation from power equipment remain necessary; shielding is not permission to ignore installation safety or standards.",
      "options": [
        "UTP Cat6",
        "UTP Cat5e",
        "Cat3",
        "STP Cat5e"
      ],
      "correct": 3
    },
    {
      "id": "net-436",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Your company's computers exchange data through a set of routed private Wi-Fi networks at\na single geographic location.\n\nWhat type of network is this is an example of?",
      "explanation": "An intranet is an organization's private network/service environment, so routed private Wi-Fi segments can collectively form one intranet. Intranet does not require wired links or a single subnet. Perimeter describes an isolated exposed-services zone, extranet implies controlled outside-partner access, and Internet is the public global network. The supplied private organizational use, not merely the geographic size, determines the answer.",
      "options": [
        "Intranet",
        "Perimeter",
        "Extranet",
        "Internet"
      ],
      "correct": 0
    },
    {
      "id": "net-437",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "Remote users need to connect to your network through a server running Windows Server\nthat is deployed on your perimeter network.\nFor each statement, select True or False.\nNote: You will receive partial credit for each correct selection.",
      "explanation": "A VPN for secure Internet remote access is Yes. Requiring the server to use dial-up because a client does is No: client and server access media need not match. An appropriate RAS gateway can support configured Windows 10 always-on VPN connectivity, so the third is Yes as a capability statement. Gateway deployment alone does not automatically configure every client; client VPN profiles, authentication, policy and supported editions/features must also be in place.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "You can use a VPN to enable users to make a secure connection to your network through the Internet.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If users connect to the Internet through dial-up connections, the server must also connect through a dial-up connection.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "You can use RAS Gateway to configure a VPN connection for Windows 10 clients that is active whenever the client connects to the Internet.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-438",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "The shown trace targets 173.194.75.105 (use the address in the screenshot). Complete the statements.",
      "explanation": "The intermediate forwarding hops are routers, not passive patch panels, hubs or repeaters. The visible tracert targets 173.194.75.105 and receives a final response from that exact address at hop 13 followed by “Trace complete,” so target reachability is successful. Hop 12 times out, but later destination response proves that one missing probe response does not mean the route failed there. This demonstrates trace completion, not necessarily web-application health.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Repeater"
        },
        {
          "id": "i2",
          "text": "Patch panel"
        },
        {
          "id": "i3",
          "text": "Router"
        },
        {
          "id": "i4",
          "text": "Hub"
        },
        {
          "id": "i5",
          "text": "Unsuccessfully"
        },
        {
          "id": "i6",
          "text": "Without reaching the destination"
        },
        {
          "id": "i7",
          "text": "Successfully"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Each intermediate forwarding hop normally represents a",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "The trace reached its target",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7"
          ]
        }
      ],
      "image": "assets/networking/pdf-097-tracert.png"
    },
    {
      "id": "net-439",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is the top-level domain of ftp.sunsetweb.org?",
      "explanation": "org is the top-level domain in ftp.sunsetweb.org. sunsetweb.org is the domain beneath that TLD, sunsetweb is its second-level label, and ftp is the host/service label. The TLD is identified from the rightmost non-root label, not from the first label or the application protocol suggested by the host name.",
      "options": [
        "ftp",
        "sunsetweb",
        "sunsetweb.org",
        "org"
      ],
      "correct": 3
    },
    {
      "id": "net-440",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol operates at the transport layer of the TCP model?",
      "explanation": "UDP is a Transport-layer protocol in TCP/IP. IP belongs to the Internet layer, IGMP manages IPv4 multicast group membership alongside IP, and FTP is an Application-layer protocol. UDP provides port-addressed datagrams without TCP-style ordering or retransmission. A protocol being carried inside IP does not automatically make it an Internet-layer routing protocol.",
      "options": [
        "IGMP",
        "FTP",
        "UDP",
        "IP"
      ],
      "correct": 2
    },
    {
      "id": "net-441",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about the Internet of Things (IoT), select True or False.",
      "explanation": "IP-capable IoT endpoints using IP addresses is Yes. Requiring continuous human interaction is No: devices often sense, report or act autonomously. Smart thermostats and network-controlled lightbulbs are examples, so the third is Yes. The IP-capable qualification matters because some IoT devices use non-IP local radio protocols through a gateway rather than each having a directly reachable IP interface.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "IP-capable IoT endpoints use IP addresses.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "IoT devices require continuous human interaction to communicate.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A smart thermostat and a network-controlled lightbulb are IoT examples.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-442",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "What are two purposes of the ping utility? (Choose 2.)",
      "explanation": "ping is used for a limited local stack/interface self-test and for remote ICMP reachability. It is not a dedicated duplicate-address discovery or firewall-port scan tool. A hostname argument may trigger resolution before probes, but DNS resolution itself is performed by the resolver rather than being ping's defining diagnostic purpose. Local success does not prove the cable works, and remote failure may simply mean ICMP is blocked.",
      "options": [
        "To search for duplicate addresses",
        "To resolve host names to IP addresses",
        "To self-test a host's own network interface",
        "To scan for open host firewall ports",
        "To determine whether a host is reachable"
      ],
      "correct": [
        2,
        4
      ]
    },
    {
      "id": "net-443",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which protocol does the ping utility use to test communication with a remote host?",
      "explanation": "ping normally uses ICMP echo requests/replies for IPv4, or ICMPv6 for IPv6. HTTP retrieves web content, SNMP manages devices, BOOTP supplies boot/configuration information and OSPF exchanges routing information. None is the protocol used for standard echo reachability testing. The utility can ask the resolver to translate a supplied hostname first, but that separate lookup is not the ping probe itself.",
      "options": [
        "HTTP",
        "SNMP",
        "ICMP",
        "BOOTP",
        "OSPF"
      ],
      "correct": 2
    },
    {
      "id": "net-444",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which wireless authentication method provides the highest level of security?",
      "explanation": "WPA2 is the strongest listed complete Wi-Fi protection generation when using appropriate AES-CCMP configuration. Original WPA/TKIP and especially WEP are weaker. WPS is a provisioning mechanism, not a stronger encryption/authentication suite, and vulnerable PIN workflows can undermine security. This is an among-the-listed comparison, not a claim that WPA2 surpasses properly deployed WPA3 or that every WPA2 configuration is equally safe.",
      "options": [
        "Wi-Fi Protected Access (WPA)",
        "Wired Equivalent Privacy (WEP)",
        "Wi-Fi Protected Access 2 (WPA2)",
        "WPS authentication"
      ],
      "correct": 2
    },
    {
      "id": "net-445",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "You are a network support technician at an internet service provider (ISP). You receive\na call from a customer indicating that they cannot access the internet.\nYou need to troubleshoot the problem.\n\nWhich three actions should you complete first? (Choose 3.)",
      "explanation": "Check modem status lights, perform the ISP-side line test and, when appropriate, restart the modem. Those actions target power/link/synchronization problems before making invasive software changes. An OS upgrade is not the first diagnostic for lost connectivity, deleting HOSTS indiscriminately destroys potentially valid configuration, and remote login may be impossible while the customer is offline. Preserve observations before restarting and avoid repeatedly rebooting equipment when a line fault is already confirmed.",
      "options": [
        "Ask the customer to restart the modem.",
        "Perform a line test to check connectivity between the ISP and the customer.",
        "Ask the customer to update the operating system to the latest version.",
        "Ask the customer to check for the appropriate status lights on the modem.",
        "Ask the customer to delete the hosts file.",
        "Log in to the customer's computer remotely."
      ],
      "correct": [
        0,
        1,
        3
      ]
    },
    {
      "id": "net-446",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which network topology is the internet designed around?",
      "explanation": "The Internet's interconnection is best described as a mesh, more precisely a complex partial mesh/hierarchical arrangement rather than a full mesh of every host. Multiple provider paths can supply redundancy. It is not one ring, one shared bus or a single central star. Routing policy and failures determine which available paths are actually used, so mesh structure does not guarantee every destination always has a usable alternate route.",
      "options": [
        "Ring",
        "Mesh",
        "Bus",
        "Star"
      ],
      "correct": 1
    },
    {
      "id": "net-447",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which routing option is fault tolerant?",
      "explanation": "Dynamic routing can adapt after a failure when alternate usable paths exist and the protocol converges, making it the intended fault-tolerant choice. A default route alone is only a fallback prefix. Static routing generally needs manual changes or extra tracking mechanisms, and “least-cost” describes path selection rather than automatic recovery. Dynamic routing is not intrinsically failure-proof; redundancy, correct advertisements and convergence behavior are necessary.",
      "options": [
        "The default route",
        "Static routing",
        "Dynamic routing",
        "Least-cost routing"
      ],
      "correct": 2
    },
    {
      "id": "net-448",
      "chapter": "protocoale",
      "type": "single",
      "question": "Beyond its standard Layer 2 capabilities, what additional function is a key characteristic of a Layer 3 switch?",
      "explanation": "A Layer 3 switch adds routing between VLANs/subnets using IP information and routes. MAC-only forwarding is an ordinary Layer 2 function and therefore does not identify the added capability. Address assignment is DHCP, while user authentication requires separate access-control mechanisms. Some products combine those services, but inter-network packet routing is the essential distinguishing feature in this question.",
      "options": [
        "Assigns dynamic IP addresses to network devices.",
        "Forwards data frames based only on the destination MAC address.",
        "Performs routing of packets between different VLANs or subnets.",
        "Authenticates users before granting network acces"
      ],
      "correct": 2
    },
    {
      "id": "net-449",
      "chapter": "protocoale",
      "type": "single",
      "question": "What protocol is used within switches specifically to prevent network loops by managing redundant paths?",
      "explanation": "STP builds a loop-free active Layer 2 topology by placing selected redundant paths into a nonforwarding state, while retaining potential recovery paths. DHCP supplies addresses, NAT translates addresses and RDP carries remote desktop sessions; none manages Ethernet bridging loops. STP here means Spanning Tree Protocol, not shielded twisted pair. Appropriate root and edge protections are still important for a resilient switched network.",
      "options": [
        "Dynamic Host Configuration Protocol (DHCP)",
        "Spanning Tree Protocol (STP)",
        "Network Address Translation (NAT)",
        "Remote Desktop Protocol (RDP)"
      ],
      "correct": 1
    },
    {
      "id": "net-450",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Select two statements that accurately describe the operation of a network switch.",
      "explanation": "Switches use learned MAC information for selective forwarding and can support full-duplex simultaneous transmission/reception on compatible links. They do not send every incoming frame to every port; flooding applies to broadcast and unknown destinations within the VLAN. Each port is a separate collision domain rather than all ports sharing one large domain as a hub does. The full-duplex statement describes normal modern operation, not a requirement that every legacy link be full duplex.",
      "options": [
        "Switches use a MAC address table to determine the specific port for forwarding data.",
        "Switches operate in full-duplex mode, allowing simultaneous transmission and reception.",
        "Switches forward all incoming traffic to every connected port.",
        "Switches operate within a single, large collision domain."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "net-451",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "When comparing switches to hubs, what are two key advantages that switches provide?",
      "explanation": "A switch separates collision domains per port and filters/forwards frames using MAC information, unlike a hub's signal repetition. Those are the two advantages. Ordinary Layer 2 switching does not use destination IP routes, and switches are not restricted to half duplex. Full-duplex links allow simultaneous sending/receiving without shared-medium collisions, while hub-attached devices contend for the same medium.",
      "options": [
        "Switches create a separate collision domain for each port.",
        "Switches forward frames based on the destination IP address.",
        "Switches operate only in half-duplex mode.",
        "Switches intelligently filter traffic based on MAC addresses, unlike hubs."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "net-452",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about switch operations, select True or False.",
      "explanation": "The learned-MAC forwarding statement is Yes, and unknown-unicast flooding is Yes within the same VLAN's eligible forwarding ports, excluding ingress. Broadcasting only through trunk ports is No: broadcasts also reach access ports belonging to the VLAN. “All ports” must not mean every physical port across all VLANs or ports blocked by spanning tree. The VLAN and forwarding-state restrictions are essential to accurate switch behavior.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A switch forwards a frame to a specific port based on its MAC address table.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "If the destination MAC is unknown, a switch floods the frame to other forwarding ports in the same VLAN, excluding ingress.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "A switch forwards broadcast frames only to other switches via trunk ports.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-453",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement comparing network devices and features, select True or False.",
      "explanation": "A Layer 3 switch routing while a pure Layer 2 switch does not is Yes. A hub creating separate collision domains is No: it repeats into one shared domain. Managed versus unmanaged administrative configuration is Yes. Layer 3 devices usually retain Layer 2 functionality, and managed does not inherently mean Layer 3; those are different capability distinctions.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A Layer 3 switch is capable of routing, while a Layer 2 switch is not.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A hub reduces collisions by creating a separate collision domain for each port.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A managed switch provides configuration options, while an unmanaged switch does not.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-454",
      "chapter": "echipamente",
      "type": "single",
      "question": "You need a device to connect multiple computers within a LAN. The device must support remote configuration and offer superior performance by isolating collision domains per port. Which device fits these requirements?",
      "explanation": "A managed switch supplies the required remote configuration while isolating each ordinary Ethernet port into its own collision domain and selectively forwarding frames. An unmanaged switch can provide similar switching performance but lacks the requested administration. A hub shares collision exposure, and a router is not the ordinary workgroup access-switch replacement. Strictly, switching increases the number of smaller collision domains rather than minimizing their count; it reduces shared contention.",
      "options": [
        "Hub",
        "Unmanaged switch",
        "Router",
        "Managed switch"
      ],
      "correct": 3
    },
    {
      "id": "net-455",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which network device is primarily responsible for forwarding packets between different networks and uses a routing table to determine the best path for the data?",
      "explanation": "A router uses destination IP prefixes and a routing table to forward packets between networks. An ordinary Layer 2 switch uses MAC forwarding within a LAN/VLAN. A hub and repeater regenerate signals without choosing an IP path. The best route is determined by matching prefix and applicable preference/metric rules, not necessarily geographic distance or the physically shortest cable.",
      "options": [
        "Layer 2 Switch",
        "Hub",
        "Router",
        "Repeater"
      ],
      "correct": 2
    },
    {
      "id": "net-456",
      "chapter": "protocoale",
      "type": "single",
      "question": "What network device is essential for linking a local area network (LAN) to a wide area network (WAN), such as the internet?",
      "explanation": "A router interconnects the LAN's IP network with the WAN/Internet path. A hub or Layer 2 switch only supplies local frame/signal forwarding unless combined with additional routing functions. “Unmanaged” describes administrative capability and does not add a WAN routing role. Actual provider access may also require a modem/ONT, but the inter-network forwarding function asked for is routing.",
      "options": [
        "Router",
        "Hub",
        "Layer 2 switch",
        "Unmanaged switch"
      ],
      "correct": 0
    },
    {
      "id": "net-457",
      "chapter": "infrastructura",
      "type": "single",
      "question": "According to the exam objectives, which of the following is classified as a characteristic of a wide area network (WAN)?",
      "explanation": "Cellular 3G/4G/5G networks provide wide-area mobile connectivity and are the WAN-related choice in this list. VLANs divide switched local infrastructure, WLAN refers to wireless local-area networking, and a perimeter network is a trust zone rather than a geographic WAN access technology. This classification does not claim every cellular connection is faster or more secure than local Ethernet/Wi-Fi.",
      "options": [
        "VLANs",
        "Wireless LAN",
        "Cellular (3G, 4G, 5G)",
        "Perimeter networks"
      ],
      "correct": 2
    },
    {
      "id": "net-458",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is a primary benefit of using dynamic routing protocols compared to static routing?",
      "explanation": "Dynamic routing updates reachability information as routers exchange advertisements and react to topology changes. DHCP, not routing protocols, assigns client addresses. VLANs segment broadcast domains, and dynamic routing still requires correct configuration. The automatic response is a benefit over manually maintained static routes, but convergence takes time and does not remove the need for redundant usable paths.",
      "options": [
        "It automatically configures client IP addresses.",
        "It automatically updates routing tables in response to network topology changes.",
        "It segments the network into smaller broadcast domains.",
        "It guarantees no configuration is required."
      ],
      "correct": 1
    },
    {
      "id": "net-459",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which router feature is used to prioritize network traffic to ensure that time-sensitive data, like streaming video, is not delayed?",
      "explanation": "QoS classifies and prioritizes traffic, with queuing/shaping/policing mechanisms that can reduce delay or loss for time-sensitive flows during contention. NAT changes addresses, port forwarding directs selected inbound connections, and default routes choose a fallback network path. None is the traffic-priority mechanism requested. QoS cannot guarantee no delay under every overload condition or force an unrelated provider to honor local priority markings.",
      "options": [
        "Network Address Translation (NAT)",
        "Port forwarding",
        "Quality of Service (QoS)",
        "Default routes"
      ],
      "correct": 2
    },
    {
      "id": "net-460",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which statement accurately describes how entries are added or modified in a router's static routing table?",
      "explanation": "An administrator explicitly enters or modifies static routes, potentially using configuration automation. OSPF/EIGRP and neighbor learning create dynamic routes instead. A connected switch does not automatically write the router's static configuration. Static routes can reference an upstream router, but the referenced next hop is not the source of a dynamic learning process in this model.",
      "options": [
        "By an administrator manually entering the route information.",
        "By a dynamic routing protocol, such as OSPF or EIGRP.",
        "By the router automatically learning from adjacent devices.",
        "By the switch to which the router is connected."
      ],
      "correct": 0
    },
    {
      "id": "net-461",
      "chapter": "echipamente",
      "type": "single",
      "question": "In a router's configuration, what type of route is used to forward all packets that do not match any specific entry in the routing table?",
      "explanation": "A default route is the least-specific catch-all, used when no more-specific destination prefix matches. It can itself be statically configured or dynamically learned. A directly connected route covers one attached prefix, while port forwarding is address/port translation rather than route fallback. A dynamic route is not necessarily default; learning method and prefix specificity are independent properties.",
      "options": [
        "A dynamic route",
        "A default route",
        "A directly connected route",
        "A port forwarding rule"
      ],
      "correct": 1
    },
    {
      "id": "net-462",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is a key advantage of implementing dynamic routing?",
      "explanation": "Dynamic routing lets routers share reachability and adapt as links/networks change. It does not directly configure client address settings, eliminate all bottlenecks or use HOSTS for route learning. HOSTS is a local name-resolution file. Automatic convergence reduces manual route maintenance but still depends on protocol configuration, neighbors, policy and alternate paths.",
      "options": [
        "It simplifies network configuration for client devices.",
        "It eliminates all network bottlenecks.",
        "It allows routers to automatically share route information and adapt to changes.",
        "It uses a HOSTS file for name resolution."
      ],
      "correct": 2
    },
    {
      "id": "net-463",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the function of port forwarding on a router?",
      "explanation": "Port forwarding maps selected inbound destination ports/addresses to an internal host/service, commonly through destination NAT on an edge router. DHCP assigns client settings, QoS prioritizes traffic and STP addresses Layer 2 loops. Those are different functions. A forwarding rule should be paired with appropriate firewall authorization and a correctly listening internal service; it does not safely expose every internal port automatically.",
      "options": [
        "To automatically assign IP addresses to devices on the LAN.",
        "To prioritize specific types of network traffic, like voice or video.",
        "To direct incoming traffic from the WAN to a specific device on the LAN based on the port number.",
        "o prevent network loops from occurring."
      ],
      "correct": 2
    },
    {
      "id": "net-464",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A network must be installed in a factory environment near heavy machinery, which produces significant electromagnetic interference (EMI). Which cable type should be selected to best protect the data signals from this interference?",
      "explanation": "STP Cat5e is the shielded option and can reduce external EMI near heavy machinery when correctly installed and bonded. All three UTP alternatives lack shielding; Cat6's higher bandwidth rating is not equivalent to external shielding. Cat3 also has lower performance. Cable routing, separation, grounding and connector continuity matter, and fiber would avoid electrical interference entirely if it were an available design choice.",
      "options": [
        "UTP (Unshielded Twisted Pair) CAT5e.",
        "UTP (Unshielded Twisted Pair) CAT6.",
        "STP (Shielded Twisted Pair) CAT5e.",
        "UTP (Unshielded Twisted Pair) CAT3."
      ],
      "correct": 2
    },
    {
      "id": "net-465",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which type of physical cabling is known for its immunity to EMI and is used for the highest speeds over the longest distances, such as connecting buildings?",
      "explanation": "Fiber optic cabling carries light, avoiding electromagnetic coupling in the data path and supporting high rates over suitable long optical links. Shielded Cat7 still uses electrical signals, while Cat6 and crossover Cat5e remain copper. A crossover changes pin assignments rather than interference immunity. Actual distance and rate require compatible optics, fiber type and loss budget rather than fiber alone guaranteeing every speed at every distance.",
      "options": [
        "Fiber optic cabling.",
        "Shielded CAT7 cabling.",
        "Unshielded CAT6 cabling.",
        "Crossover CAT5e cabling."
      ],
      "correct": 0
    },
    {
      "id": "net-466",
      "chapter": "infrastructura",
      "type": "single",
      "question": "An installation requires a network connection spanning 8 kilometers. Which physical media type is designed to support this segment length?",
      "explanation": "An 8-kilometer link calls for single-mode fiber with suitable long-reach transceivers and optical budget. Ordinary Cat6 or shielded Cat5e Ethernet channels are limited to roughly 100 meters, while typical multimode Ethernet optics are for much shorter reaches than 8 km. Shielding does not extend copper by two orders of magnitude. Check connector/splice loss and supported optic specifications before choosing the final modules.",
      "options": [
        "Unshielded Twisted Pair (CAT6).",
        "Single-mode fiber optic cable.",
        "Shielded Twisted Pair (CAT5e).",
        "Multi-mode fiber optic cable."
      ],
      "correct": 1
    },
    {
      "id": "net-467",
      "chapter": "echipamente",
      "type": "single",
      "question": "What specific configuration of twisted-pair cable is used to connect dissimilar devices, such as a computer to a network switch's standard port?",
      "explanation": "Straight-through wiring conventionally connects unlike Ethernet port roles, such as a computer NIC to a standard switch port. A crossover exchanges transmit/receive pair roles for like legacy ports. Shielding describes construction, not pinout, and fiber is a different medium. Auto MDI-X often permits either copper pinout today, but it does not change which wiring pattern is called straight-through.",
      "options": [
        "A crossover cable configuration.",
        "A straight-through cable configuration.",
        "A shielded (STP) cable configuration.",
        "A fiber optic cable configuration."
      ],
      "correct": 1
    },
    {
      "id": "net-468",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is the primary reason to select Shielded Twisted Pair (STP) over Unshielded Twisted Pair (UTP) cabling for a network installation?",
      "explanation": "Significant external EMI is the primary reason to choose properly bonded STP over UTP. It is not automatically the cheapest option or a way to exceed Ethernet channel-distance limits. Plenum rating concerns flame/smoke behavior, not whether a cable has a shield, and proximity to power requires compliant separation rather than merely buying STP. Fire rating, electrical safety and interference control are separate installation considerations.",
      "options": [
        "The cabling path is susceptible to significant electromagnetic interference.",
        "The installation requires the absolute longest possible media segment length.",
        "The installation budget requires the most inexpensive cabling option available.",
        "The cable must be installed in a plenum-rated ceiling space alongside power lines."
      ],
      "correct": 0
    },
    {
      "id": "net-469",
      "chapter": "echipamente",
      "type": "single",
      "question": "What is the specific purpose of using a crossover cable configuration, as opposed to a straight-through configuration?",
      "explanation": "A crossover conventionally connects two like legacy Ethernet ports, such as two switches without Auto MDI-X, by swapping the appropriate transmit/receive pairs. Computer-to-switch normally uses straight-through wiring. Crossing pairs does not raise the cable category, increase link speed or shield against crosstalk. Modern automatic crossover can make manual selection unnecessary, but the stem explicitly excludes it.",
      "options": [
        "Connect a computer to a normal switch port",
        "Connect two legacy switches without auto-MDI-X",
        "Achieve higher speed than straight-through wiring",
        "Protect against high crosstalk"
      ],
      "correct": 1
    },
    {
      "id": "net-470",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which networking medium is inherently immune to electromagnetic interference (EMI) because it transmits data using light pulses instead of electrical signals?",
      "explanation": "Fiber's optical signal path is inherently immune to EMI pickup, so fiber is the correct medium. STP reduces electrical coupling with shielding but remains copper; UTP lacks that shield. Wireless intentionally uses electromagnetic radio propagation and can be disrupted by other emissions. Optical fiber is still vulnerable to bending, dirty connectors and excessive optical loss, so immunity is specifically to electromagnetic interference, not every network fault.",
      "options": [
        "Unshielded Twisted Pair (UTP) cable.",
        "Fiber optic cable.",
        "Shielded Twisted Pair (STP) cable.",
        "Wireless (802.11) signal transmission."
      ],
      "correct": 1
    },
    {
      "id": "net-471",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What type of interference occurs when the signal from one wire in a twisted-pair cable bleeds over and affects the signal on an adjacent wire within the same cable?",
      "explanation": "The specific term is crosstalk: unwanted coupling from one pair/circuit into another nearby one. EMI and RFI are broader interference categories, often used for external sources; “signal interception” refers to unauthorized reception rather than this cable impairment. Twisting, pair spacing and correct termination reduce crosstalk. Untwisting too much cable at a connector can damage high-speed performance even if basic continuity remains correct.",
      "options": [
        "Electromagnetic interference (EMI).",
        "Radio frequency interference (RFI).",
        "Crosstalk.",
        "Signal interception."
      ],
      "correct": 2
    },
    {
      "id": "net-472",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "A switch that allows for configuration of features like VLANs and port security is known as a \n[1]\n switch.",
      "explanation": "Choose Managed. Configurable VLANs and port security require administrative control exposed by a managed switch. An unmanaged switch offers basic forwarding without those normal controls. A repeater regenerates signals, and “passive” does not identify a switch with policy configuration. Managed capability does not automatically mean the device supports Layer 3 routing; the question concerns configuration features.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Repeater"
        },
        {
          "id": "i2",
          "text": "Managed"
        },
        {
          "id": "i3",
          "text": "Unmanaged"
        },
        {
          "id": "i4",
          "text": "Passive"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "net-473",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "On a router, the \n[1]\n feature is used to prioritize specific types of network traffic, such as voice or video.",
      "explanation": "Choose QoS because it assigns traffic classes and preferential queuing/bandwidth treatment for flows such as voice/video. NAT and PAT translate addresses/ports rather than set delivery priority. DNS resolves names. QoS can improve behavior under congestion but cannot create link capacity or guarantee an external network honors local markings, so “prioritize” should not be read as eliminating every possible delay.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Quality of Service (QoS)"
        },
        {
          "id": "i2",
          "text": "Network Address Translation (NAT)"
        },
        {
          "id": "i3",
          "text": "Port Address Translation (PAT)"
        },
        {
          "id": "i4",
          "text": "Domain Name System (DNS)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "net-474",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For two legacy like Ethernet ports WITHOUT auto-MDI-X, which cable configuration crosses transmit/receive pairs?",
      "explanation": "Choose Crossover. For like legacy Ethernet ports, it connects one side's transmit pairs to the other's receive pairs. Straight-through keeps corresponding pin assignments, while rollover reverses pins for console-style use and coaxial is a different medium. The no-Auto-MDI-X condition matters because modern auto-crossover ports can often use either appropriate copper wiring pattern.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Straight-through"
        },
        {
          "id": "i2",
          "text": "Rollover"
        },
        {
          "id": "i3",
          "text": "Coaxial"
        },
        {
          "id": "i4",
          "text": "Crossover"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Cable configuration for these legacy like ports",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "net-475",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "A \n[1]\n port on a switch is configured to carry traffic for only one specific VLAN to an end device like a computer.",
      "explanation": "Choose Access. A conventional access port places an endpoint's untagged data traffic in one assigned VLAN. A trunk carries multiple VLANs, “uplink” describes where a connection leads rather than uniquely defining its VLAN mode, and console is an administrative interface. Voice-VLAN arrangements can add special behavior, but the stated single-VLAN computer connection is the ordinary access-port case.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Console"
        },
        {
          "id": "i2",
          "text": "Uplink"
        },
        {
          "id": "i3",
          "text": "Access"
        },
        {
          "id": "i4",
          "text": "Trunk"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "net-476",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "The protocol used by switches to prevent Layer 2 loops across redundant paths is [1].",
      "explanation": "Choose Spanning Tree Protocol. It coordinates a loop-free active Layer 2 topology across redundant switch links and can restore a backup path after reconvergence. ICMP handles IP control/errors, ARP resolves local IPv4 neighbors to MAC addresses and SMTP transfers mail. They do not prevent bridging loops. Spanning tree can block data forwarding on a link without physically disconnecting the cable.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Internet Control Message Protocol (ICMP)"
        },
        {
          "id": "i2",
          "text": "Spanning Tree Protocol (STP)"
        },
        {
          "id": "i3",
          "text": "Address Resolution Protocol (ARP)"
        },
        {
          "id": "i4",
          "text": "Simple Mail Transfer Protocol (SMTP)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        }
      ]
    },
    {
      "id": "net-477",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Drag the characteristic to the correct network device it describes.\n\nHub:  , \n\nSwitch:  ,",
      "explanation": "Hub matches half-duplex operation and one shared collision domain. Switch matches MAC-table forwarding and separate collision domains per port. A hub does not inspect destination frames to choose an output, while a switch can forward multiple independent conversations concurrently. Full-duplex switched links avoid collisions; connecting a hub to a switch leaves the hub's attached segment shared rather than making every downstream endpoint independently full duplex.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Uses a MAC table to forward frames."
        },
        {
          "id": "i2",
          "text": "Operates in half-duplex by default."
        },
        {
          "id": "i3",
          "text": "Creates a single collision domain."
        },
        {
          "id": "i4",
          "text": "Creates a separate collision domain per port."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Hub: duplex mode",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Hub: collision behavior",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Switch: forwarding method",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Switch: collision behavior",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "net-478",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Match the routing table concept to its correct description.\n\nStatic routing: \n\nDynamic routing: \n\nDefault route:",
      "explanation": "Static routing matches manual administrative entries, dynamic routing matches learned routes from routing exchanges, and default route matches catch-all forwarding when no more-specific prefix applies. A default route may be static or dynamic, so these concepts overlap in different dimensions rather than describing three mutually exclusive route properties. Their mapped definitions correctly distinguish route origin from destination coverage.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A route that is manually entered by an administrator."
        },
        {
          "id": "i2",
          "text": "A route learned automatically from other routers."
        },
        {
          "id": "i3",
          "text": "A \"catch-all\" route for traffic with no specific match."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Static routing",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Dynamic routing",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Default route",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-479",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Match the cable type to its main characteristic.\n\nFiber optic: \n\nSTP (Shielded Twisted Pair): \n\nUTP (Unshielded Twisted Pair):",
      "explanation": "Fiber matches EMI immunity of the optical path. STP matches foil/braid shielding that reduces external coupling when installed correctly. UTP matches the unshielded medium's susceptibility to EMI and crosstalk, although twisted pairs still provide noise rejection. Shielding is mitigation rather than complete immunity, and fiber's optical advantages do not remove the need to manage attenuation, bends and clean connectors.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Uses a foil or braid to reduce EMI."
        },
        {
          "id": "i2",
          "text": "Immune to electromagnetic interference (EMI)."
        },
        {
          "id": "i3",
          "text": "Is susceptible to EMI and cross-talk."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Fiber optic",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "STP",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "UTP",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-480",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Drag the switch function to the OSI layer where it primarily operates.\n\nLayer 2 Switch: \n\nLayer 3 Switch:",
      "explanation": "Layer 2 switch matches MAC-based frame forwarding. Layer 3 switch matches IP-based routing, which is its additional capability; it generally still performs Layer 2 switching too. These mappings distinguish logical forwarding decisions rather than asserting that one device can contain only one layer's functions. Inter-VLAN traffic typically needs the Layer 3 function, while same-VLAN traffic can remain switched.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Performs routing based on IP addresses."
        },
        {
          "id": "i2",
          "text": "Forwards frames based on MAC addresses."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Layer 2 switch",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Layer 3 switch",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-481",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Match the cable configuration to its standard use case.\n\nStraight-through: \n\nCrossover:",
      "explanation": "Straight-through matches computer-to-standard-switch-port wiring. Crossover matches legacy switch-to-switch wiring where Auto MDI-X is unavailable. The first connection uses complementary port roles, whereas the second must exchange pair roles through the cable. Automatic crossover or dedicated uplink ports can change the cable needed in practice, but the listed legacy condition explains the intended mapping.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Connecting a computer to a switch."
        },
        {
          "id": "i2",
          "text": "Connecting one legacy switch to another without auto-MDI-X."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Straight-through",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Crossover",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-482",
      "chapter": "protocoale",
      "type": "single",
      "question": "From the following options, identify a protocol that functions at the Transport layer of the TCP/IP model.",
      "explanation": "UDP is the Transport-layer protocol. HTTP and FTP are Application-layer services, while IP belongs to the Internet layer. UDP offers port-based datagrams without TCP's connection setup, built-in retransmission or ordering. Its placement is determined by its endpoint transport function, not by whether an application using it happens to be reliable through its own higher-level mechanisms.",
      "options": [
        "HTTP (Hypertext Transfer Protocol)",
        "IP (Internet Protocol)",
        "FTP (File Transfer Protocol)",
        "UDP (User Datagram Protocol)"
      ],
      "correct": 3
    },
    {
      "id": "net-483",
      "chapter": "protocoale",
      "type": "single",
      "question": "At which layer of the OSI model does the physical MAC address primarily operate?",
      "explanation": "MAC addressing is primarily a Data Link, Layer 2 function used in local frames. Network/Layer 3 uses logical addressing such as IP, Transport/Layer 4 uses ports and end-to-end delivery mechanisms, and Application/Layer 7 defines higher services. “Physical address” is a common name for MAC but does not put MAC interpretation in the Physical layer.",
      "options": [
        "The Network layer (Layer 3)",
        "The Application layer (Layer 7)",
        "The Data Link layer (Layer 2)",
        "The Transport layer (Layer 4)"
      ],
      "correct": 2
    },
    {
      "id": "net-484",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match the protocol from the list to its primary function or characteristic. Not all protocols will be used.\n\n : Provides a connectionless, best-effort transport service.\n : Provides a connection-oriented reliable ordered byte stream, or reports failure.\n : Discovers the MAC address associated with a specific IP address.",
      "explanation": "UDP maps to connectionless best-effort transport. TCP maps to a connection-oriented reliable ordered byte stream using acknowledgments and retransmissions. ARP maps a local IPv4 address to its link-layer/MAC address. ICMP supports IP control/error messages, and IGMP manages IPv4 multicast memberships, so neither fits those transport/address-resolution descriptions. TCP reliability is not an absolute promise of successful packet delivery during permanent failure; it delivers a stream consistently or reports failure.",
      "dragItems": [
        {
          "id": "i1",
          "text": "TCP"
        },
        {
          "id": "i2",
          "text": "ICMP"
        },
        {
          "id": "i3",
          "text": "ARP"
        },
        {
          "id": "i4",
          "text": "UDP"
        },
        {
          "id": "i5",
          "text": "IGMP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Provides a connectionless, best-effort transport service.",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Provides a connection-oriented reliable ordered byte stream, or reports failure.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Discovers the MAC address associated with a specific IP address.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-485",
      "chapter": "depanare-unelte",
      "type": "dropdown",
      "question": "For each statement about network protocols, select True or False.\nNote: You will receive partial credit for each correct selection.",
      "explanation": "ping using ICMP is Yes. IGMP allocating IP addresses is No; DHCP performs dynamic configuration, while IGMP manages IPv4 multicast group membership. ARP resolving FQDNs is No; DNS performs that naming function, while ARP resolves on-link IPv4-to-MAC mappings. Each statement confuses a different layer or service, so sharing IP networking infrastructure does not make the protocols interchangeable.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The `ping` utility uses ICMP to test host reachability.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "IGMP is used to manage dynamic IP address allocation.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "ARP is used to resolve fully qualified domain names (FQDNs) to IP addresses.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-486",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match the private IPv4 address class to its designated address range. Not all options will be used.\n\n : 10.0.0.0 - 10.255.255.255\n : 172.16.0.0 - 172.31.255.255\n : 192.168.0.0 - 192.168.255.255",
      "explanation": "10.0.0.0–10.255.255.255 is the private /8 block associated with historical Class A. 172.16.0.0–172.31.255.255 is private /12 space spanning sixteen historical Class B /16 networks. 192.168.0.0–192.168.255.255 is private /16 space spanning 256 historical Class C /24 networks. Those prefix sizes explain why the latter two ranges are not each merely one old default-class subnet. Class E is reserved/experimental and is not an RFC 1918 private range. Private addresses can be routed inside an organization, but are not globally unique public Internet host addresses. In particular, not every 172.x address is private: the second octet must fall from 16 through 31.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Class A Private"
        },
        {
          "id": "i2",
          "text": "Class B Private"
        },
        {
          "id": "i3",
          "text": "Class C Private"
        },
        {
          "id": "i4",
          "text": "Class E (Experimental)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "10.0.0.0 - 10.255.255.255",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "172.16.0.0 - 172.31.255.255",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "192.168.0.0 - 192.168.255.255",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-487",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which networking service is responsible for translating private, non-routable IP addresses into a single public, routable IP address, often using port numbers?",
      "explanation": "PAT translates private source addresses and transport ports so many internal flows can share one public IPv4 address. DHCP leases host configuration, DNS resolves domain names and WINS resolves legacy NetBIOS names. None of those naming/configuration services performs the many-to-one packet translation. Private addresses are routable inside private networks; “non-routable” here means not normally routed on the public Internet.",
      "options": [
        "DHCP (Dynamic Host Configuration Protocol)",
        "DNS (Domain Name System)",
        "PAT (Port Address Translation)",
        "WINS (Windows Internet Name Service)"
      ],
      "correct": 2
    },
    {
      "id": "net-488",
      "chapter": "protocoale",
      "type": "single",
      "question": "What are the two fundamental components that make up an IPv4 address?",
      "explanation": "An IPv4 address has a network prefix and host portion, interpreted using its mask. It is a 32-bit value, not a 64-bit hexadecimal address. MAC and IP addresses belong to different layers rather than being two halves of one IPv4 address. A socket combines address/transport endpoint information, and a default gateway is a configured next hop, not an embedded address component.",
      "options": [
        "A network identifier and a host identifier.",
        "A 64-bit hexadecimal number.",
        "A physical address and a logical address.",
        "A socket and a default gateway."
      ],
      "correct": 0
    },
    {
      "id": "net-489",
      "chapter": "protocoale",
      "type": "single",
      "question": "What service is responsible for dynamically assigning IPv4 address configurations, including an IP address, subnet mask, and default gateway, to clients on a network?",
      "explanation": "DHCP dynamically leases IPv4 configuration and supplies options such as mask, gateway and DNS servers. DNS resolves names, NAT rewrites addresses/ports in traffic and RDP provides remote desktop access. A DHCP server can advertise a router/DNS address without performing either routing or name resolution itself. The lease process is configuration distribution, not packet forwarding.",
      "options": [
        "DHCP (Dynamic Host Configuration Protocol)",
        "DNS (Domain Name System)",
        "NAT (Network Address Translation)",
        "RDP (Remote Desktop Protocol)"
      ],
      "correct": 0
    },
    {
      "id": "net-490",
      "chapter": "protocoale",
      "type": "single",
      "question": "In IPv6, what type of address is used for communication only within a single, local network segment and is not intended to be routed?",
      "explanation": "A link-local IPv6 address is for one local link and is not forwarded by routers to other links. Global addresses support routed global scope. Anycast describes delivery to one of several interfaces sharing an address, not a local-only scope. A tunnel-broker address refers to a provisioning context rather than the link-local class. The link-local prefix is FE80::/10.",
      "options": [
        "A global address",
        "A link-local address",
        "An anycast address",
        "A tunnel-broker address"
      ],
      "correct": 1
    },
    {
      "id": "net-491",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary purpose of a tunneling protocol like Teredo in the context of IPv4 and IPv6 coexistence?",
      "explanation": "Teredo carries IPv6 packets through IPv4 infrastructure using encapsulation, including UDP to handle certain NAT situations. It is not a general header-translation service, a DHCP-style address allocator or an inherently encrypted private VPN. Tunneling preserves the inner IPv6 packet rather than converting every application into IPv4. Transition support depends on network policy, firewall and NAT behavior.",
      "options": [
        "To allow IPv6 packets to be transmitted over an IPv4 network infrastructure.",
        "To dynamically assign public IPv6 addresses to clients.",
        "To translate IPv6 packet headers directly into IPv4 packet headers.",
        "To create an encrypted, secure link between two private networks."
      ],
      "correct": 0
    },
    {
      "id": "net-492",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which IPv6 transition method involves a single host or router running both the IPv4 and IPv6 protocol stacks simultaneously?",
      "explanation": "Dual stack means the host/router runs IPv4 and IPv6 simultaneously and can use the appropriate stack for each destination. Teredo and 6to4 instead tunnel IPv6 across IPv4 infrastructure. An AAAA lookup retrieves an IPv6 DNS record and does not itself install a second protocol stack. Dual stack requires valid configuration and reachability for each version; merely enabling both protocols does not guarantee both paths work.",
      "options": [
        "A dual IP stack configuration.",
        "A Teredo tunneling configuration.",
        "A 6to4 tunneling configuration.",
        "A DNS AAAA record query."
      ],
      "correct": 0
    },
    {
      "id": "net-493",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following correctly identifies the IPv6 loopback address, used for testing the local network stack?",
      "explanation": "::1 is IPv6 loopback and tests communication within the local host's IP stack. FE80::1 is link-local unicast, FF02::1 is link-local all-nodes multicast and 127.0.0.1 is IPv4 loopback. Similar testing purposes do not make an IPv4 literal an IPv6 address. Loopback replies do not prove that a physical network interface, cable or external router is functioning.",
      "options": [
        "::1",
        "FE80::1",
        "FF02::1",
        "127.0.0.1"
      ],
      "correct": 0
    },
    {
      "id": "net-494",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which option is the shortest correctly compressed form of FE80:0000:0000:0000:0200:00FF:FE00:0001?",
      "explanation": "Remove leading zeros from each hextet and replace the consecutive three all-zero groups with one ::, yielding FE80::200:FF:FE00:1. The expanded shortened-hextet option is valid but not shortest. The double-:: option is invalid because zero expansion would be ambiguous, and FE80:200:FF:FE00:1 has too few groups without a compression marker. Expanding the correct result reproduces all eight original groups.",
      "options": [
        "FE80::200:FF:FE00:1",
        "FE80:0:0:0:200:FF:FE00:1",
        "FE80::0200::FE00:0001",
        "FE80:200:FF:FE00:1"
      ],
      "correct": 0
    },
    {
      "id": "net-495",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which conventional default port is used by the Remote Desktop Protocol (RDP) for remote access to Windows computers?",
      "explanation": "RDP conventionally uses port 3389, including TCP and modern UDP use. Port 80 is HTTP, 143 is IMAP and 22 is SSH. Although 3389 is the familiar RDP service assignment, it lies outside the formal 0–1023 well-known/system range; “well-known” is used informally in the stem. Gateways or custom server settings can expose remote desktop through other ports without changing the conventional association.",
      "options": [
        "80",
        "143 (IMAP)",
        "22 (SSH)",
        "3389"
      ],
      "correct": 3
    },
    {
      "id": "net-496",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about name resolution, select True or False.",
      "explanation": "HOSTS providing static local mappings is Yes. MX mapping a name to IPv6 is No: AAAA performs that function, while MX identifies mail exchangers. WINS as a dynamic naming service is Yes in its legacy NetBIOS context. HOSTS entries and DNS/WINS records are different sources of name resolution; the ability to return an address does not make their namespaces and update behavior identical.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A HOSTS file provides static (manual) name resolution.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "An 'MX' record in DNS is used to map a name to an IPv6 address.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "WINS (Windows Internet Name Service) is a dynamic name resolution service.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-497",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "Complete the two DNS address-record statements.",
      "explanation": "Use A for a hostname's 32-bit IPv4 address and AAAA for its 128-bit IPv6 address. These are direct address-bearing records, and a hostname may have several of either type; an application/resolver then chooses an appropriate destination. MX instead names mail exchangers for a domain, often followed by a separate address lookup to contact the selected server. CNAME aliases one name to another canonical name rather than storing an IP literal. Thus mail routing and aliasing do not replace A/AAAA for the two blanks. The displayed text is a mapping template, not executed code, and each dropdown uses its own copies of the available record names.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A"
        },
        {
          "id": "i2",
          "text": "AAAA"
        },
        {
          "id": "i3",
          "text": "MX"
        },
        {
          "id": "i4",
          "text": "CNAME"
        },
        {
          "id": "i5",
          "text": "A"
        },
        {
          "id": "i6",
          "text": "MX"
        },
        {
          "id": "i7",
          "text": "CNAME"
        },
        {
          "id": "i8",
          "text": "AAAA"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ],
      "code": "Hostname to IPv4: [1]\nHostname to IPv6: [2]"
    },
    {
      "id": "net-498",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which network service is responsible for name resolution using 'A' records (hostname-to-IP) and 'PTR' records (IP-to-hostname)?",
      "explanation": "DNS uses A records for forward IPv4 lookup and PTR records for reverse address-to-name lookup. DHCP leases configuration, NAT translates packets and IDS detects suspicious activity. Those functions do not define the storage of A/PTR resource records. A forward record does not automatically create or guarantee a matching reverse record; the two directions can be managed in different zones.",
      "options": [
        "NAT (Network Address Translation)",
        "DHCP (Dynamic Host Configuration Protocol)",
        "DNS (Domain Name System)",
        "IDS (Intrusion Detection System)"
      ],
      "correct": 2
    },
    {
      "id": "net-499",
      "chapter": "protocoale",
      "type": "single",
      "question": "In the DNS name resolution process, what type of resource record is used to specify the mail exchange server for a domain?",
      "explanation": "MX identifies the mail exchanger for a domain and supplies preference values for selecting among destinations. A maps a host name to IPv4, CNAME aliases names and SOA contains zone authority/administrative parameters. After finding an MX target, a sender may need A/AAAA records to reach it, but those address records alone do not declare the domain's mail-handling role.",
      "options": [
        "A (Address) record",
        "CNAME (Canonical Name) record",
        "SOA (Start of Authority) record",
        "MX (Mail Exchanger) record"
      ],
      "correct": 3
    },
    {
      "id": "net-500",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which type of DNS record is used to create an alias, mapping one hostname to another (e.g., 'www.company.com' to 'server1.company.com')?",
      "explanation": "CNAME creates the alias relationship from www.company.com to the canonical name server1.company.com. The target is another DNS name, not a literal address. A records map names directly to IPv4, MX identifies mail exchangers and SOA supplies zone administration data. A later lookup can follow the CNAME to address records, but aliasing and address storage remain different record functions.",
      "options": [
        "A (Address) record",
        "MX (Mail Exchanger) record",
        "CNAME (Canonical Name) record",
        "SOA (Start of Authority) record"
      ],
      "correct": 2
    },
    {
      "id": "net-501",
      "chapter": "protocoale",
      "type": "single",
      "question": "A small business has many internal devices using private IP addresses but only one public IP address from their ISP. Which service is required to allow all devices to share this single public IP for internet access?",
      "explanation": "NAT is the relevant general service, specifically PAT/NAPT for many private hosts sharing one public IPv4 address. Port mappings distinguish simultaneous connections and direct replies back to the correct internal endpoint. DHCP leases addresses, DNS resolves names and static routing selects paths; none alone performs many-to-one address translation. Correct routing, firewall rules and a functioning provider connection remain necessary.",
      "options": [
        "NAT (Network Address Translation)",
        "DHCP (Dynamic Host Configuration Protocol)",
        "DNS (Domain Name System)",
        "Static Routing"
      ],
      "correct": 0
    },
    {
      "id": "net-502",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about networking services, select True or False.",
      "explanation": "Firewall filtering is Yes. DHCP translating private to public addresses is No because DHCP distributes configuration. Dynamic NAT mapping a private address to one public address at a time is Yes in the conventional pool-based distinction from PAT. Dynamic mappings are allocated temporarily from a pool; unlike static NAT they need not remain permanently tied to the same public address. PAT adds many-to-one port multiplexing.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A firewall is a service used to filter traffic between networks.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "DHCP is used to translate private IP addresses into public IP addresses.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Traditional dynamic NAT without PAT allocates one public-pool address per active private-address mapping.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-503",
      "chapter": "protocoale",
      "type": "single",
      "question": "A Windows computer is configured for DHCP but fails to contact the DHCP server. Which of the following IP addresses indicates that the computer has assigned itself an APIPA (Automatic Private IP Addressing) address?",
      "explanation": "169.254.10.1 is in the normal APIPA/link-local selection space, matching DHCP fallback. 10.1.10.1, 172.16.10.1 and 192.168.10.1 are ordinary RFC 1918 private addresses and could be valid leases. APIPA suggests failed lease acquisition but does not prove the DHCP server itself crashed; link, VLAN, relay or firewall problems can also prevent communication. Link-local fallback normally cannot reach routed external resources.",
      "options": [
        "10.1.10.1",
        "172.16.10.1",
        "169.254.10.1",
        "192.168.10.1"
      ],
      "correct": 2
    },
    {
      "id": "net-504",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You are troubleshooting a connection issue on a Windows PC and suspect it has failed to get an address from the DHCP server. Which command-line tool would you use to check the computer's current IP address, subnet mask, and default gateway?",
      "explanation": "ipconfig displays Windows interface IP addresses, masks and default gateways, making it the direct first check for lease failure or link-local fallback. ping tests reachability, tracert reports responding hops, and nslookup queries DNS. Those tools become useful after confirming the host has appropriate configuration. ipconfig /all adds DHCP enabled/server and lease details when the basic output is insufficient.",
      "options": [
        "ping",
        "ipconfig",
        "tracert",
        "nslookup"
      ],
      "correct": 1
    },
    {
      "id": "net-505",
      "chapter": "protocoale",
      "type": "single",
      "question": "At its normal T1 renewal time, before its lease expires, what does a DHCP client first try to do?",
      "explanation": "At T1, a client normally tries to renew its existing lease with the original DHCP server, typically by unicast DHCPREQUEST. It continues using its valid lease while renewal is pending. It does not immediately stop networking or choose an arbitrary replacement address. Broadcast rebinding occurs later if renewal fails, and final expiry requires stopping use of the leased address. T1 commonly defaults to halfway through the lease duration.",
      "options": [
        "The client stops all network communication immediately.",
        "The client tries to request a new lease for the same IP address.",
        "The client assigns itself a new random IP address.",
        "The client sends a broadcast to find a new DHCP server."
      ],
      "correct": 1
    },
    {
      "id": "net-506",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which Windows command-line tool is used to display the route a packet takes to reach a destination host and measure packet loss at each hop?",
      "explanation": "pathping first discovers responding hops and then gathers loss/latency statistics over repeated probes. nslookup queries DNS, netstat reports sockets and ipconfig shows local adapter settings. Intermediate routers may rate-limit or ignore diagnostic responses while forwarding ordinary traffic successfully, so apparent per-hop probe loss must be interpreted carefully. Loss continuing to later hops/destination is stronger evidence than one isolated nonresponsive router.",
      "options": [
        "pathping",
        "nslookup",
        "netstat",
        "ipconfig"
      ],
      "correct": 0
    },
    {
      "id": "net-507",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which layer of the OSI model is responsible for logical addressing (IP addresses) and determining the best path for data to travel across networks?",
      "explanation": "The Network layer, Layer 3, handles IP logical addressing and inter-network path selection/forwarding. Data Link uses local frames/MAC addresses, Transport supplies endpoint delivery mechanisms, and Application supplies user-facing network protocols. These functions cooperate but answer different questions: routing to a remote IP network is not simply selecting an Ethernet destination port.",
      "options": [
        "Layer 2 (Data Link)",
        "Layer 3 (Network)",
        "Layer 4 (Transport)",
        "Layer 7 (Application)"
      ],
      "correct": 1
    },
    {
      "id": "net-508",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Move the OSI layer from the list on the left to match its primary device or address type on the right.\n\n : Switch\n : Router\n : Hub",
      "explanation": "A conventional Layer 2 switch learns source MAC addresses and forwards Ethernet frames toward known destination ports, fitting Data Link. A router examines IP destination prefixes and uses routes to connect separate networks, fitting Network. A hub merely repeats incoming signals to other ports without interpreting frame destinations, fitting Physical. Transport is unused because TCP/UDP process delivery is not the defining forwarding operation of any of those basic devices. Multilayer switches add routing, and combined home gateways contain several functions, but that does not change the role-based classification. A hub shares one collision medium, while switching separates links; this difference follows from signal repetition versus frame-aware forwarding.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Physical (Layer 1)"
        },
        {
          "id": "i2",
          "text": "Data Link (Layer 2)"
        },
        {
          "id": "i3",
          "text": "Network (Layer 3)"
        },
        {
          "id": "i4",
          "text": "Transport (Layer 4)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Switch",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Router",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Hub",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-509",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each statement about the OSI model layers, select True or False.",
      "explanation": "MAC at Network is No: MAC addressing belongs to Data Link/Layer 2. TCP at Transport/Layer 4 is Yes. Physical defining cabling and electrical signaling is Yes. A MAC's common nickname “physical address” does not relocate its frame-addressing function into Layer 1. The statements distinguish representation on a medium from interpreting local frames and providing end-to-end transport.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A MAC address is used at the Network layer (Layer 3).",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "TCP (Transmission Control Protocol) operates at the Transport layer (Layer 4).",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "The Physical layer (Layer 1) defines standards for cabling and electrical signals.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-510",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "Complete the statements by selecting the correct OSI layer from each drop-down list.\n\nThe layer that formats data for the screen and handles encryption is the [\n[1]\n] layer.\nThe layer that provides services directly to the end-user's software is the [\n[2]\n] layer.",
      "explanation": "Choose Presentation/Layer 6 for data representation and the traditional encryption function, then Application/Layer 7 for network services used by end-user software. Transport handles delivery and Network handles IP forwarding, so they do not match these descriptions. “Formatting for the screen” is loose shorthand for representation, not a claim that OSI defines a graphical user interface. Real encryption can also occur at other layers.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Presentation (Layer 6)"
        },
        {
          "id": "i2",
          "text": "Application (Layer 7)"
        },
        {
          "id": "i3",
          "text": "Transport (Layer 4)"
        },
        {
          "id": "i4",
          "text": "Network (Layer 3)"
        },
        {
          "id": "i5",
          "text": "Presentation (Layer 6)"
        },
        {
          "id": "i6",
          "text": "Transport (Layer 4)"
        },
        {
          "id": "i7",
          "text": "Network (Layer 3)"
        },
        {
          "id": "i8",
          "text": "Application (Layer 7)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "net-511",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Which two statements accurately describe key attributes of modern wired local area networks (LANs) typically utilizing Ethernet standards? (Choose two)",
      "explanation": "Modern Ethernet commonly uses twisted-pair copper or fiber, and compatible ports often auto-negotiate speed/duplex. Ethernet does not rely solely on token passing. MAC and IP are different addresses: an interface may have a manufacturer-assigned MAC, while its IP configuration is assigned separately. Auto-negotiation is limited to the capabilities and settings of the connected physical interfaces, not a promise to select any requested speed.",
      "options": [
        "Network devices rely solely on Token Passing to manage access control.",
        "Network Interface Cards (NICs) have their physical address (MAC) programmed with an IP address by the manufacturer.",
        "It commonly operates over physical media such as twisted pair or fiber optic cabling.",
        "The connection speed is often subject to an auto-negotiation process between devices."
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "net-512",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which specific type of network appliance is designed to link devices within a local network segment, offers the highest efficiency for data transfer, and includes features for **remote configuration** and management?",
      "explanation": "A managed switch provides the required remote administration together with selective switched LAN forwarding. An unmanaged switch can have equally capable basic forwarding but lacks the requested configuration/monitoring features. A hub repeats signals and shares collision bandwidth, while a router's primary function is inter-network forwarding. Management does not inherently make a switch faster or require Layer 3 capability; it is the remote-management requirement that separates the two switch choices.",
      "options": [
        "Network Repeater (Hub)",
        "Network Layer 3 Device (Router)",
        "Basic Layer 2 Device (Unmanaged switch)",
        "Advanced Layer 2/3 Device (Managed switch)"
      ],
      "correct": 3
    },
    {
      "id": "net-513",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match the following Virtual Private Network (VPN) types or protocols to their correct operational descriptions.\n\n : Designed to enable individual remote users to access a private network over the internet.\n : Used to establish a secure encrypted link between two distinct private networks, such as branch offices.\n : A tunneling protocol that, when used alone, typically creates a basic, unencrypted path between network endpoints.",
      "explanation": "Remote-access VPN serves one user's endpoint connecting to an organization gateway over public infrastructure, using suitable TLS/IPsec protection and user/device authentication. Site-to-site VPN connects gateways for two networks, so traffic from authorized hosts behind each gateway can traverse the protected link. Bare L2TP transports Layer 2/PPP traffic but does not encrypt it, explaining the unencrypted-tunnel description. L2TP/IPsec adds encryption and authentication rather than inheriting those properties from L2TP alone. These categories mix connection roles with a tunneling mechanism, so they are not exclusive protocol families: IPsec can support remote access or site-to-site use. Nor must site-to-site mean permanently active; policy can establish it on demand.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Remote Access VPN (SSL/TLS or IPsec)"
        },
        {
          "id": "i2",
          "text": "Site-to-Site VPN"
        },
        {
          "id": "i3",
          "text": "Layer 2 Tunneling Protocol (L2TP)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Designed to enable individual remote users to access a private network over the internet.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Used to establish a secure encrypted link between two distinct private networks, such as branch offices.",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "A tunneling protocol that, when used alone, typically creates a basic, unencrypted path between network endpoints.",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-514",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "A new permanent network link must be established between two sites separated by a distance of approximately ten kilometers (six miles). Considering this requirement for extended distance, which type of physical media is the most appropriate choice?",
      "explanation": "Approximately ten kilometers calls for single-mode fiber with compatible long-reach optics and an adequate loss budget. Ordinary Cat5e/Cat6 Ethernet channels are about 100 meters, and typical multimode optics do not support this reach. The cable alone does not guarantee distance: transceiver wavelength, receiver sensitivity, connector/splice losses and installation quality must all fit. Single-mode is the suitable listed medium, not a substitute for checking those specifications.",
      "options": [
        "Multi-mode",
        "Single-mode",
        "Cat5e",
        "Cat6"
      ],
      "correct": 1
    },
    {
      "id": "net-515",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary function of a Virtual Private Network (VPN) technology, as utilized for remote access?",
      "explanation": "A remote-access VPN establishes a protected private communication path over an untrusted/shared public transport. It is not restricted to selected endpoint-only security features or to one internal LAN. IPsec is one implementation family, not the only possible VPN security protocol; TLS-based VPNs also exist. Confidentiality depends on the chosen VPN and encryption configuration, so “VPN” should not be used as a blanket promise about every provider virtual network service.",
      "options": [
        "Offers enhanced security features exclusively for designated endpoint computing devices.",
        "Guarantees cryptographic protection using only the Internet Protocol Security (IPSec) protocol.",
        "Establishes a confidential communication pathway across an unsecure, public networking infrastructure.",
        "Secures data exchange between components located strictly within a single, dedicated private network."
      ],
      "correct": 2
    },
    {
      "id": "net-516",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "A company is planning to shift several of its current servers to virtual machines hosted in a public cloud environment. Which two administrative duties, typically associated with owning and managing physical infrastructure, will be delegated to the cloud provider, thereby reducing the local IT team's workload? (Select two.)",
      "explanation": "The cloud provider assumes physical server repair/replacement and data-center physical/environmental security for hosted public-cloud VMs. The customer normally remains responsible for guest OS patches, application-data backups and file access permissions in an IaaS model. Those duties can shift with additional managed services, but they do not vanish merely because a server becomes a VM. The two selected duties concern the physical infrastructure layer specifically.",
      "options": [
        "Handling replacements and repairs for any physical server component failures.",
        "Supervising access rights for users to shared network files and folders.",
        "Maintaining the physical security and environmental controls of the server data center.",
        "Applying patches and managing updates for the server's core operating system software.",
        "Executing routine data backup procedures for application-specific information."
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "id": "net-517",
      "chapter": "protocoale",
      "type": "single",
      "question": "When reviewing wireless network security protocols, which of the following encryption types is widely recognized as the least secure and most vulnerable to hacking tools and unauthorized decryption?",
      "explanation": "WEP is the least secure listed option because its cryptographic design permits practical traffic-based key recovery. WPA-PSK and WPA2 are different protection generations/modes, and “WPA-AES” is an imprecise label rather than a reason to trust WEP. Stronger protocols can still be weakened by poor passphrases or settings, but WEP's structural weaknesses make it inappropriate for protecting a network today.",
      "options": [
        "WEP",
        "WPA2",
        "WPA-PSK",
        "WPA-AES"
      ],
      "correct": 0
    },
    {
      "id": "net-518",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "You are the network administrator for a small enterprise where all internal intranet access is functioning correctly, but no employees can reach external websites. Given that the network uses a single router for internet connectivity, which two initial steps are most critical for diagnosing this specific lack of external access? (Select two.)",
      "explanation": "Because internal intranet access works for everyone but external access fails, investigate the shared Internet boundary: check the router's WAN physical connection and the ISP's service status. Independent NIC failures are inconsistent with the common symptom, and functioning internal access already suggests usable internal addresses. DNS, routing and firewall tests may follow. Contacting the ISP should communicate observed evidence rather than prematurely asserting a confirmed provider outage.",
      "options": [
        "Verify that the internet-facing ports of the router have active, working physical connections.",
        "Inspect individual workstations for faults within their network interface cards (NICs).",
        "Confirm that every client computer has been assigned a valid internal IP address.",
        "Initiate contact with the external Internet Service Provider (ISP) to report a service outage."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "net-519",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "When preparing a computer to host a network game, you must identify which ports are currently active or being monitored for incoming connections before configuring the firewall. Which command-line utility displays the established connections and the specific TCP/UDP ports that the local machine is currently **listening** on?",
      "explanation": "netstat with suitable options displays active TCP connections and listening/bound endpoints; on Windows, -a includes listeners and -o can show process IDs. ping probes ICMP reachability, nslookup queries DNS and nbtstat concerns NetBIOS. UDP has bound endpoints rather than TCP-style listening connection state, but netstat can still show their ports. Use the game's documented ports and narrowly scoped firewall rules rather than exposing all observed services.",
      "options": [
        "ping",
        "nslookup",
        "nbtstat",
        "netstat"
      ],
      "correct": 3
    },
    {
      "id": "net-520",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each statement about a centrally administered, domain-based client-server network, select True or False.",
      "explanation": "Centralized administration is Yes in the specified domain-based client-server model. Every client being required to share resources is No: a client can simply consume services. A separate local user account on every computer is No because centralized domain identity can authenticate users across participating systems. A generic client-server application alone would not necessarily provide this administration, so the domain qualification matters. Users still require permissions for the computers and services they access.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A client-server network has centralized administration.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A client-server network requires each computer to share its resources.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A client-server network requires users to have a user account on every computer they need to use.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-521",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "Complete the sentences by selecting the correct option from each drop-down list.\n\n\n[1]\n is a vast computer network linking smaller computer networks worldwide.\n\n[2]\n is a network that allows secure collaboration between a company and a supplier or partner.\n\n[3]\n is a private network that is accessible only to a company's employees.",
      "explanation": "Blank 1 is Internet: the worldwide internetwork joining many independently operated networks. Blank 2 is Extranet: selected external suppliers or partners receive controlled access to specified organizational services, not automatic membership in the whole internal network. Blank 3 is Intranet: the private internal environment serving authorized employees. PAN is a personal-area network around an individual, such as Bluetooth peripherals, and does not describe global interconnection or partner authorization. Geography and audience are separate dimensions: an intranet can span countries, and an extranet can use Internet transport. A VPN may protect either remote-access path but is a connectivity/security mechanism, not the audience label requested in these blanks.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Intranet"
        },
        {
          "id": "i2",
          "text": "PAN"
        },
        {
          "id": "i3",
          "text": "Internet"
        },
        {
          "id": "i4",
          "text": "Extranet"
        },
        {
          "id": "i5",
          "text": "PAN"
        },
        {
          "id": "i6",
          "text": "Extranet"
        },
        {
          "id": "i7",
          "text": "Internet"
        },
        {
          "id": "i8",
          "text": "Intranet"
        },
        {
          "id": "i9",
          "text": "Intranet"
        },
        {
          "id": "i10",
          "text": "Internet"
        },
        {
          "id": "i11",
          "text": "Extranet"
        },
        {
          "id": "i12",
          "text": "PAN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i9",
          "optionIds": [
            "i9",
            "i10",
            "i11",
            "i12"
          ]
        }
      ]
    },
    {
      "id": "net-522",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each statement about hypervisors, select True or False.",
      "explanation": "Type I directly on hardware is Yes; Type II directly on hardware is No because it runs above a host OS; Type I called bare-metal is Yes. A Type I system can include a privileged management environment, but its hypervisor is still beneath the guest/management operating systems. Rebooting the underlying host affects its VMs regardless of whether the hypervisor is hosted or bare-metal.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A Type 1 hypervisor runs directly on system hardware.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A Type 2 hypervisor runs directly on system hardware.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A Type 1 hypervisor is also known as a bare-metal hypervisor.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-523",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which network element uses a tunneling protocol to encapsulate data for transmission?",
      "explanation": "A VPN commonly encapsulates private traffic inside a tunnel across another network. A VLAN tags/segments Layer 2 traffic, NAT rewrites addresses and the Internet is the transport internetwork itself. Those may coexist with tunnels but do not inherently mean a tunneling protocol. Encapsulation is not automatically encryption: secure VPN designs add appropriate authentication and confidentiality mechanisms.",
      "options": [
        "VLAN",
        "Internet",
        "VPN",
        "NAT"
      ],
      "correct": 2
    },
    {
      "id": "net-524",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "What is a VPN?",
      "explanation": "A secure private connection over a public network is the intended VPN definition. A VLAN within a LAN is a different logical segmentation mechanism, inter-VLAN communication normally requires routing rather than defining a VPN, and a personal network is a PAN concept. Not every service called a provider VPN encrypts data, but in the remote-access security context the protected public-network tunnel is the matching choice.",
      "options": [
        "A communication tunnel between VLANs",
        "A virtual network within your local area network (LAN)",
        "A personal network for your use only",
        "A secure private connection over a public network"
      ],
      "correct": 3
    },
    {
      "id": "net-525",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each statement about wide area networks (WANs), select True or False.",
      "explanation": "The Internet is a WAN is Yes. Every intranet must be a WAN is No: intranet describes private organizational access and can be local or span distant offices. All WAN devices needing to be in one city is No because WANs can cross cities, countries or continents. Geographic scope and authorization model are independent, so private does not mean local-only and intranet does not universally mean wide-area.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The internet is a WAN.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Every intranet must be a WAN, regardless of its geographic scope.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "All devices connected to a WAN must be located within the same city.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-526",
      "chapter": "infrastructura",
      "type": "single",
      "question": "What is a cause of concern about wireless network security?",
      "explanation": "Radio signals can extend outside controlled premises, letting nearby parties receive traffic or attempt access; that is the security concern. Wireless transmissions can be encrypted, so inability to encrypt is false. Frequency modulation and crosstalk concern signal behavior rather than directly identifying unauthorized radio access. Strong authentication, encryption and segmentation address the security risk; merely limiting physical entry to the office does not contain every radio signal.",
      "options": [
        "Frequency modulation issues",
        "The radio broadcast access method",
        "Inability to encrypt transmissions",
        "The potential for cross-talk"
      ],
      "correct": 1
    },
    {
      "id": "net-527",
      "chapter": "protocoale",
      "type": "single",
      "question": "On a wireless router, what is an SSID?",
      "explanation": "SSID means Service Set Identifier and names the wireless network users select. It is not the router administrator account, an encryption method or the default communication protocol. The name is commonly advertised in beacons but can be omitted from ordinary listings; hiding it is not strong security. Multiple APs can share an SSID, while the BSSID distinguishes a particular basic service set.",
      "options": [
        "The Service Set Identifier (wireless network name)",
        "A WAN encryption protocol",
        "The default communication protocol",
        "The default administrator account"
      ],
      "correct": 0
    },
    {
      "id": "net-528",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Move the appropriate protocols from the list on the left to the correct descriptions on the right. You may use each protocol once or not at all.\n : Connectionless, message-based protocol with best-effort service\n : Connection-oriented reliable transport\n : Resolves a local IPv4 address to a MAC address",
      "explanation": "UDP matches connectionless best-effort message transport; TCP matches connection-oriented reliable ordered transport; and ARP matches local IPv4-to-MAC resolution. TCP uses sequencing, acknowledgments and retransmission but can report failure if the network remains unavailable. ARP does not ordinarily perform reverse MAC-to-IP lookup. ICMP supplies IP control/error messages and IGMP handles IPv4 multicast membership, so those distractors do not match the three requested roles.",
      "dragItems": [
        {
          "id": "i1",
          "text": "TCP"
        },
        {
          "id": "i2",
          "text": "ICMP"
        },
        {
          "id": "i3",
          "text": "ARP"
        },
        {
          "id": "i4",
          "text": "UDP"
        },
        {
          "id": "i5",
          "text": "IGMP"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Connectionless best-effort transport",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Connection-oriented reliable transport",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Resolves a local IPv4 address to its MAC address",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-529",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which option represents an IPv6 loopback address?",
      "explanation": "::1 is IPv6 loopback. :: alone is the unspecified address, not loopback. FE80::127 is link-local unicast and FF00::127 is within multicast space; neither is the universal self-test address. The trailing number 127 does not import IPv4's 127/8 loopback meaning into IPv6. Address classification depends on the complete IPv6 prefix and special assignments.",
      "options": [
        "FF00::127",
        "::",
        "::1",
        "FE80::127"
      ],
      "correct": 2
    },
    {
      "id": "net-530",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "You ping a server by using the fully qualified domain name (FQDN) and do not receive a response. You then ping the same server by using its IP address and receive a response.\n\nWhy do you receive a response on the second attempt but not on the first attempt?",
      "explanation": "Successful numeric ping but failed FQDN-based ping suggests DNS/name-resolution trouble or an incorrect name. The working IP probe shows that basic reachability exists for that traffic. nslookup is an on-demand tool, not a service that must remain started. DHCP being offline does not immediately invalidate an existing lease, and ping need not be improperly configured. Verify the actual resolved address and DNS server before deciding exactly which DNS component failed.",
      "options": [
        "The DNS is not resolving.",
        "NSLOOKUP is stopped.",
        "PING is improperly configured.",
        "The DHCP server is offline."
      ],
      "correct": 0
    },
    {
      "id": "net-531",
      "chapter": "protocoale",
      "type": "multiple",
      "question": "Identify two accurate descriptions of Virtual Local Area Networks (VLANs) from the list below. (Choose 2.)",
      "explanation": "Same-VLAN devices behave as members of one logical Layer 2 network when switching/trunking actually extends that VLAN, and VLANs partition traffic into separate broadcast domains. Those are the two intended statements. A switch can support multiple VLANs, and assigning IP addresses is not VLAN's primary function. Geographic separation is not automatically overcome: an appropriate Layer 2 transport and consistent configuration must connect the locations.",
      "options": [
        "Devices assigned to the same VLAN communicate as if they are on the same physical link, regardless of their actual geographic separation.",
        "A network switch is technically restricted to hosting only one unique VLAN configuration at a time.",
        "The primary function of a VLAN is to assign logical IP addresses to individual data packets.",
        "VLANs divide a physical network into multiple logical segments, effectively isolating broadcast domains and traffic."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "net-532",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which statement best describes the main function of a perimeter network (also known as a DMZ)?",
      "explanation": "A DMZ is an intermediate trust zone between untrusted external access and the trusted internal network. Public-facing services can reside there with controlled paths inward. It is not primarily hidden employee workspace, internal-department monitoring or a vault for the most sensitive databases. A DMZ design still needs firewall rules and hardened services; creating a separate subnet alone does not guarantee isolation.",
      "options": [
        "To create a security buffer that serves as an intermediate zone between the trusted internal network and an untrusted external network.",
        "To provide a concealed environment specifically for hosting internal end-user workstations.",
        "To analyze and filter data traffic occurring exclusively between different departments within a private LAN.",
        "To serve as the primary secure vault for storing the organization's most critical and highly sensitive internal databases."
      ],
      "correct": 0
    },
    {
      "id": "net-533",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is a primary benefit of implementing Virtual Local Area Networks (VLANs)?",
      "explanation": "VLAN segmentation reduces the number of devices sharing each broadcast domain, limiting broadcast propagation and helping control congestion/security exposure. It generally increases the number of separate domains rather than reducing their count. VLANs do not create IP or MAC address capacity. Inter-VLAN traffic requires routing and policy, so separating groups can improve control without inherently increasing every application's throughput.",
      "options": [
        "To artificially expand the pool of available Media Access Control (MAC) addresses.",
        "To decrease the total count of separate broadcast domains within the infrastructure.",
        "To generate additional IP addresses for network assignment.",
        "To limit the number of devices participating in a single broadcast domain, thereby reducing congestion."
      ],
      "correct": 3
    },
    {
      "id": "net-534",
      "chapter": "concepte-retea",
      "type": "multiple",
      "question": "Identify two defining features of a mesh network architecture from the options provided. (Choose 2.)",
      "explanation": "A full mesh connects every node directly to every other node and offers redundant paths after a link failure. Those are the two intended features. Link count grows as n(n−1)/2, so it is neither low-cabling nor an automatically cheap/scalable choice for huge endpoint populations. Fault tolerance requires the control plane to use the alternate paths and does not guarantee delivery despite every possible shared device/power failure.",
      "options": [
        "It is widely considered the most scalable solution for networks containing a massive number of endpoints.",
        "In a full configuration, each distinct node maintains a direct physical link to every other node in the system.",
        "It is a budget-friendly option that utilizes significantly less cabling infrastructure than Star or Ring topologies.",
        "It can preserve communication after a link failure through redundant usable paths."
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "id": "net-535",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which network configuration is designed with multiple connections between nodes to ensure that data can still be transmitted via an alternate route if a specific link fails?",
      "explanation": "Mesh supplies multiple interconnections and alternative paths, making it the matching topology. A simple star depends on its center, a bus on its backbone and a single ring on its loop. Engineered redundant variants exist, but the basic alternatives do not inherently supply the stated mesh of paths. A routing/bridging mechanism must still select or reconverge onto a usable alternate after failure.",
      "options": [
        "Star",
        "Bus",
        "Mesh",
        "Ring"
      ],
      "correct": 2
    },
    {
      "id": "net-536",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which specific interface configuration is required to carry traffic for multiple VLANs across a single physical link between two network switches?",
      "explanation": "A trunk carries multiple VLANs over one switch-to-switch link, typically through 802.1Q tags. The generic LAN/WAN/virtual labels do not specify VLAN multiplexing. An access port ordinarily carries one data VLAN for an endpoint. Trunks require compatible VLAN and tagging/native-VLAN configuration at both ends; simply cabling two switches does not ensure every VLAN is carried correctly.",
      "options": [
        "WAN port",
        "Virtual port",
        "LAN port",
        "Trunk port"
      ],
      "correct": 3
    },
    {
      "id": "net-537",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Assign each of the provided IP addresses to its corresponding IPv4 Class range.\n : Class A\n : Class B\n : Class C\n : Class D",
      "explanation": "Use historical first-octet boundaries: ordinary Class A is 1–126, B 128–191, C 192–223 and D 224–239. Therefore 64.123.12.1 belongs to A, 133.234.23.2 to B, 201.111.22.3 to C and 224.100.20.3 to D. A/B/C originally implied /8, /16 and /24 defaults, respectively. D instead denotes multicast destinations for receiver groups, not a normal host subnet with another default mask. No later octet changes the class. Current CIDR routing and subnetting require the actual configured prefix, so this historical classification should not be used to guess a modern interface's mask or number of available hosts.",
      "dragItems": [
        {
          "id": "i1",
          "text": "133.234.23.2"
        },
        {
          "id": "i2",
          "text": "224.100.20.3"
        },
        {
          "id": "i3",
          "text": "201.111.22.3"
        },
        {
          "id": "i4",
          "text": "64.123.12.1"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class A",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Class B",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Class C",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Class D",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "net-538",
      "chapter": "infrastructura",
      "type": "single",
      "question": "A network link using a 550-meter fiber optic cable is suspected of experiencing significant signal attenuation. Which specialized instrument should be used to precisely measure the length and locate the fault in this fiber segment?",
      "explanation": "An OTDR tests optical fiber using pulses and backscatter/reflections, estimating distance and locating high-loss events or breaks. The electrical TDR is for copper, a multimeter measures electrical properties and a toner traces conductors. The 550-meter length alone does not prove the fiber exceeds its supported reach; fiber type and optics matter. The instrument choice follows the optical medium and the requirement to locate the loss event.",
      "options": [
        "Multimeter",
        "Toner",
        "Optical time-domain reflectometer (OTDR)",
        "Time-domain reflectometer (TDR)"
      ],
      "correct": 2
    },
    {
      "id": "net-539",
      "chapter": "depanare-unelte",
      "type": "multiple",
      "question": "A workstation connected to the network via a standard copper cable is experiencing severely degraded data transmission performance. Given that the issue is likely physical layer damage, select two corrective actions to diagnose the cause. (Choose 2.)",
      "explanation": "Measure the link's negotiated capability/actual rate and test copper continuity/pinout with an appropriate tester. These checks can expose pair damage or bad termination causing reduced performance. An OTDR is for fiber, not copper. A toner locates the cable but does not qualify its data performance. Throughput also depends on endpoints/load, so a cable qualification test is stronger evidence of channel capability than an application speed test alone.",
      "options": [
        "Employ specialized equipment to measure the actual throughput and negotiated link speed of the cable run.",
        "Use an Optical Time-Domain Reflectometer (OTDR) to analyze signal loss along the copper line.",
        "Utilize a tone generator and probe to physically locate and identify the correct cable within a bundled group.",
        "Inspect the copper cable using a specialized tester to verify wire continuity and correct pinout termination."
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "id": "net-540",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "When working on a Windows system, which command-line utility is specifically designed to query DNS servers and verify the translation of hostnames into IP addresses?",
      "explanation": "nslookup queries DNS servers and shows their answers for names, including A/AAAA address records. nbtstat examines legacy NetBIOS state, netstat displays sockets/statistics and ipconfig displays local interface configuration. Those commands can assist a broader investigation but do not directly query the DNS records in the requested way. Check which server is queried because different resolvers can return different split-horizon or cached answers.",
      "options": [
        "nbtstat",
        "nslookup",
        "netstat",
        "ipconfig"
      ],
      "correct": 1
    },
    {
      "id": "net-541",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which type of network is strictly private to an organization and is typically used for internal communication and resource sharing among employees only?",
      "explanation": "An intranet is the private organizational environment for internal communication and resource sharing. An extranet grants selected external parties access, the Internet is global/public and a public switched network is a provider connectivity concept rather than the employee-only service environment. Internal users can reach an intranet remotely through controlled VPN access; “private” describes authorization, not necessarily one building.",
      "options": [
        "The Extranet",
        "The Intranet",
        "The Internet",
        "A Public Switched Network"
      ],
      "correct": 1
    },
    {
      "id": "net-542",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In a network environment, which transmission method sends a single packet of data from one source specifically to all other connected nodes in the same network segment?",
      "explanation": "Broadcast delivers to all eligible nodes in the local broadcast domain, matching the all-other-nodes requirement. Unicast targets one interface, multicast a selected group and anycast one member of a shared-address set. Routers normally bound Ethernet/IPv4 broadcast propagation. “All” is scoped to the segment/VLAN, not every host across the entire Internet or every VLAN on the same physical switch.",
      "options": [
        "Unicast",
        "Multicast",
        "Anycast",
        "Broadcast"
      ],
      "correct": 3
    },
    {
      "id": "net-543",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which software component is directly responsible for creating, running, and managing virtual machines (VMs) on a physical host server?",
      "explanation": "The hypervisor creates, runs and mediates VMs' access to host resources. A virtual switch handles virtual network forwarding, a guest OS runs inside a VM and BIOS/firmware initializes the physical system. Those components participate in virtualization but do not replace the VM execution/control layer. Type I and Type II describe whether that hypervisor runs directly on hardware or above a host OS.",
      "options": [
        "The Hypervisor",
        "The Virtual Switch",
        "The Guest Operating System",
        "The BIOS"
      ],
      "correct": 0
    },
    {
      "id": "net-544",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Is the following statement True or False? A Virtual Private Network (VPN) creates a secure, encrypted tunnel over a public network to allow remote users to access the corporate network safely.",
      "explanation": "True describes the common secure remote-access VPN: an authenticated encrypted tunnel carries remote-user traffic across public infrastructure. False would deny that valid use. The wording should not be generalized to every technology called VPN, since some provider VPN services provide isolation without payload encryption. Safe access still depends on endpoint security, authentication, policies and permitted routes rather than encryption alone.",
      "options": [
        "False",
        "True"
      ],
      "correct": 1
    },
    {
      "id": "net-545",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "In which network model does every connected computer have equal status, acting as both a server and a client without centralized administration?",
      "explanation": "Peer-to-peer gives computers comparable roles so a peer can both request and provide resources without a dedicated central administrative server. Client-server and domain/Active Directory models emphasize centralized services/identity. Equal architectural status does not mean all users have identical permissions or that every machine must share every file. The contrast is distribution of service/administrative roles, not absence of security settings.",
      "options": [
        "Client-Server",
        "Domain-based",
        "Peer-to-Peer (P2P)",
        "Active Directory"
      ],
      "correct": 2
    },
    {
      "id": "net-546",
      "chapter": "protocoale",
      "type": "single",
      "question": "In a virtualized environment, which specific component allows multiple virtual machines to communicate with each other and with the physical network, similar to a physical Layer 2 device?",
      "explanation": "A virtual switch forwards frames among VM vNICs and, when configured with an external uplink, the physical network. A vNIC is one endpoint interface rather than the multiport forwarding component. A virtual router performs Layer 3 forwarding, and a hypervisor console is a management interface. Internal/private switch configurations may intentionally omit physical-network access, so the vSwitch's configuration determines its exact reach.",
      "options": [
        "Virtual Network Interface Card (vNIC)",
        "Virtual Switch (vSwitch)",
        "Virtual Router",
        "Hypervisor Console"
      ],
      "correct": 1
    },
    {
      "id": "net-547",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "For each of the following statements regarding wireless networking characteristics and security, select Yes if the statement is true and No if the statement is false.",
      "explanation": "Bluetooth as typical long-range WAN is No: it is primarily short-range personal-area networking. WPA2 stronger than WEP is Yes with appropriate modern configuration. Concrete walls degrading Wi-Fi is Yes because they attenuate/reflect radio signals. These are general characteristics, not a universal distance limit or a promise that any WPA2 password/configuration is secure.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Bluetooth is typically used for long-range Wide Area Network (WAN) connections.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "WPA2 provides stronger encryption for wireless networks than WEP.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Wireless signals can be degraded by physical obstacles like concrete walls.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-548",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Using drag and drop, match each network topology description with its corresponding name.\n\nAll nodes connect to a central hub or switch: \nEvery node is connected to every other node: \nNodes are connected in a continuous closed loop: \nAll nodes share a single central communication line:",
      "explanation": "Star means each endpoint has a spoke to a central hub/switch; one spoke failure normally isolates one endpoint, while the central device is a dependency. Full mesh means every pair has a direct link, giving alternate paths at n(n−1)/2-link cost. Ring means each node connects to two neighbors to form a continuous loop; a simple unprotected break can disrupt that path. Bus means nodes share one backbone, historically requiring correct coax termination and sharing backbone-failure risk. These connection relationships, not page layout, determine the mappings. A drawing of four nodes in a square could be a ring or full mesh depending on whether diagonal links are actually present.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Mesh"
        },
        {
          "id": "i2",
          "text": "Star"
        },
        {
          "id": "i3",
          "text": "Bus"
        },
        {
          "id": "i4",
          "text": "Ring"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "All nodes connect to a central hub or switch:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Every node is connected to every other node:",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Nodes are connected in a continuous closed loop:",
          "correctItemId": "i4"
        },
        {
          "id": "z4",
          "label": "All nodes share a single central communication line:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-549",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "Your organization requires a secure method for employees to access internal file servers from public Wi-Fi locations.\n\nUse the dropdown menus to complete each statement.\n\nThe technology used to provide an encrypted path over the public internet is a ....... \n[1]\n\n\nTo specifically control the desktop of a remote server as if you were sitting in front of it, you would use ....... \n[2]",
      "explanation": "Blank 1 is VPN for a protected network path over public Wi-Fi/Internet. Blank 2 is Remote Desktop for controlling a server's interactive desktop. DNS resolves names and a proxy intermediates selected application traffic; neither automatically supplies these two functions. Remote Desktop and VPN can be combined: a user first obtains controlled private-network connectivity and then opens a desktop session to an authorized host.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Remote Desktop"
        },
        {
          "id": "i2",
          "text": "Proxy server"
        },
        {
          "id": "i3",
          "text": "DNS"
        },
        {
          "id": "i4",
          "text": "VPN"
        },
        {
          "id": "i5",
          "text": "Proxy server"
        },
        {
          "id": "i6",
          "text": "DNS"
        },
        {
          "id": "i7",
          "text": "Remote Desktop"
        },
        {
          "id": "i8",
          "text": "VPN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i4",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i7",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "net-550",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary purpose of implementing a Perimeter Network (DMZ) within a corporate infrastructure?",
      "explanation": "A perimeter network provides an isolated buffer for exposed services while restricting access toward the trusted internal LAN. It is not a speed-boosting feature, a means to bypass the firewall or primarily a DHCP assignment mechanism. Firewall policy and hardening still determine which traffic is allowed. Compromise of a public service should not imply unrestricted lateral access into the corporate network.",
      "options": [
        "To increase the speed of the internal local area network.",
        "To provide a buffer zone that hosts public-facing services while protecting the internal network.",
        "To allow all external traffic to bypass the corporate firewall for better performance.",
        "To strictly manage the assignment of internal IP addresses via DHCP."
      ],
      "correct": 1
    },
    {
      "id": "net-551",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which Wide Area Network (WAN) technology utilizes high-frequency signals transmitted over existing copper telephone lines while allowing simultaneous voice and data usage?",
      "explanation": "DSL separates higher-frequency data signaling from ordinary voice on compatible telephone copper, permitting simultaneous service with suitable filtering. Cable broadband uses cable infrastructure, satellite uses radio to space-based systems and cellular 5G uses mobile radio access. Not every modern DSL product includes analog voice, but the described shared telephone-line broadband arrangement is the classic DSL scenario.",
      "options": [
        "Cable Broadband",
        "Satellite Link",
        "Digital Subscriber Line (DSL)",
        "Cellular 5G"
      ],
      "correct": 2
    },
    {
      "id": "net-552",
      "chapter": "infrastructura",
      "type": "drag_drop",
      "question": "Using drag and drop, match each IEEE 802.11 wireless standard with its native operating frequency band.\n\n802.11a: \n802.11b: \n802.11g: \n802.11n:",
      "explanation": "802.11a operates in 5 GHz, while b and g operate in 2.4 GHz. The b/g common band permits backward-compatible mixed operation when the AP enables compatible modes, though their modulation/rates differ. 802.11n supports either 2.4 or 5 GHz and adds MIMO for improved capacity. The “both” answer describes what the standard permits, not a promise that every n device contains both radios or can use both simultaneously. Sharing a maximum rate does not ensure compatibility: a and g both reach nominal 54 Mbps but use different bands. Frequency is not throughput, and matching bands still leaves credentials, supported channels and security settings to be checked.",
      "dragItems": [
        {
          "id": "i1",
          "text": "2.4 GHz only"
        },
        {
          "id": "i2",
          "text": "5 GHz only"
        },
        {
          "id": "i3",
          "text": "Both 2.4 GHz and 5 GHz"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "802.11a:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "802.11b:",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "802.11g:",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "802.11n:",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "net-553",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each of the following statements regarding Virtual LANs (VLANs) and network segmentation, select Yes if the statement is true and No if the statement is false.",
      "explanation": "Function-based grouping independent of physical port location is Yes. Increasing one switch-wide broadcast domain is No: VLANs divide it into separate domains. Inter-VLAN communication needing a Layer 3 function is Yes. That function can be a router, multilayer switch or equivalent routed virtual appliance. VLAN isolation does not replace firewall policy when controlled communication is allowed between groups.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A VLAN can group users together based on their function rather than their physical location.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "VLANs increase the size of a single broadcast domain across the entire switch.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Communication between different VLANs requires a Layer 3 routing device.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-554",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "You are configuring a new wireless router for a small office and need to ensure maximum security.\n\nUse the dropdown menus to complete each statement.\n\nThe most secure encryption standard currently available for modern Wi-Fi networks is ....... \n[1]\n\n\nTo authenticate individual users via a central server instead of a shared password, you should implement ....... \n[2]",
      "explanation": "Choose WPA3 as the strongest listed Wi-Fi security generation, then WPA3-Enterprise using 802.1X/RADIUS for centralized per-user authentication. WPA3-Personal uses SAE rather than a central enterprise identity service. WEP and original WPA are obsolete/weaker, while WPA2 remains a different generation. “Encryption standard” is shorthand for a security suite; correct EAP method, certificates, credentials and client support still matter.",
      "dragItems": [
        {
          "id": "i1",
          "text": "WEP"
        },
        {
          "id": "i2",
          "text": "WPA"
        },
        {
          "id": "i3",
          "text": "WPA3"
        },
        {
          "id": "i4",
          "text": "WPA2"
        },
        {
          "id": "i5",
          "text": "Open authentication"
        },
        {
          "id": "i6",
          "text": "WPA3-Enterprise (802.1X/RADIUS)"
        },
        {
          "id": "i7",
          "text": "WPA3-Personal (SAE)"
        },
        {
          "id": "i8",
          "text": "WEP shared key"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "net-555",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which type of network device is primarily designed to connect everyday \"Internet of Things\" (IoT) appliances to a local network, often using low-power protocols?",
      "explanation": "An IoT gateway aggregates/connects IoT devices and can bridge low-power protocols to an IP/local-network environment. A core switch or enterprise router serves broader infrastructure forwarding, and a patch panel is passive termination rather than protocol mediation. Some IoT devices connect directly through Wi-Fi/Ethernet without a special gateway, but the low-power-protocol adaptation role points specifically to the IoT gateway.",
      "options": [
        "Core Switch",
        "IoT Gateway",
        "Enterprise Router",
        "Patch Panel"
      ],
      "correct": 1
    },
    {
      "id": "net-556",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which term refers to the actual path that data signals take as they travel across the network media, regardless of how the cables are physically laid out?",
      "explanation": "Logical topology describes how data flows and peers communicate, independently of the visible cabling arrangement. Physical topology describes that actual wiring/layout. Infrastructure mode is a wireless operating mode and mesh is one topology category, not the general term for this distinction. A hub-based physical star can behave logically like one shared medium, demonstrating why physical and logical descriptions need not be identical.",
      "options": [
        "Physical Topology",
        "Logical Topology",
        "Infrastructure Mode",
        "Mesh Connectivity"
      ],
      "correct": 1
    },
    {
      "id": "net-557",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each of the following statements regarding Cloud Computing models, select Yes if the statement is true and No if the statement is false.",
      "explanation": "Public cloud operated by a provider with shared infrastructure is Yes. A private cloud automatically guaranteeing highest security is No because configuration, operations and threat model matter. IaaS supplying only finished applications is No; it offers compute, storage and network infrastructure, while SaaS supplies finished applications. Shared infrastructure need not mean customers can access one another's data; isolation controls are a separate requirement.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A public cloud is owned and operated by a third-party provider and shares infrastructure among customers.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "A private cloud automatically guarantees the highest security regardless of configuration or administration.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "IaaS supplies only finished end-user applications and no infrastructure resources.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-558",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "You are designing a high-redundancy network for a critical data center.\n\nUse the dropdown menus to complete each statement.\n\nThe topology where every node is connected to every other node, providing the most fault tolerance, is a ....... \n[1]\n\n\nIf you only connect some nodes to others to save on costs while maintaining some redundancy, you are using a ....... \n[2]",
      "explanation": "Blank 1 is Full mesh, where every pair of nodes has a direct link. Blank 2 is Partial mesh, retaining selected redundant links while reducing ports/cabling. Star and unidirectional ring do not match the pairwise mesh definitions. Full mesh can improve path resilience but has n(n−1)/2 links and is not an unconditional guarantee against shared power, control-plane or node failures.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Star"
        },
        {
          "id": "i2",
          "text": "Unidirectional ring"
        },
        {
          "id": "i3",
          "text": "Full mesh"
        },
        {
          "id": "i4",
          "text": "Partial mesh"
        },
        {
          "id": "i5",
          "text": "Unidirectional ring"
        },
        {
          "id": "i6",
          "text": "Partial mesh"
        },
        {
          "id": "i7",
          "text": "Full mesh"
        },
        {
          "id": "i8",
          "text": "Star"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i6",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "net-559",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which data transmission type is used when a streaming server sends a single video feed to a specific group of interested subscribers rather than the entire network?",
      "explanation": "Multicast delivers one source stream to a selected receiver group, with replication where supported by the network. Unicast would use individual destination flows, broadcast targets the whole broadcast domain and anycast delivers to one selected instance. Actual multicast forwarding needs compatible group membership and network configuration; a group-addressed stream is not automatically distributed to every Internet subscriber without such support.",
      "options": [
        "Unicast",
        "Anycast",
        "Broadcast",
        "Multicast"
      ],
      "correct": 3
    },
    {
      "id": "net-560",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which type of network allows authorized external users, such as vendors or business partners, to access specific parts of an organization's internal network without granting them full access?",
      "explanation": "Extranet is the partner/vendor access model with authorization limited to selected resources. An intranet is internal, and LAN describes local scope rather than external permissions. A VPN can provide the protected transport used to access an extranet but is not itself the audience/access-model name. The question emphasizes authorized outside collaboration rather than the tunneling mechanism.",
      "options": [
        "The Intranet",
        "A Virtual Private Network (VPN)",
        "The Extranet",
        "A Local Area Network (LAN)"
      ],
      "correct": 2
    },
    {
      "id": "net-561",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "You are setting up wireless connections for different scenarios. Use the dropdown menus to identify the wireless network mode described.\n\nTwo laptops connecting directly to each other to transfer a file without using a router is known as ....... \n[1]\n\n\nConnecting your smartphone to a coffee shop's Wi-Fi router to access the internet is known as ....... \n[2]",
      "explanation": "Direct laptop-to-laptop Wi-Fi without an AP maps to Ad hoc mode. Connecting a smartphone through the coffee shop's Wi-Fi AP/router maps to Infrastructure mode. Monitor mode passively observes frames and is not the normal user connectivity mode. “Without a router” alone would be insufficient to define ad hoc, but the additional direct-peer description establishes the intended arrangement.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Infrastructure mode"
        },
        {
          "id": "i2",
          "text": "Monitor mode"
        },
        {
          "id": "i3",
          "text": "Ad hoc mode"
        },
        {
          "id": "i4",
          "text": "Monitor mode"
        },
        {
          "id": "i5",
          "text": "Infrastructure mode"
        },
        {
          "id": "i6",
          "text": "Ad hoc mode"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i3",
          "optionIds": [
            "i1",
            "i2",
            "i3"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i4",
            "i5",
            "i6"
          ]
        }
      ]
    },
    {
      "id": "net-562",
      "chapter": "protocoale",
      "type": "dropdown",
      "question": "For each of the following statements regarding Internet of Things (IoT) devices, select Yes if the statement is true and No if the statement is false.",
      "explanation": "IoT devices often needing IP addressing is Yes, with some non-IP sensors instead relying on gateways. Being strictly high-performance servers is No; small embedded sensors/actuators are common. Weak default passwords causing security concern is Yes. Device management, firmware updates and segmentation matter because a compromised small appliance can still expose the surrounding network.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "IoT devices, such as smart thermostats, often require IP addresses to communicate over a network.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "IoT devices are strictly defined as high-performance servers used for data processing.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Security is a major concern for IoT devices because many have weak default passwords.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-563",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Using drag and drop, match the virtualization concept with its correct description.\n\nType 1 Hypervisor: \nType 2 Hypervisor: \nVirtual Machine (VM):",
      "explanation": "A Type I hypervisor runs beneath guest operating systems directly on hardware, managing CPU, memory and device access; ESXi and Hyper-V illustrate that architecture. Hyper-V's management partition does not make its hypervisor an ordinary application above Windows. Type II runs as a program on an existing host OS, as with VMware Workstation, and relies on that OS's services/drivers. A VM is the resulting software-defined computer with virtual hardware and its own guest OS, not the layer scheduling all guests. Rebooting one guest normally leaves siblings running, whereas rebooting the common host disrupts its VMs. Thus hypervisor type describes the execution/control arrangement, while VM identifies the workload environment it provides.",
      "dragItems": [
        {
          "id": "i1",
          "text": "A software-based computer that runs an operating system."
        },
        {
          "id": "i2",
          "text": "Installs as an application on top of an existing host OS (e.g., VMware Workstation)."
        },
        {
          "id": "i3",
          "text": "Installs directly on the bare-metal hardware (e.g., Microsoft Hyper-V, ESXi)."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Type 1 Hypervisor:",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Type 2 Hypervisor:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Virtual Machine (VM):",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-564",
      "chapter": "echipamente",
      "type": "single",
      "question": "Where is the most secure location to place a public-facing web server so that it is accessible from the internet but isolated from the sensitive internal corporate network?",
      "explanation": "A DMZ provides the appropriate isolated zone for an Internet-facing web server, with firewall rules permitting web access while limiting paths to sensitive internal systems. A trusted internal or management VLAN should not be exposed as the public service zone. Direct core attachment without filtering provides no equivalent boundary. “Most secure” still depends on correct implementation; the DMZ does not replace server patching, access control or monitoring.",
      "options": [
        "Inside the Secure Internal VLAN",
        "In the Demilitarized Zone (DMZ)",
        "On the Administrative Management Network",
        "Connected directly to the Core Switch without a firewall"
      ],
      "correct": 1
    },
    {
      "id": "net-565",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which Wide Area Network (WAN) connection type is typically used in rural or remote locations where no other cabling infrastructure exists, but often suffers from high latency due to signal travel distance?",
      "explanation": "Satellite Internet reaches locations without a terrestrial broadband cable path. Traditional geostationary systems have substantial propagation delay because signals travel to distant satellites and back. FTTH, cable and DSL need the corresponding local wired plant. Modern low-Earth-orbit satellite systems reduce latency, so high delay is not identical for every satellite service; the distance-related clue still identifies the satellite option.",
      "options": [
        "Fiber to the Home (FTTH)",
        "Cable Broadband",
        "Satellite Internet",
        "Digital Subscriber Line (DSL)"
      ],
      "correct": 2
    },
    {
      "id": "net-566",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Using drag and drop, match the wireless security standard with its description.\n\nWEP: \nWPA2: \nWPA3:",
      "explanation": "WEP uses legacy RC4-based protection with weak IV/key design, allowing practical attacks; its static/shared-key description identifies an obsolete insecure choice. WPA2 standardized robust protection including AES-CCMP, distinguishing it from original WPA/TKIP and making it a widely supported secure alternative when correctly configured. WPA3 adds newer protections, with SAE replacing conventional pre-shared-key authentication in Personal mode and improving resistance to passive offline password guessing. Enterprise authentication uses different EAP/802.1X workflows, so SAE should not be attributed to every WPA3 deployment. The phrases “newest” and “widely supported” are contextual, not permanent measurements. Cipher generation does not remove credential, certificate-validation or firmware responsibilities, and WEP should not be retained merely for compatibility.",
      "dragItems": [
        {
          "id": "i1",
          "text": "The newest and most secure standard, introducing Simultaneous Authentication of Equals (SAE)."
        },
        {
          "id": "i2",
          "text": "An obsolete and highly vulnerable protocol that uses a static encryption key."
        },
        {
          "id": "i3",
          "text": "A standard that introduced AES encryption and is currently the most widely supported secure protocol."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "WEP:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "WPA2:",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "WPA3:",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-567",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "You are identifying different types of networks based on their geographical scope. Use the dropdown menus to complete each statement.\n\nA Bluetooth connection between a smartphone and a wireless headset is an example of a ....... \n[1]\n\n\nA network that connects multiple office buildings across different cities or countries is known as a ....... \n[2]",
      "explanation": "Bluetooth between a phone and headset is a PAN, a personal-area connection around one person. Connections across cities or countries form a WAN. LAN covers local scope, and MAN is metropolitan rather than broadly intercity/international. Internet, intranet and extranet describe global connectivity or access models, not the best physical-scope labels for the two examples.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Intranet"
        },
        {
          "id": "i2",
          "text": "PAN"
        },
        {
          "id": "i3",
          "text": "Internet"
        },
        {
          "id": "i4",
          "text": "Extranet"
        },
        {
          "id": "i5",
          "text": "WAN"
        },
        {
          "id": "i6",
          "text": "PAN"
        },
        {
          "id": "i7",
          "text": "LAN"
        },
        {
          "id": "i8",
          "text": "MAN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "net-568",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which cellular network generation represented a major shift towards an all-IP network architecture, offering significantly higher data speeds and support for high-definition video streaming (often marketed as LTE)?",
      "explanation": "4G, commonly marketed through LTE services, represents the shift toward all-IP mobile networking and higher broadband data rates in this comparison. 1G was analog voice; 2G introduced digital cellular and 3G improved mobile data but is not the listed LTE generation. Marketing and early LTE standards terminology vary, but 4G is the clear intended generation among these choices.",
      "options": [
        "2G",
        "3G",
        "4G",
        "1G"
      ],
      "correct": 2
    },
    {
      "id": "net-569",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Using drag and drop, match the Bluetooth Power Class with its typical maximum effective range.\n\nClass 1: \nClass 2: \nClass 3:",
      "explanation": "The conventional estimates are Class 1 about 100 meters, Class 2 about 10 meters and Class 3 about 1 meter. They reflect progressively lower maximum transmitter-power classes—traditionally about 100 mW, 2.5 mW and 1 mW—not fixed guaranteed distances. Class 1 therefore fits the longest listed reach, while Class 3 fits close-range use. Both endpoints' power and receiver sensitivity matter; a powerful transmitter cannot make the weaker return path disappear. Antennas, obstacles, interference and Bluetooth PHY/version also affect actual range. Do not confuse these radio power classes with Bluetooth device profiles or network scope categories: the exercise asks for familiar approximate reach associated with each power class.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Approximately 1 meter (Short range)"
        },
        {
          "id": "i2",
          "text": "Approximately 100 meters (Long range)"
        },
        {
          "id": "i3",
          "text": "Approximately 10 meters (Standard mobile range)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Class 1:",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Class 2:",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Class 3:",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-570",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "For each of the following statements regarding wireless signal interference, select Yes if the statement is true and No if the statement is false.",
      "explanation": "2.4 GHz generally being crowded is Yes, metal obstacles reflecting/blocking Wi-Fi is Yes, and more same-channel APs always improving speed is No. Co-channel devices share airtime and can increase contention, so AP quantity without channel/power planning can harm performance. Band crowding depends on the actual environment; 5 GHz can also be congested and has its own propagation/channel restrictions.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The 2.4 GHz frequency band is generally more crowded and prone to interference than the 5 GHz band.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "Physical obstacles made of metal (like filing cabinets) can reflect or block Wi-Fi signals.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "Adding more Access Points on the exact same channel in a small area will always improve network speed.",
          "correctItemId": "no"
        }
      ]
    },
    {
      "id": "net-571",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "Identify the network topology characteristics using the dropdown menus.\n\nA topology where a central device failure disrupts the entire network is a ....... \n[1]\n\n\nA topology where data travels in one direction and a break in the cable affects all nodes is a ....... \n[2]",
      "explanation": "A simple star depends on its sole central device, so blank 1 is Star. A basic single unidirectional loop whose break disrupts the path is Unidirectional ring for blank 2. Full and partial meshes provide alternate paths rather than those central/serial dependencies. Protected dual rings and redundant stars can behave differently, but the question describes the elementary unprotected designs.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Unidirectional ring"
        },
        {
          "id": "i2",
          "text": "Star"
        },
        {
          "id": "i3",
          "text": "Full mesh"
        },
        {
          "id": "i4",
          "text": "Partial mesh"
        },
        {
          "id": "i5",
          "text": "Unidirectional ring"
        },
        {
          "id": "i6",
          "text": "Full mesh"
        },
        {
          "id": "i7",
          "text": "Partial mesh"
        },
        {
          "id": "i8",
          "text": "Star"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "net-572",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which listed residential broadband technology traditionally uses the neighborhood cable-TV coaxial access plant with shared local capacity, so peak neighborhood use may reduce speeds?",
      "explanation": "Cable Internet uses a shared cable-operator access segment, so neighborhood demand can affect available speeds. A dedicated leased line is a different contracted service model. DSL uses telephone copper, and FTTP uses optical fiber rather than the specified cable-TV coaxial plant. PON fiber and upstream DSL aggregation can also share capacity, so sharing alone is not exclusive to cable; the clarified physical-access clue distinguishes the answer.",
      "options": [
        "Cable Internet",
        "Dedicated Leased Line",
        "Digital Subscriber Line (DSL)",
        "Fiber to the Premises (FTTP)"
      ],
      "correct": 0
    },
    {
      "id": "net-573",
      "chapter": "concepte-retea",
      "type": "single",
      "question": "Which major advantage does a Client-Server network model offer over a Peer-to-Peer model, especially in organizations with more than 10 computers?",
      "explanation": "Centralized administration and security simplify consistent identity, permissions, backups and policy as an organization grows. Peer-to-peer arrangements distribute those tasks among machines. A dedicated client-server design does not inherently have the lowest initial cost or decentralized storage as its principal advantage. It may require server software/roles. More than ten computers is a practical teaching guideline, not a hard protocol boundary that forbids workgroups above that count.",
      "options": [
        "Lower initial hardware cost",
        "Decentralized data storage",
        "Centralized administration and security",
        "No requirement for a specialized operating system"
      ],
      "correct": 2
    },
    {
      "id": "net-574",
      "chapter": "concepte-retea",
      "type": "drag_drop",
      "question": "Using drag and drop, match the Cloud Service Model with the level of control it provides to the customer.\n\nSaaS (Software as a Service): \nIaaS (Infrastructure as a Service): \nPaaS (Platform as a Service):",
      "explanation": "SaaS delivers a finished application: the provider operates the application stack and infrastructure, while the customer still controls users, data and permitted settings. IaaS exposes virtual compute, storage and networking; the provider manages physical infrastructure, but the customer normally patches/configures guest operating systems and applications. PaaS supplies a managed runtime/platform so developers deploy application code without administering the underlying OS/hardware. That is why the developer-framework description fits PaaS rather than IaaS, and the finished-end-user-application description fits SaaS rather than PaaS. Among these models IaaS offers the most infrastructure-level customer control, not ownership of the provider's physical servers. Responsibility moves between layers; it never makes customer identity/data security irrelevant.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Provides a managed runtime/platform; the provider manages its OS and underlying hardware, while the customer deploys applications."
        },
        {
          "id": "i2",
          "text": "Provides the highest level of control, giving access to virtual hardware, storage, and networking."
        },
        {
          "id": "i3",
          "text": "Provides fully functional end-user applications; the user manages almost nothing."
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SaaS (Software as a Service):",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "IaaS (Infrastructure as a Service):",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "PaaS (Platform as a Service):",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-575",
      "chapter": "concepte-retea",
      "type": "dropdown",
      "question": "For each of the following statements regarding Remote Access methods, select Yes if the statement is true and No if the statement is false.",
      "explanation": "The first statement is No because Remote Desktop can also redirect clipboard, audio, printers, drives and other channels; it is not restricted to keystrokes/mouse and screen updates. VPN-only-for-individuals is No because site-to-site VPNs join office networks. Always-on VPN automatically connecting is Yes when client profiles and policy are configured appropriately. Internet availability alone does not override missing credentials, incompatible security settings or a blocked gateway.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A Remote Desktop connection transmits only keystrokes and mouse clicks to the server and receives screen updates back.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "VPNs are only used to connect individual employees to the office; they cannot connect two different office sites together.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "Always-on VPNs can automatically establish a secure connection whenever an internet connection is detected.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-576",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "Compare the characteristics of LANs and WANs using the dropdown menus.\n\nA network that typically offers higher bandwidth and lower latency is a ....... \n[1]\n\n\nA network that relies on leased telecommunication lines provided by an ISP is a ....... \n[2]",
      "explanation": "The intended LAN/WAN comparison maps higher typical bandwidth/lower local latency to LAN and geographically extended provider leased circuits to WAN. PAN and MAN refer to different scopes, not the main two-category contrast requested. These are tendencies, not universal performance laws: a modern WAN can be faster than an old LAN, and WAN access need not use leased lines. The stated carrier-circuit example is what identifies the second blank.",
      "dragItems": [
        {
          "id": "i1",
          "text": "LAN"
        },
        {
          "id": "i2",
          "text": "PAN"
        },
        {
          "id": "i3",
          "text": "MAN"
        },
        {
          "id": "i4",
          "text": "WAN"
        },
        {
          "id": "i5",
          "text": "PAN"
        },
        {
          "id": "i6",
          "text": "LAN"
        },
        {
          "id": "i7",
          "text": "MAN"
        },
        {
          "id": "i8",
          "text": "WAN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i8",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "net-577",
      "chapter": "protocoale",
      "type": "single",
      "question": "In legacy Ethernet networks using hubs, what is the primary function of the CSMA/CD (Carrier Sense Multiple Access with Collision Detection) protocol?",
      "explanation": "CSMA/CD senses an idle medium, detects collisions on shared half-duplex Ethernet, stops the conflicting transmissions and uses randomized backoff before retrying. It does not encrypt payloads, assign IP addresses or coordinate radio interference. Modern switched full-duplex Ethernet does not contend on one shared medium, so the legacy hub context is essential. Random retry timing reduces the chance that the same stations collide again immediately.",
      "options": [
        "To encrypt data packets before transmission.",
        "To manage data collisions by forcing devices to wait a random time before retransmitting.",
        "To ensure that wireless signals do not interfere with wired signals.",
        "To assign IP addresses dynamically to all connected devices."
      ],
      "correct": 1
    },
    {
      "id": "net-578",
      "chapter": "echipamente",
      "type": "drag_drop",
      "question": "Match these traditional network-technology associations: classic coaxial bus termination, legacy Token Ring access, and a physical star concentrator.",
      "explanation": "Classic coaxial bus Ethernet requires terminators at both backbone ends so signals are absorbed rather than reflected back along the shared cable. Legacy Token Ring circulates a token; possession grants the right to transmit and avoids ordinary contention for access. A physical star needs the central hub/switch because endpoint spokes meet there. Thus terminator maps to Bus, token to the specified Ring technology and concentrator to Star. Physical ring shape alone does not force token passing, and a hub star can still behave as one logical shared medium. A switch in the same star wiring instead makes frame-aware forwarding decisions and can support separate full-duplex endpoint links.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Star Topology"
        },
        {
          "id": "i2",
          "text": "Ring Topology"
        },
        {
          "id": "i3",
          "text": "Bus Topology"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Terminator:",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Token:",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Central Hub/Switch:",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-579",
      "chapter": "infrastructura",
      "type": "dropdown",
      "question": "For each of the following statements regarding topology fault tolerance, select Yes if the statement is true and No if the statement is false.",
      "explanation": "A classic bus backbone break can disrupt the whole shared segment, so the first is Yes. One broken spoke normally disconnects only that star endpoint, so the second is No. Full mesh has direct pairwise connections and strong path redundancy, so the third is Yes in the elementary comparison. It is not a guarantee against shared power or node failures; control protocols must still use surviving links correctly.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "In a Bus topology, a break anywhere in the main cable typically causes the entire network to fail.",
          "correctItemId": "yes"
        },
        {
          "id": "z2",
          "label": "In a Star topology, if one workstation cable breaks, the entire network goes down.",
          "correctItemId": "no"
        },
        {
          "id": "z3",
          "label": "A Full Mesh topology offers the highest level of redundancy because every node is connected to every other node.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-580",
      "chapter": "infrastructura",
      "type": "single",
      "question": "Which hybrid topology is created when multiple Star topology networks are connected together via a main backbone cable (often creating a \"Star of Stars\")?",
      "explanation": "A tree/extended-star topology joins multiple stars hierarchically through a backbone or upstream connecting layer. It is not a closed ring or a full mesh linking every pair. Point-to-point describes one two-endpoint link, not the whole multi-star structure. Such hierarchy simplifies expansion but can make upstream/backbone components failure points unless redundancy is added.",
      "options": [
        "Tree Topology",
        "Ring Topology",
        "Full Mesh Topology",
        "Point-to-Point Topology"
      ],
      "correct": 0
    },
    {
      "id": "net-581",
      "chapter": "protocoale",
      "type": "drag_drop",
      "question": "Match these traditional media-access descriptions: shared half-duplex Ethernet contention, conventional Wi-Fi contention, and controlled access by possession of a token.",
      "explanation": "CSMA/CD fits shared half-duplex Ethernet: stations sense for idle media, transmit, detect collisions and retry after randomized backoff. CSMA/CA fits conventional Wi-Fi contention: stations sense the channel and use waiting/backoff, acknowledgments and optional reservation techniques because a transmitting radio cannot reliably detect collisions the way shared wired Ethernet does. Avoidance reduces collision risk rather than eliminating hidden-node or interference losses. Token passing grants a transmission turn to the holder of a circulating token, providing controlled access instead of random competition. Full-duplex switched Ethernet has independent send/receive paths and does not use CSMA/CD. The matching therefore depends on the named technology/access behavior, not simply whether the physical drawing resembles a ring or star.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Token Passing"
        },
        {
          "id": "i2",
          "text": "CSMA/CD"
        },
        {
          "id": "i3",
          "text": "CSMA/CA"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Listen before transmitting and detect collisions on shared half-duplex Ethernet",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Listen before transmitting and use collision avoidance on conventional Wi-Fi",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Possession of a circulating token grants a transmission opportunity",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "net-582",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "For each of the following statements regarding network access control, select Yes if the statement is true and No if the statement is false.",
      "explanation": "CSMA/CD as deterministic is No because contention and randomized backoff make the exact transmit time unpredictable. Token Ring as deterministic is Yes in the conventional controlled token-access comparison. Wi-Fi using CSMA/CA because simultaneous collision detection is impractical is Yes. “Avoidance” does not mean collisions never happen; hidden nodes, simultaneous backoff expiry and interference can still cause loss.",
      "dragItems": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Ethernet using CSMA/CD is considered a deterministic access method because you can guarantee when a device will transmit.",
          "correctItemId": "no"
        },
        {
          "id": "z2",
          "label": "Token Ring is a deterministic method because a device must possess the token to transmit data.",
          "correctItemId": "yes"
        },
        {
          "id": "z3",
          "label": "CSMA/CA is used in wireless networks to avoid collisions because collisions cannot be easily detected in the air.",
          "correctItemId": "yes"
        }
      ]
    },
    {
      "id": "net-583",
      "chapter": "echipamente",
      "type": "dropdown",
      "question": "You are analyzing the cost versus redundancy of Mesh networks. Use the dropdown menus to complete each statement.\n\nA topology where every device connects to every other device, offering many redundant paths but high cost, is a ....... \n[1]\n\n\nA topology where devices connect to only a few other key devices to balance cost and redundancy is a ....... \n[2]",
      "explanation": "Blank 1 is Full mesh: every pair is directly connected, creating many redundant paths at high interface/cabling cost. Blank 2 is Partial mesh: selected extra links balance cost and resilience. A star or unidirectional ring does not supply the same pairwise connection pattern. Full mesh should not be described as an absolute 100% availability guarantee; shared failures and faulty control/configuration can still interrupt communication.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Unidirectional ring"
        },
        {
          "id": "i2",
          "text": "Full mesh"
        },
        {
          "id": "i3",
          "text": "Partial mesh"
        },
        {
          "id": "i4",
          "text": "Star"
        },
        {
          "id": "i5",
          "text": "Partial mesh"
        },
        {
          "id": "i6",
          "text": "Full mesh"
        },
        {
          "id": "i7",
          "text": "Star"
        },
        {
          "id": "i8",
          "text": "Unidirectional ring"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i2",
          "optionIds": [
            "i1",
            "i2",
            "i3",
            "i4"
          ]
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i5",
          "optionIds": [
            "i5",
            "i6",
            "i7",
            "i8"
          ]
        }
      ]
    },
    {
      "id": "net-584",
      "chapter": "echipamente",
      "type": "single",
      "question": "Which simple topology consists of a dedicated link between exactly two devices (e.g., a router connected directly to another router) without sharing that link among additional attached endpoints?",
      "explanation": "Point-to-point is a dedicated connection between exactly two endpoints, such as two routers. Bus and multipoint share a medium among more participants, and a star describes multiple spokes around a center. A dedicated link avoids sharing its own capacity with extra attached endpoints, but topology alone does not determine the greatest possible bandwidth; interface speed, medium and equipment capabilities still set the rate.",
      "options": [
        "Bus",
        "Star",
        "Point-to-Point",
        "Multipoint"
      ],
      "correct": 2
    },
    {
      "id": "net-585",
      "chapter": "protocoale",
      "type": "single",
      "question": "In a CSMA/CD network domain, what happens immediately after a collision is detected by two transmitting devices?",
      "explanation": "After detecting a collision, legacy half-duplex Ethernet stations send the appropriate collision/jam indication, stop the frame and wait according to binary exponential randomized backoff before retrying. The matching option summarizes stop-and-backoff. IP address size does not decide which station wins, switches do not reboot and the protocol does not automatically move traffic to a backup cable. Random delay reduces repeated synchronized collisions.",
      "options": [
        "The switch reboots automatically.",
        "Both devices stop transmitting and wait for a random period of time (backoff algorithm).",
        "The device with the higher IP address continues to transmit.",
        "The data is automatically rerouted to a backup cable."
      ],
      "correct": 1
    },
    {
      "id": "net-586",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary purpose of the OSI Model?",
      "explanation": "OSI supplies a common layered framework that supports interoperable protocol/interface design across manufacturers. It does not itself allocate IP addresses, encrypt browsing sessions or physically connect devices. Those are particular functions classified within the model. The model alone cannot guarantee incompatible implementations will interoperate, but the standards-oriented functional separation is the purpose reflected by the best option.",
      "options": [
        "To manage IP addressing on a local network",
        "To enable interoperability between different hardware and software manufacturers",
        "To encrypt data for secure web browsing",
        "To provide a physical connection between devices"
      ],
      "correct": 1
    },
    {
      "id": "net-587",
      "chapter": "protocoale",
      "type": "single",
      "question": "In the OSI model, what is the term used to describe the process where each layer adds its own control information to the data as it moves from Layer 7 down to Layer 1?",
      "explanation": "Encapsulation adds relevant protocol control information as data moves down the stack, producing transport units, IP packets and link frames. Decapsulation is the reverse removal/interpretation at the receiver. Segmentation divides data into smaller transport units, and multiplexing combines distinguishable application flows; those can occur during communication but are not the general header/trailer wrapping process. Not every conceptual OSI layer necessarily adds a separate visible header in every real stack.",
      "options": [
        "Segmentation",
        "Multiplexing",
        "Encapsulation",
        "Decapsulation"
      ],
      "correct": 2
    },
    {
      "id": "net-588",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which layer of the OSI model acts as the direct interface between software applications and network services?",
      "explanation": "Application/Layer 7 exposes network protocol services used by software, such as web, mail or file operations. Presentation handles representation, Transport handles end-to-end delivery and Data Link handles frames/local links. “Direct interface” does not mean the model defines a graphical UI or that every program is itself an OSI protocol. It identifies the highest communication-service layer in this reference framework.",
      "options": [
        "Transport Layer (Layer 4)",
        "Application Layer (Layer 7)",
        "Presentation Layer (Layer 6)",
        "Data Link Layer (Layer 2)"
      ],
      "correct": 1
    },
    {
      "id": "net-589",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which Application Layer protocol translates human-readable domain names into numerical IP addresses necessary for routing?",
      "explanation": "DNS resolves human-readable domain names into records such as A and AAAA addresses, which applications then use for IP communication. HTTP transfers web content, SMTP sends mail and FTP transfers files; they may use DNS first but do not replace it. Routers normally forward using destination IP prefixes, not by resolving domain names for every packet.",
      "options": [
        "HTTP",
        "SMTP",
        "FTP",
        "DNS"
      ],
      "correct": 3
    },
    {
      "id": "net-590",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which traditional file-transfer protocol uses a TCP port 21 control connection and separate data connections to transfer files between a client and server?",
      "explanation": "FTP is the specifically named file-transfer protocol, conventionally using a TCP 21 control connection and separate data connections. SMTP handles email. HTTPS can also upload/download files and SSH supports file-transfer mechanisms such as SFTP/SCP, so generic bidirectional file transfer alone is not exclusive to FTP. The clarified control/data-channel distinction identifies the intended protocol without falsely claiming other listed technologies cannot move files.",
      "options": [
        "FTP",
        "HTTPS",
        "SMTP",
        "SSH"
      ],
      "correct": 0
    },
    {
      "id": "net-591",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary function of the Presentation Layer (Layer 6) in the OSI model?",
      "explanation": "Presentation handles data translation/representation, formatting, compression and the conceptual OSI encryption function. Session manages dialogues, Network routes packets and Data Link supplies local frame/MAC delivery. Real protocols can combine these functions or implement encryption elsewhere, but the question asks for the traditional functional model rather than an exclusive implementation boundary.",
      "options": [
        "Establishing and maintaining communication sessions",
        "Routing packets between different networks",
        "Data translation, formatting, encryption, and compression",
        "Delivering data locally using MAC addresses"
      ],
      "correct": 2
    },
    {
      "id": "net-592",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following formats or protocols is NOT typically associated with the Presentation Layer?",
      "explanation": "MAC addresses belong to Data Link and are the item not associated with Presentation. ASCII/EBCDIC are character encodings and JPEG/MPEG represent image/video formats. SSL/TLS is often grouped with representation/security functions in introductory OSI teaching, although its real placement above transport does not map perfectly to a standalone Layer 6 module. The negative wording asks for the clear lower-layer addressing distractor.",
      "options": [
        "SSL/TLS",
        "ASCII/EBCDIC",
        "JPEG/MPEG",
        "MAC addresses"
      ],
      "correct": 3
    },
    {
      "id": "net-593",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer establishes, maintains, synchronizes, and terminates dialogues between communicating applications?",
      "explanation": "Session/Layer 5 establishes, coordinates, synchronizes and terminates application dialogues in the OSI model. Transport provides delivery between endpoints, Network handles routing and Application exposes network services. TCP connections and OSI sessions are related ideas but not identical model layers. Real TCP/IP applications often implement session logic themselves instead of using a separately named Session-layer protocol.",
      "options": [
        "Transport Layer",
        "Network Layer",
        "Session Layer",
        "Application Layer"
      ],
      "correct": 2
    },
    {
      "id": "net-594",
      "chapter": "protocoale",
      "type": "single",
      "question": "What type of communication mode, managed by the Session Layer, allows data transmission in both directions, but not simultaneously?",
      "explanation": "Half duplex permits transmission in both directions but not at the same time. Simplex permits only one direction, while full duplex permits simultaneous two-way transmission. Multiplexing combines distinguishable channels/flows and is not this directionality mode. Session-layer dialogue control is the conceptual context here; the same duplex terms are also used for physical/link behavior, so they are not exclusive to Layer 5.",
      "options": [
        "Simplex",
        "Half-Duplex",
        "Full-Duplex",
        "Multiplex"
      ],
      "correct": 1
    },
    {
      "id": "net-595",
      "chapter": "protocoale",
      "type": "single",
      "question": "The Session Layer can insert checkpoints into a data stream. What is the main purpose of this synchronization?",
      "explanation": "Session checkpoints support resuming or recovering work from a known synchronization point rather than restarting the entire exchange after a recoverable failure. ARP handles IP-to-MAC resolution, encryption is a separate security function, and checkpoints do not increase physical bandwidth. Actual recovery requires protocol/application support and preserved state; the OSI concept is not a promise that every TCP session automatically resumes after a crash.",
      "options": [
        "To convert logical IP addresses to physical MAC addresses",
        "To resume communication from the last valid checkpoint if the session fails",
        "To encrypt the data stream at regular intervals",
        "To increase the overall bandwidth of the network connection"
      ],
      "correct": 1
    },
    {
      "id": "net-596",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer provides TCP-style reliable end-to-end delivery using segmentation, flow control and error recovery?",
      "explanation": "Transport is the intended layer for TCP-style end-to-end segmentation, flow control, error detection and recovery through retransmission. Data Link detects some local-frame errors, Network routes packets and Physical carries signals. “Error correction” here means delivery recovery rather than necessarily applying a forward-error-correcting code. Not every transport is reliable—UDP is not—so the description is of a reliable transport service rather than a universal transport-layer guarantee.",
      "options": [
        "Network Layer",
        "Data Link Layer",
        "Physical Layer",
        "Transport Layer"
      ],
      "correct": 3
    },
    {
      "id": "net-597",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the name of the Protocol Data Unit (PDU) at the Transport Layer when the TCP protocol is used?",
      "explanation": "A TCP transport PDU is a segment. Packet is the conventional Network-layer term, frame belongs to Data Link and bit to Physical. UDP at the same transport layer uses datagrams rather than TCP segments. These names identify the relevant encapsulation/header context, even though people sometimes use “packet” informally for several kinds of network data.",
      "options": [
        "Packet",
        "Segment",
        "Frame",
        "Bit"
      ],
      "correct": 1
    },
    {
      "id": "net-598",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which Transport Layer protocol is connectionless, fast, and does not guarantee data delivery, making it ideal for streaming video or online gaming?",
      "explanation": "UDP is a connectionless datagram transport with no built-in ordered-delivery/retransmission guarantee, making it useful where timeliness can matter more than waiting for missing data. TCP provides reliable streams, HTTP is an application protocol and IP is network-layer delivery. UDP does not automatically make every stream/game faster or correct: applications may add recovery, congestion control or reliability, and many streaming services use TCP or QUIC-based designs.",
      "options": [
        "TCP",
        "HTTP",
        "IP",
        "UDP"
      ],
      "correct": 3
    },
    {
      "id": "net-599",
      "chapter": "protocoale",
      "type": "single",
      "question": "How does the Transport Layer ensure that multiple applications can use the network connection simultaneously?",
      "explanation": "Transport ports enable multiplexing/demultiplexing of application endpoints. A connection is distinguished using protocol and address/port tuples, not simply one globally unique port per application. MAC addresses identify link interfaces, routing selects network paths and compression reduces representation size; none replaces endpoint-port identification. Multiple processes/connections can share one network interface while the stack directs received data to the appropriate socket.",
      "options": [
        "By assigning a unique MAC address to each application",
        "By using port numbers for multiplexing and demultiplexing",
        "By routing packets through different physical paths",
        "By compressing the data before transmission"
      ],
      "correct": 1
    },
    {
      "id": "net-600",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer is responsible for routing packets across different networks from the source system to the destination system?",
      "explanation": "Network/Layer 3 forwards packets across multiple networks using logical addresses and routing information. Data Link handles each local frame/link, Physical carries bits and Transport handles end-to-end process communication. A complete journey uses all those functions, but selection of next network hops is specifically the Network-layer responsibility.",
      "options": [
        "Data Link Layer",
        "Transport Layer",
        "Network Layer",
        "Physical Layer"
      ],
      "correct": 2
    },
    {
      "id": "net-601",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following devices operates primarily at the Network Layer to determine the best path for data using routing tables?",
      "explanation": "A router is the conventional Layer 3 device using a routing table to choose an outgoing interface/next hop. An ordinary switch and bridge operate at Layer 2, while a hub repeats at Layer 1. Multilayer switches can also route, but the unqualified switch distractor does not specify that capability. Best path means the route selected by prefix/preference/metric policy, not necessarily the physically shortest path.",
      "options": [
        "Router",
        "Switch",
        "Hub",
        "Bridge"
      ],
      "correct": 0
    },
    {
      "id": "net-602",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "Which protocol operates at the Network Layer to diagnose network problems, such as reporting errors or testing connectivity with the Ping command?",
      "explanation": "ICMP supports IP-layer error/control reporting and echo reachability probes, so it is the Network-layer choice. TCP is transport, HTTP application, and ARP resolves local IPv4 neighbors to link addresses rather than implementing ping echo. IPv6 uses ICMPv6 for corresponding functions. A user-level ping application generating ICMP does not turn the protocol itself into an Application-layer service.",
      "options": [
        "TCP",
        "ICMP",
        "ARP",
        "HTTP"
      ],
      "correct": 1
    },
    {
      "id": "net-603",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the primary addressing mechanism used at the Network Layer?",
      "explanation": "Logical IP addresses are the Network-layer addressing mechanism. MAC addresses serve Data Link delivery, ports identify Transport-layer endpoints, and domain names are Application-layer naming data resolved into address records. A sender can use a name in its application, but routers normally forward the resulting packets using IP prefixes. The different identifiers cooperate rather than being interchangeable.",
      "options": [
        "Port numbers",
        "Domain names",
        "Logical IP addresses",
        "Physical MAC addresses"
      ],
      "correct": 2
    },
    {
      "id": "net-604",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer frames data for delivery across a local link and provides link-specific error detection?",
      "explanation": "Data Link frames local traffic and supplies link-specific error detection, such as Ethernet's frame check sequence. Physical sends signals, Network handles packets/routes and Presentation concerns representation. Error detection does not necessarily mean the link protocol retransmits every damaged frame; Ethernet normally discards corrupted frames and leaves recovery to higher mechanisms where available.",
      "options": [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Presentation Layer"
      ],
      "correct": 1
    },
    {
      "id": "net-605",
      "chapter": "protocoale",
      "type": "single",
      "question": "The Data Link Layer is divided into two sub-layers. What are they?",
      "explanation": "The conventional IEEE Data Link sublayers are LLC, Logical Link Control, and MAC, Media Access Control. Carrier sense/collision detection are access techniques, TCP/UDP are transport protocols and NCP/LCP are PPP control-protocol names rather than the requested two sublayers. LLC and MAC separate higher-link service identification/control from medium-access and frame-addressing details in this teaching model.",
      "options": [
        "Carrier Sense (CS) and Collision Detection (CD)",
        "Transmission Control (TC) and User Datagram (UD)",
        "Network Control Protocol (NCP) and Link Control Protocol (LCP)",
        "Logical Link Control (LLC) and Media Access Control (MAC)"
      ],
      "correct": 3
    },
    {
      "id": "net-606",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the Protocol Data Unit (PDU) at the Data Link Layer called?",
      "explanation": "A Data Link PDU is a frame. TCP segments belong to Transport and packets to Network. “Datagram” can refer to UDP or IP contexts but is not the conventional Ethernet link-PDU term requested. Encapsulation wraps a network packet into a frame with local addressing and checking information for the current link, which can change at each router hop.",
      "options": [
        "Packet",
        "Datagram",
        "Segment",
        "Frame"
      ],
      "correct": 3
    },
    {
      "id": "net-607",
      "chapter": "protocoale",
      "type": "single",
      "question": "How does the Data Link Layer typically detect errors in transmitted data within a local network?",
      "explanation": "Ethernet-style Data Link error detection uses a CRC in the frame check sequence/trailer. The receiver recalculates and compares it to detect corruption. TCP's three-way handshake establishes a connection; the IPv4 header checksum protects only that IP header, and ICMP echo tests reachability. CRC detection does not automatically correct a frame or guarantee every mathematically possible corruption is detectable.",
      "options": [
        "By requesting a 3-way handshake before transmission",
        "By analyzing the IP header checksum",
        "By using a Cyclic Redundancy Check (CRC) in the frame trailer",
        "By sending ICMP echo requests"
      ],
      "correct": 2
    },
    {
      "id": "net-608",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which OSI layer is responsible for transmitting raw bits over a physical medium, such as copper cables, optical fibers, or radio waves?",
      "explanation": "Physical/Layer 1 defines transmission of bits as electrical, optical or radio signals over the medium. Data Link groups bits into frames, Network routes packets and Transport handles process delivery. A cut cable or incompatible signaling belongs to Physical even if the resulting symptom appears in a higher-level application. The medium's characteristics influence loss, rate and reach.",
      "options": [
        "Transport Layer",
        "Network Layer",
        "Data Link Layer",
        "Physical Layer"
      ],
      "correct": 3
    },
    {
      "id": "net-609",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following devices functions at the Physical Layer by simply repeating an incoming signal out to all other ports?",
      "explanation": "A hub is a multiport repeater that regenerates incoming signals onto other ports without learning destinations. A switch interprets frames/MAC addresses, a router uses IP routes and a firewall applies traffic policy. Hubs create a shared half-duplex collision medium rather than independent switched full-duplex conversations. Repeating a signal is a Layer 1 operation, not selective network-layer forwarding.",
      "options": [
        "Hub",
        "Switch",
        "Router",
        "Firewall"
      ],
      "correct": 0
    },
    {
      "id": "net-610",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the length of a conventional Ethernet EUI-48 MAC address?",
      "explanation": "A conventional Ethernet EUI-48 MAC address is 48 bits, displayed as six octets or twelve hexadecimal digits. IPv4 is 32 bits and IPv6 is 128 bits. EUI-64 is a different identifier format rather than the stipulated Ethernet EUI-48 length. Text separators and hexadecimal notation do not change the bit length.",
      "options": [
        "32 bits",
        "64 bits",
        "48 bits",
        "128 bits"
      ],
      "correct": 2
    },
    {
      "id": "net-611",
      "chapter": "protocoale",
      "type": "single",
      "question": "For a universally administered EUI-48 MAC address using a traditional 24-bit OUI allocation, what does that OUI identify?",
      "explanation": "For a universally administered EUI-48 address allocated under the traditional OUI scheme, the first 24 bits identify the registered organization, commonly the NIC vendor. They are not the IP subnet, routing protocol or complete device serial number. Locally administered/randomized addresses and newer allocation formats mean that a vendor cannot always be reliably inferred from every observed MAC; the manufacturer answer applies to the conventional OUI teaching model.",
      "options": [
        "The routing protocol being used",
        "The specific serial number of the device",
        "The IP network the device belongs to",
        "The manufacturer of the network interface card"
      ],
      "correct": 3
    },
    {
      "id": "net-612",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol is used to resolve a known logical IPv4 address into its corresponding physical MAC address on a local network?",
      "explanation": "ARP resolves a known local IPv4 destination or next-hop IP address to a MAC address. DNS resolves names, DHCP supplies client settings and NAT rewrites addresses in forwarded traffic. For remote destinations, the sender normally ARPs for its local gateway, not the remote host's MAC. IPv6 uses Neighbor Discovery instead of ARP, so the broad “IP” wording is interpreted specifically as IPv4 here.",
      "options": [
        "DNS",
        "DHCP",
        "ARP",
        "NAT"
      ],
      "correct": 2
    },
    {
      "id": "net-613",
      "chapter": "protocoale",
      "type": "single",
      "question": "How many layers are in the conventional TCP/IP reference model (not the five-layer teaching variation)?",
      "explanation": "The conventional TCP/IP model has four layers: Application, Transport, Internet and Network Interface/Access. Five is a common teaching variation explicitly excluded by the stem, seven is OSI and six is neither conventional count. The model is a functional abstraction, not a requirement that software have exactly four separate executable modules.",
      "options": [
        "5 layers",
        "4 layers",
        "6 layers",
        "7 layers"
      ],
      "correct": 1
    },
    {
      "id": "net-614",
      "chapter": "protocoale",
      "type": "single",
      "question": "In the TCP/IP model, which layer combines the functions of the OSI model's Application, Presentation, and Session layers?",
      "explanation": "TCP/IP Application combines the functions described separately as OSI Session, Presentation and Application. Transport corresponds to OSI Layer 4, Internet to Network/Layer 3 and Network Interface to the lower link/physical functions. Therefore Application is the mapping, not Transport merely because applications ultimately use TCP or UDP.",
      "options": [
        "Transport Layer",
        "Internet Layer",
        "Application Layer",
        "Network Interface Layer"
      ],
      "correct": 2
    },
    {
      "id": "net-615",
      "chapter": "protocoale",
      "type": "single",
      "question": "What is the main purpose of the TCP 3-way handshake?",
      "explanation": "The TCP three-way handshake synchronizes sequence information and confirms bidirectional connection establishment through SYN, SYN-ACK and ACK in the usual model. It does not translate signals, select network routes or resolve DNS names. Reliability during data transfer also requires sequencing, acknowledgment and retransmission beyond the handshake; establishing a connection alone cannot guarantee that later network failures will never occur.",
      "options": [
        "To convert analog signals into digital data",
        "To establish a reliable, connection-oriented session before transmitting data",
        "To route packets through the fastest available path",
        "To translate a domain name into an IP address"
      ],
      "correct": 1
    },
    {
      "id": "net-616",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following is a primary characteristic of the Transmission Control Protocol (TCP)?",
      "explanation": "TCP supplies a connection-oriented reliable ordered byte stream using checks, acknowledgments and retransmission, or reports failure when the connection cannot continue. It operates at Transport, not Internet. It is not connectionless and does not omit error checking for speed. Reliability means consistent stream delivery while possible, not an unconditional promise that every application transaction succeeds during an outage.",
      "options": [
        "It operates at the Internet layer.",
        "It provides an ordered, reliable byte stream using acknowledgments and retransmissions, or reports connection failure.",
        "It is connectionless.",
        "It avoids error checking to run faster than UDP."
      ],
      "correct": 1
    },
    {
      "id": "net-617",
      "chapter": "protocoale",
      "type": "single",
      "question": "In the TCP/IP model, which layer is responsible for managing routing and IP addressing to ensure packets reach their correct destination?",
      "explanation": "The TCP/IP Internet layer contains IP addressing and routing/packet forwarding functions. Transport identifies process endpoints and delivery behavior, Application defines higher services and Network Interface handles local link/media transmission. “Ensure” describes the layer's forwarding responsibility, not a reliability guarantee: IP can drop packets, and end-to-end recovery may be supplied by TCP or the application.",
      "options": [
        "Application Layer",
        "Transport Layer",
        "Internet Layer",
        "Network Interface Layer"
      ],
      "correct": 2
    },
    {
      "id": "net-618",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which TCP mechanism prevents a fast sender from overflowing a slower receiver by using the advertised receive window?",
      "explanation": "Flow control uses the receiver's advertised window to limit unacknowledged data so a sender does not overwhelm receive buffering. Congestion control is related but separately protects the network path. Multiplexing distinguishes flows, encapsulation wraps data and error detection checks corruption; none is the specific receive-window mechanism. The sender must respect both receiver-window and congestion-control limits where applicable.",
      "options": [
        "Multiplexing",
        "Encapsulation",
        "Flow control",
        "Error detection"
      ],
      "correct": 2
    },
    {
      "id": "net-619",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following protocols belongs to the Internet Layer of the TCP/IP model?",
      "explanation": "IPv4 belongs to the TCP/IP Internet layer and supplies logical packet addressing/forwarding. HTTP is Application, TCP is Transport and Ethernet belongs to Network Access/Interface. They can be stacked together for one web transfer, but each has a different functional role. The Internet layer does not itself promise TCP's reliable ordered byte stream.",
      "options": [
        "HTTP",
        "IPv4",
        "Ethernet",
        "TCP"
      ],
      "correct": 1
    },
    {
      "id": "net-620",
      "chapter": "protocoale",
      "type": "single",
      "question": "What mainly distinguishes a MAC address from an IP address?",
      "explanation": "MAC identifies an interface at the link layer; IP provides logical network-layer addressing used for routed communication. Both can change: MACs may be locally administered/randomized and IP addresses may be reassigned. DHCP normally assigns IP configuration, not a factory-fixed MAC. EUI-48 MACs have 48 bits while IPv4 has 32, reversing the false length option. MAC addresses do not perform global IP routing.",
      "options": [
        "MAC addresses are assigned by DHCP and IP addresses are always factory-fixed.",
        "MAC addresses perform global IP routing.",
        "Ethernet MAC addresses are 32 bits and IPv4 addresses are 48 bits.",
        "MAC addresses identify link-layer interfaces, while IP addresses provide logical network-layer addressing; either may change."
      ],
      "correct": 3
    },
    {
      "id": "net-621",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which protocol operates at the Application Layer to securely access and control network devices or servers remotely?",
      "explanation": "SSH provides encrypted authenticated remote shell/control services at the Application layer. FTP transfers files without inherent encryption in its standard form, SMTP sends email and POP3 retrieves mail. SSH can also support tunnels and file-transfer subsystems, but secure remote administration is the relevant role here. Certificate/host-key validation and strong authentication remain necessary to avoid connecting securely to the wrong endpoint.",
      "options": [
        "FTP",
        "SSH",
        "SMTP",
        "POP3"
      ],
      "correct": 1
    },
    {
      "id": "net-622",
      "chapter": "protocoale",
      "type": "single",
      "question": "At the Transport Layer, what does TCP use to verify that all packets have been correctly received in the proper sequence?",
      "explanation": "TCP uses sequence numbers and acknowledgments to track byte-stream order and received data, with checksums and retransmission supporting integrity/recovery. Subnet masks/gateways affect routing, MAC/ARP affect local delivery and port-forwarding rules affect traffic translation. None substitutes for TCP's stream sequence state. TCP acknowledges bytes rather than guaranteeing preservation of application message boundaries or every original IP packet.",
      "options": [
        "Sequence numbers and Acknowledgments (ACKs)",
        "Subnet masks and Default gateways",
        "MAC addresses and ARP tables",
        "Port forwarding rules"
      ],
      "correct": 0
    },
    {
      "id": "net-623",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which of the following pairs correctly matches the OSI layer to its corresponding Protocol Data Unit (PDU)?",
      "explanation": "Network Layer—Packet is the correct conventional pairing. Transport uses TCP segments or UDP datagrams, not frames; Physical uses bits rather than datagrams; Data Link uses frames rather than segments. The terminology reflects encapsulation levels and helps locate which header and addressing rules apply. Informal use of “packet” for any data unit should not obscure the model-specific matching requested.",
      "options": [
        "Transport Layer - Frame",
        "Physical Layer - Datagram",
        "Network Layer - Packet",
        "Data Link Layer - Segment"
      ],
      "correct": 2
    },
    {
      "id": "net-624",
      "chapter": "depanare-unelte",
      "type": "single",
      "question": "If a network engineer is diagnosing an issue with a cut or damaged fiber optic cable, at which OSI layer is the problem occurring?",
      "explanation": "A damaged fiber is a Physical-layer fault because it disrupts the optical medium carrying bits. Data Link errors and higher-layer retransmissions may result, but they are symptoms above the underlying break. Network routing changes might restore service over an alternate link without changing where the original defect belongs. An OTDR and appropriate optical testing can help locate the physical fault.",
      "options": [
        "Physical Layer",
        "Data Link Layer",
        "Transport Layer",
        "Network Layer"
      ],
      "correct": 0
    },
    {
      "id": "net-625",
      "chapter": "protocoale",
      "type": "single",
      "question": "Which TCP/IP layer handles the encoding of data for transmission over specific physical media, such as Ethernet or Wi-Fi?",
      "explanation": "The four-layer TCP/IP Network Interface/Access layer handles link framing and medium-specific signaling/encoding such as Ethernet or Wi-Fi. Internet handles IP forwarding, Transport handles endpoint streams/datagrams and Application defines higher services. This layer roughly combines OSI Physical and Data Link responsibilities, explaining why both signal encoding and local-frame delivery fit it in this model.",
      "options": [
        "Internet Layer",
        "Network Interface Layer",
        "Transport Layer",
        "Application Layer"
      ],
      "correct": 1
    }
  ]
};
