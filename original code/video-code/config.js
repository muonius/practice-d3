module.exports = ({ dedent }) => ({
  title: "Fullstack D3 Masterclass",
  slug: "fullstack-d3-masterclass",
  permalink: "/courses/fullstack-d3-masterclass",
  posterImageUrl: "./images/d3-masterclass-hero.jpg",
  // heroVideoUrl: "https://fullstack.wistia.com/medias/huan3dtzrj",
  gitRepoHttpUrl:
    "https://gitlab.com/fullstackio/books/newline-course-template",
  publicLessonCount: 0,
  previewPercent: 40,
  modulePrefix: "module_",
  lessonDirsGlob: "module_*/lesson_*",
  moduleDirsGlob: "module_*",
  authorSlugs: ["wattenberger"],
  isFree: false,
  isShownPublicly: false,
  previewPagesOnSite: false,
  useDeltas: true,
  heroVideoUrl: "https://fullstack.wistia.com/medias/ig2ytc6um8",
  /* INSTRUCTIONS: Read the template below, write your own version, and then delete this comment (and the extra text) */
  summary: dedent(`The Fullstack D3 masterclass is the complete guide to D3. With dozens of code examples showing each step, you will gain new insights into your data by creating visualizations in this self-paced online course.
  `),
  whatYouWillLearn: {
    items: [
      { text: "How to build your first D3 chart" },
      { text: "Importance of information design" },
      { text: "How to integrate D3 with Angular" },
      { text: "When to use D3 - and when not to" },
      { text: "How to animate and add interactions" },
      { text: "How to create any visualization you can imagine" }
    ]
  },
  primaryDescriptionMarkdown: dedent(`
Charts communicate ideas with simplicity, clarity, and detail.

Once you're comfortable with D3 you can quickly:

* understand key metrics at a glance
* catch anomalies (before they turn into problems)
* give key insights to your customers
* and impress your boss and co-workers

Today, I will show you the exact methods I use to create beautiful, understandable data visualizations using D3.
  `),
  numProjects: 12,
  linesOfCode: 2074,
  ctaFeatures: {
    features: [
      { text: "Learn how to create D3 charts" },
      { text: "Build dozens different examples" },
      { text: "Integrate D3 with React and Angular" }
    ]
  },
  authorBios: {
    wattenberger: dedent(`
👋 Hey! I'm Amelia, the author of this course.
I'm a front-end developer at The Pudding

Over the past ten years that I've been visualizing data, I've been perfecting my method and collecting helpful tricks. I'm here to jump-start your own journey!

In Fullstack D3 and Data Visualization, I distill my hard-earned knowledge into bite-sized lessons.

We'll start making charts right away, and learn new concepts and design theory as we go.
`)
  },
  faq: [
    {
      q: "Who is this course for?",
      a: "If you know JavaScript and you need to build dashboards and you'd like to learn D3 as quickly and efficiently as possible."
    },
    {
      q: "What if I need help?",
      a:
        "You can ask us questions anytime through the community Discord channel or by [sending us a message](mailto:us@fullstack.io)."
    }
  ]
});
