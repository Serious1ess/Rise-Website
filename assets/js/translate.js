var $langData = {};
if (getCookie("lang")) {
  var $userLang = getCookie("lang");
} else {
  $userLang = "ar";
}
var $hrefLink = "./assets/css/style.css";
$langData.en = {
  TRKSH: "Turkish",
  WPLNCMPGNSTHTCMPNSAPPRCTE: "Empower Your Brand with our Impactful Campaigns",
  ABT: "About",
  SRVCS: "Services",
  FTRS: "Features",
  PRJCTS: "Projects",
  CONTACTUS: "Contact Us",
  ENGLSH: "English",
  ARBC: "Arabic",
  SENDADIRECTEMAIL: "Send Direct Email",
  NAME: "Name:",
  EMAIL: "Email:",
  YOURMESSAGE: "Your message",
  SENDMESSAGE: "Send Message",
  WHYUS: "Why Us",
  LRNMR: "Learn More",
  strturrod: "Start your road to success with us",
  woffrsltn:
    "We offer innovative and effective solutions in programming, marketing and integrated media services",
  whydscr:
    "Our team boasts an extensive and illustrious track record, with years of invaluable experience in our field of work At RISE, we believe that innovation is what sets us apart and makes us a great team. We are committed to achieving your goals and vision through innovation and dedication.",

  prjclnch: "Projects Completed",
  YRSEPR: "years of Experience",
  ORSRVS: "Our Services",

  BLDWBS: "Build Creative Websites",
  BLDWBDES:
    "It is necessary to have an optimized website for that we have a team of professional developers and programmers with extensive experience in the field of programming and web development.",

  VSID: "Visual Identity Design",
  VSIDDES:
    "We offer an integrated package of design services, starting from logo design to creating a comprehensive visual identity for your brand, in addition to designing advertisements and various publications on social media platforms and various digital platforms.",

  CRADCMP: "Create Advertising Campaigns",
  CRADCMPDES:
    "We create comprehensive and effective advertising campaigns for your brand on social media platforms and search engines. We start by analyzing competitors and identifying your current capabilities, then we create and manage your advertising campaigns suitable for your various digital platforms",

  CNMRKDES: "Content Marketing and Design",
  CNMRKDESDES:
    "Our e-marketing team provides an integrated strategic plan for your blog, starting with selecting keywords that are important and appropriate for your business. We will create featured articles that meet  SEO, to achieve the highest level of ranking in search results",

  SCLMNG: "Social Media Management",
  SCLMNGDES:
    "This service includes creating and managing our clients' social media accounts, creating attractive and appropriate content for different platforms, interacting with the public and responding to inquiries, and monitoring and analyzing results to professionally improve future campaigns.",

  FLMEDVD: "Filming and Editing Videos",
  FLMEDVDDES:
    "We offer creative and professional video production services, from creative thinking and scripting to shooting and editing. Whether it's promotional, educational, or entertaining videos, we have the experience to turn your ideas into exciting movies that attract audiences' attention",

  CNTNDV: "Content Development",
  CNTNDVDES:
    "We have a team of professional writers in writing content, whether that content is articles, blogs, scenarios or advertising texts. We strive to provide inspiring and engaging content that meets the needs and desires of your audience",

  PSTDLSUP: "Post Delivery Support",
  PSTDLSUPDES:
    "We believe that cooperation with customers does not end after the project is delivered. Rather, we provide continuous support after delivery to ensure that the project continues to run smoothly and meet the customer's needs.",

  ORPRJCT: "Our Projects",

  ORFTRS: "Our Features",
  KIDSRANBOWPROJCTTXT:
    "Kids Rainbow is a safe and supportive environment that provides learning opportunities for refugees children approaching school age in Turkey. Our mission is to fight for equal access to quality education",
  OMNFOODPROJCTTEXT:
    "Sultana Caravan Company is strong in Turkey regarding global production and is ready to accompany you and your dreams all over the world. If you are looking for a unique and exciting experience, our caravans offer you the perfect combination of comfort and freedom.",
  PORTFOLIOPROJCTTEXT:
    "Passionate front-end developer with a desire to learn andgrow in a collaborative team environment. Skilled in HTML,CSS, and JavaScript. Excels at creating pixel-perfectdesigns and working with cross-browser compatibility issues",
  PHNENMBR: "Phone Number",
  BRVSAPROJCTTXT:
    "Breevos  Store A unique brand under the RISE MEDYA umbrella, founded in 2023, your ultimate destination for all things beauty and self-care. At Breevos, we believe that beauty is more than just skin deep – it’s a reflection of your unique essence, your confidence, and your journey to self-love and empowerment",
};

