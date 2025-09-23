

layout: default
title: Proposal
---------------

# CS461 Senior Seminar Proposal – *Investor Follow App*

## Project Title

**InvestTrack: A Learning Tool to Follow Investors and Market Trends**

## Description

**InvestTrack** is a web application designed to help beginner and student investors learn how professional investors operate in the stock market. The app allows users to search for stock information, view investor portfolios over time, and follow strategic trends based on real-world data like SEC 13F filings. Unlike platforms like **eToro** or **TipRanks**, **InvestTrack** focuses on **education**, not real-time trading or financial advice.

## Purpose

The goal is to provide a **student-friendly educational tool** that simplifies complex stock market data and makes investment strategies easier to understand. It bridges the gap between abstract finance theory and real-world investing decisions.

### Key Features

* **Stock search:** Enter a ticker symbol and view price, company details, and trends.
* **Investor profiles:** View historical and current holdings of top investors (e.g., Warren Buffett).
* **Follow system:** Users can follow investors and build personalized dashboards.
* **Visualization:** Simple charts and graphs to make comparisons more intuitive.

## Comparable Solutions

Several platforms offer stock or investor tracking features:

* **TipRanks** – Offers stock ratings and analyst performance metrics. However, many features are behind a paywall.
* **eToro** – A social investing platform that allows copying trades from others, but focuses on active trading.
* **WhaleWisdom** – Uses SEC 13F filings for tracking institutional investors. Powerful, but dense and not beginner-friendly.

**How InvestTrack is different:**
InvestTrack focuses on **learning, not trading**. It simplifies the data, adds visual explanations, and avoids overwhelming new users. Instead of pushing decisions, it encourages **exploration and understanding**.

## Technologies & Tools

* **Frontend:** *React.js* using **Vite** — beginner-friendly and powerful for UI development.
* **Backend:** *Node.js* with **Express** — light, fast, and great for handling API requests.
* **Data APIs:** *Alpha Vantage* (stock data), *SEC EDGAR* (13F filings).
* **Database:** *Firebase* or *PostgreSQL* — for saving user data (optional).
* **Deployment:** *GitHub Pages* (frontend only) or *Netlify* for CI/CD.

### Why This Stack?

* React + Node has a low barrier to entry, strong community support, and tons of tutorials.
* Free APIs allow real-time access to financial data.
* Firebase offers quick MVP testing with real-time database support.

## Learning Load

This project will require learning multiple tools and systems:

* **React/Vite** setup, JSX, component-based UI
* **REST APIs**: Fetching + parsing JSON data
* **Firebase or PostgreSQL** setup (if used)
* **GitHub Pages** + **Jekyll** deployment
* **GitHub Actions** for CI/CD

These skills will help me gain **full-stack development** experience and hands-on exposure to real-world financial data.

## Deliverables

* Responsive frontend web app with core features
* Source code with commits and branches on GitHub
* Published site on GitHub Pages (or Netlify)
* Final presentation + tutorial and reflection

## Timeline

| Week | Milestone                                    |
| ---- | -------------------------------------------- |
| 1    | Finalize idea, design UI mockups, repo setup |
| 2    | Implement stock search with API integration  |
| 3    | Build static investor profiles from JSON     |
| 4    | Add follow feature + dashboard               |
| 5    | Polish UI, add charting libraries            |
| 6    | Load 13F data from APIs + test filters       |
| 7    | Finalize report, slides, documentation       |
| 8    | Final polish, final presentation, tutorial   |

## Why This Project?

As someone passionate about **technology**, **finance**, and **education**, I believe **InvestTrack** can become a valuable learning tool for students. It combines theory and real data in a safe environment. By observing real investors’ strategies, students can learn how the stock market works without the pressure or risk of real money. It encourages curiosity and deeper financial literacy.

## References

\[1] U.S. Securities and Exchange Commission, “EDGAR - Search Tools,” *[https://www.sec.gov/edgar/search/](https://www.sec.gov/edgar/search/)*

\[2] WhaleWisdom, “13F Filings and Hedge Fund Ownership,” *[https://whalewisdom.com](https://whalewisdom.com)*

\[3] TipRanks, “Stock Analysis and Portfolio Tools,” *[https://www.tipranks.com](https://www.tipranks.com)*

\[4] eToro, “Social Trading Platform,” *[https://www.etoro.com](https://www.etoro.com)*

\[5] Alpha Vantage, “Stock APIs,” *[https://www.alphavantage.co](https://www.alphavantage.co)*

\[6] Mozilla Developer Network, “Introduction to APIs,” *[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side\_web\_APIs/Introduction](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)*

\[7] Google Firebase, “Firebase Realtime Database Documentation,” *[https://firebase.google.com/docs/database](https://firebase.google.com/docs/database)*

---

*Markdown syntax is used with bold text, italics, and headers. Alternative technologies are discussed. In-text references are aligned with the rubric.*


