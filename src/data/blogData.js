// Blog posts. Each post renders a card on /blog and a full article at /blog/[slug].
// `content` is an ordered list of typed blocks the detail page knows how to render:
//   { type: 'p',     text }              → paragraph
//   { type: 'h2',    text }              → section heading
//   { type: 'h3',    text }              → sub heading
//   { type: 'ul',    items: [] }         → bullet list
//   { type: 'steps', items: [{ title, text }] } → numbered list with a bold lead-in
//
// Any `text` (and any `ul` item) may also be an array of segments so the copy can
// carry inline links:  ['plain text ', { text: 'anchor', href: '/some-page' }, ' more']

export const blogPosts = [
  {
    slug: 'what-causes-stomach-bloating-after-eating',
    title: 'What Causes Stomach Bloating After Eating?',
    category: 'Gastroenterology',
    date: 'July 24, 2026',
    isoDate: '2026-07-24',
    readTime: '3 min read',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Frequent bloating after meals can signal more than just a heavy meal. Learn the common causes, simple prevention tips, and when to see a gastroenterologist.',
    metaTitle: 'What Causes Stomach Bloating After Eating?',
    metaDescription: 'Wondering what causes stomach bloating after eating? Learn the common causes, prevention tips, and when to consult a gastroenterologist for expert care.',
    content: [
      { type: 'p', text: 'Stomach bloating after eating is one of the most common digestive complaints experienced by people of all ages. It often feels like tightness, fullness, or swelling in the abdomen and can sometimes be accompanied by gas, discomfort, or mild pain. While occasional bloating is usually harmless, frequent episodes may indicate an underlying digestive issue that requires medical attention.' },
      { type: 'p', text: 'Understanding the causes of bloating is the first step toward improving your digestive health.' },
      { type: 'h2', text: 'Common Causes of Stomach Bloating After Eating' },
      { type: 'steps', items: [
        { title: 'Eating Too Quickly', text: 'When you eat too fast, you tend to swallow excess air along with your food. This trapped air can build up in your digestive tract, leading to bloating and burping. Eating slowly and chewing food thoroughly can significantly reduce this problem.' },
        { title: 'Overeating', text: 'Large meals put extra pressure on your stomach and digestive system. When the stomach becomes overly full, digestion slows down, making you feel bloated and uncomfortable. Eating smaller, balanced meals throughout the day is often a better approach.' },
        { title: 'Gas-Producing Foods', text: 'Certain foods naturally produce more gas during digestion. Common examples include beans, lentils, cabbage, broccoli, cauliflower, onions, carbonated drinks, and artificial sweeteners. These foods may cause temporary bloating in some individuals.' },
        { title: 'Food Intolerances', text: 'People with lactose intolerance, gluten sensitivity, or other food intolerances may experience bloating shortly after eating trigger foods. Unlike food allergies, intolerances mainly affect digestion and often cause symptoms such as abdominal discomfort, gas, and diarrhea.' },
        { title: 'Digestive Disorders', text: ['Persistent bloating may be associated with conditions such as Irritable Bowel Syndrome (IBS), gastritis, acid reflux, constipation, or Small Intestinal Bacterial Overgrowth (SIBO). These conditions require ', { text: 'proper medical evaluation', href: '/find-doctor' }, ' and personalized treatment.'] },
      ] },
      { type: 'h2', text: 'Simple Tips to Prevent Bloating' },
      { type: 'p', text: 'You can often reduce bloating by making a few healthy lifestyle changes:' },
      { type: 'ul', items: [
        'Eat slowly and chew your food well.',
        'Avoid overeating by choosing smaller portions.',
        'Stay hydrated throughout the day.',
        'Limit carbonated beverages and highly processed foods.',
        'Include regular physical activity in your daily routine.',
        'Keep note of foods that trigger your symptoms.',
      ] },
      { type: 'h2', text: 'When Should You See a Doctor?' },
      { type: 'p', text: ['Occasional bloating is common, but you should ', { text: 'consult a gastroenterologist', href: '/specialities/medical-gastroenterology' }, ' if bloating is frequent, severe, or accompanied by warning signs such as persistent abdominal pain, vomiting, unexplained weight loss, blood in stools, difficulty swallowing, or changes in bowel habits. Timely evaluation can help determine the underlying cause and prevent complications.'] },
      { type: 'h2', text: 'Take Care of Your Digestive Health' },
      { type: 'p', text: 'Bloating is often linked to eating habits or certain foods, but persistent symptoms should never be ignored. Identifying the cause early can help you find the right treatment and improve your overall digestive well-being.' },
    ],
  },
  {
    slug: 'high-blood-pressure-early-warning-signs',
    title: 'High Blood Pressure: Early Warning Signs You Should Never Ignore',
    category: 'General Medicine',
    date: 'July 20, 2026',
    isoDate: '2026-07-20',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'High blood pressure often develops silently. Recognise the early warning signs, key risk factors, and everyday habits that keep it under control.',
    metaTitle: 'High Blood Pressure: Early Warning Signs You Should Never Ignore',
    metaDescription: 'Learn the early warning signs of high blood pressure, common risk factors, prevention tips, and when to consult a specialist.',
    content: [
      { type: 'p', text: ["High blood pressure doesn't always announce its presence with obvious symptoms. Many people continue with their daily routine, unaware that their blood pressure has been rising over months or even years. This is why ", { text: 'routine health check-ups', href: '/health-packages' }, ' play such an important role in detecting hypertension before it begins to affect vital organs.'] },
      { type: 'p', text: 'Although it may seem harmless in the early stages, untreated high blood pressure can gradually increase the risk of heart disease, stroke, kidney damage, and vision problems. Knowing the early warning signs can help you seek timely medical care and protect your long-term health.' },
      { type: 'h2', text: 'Could Your Body Be Sending You Signals?' },
      { type: 'p', text: "Not everyone with high blood pressure experiences symptoms. However, some individuals notice subtle changes that shouldn't be overlooked, especially if they occur repeatedly." },
      { type: 'h3', text: 'Persistent Headaches' },
      { type: 'p', text: 'Frequent headaches, particularly those that occur soon after waking up, may sometimes be linked to elevated blood pressure. While headaches can have many causes, recurring episodes deserve medical attention.' },
      { type: 'h3', text: 'Feeling Dizzy More Often' },
      { type: 'p', text: 'Occasional dizziness may result from fatigue or dehydration, but frequent lightheadedness without a clear reason should be evaluated, particularly if accompanied by other symptoms.' },
      { type: 'h3', text: 'Changes in Vision' },
      { type: 'p', text: 'Blurred vision or difficulty focusing can sometimes occur when prolonged high blood pressure affects the small blood vessels in the eyes.' },
      { type: 'h3', text: 'Breathlessness During Routine Activities' },
      { type: 'p', text: 'If climbing a flight of stairs or performing simple daily tasks leaves you unusually short of breath, it may be worth discussing with your doctor. High blood pressure can place additional strain on the heart over time.' },
      { type: 'h3', text: 'Unusual Chest Sensations' },
      { type: 'p', text: 'Although chest discomfort and palpitations are not exclusive signs of high blood pressure, experiencing these symptoms repeatedly prompts medical attention. A proper evaluation can help identify the cause and ensure timely treatment if needed.' },
      { type: 'h2', text: 'Who Is Likely to Develop High Blood Pressure?' },
      { type: 'p', text: 'Several lifestyle and health-related factors can increase your chances of developing hypertension. These include:' },
      { type: 'ul', items: [
        'Family history of high blood pressure',
        'Excess body weight',
        'High-sodium diet',
        'Limited physical activity',
        'Smoking or frequent alcohol consumption',
        'Diabetes or kidney disease',
        'Long-term stress and inadequate sleep',
      ] },
      { type: 'p', text: 'Being aware of these risk factors allows you to take preventive steps before complications arise.' },
      { type: 'h2', text: 'Everyday Habits That Help Keep Your Blood Pressure Under Control' },
      { type: 'p', text: 'Keeping your blood pressure within a healthy range often starts with small, consistent lifestyle choices:' },
      { type: 'ul', items: [
        'Choose fresh, balanced meals instead of processed foods.',
        'Reduce the amount of salt added to your diet.',
        'Stay physically active with an exercise routine you enjoy.',
        'Maintain a healthy body weight.',
        'Get sufficient sleep and manage daily stress effectively.',
        'Avoid tobacco and limit alcohol intake.',
        'Check your blood pressure regularly as part of your routine health screening.',
      ] },
      { type: 'h2', text: 'When Should You Consult a Doctor?' },
      { type: 'p', text: 'If your blood pressure readings remain consistently high or you experience the above mentioned symptoms it is important to seek medical evaluation. A timely evaluation can help identify the underlying cause and ensure appropriate treatment before complications develop.' },
      { type: 'p', text: 'High blood pressure often develops quietly, but its impact on the body can be significant if left unmanaged. Regular health check-ups, healthy lifestyle choices, and appropriate medical care can greatly reduce the risk of long-term complications.' },
      { type: 'p', text: ['At NK Hospital, our experienced ', { text: 'General Medicine specialists', href: '/specialities/general-medicine' }, ' provide comprehensive evaluation, diagnosis, and personalized treatment for hypertension and other medical conditions. Through regular health screenings and expert guidance, we are committed to helping you maintain better health and overall well-being.'] },
    ],
  },
]

export const getPost = (slug) => blogPosts.find((p) => p.slug === slug)
