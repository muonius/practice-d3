---
title: "Ian Johnson"
description: "Ian and I talk about his long history of building up the d3.js community, his day-to-day working at Observable, and the value of breaking projects down into small pieces."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/szhv4byuva
---

# Ian Johnson

Ian and I talk about his long history of building up the d3.js community, his day-to-day working at Observable, and the value of breaking projects down into small pieces.

## Links

[@enjalot](https://twitter.com/enjalot)

## Transcript

**Amelia**:
[00:00:00]

Today we have Ian Johnson on. He's a data visualization developer at Observable, and he's been a big part of the d3.js community for a while now. So Ian, if you want to introduce yourself and talk about your history with the d3 community...


**Ian**:
[00:00:17]

Sure. Yeah. I mean, it's actually  been almost 10 years.... well, d3 has been out for, will have been out for 10 years in February, 2021. And I sort of stumbled onto it by joining a startup in 2011, where they were like, "Hey, we want to build some visualization tools. This new library came out. Can you help us? Let's figure it out and build stuff with it."

So I got pretty lucky there, in terms of, it's turned out to be a great library and a great tool to use, to make visualizations all that time. I think, though, I remember back then the main way to learn it was by asking questions on the mailing list. And, you know, I spent a good six months banging my head against the desk, trying to understand the enter, update, exit pattern and we actually started a meetup because it was so hard to learn.

We started at the SF Bay area meetup as like 10 people getting together for coffee to talk about d3 and so I've been part of that for a long time as well, which has been a great way to see what other people are making and learn from other folks.


**Amelia**:
[00:01:43]

I love that. I went to the d3 unconf conference, or non-conference, last year.  How have you seen the community grow over the past decade? Because, I feel like, the 10 people in a coffee shop to the conference last year, it's really grown a lot.


**Ian**:
[00:02:11]

Yeah, yeah, the community is huge. I mean, d3 is one of the most like, starred, or whatever, Github projects / open source projects out there, but the community  of people sharing and making work has grown a lot over that time.

I think it's really interesting to see. So the unconference came about as a recognition that there are some big data viz conferences, but what was really nice about the meetups was chatting with everybody and the one-on-one conversations that we did get at the nice conferences, you know, between the sessions you get to have spirited discussions about how people did things and that kind of stuff. So we wanted to say, can we have an event where that's all we do. And we also purposely limited to a hundred people. So, we've done five of them now, last year was the most recent, and we always keep it to that size to where you don't feel overwhelmed.

You can't quite meet every single person, but you feel like you can, you know, talk to folks. You can always reach someone you want to talk to. Yeah. So I think that, you know, one thing I've also appreciated by the d3 community, both the in-person meetups, the conferences, and online is how humble and welcoming people are.

I think there's something about d3 where it combines design, software engineering, data analytics, and data science, all of these disciplines that it's hard enough to be an expert at any one of those to expect to be an expert at all of them is pretty much impossible. I mean, there's people like you that make amazing things, right? But you also know that like you've learned a lot from folks in the community and you partner with people, I think right? And there's... it's just impossible to know all the things about all the things. Nobody comes in with a better-than-thou attitude.

And I think that that's always been really encouraging for me as someone who, at this time after doing it for so long, there's a lot of d3 stuff I know, but there's way more d3 stuff that I don't know. I'm still constantly learning from you, from folks like Shirley, and Nadieh, right? Just people making beautiful, impactful visualizations, always combining new techniques and pulling on stuff from these different disciplines. It never you never stop learning. So while that could be imposing in one way, the other, to me, is inspiring because there is no ceiling.



**Amelia**:
[00:05:15]

I think you hit the nail on the head. It's just such a great welcoming community with such a diverse set of people. Like, I think you have a CS background, I have like a psychology neuro background, there's people who are from research backgrounds, people who are from... what's something weird? What's the weirdest background you've heard?


**Ian**:
[00:05:40]

The weirdest background? I know there's people that are school teachers. I've noticed that a lot of designers I've met that I ended up doing data viz projects have a different background from like design, right? So like anthropology... it's really cool. Like people come in basically wanting to express some data, like some patterns or something they know about, right? But in this new way, using programming to be able to automate or make it interactive or, yeah, bringing a different perspective in, right?

And so you get so many different perspectives. It's really cool.


**Amelia**:
[00:06:29]

Yep. And we're always learning from each other. And I think that's so great. Kind of related, you've been doing data visualization for almost a decade now, or maybe a decade now. What is the strongest motivation for you to keep visualizing data? What's the best part about it?


**Ian**:
[00:06:52]

The strongest  motivation for me is trying to gain a better understanding of how things work. I feel like data is the most direct way to see what's going on in a complex system. A lot of the work I've done over the years has been in trying to understand complex systems. So it could be large-scale computing, could be elections or COVID, that kind of stuff. Anything where there's a lot of things going on, it's really complicated, a lot of things to consider, but we also have good data on it, I feel is a prime candidate for applying visualization to.

And the more I do it and the more I see people do it, the more ideas I get for ways that it could be done better. And so to me that continues to motivate me.


**Amelia**:
[00:08:00]

Yeah. It seems that as a design challenge, there're enough  constraints that there's just always a constrained space to work in. Like, if you're working with a specific dataset, it's not just design a button or design a date picker, which I guess has its own constraints, but each data set you work with is going to have its own constraints, especially if they're really complicated, like the election data sets. I feel like every election we have new new data viz from all the different news sites, which is fun. And we never feel like we've solved it, right? It's always kind of evolving, which is a fun journey.


**Ian**:
[00:08:45]

Absolutely. And I just want to add to that I feel that data viz is also about communicating, right?

So you're trying to express something that you see, right? Like maybe it's a pattern in that system, or you're trying to... first, you might be trying to understand as the creator of the viz, trying to work with that data and understand what's happening. But once you've learned something about what's happening, trying to communicate that to other people is another challenge.

And you could write a paragraph, you could write an essay, or you can make a static visualization, you could make an animated or an interactive visualization. And so to me, there's just so much opportunity to figure out how to express that understanding. And it takes a lot of creativity to do it well, or do better each time.


**Amelia**:
[00:09:45]

Yeah, totally.

So you work at Observable. What does your day-to-day look like there?


**Ian**:
[00:09:53]

My day-to-day Observable is interesting. Most days I am making some kind of notebook, So, whether I'm helping document various aspects of d3 or make examples of features for Observable or... I'm also doing this live stream where we try to challenge ourselves in various ways.

It's interesting because, for me, that's the best way to move forward: to make small things often. I feel like when I've been able to do that in the past is how my skills have grown the most and the fastest. And so at Observable, we're trying to build a tool that enables that, and helps you think with your data.

So I'm just happy that I get to do that every day. Like, try to make a small pieces, put those pieces together, fork other people's examples or datasets, push those forward. Yeah. That's a good portion. I guess the I'm also helping part of Observable supporting the d3 community.

So I'm helping organize, it's not an Observable thing, but, now that we don't do in-person meetups or in-person conferences, trying to help advance the d3 community online. And so that might be doing more events online, as well as, improve the the way that you access and learn about d3 online.


**Amelia**:
[00:11:47]

Yeah. You love organizing d3 things.


**Ian**:
[00:11:55]

Yeah. From my perspective, the more cool viz I get to see, the happier I am. And there are a lot of ways I feel that you can make it easier for people to do something. Either make it easier for them to share it, easier for them to learn, then they'll get farther along in their journey and share, and be able to share their more unique perspective, right? I feel like when you're starting out, it's a little harder because you have to figure out how this stuff works and you may feel like, "Oh, I'm doing something for the first time" for you, but you've seen people making like really amazing things out there and you want to get there. So just accelerating that as, as much as possible is definitely motivational for me.


**Amelia**:
[00:12:47]

Yeah. I love seeing Observable examples because, first of all, the code is all there.  So if you want to dissect it and figure out how it works, all you have to do is open the link and kind of look at how the different pens are put together. And then the remix factor is really fun where you're like, "I want to take this person's legends and then this map and kind of put them together."

And it's just really easy to work on little parts and then combine them together. which I find really valuable because otherwise you're like, "Oh no, I have to make this whole visualization." Like I want to do this big thing. And then you're sitting there and you're like, "This is going to be a lot of work", but it's nice to have not a blank sheet of paper to then edit.

**Ian**:


Yeah. And to sort of add to that a little bit, because I a hundred percent agree. You know, I've found many times in like doing my day job type visualization work. especially in the past, like working at big companies, it's like, you're building a code base. You have all these like ways that you do it in that code base or in that project. But ,let's say you see something somebody makes and you're like, that's a good idea. I would love to have that technique. But for my data in my project, what I've found over time is that, you know, it can be tempting to try to copy paste. Let's say, you know, often this happens with a d3 example. You want to copy paste that example, bring it into your environment and make it work. But in fact, I feel it can be much more effective to understand what that technique is and what it's doing in, in that context. And so when you go to do it in your project, you're not trying to fit a bunch of things somebody else decided into how you decided to do things. You're just like, okay. Like, I want to be able to do a crazy SVG gradient, based on the data and this, you know, layer of my thing.  There are so many technical moving parts, just in the example, that if you can isolate to, like, I tweaked it there and I played with it and I like how that works. Let me just take that little piece and bring it into my bigger projects. I found that to be really valuable, to be able to do that, which is kind of newer with Observable.

**Amelia**:

Yeah. I really like that. I think something at least us d3 old-timers are familiar with is: a lot of us learned by copying and pasting entire code snippets for the whole chart. And then, you might not even understand all of it, but it's in your project and then you have to maintain it and you don't exactly understand how everything works. Iin the course, I kind of split it up into... I think there's a seven step process of get the data, create your scales, create the wrapper, that kind of thing, to like kind of break it up into different parts.

So I think anything where you're not like here's the chart code, look at it. But instead you have these pens where you're like... this variable is created this way. I think it can be really helpful, especially when you're first starting out.


**Ian**:
[00:16:19]

Yeah, I really liked that because looking for me also. I've given a bunch of workshops in the past and talked to a lot of people at meetups, and I think it's really helpful when folks start to look at it more as a process rather than a single output.

So it was like the examples, or even, you know, polished visualizations that people make. It makes it, it can make it feel like, "Oh, that's a thing. I want that thing." Rather than looking at it more like, "Oh there are a bunch of different processes, a bunch of pieces to this process." And I can learn a new data processing technique, or I can learn about a new utility function that makes it easier to do the data part or getting the data part. And that's different from like a new layout or a new, you know, SVG technique or something. And so when you can see that and you can break things down, you just end up a lot less confused when something small changes, but everything disappears or breaks or whatever. Right. But it can definitely happen.


**Amelia**:
[00:17:30]

Yeah. Way too often.

I think this is really great. I love these tips for breaking things down. Is there anything else that you think would be really helpful for someone just starting out with d3 to know either about the library or the community?


**Ian**:
[00:17:53]

Sure. D3 has a lot of stuff in it, there's a lot of modules, a lot of functions. I mean, you've made an excellent visualization and tutorial to go with it. So I try to always reassure people that you don't have to know all of it at once.

You don't have to know even a good fraction of it, to have it help you. And I tend to just encourage people to do smaller projects and examples to start with than they even think they should. Like, try to figure out what the smallest thing is that you can make progress on, because, especially starting out, you can easily balloon your scope and get frustrated or stuck.

And, even today, even after doing this for yeah, pretty much 10 years,. I get stuck and I ask myself, "How can I do like a smaller step? What is a way I could break this down and just tackle like a smaller piece?"


**Amelia**:
[00:19:02]

Awesome. Such great advice.

Thanks so much for taking the time today.