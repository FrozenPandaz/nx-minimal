1. Install `nx`
2. Create directory `website`
3. Create `index.html`
4. Try to run it
5. Add `nx.json`
6. Run `nx graph`
7. Add `serve` executor and http handler
8. Add source parameter to Executor
9. Create second website using the same executor
10. Run `affected`




Notes
1. Remove the need for npmScope
2. Add better error for no projects
3. Shouldn't need root
4. Shouldn't need schema and package.json for executor
5. Executor breaks if configuration is missing schema link
6. Adding package.json to scripts adds invalid node to graph
