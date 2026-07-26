import { pageMeta, breadcrumbLd, medicalPageLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

const SPECIALTY_META = {
  'medical-gastroenterology': {
    label: 'Medical Gastroenterology',
    specialty: 'Gastroenterologic',
    title: 'Best Medical Gastroenterology Hospital in Kalaburagi',
    description: 'Get expert medical gastroenterology care at NK Hospital, Kalaburagi for digestive, liver, pancreas, and GI disorders with advanced diagnosis and treatment.',
  },
  'surgical-gastroenterology': {
    label: 'Surgical Gastroenterology',
    specialty: 'Gastroenterologic',
    title: 'Surgical Gastro Center in Kalaburagi | Surgical Gastro Specialist',
    description: 'NK Hospital offers advanced surgical gastroenterology care in Kalaburagi for GI, liver, pancreas, and colorectal conditions with expert surgeons.',
  },
  'orthopedics': {
    label: 'Orthopedics',
    specialty: 'Musculoskeletal',
    title: 'Best Orthopedic Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert orthopaedic care for fractures, arthritis, joint replacement, spine disorders, and sports injuries in Kalaburagi.',
  },
  'general-medicine': {
    label: 'General Medicine',
    specialty: 'PrimaryCare',
    title: 'General Medicine Hospital in Kalaburagi | NK Hospital',
    description: 'Consult experienced physicians at NK Hospital for diabetes, hypertension, infections, fever, and preventive healthcare in Kalaburagi.',
  },
  'pulmonology': {
    label: 'Pulmonology',
    specialty: 'Pulmonary',
    title: 'Best Pulmonology Hospital in Kalaburagi | NK Hospital',
    description: 'Expert pulmonology care at NK Hospital, Kalaburagi for asthma, COPD, respiratory infections, and lung disorders with advanced diagnosis and treatment.',
  },
}

const FALLBACK = {
  label: 'Specialities',
  specialty: null,
  title: 'Medical Specialities in Kalaburagi | NK Hospital',
  description: 'Explore the medical specialties at NK Hospital, Kalaburagi, offering expert care across gastroenterology, nephrology, urology, orthopedics, and more.',
}

// FAQPage structured data — makes selected specialty pages eligible for
// FAQ rich results in Google search. Keyed by specialty slug.
const faq = (q, a) => ({
  '@type': 'Question',
  name: q,
  acceptedAnswer: { '@type': 'Answer', text: a },
})

const SPECIALTY_FAQ_LD = {
  'medical-gastroenterology': [
    faq('Is endoscopy or colonoscopy commonly required?', 'No, only selected patients need endoscopy depending on their symptoms.'),
    faq('What is the recovery time after Endoscopy?', 'Endoscopy is a day care procedure. Usually patient can go home within half an hour after consultation.'),
    faq('Is endoscopy painful ?', "No. It is done with local anesthesia. So patient doesn't feel any pain . Some anxious patients need iv anesthesia and can get scopy safely with comfort."),
  ],
  'surgical-gastroenterology': [
    faq('Is surgery always required for gastrointestinal problems?', 'No, many digestive conditions can initially be managed with medicines, diet changes, or observation. Surgery is advised only when necessary.'),
    faq('Are laparoscopic surgeries safe?', 'Yes, laparoscopic or minimally invasive surgeries are commonly performed and are generally safe, with benefits such as less pain and faster recovery.'),
    faq('How long is the recovery period after surgery?', 'Recovery depends on the type of surgery and the patient’s condition. Many laparoscopic procedures allow patients to recover faster and return to normal activities earlier.'),
    faq('When should I consult a Surgical Gastroenterologist?', 'You should consult a gastro specialist if you have these persistent digestive symptoms like severe abdominal pain, recurrent gastrointestinal issues, or if another doctor has advised surgical evaluation.'),
  ],
  'orthopedics': [
    faq('Is surgery always required?', 'No. Many conditions can be treated with medications, physiotherapy, and rehabilitation.'),
    faq('What is arthroscopy?', 'A minimally invasive (keyhole) procedure used to diagnose and treat joint problems.'),
    faq('When is joint replacement recommended?', 'When severe arthritis causes pain and limits daily activities despite conservative treatment.'),
    faq('How long is recovery after surgery?', 'Recovery varies depending on the procedure, but rehabilitation plays a key role in achieving the best results.'),
  ],
  'general-medicine': [
    faq('What conditions does a General Medicine doctor treat?', 'They treat a wide range of conditions including diabetes, hypertension, infections, thyroid disorders, and heart-related issues.'),
    faq('When should I consult a general physician?', 'You should consult when you have persistent symptoms like fever, fatigue, pain, breathing issues, or uncontrolled chronic diseases.'),
    faq('Is treatment in General Medicine long-term?', 'It depends on the condition. Chronic diseases like diabetes and hypertension require long-term management.'),
    faq('Do I need tests before starting treatment?', 'In many cases, basic blood tests, ECG, or imaging may be recommended for accurate diagnosis.'),
  ],
}

function faqPageLd(mainEntity) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = SPECIALTY_META[slug] || FALLBACK
  return pageMeta({
    title: meta.title,
    description: meta.description,
    path: `/specialities/${slug}`,
  })
}

export default async function SpecialityLayout({ children, params }) {
  const { slug } = await params
  const meta = SPECIALTY_META[slug] || FALLBACK
  const path = `/specialities/${slug}`
  const faqEntities = SPECIALTY_FAQ_LD[slug]

  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Specialities', path: '/specialities' },
        { name: meta.label, path },
      ])} />
      <JsonLd data={medicalPageLd({
        name: meta.title,
        description: meta.description,
        path,
        specialty: meta.specialty,
      })} />
      {faqEntities && <JsonLd data={faqPageLd(faqEntities)} />}
      {children}
    </>
  )
}
