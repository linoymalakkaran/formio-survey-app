# Form.io contrib components library

This module contains contributed components for use with Form.io. It also serves as a good example on how you can
create your very own custom components library that can be used with Form.io platform.

## Installation
To install this library, do the following.

```
npm install --save @formio
```

## Usage

```javascript
import { Formio } from 'formiojs';
import CheckMatrix from '@formio/contrib';
Formio.use(CheckMatrix);
```

You can also include this library within the DOM of your application like the following.

```html
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="/dist/survey-cust-component.min.js"></script>
<link rel="stylesheet" href="/dist/survey-cust-component.css">
<script type="text/javascript">
    Formio.use(CheckMatrix);
</script>
```

Or you can use the **survey-cust-component.use.min.js** file which automatically adds the ```Formio.use``` method.

```html
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="/dist/survey-cust-component.use.min.js"></script>
<link rel="stylesheet" href="/dist/survey-cust-component.css">
```

### Using within the Form.io Developer Portal
It is also possible to inject custom components within the Form.io Developer Portal. This allows you to use the Developer Portal to create forms that include your custom components. Note: This currently only works with the Next portal @ https://next.form.io

To make this work, navigate to your project settings, and then click on **Custom JS and CSS**. Within the **Custom JavaScript** box, you will then place the hosted URL to the **dist/survey-cust-component.use.min.js** file within this library, like so.

![](https://api.monosnap.com/file/download?id=dQmYlhPWLa7mDDDJMN1VpkJwXy7iHG)

You can also use the unpkg url to this repo to test this out. [/dist/survey-cust-component.use.min.js](/dist/survey-cust-component.use.min.js)

### Using within the Form Manager application
You can also use this method to introduce custom components into the Form Manager application. To get this to work, you just need to Enable Public configurations within your project settings, and then provide the **js** setting to contain the URL of the **dist/survey-cust-component.use.min.js** file within this repository like so.


## Mamar application usage:
 1. CDN to include for rendering cutom components
    i. <script src="https://cdnjs.cloudflare.com/ajax/libs/uuid/8.1.0/uuidv4.min.js"></script>
    ii. <script src="https://unpkg.com/ejs@3.1.3/ejs.min.js"></script>
