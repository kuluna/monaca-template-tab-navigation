Tab-navigation template for monaca
---

タブによるページ切り替えと、ナビゲーションによるPush/Popの2つの画面遷移を組み合わせたテンプレートです。

# スクリーンショット
iOS  
![iOS](docs/ios.gif)

Android  
![Android](docs/android.png)

# インストール
1. [zip download](https://github.com/kuluna/monaca-template-tab-navigation/archive/master.zip)
1. monacaにログインし、Import Projectをクリック
1. 「プロジェクトのパッケージをアップロード」をクリックし、ダウンロードしたzipをmonacaにアップロード

# 機能
- タブとナビゲーションの組み合わせ
- 画面遷移時の値渡し
- AngularJSのhttp APIを使ったREST API通信
- Nifty Mobile Backendモジュールの組み込み

# 構成
画面のヒエラルキー

```
index.html(Tab)
│
├─view/home.html(Navigation)
│  ├─master.html
│  ├─detail.html
│
└─view/account.html
```

`index.html`にタブタグが、`view/home.html`にナビゲーションタグがあります。これらを起点として画面遷移が行われます。
より詳細な技術情報は[Qiita](http://qiita.com/kuluna/items/fe0a2a6bb549b88aead8)を参照してください。

# ライセンス
MIT License.
