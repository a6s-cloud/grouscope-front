![a6s-cloud 構成図](/doc/image/a6s-cloud-icon/facebook_cover_photo_2.png)

[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/nsuzuki7713/a6s-cloud-front)

# a6s-cloud

## OVERVIEW
`a6s-cloud` (analysis-cloud)

twitterハッシュタグ分析プラットフォーム

## DESCRIPTION

`a6s-cloud` は a*nalysi*s-cloud を語源としたtwitterにおけるハッシュタグの解析アプリケーションです。  

任意のハッシュタグを入力することで、そのハッシュタグがつけられているtweetの傾向を分析し、  
`画像` ・ `グラフ` ・ `ランキング` といった形式により可視化し、`hot` なハッシュタグを探すことを可能とします。

`a6s-cloud` は、主にコミュニティの主宰者に提供され、コミュニティの盛り上がりの分析に利用することができます。  
また、コミュニティの利用者は `a6s-cloud` を閲覧・検索することによって、`hot` なコミュニティを探し出すことができます。

`a6s-cloud` は主に、話題のイベント、人気のカフェ、最新の情報を分析するユースケースを想定しています。

## DEMO
[![Netlify Status](https://api.netlify.com/api/v1/badges/045fd4a5-257a-4c4f-b072-7db70c27e1a4/deploy-status)](https://app.netlify.com/sites/stoic-leavitt-29ed14/deploys)  
https://stoic-leavitt-29ed14.netlify.com/  
※テストデータを差し込んだ画面確認となります。(Backendとの連携はしていません。)

---
## FOR DEVELOPER

`a6s-cloud` はモダンな技術に挑戦し続けるハッカーたちによるアプリケーションです。  
モダンなアーキテクチャ、トレンドのスタイルに挑戦し、開発手法とシステム要件は日々進歩を続けます。  
何らかの制約・懸念・計画のない限り、最新のバージョン・手法・環境を用いて開発されています。

`a6s-cloud` は [a6s-cloud-front](https://github.com/nsuzuki7713/a6s-cloud-front) と [a6s-cloud-backend](https://github.com/nsuzuki7713/a6s-cloud-backend)と[a6s-cloud-batch](https://github.com/nsuzuki7713/a6s-cloud-batch) の3つのプログラムにより構成されたSPA形式のアーキテクチャを採用しており、これはそのフロントエンドを担うa6s-cloud-front のリポジトリです。

Repository of Back-end application : [a6s-cloud-backend](https://github.com/nsuzuki7713/a6s-cloud-backend)  
Repository of batch application : [a6s-cloud-batch](https://github.com/nsuzuki7713/a6s-cloud-batch)

`a6s-cloud` の開発における理念・仕様・スタイル及びコントリビュート方法は下記を御覧ください。

## 使用技術
![a6s-cloud 構成図](/doc/diagrams/architecture.jpg)

## Laradockの検証環境構成図
![Laradockの検証環境構成図](/doc/diagrams/structure_of_laradock.jpg)

## DEVELOPMENT POLICY

## DOCUMENTS
* Outer Spec
* Inner Spec
* Function Design
* Development Style
* [DB設計書](https://docs.google.com/spreadsheets/d/1yKhZl0ISlI6fhFIjqpVFvrnn9nDJPN232Z2RQCOOH7Q/edit#gid=0)
* コンテナ構成図
* [タスクとgit hub運用フロー](https://a6s-cloud.kibe.la/notes/13)
* [drow.ioによる構成図作成方法](https://github.com/nsuzuki7713/a6s-cloud-front/tree/master/doc/diagrams)

## 使用サービス
* slack
* kibela

## ナレッジ(公開)
* [GitHubのWebhookでプルリクエストをマージした際にツイートできるようしてみた](https://qiita.com/turmericN/items/f6267a75be45c51eaed7)
* [PHP(Laravel)からGuzzleを使用して、connpass APIを叩いてみた](https://qiita.com/turmericN/items/77cf17d5f10a0f4dccd2)

## ナレッジ(非公開)
* [自己紹介](https://a6s-cloud.kibe.la/notes/11)
* [Laravel5.7 お役立ち記事リンク集](https://a6s-cloud.kibe.la/notes/7)
* [新規メンバーを追加する手順](https://a6s-cloud.kibe.la/notes/6)
* [kibelaとslackの通知連携方法](https://a6s-cloud.kibe.la/notes/4)
* [git hubとslack連携](https://a6s-cloud.kibe.la/notes/2)
* [[他言語経験者向け]他プログラミング言語からのPHP 移行チートシート](https://a6s-cloud.kibe.la/notes/8)
* [新規参入手順をドキュメント化する。](https://github.com/nsuzuki7713/a6s-cloud-front/issues/27)

## 打ち合わせ議事録
* [第1回 対面MTG_2019/02/10](https://a6s-cloud.kibe.la/notes/15)
* [第2回 対面MTG_2019/03/03](https://a6s-cloud.kibe.la/notes/16)
* [第3回 対面MTG_2019/03/25](https://a6s-cloud.kibe.la/notes/17)
* [第4回 対面MTG_2019/04/28](https://a6s-cloud.kibe.la/notes/35)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/nsuzuki7713" width="100px;" alt="Naoto"/><br /><sub><b>なおと</b></sub>](https://github.com/nsuzuki7713)<br />[💻 📦 🚧](#maintenance-naoto "Maintenance") | [<img src="https://avatars0.githubusercontent.com/TsutomuNakamura" width="100px;" alt="Tsutomu"/><br /><sub><b>Tsutomu</b></sub>](https://github.com/TsutomuNakamura)<br />[💻 🚇 🐧](#maintenance-TsutomuNakamura "Maintenance") | [<img src="https://avatars3.githubusercontent.com/u/42460318?v=4" width="100px;" alt="toki"/><br /><sub><b>toki</b></sub>](https://github.com/tokidrill)<br />[💻 💼](#maintenance-tokidrill "Maintenance") |[<img src="https://avatars0.githubusercontent.com/minokich" width="100px;" alt="minokich"/><br /><sub><b>minokich</b></sub>](https://github.com/minokich)<br />[💻](#maintenance-minokich "Maintenance") |[<img src="doc/image/icon/nonato.jpg" width="100px;" alt="のなと"/><br /><sub><b>のなと</b></sub>](https://twitter.com/Nonato_Note)<br />[🎨 🤔](#design-のなと "design") 
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## LICENCE

