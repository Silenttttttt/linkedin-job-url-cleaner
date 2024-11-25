// ==UserScript==
// @name        LinkedIn Job URL Cleaner
// @namespace   https://github.com/Silenttttttt/linkedin-job-url-cleaner
// @version     1.1.0
// @description Removes tracking parameters from LinkedIn job URLs and handles Google Sorry redirects
// @author      Silenttttttt
// @match       https://linkedin.com/*
// @match       https://*.linkedin.com/*
// @match       https://www.linkedin.com/*
// @match       https://www.google.com/sorry/*
// @license     MIT
// @compatible  chrome
// @compatible  firefox
// @compatible  edge
// @compatible  opera
// @compatible  safari
// ==/UserScript==

(function() {
  'use strict';

  function extractLinkedInJobId(url) {
    // Handle Google Sorry redirect URLs
    if (url.startsWith('https://www.google.com/sorry/')) {
      // Look for LinkedIn job view URL in the redirect
      const linkedInMatch = url.match(/https:\/\/www\.linkedin\.com\/comm\/jobs\/view\/(\d+)/);
      if (linkedInMatch && linkedInMatch[1]) {
        return linkedInMatch[1];
      }
    }

    // Handle direct LinkedIn URLs
    const jobIdMatch = url.match(/\/jobs\/view\/(\d+)/);
    return jobIdMatch ? jobIdMatch[1] : null;
  }

  function checkAndCleanUrl() {
      const currentUrl = window.location.href;

      // Check if URL is already in clean format (with or without trailing slash)
      const cleanUrlPattern = /^https:\/\/www\.linkedin\.com\/jobs\/view\/\d+\/?$/;
      if (cleanUrlPattern.test(currentUrl)) {
          return; // URL is already clean, no action needed
      }

      // Check if URL contains tracking parameter or is a Google Sorry URL
      if (!currentUrl.includes('?trackingId=') && !currentUrl.startsWith('https://www.google.com/sorry/')) {
          return; // No tracking parameter found, no need to clean
      }

      const jobId = extractLinkedInJobId(currentUrl);
      if (jobId) {
          const cleanUrl = `https://www.linkedin.com/jobs/view/${jobId}`;
          window.location.href = cleanUrl;
      }
  }

  // Check immediately
  checkAndCleanUrl();

  // Check every 3 seconds
  setInterval(checkAndCleanUrl, 3000);
})();
