// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-yet-another-thing-about-the-golden-ratio-part-i",
        
          title: "Yet another thing about the golden ratio Part I",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/elementary-pisot-i/";
          
        },
      },{id: "post-understanding-physics-with-no-math-background",
        
          title: "Understanding physics with no math background",
        
        description: "Five simple tips for the layman who wants to understand mathematics, physics, or similarly technical fields.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/layman-learning/";
          
        },
      },{id: "news-personal-site-launched",
          title: 'Personal site launched',
          description: "",
          section: "News",},{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
