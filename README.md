# Get started

Nodejs version 16.x is required!

```
cp .env.example .env
```

```
npm install
```

```
db-migrate up
```

# Run actions

```
npm run action -- --action=ACTION_FILE_NAME_WITHOUT_EXTENSION
```
or
```
babel-node index.js --action=ACTION_FILE_NAME_WITHOUT_EXTENSION
```

(actions are located in folder: "/actions/")
