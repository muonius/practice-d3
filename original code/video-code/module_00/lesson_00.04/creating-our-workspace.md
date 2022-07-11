---
title: "Creating our workspace"
description: We create our wrapper and learn about d3 selection objects.
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/63ggyggz5h
---

# Creating our workspace

<CodeSandboxEmbed
  src="//codesandbox.io/s/oiigh?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Now we're set up and ready to start updating our webpage!

To add elements to our page, we'll need to specify an existing element that we want to append to.

Remember the `#wrapper` element already populated in `index.html`? One of d3's modules, [**d3-selection**](https://github.com/d3/d3-selection), has helper functions to select from and modify the DOM.

We can use `d3.select()` , which accepts a CSS-selector-like string and returns the first matching DOM element (if any). If you're unfamiliar with CSS selector syntax, there are three main types of selectors:

- you can select all elements with a class name (`.class`)
- you can select all elements with an id (`#id`), or
- you can select all elements of a specific node type (`type`).

A> If you've ever used jQuery or written CSS selectors, these selector strings will be familiar.

```javascript
const wrapper = d3.select("#wrapper")
```

Let's log our new `wrapper` variable to the console to see what it looks like.

```javascript
console.log(wrapper)
```

We can see that it's a d3 selection object, with `_groups` and `_parents` keys.

![chart selection](./public/images/1-making-your-first-chart/selection.png)

d3 selection objects **are a subclass of Array**. They have a lot of great methods that we'll explore in depth later - what's important to us right now is the `_groups` list that contains our `#wrapper` div.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/sjy2z?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>