'use strict'
    ; (function () {
        //IE11だけ動作させる
        if (document.documentMode && document.uniqueID) {

            // 対象要素と附与する class 名の設定
            const focusItemClass = '.is-dropdown';
            const focusActiveClass = 'focus-is-active';

            // 対象要素を取得
            const focusItems = document.querySelectorAll(focusItemClass);

            // 取得した対象要素にイベントリスナーを登録
            Array.prototype.forEach.call(focusItems, function (e) {
                e.addEventListener('focusin', focusinListener);
                e.addEventListener('focusout', focusoutListener);
            });

            // 対象要素内にフォーカスがある場合に class を附与
            function focusinListener(event) {
                event.target.closest(focusItemClass).classList.add(focusActiveClass);
            };

            // 対象要素からフォーカスが外れたら class を削除
            function focusoutListener(event) {
                if (!document.activeElement.classList.contains(focusItemClass.slice(1))) {
                    Array.prototype.forEach.call(focusItems, function (e) {
                        e.classList.remove(focusActiveClass);
                    });
                }
            };

            // IE11 で closest が動作しないので Polyfill
            if (!Element.prototype.matches) {
                Element.prototype.matches = Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector;
            }
            if (!Element.prototype.closest) {
                Element.prototype.closest = function (s) {
                    let el = this;
                    do {
                        if (el.matches(s)) return el;
                        el = el.parentElement || el.parentNode;
                    } while (el !== null && el.nodeType === 1);
                    return null;
                };
            }

        }
    }());