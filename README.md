# wc-enhanced-form
Enhancing a form with web components

As a means of exploring the limits, possibilities, pain points of web components
- simple enhancement of html elements

NB the `is` attribute is not supported by Safari. However this is a progressive enhancement, so the form will continue to work correctly.

## Confirm Form

Extends native form element, inserting a dialog to confirm submission.

### Next steps
- How could we do this in a Safari-friendly way?
- Move component code out of index.html (including template)
- Handle validation errors
  - On submit, display validation information in dialog or other element


## Form Group
- wraps form control using slot
- adds label
- displays validation guide ('This field is required')
- displays validation errors

references
- https://roshan-khandelwal.medium.com/web-components-c7aef23fe478
  - demonstrates loading of html into wc, but does require webpack
- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
- https://blog.revillweb.com/extending-native-dom-elements-with-web-components-233350c8e86a
  - discusses [is]
