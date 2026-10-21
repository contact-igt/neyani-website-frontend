// ─── Neyani Eye Hospital — Content Source of Truth ───────────────────────────
// All hospital facts live here. Do NOT scatter content across components.

export const hospital = {
  name: "Neyani Eye Hospital",
  tagline: "Your Vision, Our Mission",
  headline: "Advanced Eye Care Tailored to You",
  subheadline:
    "From precision cataract surgery to comprehensive retina care, Neyani Eye Hospital brings specialist-level ophthalmology to Gandhidham and the Kutch region.",

  phone: "+91 93274 33816",
  phoneUrl: "tel:+919327433816",
  whatsappUrl:
    "https://wa.me/919327433816?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Neyani%20Eye%20Hospital.",

  address:
    "Plot No. 249, Gayatri Mandir Road, Opp. Kutch Uday, Sector 1A, Gandhidham, Gujarat 370201",

  hours: {
    weekdays: "Monday – Saturday",
    morning: "10:30 AM – 1:00 PM",
    evening: "5:30 PM – 8:00 PM",
    sunday: "Closed",
    emergency: "Emergency availability on call",
  },

  languages: ["English", "Hindi", "Gujarati"],

  established: "2019",

  stats: [
    { value: "Est. 2019", label: "Serving Gandhidham since" },
    { value: "80,000+", label: "Patients treated" },
    { value: "30,000+", label: "Cataract surgeries performed" },
  ],

  doctors: [
    {
      id: "yajuvendra-singh-rathore",
      name: "Dr. Yajuvendra Singh Rathore",
      credentials: "MBBS, MS Ophthalmology",
      fellowships:
        "Fellow Phaco & Refractive, H.V. Desai Eye Hospital, Pune · FICO (UK)",
      role: "Proprietor & Lead Surgeon",
      note: "Consultant Ophthalmologist",
    },
    {
      id: "urmil-shah",
      name: "Dr. Urmil Shah",
      credentials: "",
      fellowships: "",
      role: "Visiting Retina Specialist",
      note: "Visiting consultant — retinal and vitreoretinal surgery",
    },
    {
      id: "ankit-shah",
      name: "Dr. Ankit Shah",
      credentials: "",
      fellowships: "",
      role: "Visiting Pediatric Ophthalmologist & Squint Surgeon",
      note: "Visiting consultant — pediatric eye care and squint surgery",
    },
  ],

  priorityServices: [
    {
      id: "cataract",
      icon: "eye",
      title: "Cataract Surgery",
      description:
        "Using the Oertli Faros phacoemulsification system, we perform micro-incision cataract surgery (MICS) with topical anaesthesia — no injection in most suitable cases. The 1.6 mm technique means faster healing and minimal discomfort. Outcomes depend on individual examination.",
    },
    {
      id: "glaucoma",
      icon: "activity",
      title: "Glaucoma Diagnosis & Treatment",
      description:
        "Early detection changes outcomes in glaucoma. We offer comprehensive IOP measurement, visual field testing, optic disc evaluation, and medical or surgical management to help preserve your sight.",
    },
    {
      id: "retina",
      icon: "scan",
      title: "Diabetic Eye & Retina Care",
      description:
        "Diabetic retinopathy is a leading cause of preventable blindness. Regular retinal screening and prompt intervention — including laser photocoagulation — can protect your vision. Complex retinal and vitreoretinal surgeries are performed by our visiting retina specialist.",
    },
  ],

  mosaicServices: [
    {
      id: "pediatric",
      icon: "baby",
      title: "Pediatric Ophthalmology",
      description:
        "Children's eyes need specialist attention. From newborns to school-age children, we examine and manage squints, amblyopia, refractive errors, and congenital conditions. Complex squint surgeries are performed by our visiting pediatric surgeon.",
    },
    {
      id: "screening",
      icon: "monitor-check",
      title: "Eye Screening & Diagnostics",
      description:
        "Comprehensive eye exams including slit-lamp examination, retinoscopy, OCT, fundus photography, and visual field testing — under one roof.",
    },
    {
      id: "general",
      icon: "glasses",
      title: "General Eye Care",
      description:
        "Spectacle prescriptions, dry eye management, conjunctivitis, allergic eye disease, and routine annual checkups for the whole family.",
    },
    {
      id: "technology",
      icon: "cpu",
      title: "Technology-Driven Treatment",
      description:
        "Zeiss Visu 160 operating microscope, Oertli Faros phacoemulsification system, and advanced diagnostic imaging ensure precision at every step.",
    },
  ],

  techSpotlight: {
    heading: "The Technology Behind Your Care",
    intro:
      "Surgical outcomes in cataract care have improved dramatically with modern phacoemulsification platforms. At Neyani, we invest in systems that experienced surgeons trust.",
    items: [
      {
        title: "OERTLI FAROS — Phacoemulsification System",
        description:
          "Helps our doctors perform cataract surgery by removing the cloudy lens so it can be replaced with an artificial lens.",
        detail:
          "Helps our doctors perform cataract surgery by removing the cloudy lens so it can be replaced with an artificial lens.",
      },
      {
        title: "ZEISS VISU 160 — Surgical Microscope",
        description:
          "Gives our surgeons a clear, magnified view of the eye so they can work with precision during surgery.",
        detail:
          "Gives our surgeons a clear, magnified view of the eye so they can work with precision during surgery.",
      },
      {
        title: "LENSTAR PRO — Haag-Streit — Optical Biometer",
        description:
          "Helps our doctors measure important features of the eye and choose a suitable artificial lens before cataract surgery.",
        detail:
          "Helps our doctors measure important features of the eye and choose a suitable artificial lens before cataract surgery.",
      },
      {
        title: "ZEISS — OCT Imaging System",
        description:
          "Creates detailed images of the retina, helping our doctors examine the back of the eye and assess retinal health.",
        detail:
          "Creates detailed images of the retina, helping our doctors examine the back of the eye and assess retinal health.",
      },
      {
        title: "ZEISS Perimetry — Visual Field Analyzer",
        description:
          "Checks how well a person can see across their field of vision, helping our doctors assess and monitor conditions such as glaucoma.",
        detail:
          "Checks how well a person can see across their field of vision, helping our doctors assess and monitor conditions such as glaucoma.",
      },
      {
        title: "APPASAMY — YAG Laser System",
        description:
          "Helps doctors treat clouding that can sometimes develop behind an artificial lens after cataract surgery, when laser treatment is appropriate.",
        detail:
          "Helps doctors treat clouding that can sometimes develop behind an artificial lens after cataract surgery, when laser treatment is appropriate.",
      },
      {
        title: "ICARE — Tonometer",
        description:
          "Measures the pressure inside the eye, helping our doctors assess eye health and check for signs of problems such as glaucoma.",
        detail:
          "Measures the pressure inside the eye, helping our doctors assess eye health and check for signs of problems such as glaucoma.",
      },
      {
        title: "UNICOS UNIQUE-RK — Autorefractometer / Keratometer",
        description:
          "Measures the eye's focusing power and corneal curvature, helping our doctors assess vision and determine a suitable glasses prescription.",
        detail:
          "Measures the eye's focusing power and corneal curvature, helping our doctors assess vision and determine a suitable glasses prescription.",
      },
      {
        title: "KEELER — Indirect Ophthalmoscope",
        description:
          "Helps our doctors examine the retina and the back of the eye to assess eye health and look for possible problems.",
        detail:
          "Helps our doctors examine the retina and the back of the eye to assess eye health and look for possible problems.",
      },
    ],
    disclaimer:
      "Specific techniques and anaesthesia methods are determined after examination and depend on individual suitability. Your surgeon will explain your options at consultation.",
  },

  pediatricWarnings: [
    "Squinting or tilting the head to see clearly",
    "Sitting unusually close to screens or the television",
    "Frequent eye rubbing",
    "Headaches, especially after reading",
    "Difficulty reading the board at school",
    "Eyes that appear to be pointing in different directions",
  ],

  facilities: [
    "Dedicated paediatric examination lane",
    "OCT and fundus imaging",
    "Visual field analyser",
    "Oertli Faros phacoemulsification system",
    "Zeiss Visu 160 operating microscope",
    "Slit-lamp bio-microscopy",
    "Retinoscopy and refraction lane",
  ],

  insurance: {
    heading: "Insurance & TPA",
    summary:
      "We support eligible cashless and reimbursement claims through insurer and TPA networks, with guidance from our team at every step.",
    providers: [
      { name: "Star Health", type: "Insurer", logo: "/insurance/star-health.svg", scale: 1 },
      { name: "Tata AIG", type: "Insurer", logo: "/insurance/tata_aig.png", scale: 1 },
      { name: "ManipalCigna", type: "Insurer", logo: "/insurance/manipal.png", scale: 1.1 },
      { name: "Niva Bupa", type: "Insurer", logo: "/insurance/nivabupa.png", scale: 1 },
      { name: "IFFCO Tokio", type: "Insurer", logo: "/insurance/iffco.jpg", scale: 0.9 },
      { name: "Universal Sompo", type: "Insurer", logo: "/insurance/universal-sompo.svg", scale: 1 },
      { name: "Generali Central (formerly Future Generali)", type: "Insurer", logo: "/insurance/general_central.png", scale: 0.95 },
      { name: "HDFC ERGO", type: "Insurer", logo: "/insurance/hdfc_ergo.png", scale: 0.95 },
      { name: "Paramount TPA", type: "TPA", logo: "/insurance/paramount-tpa.png", scale: 1 },
      { name: "Medi Assist TPA", type: "TPA", logo: "/insurance/medi_assist.jpg", scale: 1.1 },
      { name: "Digit Insurance", type: "Insurer", logo: "/insurance/digit.png", scale: 0.95 },
      { name: "Ericson TPA", type: "TPA", logo: "/insurance/ericson.jpg", scale: 1.15 },
      { name: "FHPL TPA", type: "TPA", logo: "/insurance/fhpl.png", scale: 1.05 },
      { name: "Bajaj Allianz", type: "Insurer", logo: "/insurance/bajaj_alliance.png", scale: 1 },
      { name: "ICICI Lombard", type: "Insurer", logo: "/insurance/icici_lombard.jpg", scale: 1.45 },
      { name: "SBI General", type: "Insurer", logo: "/insurance/sbi_general.jpg", scale: 1.4 },
    ],
    body:
      "Neyani Eye Hospital works with several insurance companies and third-party administrators (TPAs). We can assist you in understanding your coverage and submitting documentation. Cashless approval is subject to your policy terms and the insurer's assessment — we cannot guarantee it in advance. Please bring your insurance card and documents at the time of consultation.",
    disclaimer:
      "Network status and cashless approval vary by policy and procedure. Please call us and verify coverage with your insurer before admission.",
  },

  testimonials: [
    { name: "Vipul Gajjar", source: "Justdial", url: "https://www.justdial.com/Gandhidham/Neyani-Eye-Hospital-Opposite-Kutch-Kala-Lilashah-Nagar-Gandhidham-Sector-12-C/9999P2836-2836-190406180514-F5C6_BZDET/reviews", quote: "The hospital felt clean, hygienic and easy to reach. The care taken with equipment made the whole visit reassuring." },
    { name: "Jesha Rabari", source: "Justdial", url: "https://www.justdial.com/Gandhidham/Neyani-Eye-Hospital-Opposite-Kutch-Kala-Lilashah-Nagar-Gandhidham-Sector-12-C/9999P2836-2836-190406180514-F5C6_BZDET/reviews", quote: "Skilled doctors, attentive staff and good supervision helped me feel supported throughout the treatment process." },
    { name: "Vasu V Bansal", source: "Justdial", url: "https://www.justdial.com/Gandhidham/Neyani-Eye-Hospital-Opposite-Kutch-Kala-Lilashah-Nagar-Gandhidham-Sector-12-C/9999P2836-2836-190406180514-F5C6_BZDET/reviews", quote: "The hospitality was excellent, and I found relief from my eye infection quickly after visiting the hospital." },
    { name: "Richa Jain", source: "Practo", url: "https://www.practo.com/kutch/hospital/neyani-eye-centre-rapar", quote: "My grandmother's cataract treatment was successful. We were happy with the explanation, friendliness and overall care." },
    { name: "Verified Patient", source: "Practo", url: "https://www.practo.com/kutch/hospital/neyani-eye-centre-rapar", quote: "My vision was clear from the first day after LASIK, and I was delighted to enjoy life without spectacles." },
    { name: "Harshad Thakkar", source: "Justdial", url: "https://www.justdial.com/Gandhidham/Neyani-Eye-Hospital-Opposite-Kutch-Uday-Gandhidham-Sector-1/9999P2836-2836-190406180514-F5C6_BZDET/amp", quote: "The diagnosis and treatment inspired confidence, with a well-equipped hospital and a cooperative, thoughtful team." },
    { name: "Ashok", source: "Justdial", url: "https://www.justdial.com/Gandhidham/Neyani-Eye-Hospital-Opposite-Kutch-Uday-Gandhidham-Sector-1/9999P2836-2836-190406180514-F5C6_BZDET/amp", quote: "My wife received thoughtful care for her eye operation. The doctor was well trained and the staff supported us throughout." },
    { name: "Shelley Joshi", source: "Justdial", url: "https://www.justdial.com/Gandhidham/Neyani-Eye-Hospital-Opposite-Kutch-Uday-Gandhidham-Sector-1/9999P2836-2836-190406180514-F5C6_BZDET/amp", quote: "The laser treatment was much quicker than I expected. The team helped me feel comfortable despite being nervous beforehand." },
  ],

  faqs: [
    {
      q: "Does cataract surgery hurt?",
      a: "Most patients are surprised by how comfortable the procedure is. We use topical anaesthetic drops in suitable cases, which eliminates the need for an injection around the eye. You may feel mild pressure, but pain is not expected. If you feel anxious, let us know — we will take care of you.",
    },
    {
      q: "How long does cataract surgery take?",
      a: "The surgical procedure itself typically takes 10–15 minutes per eye. You will spend additional time for preparation and monitoring before and after. Most patients are discharged the same day.",
    },
    {
      q: "When can I return to normal activities after cataract surgery?",
      a: "Recovery varies by individual. Many patients notice improved vision within a day or two. Your surgeon will give you specific guidance on activity restrictions based on your case.",
    },
    {
      q: "At what age should children have their first eye examination?",
      a: "We recommend a comprehensive eye check before your child starts school — or earlier if you notice any warning signs such as squinting, eye rubbing, or difficulty seeing the board.",
    },
    {
      q: "Is it safe to have eye surgery if I have diabetes?",
      a: "Diabetes can affect the eyes, and careful assessment is essential. Our team will evaluate the health of your retina and overall control before recommending any procedure. Please bring your recent blood sugar and HbA1c reports.",
    },
    {
      q: "Do you treat patients from outside Gandhidham?",
      a: "Yes. We regularly see patients from Adipur, Anjar, Bhachau, and across the Kutch region. Please call or WhatsApp us to schedule a convenient appointment time.",
    },
    {
      q: "Can I walk in, or do I need an appointment?",
      a: "Appointments are preferred and help us give you adequate time. Walk-ins are seen subject to availability. You can book quickly via WhatsApp or phone.",
    },
  ],

  doctorsFaqs: [
    {
      q: "Can I book an appointment with a specific doctor?",
      a: "Yes. When you book by phone or WhatsApp, let us know which doctor you would like to see and we will arrange a suitable appointment time.",
    },
    {
      q: "When are the visiting consultants available?",
      a: "Our visiting retina specialist and pediatric ophthalmologist see patients on scheduled consultation days. Please call the hospital to confirm upcoming dates and times.",
    },
    {
      q: "Which doctor should I see for my eye problem?",
      a: "If you are unsure, book a general eye examination first. After assessing your eyes, our team will guide you to the right specialist for cataract, retina, pediatric or squint care.",
    },
    {
      q: "Can I get a second opinion from your doctors?",
      a: "Yes. Please bring your previous prescriptions, scan reports and any medicines you are using so the doctor can review your history during the consultation.",
    },
    {
      q: "In which languages can I talk to the doctor?",
      a: "Consultations are supported in English, Hindi and Gujarati, so you and your family can clearly understand your diagnosis and treatment options.",
    },
    {
      q: "Do the doctors explain treatment costs and insurance?",
      a: "Your doctor will explain the recommended treatment, and our team can help you understand costs and support eligible insurance or TPA documentation.",
    },
  ],

  generalFaqs: [
    {
      q: "How often should I have a routine eye examination?",
      a: "Many adults benefit from an eye examination every one to two years, and more often if you have diabetes, a family history of eye disease, or are over 40. Your doctor will advise a suitable interval based on your eye health.",
    },
    {
      q: "My vision seems fine. Do I still need an eye check?",
      a: "Yes. Some eye conditions, such as glaucoma and early diabetic eye disease, may cause no symptoms at first. A routine examination can find changes before you notice them.",
    },
    {
      q: "Will I need eye drops during my examination?",
      a: "Dilating drops are sometimes needed to examine the back of the eye. They can blur your vision and make you sensitive to light for a few hours, so it is best not to drive yourself home after dilation.",
    },
    {
      q: "Can you treat red, itchy or watery eyes?",
      a: "Yes. We assess and manage common problems such as conjunctivitis, allergic eye disease and dry eye. Please book an examination rather than using eye drops without advice, as the right treatment depends on the cause.",
    },
    {
      q: "What should I bring to my appointment?",
      a: "Please bring your current glasses or contact lenses, a list of any medicines you take, previous eye reports or prescriptions, and your insurance details if applicable.",
    },
    {
      q: "Can I walk in, or do I need an appointment?",
      a: "Appointments are preferred and help us give you adequate time. Walk-ins are seen subject to availability. You can book quickly via WhatsApp or phone.",
    },
    {
      q: "Do you treat patients from outside Gandhidham?",
      a: "Yes. We regularly see patients from Adipur, Anjar, Bhachau, and across the Kutch region. Please call or WhatsApp us to schedule a convenient appointment time.",
    },
  ],

  retinaFaqs: [
    {
      q: "I have diabetes. How often should my retina be checked?",
      a: "Most people with diabetes should have a retinal examination at least once a year, even if their vision seems normal. Your doctor may advise more frequent checks if diabetic retinopathy or other changes are found.",
    },
    {
      q: "Are sudden floaters or flashes of light an emergency?",
      a: "A sudden increase in floaters, flashes of light, or a shadow or curtain across your vision can be a sign of a retinal tear or detachment. Please contact us or seek an eye examination urgently.",
    },
    {
      q: "What tests are done during a retina examination?",
      a: "A retina examination usually includes dilating eye drops, a detailed examination of the back of the eye, and imaging such as OCT scans and fundus photography. Your doctor will explain which tests are needed for you.",
    },
    {
      q: "Can I drive after my retina examination?",
      a: "Dilating drops can blur your vision and make you sensitive to light for a few hours. We recommend bringing someone with you or arranging transport, and carrying sunglasses for the journey home.",
    },
    {
      q: "Is laser treatment for the retina painful?",
      a: "Laser treatment is usually performed with numbing eye drops. Some people feel mild discomfort or brief stinging during treatment. Your doctor will explain what to expect before the procedure.",
    },
    {
      q: "Can vision lost to retinal disease be restored?",
      a: "It depends on the condition and how early it is treated. Some vision loss cannot be reversed, which is why early detection and timely treatment are important to protect the sight you have.",
    },
    {
      q: "Who performs retinal surgery at Neyani Eye Hospital?",
      a: "Complex retinal and vitreoretinal surgeries are performed by our visiting retina specialist. Your doctor will discuss whether surgery is recommended and explain the benefits, risks and recovery.",
    },
  ],

  glaucomaFaqs: [
    {
      q: "Can glaucoma be cured?",
      a: "Vision already lost to glaucoma usually cannot be restored. However, glaucoma can often be controlled with treatment and regular monitoring, which aims to slow or prevent further damage to the optic nerve.",
    },
    {
      q: "I have no symptoms. Do I still need a glaucoma check?",
      a: "Yes. Early glaucoma commonly causes no pain or noticeable vision change. Regular eye examinations are especially important if you are over 40, have a family history of glaucoma, have diabetes or have been told your eye pressure is high.",
    },
    {
      q: "What tests are done during a glaucoma assessment?",
      a: "An assessment typically includes eye-pressure (IOP) measurement, examination of the optic disc, OCT and fundus imaging, and visual field testing. Your doctor will explain which tests are needed for you.",
    },
    {
      q: "Will I need to use eye drops for life?",
      a: "Many people with glaucoma use eye drops long term to keep eye pressure under control. Your doctor will review how well treatment is working at each visit and may adjust it over time.",
    },
    {
      q: "When is glaucoma surgery recommended?",
      a: "Surgery may be considered when eye drops alone do not control eye pressure adequately, cannot be tolerated, or when the type or stage of glaucoma makes it the more suitable option. Your doctor will discuss the benefits and risks with you.",
    },
    {
      q: "How often will I need follow-up visits?",
      a: "Follow-up frequency depends on the type and stage of glaucoma and how stable your results are. Regular reviews allow pressure, imaging and visual field results to be compared over time.",
    },
    {
      q: "Is glaucoma hereditary?",
      a: "A family history of glaucoma increases your risk. If a parent or sibling has glaucoma, it is sensible to have your eyes checked regularly, even if your vision seems normal.",
    },
  ],

  corneaFaqs: [
    {
      q: "What does the cornea do?",
      a: "The cornea is the clear front window of the eye. It protects the eye and provides most of its focusing power, so even small changes in its shape or clarity can affect vision and comfort.",
    },
    {
      q: "What is corneal topography?",
      a: "Corneal topography is a painless imaging test that maps the shape and curvature of the cornea. It helps your doctor assess irregularities, plan treatment and monitor changes over time.",
    },
    {
      q: "Does a cornea examination hurt?",
      a: "No. A slit-lamp examination and corneal imaging are non-contact or very gentle. You may be given eye drops to help the examination, and most patients find it comfortable.",
    },
    {
      q: "Do I need a cornea check before cataract or refractive surgery?",
      a: "Yes, a cornea assessment is usually part of planning. It helps your surgeon judge corneal shape and health so the right lens and technique can be chosen for you.",
    },
    {
      q: "I wear contact lenses and my eyes are often red or irritated. Should I be concerned?",
      a: "Persistent redness, pain, light sensitivity or blurred vision should be checked promptly, as they can be signs of a corneal problem. Stop wearing lenses and book an examination.",
    },
    {
      q: "What is corneal cross-linking assessment?",
      a: "It checks the strength and shape of the cornea and helps your doctor monitor conditions where the cornea may change shape over time. Whether treatment is suitable is decided after examination.",
    },
    {
      q: "Can I walk in, or do I need an appointment?",
      a: "Appointments are preferred and help us give you adequate time. Walk-ins are seen subject to availability. You can book quickly via WhatsApp or phone.",
    },
  ],

  squintFaqs: [
    {
      q: "What is a squint?",
      a: "A squint, also called strabismus, is when the eyes do not line up and look in different directions. It can be constant or come and go, and can affect children and adults.",
    },
    {
      q: "What is lazy eye (amblyopia)?",
      a: "Amblyopia develops when vision in one eye does not mature clearly, often because the brain favours the other eye. It is most treatable when found early in childhood.",
    },
    {
      q: "Will my child grow out of a squint?",
      a: "Squints do not usually resolve on their own. An early examination is important, so any vision problem can be identified and treated while the visual system is still developing.",
    },
    {
      q: "How is a squint treated?",
      a: "Treatment depends on the type of squint and the child's vision. Options can include glasses, patching or other lazy-eye therapy and, when needed, surgery. Your specialist will explain the best option after examination.",
    },
    {
      q: "Is squint surgery safe for children?",
      a: "Squint surgery is a commonly performed procedure done under appropriate anaesthesia. Your surgeon will explain the benefits and risks for your child's case before any decision is made.",
    },
    {
      q: "Can adults have squint treatment?",
      a: "Yes. Adults with a squint can be assessed, and treatment options such as glasses, prisms or surgery may be considered depending on the cause and your eye health.",
    },
    {
      q: "Can I walk in, or do I need an appointment?",
      a: "Appointments are preferred and help us give you adequate time. Walk-ins are seen subject to availability. You can book quickly via WhatsApp or phone.",
    },
  ],

  pterygiumFaqs: [
    {
      q: "What is a pterygium?",
      a: "A pterygium is a common, non-cancerous growth of thin tissue on the clear surface of the eye. It usually starts on the white part of the eye and can slowly grow towards the cornea.",
    },
    {
      q: "What causes a pterygium?",
      a: "It is often linked to long-term exposure to sunlight (UV), wind and dust, which is why it is more common in people who spend a lot of time outdoors.",
    },
    {
      q: "Does a pterygium always need surgery?",
      a: "No. A small pterygium that causes little trouble may only need monitoring and lubricating eye drops. Surgery may be recommended if it causes ongoing discomfort, affects vision or keeps growing.",
    },
    {
      q: "Can a pterygium affect my vision?",
      a: "If it grows onto the cornea it can cause blurring or change astigmatism. Your doctor will check your vision and corneal shape during the examination.",
    },
    {
      q: "Can a pterygium come back after surgery?",
      a: "A pterygium can sometimes recur after removal. Your surgeon will explain the technique used and the follow-up needed to reduce this risk.",
    },
    {
      q: "How can I protect my eyes?",
      a: "Wearing UV-protective sunglasses and a hat outdoors, and protecting your eyes from dust and wind, can help. Lubricating drops may ease dryness if advised by your doctor.",
    },
    {
      q: "Can I walk in, or do I need an appointment?",
      a: "Appointments are preferred and help us give you adequate time. Walk-ins are seen subject to availability. You can book quickly via WhatsApp or phone.",
    },
  ],

  pediatricFaqs: [
    {
      q: "At what age should my child have their first eye examination?",
      a: "We recommend a comprehensive eye check before your child starts school — or earlier if you notice warning signs such as squinting, frequent eye rubbing, an eye that turns, or difficulty seeing the board.",
    },
    {
      q: "My child cannot read yet. Can their eyes still be tested?",
      a: "Yes. Young children are tested with picture-based charts, shapes and simple play-based activities. Each part of the examination is adapted to your child's age and comfort.",
    },
    {
      q: "Will my child need eye drops during the examination?",
      a: "Dilating drops are often used in children to check the true glasses power and to examine the back of the eye. They can cause temporary blurred near vision and light sensitivity for a few hours. The doctor will explain whether drops are needed for your child.",
    },
    {
      q: "Will my child grow out of a squint or lazy eye?",
      a: "A squint or lazy eye should not be left to see whether it improves. Some treatments work best during early childhood, so an eye turn — even one that appears only occasionally — should be assessed by an eye specialist.",
    },
    {
      q: "Does my child need surgery for a squint?",
      a: "Not always. Depending on the type of squint, glasses, patching or other treatment may be tried first. If surgery is recommended, it is planned and performed by our visiting pediatric ophthalmologist and squint surgeon.",
    },
    {
      q: "How often should my child's eyes be checked?",
      a: "This depends on your child's age, eye findings and any glasses prescription. Children who wear glasses usually need regular reviews as their eyes grow. Your doctor will advise a suitable follow-up interval.",
    },
    {
      q: "What should we bring to our child's appointment?",
      a: "Please bring your child's current glasses, any previous eye reports or prescriptions, and your insurance details if applicable. A favourite toy or snack can help younger children feel comfortable.",
    },
  ],
} as const;

export type HospitalContent = typeof hospital;

export const treatmentMenuItems = [
  { href: "/services/cataract", title: "Cataract Surgery" },
  { href: "/services/glaucoma", title: "Glaucoma Diagnosis & Treatment" },
  { href: "/services/retina", title: "Diabetic Eye & Retina Care" },
  { href: "/services/pediatric", title: "Pediatric Ophthalmology" },
  { href: "/services/general", title: "General Eye Care" },
  { href: "/services/cornea", title: "Cornea Care" },
  { href: "/services/squint", title: "Squint Care" },
  { href: "/services/pterygium", title: "Pterygium Treatment" },
  { href: "/services/oculoplasty", title: "Oculoplasty & Watering Eye Care" },
] as const;
