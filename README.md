# TagInput 🏷️

Tags are pieces of text that can be used as keywords for online content such as blog posts.

This is a React component that provides a user-friendly way to input tags.

![Demo of TagInput component](https://daniel-figcaption-tag-input.netlify.app/taginput-demo.gif "Demo")

[🔗 Link to online demo](https://daniel-figcaption-tag-input.netlify.app/)

### Adding tags
The user can type in a new tag and then add it by either typing a comma (`,`) or hitting the `Enter` key.

### Removing tags
* Any tag can be removed by clicking the × on the undesired tag.
* The most recent tag can be removed by hitting the `Backspace` key twice (first to highlight, secondly to remove).

## Design Concerns

Designing custom form controls in a rubust and user-friendly way is a daunting task with many pitfalls.

Some of the boxes we need to check:
* Has an obvious focus style that makes it stand out from the other controls when in use.
* Can be controlled by keyboard alone without the aid of a mouse.
* Is accessible to screen readers.
* Stores data in a serializable way to be submitted upon form submit.
* Respects the tab order of the page and can be focused in this way.
* Works reliably across all devices and on mobile.
