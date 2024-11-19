// ==UserScript==
// @name        LinkedIn Job URL Cleaner
// @namespace   https://github.com/Silenttttttt/linkedin-job-url-cleaner
// @version     1.0.0
// @description Removes tracking parameters from LinkedIn job URLs to prevent application issues
// @author      Silenttttttt
// @match       https://www.linkedin.com/jobs/view/*
// @match       https://*.linkedin.com/jobs/view/*
// @grant       none
// @license     MIT
// @compatible  chrome
// @compatible  firefox
// @compatible  edge
// @compatible  opera
// @compatible  safari
// ==/UserScript==

(function() {
  'use strict';
  
  // Check if current URL is a LinkedIn job view URL and contains tracking parameters
  if (window.location.href.includes('/jobs/view/') && window.location.href.includes('?')) {
    // Extract the job ID using regex
    const jobIdMatch = window.location.href.match(/\/jobs\/view\/(\d+)/);
    
    if (jobIdMatch && jobIdMatch[1]) {
      const jobId = jobIdMatch[1];
      const cleanUrl = `https://www.linkedin.com/jobs/view/${jobId}`;
      
      // Only redirect if we haven't already cleaned the URL
      if (window.location.href !== cleanUrl) {
        window.location.href = cleanUrl;
      }
    }
  }
})();
