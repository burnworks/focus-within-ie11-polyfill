# focus-within-ie11-polyfill

:focus-within Pseudo-Class Polyfill for IE11

IE11 で :focus-within 疑似クラスを使用するための JavaScript です。

## 使い方

`src/focus-within-ie11-polyfill.js` を `head` 要素内などで読み込んでください。その後、`:focus-within` 疑似クラスを使用したい要素に `is-dropdown`（初期値）という class 名を附与すれば、その要素がフォーカスを持った時に、`focus-is-active`（初期値）という class が附与されます。

`is-dropdown` と `focus-is-active` はスクリプト内の「対象要素と附与する class 名の設定」部分で設定していますので、自由に変更してください。

## デモ

`demo/sample-code.html` にサンプルソースがありますので参考まで。

## その他

本当は IE11 など、:focus-within 疑似クラスに対応しない環境でのみ動作するようにした方がよいと思いますが、現時点でそういう処理は入れていません。改変はご自由にどうぞ。
