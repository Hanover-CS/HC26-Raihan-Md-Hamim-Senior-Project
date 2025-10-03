---
layout: default
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

## Timeline (subject to adjustment)
![Timeline Chart](assets/timeline.png)

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

## References and Comparisons  

[1] U.S. Securities and Exchange Commission, “EDGAR - Search Tools,” [Online]. Available: [https://www.sec.gov/edgar/search/](https://www.sec.gov/edgar/search/).  
➡️ *Comparison*: EDGAR provides raw 13F filing data directly from the SEC. It is accurate but not user-friendly for beginners. **InvestTrack** will use this data but simplify it with visual dashboards so students don’t have to parse dense reports.  

[2] WhaleWisdom, “13F Filings, Hedge Fund Holdings, and Mutual Fund Ownership,” [Online]. Available: [https://whalewisdom.com](https://whalewisdom.com).  
➡️ *Comparison*: WhaleWisdom organizes and analyzes institutional holdings, but it is data-heavy and geared toward professional analysts. **InvestTrack** instead focuses on *education* by breaking the same data into beginner-friendly charts and summaries.  

[3] TipRanks, “Stock Analysis and Portfolio Tools,” [Online]. Available: [https://www.tipranks.com](https://www.tipranks.com).  
➡️ *Comparison*: TipRanks shows analyst ratings, stock performance, and investor portfolios. However, most features require a subscription. **InvestTrack** will remain free for students, emphasizing *learning outcomes* rather than premium insights.  

[4] eToro, “Social Trading Platform,” [Online]. Available: [https://www.etoro.com](https://www.etoro.com).  
➡️ *Comparison*: eToro lets users copy trades in real time, but this encourages speculation and involves financial risk. **InvestTrack** deliberately avoids trading — it provides *educational tracking only*, so students can learn strategies safely.  

[5] Alpha Vantage, “Stock APIs for Realtime and Historical Market Data,” [Online]. Available: [https://www.alphavantage.co](https://www.alphavantage.co).  
➡️ *Comparison*: Alpha Vantage offers free stock data APIs. **InvestTrack** will use Alpha Vantage for stock search and visualization but integrate it with investor-following features to create a more holistic educational tool.  
## References and Comparisons  

[1] U.S. Securities and Exchange Commission, “EDGAR - Search Tools,” [Online]. Available: [https://www.sec.gov/edgar/search/](https://www.sec.gov/edgar/search/).  

[2] WhaleWisdom, “13F Filings, Hedge Fund Holdings, and Mutual Fund Ownership,” [Online]. Available: [https://whalewisdom.com](https://whalewisdom.com).  

[3] TipRanks, “Stock Analysis and Portfolio Tools,” [Online]. Available: [https://www.tipranks.com](https://www.tipranks.com).  

[4] eToro, “Social Trading Platform,” [Online]. Available: [https://www.etoro.com](https://www.etoro.com).  

[5] Alpha Vantage, “Stock APIs for Realtime and Historical Market Data,” [Online]. Available: [https://www.alphavantage.co](https://www.alphavantage.co).  

---

### Software / Tools References  

[6] React.js, “React – A JavaScript Library for Building User Interfaces,” Meta Platforms, 2025. [Online]. Available: [https://react.dev](https://react.dev).  

[7] Vite.js, “Vite – Next Generation Frontend Tooling,” 2025. [Online]. Available: [https://vitejs.dev](https://vitejs.dev).  

[8] Node.js Foundation, “Node.js,” OpenJS Foundation, 2025. [Online]. Available: [https://nodejs.org](https://nodejs.org).  

[9] Express.js, “Express – Fast, Unopinionated, Minimalist Web Framework for Node.js,” OpenJS Foundation, 2025. [Online]. Available: [https://expressjs.com](https://expressjs.com).  

[10] Firebase, “Firebase Documentation,” Google, 2025. [Online]. Available: [https://firebase.google.com](https://firebase.google.com).  

[11] GitHub, “GitHub Pages Documentation,” 2025. [Online]. Available: [https://pages.github.com](https://pages.github.com).  

[12] Netlify, “Netlify Documentation,” 2025. [Online]. Available: [https://www.netlify.com](https://www.netlify.com).  

[13] Jekyll, “Jekyll – Simple, Blog-Aware, Static Sites,” 2025. [Online]. Available: [https://jekyllrb.com](https://jekyllrb.com).  
