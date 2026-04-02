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
            },{id: "post-automate-the-small-stuff",
        
          title: "automate the small stuff",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/automate-the-small-stuff/";
          
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
          section: "News",},{id: "news-tabletocsv-extension-published-to-firefox-marketplace",
          title: 'tabletocsv extension published to firefox marketplace',
          description: "",
          section: "News",},{id: "news-microsoft-certified-in-azure-fundamentals",
          title: 'microsoft certified in azure fundamentals',
          description: "",
          section: "News",},{id: "news-obtained-certificate-of-completion-from-anthropic-for-claude-code-in-action",
          title: 'obtained certificate of completion from anthropic for claude code in action',
          description: "",
          section: "News",},{id: "news-the-fastaccountant-mcp-server-is-now-live",
          title: 'the fastaccountant mcp server is now live',
          description: "",
          section: "News",},{id: "news-obtained-certificate-of-completion-from-anthropic-for-introduction-to-agent-skills",
          title: 'obtained certificate of completion from anthropic for introduction to agent skills',
          description: "",
          section: "News",},{id: "news-obtained-certificate-of-completion-from-anthropic-for-claude-101",
          title: 'obtained certificate of completion from anthropic for claude 101',
          description: "",
          section: "News",},{id: "news-obtained-certificate-of-completion-from-anthropic-for-introduction-to-claude-cowork",
          title: 'obtained certificate of completion from anthropic for introduction to claude cowork',
          description: "",
          section: "News",},{id: "news-obtained-certificate-of-completion-from-anthropic-for-introduction-to-subagents",
          title: 'obtained certificate of completion from anthropic for introduction to subagents',
          description: "",
          section: "News",},{id: "projects-browser-extensions",
          title: 'Browser Extensions',
          description: "TypeScript, JavaScript, web-ext",
          section: "Projects",handler: () => {
              window.location.href = "/projects/browser_extension/";
            },},{id: "projects-mcp-servers",
          title: 'MCP Servers',
          description: "Python, FastMCP, Docker, AI, LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mcp_servers/";
            },},{id: "projects-ms-office-web-add-ins",
          title: 'MS Office Web Add-ins',
          description: "Office.js, FluentUI, React, TypeScript, JavaScript, Python, FastAPI, SQL",
          section: "Projects",handler: () => {
              window.location.href = "/projects/office_web_add_ins/";
            },},{id: "projects-static-web-sites",
          title: 'Static Web Sites',
          description: "Wordpress, Wix, HTML, CSS, JavaScript, Ruby, Jekyll, mkdocs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/static_sites/";
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