$langData.ar = {
  TRKSH: "التركية",
  WPLNCMPGNSTHTCMPNSAPPRCTE: "عزز علامتك التجارية بحملاتنا المؤثرة",
  SRVCS: "الخدمات",
  FTRS: "الميزات",
  PRJCTS: "المشاريع",
  CONTACTUS: "تواصل معنا",
  ENGLSH: "الإنجليزية",
  ARBC: "العربية",
  ABT: "حول",
  SENDADIRECTEMAIL: "إرسال بريد إلكتروني مباشر",
  NAME: "الاسم:",
  EMAIL: "البريد الإلكتروني:",
  YOURMESSAGE: " رسالتك  ",
  SENDMESSAGE: "تواصل معنا",
  WHYUS: "لماذا نحن",
  strturrod: "ابدأ طريقك للنجاح معنا",
  woffrsltn:
    "نقدم حلولاً مبتكرة وفعالة في البرمجة و التسويق والخدمات الإعلامية المتكاملة",
  LRNMR: "المزيد",
  whydscr:
    "يتمتع فريقنا بسجل حافل ولامع ، مع سنوات من الخبرة التي لا تقدر بثمن في مجال عملنا في RISE ، نعتقد أن الابتكار هو ما يميزنا ويجعلنا فريقًا رائعًا. نحن ملتزمون بتحقيق أهدافك ورؤيتك من خلال الابتكار والتفاني.",
  prjclnch: "المشاريع المنجزة",

  YRSEPR: "سنوات من الخبرة",
  ORSRVS: "خدماتنا",

  BLDWBS: "إنشاء المواقع الإلكترونية",
  BLDWBDES:
    "من الضروري أن يكون لديك موقع ويب محسّن لذلك لدينا فريق من المطورين والمبرمجين المحترفين وذوي الخبرة الواسعة في مجال البرمجة وتطوير الويب.",

  VSID: "تصميم الهوية البصرية ",
  VSIDDES:
    "نقدم حزمة متكاملة من خدمات التصميم بدءًا من تصميم الشعار (اللوغو) وصولًا إلى إنشاء هوية بصرية شاملة لعلامتك التجارية، بالإضافة إلى تصميم الإعلانات والمنشورات المختلفة على منصات التواصل الاجتماعي والمنصات الرقمية المختلفة",

  CRADCMP: "إنشاء حملات إعلانية ",
  CRADCMPDES:
    "نحن نقوم بإنشاء حملات إعلانية شاملة وفعالة لعلامتك التجارية على منصات التواصل الاجتماعي ومحركات البحث. نبدأ بتحليل المنافسين وتحديد إمكانياتك الحالية، ثم نقوم بإنشاء وإدارة حملاتك الإعلانية المناسبة لمختلف منصاتك الرقمية",

  CNMRKDES: "تسويق وتصميم المحتوى",
  CNMRKDESDES:
    "يقدم فريقنا المتخصص في التسويق الإلكتروني خطة استراتيجية متكاملة لمدونتك، بدءًا من اختيار الكلمات المفتاحية المهمة والمناسبة لنشاطك التجاري. سنعمل على إنشاء مقالات مميزة تلبي معايير محرك البحث، لتحقيق أعلى مستوى من الترتيب في نتائج البحث",

  SCLMNG: "إدارة وسائل التواصل الاجتماعي",
  SCLMNGDES:
    "تتضمن هذه الخدمة إنشاء وإدارة حسابات وسائل التواصل الاجتماعي الخاصة بعملائنا، وإنشاء محتوى جذاب وملائم للمنصات المختلفة، والتفاعل مع الجمهور والرد على الاستفسارات، ومراقبة وتحليل النتائج لتحسين الحملات المستقبلية بشكل احترافي",

  FLMEDVD: "تصوير وتعديل الفيديوهات ",
  FLMEDVDDES:
    " نقدم خدمات إنتاج الفيديو المبدعة والاحترافية، بدءًا من التفكير الإبداعي والسيناريو وصولًا إلى التصوير والتحرير. سواء كانت تلك الفيديوهات ترويجية، أو تعليمية، أو ترفيهية، نحن نملك الخبرة لتحويل أفكاركم إلى أفلام مثيرة تلفت انتباه الجماهير",

  CNTNDV: "تطوير المحتوى ",
  CNTNDVDES:
    "لدينا فريق من الكتاب المحترفين في كتابة المحتوى سواء كان هذا المحتوى مقالات أو مدونات أو سيناريوهات أو نصوص إعلانية. نسعى جاهدين لتوفير محتوى ملهم وجذاب يلبي احتياجات ورغبات جمهورك",

  PSTDLSUP: "دعم ما بعد التسليم",
  PSTDLSUPDES:
    "نؤمن بأن التعاون مع العملاء لا ينتهي بعد تسليم المشروع، بل نقدم دعمًا مستمرًا بعد التسليم للتأكد من استمرار عمل المشروع بسلاسة وتلبية احتياجات العميل",

  ORPRJCT: "مشاريعنا",

  ORFTRS: "مهاراتنا",
  KIDSRANBOWPROJCTTXT:
    "Kids Rainbow هي بيئة آمنة وداعمة توفر فرص التعلم للأطفال اللاجئين الذين يقتربون من سن المدرسة في تركيا. مهمتنا هي الكفاح من أجل المساواة في الحصول على تعليم جيد",
  OMNFOODPROJCTTEXT:
    "شركة سلطانه كرفان قوية في تركيا بالنسبة للإنتاج العالمي وجاهزة لمرافقتك ومرافقة أحلامك في جميع أنحاء العالم فإن كنت تبحث عن تجربة فريدة ومثيرة، فإن كرفاناتنا تقدم لك المزيج المثالي بين الراحة والحرية.",
  PORTFOLIOPROJCTTEXT:
    "مطور الواجهة الأمامية شغوف برغبة في التعلم والنمو في بيئة جماعية تعاونية. ماهر في HTML و CSS وجافا سكريبت. يتفوق في إنشاء تصميمات مثالية للبكسل والعمل مع مشكلات التوافق عبر المستعرضات",
  PHNENMBR: "رقم التليفون",
  BRVSAPROJCTTXT:
    "متجر بريفوس علامة تجارية فريدة من نوعها تحت مظلة RISE MEDYA، تأسست عام 2023، وجهتك النهائية لكل ما يتعلق بالجمال والعناية الذاتية. في بريفوس، نؤمن بأن الجمال ليس مجرد عمق للبشرة - إنه انعكاس لجوهرك الفريد، وثقتك، ورحلتك إلى حب الذات والتمكين.",
};
$langData.tr = {
  WPLNCMPGNSTHTCMPNSAPPRCTE: "Etkili Kampanyalarla Markanızı Güçlendirin",
  ABT: "Hakkında",
  SRVCS: "Hizmetler",
  FTRS: "Özellikler",
  PRJCTS: "Projeler",
  CONTACTUS: "İletişim",
  ENGLSH: "İngilizce",
  ARBC: "Arapça",
  SENDADIRECTEMAIL: "Doğrudan E-Posta Gönder",
  NAME: "İsim:",
  EMAIL: "E-posta:",
  YOURMESSAGE: "Mesajınız",
  SENDMESSAGE: "Mesaj Gönder",
  WHYUS: "Neden Biz",
  LRNMR: "Daha Fazla Bilgi Edinin",
  strturrod: "Başarı yolculuğunuza bizimle başlayın",
  woffrsltn:
    "Programlama, pazarlama ve entegre medya hizmetleri alanında yenilikçi ve etkili çözümler sunuyoruz.",
  whydscr:
    "Ekibimiz, çalışma alanımızda yıllara dayanan değerli deneyime sahip geniş ve parlak bir geçmişe sahiptir. RISE olarak, bizi diğerlerinden farklı kılan ve harika bir ekip olmamızı sağlayan şeyin yenilik olduğuna inanıyoruz. Hedeflerinize ve vizyonunuza yenilik ve özveri ile ulaşmaya kararlıyız.",

  prjclnch: "Tamamlanan Projeler",
  YRSEPR: "Yıllık Deneyim",
  ORSRVS: "Hizmetlerimiz",

  BLDWBS: "Yaratıcı Web Siteleri Oluşturma",
  BLDWBDES:
    "Optimize edilmiş bir web sitesine sahip olmak gerekir; bu nedenle programlama ve web geliştirme alanında geniş deneyime sahip profesyonel geliştiriciler ve programcılardan oluşan bir ekibimiz bulunmaktadır.",

  VSID: "Görsel Kimlik Tasarımı",
  VSIDDES:
    "Markanız için logo tasarımından çeşitli dijital platformlarda reklam ve yayınlar oluşturmaya kadar entegre bir tasarım hizmetleri paketi sunuyoruz.",

  CRADCMP: "Reklam Kampanyaları Oluşturma",
  CRADCMPDES:
    "Markanız için kapsamlı ve etkili reklam kampanyaları oluşturuyoruz. Rekabet analizi yapmaya başlayarak mevcut kapasitelerinizi belirliyoruz ve ardından çeşitli dijital platformlarınıza uygun reklam kampanyaları oluşturup yönetiyoruz.",

  CNMRKDES: "İçerik Pazarlama ve Tasarımı",
  CNMRKDESDES:
    "E-pazarlama ekibimiz, işletmeniz için önemli ve uygun anahtar kelimeleri seçerek blogunuz için entegre bir stratejik plan sağlar. SEO'ya uygun öne çıkan makaleler oluşturur ve arama sonuçlarında en üst sıralara çıkmayı hedefleriz.",

  SCLMNG: "Sosyal Medya Yönetimi",
  SCLMNGDES:
    "Bu hizmet, müşterilerimizin sosyal medya hesaplarını oluşturmayı ve yönetmeyi, farklı platformlar için çekici ve uygun içerik oluşturmayı, halkla etkileşimde bulunmayı ve soruları yanıtlamayı, sonuçları izlemeyi ve analiz etmeyi içerir ve gelecekteki kampanyaları profesyonel olarak geliştirmeye yardımcı olur.",

  FLMEDVD: "Video Çekimi ve Düzenleme",
  FLMEDVDDES:
    "Yaratıcı ve profesyonel video üretim hizmetleri sunuyoruz. Tanıtım, eğitim veya eğlence amaçlı videolar olsun, fikirlerinizi ilgi çekici filmlere dönüştürmek için deneyime sahibiz.",

  CNTNDV: "İçerik Geliştirme",
  CNTNDVDES:
    "Makaleler, bloglar, senaryolar veya reklam metinleri gibi içerikleri yazma konusunda profesyonel bir yazar ekibimiz bulunmaktadır. Hedef kitlenizin ihtiyaç ve isteklerini karşılayan ilham verici ve etkileşimli içerikler sağlamak için çaba gösteriyoruz.",

  PSTDLSUP: "Teslim Sonrası Destek",
  PSTDLSUPDES:
    "Projelerin teslim edilmesinden sonra müşterilerle işbirliğinin sona ermediğine inanıyoruz. Müşteri ihtiyaçlarını karşılamaya ve projenin sorunsuz bir şekilde devam etmesini sağlamaya yönelik sürekli destek sağlıyoruz.",

  ORPRJCT: "Projelerimiz",

  ORFTRS: "Özelliklerimiz",
  KIDSRANBOWPROJCTTXT:
    "Kids Rainbow, Türkiye'deki okul çağına yaklaşan mülteci çocuklar için öğrenme fırsatları sunan güvenli ve destekleyici bir ortamdır. Misyonumuz, kaliteli eğitime eşit erişim için mücadele etmektir.",
  OMNFOODPROJCTTEXT:
    "Sultana Caravan Company, global üretim konusunda Türkiye'de güçlü olup, dünyanın her yerinde size ve hayallerinize eşlik etmeye hazırdır. Eşsiz ve heyecan verici bir deneyim arıyorsanız karavanlarımız size konfor ve özgürlüğün mükemmel birleşimini sunuyor.",
  PORTFOLIOPROJCTTEXT:
    "Öğrenmeye ve işbirlikçi bir takım ortamında büyümeye istekli tutkulu bir ön uç geliştirici. HTML, CSS ve JavaScript konusunda uzmanlaşmıştır. Piksel-perfect tasarımlar oluşturmada ve tarayıcı uyumluluk sorunlarıyla çalışmada başarılıdır.",
  TRKSH: "Türkçe",
  PHNENMBR: "Telefon numarası",
  BRVSAPROJCTTXT:
    "Breevos Mağazası 2023 yılında kurulan RISE MEDYA şemsiyesi altında benzersiz bir marka, güzellik ve kişisel bakımla ilgili her şey için nihai varış noktanız. Breevos'ta güzelliğin sadece derinin ötesinde bir şey olduğuna inanıyoruz; bu, benzersiz özünüzün, güveninizin ve kendinizi sevme ve güçlenme yolculuğunuzun bir yansımasıdır.",
};

