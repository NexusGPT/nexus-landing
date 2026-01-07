# Troubleshooting Guide

## Issue: Seeing ISO Logo and "2 errors X"

If you're seeing an ISO certification logo and an error notification, this indicates:

1. **The page is partially rendering** - The HTML content is loading, but JavaScript errors are preventing full functionality
2. **Check the browser console** - Open DevTools (F12) and check the Console tab for specific error messages

## Common Issues and Solutions

### 1. Script Loading Errors

**Symptoms:** Animations not working, console errors about `animator` or `window.animator`

**Solution:**
- Ensure `lib/framer-animator.js` exists
- Check that scripts are loading in the correct order
- Verify `public/lib/` contains all script files

### 2. Hydration Errors

**Symptoms:** React hydration warnings in console

**Solution:**
- The `suppressHydrationWarning` prop is already added to PageContent
- Ensure HTML content matches between server and client

### 3. Missing SVG Templates

**Symptoms:** SVG graphics not displaying

**Solution:**
- Verify `app/page-body.html` includes the `<div id="svg-templates">` section
- Check that SVG definitions are present

### 4. Animation Not Working

**Symptoms:** Elements appear but don't animate

**Solution:**
- Check browser console for animator-related errors
- Verify `data-framer-appear-id` attributes are present in HTML
- Ensure appear animation configs are loading

## Debugging Steps

1. **Open Browser Console** (F12 → Console tab)
   - Look for red error messages
   - Note the specific error text

2. **Check Network Tab**
   - Verify all scripts are loading (200 status)
   - Check for failed requests

3. **Verify Files Exist**
   ```bash
   ls -la lib/framer-animator.js
   ls -la app/page-body.html
   ls -la public/lib/
   ```

4. **Check Page Source**
   - View page source (Ctrl+U)
   - Verify HTML content is present
   - Check that scripts are in the `<head>` or `<body>`

## Quick Fixes

### If animator isn't loading:
```bash
# Verify the file exists and has content
cat lib/framer-animator.js | head -20
```

### If HTML content is empty:
```bash
# Check if page-body.html exists and has content
wc -l app/page-body.html
```

### If scripts aren't executing:
- Check browser console for CSP (Content Security Policy) errors
- Verify scripts aren't being blocked by ad blockers
- Check if scripts are loading from correct paths

## Getting Help

When reporting issues, please include:
1. Browser console errors (screenshot or copy text)
2. Network tab showing failed requests
3. The specific error message from the "2 errors X" notification
4. Browser and version (Chrome, Firefox, Safari, etc.)

