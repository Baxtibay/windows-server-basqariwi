const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Sistema admınıstratorınıń kásip bayramı qashan bayramlanadı?",
    a: "Iyul ayınıń aqırǵı jumasında",
    b: "Yanvar ayınıń birinshi dúyshembinde",
    c: "Mart ayınıń aqırǵı jumasında",
    d: "Noyabr ayınıń birinshi dúyshembinde"
  },
  {
    quostion: "Sistema administratorları ushın tiykarǵı sertifikatlar qaysılar?",
    a: "MCP, MCSE, MCSA",
    b: "CCNA, CCNP, MCITP",
    c: "A+, Network+, Security+",
    d: "LPI, RHCE, vCP"
  },
  {
    quostion: "Rezerv nusqasın jaratıw sistema administratorlarınıń qanday wazıypalarınan biri bolıp tabıladı?",
    a: "Rezerv nusqasın jaratıw",
    b: "Tarmaqtı sazlaw",
    c: "Paydalanıwshılardı qollap-quwatlaw",
    d: "Rezerv nusqasın jaratıw"
  },
  {
    quostion: "Windows Server 2019 da keńeytirilgen jumısqa túsiriw opciyalariga qanday kirisiw múmkin?",
    a: "Baslaw menyusınan  Sazlamalar ni tańlaw",
    b: "F8 túymesin basıw ",
    c: "Kompyuterdi qayta jumısqa túsiriw",
    d: "BIOS ga kirisiw"
  },
  {
    quostion: "Windows Server 2019 da taza ornatıw procesi qanday ámelge asıriladı?",
    a: "Ornatıw faylların júklew",
    b: "Qattı disktı formatlaw",
    c: "Ámeldegi operatsion sistemanı saqlap qalıw ",
    d: "Ornatıw procesin avtomatlastırıw"
  },
  {
    quostion: "Active Directory obiektlerin saqlaw ushın qanday formattan paydalanıladı?",
    a: "XML",
    b: "JSON",
    c: "CSV",
    d: "HTML"
  },
  {
    quostion: "Windows Server 2019 da paydalanıwshı esabın jaratıw ushın qanday ámellerdi orınlaw kerek?",
    a: "Barlıq juwaplar tuwrı",
    b: "Active Directory paydalanıwshıları hám kompyuterler konsolini ashıw",
    c: "Paydalanıwshılar konteynerini oń túymesin basıw",
    d: "Jańa paydalanıwshı jaratıw"
  },
  {
    quostion: "Gruppa siyasatı ne ushın qollanıladı?",
    a: "Programmalıq támiynattı sheklew",
    b: "Tarmaqtı basqarıw",
    c: "Paydalanıwshılardı autentifikatsiya qılıw",
    d: "Rezerv nusqaların jaratıw"
  },
  {
    quostion: "Windows Server 2019 da virtual mashinalardı jaratıw ushın qanday giltler ámeldegi?",
    a: "Ishki, jeke, sırtqı",
    b: "Sırtqı, ishki, ulıwma",
    c: "Ulıwma, jeke, ishki",
    d: "Ishki, sırtqı, ulıwma"
  },
  {
    quostion: " Microsoft Passport ne?",
    a: "Paydalanıwshı autentifikatsiyasi ushın jańa format",
    b: "Windows operatsion sistemasınıń jańalanıwı",
    c: "Tarmaq qáwipsizligi ushın programma",
    d: "Paydalanıwshı maǵlıwmatların saqlaw xızmeti"
  },
  {
    quostion: " Windows Server de IP adresin qanday ornatıw múmkin?",
    a: "Tarmaq sazlamalarinan",
    b: "Gruppa siyasatınan",
    c: "Qánigelesken programmadan",
    d: "Ornatıw processinde"
  },
  {
    quostion: " Serverdiń islewin qanday monıtorıń qılıw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Event viewer den",
    c: "Task Manager den",
    d: "Performance Monıtor den"
  },
  {
    quostion: " Paydalanıwshı esabınıń parolın ózgertiw ushın qanday giltler qollanıladı?",
    a: "CTRL + ALT + DELETE",
    b: "CTRL + SHIFT + ESC",
    c: "ALT + F4",
    d: "Win + L"
  },
  {
    quostion: " Active Directory de grupplarga qaysı obiektler kiritiledi?",
    a: "Barlıq juwaplar tuwrı",
    b: "Paydalanıwshılar",
    c: "Kompyuterler",
    d: "Printers"
  },
  {
    quostion: " DNS qaysı funksiyanı atqaradı?",
    a: "IP mánzillerin DNS atlarına ótkeriw",
    b: "Maǵlıwmatlardı rezervlew",
    c: "Tarmaq qáwipsizligin támiyinlew",
    d: "Internetge jalǵanıwdı basqarıw"
  },
  {
    quostion: " Windows Server 2019 da jańalanıwlardı qanday basqarıw múmkin?",
    a: "Windows Update",
    b: "System Restore",
    c: "Task Manager",
    d: "Device Manager"
  },
  {
    quostion: " Firewall ne funkciyanı atqaradı?",
    a: "Tarmaq qáwipsizligin támiyinlew",
    b: "Tarmaqtı tezlestiriw",
    c: "Maǵlıwmatlar rezervlew",
    d: "Ornatıw procesin avtomatlastırıw"
  },
  {
    quostion: " Virtual mashina (VM) ushın qaysı disk formatı usınıs etiledi?",
    a: "VHD",
    b: "ISO",
    c: "DAT",
    d: "TXT"
  },
  {
    quostion: " Tarmaqta paydalanıwshı esabı ushın ruxsatlardı qanday belgileysiz?",
    a: "Barlıq juwaplar tuwrı",
    b: "Paydalanıwshı qorǵawınan",
    c: "Gruppa siyasatınan",
    d: "Active Directory den"
  },
  {
    quostion: " Windows Server 2019 da óship ketken programmalardı qayta tiklew procesi ne?",
    a: "Backup and Restore",
    b: "Data Recovery",
    c: "System Restore",
    d: "Disk Cleanup"
  },
  {
    quostion: " Paydalanıwshılar hám toparlar arasında baylanıstı támiyinlew ushın qaysı xızmetten paydalanıladı?",
    a: "LDAP",
    b: "DHCP",
    c: "DNS",
    d: "FTP"
  },
  {
    quostion: " Active Directory obiektlerin qaysı qolay interfeysde basqarıw múmkin?",
    a: "Active Directory Admınıstrative Center",
    b: "Microsoft Word",
    c: "Powershell",
    d: "Notepad"
  },
  {
    quostion: " Diskti partitsiyalawda qaysı qural qollanılıwı múmkin?",
    a: "Disk Management",
    b: "Task Manager",
    c: "Event viewer",
    d: "Control Panel"
  },
  {
    quostion: " Server qáwipsizligin támiyinlew ushın qanday jantasıwlar qollanıladı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Antiviruslar",
    c: "Firewall",
    d: "Úzliksiz jańalanıwlar"
  },
  {
    quostion: " Gruppa siyasatın qanday jaratıw múmkin?",
    a: "Group Policy Management Console (GPMC) den",
    b: "Active Directory den",
    c: "Ornatıw processinen",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Windows Serverda RDP qaysı protokolǵa tiykarlanadı?",
    a: "RDP",
    b: "FTP",
    c: "HTTP",
    d: "SSH"
  },
  {
    quostion: " Windows Server 2019 da disktı formatlaw ushın qaysı fayl sisteması qollanıladı?",
    a: "NTFS",
    b: "FAT32",
    c: "exFAT",
    d: "HFS+"
  },
  {
    quostion: " Windows Server 2019 da júklegichni qanday optimallastırıw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Task Scheduler járdeminde",
    c: "Disk Cleanup járdeminde",
    d: "Event viewer járdeminde"
  },
  {
    quostion: " Active Directory ni rezervlew ushın qaysı qurallardan paydalanıw múmkin?",
    a: "Windows Backup",
    b: "Disk Imaging",
    c: "File History",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Paydalanıwshı esabın óshiriw procesi qaysı qural járdeminde ámelge asıriladı?",
    a: "Active Directory Users and Computers",
    b: "Task Scheduler",
    c: "Event viewer",
    d: "Disk Management"
  },
  {
    quostion: " Windows Server 2019 da tarmaq sazlamalarini jańalaw ushın qanday procedura ámeldegi?",
    a: "Barlıq juwaplar tuwrı",
    b: "Netsh buyrıq qatarı járdeminde",
    c: "Control Panel den",
    d: "Qollanba járdeminde"
  },
  {
    quostion: " Serverde fujuriy hám onıń ruxsatnamasın qanday basqarasiz?",
    a: "Barlıq juwaplar tuwrı",
    b: "Share Permissions den",
    c: "NTFS Permissions den",
    d: "Tarmaq sazlamalaridan"
  },
  {
    quostion: " Rezerv procesi qaysı maqsette ornatıladı?",
    a: "Maǵlıwmatlardı joǵaltpaw",
    b: "Sistemanıń islewin jaqsılaw",
    c: "Kodtı tiykarǵı dárejede ózgertirmew",
    d: "Internetge jalǵanıwdı támiyinlew"
  },
  {
    quostion: " Qosımshalar hám turaqlı programmalar ornatıwshılarınan qaysıları qabıl etilmeydi?",
    a: "ZIP",
    b: "MSI",
    c: "EXE",
    d: "All-ın-One"
  },
  {
    quostion: " TCP/IP protokolı qaysı qatlamǵa kiredi?",
    a: "Transport qatlam",
    b: "Fizikalıq qatlam",
    c: "Maǵlıwmatlar qatlam",
    d: "Sesion qatlam"
  },
  {
    quostion: " Diskta ámeldegi bolǵan maǵlıwmatlardı qıdırıw qaysı qural arqalı ámelge asıriladı?",
    a: "Windows Explorer",
    b: "Task Scheduler",
    c: "CMD",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Kereksiz programmalardı qanday etip tez óshiriw múmkin?",
    a: "Program and Features den",
    b: "Task Manager járdeminde",
    c: "Disk Cleanup den",
    d: "Universial uninstaller den"
  },
  {
    quostion: " Kúshli parol qanday bolıwı kerek?",
    a: "Nomerler, háripler hám arnawlı belgiler aralasǵan",
    b: "Tek nomerler",
    c: "Tek háripler",
    d: "Tek úlken háripler"
  },
  {
    quostion: " Qosımsha xızmetler hám programmalardı tarmaqta qanday basqarıw múmkin?",
    a: "Services .msc den",
    b: "Control Panel den",
    c: "Disk Management den",
    d: "Event viewer den"
  },
  {
    quostion: " Tarmaqta kirgizetuǵın maǵlıwmatlardı shifrlaw ushın qaysı protokol qollanıladı?",
    a: "HTTPS",
    b: "HTTP",
    c: "SMTP",
    d: "FTP"
  },
  {
    quostion: " Isletilmey atırǵan programmalardı qanday anıqlaw múmkin?",
    a: "Task Manager arqalı",
    b: "Event viewer arqalı",
    c: "Disk Management arqalı",
    d: "All-ın-One Installerdan"
  },
  {
    quostion: " Qosımshalar hám programmalardı ornatıw procesin qanday aydawshılar qollaydı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Online programmalar",
    c: "MSI fayllar",
    d: "EXE fayllar"
  },
  {
    quostion: " Server qátelerin qanday anıqlaw múmkin?",
    a: "Event viewer den",
    b: "Task Manager den",
    c: "Performance Monıtor den",
    d: "Disk Cleanup den"
  },
  {
    quostion: " Tarmaqta talap etiletuǵın IP adresin qanday alıw múmkin?",
    a: "DHCP arqalı",
    b: "Statikalıq bolıwı kerek",
    c: "DNS arqalı",
    d: "NAT arqalı"
  },
  {
    quostion: " DNS ne?",
    a: "Tarmaqtaǵı kompyuterler adresin tuwrılaw sisteması",
    b: "Internette maǵlıwmat jiberiw sisteması",
    c: "Úlken kólemli fayllardı saqlaw sisteması",
    d: "Operatsion sistema"
  },
  {
    quostion: " Júklep alınatuǵın qosımshalar katalogı ne dep ataladı?",
    a: "Hámmesi tuwrı",
    b: "App Store",
    c: "gApp Store",
    d: "Play Store"
  },
  {
    quostion: " Qosımsha xızmetler menen ornatılatuǵın programmalardı qanday etip baqlaw múmkin?",
    a: "Qosımshalardıń ishki interfeysinde",
    b: "Windows Update arqalı",
    c: "Olardı qolda óshiriw arqalı",
    d: "Ayırım programmalardı tańlaw arqalı"
  },
  {
    quostion: " Kerekli programmalıq támiynatlardı qanday etip qıdırıwıńız múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Google járdeminde",
    c: "Microsoft Store arqalı",
    d: "Óz ishinde qıdırıw"
  },
  {
    quostion: " Maǵlıwmatlardı diskta qanday qáwipsiz saqlaw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Shifrlaw",
    c: "Rezervlew",
    d: "Disktı bos halǵa keltiriw"
  },
  {
    quostion: " Windows Server 2019 da Active Directory ni qanday jaratıw múmkin?",
    a: "Server Manager arqalı",
    b: "PowerShell arqalı",
    c: "Control Panel arqalı",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Qosımsha programmalardı ornatıwdan aldın qaysı processni ámelge asırıw kerek?",
    a: "Rezerv qılıw",
    b: "Servislerdi óshiriw",
    c: "Disktı tazalaw",
    d: "Jańa paydalanıwshını qosıw"
  },
  {
    quostion: " Qosımshalardan paydalanıp, bir waqtıniń ózinde bir neshe programmalardı qanday etip óshiriw múmkin?",
    a: "Kontrol Panel arqalı",
    b: "Task Manager arqalı",
    c: "Disk Management arqalı",
    d: "Windows Defender arqalı"
  },
  {
    quostion: " Serverde jańalanıwlar qanday basqarıladı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Group Policy arqalı",
    c: "Windows Update arqalı",
    d: "Qollanba menen"
  },
  {
    quostion: " Qollanılmaytuǵın fayllardı óshiriw ushın qaysı qural qollanıladı?",
    a: "Disk Cleanup",
    b: "Defragmenter",
    c: "Task Manager",
    d: "Event viewer"
  },
  {
    quostion: " TCP protokolı qaysı wazıypanı atqaradı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Internet baylanısın támiyinlew",
    c: "Maǵlıwmatlardı paketlerge bolıw",
    d: "Óz-ara baylanıs ushın baylanısıw jaratıw"
  },
  {
    quostion: " Qosımsha qısım programmaları qaysı túrdegi fayllardı jeńillestiredi?",
    a: ".zip",
    b: ".exe",
    c: ".docx",
    d: ".jpg"
  },
  {
    quostion: " Tarmaqtaǵı IP mánzillerin basqarıw ushın qaysı procedura qollanıladı?",
    a: "DHCP",
    b: "DNS",
    c: "NAT",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Qosımsha programmalar ornatılǵanda qaysı nátiyjelerge alıp keliwi múmkin?",
    a: "Sistemanıń operativligin azaytadı",
    b: "Sistemanıń operativligin asıradı",
    c: "Tek jańa funkciyalarǵa alıp keledi",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " VPN xızmeti qaysı maqsette qollanıladı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Tarmaqtıń qáwipsizligin támiyinlew",
    c: "Paydalanıwshılardıń jeke maǵlıwmatların qorǵaw",
    d: "Internetten tikkeley jalǵanıwdı támiyinlew"
  },
  {
    quostion: " Qosımsha programmalardı demde jańalaw ushın qaysı quraldan paydalanıwıńız múmkin?",
    a: "Windows Update",
    b: "File Explorer",
    c: "Network Settings",
    d: "Task Manager"
  },
  {
    quostion: " Disklar arasında maǵlıwmatlardı kóshiriw ushın qaysı qural qollanıladı?",
    a: "Disk Management",
    b: "File Explorer",
    c: "Task Scheduler",
    d: "Event viewer"
  },
  {
    quostion: " Qosımsha protsessor quwatın qanday asırıwıńız múmkin?",
    a: "Programmalıq támiynattı optimallastırıw",
    b: "Taǵı protsessor ornatıw",
    c: "Qosımsha yad ornatıw",
    d: "Jańalanıwlardı ornatıw"
  },
  {
    quostion: " Rezerv rejiminde qaysı qıyınshılıqlar bolıwı múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Rezerv saqlaw maydanı etarli bolmawi",
    c: "Jańalanıwlar avtomatikalıq túrde ózgeriwi",
    d: "Qayta ornatılǵan programmalarda maǵlıwmatlar joǵalıp ketiwi"
  },
  {
    quostion: " Windows de tarmaq sazlamalarini ózgertiw ushın qaysı jayǵa ótiwińiz kerek?",
    a: "Barlıq juwaplar tuwrı",
    b: "Control Panel",
    c: "Settings",
    d: "Network Connections"
  },
  {
    quostion: " Shifrlaw proceduraları maǵlıwmatlardı qanday qorǵaw etedi?",
    a: "Oqılıwınan qorǵaw etedi",
    b: "Joytıwdan qorǵaw etedi",
    c: "Tarqatıwdan qorǵaw etedi",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Qosımsha programmalardı ornatıwda dıqqat qılıw kerek bolǵan tárep ne?",
    a: "Programma deregi",
    b: "Programma bahası",
    c: "Programma qosımsha funksiyaları",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Qosımsha programmalardı qanday etip qáwipsiz ornatıw múmkin?",
    a: "Rásmiy sayttan júklep alıw",
    b: "Qayta ózgeriwsiz ornatıw",
    c: "Basqa paydalanıwshılarǵa tayanish",
    d: "Hesh bolmaǵanda eski versiyanı ornatıw"
  },
  {
    quostion: " Disktı defragmentatsiya qılıw qaysı processni jibeydi?",
    a: "Maǵlıwmatlardı tezirek alıw",
    b: "Diskdıń ólshemin asırıw",
    c: "Programma usınıs etiw",
    d: "Sistemanı jańalaw"
  },
  {
    quostion: " Qosımsha programmalardı ornatıwdan aldın qaysı processni ámelge asırıw múmkin?",
    a: "Rezerv qılıw",
    b: "Sistemanı jańalaw",
    c: "Antivirustı aktivlestiriw",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Windowsda texnikalıq qollap-quwatlaw qaysı qural arqalı ámelge asıriladı?",
    a: "Help and Support",
    b: "Windows Defender",
    c: "Disk Management",
    d: "Control Panel"
  },
  {
    quostion: " Rezerv faylların diskǵa saqlaw ushın qaysı format keń qollanıladı?",
    a: ".zip",
    b: ".exe",
    c: ".jpg",
    d: ".html"
  },
  {
    quostion: " Windows operatsion sistemasındaǵı paydalanıwshı parolın qanday jańalaw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Control Panel arqalı",
    c: "Command Prompt arqalı",
    d: "Settings arqalı"
  },
  {
    quostion: " Qosımsha programmalardı tarmaq arqalı qanday demde ornatıw múmkin?",
    a: "Windows Update járdeminde",
    b: "Gpupdate járdeminde",
    c: "Disk Cleanup arqalı",
    d: "PowerShell járdeminde"
  },
  {
    quostion: " Sistema rezerv alıw processinde qaysı zárúrli ámellerdi atqara alasız?",
    a: "Diskdıń tolıq rezervin alıw",
    b: "Paydalanıwshı esapların qosıw",
    c: "Antivirustı ornatıw",
    d: "Yad asırıw"
  },
  {
    quostion: " Qosımsha programmalardı qanday etip júklep alıw usınıs etiledi?",
    a: "Isenimli rásmiy saytlardan",
    b: "Jergilikli disktan",
    c: "Telegram toparlarınan",
    d: "Basqa paydalanıwshılardan"
  },
  {
    quostion: " Qosımsha programmalar ornatılǵannan keyin sistemada nelerdi tekseriw kerek?",
    a: "Barlıq juwaplar tuwrı",
    b: "Programma qáwipsizligi",
    c: "Programma islew jaǵdayı",
    d: "Programma menen baylanıslı interfeys"
  },
  {
    quostion: " Virus hám zıyanlı programmalardan qorǵaw ushın eń jaqsı jónelis qaysı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Antivirus programmaların ornatıw",
    c: "Firewallni ornatıw",
    d: "Túyme yamasa programma usınıs etilmeydi"
  },
  {
    quostion: " Qosımsha programmalardı ornatıw waqtında qaysı mashqala eń kóp ushraydı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Yad jetispewshiligi",
    c: "Versiya uyqas kelmewi",
    d: "Internet úzilisi"
  },
  {
    quostion: " Sistema yadınan óshiriw processinde qaysı qural paydalı?",
    a: "Disk Cleanup",
    b: "Task Manager",
    c: "Device Manager",
    d: "Printer Settings"
  },
  {
    quostion: " Qosımsha programmalardıń aktivlashtirilmagani qaysı tásirdi kórsetiwi múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Jumıs iskerlikınıń tómenlewi",
    c: "Texnikalıq máseleler",
    d: "Qayta ornatıw zárúrshiligi"
  },
  {
    quostion: " Programmalıq támiynat jańalanıwları qanday áhmiyetke iye?",
    a: "Barlıq juwaplar tuwrı",
    b: "Jańalıqlar hám funkciyalardı qosadı",
    c: "Zero zálellerden qorǵaw etedi",
    d: "Sistemanı tezlestiredi"
  },
  {
    quostion: " Rezerv alıw processinde aldın qaysı ámellerdi orınlaw kerek?",
    a: "Diskta jaydı tazalaw",
    b: "Antivirustı aktivlestiriw",
    c: "Bir neshe rezerv versiyaların ornatıw",
    d: "Hesh qanday tayarlıqsız rezerv alıw"
  },
  {
    quostion: " Kompyuter sistemasın jańalaw ushın qaysı qolaylıqtan paydalanıwıńız múmkin?",
    a: "Windows Update",
    b: "Manual ornatıw",
    c: "Qayta júklew",
    d: "Qattı disktı ózgertiw"
  },
  {
    quostion: " Sistemadaǵı waqtın hám sanani qanday ózgertiw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Settings > Time & Language",
    c: "Control Panel > Date and Time",
    d: "Task Manager"
  },
  {
    quostion: " Programmalardı sınaqtan ótkeriw ushın qaysı metoddan paydalanıladı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Beta testing",
    c: "Alpha testing",
    d: "Usability testing"
  },
  {
    quostion: " Qosımsha programmalardıń kerekli versiyaların qanday kórsetiw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Programma jańalanıwı",
    c: "Programma járdem menyusı",
    d: "Rásmiy sayt"
  },
  {
    quostion: " Sistemada tarmaq máseleleri payda bolǵanda qaysı ámeli ámelge asırıw kerek?",
    a: "Barlıq juwaplar tuwrı",
    b: "Qayta júklew",
    c: "IP adresin jańalaw",
    d: "Hújjetlerdi toplaw"
  },
  {
    quostion: " Qosımsha programmalardı avtomatikalıq jańalaw qanday wazıypalardı atqaradı?",
    a: "Programmalıq támiynattı jańalanıwın támiyinlew",
    b: "Programmalardı qumar arqalı jaqsılaw",
    c: "Sistemada jaydı esaplaw",
    d: "Maǵlıwmatlar bazasın asırıw"
  },
  {
    quostion: " Qosımsha programmalardıń tásirin kemeytiw ushın qaysı strategiya qollanıladı?",
    a: "Kem sanlı programmalardı ornatıw",
    b: "Ornatılǵan programmalardı tekseriw",
    c: "Jańalanıwlardı biykarlaw etiw",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Sistemada paydalanılmay atırǵan programmalardan qanday qutılıw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Programmalar qatarında óshiriw",
    c: "Disk Cleanup isletiw",
    d: "Pilat qánigelesken qurallardı ornatıw"
  },
  {
    quostion: " Qosımsha programmalardı ornatıwdan aldın oqıw kerek bolǵan maǵlıwmat qaysı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Programma organizatori",
    c: "Paydalanıw boyınsha kórsetpeler",
    d: "Tabıslar haqqında túsindirmeler"
  },
  {
    quostion: " Júklep alınǵan programmalardı qanday tekseriw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Antivirus skanerinen ótkeriw",
    c: "Internette túsindiriwleri hám reytinglerin oqıw",
    d: "Rásmiy saytın kórip shıǵıw"
  },
  {
    quostion: " Kompyuterde zıyanlı programmalardıń aldın alıw ushın qaysı qurallardan paydalanıw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Antivirus programmaları",
    c: "Shifrlaw quralları",
    d: "Jańalanıwlardı basqarıw"
  },
  {
    quostion: " Sistema menen baylanıslı baylanısqan programmanı qanday úziw múmkin?",
    a: "Task Manager",
    b: "Control Panel",
    c: "File Explorer",
    d: "Disk Cleanup"
  },
  {
    quostion: " Modem hám routerdiń wazıypaları qaysı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Internetge baylanısqan",
    c: "Signal tarqatadı",
    d: "Tarmaq qáwipsizligin támiyinleydi"
  },
  {
    quostion: " Kompyuterde rezerv processinde qanday máseleler bolıwı múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Diskta jay jemiriledi",
    c: "Rezerv programmasında qátelik",
    d: "Qayta júklew zárúrshiligi"
  },
  {
    quostion: " Joqarı sapalı programmalardı qanday tańlaw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Paydalanıwshı túsindiriwlerin oqıw",
    c: "Usınıs hám túsindirmelerdi úyreniw",
    d: "Sınaq versiyalarınan paydalanıw"
  },
  {
    quostion: " Qosımsha programmalardı avtomatikalıq ornatıw qanday artıqmashılıqlarǵa iye?",
    a: "Barlıq juwaplar tuwrı",
    b: "Tez hám qolay",
    c: "Programmalıq támiynat versiyaların jańalaw",
    d: "Aljasıqlardıń aldın alıw"
  },
  {
    quostion: ". Programmalar ushın tuwrı versiyalardıń júkleniwi qaysı nátiyjege alıp keledi?",
    a: "Sistema juwap berolmasligi",
    b: "Programma awqamınan qutılıw",
    c: "Programma sınaqtan ótiwi múmkin",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Kompyuterdegi RAM dıń tiykarǵı waziypası ne?",
    a: "Operativ maǵlıwmatlardı qayta islew",
    b: "Maǵlıwmatlardı saqlaw",
    c: "Tarmaq jalǵanıwın támiyinlew",
    d: "Paydalanıwshı interfeysin jaratıw"
  },
  {
    quostion: " Klaviaturada Ctrl + C kombinatsiyası qanday funksiyanı atqarar?",
    a: "Nusqalaw",
    b: "Saqlaw",
    c: "Kesiw",
    d: "Óshiriw"
  },
  {
    quostion: " Qosımsha programma retinde qanday programma tómendegi funksiyanı atqara almaydı?",
    a: "Operatsion sistema",
    b: "Antivirus",
    c: "Tekst redaktorı",
    d: "Brauzer"
  },
  {
    quostion: " Web-saytlardı jaratıwda qaysı til paydalanıladı?",
    a: " HTML",
    b: " Java",
    c: " C#",
    d: " Python"
  },
  {
    quostion: " Qaysı operatsion sistema ashıq derek bolǵan?",
    a: "Linux",
    b: "Windows",
    c: "macOS",
    d: "Android"
  },
  {
    quostion: "Programmalardı óz-ózinen jańalanıwına qaysı programma juwapker?",
    a: "Jańalanıw quralı",
    b: "Paydalanıwshı interfeysi",
    c: "Antivirus programması",
    d: "Oyın programması"
  },
  {
    quostion: "Qosımsha yad qásiyetleri qaysı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Ǵalabalıq yad",
    c: "SSD",
    d: "HDD"
  },
  {
    quostion: "Programmalar ushın máselelerin saplastırıw procesin qanday ataw múmkin?",
    a: "Depugging",
    b: "Programmalıq támiynat",
    c: "Mashqalalardi sheshiw",
    d: "Programmalıq qollanba"
  },
  {
    quostion: "Ne nátiyjesinde antivirus programması sistemanı qorǵawda zárúrli bolıp tabıladı?",
    a: "Zıyanlı programmalardı anıqlaydı hám joq etedi",
    b: "Jańa programmalardı ornatadı",
    c: "Sistemanı tezlestiredi",
    d: "Paydalanıwshın qorǵaw etedi"
  },
  {
    quostion: "FTP protokolı ne maqsette qollanıladı?",
    a: "Maǵlıwmat uzatıw",
    b: "Brauzer jaratıw",
    c: "Antivirustı jańalaw",
    d: "Elektron pochta jiberiw"
  },
  {
    quostion: "Pivot kesteler qaysı programmada jaratıladı?",
    a: "Microsoft Excel",
    b: "SQL",
    c: "Python",
    d: "HTML"
  },
  {
    quostion: "Qosımshalar qanday programmalarda qollanıladı?",
    a: "Hár qanday programmada",
    b: "Tek Microsoft Office",
    c: "Tek brauzerlerde",
    d: "Hesh qanday programmalarda"
  },
  {
    quostion: " Nátiyjeli tarmaq baylanısı ushın qaysı usıllar iskerlik kórsetedi?",
    a: " Barlıq juwaplar tuwrı",
    b: " Ethernet kabeli",
    c: " Wi-Fi",
    d: " Bluetooth"
  },
  {
    quostion: "Kóp paydalanıwshılardıń bir waqtıniń ózinde sistemadan paydalanıwın támiyinleytuǵın programma qanday ataladı?",
    a: "Operatsion sistema",
    b: "Fayl menedjeri",
    c: "waqtın belgileytuǵın programma",
    d: "Oyın programması"
  },
  {
    quostion: "Virtual yad haqqında ne dep alasız?",
    a: "Fizikalıq yaddıń asırılıwı",
    b: "SSD saqlaw jayı",
    c: "Disk feyzi",
    d: "Operativ yad"
  },
  {
    quostion: "Qosımsha programmalardı ornatıw processinde nelerge itibar beriw kerek?",
    a: " Barlıq juwaplar tuwrı",
    b: " Programmalıq kórsetpelerge",
    c: " Paydalanıwshı túsindiriwlerine",
    d: " Jańalanıwlardı"
  },
  {
    quostion: " IP adresi ne?",
    a: " Internet Protokolı adresi",
    b: " Jańalaw Protokolı adresi",
    c: " Óz-ara járdem klassifikaciyası",
    d: " Saqlaw jayı adresi"
  },
  {
    quostion: " Operatsion sistemanıń wazıypaları qaysılar?",
    a: " Barlıq juwaplar tuwrı",
    b: " Paydalanıwshına interfeys jaratıw",
    c: " Sistema resurslarini basqarıw",
    d: " Programmanı ashıw hám jabıw"
  },
  {
    quostion: "Úlken kólemdegi maǵlıwmatlardı saqlaw ushın qaysı usıl qollanıladı?",
    a: "Bultlı saqlaw",
    b: "QR kodlar",
    c: "USB flesh-disklar",
    d: "Awızsha sóz menen"
  },
  {
    quostion: "Qaysı programmalıq támiynatda jumıs rejimi bolmaydı?",
    a: "Termal qadaǵalawshı",
    b: "Oyın",
    c: "Súwret redaktorı",
    d: "Email programması"
  },
  {
    quostion: "Kompyuter virusları ne ushın qáwipli esaplanadı?",
    a: "Shifrlaw maǵlıwmatların joytıw",
    b: "Programmalardı tezlestiriw",
    c: "Sistemaǵa kirgiziw zárúr",
    d: "Tarmaq baylanısın úziw"
  },
  {
    quostion: "Maǵlıwmat bazaları qaysı formada saqlanadı?",
    a: "Cifrlı formada",
    b: "Qaǵazda",
    c: "Jazıwlar retinde",
    d: "Grafika retinde"
  },
  {
    quostion: "HTML qaysı kórinistegi maǵlıwmatlardı islep shıǵaradı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Tekst",
    c: "Súwret",
    d: "video"
  },
  {
    quostion: " Sistema quwatın qaysı tárzde asırıw múmkin?",
    a: " Barlıq juwaplar tuwrı",
    b: " Programmalardı óshirip jiberiw",
    c: " Kóbirek RAM qosıw",
    d: " Qattı disktı tezlestiriw"
  },
  {
    quostion: "Qosımsha programmalardıń avtomatikalıq jańalanıwın qanday qosıw múmkin?",
    a: "Programma parametrlerinde",
    b: "Kompyuterdi júklew arqalı",
    c: "Antivirustı ornatak",
    d: "Sistemanı qayta júklew"
  },
  {
    quostion: "Web-saytda qáwipsizlikti támiyinleytuǵın sertifikat qanday ataladı?",
    a: "SSL sertifikatı",
    b: "URL sertifikatı",
    c: "HTTP sertifikatı",
    d: "FTP sertifikatı"
  },
  {
    quostion: "Programmalarda paydalanıwshılar tájiriybesin jaqsılaw ushın qanday elementler qollanıladı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Interfeys",
    c: "Dawıslar",
    d: "Súwret jarlıqları"
  },
  {
    quostion: " Paswordti saqlaw hám rekonstrukciya etiwge járdem beretuǵın programma qanday ataladı?",
    a: " Parol saqlawshı",
    b: " Antivirus",
    c: " Shifrlaw programması",
    d: " Qattı disk"
  },
  {
    quostion: "Web brauzerdiń funksiyaları qaysılar?",
    a: "Barlıq juwaplar tuwrı",
    b: "Betlerdi kóriw",
    c: "Maǵlıwmatlardı júklew",
    d: "Internetge jalǵanıw"
  },
  {
    quostion: "Programmalarda baqlaw hasası qanday ataladı?",
    a: "Depugging",
    b: "waqtı menen monıtorıń",
    c: "Malumot kompleksi",
    d: "Programmalastırıw sintaksisi"
  },
  {
    quostion: "Kompyuterdiń tiykarǵı bóleginde qaysı qurılmalar ámeldegi?",
    a: "CPU hám RAM",
    b: "Monıtor hám klaviatura",
    c: "Printerdi jalǵaw",
    d: "Internetge jalǵanıw"
  },
  {
    quostion: "Qosımsha programmalardı ornatıw processinde mashqalalardi qanday sheshiw kerek?",
    a: "Barlıq juwaplar tuwrı",
    b: "Programma deregin tekseriń",
    c: "Skanerlashtiring",
    d: "Internetten qollanba alın"
  },
  {
    quostion: "Qosımsha programmanı qanday óshiriw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Uzaq basıp turıw",
    c: "Programma menyusınan óshiriw",
    d: "Qadaǵalaw panelinen óshiriw"
  },
  {
    quostion: "Kompyuter sistemaları turalı uyreniletuǵın programmalardıń hasası qanday ataladı?",
    a: "Programmalastırıw tili",
    b: "Algoritm",
    c: "Robota programmalastırıw",
    d: "Komanda buyrıqları"
  },
  {
    quostion: "Qosımsha programmalardıń jumıs jugin qayta tiklewde qanday usıl qollanıladı?",
    a: "Maǵlıwmatlardı qayta qayta tiklew",
    b: "Shifrlaw",
    c: "Buzılǵan fayldı qayta tiklew",
    d: "viruslardan qorǵawlanıw"
  },
  {
    quostion: "Sistemanı qayta jumısqa túsiriw qanday process?",
    a: "Barlıq juwaplar tuwrı",
    b: "Erratic",
    c: "Reboot",
    d: "Restart"
  },
  {
    quostion: "Qosımsha programma retinde sistemanı qanday anıqlaymız?",
    a: "Operatsion sistemaǵa",
    b: "Kompyuter programmasına",
    c: "Saqlaw jayına",
    d: "Oyın programmasına"
  },
  {
    quostion: "Maǵlıwmatlar bazaları qaysı formatda saqlanadı?",
    a: "Tekst retinde",
    b: "Súwret retinde",
    c: "Strukturalanbaǵan",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: " Bultlı saqlaw xızmetlerinen paydalanıw qanday qolaylıqlardı usınıs etedi?",
    a: " Barlıq juwaplar tuwrı",
    b: " Maǵlıwmatlardı operativ uzatıw",
    c: " Keń ámelde barlıq",
    d: " Hár qanday orından kirisiw múmkinshiligi"
  },
  {
    quostion: "Programmalastırıw tili járdeminde qanday jumıslar orınlanadı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Web-sayt jaratıw",
    c: "Mobil qosımshalardı islep shıǵıw",
    d: "Kompyuter oyınların programmalastırıw"
  },
  {
    quostion: " Maǵlıwmatlardı analiz qılıwda qaysı qurallar qollanıladı?",
    a: " Barlıq juwaplar tuwrı",
    b: " Excel",
    c: " SQL",
    d: " Python"
  },
  {
    quostion: "Ǵalaba xabar saytınıń tiykarǵı qásiyetleri qaysılar?",
    a: "Barlıq juwaplar tuwrı",
    b: "Operativ jańalıqlar",
    c: "Ínteraktiv journalism",
    d: "Paydalanıwshılardan pikir alıw"
  },
  {
    quostion: " Cifrlı hújjetlerdi shifrlaw procesi qaysı maqsetke qaratılǵan?",
    a: " Maǵlıwmatlardı qorǵaw",
    b: " Hújjetlerdi saqlaw",
    c: " Ańsat uzatıw",
    d: " Pátni kórsetiw"
  },
  {
    quostion: "Kompyuter virusların anıqlaw hám olardan qorǵawlanıw ushın qanday programma qollanıladı?",
    a: "Antivirus",
    b: "Paydalanuvchınıń jeke programması",
    c: "Dawıslı programmalar",
    d: "Maǵlıwmatlar bazası"
  },
  {
    quostion: "Cifrlı jeke maǵlıwmatlardı saqlawda qanday qáwiplerge dus kelinedi?",
    a: "Barlıq juwaplar tuwrı",
    b: "Xakerlik",
    c: "Malware",
    d: "Jeke maǵlıwmatlardıń joǵalıp ketiwi"
  },
  {
    quostion: "Web-sayttıń júkleniwin tezlestiriw ushın qaysı usıllar qollanılıwı múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "Súwret hám fayllardı optimallastırıw",
    c: "Keshni isletiw",
    d: "Serverdi jańalaw"
  },
  {
    quostion: "Qosımshalardı mobil qurılmalarǵa qanday ornatıw múmkin?",
    a: "Barlıq juwaplar tuwrı",
    b: "App Store yamasa Google Play",
    c: "Web-saytlardan júklew",
    d: "Kompyuter arqalı ornatıw"
  },
  {
    quostion: "Internette qanday qáwipsizlik ilajların kóriw kerek?",
    a: "Barlıq juwaplar tuwrı",
    b: "Kúshli parollardı isletiw",
    c: "Jeke maǵlıwmatlardı artıqsha bólesmaslik",
    d: "Antivirus programmaların ornatıw"
  },
  {
    quostion: " Joqarı sapalı video kórinisti támiyinlew ushın qanday internet tezligi kerek?",
    a: " 10 Mbps yamasa joqarı",
    b: " 1 Mbps yamasa kemrek",
    c: " 3-5 Mbps",
    d: " Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Kiber qáwipsizlikti támiyinlew ushın qaysı elementler zárúrli esaplanadı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Sistema hám programmalardı úzliksiz jańalaw",
    c: "Antivirus programmaların házirgi jaǵdayın saqlaw",
    d: "Paydalanıwshı jawobotini asırıw"
  },
  {
    quostion: "Sistema programması ne?",
    a: "Kompyuter apparatın basqarıw hám ónimliligin asırıw",
    b: "Paydalanıwshı interfeysin jaratıw",
    c: "Oyınlardı islep shıǵıw",
    d: "Internette maǵlıwmat qıdırıw"
  },
  {
    quostion: "Hújjet formatınıń keń tarqalǵan túri qaysı?",
    a: "Barlıq juwaplar tuwrı",
    b: "PDF",
    c: "DOCX",
    d: "TXT"
  },
  {
    quostion: "Brauzer ne?",
    a: "Internette qıdırıw qılıw ushın programma",
    b: "Fayllardı saqlaw programması",
    c: "Programmalıq támiynattı ornatıw",
    d: "Mobil telefon platformasi"
  },
  {
    quostion: "Qaysı programma kompyuterdegi viruslardı anıqlaydı hám joq etedi?",
    a: "Antivirus",
    b: "Photoshop",
    c: "Microsoft Word",
    d: "FTP programması"
  },
  {
    quostion: "Tarmaqlardı óz-ara bólew ushın qanday qurılmalar qollanıladı?",
    a: "Marshrutizatorlar hám kommutatorlar",
    b: "Qollanbalar",
    c: "Monıtorlar",
    d: "Klaviaturalar"
  },
  {
    quostion: "HTTP dıń tolıq forması ne?",
    a: "Hypertext Transfer Protocol",
    b: "Hyper Transfer Protocol",
    c: "Hyperlink Transfer Protocol",
    d: "Hypertext Title Protocol"
  },
  {
    quostion: "Cifrlı hújjetlerdi qorǵawda qaysı usıldan paydalanıladı?",
    a: "Parol qoyıw",
    b: "Fayl formatın ózgertiw",
    c: "Fayldı óshiriw",
    d: "Hújjetti baspadan shıǵarıw"
  },
  {
    quostion: "Instagram hám Facebook sıyaqlı social tarmaqlar qashan payda bolǵan?",
    a: "2010 -jıllardıń basında",
    b: "2000-jıllardıń basında",
    c: "1990 -jıllarda",
    d: "2020 -jıllarda"
  },
  {
    quostion: " Kompyuterde operatsion sistemanıń tiykarǵı waziypası qanday?",
    a: " Programmalardı isletiw hám apparattı basqarıw",
    b: " Oyınlardı basqarıw",
    c: " Paydalanıwshı interfeysin támiyinlew",
    d: " Internetti tezlestiriw"
  },
  {
    quostion: "Cifrlı marketing processinde qaysı ishki tarmaqlar qollanıladı?",
    a: "Internet",
    b: "Televidenie",
    c: "Radio",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "IP adresi qanday maǵlıwmattı beredi?",
    a: "Qurılma jaylasıwın",
    b: "Paydalanıwshı parolın",
    c: "Hújjetlerdiń atların",
    d: "Internet bar ekenligi"
  },
  {
    quostion: "Wi-Fi ne?",
    a: "Sımsız lokal tarmaq",
    b: "Jeke kompyuter tarmaǵı",
    c: "Tikkeley internet jalǵanıwı",
    d: "Mobil telefon baylanısı"
  },
  {
    quostion: "Spam ne?",
    a: "Kereksiz hám tuwrıdan-tuwrı xabarlar",
    b: "Keńeytirilgen material",
    c: "Ǵalabalıq tayarlanǵan xabarlar",
    d: "Tosınarlı usınıslar"
  },
  {
    quostion: "Blog ne?",
    a: "Online maqala hám jazıwlar platformasi",
    b: "video platformasi",
    c: "Oyın saytı bolıp tabıladı",
    d: "Satıp alıw ushın Web-sayt"
  },
  {
    quostion: " Cifrlı hújjetlerdiń tiykarǵı formatları qaysılar?",
    a: " Barlıq juwaplar tuwrı",
    b: " JPEG, PNG, PDF",
    c: " MP3, WAV, TXT",
    d: " DOCX, XLSX, PPT"
  },
  {
    quostion: "Kompaniyalar bazalarında qanday sistemalardan paydalanıladı?",
    a: "Maǵlıwmatlar bazası",
    b: "E-pochta",
    c: "Dawıslı programmalar",
    d: "Grafik dizayn"
  },
  {
    quostion: "DDoS hújimi ne?",
    a: "Bir waqtıniń ózinde kóp trafik jıberiw arqalı xızmetti óshiriw",
    b: "Tarmaq tezligin kemeytiw",
    c: "Maǵlıwmatlardı shifrlaw",
    d: "Maǵlıwmatlardı urlaw"
  },
  {
    quostion: "SEO ne?",
    a: "Qıdırıw sistemaların optimallastırıw",
    b: "Online satıp alıw",
    c: "Social tarmaqlarda reklama",
    d: "Elektron pochta marketingi"
  },
  {
    quostion: "E-pochta arqalı xabarlar qanday etip uzatıladı?",
    a: "Internet arqalı",
    b: "Tek ǵana cifrlı formatda",
    c: "Joqarı tezlikte",
    d: "Hesh qanday platformadan uzatıw múmkin emes"
  },
  {
    quostion: " Xakerlar qanday maqsetlerde isleydi?",
    a: " Jaman niyetli yamasa qızıǵıwshılıq ushın sistemalarǵa hújim qılıw",
    b: " Maǵlıwmatlardı qorǵaw",
    c: " Kompyuter programmaların islep shıǵıw",
    d: " Internet xızmetlerin jaqsılaw"
  },
  {
    quostion: "Cloud (bult) texnologiyası ne?",
    a: "Serverde saqlanǵan maǵlıwmatlarǵa internet arqalı kirisiw",
    b: "Shimdiy baylanıs texnologiyası",
    c: "Maǵlıwmattı offline saqlaw",
    d: "Ata-analar sisteması"
  },
  {
    quostion: "Paydalanıwshı, kompyuterde qanday etip programma qıdıradı?",
    a: "Barlıq juwaplar tuwrı",
    b: "Fayl menejeri arqalı",
    c: "Internet arqalı",
    d: "Kompaniyalar arxivı"
  },
  {
    quostion: "Dawıslı programmalar neni ańlatadı?",
    a: "Programmalıq támiynat arqalı dawıslı baylanıslar",
    b: "Dawıslı muzıkalar prezentaciyası",
    c: "Dawıslı hújjetlerdi tayarlaw",
    d: "Dawıslı oyınlar"
  },
  {
    quostion: "Antivirus programmaları qanday hújimlerden qorǵawlaydı?",
    a: "A hám C juwapları",
    b: "Kompyuter virusları",
    c: "Teńiz tasqınları",
    d: "Kiberhujumlar"
  },
  {
    quostion: " Zamanagóy Tabletlardagi tiykarǵı operatsion sistemalar qaysı?",
    a: " Android hám iOS",
    b: " Windows hám Linux",
    c: " Unix hám Solaris",
    d: " MS-DOS hám Windows"
  },
  {
    quostion: "Qaysı programma járdeminde súwretti tahrir qılıw múmkin?",
    a: "Adobe Photoshop",
    b: "Microsoft Word",
    c: "Notepad",
    d: "Internet Browsing"
  },
  {
    quostion: "Antena ne?",
    a: "Radio signalın tarqatıw jáne qabıllaw",
    b: "Belgilerdi tarqatıw",
    c: "Aǵıslardı alınǵan signalǵa aylandırıw",
    d: "Programmalıq támiynattı ornatıw"
  },
  {
    quostion: " Mobil qosımshalar qaysı platformalarda ámeldegi?",
    a: " Barlıq juwaplar tuwrı",
    b: " Android",
    c: " iOS",
    d: " Windows"
  },
  {
    quostion: " Kompyuterdegi saqlaw yadı qanday olshenedi?",
    a: " Báyitlerde",
    b: " vattlarda",
    c: " Tezlikte",
    d: " waqıt menen"
  },
  {
    quostion: "Bul programmalardan qay-qaysısı grafik dizayn ushın qollanıladı?",
    a: "Adobe Illustrator",
    b: "Microsoft Excel",
    c: "Dropbox",
    d: "Microsoft Access"
  },
  {
    quostion: "Paroldıń mánisi qanday etip asıriladı?",
    a: "Álippe, nomerler hám arnawlı belgilerdi birlestiriw arqalı",
    b: "Ańsat tahmin etiletuǵın etip",
    c: "Ush hár qıylı belgilerdi isletmaslik arqalı",
    d: "Oqılıwı ańsat bolıwı arqalı"
  },
  {
    quostion: "2 FA (eki faktorlı autentifikatsiya) ne?",
    a: "Paydalanıwshınan eki qıylı maǵlıwmat soraw procesi",
    b: "Anglichan tilinde onlayn kurs",
    c: "Biometrik qadaǵalaw",
    d: "Paroldı qayta qayta tiklew procesi"
  },
  {
    quostion: "SMTP qanday protokol esaplanadı?",
    a: "Elektron pochta uzatıw protokolı",
    b: "Basqarıw protokolı",
    c: "Tezlikti asırıw protokolı",
    d: "Tólewlerdi basqarıw protokolı"
  },
  {
    quostion: "Kompyuter qáwipsizligin asırıw ushın qaysı usınıslar ámeldegi?",
    a: "Barlıq juwaplar tuwrı",
    b: "Tuwrı parollar jaratıw",
    c: "Antivirus programmasın ornatıw",
    d: "Sistemanı jańalap turıw"
  },
  {
    quostion: " Maǵlıwmatlardı iflash usılında qaysı programma qollanıladı?",
    a: " Shifrlaw programması",
    b: " Tezlikti asırıw programmaları",
    c: " Antivirus programması",
    d: " Maǵlıwmatlar bazası"
  },
  {
    quostion: "Web-sayttıń júklew tezligin ólsheytuǵın qurallar arasında qaysı ámeldegi?",
    a: "Google PageSpeed Insights",
    b: "Photoshop",
    c: "Excel",
    d: "FTP programması"
  },
  {
    quostion: "HTML ne?",
    a: "Web-saytlar jaratıw ushın programmalastırıw tili",
    b: "Dawıslı programmalastırıw",
    c: "Maǵlıwmatlardı saqlaw",
    d: "Grafika jaratıw"
  },
  {
    quostion: "QR kodlar ne ushın arnalǵan?",
    a: "Maǵlıwmatlardı tez toplaw",
    b: "video júklew",
    c: "Dawıslı xızmetler ushın",
    d: "Telefon programmaların ornatıw"
  },
  {
    quostion: "Kompyuterdegi 'RAM' ne?",
    a: "Maǵlıwmatlardı waqtınshalıq saqlaw ushın kerek bolǵan yad",
    b: "Diskta saqlanatuǵın maǵlıwmatlar",
    c: "Internetdegi tezlik",
    d: "Kompyuterdiń tiyisli programmaları"
  },
  {
    quostion: " Qáwipsizlik diywalları (firewalls) qanday isleydi?",
    a: " Belirli maǵlıwmatlar hám paketlerge kirisiwdi chekleydi",
    b: " Internetge jalǵanıwdı chekleydi",
    c: " Kompyuter qátelerin dúzetedi",
    d: " Antivirus programmaların basqaradi"
  },
  {
    quostion: "Cifrlı suwretler qanday formatlarda ámeldegi?",
    a: "TIFF, JPEG, PNG",
    b: "Gif, BMP, WAV",
    c: "PDF, DOCX, PPT",
    d: "HTML, XML, JSON"
  },
  {
    quostion: "Ǵalaba xabar Web saytlari qaysı qaǵıydalardı qabıl etedi?",
    a: "Barlıq juwaplar tuwrı",
    b: "Jańalıqlardı usınıw",
    c: "Paydalanıwshı pikirlerin inabatqa alıw",
    d: "Ínteraktiv kontent"
  },
  {
    quostion: "Elektron pochta arqalı maǵlıwmatlardı almaslaw processinde qaysı usıldan paydalanıladı?",
    a: "MIME (Multipurpose Internet Mail Extensions)",
    b: "Kesh",
    c: "FTP",
    d: "SSH (Secure Shell)"
  },
  {
    quostion: "Qaysı programma HTML kodın oqıydı hám kórsetedi?",
    a: "Web-brauzer",
    b: "Operativ xabarnoma",
    c: "Cifrlı hújjetler",
    d: "Dawıslı programmalar"
  },
  {
    quostion: " Hújjetlerdi bolıwısh ushın qaysı platformalardan paydalanıw múmkin?",
    a: " Barlıq juwaplar tuwrı",
    b: " Google Drive",
    c: " Dropbox",
    d: " OneDrive"
  },
  {
    quostion: "SQL ne?",
    a: "Maǵlıwmatlar bazasın basqarıw sisteması ushın soraw tili",
    b: "Statistika platformasi",
    c: "Programmalastırıw tili",
    d: "Cifrlı suwretler menen islew usılı"
  },
  {
    quostion: "Web sistemalarda maǵlıwmatlar bazası qaysı maqsetlerde qollanıladı?",
    a: "Paydalanıwshı maǵlıwmatların saqlaw",
    b: "Jańalıqlar prezentaciyası",
    c: "Grafik dizayn",
    d: "Operatsion sistemanı jańalaw"
  },
  {
    quostion: "Kompyuter virusları neni ańlatadı?",
    a: "Avtomatikalıq túrde tarqalatuǵın zıyanlı kod",
    b: "Kompyuterdegi programmalar",
    c: "Paydalanıwshı maǵlıwmatların urlaw",
    d: "Cifrlı maǵlıwmatlar"
  },
  {
    quostion: "Data mınıń (maǵlıwmatlardı qazıp alıw) qaysı maqsette qollanıladı?",
    a: "Úlken maǵlıwmatlardan paydalı maǵlıwmatlardı alıw",
    b: "Cifrlı esap -kitaplar",
    c: "Grafik dizayn",
    d: "Internette jańalıqlar tarqatıw"
  },
  {
    quostion: "Cloud computing (bultlı esaplaw) qaysı múmkinshiliklerdi usınıs etedi?",
    a: "Maǵlıwmatlardı saqlaw hám basqarıw ushın aralıqtan serverler",
    b: "Tezlikti asırıw arqalı programmalardı oqıw",
    c: "Kompyuterde fizikalıq tárepten jaylastırılǵan programmalar",
    d: "Paydalanıwshılarǵa kompyuter programmasın basqarıw"
  },
  {
    quostion: "Answer",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
];

