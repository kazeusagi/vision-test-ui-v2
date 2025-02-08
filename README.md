# Do First

`.devcontainer` 内の `.env.example` から `.env` を作成して入力する  
devcontainer を起動

## Devcontainer 内

`bun run install`  
`bun run dev`  

gitフックの作成(pre-commit時にlintとbuildによってエラーがない事を確認できる)  
`bunx lefthook install`  
