---
layout: post
title:  starting a blog with jekyll
date:   2025-08-05 23:08:00 +0100
categories:
  - jekyll
  - markdown
  - blog
  - tech
---
Welcome to my first blog post!

I thought that I would use my first blog post to document and justify:

- [why](#why) I've started a blog;
- [who](#who) its for;
- [what](#what) its built with;
- [where](#where) its hosted;
- [how](#how) you can build one too;

## Why?

"*Why start a blog?*"

Essentially, so I can:

- [Contribute](#contribute)
- [Practice](#practice)
- [Create](#create)
- [Develop](#develop)
- [Share](#share)

### Contribute

A colleague of mine sent me a link [Grant Slatton's 'How to write a good design document'](https://grantslatton.com/how-to-design-document?utm_source=tldrnewsletter) and I thought it was really good.

So, then I explored his posts and found ['Small Web'](https://grantslatton.com/small-web); a post noting that the internet needs more "**small web**" sites.

I'd like to contribute a small web site. The internet is filling up with posts written by Generative AI. Maybe I can provide something original?

### Practice

Its rare I get to write a lot of prose these days.
I'm out of practice. So, it wouldn't surprise me if my writing skills had deteriorated.

What better way to get back than give my self somewhere to practice writing? Maybe I'll get better than I've ever been. Perhaps I'll even expand my vocabulary.

### Create

I think this could be a creative outlet. A space to make something, even if just for myself. If just once someone happens to read any of my posts and find some joy from them that would be a bonus.

### Develop

For the last few years I've been working as a developer.
My developer ego feels unsatisfied that I don't have my own website.

Moreover, this is an opportunity to learn another set of technologies that make this web site work.

### Share

I'm 30 now and like everyone, I've learnt some things. Maybe sharing what I've learned could help someone else one day.

## Who?

"*Who is this blog for?*"

Everyone.

When I'm writing it, its for me.

When you're reading it, its for you.

## What?

"*What did I use to build this blog?*"

This blog is built using [Jekyll](https://jekyllrb.com/), a [Ruby Gem](https://jekyllrb.com/docs/ruby-101/#gems).

Something based on [Ruby](https://www.ruby-lang.org/en/) would not have been my first choice because I've no former experience with it.

Microsoft Copilot suggested it when I asked what web framework I could use to develop my own blog with.

My primary reasons for trying it out are twofold.

Firstly, the majority of content can be written in [Markdown](https://www.markdownguide.org/). Meaning that, what I write is very transportable. For example, I can simply copy and paste content to and from my favorite note taking application; [Obsidian](https://obsidian.md/).

Secondly, it easily integrates with [GitHub Pages](https://pages.github.com/). Meaning that, deployment is a breeze.

A bonus too is that I get some exposure to other programming languages and expand my skill set.

The icing on the cake? Pre-built themes. I can focus on the content and the framework will make it look presentable for me.

## Where?

"*Where is this blog hosted?*"

As I said before, [GitHub Pages](https://pages.github.com/).

This blog is maintained via a [GitHub](https://github.com/) repository. How cool is that? I benefit from all of [git](https://git-scm.com/)'s version control capabilities!

It's deployed using [GitHub Actions](https://github.com/features/actions).

## How?

"*How can you build a blog using Jekyll?*"

Would you like to know how to build a blog like this yourself?

I'll tell you anyway.

### Create a GitHub repository

Assuming you have an account, create a [GitHub](https://github.com/) repository and name it "*username*.github.io" (**remember to replace "*username*" with your actual username** - that's worth keeping in mind in the following steps to).

Make sure you set visibility to "Public".

I suggest adding a README.md for your own benefit (so set it to "On", rather than "Off").

Save yourself from problems later by adding a .gitignore and select "Jekyll".

### Clone your repository

Clone your repository.

### Install requirements

Essentially, you are going to need:

- ruby
- gem
- bundler
- jekyll

You can figure out how to install these pre-requisites. I believe in you.

#### I use [NixOS](https://nixos.org/) btw

I will show you what I did to install what I needed on [NixOS](https://nixos.org/).

I'm still fairly new to this OS, so forgive me, I know this is not the nix-way:

```bash
nix-shell -p ruby gem bundler
gem install jekyll bundler
```

### Create a new blog

Run:

```bash
cd username.github.io
jekyll new myblog
cp myblog/* ./ -r  # cp the files over
rm myblog/ -r  # rm the old directory
bundle install  # install missing gems
```

Ready to see what your new blog looks like? Run:

```bash
bundle exec jekyll serve
```

Then go to: http://localhost:4000

To stop serving, use `Ctrl`+`c`.

You'll get the [Minima](https://github.com/jekyll/minima?tab=readme-ov-file) theme by default.

### Commit the files

Run:

```bash
git add .
git commit -m "my first commit"
git push origin main
```

### Add the workflow

Go to your [GitHub](https://github.com) repository.

Click "Settings" (at the top)

Click "Pages" (under "Code and automation")

Click "GitHub Actions" (under "Source", which is under "Build and deployment")

Click "Actions (at the top)

Set up a workflow using "Jekyll" (that's *exactly* what its called).

You should get a file called `.github/workflows/jekyll.yml`:

```yaml
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

# Sample workflow for building and deploying a Jekyll site to GitHub Pages
name: Deploy Jekyll site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        # https://github.com/ruby/setup-ruby/releases/tag/v1.207.0
        uses: ruby/setup-ruby@4a9ddd6f338a97768b8006bf671dfbad383215f4
        with:
          ruby-version: '3.1' # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically
          cache-version: 0 # Increment this number if you need to re-download cached gems
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Build with Jekyll
        # Outputs to the './_site' directory by default
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        # Automatically uploads an artifact from the './_site' directory by default
        uses: actions/upload-pages-artifact@v3

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Deploy

Click on "Actions" (at the top)

Did you get a green circle/tick? That means success: Go to https://username.github.io/ to see your site in action!

Did you get a red circle/tick? That means deployment failed. Don't worry, it happened to me too. Read the error(s) and adjust accordingly.

On the first run, I got the following error message:

```bash
...
 ERROR:  Error installing bundler:
  	bundler-2.7.1 requires Ruby version >= 3.2.0. The current ruby version is 3.1.6.
...
```

and had to make the following adjustment to the workflow file:

```diff
...

        with:
-          ruby-version: '3.1' # Not needed with a .ruby-version file
+          ruby-version: '3.2' # Not needed with a .ruby-version file
...
```

### Update

Every time you make a commit on the main branch, the action will run the workflow again deploying the site.

So, you can just focus on adding posts to the `_posts` directory with markdown files using the following file naming convention `YEAR-MONTH-DAY.title.MARKUP` (e.g, `2025-08-05-my-post.md`).

Edit the `_config.yml` file with the information you want to see.

## Thank you

Thanks for reading!