let langSelector = document.querySelector("#language-picker-select");
langSelector.addEventListener("change", (e) => {
  let value = e.currentTarget.value;
  if (value === "en") {
    $userLang = "en";
    $hrefLink = "./assets/css/style.css";
  } else if (value === "tr") {
    $userLang = "tr";
    $hrefLink = "./assets/css/style.css";
  } else {
    $userLang = "ar";
    $hrefLink = "./assets/css/rtl.css";
  }
  changLang();
  setCookie("lang", $userLang, 30);
});

function changLang() {
  let allText = document.querySelectorAll("[translate]");
  for (let text of allText) {
    let translate = text.getAttribute("translate");
    if (text.getAttribute("placeholder")) {
      text.setAttribute("placeholder", lang(translate));
    } else text.innerText = lang(translate);
  }
  if ($userLang === "ar") $hrefLink = "./assets/css/rtl.css";
  else $hrefLink = "./assets/css/style.css";
  switchStylesheet($hrefLink);
  langSelector.value = $userLang;
}
function lang(code, langCode = $userLang) {
  if ($langData && $langData[langCode]) return $langData[langCode][code];
  else return code;
}
function switchStylesheet(stylesheetPath) {
  // Get the <link> element with the ID "css-stylesheet"
  var stylesheetLink = document.getElementById("css-stylesheet");

  // Change the href attribute to the desired CSS file path
  stylesheetLink.href = stylesheetPath;
}

function StringToTranslateCode(input) {
  // Convert the string to lowercase
  let processedString = input.toLowerCase();

  // Split the string into an array of words
  const words = processedString.split(" ");

  // Remove specific characters except for the first and last characters of each word
  const charactersToRemove = ["i", "o", "u", "a", "e"];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let processedWord = word.charAt(0);
    for (let j = 1; j < word.length - 1; j++) {
      if (!charactersToRemove.includes(word.charAt(j))) {
        processedWord += word.charAt(j);
      }
    }
    processedWord += word.charAt(word.length - 1);
    words[i] = processedWord.toUpperCase();
  }

  // Join the words back into a single string
  processedString = words.join("");
  // processedString.replace(/\s/g, '');
  return processedString;
}
// $userLang = "ar";
changLang();
