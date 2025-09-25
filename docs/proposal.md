---
title: CS461 Senior Seminar Proposal 
---

# CS461 Senior Seminar Proposal – *Investor Follow App*

# Project Title:
**InvestTrack: A Learning Tool to Follow Investors and Market Trends**

# Description:
InvestTrack is a web application designed to help beginner and student investors learn how professional investors operate in the stock market. The app will allow users to view stock market data, track the current and past holdings of well-known investors, and follow their strategic changes over time. Unlike platforms like eToro or TipRanks, this app is geared toward **education**, not financial advice or real-time trading.

## Purpose:
The goal of this project is to provide a **student-friendly and educational** tool that makes investment strategies easier to understand by following real investor behavior through publicly available data (e.g., SEC 13F filings). This app bridges the gap between abstract financial theory and real-world investment decision-making.

### Key Features:
- Stock market search: users can search any ticker and view current price, company info, and changes.
- Investor profiles: view past vs. present portfolios of selected investors (e.g., Warren Buffett).
- Follow system: users can "follow" investors and view their portfolio dashboard.
- Portfolio visualization: simple charts and comparisons for better learning.

## Comparable Solutions
Several existing platforms offer stock tracking or investor-following features:

- **TipRanks** – Provides stock analysis, analyst ratings, and top investor portfolios, but requires a subscription for most data.
- **eToro** – A social trading platform that allows users to copy trades from other investors, but is focused on real-time trading.
- **WhaleWisdom** – Focuses on SEC 13F filings, letting users follow institutional investors. It is data-heavy and not very beginner-friendly.

While these platforms are built for active investors or professionals, **InvestTrack** is designed for **students and beginners**. Its goal is **education**, not financial advice or active trading. It simplifies complex financial data into digestible insights and encourages learning through exploration, not speculation.

## Technologies & Tools
- **Frontend:** React.js (Vite or Create React App)
- **Backend:** Node.js (Express) or Firebase for quick MVP
- **APIs:** Alpha Vantage (for stock data), public 13F filings (or WhaleWisdom)
- **Database:** Firebase or PostgreSQL (to store followed investors, saved stocks)
- **Hosting/Deployment:** GitHub Pages or Netlify with GitHub Actions

### Why These Technologies?
- **React + Vite:** Beginner-friendly and widely supported, with fast development features like hot module replacement.  
- **Node.js + Express:** Lightweight, JavaScript-based backend that pairs naturally with a React frontend.  
- **Firebase (optional):** Simple real-time database and authentication that speeds up MVP development.  
- **Alpha Vantage & 13F/EDGAR:** Free APIs that provide real-time and historical market data, ideal for learning.  
- **GitHub Pages/Netlify:** Free hosting integrated with GitHub, making deployment straightforward for a student project.

### Why Not Other Options?
- **Angular or Vue vs. React:** Angular is powerful but requires more setup and a steeper learning curve. Vue is beginner-friendly but has a smaller ecosystem. React offers simplicity plus a large support community.  
- **Django (Python) vs. Node.js/Express:** Django is robust, but since the frontend will be in JavaScript, sticking with Node.js keeps the stack consistent and avoids switching languages.  
- **PostgreSQL vs. Firebase:** PostgreSQL is better for complex relational queries, but Firebase makes prototyping easier. I can start with Firebase for MVP and switch to PostgreSQL if scalability is needed.  
- **Paid APIs (like Polygon.io) vs. Free APIs (Alpha Vantage/SEC EDGAR):** Paid APIs offer advanced features, but free ones are sufficient for an educational project.  
- **Other Hosting (AWS, Heroku) vs. GitHub Pages/Netlify:** Cloud services add flexibility, but GitHub Pages/Netlify provide free, fast, and automated deployments — ideal for a course project.

## Learning Load
This project involves learning several new technologies and tools. I’ve used some basic JavaScript before, but React (with Vite or Create React App) will be new, especially JSX and component structure. I haven’t worked with APIs like Alpha Vantage or SEC 13F data before, so learning how to fetch and parse that data will be part of the challenge. If I use Firebase, I’ll need to learn how to set up real-time databases and authentication. Jekyll and GitHub Pages are also new to me, so deploying the site and managing updates using GitHub Actions will require exploration.  

This means I’ll not only learn new tools, but also understand why simpler, student-friendly frameworks (React/Firebase) fit better than heavier alternatives (Angular, Django, AWS).

## Deliverables
- Working web app with core features  
- GitHub repo with version control and commits  
- Published project site using GitHub Pages and Jekyll  
- Final presentation with demo + learning reflection  

## Timeline 
| Week | Milestone |
|------|-----------|
| 1    | Finalize idea, design UI mockups, repo setup |
| 2    | Implement stock search with API integration |
| 3    | Build static investor profiles from JSON |
| 4    | Add follow feature + dashboard |
| 5    | Polish UI, add charting |
| 6    | Add real data from 13F or APIs |
| 7    | Write final report, create slides |
| 8    | Final polish + present project and describe everything |

## Why This Project?
As someone passionate about technology, finance, and education, I believe that InvestTrack can become a valuable resource for fellow students who want to better understand investing. It’s practical, scalable, and encourages real-world learning without the risk of live trading. The focus is on helping beginners grow their knowledge.

## References
[1] U.S. Securities and Exchange Commission, “EDGAR - Search Tools,” [Online]. Available: https://www.sec.gov/edgar/search/.  
[2] WhaleWisdom, “13F Filings, Hedge Fund Holdings, and Mutual Fund Ownership,” [Online]. Available: https://whalewisdom.com.  
[3] TipRanks, “Stock Analysis and Portfolio Tools,” [Online]. Available: https://www.tipranks.com.  
[4] eToro, “Social Trading Platform,” [Online]. Available: https://www.etoro.com.  
[5] Alpha Vantage, “Stock APIs for Realtime and Historical Market Data,” [Online]. Available: https://www.alphavantage.co.  
