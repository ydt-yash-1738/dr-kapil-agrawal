export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type AboutDoctorData = {
  subtitle: string;
  title: string;
  content: ContentBlock[];
};

export const getAboutDoctorContent = (): AboutDoctorData => {
  return {
    subtitle: "About",
    title: "Prof. Dr. Kapil S. Agrawal",
    content: [
      {
        type: "paragraph",
        text: "Prof. Dr. Kapil S. Agrawal is a renowned plastic surgeon specializing in rhinoplasty (nose reshaping). He has received extensive national and international training and brings over 20 years of experience in the field of plastic surgery."
      },
      {
        type: "paragraph",
        text: "He performs primary, secondary (revision), congenital, and reconstructive rhinoplasties, along with a wide range of other aesthetic and reconstructive procedures. His artistic inclination, refined aesthetic vision, exceptional surgical skill, and in-depth knowledge enable him to consistently deliver excellent results with an ideal balance of form and function."
      },
      {
        type: "paragraph",
        text: "Prof. Kapil strongly believes in delivering the highest quality of care, with detailed patient consultation as the most crucial step. He emphasizes understanding patient expectations and discussing all possible options thoroughly."
      },
      {
        type: "paragraph",
        text: "To enhance outcomes and patient satisfaction, he has devised innovative techniques and refined existing methods suited for Indian patients, enabling consistently excellent results."
      },

      {
        type: "paragraph",
        text: "These techniques have benefited surgeons globally. The techniques include:"
      },
      {
        type: "list",
        items: [
          "Counterbalancing (Namaste) Technique for costal cartilage warping",
          "DCUP – dorsal strut for natural dorsum",
          "Tent-pole graft for nasolabial angle and nasal length",
          "Columellar lengthening techniques (Binder’s syndrome)",
          "Alaplasty – natural alar base refinement",
          "Ride-on Technique for silicone implant fixation",
          "Safe removal technique for Medpor implants",
          "Papyrus Graft – structural rhinoplasty innovation",
          "Techniques for thick-skinned Indian noses",
          "Two-tier Technique"
        ]
      },

      {
        type: "paragraph",
        text: "These techniques have been published in reputed journals. He has authored multiple textbook chapters including Secondary Aesthetic Rhinoplasty and Photography in Plastic Surgery."
      },
      {
        type: "paragraph",
        text: "He actively teaches and mentors trainees and is a frequent speaker at international conferences, conducting live surgical demonstrations worldwide."
      },
      {
        type: "paragraph",
        text: "He currently serves as Secretary of the Rhinoplasty Society of India, Associate Editor of IJPS, and reviewer for multiple journals."
      },

      {
        type: "heading",
        text: "Academic Journey"
      },
      {
        type: "list",
        items: [
          "M.Ch. Plastic Surgery – TNMC & BYL Nair Hospital, Mumbai",
          "M.S. General Surgery – Bangalore Medical College",
          "M.B.B.S. – Pt. JNMMC, Raipur",
          "Professor – GS Medical College & KEM Hospital, Mumbai"
        ]
      },

      {
        type: "paragraph",
        text: "His academic and surgical experience has established him as a highly skilled rhinoplasty specialist."
      },
      {
        type: "paragraph",
        text: "He also serves underprivileged patients through initiatives like the Impact India Foundation and the Lifeline Express hospital train."
      },

      {
        type: "heading",
        text: "Professional Memberships and Affiliations"
      },
      {
        type: "list",
        items: [
          "MAPSI – Maharashtra Association of Plastic Surgeons of India",
          "MPCGAPSI – MP & Chhattisgarh Association of Plastic Surgeons",
          "ISAPS – International Society of Aesthetic Plastic Surgeons",
          "SORSSA – Society of Rhinoplasty Surgeons of South Africa",
          "RSI – Rhinoplasty Society of India",
          "ISCLPCA – Indian Society of Cleft Lip Palate & Craniofacial Anomalies",
          "FRCSIT – Facial Reconstructive & Cosmetic Surgery India Trust"
        ]
      }
    ]
  };
};