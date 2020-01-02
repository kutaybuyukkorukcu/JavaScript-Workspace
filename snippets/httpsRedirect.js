// Redirects the page to HTTPS if it's currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as it's replaced in the history.

// location.protocol to get the protocol currently being used. If it's not HTTPS, use location.replace() to replace the existing page with the HTTPS version of the page.
// location.href to get the full address, split it with split() and remove the protocol part of the URL.

const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

// Exp.
  httpsRedirect();
  // If you are on http://mydomain.com, you are redirected to https://mydomain.com
