---
title: 'Automate Your Job Search: Scraping 400+ LinkedIn Jobs with Python'
date: '2025-01-20'
tags: ['Automation', 'Python', 'Tools']
layout: PostBanner
draft: false
summary: 'Learn how to automate job searching using Python: scrape hundreds of jobs, filter efficiently, and find the perfect role faster.'
images: ['/assets/automate-your-job-search/cover_image.jpg']
---

The average job seeker spends [11 hours per week searching for jobs](https://www.linkedin.com/pulse/how-many-hours-per-week-should-one-dedicate-job-search-bob-mcintosh/), according to LinkedIn. For tech roles, it's even worse, you're dealing with hundreds of postings across multiple platforms. When my partner started her job search, she was spending hours daily just scrolling through LinkedIn. There had to be a better way.

## The Challenge

For Web developers, the market is overwhelming. A single search for "Frontend Developer" in London returned 401 results. Each posting requires:

- 5 seconds to review the title
- 3-4 clicks to view details
- 30-60 seconds to scan requirements
- Manual copy-pasting to track interesting roles
- Constant tab switching and back-navigation

For 401 jobs, that's hours of pure mechanical work!

## The Solution: Automation Pipeline

I built a three-step automation pipeline that cut the process down to 10 minutes:

1. Scrape job data using Python
2. Filter in bulk using spreadsheets
3. Review only the most promising matches

### Step 1: Smart Scraping

I used [JobSpy](https://github.com/Bunsly/JobSpy) as the base and built [JobsParser](https://github.com/FranciscoMoretti/jobsparser) to handle:

- CLI
- Rate limiting (to avoid LinkedIn blocks)
- Retry logic for failed requests

Here's how to run it:

```bash
pip install jobsparser
```

```bash
jobsparser \
    --search-term "Frontend Developer" \
    --location "London" \
    --site linkedin \
    --results-wanted 200 \
    --distance 25 \
    --job-type fulltime
```

If `jobsparser` is not in your path, you can run it as a module directly:

```bash
python -m jobsparser \
    --search-term "Frontend Developer" \
    --location "London" \
    --site linkedin \
    --results-wanted 200 \
    --distance 25 \
    --job-type fulltime
```

The output is a `CSV` with rich data:

- Job title and company
- Full description
- Job type and level
- Posted date
- Direct application URL

![JobsParser CLI](/assets/automate-your-job-search/jobsparser_cli.png)

_JobSpy and JobsParser are also compatible with other job boards like LinkedIn, Indeed, Glassdoor, Google & ZipRecruiter._

### Step 2: Bulk Filtering

While pandas seemed obvious (and I've given it a fair try), Google Sheets proved more flexible. Here's my filtering strategy:

1. **Time Filter**: Last 7 days

   - Jobs older than a week have lower response rates
   - Fresh postings mean active hiring

![Time Filter](/assets/automate-your-job-search/time_filter.gif)

2. **Experience Filter**: "job_level" matching your experience:

For my partner who is looking for her first role, I filtered:

- "Internship"
- "Entry Level"
- "Not Applicable"

![Job Level Filter](/assets/automate-your-job-search/job_level_filter.gif)

3. **Tech Stack Filter**: "description" contains:
   - The word "React"

![Description Filter](/assets/automate-your-job-search/description_filter.gif)

_More complex filters can be created to check for multiple technologies._

This cut 401 jobs down to 8 matches!

### Step 3: Smart Review

For the filtered jobs:

1. Quick scan of title/company (10 seconds)
2. Open promising `job_url` in new tab
3. Check the description in detail.

## Conclusion

I hope this tool helps you make your job search a slightly more enjoyable experience.

If you have any questions or feedback, please let me know.
