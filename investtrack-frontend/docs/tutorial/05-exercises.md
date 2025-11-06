# 05 — Practice Exercises

Do at least two of these to extend the tutorial.

## Exercise 1 — Add a Route
- Install router: `npm i react-router-dom`
- Create two routes: `/` (Home) and `/proposal` (Proposal page).
- Add links in the nav.
- Verify the pages switch without reloading.

## Exercise 2 — Add a Failing Test, Then Make It Pass
- Write a test that expects a `<h1>InvestTrack</h1>` to exist on Home.
- Run tests (it should fail).
- Implement the header; re-run tests (should pass).

## Exercise 3 — Add a Component + Test
- Create `src/components/TickerSearch.jsx`
- Add a simple input and a button; clicking logs the ticker.
- Test with Testing Library that the button is enabled and input updates.

## Exercise 4 — Small CI Change
- Make the workflow run on `pull_request` only.
- Open a PR and confirm the run triggers.

When finished, commit and push. Take a screenshot of tests passing and add it to `docs/tutorial/assets/`.
