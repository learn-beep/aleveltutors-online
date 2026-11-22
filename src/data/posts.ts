export interface Post {
  slug: string;
  oldSlug: string;
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
  date: string;
  body: string;
  nutshell: string[];
}

export const posts: Post[] = [
  {
    slug: 'use-your-brain',
    oldSlug: 'use-your-brain',
    title: 'Use Your Brain: memory is the residue of thought',
    description: 'Learning takes effort. Why you remember what you think about, why confusion is often a good sign, and why borrowing a friend’s notes rarely helps.',
    author: 'Dr Jenny Shipway',
    authorUrl: 'https://www.jennyshipway.com/',
    date: '2023-10-31',
    nutshell: [
      'We remember what we think about, so you will need to make mental effort.',
      'Feeling a topic is difficult or confusing is part of effective learning.',
      'Don’t borrow a friend’s notes: make your own.',
    ],
    body: `
<h2>Think about it</h2>
<p>Daniel Willingham, an influential educational psychologist, said it first: “Memory is the residue of thought.” Whatever tricks we use to help our memories, such as linking concepts to prior knowledge or <a href="/revision-tips/the-dangers-of-familiarity/">practising recall</a>, we will never remember things we don’t think about.</p>
<p>It’s the classic “in one ear, out the other” problem. It doesn’t only happen when the information is boring; it can also happen after superb lectures given by talented speakers.</p>
<blockquote>Have you ever listened to a talk where the lecturer explained everything so clearly that following their train of thought was effortless? I’ve been to talks like that, and loved them. I’ve gone home rhapsodising about how much I learned. And then someone asks “What did you learn?” and I realise there’s no residue of the talk in my mind. I can remember the experience, but not the information.</blockquote>
<p>They say people remember how you make them feel, not what you say. Students and teachers have to fight against this default.</p>

<h2>Effortful thought</h2>
<p>When we’re young, we seem to pick up information without trying. New vocabulary, the names of dinosaurs: our brains just sponge it up. Psychologist David Geary calls this “biologically primary” learning. It happens with things our brains are primed to absorb, like how to communicate, what is good to eat, and what is dangerous.</p>
<p>The academic learning we do in schools and colleges is “biologically secondary”. Knowing how muscle contractions move the skeleton isn’t necessary for survival, so, although we all have skeletons and muscles, we have to make an effort to learn it. This kind of learning isn’t soaked up; it takes effortful thought. Writing is the same: it has to be learned consciously, rather than picked up from living among signs and labels.</p>

<h2>How to revise</h2>
<p>A-level subjects are firmly biologically secondary. Understanding the concepts takes a lot of effortful thought. Reading around the subject for fun is great, but you need to stop and really think about the ideas if you want them to stick. Process them against what you already know, and practise using them in different ways.</p>
<p>This is one reason why taking notes is good: you are forced to process the information to turn it into writing. It is also why taking notes during a lesson can be bad: you have less time to think about the topic.</p>
<p>And it’s why using someone else’s notes is pretty pointless. The value is in making the notes, not in the notes themselves. If you work carefully through a topic, make sense of it your own way, and then prove it is organised in your mind by writing it down (usually finding something you haven’t quite got right, and going back to fill the gap), you have certainly thought about it. Making notes gives you a reason to think and a test of the quality of that thinking.</p>
<p>Someone else’s notes are no different from a textbook. They mean something to the person who made them, tied to their own thinking and memories, but all they can give you is surface facts, not the deeper understanding you need. There are no short cuts, sadly.</p>

<h2>I’m so confused</h2>
<p>The good news is that confusion and difficulty while learning can be good signs (not always, but often). Good teachers will make you feel this way, because these are the feelings we get when we’re really thinking: turning new information over and trying to fit it with what we already know. Sometimes we realise our prior knowledge is wrong and have to change how we think more widely. That is uncomfortable, because brains don’t like being wrong, but the discomfort is part of the process.</p>
<p>So if something is too easy to understand, that can be a problem. If you don’t need to think about it, it won’t leave a trace in your memory. Then it can help to make the task deliberately harder, to give your brain something to chew on.</p>
`,
  },
  {
    slug: 'making-connections',
    oldSlug: 'making-connections',
    title: 'Making Connections: why linked ideas are easier to remember',
    description: 'A-level subjects reward understanding over memorised facts. Linking topics together, and to yourself, makes them easier to understand and to recall in the exam.',
    author: 'Dr Jenny Shipway',
    authorUrl: 'https://www.jennyshipway.com/',
    date: '2023-10-15',
    nutshell: [
      'Look for the connections between topics and explore how they depend on each other.',
      'Think about concepts in the context of your own life.',
      'If something is hard to remember, find more links between it and things you already know well.',
    ],
    body: `
<h2>Memory palaces</h2>
<p>Some people specialise in memorising long strings of dull information. One trick they use is to imagine the information placed along a walking route. To remember a list of household appliances, you might picture a kettle outside your front door, a dishwasher at the end of the garden path, a toaster on the road outside and a microwave on the corner. Walking the route again in your mind, you “see” each object in the right order.</p>
<p>Tricks like this are needed because your brain struggles to remember unrelated information. Every new fact has to be linked to something you already know, and linking it to something you know very well, like the route from your house, pins it in place.</p>
<p>One of the great challenges of A level, in biology especially, is that you need to understand things rather than memorise facts and figures. It’s about deeper concepts rather than surface facts. The good news is that this makes the facts easier to remember: each piece of information is related to others, and the more linked it is, the easier it is to recall.</p>

<h2>Synoptic thinking</h2>
<p>Some of the hardest exam questions ask you to think across topics. Rather than drawing on one part of the course, they make you use your understanding of several areas to solve one problem. It’s the kind of thinking researchers use, bringing knowledge from other fields to solve problems in new ways.</p>
<p>The specification is split into sections, but the subject itself is a tangle of linked ideas. Pity the teacher who has to choose the teaching order when everything seems to underpin everything else.</p>

<h2>How to revise</h2>
<p>Don’t avoid the complicated ways topics relate to each other. Noticing and thinking about these links makes concepts easier to understand and to remember, and makes it easier to jump between areas in synoptic questions.</p>
<p>To really understand a complex idea, look at it from different angles, on different days, with several examples. Fed enough examples and allowed to think, the brain builds an understanding deeper than anything easily written down. You can’t simply read that kind of understanding in; it has to be built in your own mind, and looking at a topic from the angle of a neighbouring topic is a great way to feed it.</p>
<p>When you spot a link to an earlier topic, take a moment to recall what you learned, think about the new topic from that angle, and consider where they meet. As well as building understanding, these links make information easier to recall.</p>

<h2>Use yourself</h2>
<p>Every brain is different. Everyone who imagines a kettle on their front step pictures it differently. Do they trip over it? Is it on a plant pot? What colour is it? Each picture is drawn from experience, which is why the trick works: it links to things your brain already knows.</p>
<p>If you can link anything in your course to strong memories, and especially to yourself, you’ll recall it more easily. When you learn about the body, link it to your experience of having one. When you learn about a disease, think about someone you know who has it, or imagine treating it as a doctor: how would you feel, and what would you do?</p>
<p>Linking new information to your sense of self is possibly the strongest way to flag it for later recall.</p>
`,
  },
  {
    slug: 'the-dangers-of-familiarity',
    oldSlug: 'the-dangers-of-familiarity',
    title: 'The Dangers of Familiarity: why re-reading notes fools you',
    description: 'Re-reading notes feels like learning but mostly builds familiarity. The evidence for retrieval practice, and how to use it in your revision.',
    author: 'Dr Jenny Shipway',
    authorUrl: 'https://www.jennyshipway.com/',
    date: '2023-10-09',
    nutshell: [
      'Practising recall shows you for certain what you don’t know.',
      'Practising recall makes the information easier to remember next time.',
      'Not remembering something isn’t failure: you’ve found something to re-study.',
    ],
    body: `
<h2>The lazy brain</h2>
<p>There’s a trick your brain can play that fools you into using ineffective study techniques and leads to confusion and disappointment on exam day. You can beat it if you know how.</p>
<blockquote>You are sitting in the exam hall. The bell sounds. You turn over the paper, read the question and smile. You confidently pick up your pen but… somehow you can’t pull up what you need. What was that word? You know you learned it, but your mind is blank. Afterwards a friend tells you the word. “Aaah, I knew that!” you say. But you didn’t; not when it mattered.</blockquote>
<p>Your brain tricked you. Going through your notes before the exam, it seemed to say you knew the content. Really it was only telling you your notes were familiar. You never checked whether you could actually recall the information.</p>
<p>Human brains like to save effort and to feel successful (features, not bugs). Re-reading notes doesn’t strain your brain or make you feel you are failing, so it feels like learning. But can you learn without making mental effort?</p>

<h2>How to revise</h2>
<p>A study published in 2006 compared two groups of students learning new material. Both read through it first. Then one group re-read everything, while the other put the material away and wrote down everything they could remember. Later, both groups took a test.</p>
<p>Going into the test, the re-readers were more confident: they had seen the material more often and it felt familiar. The recall group were less sure, because they knew there were parts they had forgotten.</p>
<p>You can probably guess the results. Familiarity is not learning, and the re-readers’ confidence was misplaced. The students who had practised retrieving the information from memory recalled more of it in the test.</p>
<p>Many studies since have confirmed that practising retrieval is a particularly effective way to study. It’s called the testing effect: recalling information flags it to your brain as worth keeping. Testing yourself even beats open-book mind-mapping; a 2021 study of biology revision found mind-mapping added nothing to the boost students got from retrieval practice.</p>

<h2>Keep the faith</h2>
<p>Retrieval is hard work, and it can be frustrating when you can’t remember as much as you expected. But it is a fantastic way to learn properly.</p>
<p>The brain-ache you feel during retrieval is the feeling of effective learning. And if you remember less than you expected, you’ve been tricked by familiarity, and it’s far better to find that out now than in the exam.</p>
<p>So try it: after you revise a topic, put your books away and write down everything you can remember. See if your expectation matches reality. Then use past-paper questions on that topic to test yourself again; every subject’s <a href="/free-revision/">free revision site</a> sorts them by topic with the mark scheme alongside.</p>
`,
  },
];
