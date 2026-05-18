---
name: tiktok-scrapper
description: Extract video URLs and profile info from TikTok.
trigger_phrases: ["goto tiktok", "find @", "get latest video"]
---

# TikTok Scraper Skill

## Instructions
When the user asks for a TikTok profile or video:
1. Identify the username (ensure it includes the @).
2. Use the script to navigate to the user profile page.
3. Extract the href attribute of the first video element.
