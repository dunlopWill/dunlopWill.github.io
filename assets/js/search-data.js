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
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-repos",
              title: "repos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repos/";
              },
            },{id: "dropdown-web",
              title: "web",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/web/";
              },
            },{id: "post-a-cli-for-everyone",
        
          title: "a cli for everyone",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/a-cli-for-everyone/";
          
        },
      },{id: "post-developer-accountants",
        
          title: "developer accountants",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/developer-accountants/";
          
        },
      },{id: "post-starting-a-blog-with-jekyll",
        
          title: "starting a blog with jekyll",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/starting-a-blog-with-jekyll/";
          
        },
      },{id: "post-reflections-from-our-scale-up-business-intern-will-dunlop-engine-shed",
        
          title: 'Reflections from our Scale-up Business Intern Will Dunlop - Engine Shed <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "My name is Will Dunlop and I am a post-graduate University of Bristol student, soon to complete my MSc in Economics, Finance and Management. I began my Scale Up Business Internship in December, 2017.  I have been really lucky to have had the opportunity to be involved in the Scale-up Ecosystem Project run by the […]",
        section: "Posts",
        handler: () => {
          
            window.open("https://engine-shed.co.uk/news/reflections-from-our-scale-up-business-intern-will-dunlop/", "_blank");
          
        },
      },{id: "news-bbshark-is-now-on-crates-io",
          title: 'bbshark is now on crates.io',
          description: "",
          section: "News",},{id: "news-pycountant-is-now-on-pypi",
          title: 'pycountant is now on PyPi',
          description: "",
          section: "News",},{id: "projects-web-browser-extensions",
          title: 'Web Browser Extensions',
          description: "Including a Firefox add-on to export tables found on internet web pages to CSV files",
          section: "Projects",handler: () => {
              window.location.href = "/projects/browser_extension/";
            },},{id: "projects-code-amp-project-documentation",
          title: 'Code &amp;amp; Project Documentation',
          description: "Including a documentation, usage and reference website for the PyPi Python programming language package PyCountant",
          section: "Projects",handler: () => {
              window.location.href = "/projects/code_docs/";
            },},{id: "projects-web-presence-for-businesses",
          title: 'Web Presence for Businesses',
          description: "Including a static site for Strata Nostra, a healthcare consultancy, enabling clients to search for and find them via the internet",
          section: "Projects",handler: () => {
              window.location.href = "/projects/static_sites/";
            },},{id: "projects-office-extensions",
          title: 'Office Extensions',
          description: "Including a Microsoft Office Excel Add-In that enables users to reconcile numbers to a target value",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xl_add_in/";
            },},{id: "teaching-python-for-accountants",
          title: 'Python for Accountants',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/1_teaching/";
            },},{id: "teaching-excel-formulas",
          title: 'Excel Formulas',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2_teaching/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dunlopWill", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/williamdunlop", "_blank");
        },
      },{
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