answersDB().forEach((item, index) => {
  const container = document.createElement('div')

  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})

// elHtml
const elButton = document.querySelector('#generate')
const elAnswerContent = document.querySelector('.result')
// const elsAnswers = document.querySelectorAll('.js-buttons')
// console.log(elsAnswers);

elAnswerContent.innerHTML = ''
const buttonNumber = []

headerContent()
counter(25)
createSendButton('div', 'button-submit', 'Yakunlash', elAnswerContent)
// When clicked, background changed other color
if(elButton) {
  elButton.addEventListener('click', () => {
    const button = document.createElement('button')
    button.classList.add('button-primary')
    button.textContent = 26

    elAnswerContent.appendChild(button)
  })
}

// Clicker function
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-primary')) {
      evt.target.classList.add('background-color')
    }
  })
}

// Generate 50 answers
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-submit')) {
      elAnswerContent.innerHTML = ''

      headerContent()
      counter(50)
      createSendButton('div',
        'button-submit',
        'Yakunlash',
        elAnswerContent
      )
    }
  })
}


// ------------------========= FUNCTIONS START =======-------------

// BUTTON counter
function counter(count) {
  for(let i = 1; i <= count; i++) {
    buttonNumber.push(i)
    createButton()
  }
}


// CREAT BUTTON FUNCTION
function createButton() {
  const button = document.createElement('button')
    button.classList.add('button-primary', 'js-buttons')
    elAnswerContent.appendChild(button)

  buttonNumber.forEach(item => {
    button.textContent = item
  })
}


// Content header maker
function headerContent() {
  const span = document.createElement('span')
  span.classList.add('answer')

  span.innerHTML = `
    <a href="file/novaya.txt" class="answer__link" target="_blank">Javoblar
    </a>
  `
  elAnswerContent.appendChild(span)
}

// CREATE SEND BUTTON
function createSendButton(div, clasName, text, append) {
  div = document.createElement(div)
  div.classList.add(clasName)
  div.style.textAlign = 'center'
  div.textContent = text
  append.appendChild(div)
}

// ------------------========= FUNCTIONS END =======-------------