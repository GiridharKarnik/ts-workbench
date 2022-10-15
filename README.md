### Setup

1. Install rust
2. Install wasm-pack
3. Run `wasm-pack build --target nodejs` to compile the rust code in `src/wsm/ipl-data-analyser-core-rust` into wasm.
4. Use the functions exposed by Rust to JS in the node.js code.

### Supported queries

The query language is made of keywords seperated by `->`.

The first word indicates the data set the query is refering too.

ex: `matches ->`

The second word can be one of the following.

query format

`matches -> stat: <stat type> -> innings: <first or second> -> team: <team name>`


All supported queries

## Avg score of a team

1. Average score of a team when batting first.

`matches -> stat: avg_score -> innings: first -> team: Kolkata Knight Riders -> venue: any`

2. Average score of a team when batting first at a given venue

`matches -> stat: avg_score -> innings: first -> team: Kolkata Knight Riders -> venue: M Chinnaswamy Stadium`

3. Run rate of a team in the last six overs when batting first.

`matches -> stat: run_rate -> innings: first_or_second -> team: Kolkata Knight Riders -> venue: any`


