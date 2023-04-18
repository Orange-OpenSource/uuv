# Anglais
## Given
### I set viewport to preset {string}
> Sets the viewport dimensions with one of the presets defined by Cypress: https://docs.cypress.io/api/commands/viewport#Preset

### I set viewport with width {int} and height {int}
> Sets the viewport dimensions to the specified width and length

## When
### I click
> Triggers a click on the selected element

### I set header(s) for uri {string} and method {string}
> Sets one or more headers to the indicated http request and only for the Http method (GET / POST / etc...) passed as a argument

### I set header(s) for uri {string}
> Sets one or more headers to the indicated http request

### I set header(s) for uri {string} and method {string}
> Set one or more headers to the indicated http request and only for the Http method (GET / POST / etc...) passed in parameter

### I reset context
> Deletes selected element and timeout

### I set timeout with value {int}
> Sets the timeout value (in millisecond) for finding element in the DOM

### I type the sentence {string}
> Writes the sentence passed as a parameter (useful for example to fill in a form field)

### I visit path {string}
> Navigate to the Uri passed as a argument (full url consisting of the BASE_URL + Uri) or navigate to Url if begin with http:// or https://

### Within the element with aria-label {string}
> Selects the element whose aria-label is specified

### Within the element with selector {string}
> Selects the element whose selector is specified

