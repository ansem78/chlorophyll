---
layout: layout
---

### Configuration

Any feature in {{global.name}} has its own configuration variables with their respective default values. These values should not be changed directly.

You can use the /scss/_config.scss partial file to override one or more configuration variable. You only need to override variables you want to set to a different value. All variables you don't override, keep their default values.

Tip: as you only need to override a limited set of variables, you can have multiple configurations for multiple website/apps in /scss/_config.scss partial file. Simply, put in this file all configurations you need in comments and uncomment the configuration you need each time. Or you can save each configurations in a separate file and copy the one you need in /scss/_config.scss before you run the css script.

Below there is a complete list of all configuration variables and the feature they belongs. Click on a variable or on a feature to navigate to the related documentation page.

<table>
<thead>
<tr>
<th>Variable</th>
<th>Default</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>$enable-smooth-scroll</td>
<td>true</td>
<td>Core</td>
</tr>
<tr>
<td>$box-sizing</td>
<td>content-box</td>
<td>Core</td>
</tr>
<tr>
<td>$spacer-base</td>
<td>1rem</td>
<td>Core</td>
</tr>
<tr>
<td>$spacers</td>
<td>(map)</td>
<td>Core</td>
</tr>
<tr>
<td>$enable-negative-margins</td>
<td>true</td>
<td>Core</td>
</tr>
<tr>
<td>$grid-columns</td>
<td>12</td>
<td>Core</td>
</tr>
<tr>
<td>$grid-gutter</td>
<td>1rem</td>
<td>Core</td>
</tr>
<tr>
<td>$breakpoints</td>
<td>(map)</td>
<td>Core</td>
</tr>
<tr>
<td>$z-index-base</td>
<td>100</td>
<td>Core</td>
</tr>
<tr>
<td>$z-indexes</td>
<td>(map)</td>
<td>Core</td>
</tr>
<tr>
<td>$z-index-sticky</td>
<td>99999</td>
<td>Core</td>
</tr>
<tr>
<td>$z-index-fixed</td>
<td>999999</td>
<td>Core</td>
</tr>

</tbody>
</table>
