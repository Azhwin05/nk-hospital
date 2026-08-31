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
    slug: 'routine-health-checkups-every-adult-should-do',
    title: 'Routine Health Checkups Every Adult Should Do',
    category: 'Preventive Health',
    date: 'August 31, 2026',
    isoDate: '2026-08-31',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Feeling healthy and being healthy are not always the same thing. Here are the preventive screenings every adult should discuss with their doctor.',
    metaTitle: 'Health Checkups Every Adult Should Do | Preventive Health Guide',
    metaDescription: 'Discover essential health checkups every adult should consider, from blood sugar and cholesterol to liver, kidney and thyroid screening.',
    content: [
      { type: 'p', text: 'Feeling healthy and being healthy are not always the same thing. Changes in blood sugar, cholesterol, thyroid function, liver health, or kidney function can begin without noticeably affecting your daily routine. A preventive health checkup gives you an opportunity to understand what is happening inside your body and address concerns before they start interfering with your well-being.' },
      { type: 'p', text: 'The tests required can differ depending on age, lifestyle, family history, and existing medical conditions. However, some screenings are worth discussing with your doctor as part of routine preventive care.' },

      { type: 'h2', text: 'Blood Pressure Check' },
      { type: 'p', text: 'Blood pressure is one of the simplest yet most important health measurements for adults. Regular monitoring becomes particularly relevant for people with a family history of hypertension, diabetes, excess body weight, high stress levels, or limited physical activity.' },
      { type: 'p', text: ['Since elevated blood pressure may exist without obvious symptoms, periodic checks can help identify unusual readings that might otherwise go unnoticed. Read more about the ', { text: 'early warning signs of high blood pressure', href: '/blog/high-blood-pressure-early-warning-signs' }, '.'] },

      { type: 'h2', text: 'Blood Sugar Tests' },
      { type: 'p', text: "Fasting Blood Sugar (FBS), Postprandial Blood Sugar (PPBS), and HbA1c provide useful information about blood glucose levels at different points in time and can help assess an individual's sugar levels." },
      { type: 'p', text: 'The need for frequent testing depends on various factors such as body weight, family medical history, symptoms like frequent urination, increased appetite, lifestyle, and previous blood sugar readings, so the testing schedule is best decided in consultation with your doctor.' },

      { type: 'h2', text: 'Cholesterol & Heart Risk Assessment' },
      { type: 'p', text: 'A cholesterol check can reveal important information about your heart health. A lipid profile provides a closer look at different types of cholesterol and other fat-related markers in the blood. These results, along with factors such as blood pressure, blood sugar, age, lifestyle, and family history, can help doctors assess cardiovascular risk.' },
      { type: 'p', text: 'Heart health screening becomes increasingly important with age, especially when additional risk factors are present.' },

      { type: 'h2', text: 'Liver Function Tests' },
      { type: 'p', text: 'Your liver and kidneys perform essential tasks every day, from processing nutrients to removing waste from the body. Periodic LFT (Liver Function Tests) measure specific enzymes and other markers that provide information about liver health.' },
      { type: 'p', text: ['Depending on your overall health and medical history, your doctor may suggest liver tests as part of a regular health assessment for further evaluation. Our ', { text: 'medical gastroenterology team', href: '/specialities/medical-gastroenterology' }, ' can advise on the right follow-up.'] },

      { type: 'h2', text: 'Kidney Function Tests' },
      { type: 'p', text: 'Kidney health can be assessed through blood and urine investigations. Tests such as serum creatinine and other renal function markers help doctors understand how effectively the kidneys are performing.' },
      { type: 'p', text: 'People with diabetes or hypertension may be advised to monitor kidney function at appropriate intervals.' },

      { type: 'h2', text: 'Thyroid Function Tests' },
      { type: 'p', text: 'Thyroid hormones influence metabolism and several other functions in the body. When clinically required, tests such as TSH, T3, and T4 can help assess thyroid function.' },
      { type: 'p', text: 'Changes in weight, energy levels, or other symptoms may prompt your doctor to recommend thyroid testing.' },

      { type: 'h2', text: 'How Often Should Adults Get Health Checkups?' },
      { type: 'p', text: 'There is no universal health checkup schedule that applies to every adult. The right tests and their frequency depend on your age, medical and family history, lifestyle, existing conditions, and previous test results.' },
      { type: 'p', text: ['Instead of choosing investigations on your own, discussing your preventive screening needs with a ', { text: 'healthcare professional', href: '/find-doctor' }, ' can help determine what is appropriate for you.'] },
      { type: 'p', text: ['For those looking for convenient preventive screening options, explore our ', { text: 'Health Checkup Packages', href: '/health-packages' }, ', which include Routine Health Checkup, Diabetes, Kidney & Liver Health Checkups, Hypertension, Cardiac Risk, Thyroid, Fitness and Geriatric profiles. We also have a ', { text: 'home sample collection facility', href: '/health-packages/book-home-pickup' }, '.'] },

      { type: 'h2', text: 'Make Preventive Care a Regular Habit' },
      { type: 'p', text: 'Health checkups are not only meant for times when you feel unwell. They offer an opportunity to understand your current health status and make better-informed decisions about your well-being.' },
      { type: 'p', text: 'Making preventive screening part of your healthcare routine, along with balanced nutrition, regular physical activity, adequate sleep, and appropriate medical guidance, can help you stay more aware of your health as you move through different stages of adulthood.' },
    ],
  },
  {
    slug: 'best-foods-for-fatty-liver-recovery',
    title: 'Best Foods for Fatty Liver Recovery',
    category: 'Gastroenterology',
    date: 'August 28, 2026',
    isoDate: '2026-08-28',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    excerpt: "A fatty liver doesn't develop overnight, and neither does recovery. Here are the foods that support liver health, what to limit, and when to see a specialist.",
    metaTitle: 'Best Foods for Fatty Liver Recovery | Liver Healthy Diet Tips',
    metaDescription: 'Discover the best foods for fatty liver recovery, foods to avoid, and diet tips that support liver health. Learn when to consult a gastroenterologist.',
    content: [
      { type: 'p', text: "A fatty liver doesn't develop overnight, and neither does recovery. One of the most effective ways to improve liver health is by adopting healthier eating habits. Over time, the right food choices, combined with an active lifestyle, can help your liver function more efficiently and gradually improve its overall health." },
      { type: 'p', text: "The food you eat every day has a direct impact on your liver health. Choosing nutritious, well-balanced meals can support liver function. The goal isn't to follow a restrictive diet but to choose foods that nourish the liver and reduce unnecessary strain on it." },

      { type: 'h2', text: 'Foods That Support Liver Recovery' },
      { type: 'steps', items: [
        { title: 'Fresh Fruits and Vegetables', text: 'Fruits and vegetables packed with antioxidants, vitamins, and fiber help reduce inflammation and support healthy liver function. Leafy greens, carrots, beetroot, tomatoes, berries, oranges, and apples are excellent additions to your daily meals. Include a variety of seasonal fruits and vegetables rather than depending on a single superfood.' },
        { title: 'Whole Grains Instead of Refined Carbohydrates', text: 'Choosing whole grains over highly refined foods provides your body with more fibre and nutrients, helping you feel fuller for longer while supporting better metabolic health. Foods such as oats, brown rice, whole wheat, and millets are excellent everyday choices.' },
        { title: 'Lean Sources of Protein', text: 'Protein plays an important role in repairing body tissues and maintaining muscle mass. Skinless chicken, fish, eggs, lentils, beans, and low-fat dairy products provide quality protein without adding excessive unhealthy fats. Plant-based protein sources can be particularly beneficial when included as part of a balanced diet.' },
        { title: 'Healthy Fats in Moderation', text: 'Not all fats are harmful. Foods rich in healthy fats, such as walnuts, almonds, flaxseeds, chia seeds, and avocados, provide essential nutrients that support overall health. Olive oil is another heart-friendly option that can replace saturated fats in everyday cooking. The key is moderation, as even healthy fats are calorie-dense.' },
        { title: 'Coffee and Green Tea', text: 'Moderate coffee intake may help protect the liver in some individuals by reducing inflammation and slowing the progression of liver damage. Green tea also contains natural compounds that support metabolic health. However, these beverages should complement a healthy lifestyle, not replace medical advice or treatment.' },
      ] },

      { type: 'h2', text: 'Foods to Limit' },
      { type: 'p', text: 'Along with adding nutritious foods, reducing certain items can make a significant difference. Try to limit:' },
      { type: 'ul', items: [
        'Sugary beverages and sweets',
        'Deep-fried and fast foods',
        'Processed and packaged snacks',
        'Excessive alcohol consumption',
        'Foods high in saturated and trans fats',
      ] },
      { type: 'p', text: 'Small, consistent changes are often easier to maintain than drastic dietary restrictions.' },

      { type: 'h2', text: 'Recovery Goes Beyond Your Plate' },
      { type: 'p', text: ['A healthy diet works best when combined with regular physical activity, adequate sleep, proper hydration, and maintaining a healthy body weight. ', { text: 'Routine medical follow-ups', href: '/health-packages' }, ' are equally important, as fatty liver disease often progresses without noticeable symptoms.'] },

      { type: 'h2', text: 'When Should You Consult a Doctor?' },
      { type: 'p', text: ['If you have persistent fatigue, discomfort in the upper right side of your abdomen, abnormal liver function test results, fatty liver on ultrasound, or risk factors such as obesity or diabetes, ', { text: 'consult a gastroenterologist', href: '/specialities/medical-gastroenterology' }, '. Early evaluation helps determine the severity of fatty liver disease and allows timely guidance on treatment and lifestyle modifications.'] },

      { type: 'h2', text: 'A Healthy Liver Starts with Everyday Choices' },
      { type: 'p', text: "Recovering from fatty liver disease is a gradual process, but every healthy meal is a step in the right direction. Choosing wholesome foods, staying active, and following your doctor's advice can help restore liver health and lower the risk of future complications." },
    ],
  },
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