### Within the element with role {string} and name {string}
> Selects the element whose [accessible role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types) and accessible [name](https://russmaxdesign.github.io/html-elements-names/) are specified

### Within the element with testId {string}
> Selects the element whose data-testId attribute is specified

### I mock a request {} on uri {string} named {string} with content {}
> Mock a named API response with body

### I mock a request {} on uri {string} named {string} with fixture {}
> Mock a named API response with file's extension .json, .js, .coffee, .html, .txt, .csv, .png, .jpg, .jpeg, .gif, .tif, .tiff, .zip

### I mock a request {} on uri {string} named {string} with status code {int}
> Mock a named API response with status code

## Then
### I should see these attributes with values
> Checks Html attributes of the selected element

### I should see an element with aria-label {string} and content {string}
> Checks that an Html element exists with the specified aria-label attribute and content

### I should see an element with aria-label {string}
> Checks that an Html element exists with the specified aria-label attribute

### I should see an element with content {string}
> Checks that an Html element exists with the specified content

### I should see an element with selector {string}
> Checks that an Html element exists with the specified selector

### I should see an element with role {string} and name {string} and content {string} disabled
> Checks that an Html element exists with the specified [accessible role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types), [name](https://russmaxdesign.github.io/html-elements-names/) and content, and with the disabled attribute set to true

### I should see an element with role {string} and name {string} and content {string} not disabled
> Checks that an Html element exists with the specified [accessible role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types), [name](https://russmaxdesign.github.io/html-elements-names/) and content, and with the disabled attribute set to false

### I should see an element with role {string} and name {string} and content {string}
> Checks that an Html element exists with the specified [accessible role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types), [name](https://russmaxdesign.github.io/html-elements-names/) and content

### I should see an element with role {string} and name {string}
> Checks that an Html element exists with the specified [accessible role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types) and [name](https://russmaxdesign.github.io/html-elements-names/)

### I should see an element with testId {string}
> Checks that an Html element exists with the specified data-testid attribute

### I should see elements of the list with name {string}
> Checks that there is a list with the specified [name](https://russmaxdesign.github.io/html-elements-names/) and content

### I should not see an element with content {string}
> Checks that an Html element does not exists with the specified content

### I should not see an element with testId {string}
> Checks that an Html element does not exists with the specified data-testid attribute

### I should not see an element with role {string} and name {string}
> Checks that an Html element does not exists with the specified [accessible role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types) and [name](https://russmaxdesign.github.io/html-elements-names/)

### I should not see an element with aria-label {string}
> Checks that an Html element does not exists with the specified aria-label attribute

### I should consume a mock named {string}
> Wait that a named mock has been consumed until timeout

### I wait {int} ms
> Wait milliseconds

### I should not have any accessibility issue
> Check that the current page have no [accessibility issue](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)

## Par rôle
### alert
#### Within alert named {string}
> 

#### I should see a(n) alert named {string}
> 

#### I should not see a(n) alert named {string}
> 

#### I should see a(n) alert named {string} and containing {string}
> 

#### I should see a(n) alert named {string} and containing {string} disabled
> 

#### I should see a(n) alert named {string} and containing {string} enabled
> 

### alertdialog
#### Within alert dialog named {string}
> 

#### I should see a(n) alert dialog named {string}
> 

#### I should not see a(n) alert dialog named {string}
> 

#### I should see a(n) alert dialog named {string} and containing {string}
> 

#### I should see a(n) alert dialog named {string} and containing {string} disabled
> 

#### I should see a(n) alert dialog named {string} and containing {string} enabled
> 

### application
#### Within application named {string}
> 

#### I should see a(n) application named {string}
> 

#### I should not see a(n) application named {string}
> 

#### I should see a(n) application named {string} and containing {string}
> 

#### I should see a(n) application named {string} and containing {string} disabled
> 

#### I should see a(n) application named {string} and containing {string} enabled
> 

### article
#### Within article named {string}
> 

#### I should see a(n) article named {string}
> 

#### I should not see a(n) article named {string}
> 

#### I should see a(n) article named {string} and containing {string}
> 

#### I should see a(n) article named {string} and containing {string} disabled
> 

#### I should see a(n) article named {string} and containing {string} enabled
> 

### banner
#### Within banner named {string}
> 

#### I should see a(n) banner named {string}
> 

#### I should not see a(n) banner named {string}
> 

#### I should see a(n) banner named {string} and containing {string}
> 

#### I should see a(n) banner named {string} and containing {string} disabled
> 

#### I should see a(n) banner named {string} and containing {string} enabled
> 

### button
#### Within button named {string}
> 

#### I should see a(n) button named {string}
> 

#### I should not see a(n) button named {string}
> 

#### I should see a(n) button named {string} and containing {string}
> 

#### I should see a(n) button named {string} and containing {string} disabled
> 

#### I should see a(n) button named {string} and containing {string} enabled
> 

### cell
#### Within cell named {string}
> 

#### I should see a(n) cell named {string}
> 

#### I should not see a(n) cell named {string}
> 

#### I should see a(n) cell named {string} and containing {string}
> 

#### I should see a(n) cell named {string} and containing {string} disabled
> 

#### I should see a(n) cell named {string} and containing {string} enabled
> 

### checkbox
#### Within checkbox named {string}
> 

#### I should see a(n) checkbox named {string}
> 

#### I should not see a(n) checkbox named {string}
> 

#### I should see a(n) checkbox named {string} and containing {string}
> 

#### I should see a(n) checkbox named {string} and containing {string} disabled
> 

#### I should see a(n) checkbox named {string} and containing {string} enabled
> 

### columnheader
#### Within column header named {string}
> 

#### I should see a(n) column header named {string}
> 

#### I should not see a(n) column header named {string}
> 

#### I should see a(n) column header named {string} and containing {string}
> 

#### I should see a(n) column header named {string} and containing {string} disabled
> 

#### I should see a(n) column header named {string} and containing {string} enabled
> 

### combobox
#### Within combo box named {string}
> 

#### I should see a(n) combo box named {string}
> 

#### I should not see a(n) combo box named {string}
> 

#### I should see a(n) combo box named {string} and containing {string}
> 

#### I should see a(n) combo box named {string} and containing {string} disabled
> 

#### I should see a(n) combo box named {string} and containing {string} enabled
> 

### command
#### Within command named {string}
> 

#### I should see a(n) command named {string}
> 

#### I should not see a(n) command named {string}
> 

#### I should see a(n) command named {string} and containing {string}
> 

#### I should see a(n) command named {string} and containing {string} disabled
> 

#### I should see a(n) command named {string} and containing {string} enabled
> 

### comment
#### Within comment named {string}
> 

#### I should see a(n) comment named {string}
> 

#### I should not see a(n) comment named {string}
> 

#### I should see a(n) comment named {string} and containing {string}
> 

#### I should see a(n) comment named {string} and containing {string} disabled
> 

#### I should see a(n) comment named {string} and containing {string} enabled
> 

### complementary
#### Within complementary named {string}
> 

#### I should see a(n) complementary named {string}
> 

#### I should not see a(n) complementary named {string}
> 

#### I should see a(n) complementary named {string} and containing {string}
> 

#### I should see a(n) complementary named {string} and containing {string} disabled
> 

#### I should see a(n) complementary named {string} and containing {string} enabled
> 

### composite
#### Within composite named {string}
> 

#### I should see a(n) composite named {string}
> 

#### I should not see a(n) composite named {string}
> 

#### I should see a(n) composite named {string} and containing {string}
> 

#### I should see a(n) composite named {string} and containing {string} disabled
> 

#### I should see a(n) composite named {string} and containing {string} enabled
> 

### contentinfo
#### Within contentinfo named {string}
> 

#### I should see a(n) contentinfo named {string}
> 

#### I should not see a(n) contentinfo named {string}
> 

#### I should see a(n) contentinfo named {string} and containing {string}
> 

#### I should see a(n) contentinfo named {string} and containing {string} disabled
> 

#### I should see a(n) contentinfo named {string} and containing {string} enabled
> 

### definition
#### Within definition named {string}
> 

#### I should see a(n) definition named {string}
> 

#### I should not see a(n) definition named {string}
> 

#### I should see a(n) definition named {string} and containing {string}
> 

#### I should see a(n) definition named {string} and containing {string} disabled
> 

#### I should see a(n) definition named {string} and containing {string} enabled
> 

### dialog
#### Within dialog named {string}
> 

#### I should see a(n) dialog named {string}
> 

#### I should not see a(n) dialog named {string}
> 

#### I should see a(n) dialog named {string} and containing {string}
> 

#### I should see a(n) dialog named {string} and containing {string} disabled
> 

#### I should see a(n) dialog named {string} and containing {string} enabled
> 

### directory
#### Within directory named {string}
> 

#### I should see a(n) directory named {string}
> 

#### I should not see a(n) directory named {string}
> 

#### I should see a(n) directory named {string} and containing {string}
> 

#### I should see a(n) directory named {string} and containing {string} disabled
> 

#### I should see a(n) directory named {string} and containing {string} enabled
> 

### document
#### Within document named {string}
> 

#### I should see a(n) document named {string}
> 

#### I should not see a(n) document named {string}
> 

#### I should see a(n) document named {string} and containing {string}
> 

#### I should see a(n) document named {string} and containing {string} disabled
> 

#### I should see a(n) document named {string} and containing {string} enabled
> 

### feed
#### Within flow named {string}
> 

#### I should see a(n) flow named {string}
> 

#### I should not see a(n) flow named {string}
> 

#### I should see a(n) flow named {string} and containing {string}
> 

#### I should see a(n) flow named {string} and containing {string} disabled
> 

#### I should see a(n) flow named {string} and containing {string} enabled
> 

### figure
#### Within figure named {string}
> 

#### I should see a(n) figure named {string}
> 

#### I should not see a(n) figure named {string}
> 

#### I should see a(n) figure named {string} and containing {string}
> 

#### I should see a(n) figure named {string} and containing {string} disabled
> 

#### I should see a(n) figure named {string} and containing {string} enabled
> 

### form
#### Within form named {string}
> 

#### I should see a(n) form named {string}
> 

#### I should not see a(n) form named {string}
> 

#### I should see a(n) form named {string} and containing {string}
> 

#### I should see a(n) form named {string} and containing {string} disabled
> 

#### I should see a(n) form named {string} and containing {string} enabled
> 

### generic
#### Within generic named {string}
> 

#### I should see a(n) generic named {string}
> 

#### I should not see a(n) generic named {string}
> 

#### I should see a(n) generic named {string} and containing {string}
> 

#### I should see a(n) generic named {string} and containing {string} disabled
> 

#### I should see a(n) generic named {string} and containing {string} enabled
> 

### grid
#### Within grid named {string}
> 

#### I should see a(n) grid named {string}
> 

#### I should not see a(n) grid named {string}
> 

#### I should see a(n) grid named {string} and containing {string}
> 

#### I should see a(n) grid named {string} and containing {string} disabled
> 

#### I should see a(n) grid named {string} and containing {string} enabled
> 

### gridcell
#### Within grid cell named {string}
> 

#### I should see a(n) grid cell named {string}
> 

#### I should not see a(n) grid cell named {string}
> 

#### I should see a(n) grid cell named {string} and containing {string}
> 

#### I should see a(n) grid cell named {string} and containing {string} disabled
> 

#### I should see a(n) grid cell named {string} and containing {string} enabled
> 

### group
#### Within group named {string}
> 

#### I should see a(n) group named {string}
> 

#### I should not see a(n) group named {string}
> 

#### I should see a(n) group named {string} and containing {string}
> 

#### I should see a(n) group named {string} and containing {string} disabled
> 

#### I should see a(n) group named {string} and containing {string} enabled
> 

### heading
#### Within title named {string}
> 

#### I should see a(n) title named {string}
> 

#### I should not see a(n) title named {string}
> 

#### I should see a(n) title named {string} and containing {string}
> 

#### I should see a(n) title named {string} and containing {string} disabled
> 

#### I should see a(n) title named {string} and containing {string} enabled
> 

### img
#### Within picture named {string}
> 

#### I should see a(n) picture named {string}
> 

#### I should not see a(n) picture named {string}
> 

#### I should see a(n) picture named {string} and containing {string}
> 

#### I should see a(n) picture named {string} and containing {string} disabled
> 

#### I should see a(n) picture named {string} and containing {string} enabled
> 

### input
#### Within entry named {string}
> 

#### I should see a(n) entry named {string}
> 

#### I should not see a(n) entry named {string}
> 

#### I should see a(n) entry named {string} and containing {string}
> 

#### I should see a(n) entry named {string} and containing {string} disabled
> 

#### I should see a(n) entry named {string} and containing {string} enabled
> 

### landmark
#### Within landmark named {string}
> 

#### I should see a(n) landmark named {string}
> 

#### I should not see a(n) landmark named {string}
> 

#### I should see a(n) landmark named {string} and containing {string}
> 

#### I should see a(n) landmark named {string} and containing {string} disabled
> 

#### I should see a(n) landmark named {string} and containing {string} enabled
> 

### link
#### Within link named {string}
> 

#### I should see a(n) link named {string}
> 

#### I should not see a(n) link named {string}
> 

#### I should see a(n) link named {string} and containing {string}
> 

#### I should see a(n) link named {string} and containing {string} disabled
> 

#### I should see a(n) link named {string} and containing {string} enabled
> 

### list
#### Within list named {string}
> 

#### I should see a(n) list named {string}
> 

#### I should not see a(n) list named {string}
> 

#### I should see a(n) list named {string} and containing {string}
> 

#### I should see a(n) list named {string} and containing {string} disabled
> 

#### I should see a(n) list named {string} and containing {string} enabled
> 

### listbox
#### Within list box named {string}
> 

#### I should see a(n) list box named {string}
> 

#### I should not see a(n) list box named {string}
> 

#### I should see a(n) list box named {string} and containing {string}
> 

#### I should see a(n) list box named {string} and containing {string} disabled
> 

#### I should see a(n) list box named {string} and containing {string} enabled
> 

### listitem
#### Within list item named {string}
> 

#### I should see a(n) list item named {string}
> 

#### I should not see a(n) list item named {string}
> 

#### I should see a(n) list item named {string} and containing {string}
> 

#### I should see a(n) list item named {string} and containing {string} disabled
> 

#### I should see a(n) list item named {string} and containing {string} enabled
> 

### log
#### Within log named {string}
> 

#### I should see a(n) log named {string}
> 

#### I should not see a(n) log named {string}
> 

#### I should see a(n) log named {string} and containing {string}
> 

#### I should see a(n) log named {string} and containing {string} disabled
> 

#### I should see a(n) log named {string} and containing {string} enabled
> 

### main
#### Within main named {string}
> 

#### I should see a(n) main named {string}
> 

#### I should not see a(n) main named {string}
> 

#### I should see a(n) main named {string} and containing {string}
> 

#### I should see a(n) main named {string} and containing {string} disabled
> 

#### I should see a(n) main named {string} and containing {string} enabled
> 

### mark
#### Within mark named {string}
> 

#### I should see a(n) mark named {string}
> 

#### I should not see a(n) mark named {string}
> 

#### I should see a(n) mark named {string} and containing {string}
> 

#### I should see a(n) mark named {string} and containing {string} disabled
> 

#### I should see a(n) mark named {string} and containing {string} enabled
> 

### math
#### Within math named {string}
> 

#### I should see a(n) math named {string}
> 

#### I should not see a(n) math named {string}
> 

#### I should see a(n) math named {string} and containing {string}
> 

#### I should see a(n) math named {string} and containing {string} disabled
> 

#### I should see a(n) math named {string} and containing {string} enabled
> 

### menu
#### Within menu named {string}
> 

#### I should see a(n) menu named {string}
> 

#### I should not see a(n) menu named {string}
> 

#### I should see a(n) menu named {string} and containing {string}
> 

#### I should see a(n) menu named {string} and containing {string} disabled
> 

#### I should see a(n) menu named {string} and containing {string} enabled
> 

### menubar
#### Within menubar named {string}
> 

#### I should see a(n) menubar named {string}
> 

#### I should not see a(n) menubar named {string}
> 

#### I should see a(n) menubar named {string} and containing {string}
> 

#### I should see a(n) menubar named {string} and containing {string} disabled
> 

#### I should see a(n) menubar named {string} and containing {string} enabled
> 

### menuitem
#### Within menuitem named {string}
> 

#### I should see a(n) menuitem named {string}
> 

#### I should not see a(n) menuitem named {string}
> 

#### I should see a(n) menuitem named {string} and containing {string}
> 

#### I should see a(n) menuitem named {string} and containing {string} disabled
> 

#### I should see a(n) menuitem named {string} and containing {string} enabled
> 

### menuitemcheckbox
#### Within menuitemcheckbox named {string}
> 

#### I should see a(n) menuitemcheckbox named {string}
> 

#### I should not see a(n) menuitemcheckbox named {string}
> 

#### I should see a(n) menuitemcheckbox named {string} and containing {string}
> 

#### I should see a(n) menuitemcheckbox named {string} and containing {string} disabled
> 

#### I should see a(n) menuitemcheckbox named {string} and containing {string} enabled
> 

### menuitemradio
#### Within menuitemradio named {string}
> 

#### I should see a(n) menuitemradio named {string}
> 

#### I should not see a(n) menuitemradio named {string}
> 

#### I should see a(n) menuitemradio named {string} and containing {string}
> 

#### I should see a(n) menuitemradio named {string} and containing {string} disabled
> 

#### I should see a(n) menuitemradio named {string} and containing {string} enabled
> 

### meter
#### Within counter named {string}
> 

#### I should see a(n) counter named {string}
> 

#### I should not see a(n) counter named {string}
> 

#### I should see a(n) counter named {string} and containing {string}
> 

#### I should see a(n) counter named {string} and containing {string} disabled
> 

#### I should see a(n) counter named {string} and containing {string} enabled
> 

### navigation
#### Within navigation named {string}
> 

#### I should see a(n) navigation named {string}
> 

#### I should not see a(n) navigation named {string}
> 

#### I should see a(n) navigation named {string} and containing {string}
> 

#### I should see a(n) navigation named {string} and containing {string} disabled
> 

#### I should see a(n) navigation named {string} and containing {string} enabled
> 

### none
#### Within no named {string}
> 

#### I should see a(n) no named {string}
> 

#### I should not see a(n) no named {string}
> 

#### I should see a(n) no named {string} and containing {string}
> 

#### I should see a(n) no named {string} and containing {string} disabled
> 

#### I should see a(n) no named {string} and containing {string} enabled
> 

### note
#### Within note named {string}
> 

#### I should see a(n) note named {string}
> 

#### I should not see a(n) note named {string}
> 

#### I should see a(n) note named {string} and containing {string}
> 

#### I should see a(n) note named {string} and containing {string} disabled
> 

#### I should see a(n) note named {string} and containing {string} enabled
> 

### option
#### Within option named {string}
> 

#### I should see a(n) option named {string}
> 

#### I should not see a(n) option named {string}
> 

#### I should see a(n) option named {string} and containing {string}
> 

#### I should see a(n) option named {string} and containing {string} disabled
> 

#### I should see a(n) option named {string} and containing {string} enabled
> 

### presentation
#### Within presentation named {string}
> 

#### I should see a(n) presentation named {string}
> 

#### I should not see a(n) presentation named {string}
> 

#### I should see a(n) presentation named {string} and containing {string}
> 

#### I should see a(n) presentation named {string} and containing {string} disabled
> 

#### I should see a(n) presentation named {string} and containing {string} enabled
> 

### progressbar
#### Within progress bar named {string}
> 

#### I should see a(n) progress bar named {string}
> 

#### I should not see a(n) progress bar named {string}
> 

#### I should see a(n) progress bar named {string} and containing {string}
> 

#### I should see a(n) progress bar named {string} and containing {string} disabled
> 

#### I should see a(n) progress bar named {string} and containing {string} enabled
> 

### radio
#### Within radio named {string}
> 

#### I should see a(n) radio named {string}
> 

#### I should not see a(n) radio named {string}
> 

#### I should see a(n) radio named {string} and containing {string}
> 

#### I should see a(n) radio named {string} and containing {string} disabled
> 

#### I should see a(n) radio named {string} and containing {string} enabled
> 

### radiogroup
#### Within radio group named {string}
> 

#### I should see a(n) radio group named {string}
> 

#### I should not see a(n) radio group named {string}
> 

#### I should see a(n) radio group named {string} and containing {string}
> 

#### I should see a(n) radio group named {string} and containing {string} disabled
> 

#### I should see a(n) radio group named {string} and containing {string} enabled
> 

### range
#### Within range named {string}
> 

#### I should see a(n) range named {string}
> 

#### I should not see a(n) range named {string}
> 

#### I should see a(n) range named {string} and containing {string}
> 

#### I should see a(n) range named {string} and containing {string} disabled
> 

#### I should see a(n) range named {string} and containing {string} enabled
> 

### region
#### Within region named {string}
> 

#### I should see a(n) region named {string}
> 

#### I should not see a(n) region named {string}
> 

#### I should see a(n) region named {string} and containing {string}
> 

#### I should see a(n) region named {string} and containing {string} disabled
> 

#### I should see a(n) region named {string} and containing {string} enabled
> 

### roletype
#### Within role type named {string}
> 

#### I should see a(n) role type named {string}
> 

#### I should not see a(n) role type named {string}
> 

#### I should see a(n) role type named {string} and containing {string}
> 

#### I should see a(n) role type named {string} and containing {string} disabled
> 

#### I should see a(n) role type named {string} and containing {string} enabled
> 

### row
#### Within row named {string}
> 

#### I should see a(n) row named {string}
> 

#### I should not see a(n) row named {string}
> 

#### I should see a(n) row named {string} and containing {string}
> 

#### I should see a(n) row named {string} and containing {string} disabled
> 

#### I should see a(n) row named {string} and containing {string} enabled
> 

### rowgroup
#### Within row group named {string}
> 

#### I should see a(n) row group named {string}
> 

#### I should not see a(n) row group named {string}
> 

#### I should see a(n) row group named {string} and containing {string}
> 

#### I should see a(n) row group named {string} and containing {string} disabled
> 

#### I should see a(n) row group named {string} and containing {string} enabled
> 

### rowheader
#### Within row header named {string}
> 

#### I should see a(n) row header named {string}
> 

#### I should not see a(n) row header named {string}
> 

#### I should see a(n) row header named {string} and containing {string}
> 

#### I should see a(n) row header named {string} and containing {string} disabled
> 

#### I should see a(n) row header named {string} and containing {string} enabled
> 

### scrollbar
#### Within scroll bar named {string}
> 

#### I should see a(n) scroll bar named {string}
> 

#### I should not see a(n) scroll bar named {string}
> 

#### I should see a(n) scroll bar named {string} and containing {string}
> 

#### I should see a(n) scroll bar named {string} and containing {string} disabled
> 

#### I should see a(n) scroll bar named {string} and containing {string} enabled
> 

### search
#### Within search named {string}
> 

#### I should see a(n) search named {string}
> 

#### I should not see a(n) search named {string}
> 

#### I should see a(n) search named {string} and containing {string}
> 

#### I should see a(n) search named {string} and containing {string} disabled
> 

#### I should see a(n) search named {string} and containing {string} enabled
> 

### searchbox
#### Within search box named {string}
> 

#### I should see a(n) search box named {string}
> 

#### I should not see a(n) search box named {string}
> 

#### I should see a(n) search box named {string} and containing {string}
> 

#### I should see a(n) search box named {string} and containing {string} disabled
> 

#### I should see a(n) search box named {string} and containing {string} enabled
> 

### section
#### Within section named {string}
> 

#### I should see a(n) section named {string}
> 

#### I should not see a(n) section named {string}
> 

#### I should see a(n) section named {string} and containing {string}
> 

#### I should see a(n) section named {string} and containing {string} disabled
> 

#### I should see a(n) section named {string} and containing {string} enabled
> 

### sectionhead
#### Within section header named {string}
> 

#### I should see a(n) section header named {string}
> 

#### I should not see a(n) section header named {string}
> 

#### I should see a(n) section header named {string} and containing {string}
> 

#### I should see a(n) section header named {string} and containing {string} disabled
> 

#### I should see a(n) section header named {string} and containing {string} enabled
> 

### select
#### Within select named {string}
> 

#### I should see a(n) select named {string}
> 

#### I should not see a(n) select named {string}
> 

#### I should see a(n) select named {string} and containing {string}
> 

#### I should see a(n) select named {string} and containing {string} disabled
> 

#### I should see a(n) select named {string} and containing {string} enabled
> 

### separator
#### Within separator named {string}
> 

#### I should see a(n) separator named {string}
> 

#### I should not see a(n) separator named {string}
> 

#### I should see a(n) separator named {string} and containing {string}
> 

#### I should see a(n) separator named {string} and containing {string} disabled
> 

#### I should see a(n) separator named {string} and containing {string} enabled
> 

### slider
#### Within slider named {string}
> 

#### I should see a(n) slider named {string}
> 

#### I should not see a(n) slider named {string}
> 

#### I should see a(n) slider named {string} and containing {string}
> 

#### I should see a(n) slider named {string} and containing {string} disabled
> 

#### I should see a(n) slider named {string} and containing {string} enabled
> 

### spinbutton
#### Within spin button named {string}
> 

#### I should see a(n) spin button named {string}
> 

#### I should not see a(n) spin button named {string}
> 

#### I should see a(n) spin button named {string} and containing {string}
> 

#### I should see a(n) spin button named {string} and containing {string} disabled
> 

#### I should see a(n) spin button named {string} and containing {string} enabled
> 

### status
#### Within status named {string}
> 

#### I should see a(n) status named {string}
> 

#### I should not see a(n) status named {string}
> 

#### I should see a(n) status named {string} and containing {string}
> 

#### I should see a(n) status named {string} and containing {string} disabled
> 

#### I should see a(n) status named {string} and containing {string} enabled
> 

### structure
#### Within structure named {string}
> 

#### I should see a(n) structure named {string}
> 

#### I should not see a(n) structure named {string}
> 

#### I should see a(n) structure named {string} and containing {string}
> 

#### I should see a(n) structure named {string} and containing {string} disabled
> 

#### I should see a(n) structure named {string} and containing {string} enabled
> 

### suggestion
#### Within suggestion named {string}
> 

#### I should see a(n) suggestion named {string}
> 

#### I should not see a(n) suggestion named {string}
> 

#### I should see a(n) suggestion named {string} and containing {string}
> 

#### I should see a(n) suggestion named {string} and containing {string} disabled
> 

#### I should see a(n) suggestion named {string} and containing {string} enabled
> 

### switch
#### Within switch named {string}
> 

#### I should see a(n) switch named {string}
> 

#### I should not see a(n) switch named {string}
> 

#### I should see a(n) switch named {string} and containing {string}
> 

#### I should see a(n) switch named {string} and containing {string} disabled
> 

#### I should see a(n) switch named {string} and containing {string} enabled
> 

### tab
#### Within tab named {string}
> 

#### I should see a(n) tab named {string}
> 

#### I should not see a(n) tab named {string}
> 

#### I should see a(n) tab named {string} and containing {string}
> 

#### I should see a(n) tab named {string} and containing {string} disabled
> 

#### I should see a(n) tab named {string} and containing {string} enabled
> 

### table
#### Within table named {string}
> 

#### I should see a(n) table named {string}
> 

#### I should not see a(n) table named {string}
> 

#### I should see a(n) table named {string} and containing {string}
> 

#### I should see a(n) table named {string} and containing {string} disabled
> 

#### I should see a(n) table named {string} and containing {string} enabled
> 

### tablist
#### Within tablist named {string}
> 

#### I should see a(n) tablist named {string}
> 

#### I should not see a(n) tablist named {string}
> 

#### I should see a(n) tablist named {string} and containing {string}
> 

#### I should see a(n) tablist named {string} and containing {string} disabled
> 

#### I should see a(n) tablist named {string} and containing {string} enabled
> 

### tabpanel
#### Within tabpanel named {string}
> 

#### I should see a(n) tabpanel named {string}
> 

#### I should not see a(n) tabpanel named {string}
> 

#### I should see a(n) tabpanel named {string} and containing {string}
> 

#### I should see a(n) tabpanel named {string} and containing {string} disabled
> 

#### I should see a(n) tabpanel named {string} and containing {string} enabled
> 

### term
#### Within term named {string}
> 

#### I should see a(n) term named {string}
> 

#### I should not see a(n) term named {string}
> 

#### I should see a(n) term named {string} and containing {string}
> 

#### I should see a(n) term named {string} and containing {string} disabled
> 

#### I should see a(n) term named {string} and containing {string} enabled
> 

### textbox
#### Within text box named {string}
> 

#### I should see a(n) text box named {string}
> 

#### I should not see a(n) text box named {string}
> 

#### I should see a(n) text box named {string} and containing {string}
> 

#### I should see a(n) text box named {string} and containing {string} disabled
> 

#### I should see a(n) text box named {string} and containing {string} enabled
> 

### timer
#### Within timer named {string}
> 

#### I should see a(n) timer named {string}
> 

#### I should not see a(n) timer named {string}
> 

#### I should see a(n) timer named {string} and containing {string}
> 

#### I should see a(n) timer named {string} and containing {string} disabled
> 

#### I should see a(n) timer named {string} and containing {string} enabled
> 

### toolbar
#### Within toolbar named {string}
> 

#### I should see a(n) toolbar named {string}
> 

#### I should not see a(n) toolbar named {string}
> 

#### I should see a(n) toolbar named {string} and containing {string}
> 

#### I should see a(n) toolbar named {string} and containing {string} disabled
> 

#### I should see a(n) toolbar named {string} and containing {string} enabled
> 

### tooltip
#### Within tooltip named {string}
> 

#### I should see a(n) tooltip named {string}
> 

#### I should not see a(n) tooltip named {string}
> 

#### I should see a(n) tooltip named {string} and containing {string}
> 

#### I should see a(n) tooltip named {string} and containing {string} disabled
> 

#### I should see a(n) tooltip named {string} and containing {string} enabled
> 

### tree
#### Within tree named {string}
> 

#### I should see a(n) tree named {string}
> 

#### I should not see a(n) tree named {string}
> 

#### I should see a(n) tree named {string} and containing {string}
> 

#### I should see a(n) tree named {string} and containing {string} disabled
> 

#### I should see a(n) tree named {string} and containing {string} enabled
> 

### treegrid
#### Within tree grid named {string}
> 

#### I should see a(n) tree grid named {string}
> 

#### I should not see a(n) tree grid named {string}
> 

#### I should see a(n) tree grid named {string} and containing {string}
> 

#### I should see a(n) tree grid named {string} and containing {string} disabled
> 

#### I should see a(n) tree grid named {string} and containing {string} enabled
> 

### treeitem
#### Within tree item named {string}
> 

#### I should see a(n) tree item named {string}
> 

#### I should not see a(n) tree item named {string}
> 

#### I should see a(n) tree item named {string} and containing {string}
> 

#### I should see a(n) tree item named {string} and containing {string} disabled
> 

#### I should see a(n) tree item named {string} and containing {string} enabled
> 

### widget
#### Within widget named {string}
> 

#### I should see a(n) widget named {string}
> 

#### I should not see a(n) widget named {string}
> 

#### I should see a(n) widget named {string} and containing {string}
> 

#### I should see a(n) widget named {string} and containing {string} disabled
> 

#### I should see a(n) widget named {string} and containing {string} enabled
> 

### window
#### Within window named {string}
> 

#### I should see a(n) window named {string}
> 

#### I should not see a(n) window named {string}
> 

#### I should see a(n) window named {string} and containing {string}
> 

#### I should see a(n) window named {string} and containing {string} disabled
> 

#### I should see a(n) window named {string} and containing {string} enabled
> 
