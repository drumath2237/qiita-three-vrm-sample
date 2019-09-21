# Qiita: 「せっかくなのでTypeScript+webpack+three.jsを入門してWeb上でVRMでモデルを表示してみる」サンプルプロジェクト

## build and run

```bash
# install npm packages
yarn install

# build typescrupt by webpack
yarn build

# start webpack-dev-server
yarn start 
```

## environments

下記が`package.json`になります。
見るとわかる通り、 **TypeScriptはグローバルインストールされている前提** です.
ご注意ください。

```json
{
  "name": "qiita-three-vrm",
  "version": "1.0.0",
  "main": "index.js",
  "author": "drumath <2237k.drumath@gmail.com>",
  "license": "MIT",
  "devDependencies": {
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.1.2",
    "typescript": "^3.6.3",
    "webpack": "^4.40.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.1"
  },
  "dependencies": {
    "@pixiv/three-vrm": "^0.1.1",
    "@types/three": "^0.103.2",
    "three": "^0.108.0"
  },
  "description": "My webpack project",
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
  }
}
```

