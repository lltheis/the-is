---
layout: post
title:  "How I came to GitHub pages + Jekyll"
date:   2016-05-27 23:20:36 +0000
categories: programming, learning
---
I've started the job search.
This means that many job applications in the tech world ask for your website. While I had already purchased a domain name (this site here the-is.com - which is an easy way to tell people how to spell my name), it had no content.

My course work at CareerFoundry had us building a site using HTML / CSS / JS, so I started with that framework and asked Google what the best way to host free static pages was. GitHub Pages kept appearing at the top of the list and since my other requirement of being able to use my custom domain was met, I ran with it!

For the first time in my web development journey, I was actually able to follow [listed instructions](https://help.github.com/categories/github-pages-basics/){:target="_blank"} to merge the code I already had and get it linked up to the gh-pages set up GitHub pages requires.

I followed excellent instructions from John Polacek's blog post on keeping gh-pages and master branches in sync [(read it here)](http://johnpolacek.com/2016/01/29/keep-gh-pages-and-master-in-sync-with-one-line-of-code-2/){:target="_blank"}, and made it live! I did try to push through and use the one line of code to do all of those commands, but failed at that, so I'll revisit it another day once I have the basics mastered a bit more.

That page was all working along swimmingly, until I decided to take an 'extra' project for CareerFoundry to host a blog. Their project suggested doing it in rails, but since I cannot host a dynamic rails site on GitHub Pages, I searched for another way to host it.

Enter [Jekyll](https://jekyllrb.com/docs/github-pages/){:target="_blank"} + GitHub Pages.

I thought, "I've got this!" and proceeded with __ATTEMPT #1__. Merge my HTML page with Jekyll manually.
This attempt had my pecking through GitHub accounts [(ArmandGrillet)](https://github.com/ArmandGrillet/armandgrillet.github.io/tree/70417f231aaed4492c2e4036ed55171e3e24f2a2){:target="_blank"} and other blog articles [(Jeron Mols)](http://jeroenmols.com/blog/2015/04/25/blog-creation/){:target="_blank"} to try to re-create their file structure. I really wanted a different homepage than just a list of my blog posts. But no luck. This attempt I did find that with a Vagrant VM + GitHub Pages, I did need to use these instructions to set up my localhost at :3000, not :4000 as most Jekyll instructions show, but I found [this post](http://community.thefirehoseproject.com/2015/07/31/Helpful-Jekyll-Resources.html){:target="_blank"} to get me set up successfully.

__ATTEMPT #2__. Delete all that and create '''jekyll build''' at the root folder 'the-is', while keeping my existing files in place.
On the next attempt after reading a bit more, I decided I should use the '''jekyll build''' command to help me autocreate the files and then I could piece apart my home index.hmtl page in the "_includes" and "_layouts" folders to get it up and working. Boo. Too many duplicate files and I didn't yet know which were important in which location. A mess.

__ATTEMPT #3__. Delete all that, create a /blog folder, and '''jekyll build''' there, while keeping my existing files in place.
Ok, I thought, maybe the issue is that I needed to have my Jekyll files in a separate folder so that they don't interfere with the other index.html and css files. So I created a /blog folder and ran '''jekyll build''' there. Ugh. Then when running '''jekyll serve''', the _config.yml (among other files), were not loading properly as they were not in the root folder.

__ATTEMPT #4__. Delete all that and use some excellent instructions for running your blog from a subdirectory.
Why, o' why hadn't I run across these instructions from [Josh Branchaud](http://joshbranchaud.com/blog/2013/03/02/Running-Your-Jekyll-Blog-from-a-Subdirectory.html){:target="_blank"} yet?! I followed his instructions plus his [GitHub page](https://github.com/jbranchaud/blog){:target="_blank"}.

Yahoo! Yahoo! Yahoo! My index.html, not the Jekyll one was online and the blog nav linked to my blog!! Image links were broken, but that's no worry. I was on a high point of my 'web development graph'. (And for those of you that are distance runners - it's just [like this!](http://www.runnersworld.com/half-marathon/running-a-half-marathon-as-told-by-emojis){:target="_blank"})

But......
Now I ran in to the relative link dilemma. Once I had clicked on the blog page, those relative links kept the /blog/ preface in the URL. :(
Never fear, the web development world always helping fellow developers. I followed [this thread ](https://github.com/jekyll/jekyll/issues/332){:target="_blank"} and prefaced my image URLs with '''{{ site.baseurl }}/assets/''' and my nav links with '''{{ site.baseurl }}/'''. Voila!

So, since you're reading this blog post, things are up and running well. I haven't yet attempted a comments section, so if you have any corrections or questions, feel free to drop me a line at <theis.laura.l@gmail.com>.
