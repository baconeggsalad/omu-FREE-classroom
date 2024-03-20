//棟のボタン
const adjustButtonSizes = () => {
    const buttons = document.querySelectorAll('.text');
    const mapImage = document.querySelector('.mapContainer img');
    const mapHeight = mapImage.offsetHeight; // マップ画像の高さを取得

    buttons.forEach(button => {
        const fontSize = mapHeight * 0.020; // 文字サイズを調整
        const buttonSize = mapHeight * 0.045; // ボタンサイズを調整
        button.style.fontSize = fontSize + 'px';
        button.style.width = buttonSize + 'px';
        button.style.height = buttonSize + 'px';
        button.style.padding = (buttonSize * 0.1) + 'px'; // 余白を調整

        if (button.id === 'A10'
        || button.id === 'A11' 
        || button.id === 'A12' 
        || button.id === 'A13' 
        || button.id === 'A14' 
        || button.id === 'A15'
        || button.id === 'B10'
        || button.id === 'B11'
        || button.id === 'B12'
        || button.id === 'B13'
        || button.id === 'B14'
        || button.id === 'B15'
        || button.id === 'B16'
        || button.id === 'B17'
        || button.id === 'C10'
        || button.id === 'C11'
        || button.id === 'C12'
        || button.id === 'C13'
        || button.id === 'C14'
        || button.id === 'C15'
        || button.id === 'C16'
        || button.id === 'C17'
        || button.id === 'C18'
        || button.id === 'C19'
        || button.id === 'C20'
        || button.id === 'C21'
        || button.id === 'C22'
        || button.id === 'C23'
        ) {
             button.style.fontSize = mapHeight * 0.020 + 'px'; // #A11 ボタンの文字サイズを固定
        }
        else if(button.id ==='A5-2'|| button.id === 'C7-2' ){
            button.style.fontSize = mapHeight * 0.017 + 'px';
        }
        else if(button.id ==='B10-2'|| button.id==='B11-2'){            
            button.style.fontSize = mapHeight * 0.014 + 'px';
        }
    });
};











//おそらくinfoBarを画面の大きさによって適当に変更する
const mapImage = document.querySelector('.mapContainer img');
const infoBar = document.getElementById('infoBar');
const mapHeight = mapImage.offsetHeight;
const vwHeight = 0.3 / 100 * window.innerWidth; // 0.3vw の高さをピクセルに変換
const adjustedHeight = mapHeight - vwHeight;
infoBar.style.height = adjustedHeight + 'px';

//おそらくロードしたときに初期状態として出す文字を決めてる
window.addEventListener('DOMContentLoaded', () => {
    const initialInfo = '<h2>空き教室情報</h2>' +
                        '<p>校内図の棟をクリックすると、選択した棟の空き教室情報がここに表示されます。<br>(画面右上のメニューからも確認できます。)</p>';
    const buildingInfo = document.getElementById('buildingInfo');
    buildingInfo.innerHTML = initialInfo;
});










//それぞれのボタンがクリックされたときの処理
window.onload = () => {
    adjustButtonSizes();
};

// 画面のリサイズイベントを監視してサイズを調整
window.addEventListener('resize', adjustButtonSizes);

// 各ボタンがクリックされたときの処理
const A11Button = document.getElementById('A11');
const A3Button = document.getElementById('A3');
const A4Button = document.getElementById('A4');

const buildingInfo = document.getElementById('buildingInfo');

A11Button.addEventListener('click', () => {
    // A11ボタンがクリックされたときの処理
    buildingInfo.innerHTML = '<h2>A11棟</h2>' +
                             '<p>A11-1: <span class="inUse">授業中</p>' +
                             '<p>A11-2: <span class="vacant">空き</p>' +
                             '<p>A11-3: 使用中</p>'+
                             '<p><span class="vacant">A11-4: 空き</p>'+
                             '<p>A11-5: 空き</p>';
});

A3Button.addEventListener('click', () => {
    // A3ボタンがクリックされたときの処理
    buildingInfo.innerHTML = '<h2>A3棟</h2>' +
                             '<p>A3-1: 空き</p>' +
                             '<p>A3-2: 使用中</p>' +
                             '<p>A3-3: 使用中</p>'+
                             '<p>A3-4: 空き</p>' +
                             '<p>A3-5: 使用中</p>' +
                             '<p>A3-6: 使用中</p>'+
                             '<p>A3-7: 空き</p>' +
                             '<p>A3-8: 使用中</p>' +
                             '<p>A3-9: 使用中</p>'+
                             '<p>A3-2: 使用中</p>' +
                             '<p>A3-3: 使用中</p>'+
                             '<p>A3-4: 空き</p>' +
                             '<p>A3-5: 使用中</p>' +
                             '<p>A3-6: 使用中</p>'+
                             '<p>A3-7: 空き</p>' +
                             '<p>A3-8: 使用中</p>' +
                             '<p>A3-9: 使用中</p>' +
                             '<p>A3-2: 使用中</p>' +
                             '<p>A3-3: 使用中</p>'+
                             '<p>A3-4: 空き</p>' +
                             '<p>A3-5: 使用中</p>' +
                             '<p>A3-6: 使用中</p>'+
                             '<p>A3-7: 空き</p>' +
                             '<p>A3-8: 使用中</p>' +
                             '<p>A3-9: 使用中</p>';
});

A4Button.addEventListener('click', () => {
    // A4ボタンがクリックされたときの処理
    buildingInfo.innerHTML = '<h2>A4棟</h2>' +
                             '<p>A4-1: 使用中</p>' +
                             '<p>A4-2: 使用中</p>' +
                             '<p>A4-3: 空き</p>';
});





//C5とlibraryがクリックされたときの処理
const libraryInfoButton = document.getElementById('library');
const C5Button = document.getElementById('C5');
const handleClick = () => {
    // メニューバーの項目がクリックされたときの共通の処理
    buildingInfo.innerHTML = '<h2>図書館開館時間(C5棟)</h2>' +
                             '<p>図書館の開館時間に関する情報がここに表示されます。</p>';
};
libraryInfoButton.addEventListener('click', handleClick);
C5Button.addEventListener('click', handleClick);










//メニューバーがクリックされたときにメニューバーを表示する
const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');

menuBtn.addEventListener('click', () => {
    // メニューバーの表示状態を切り替える
    if (menuBar.style.display === 'block') {
        menuBar.style.display = 'none'; // 表示されている場合は非表示にする
    } else {
        menuBar.style.display = 'block'; // 非表示の場合は表示する
    }
});










// 年間行事予定のクリックしたときに画像を表示させる
document.getElementById('annual-schedule').addEventListener('click', function() {
    var imageContainer = document.getElementById('annualScheduleImageContainer');
    var isImageDisplayed = imageContainer.querySelector('img');

    if (!isImageDisplayed) {
        var img = document.createElement('img');
        img.src = '2024_annual_schedule.jpg'; 
        img.alt = '2024年の年間行事予定';

        imageContainer.appendChild(img);
    } else {
        isImageDisplayed.remove();
    }
});










// 画面をスクロールしたときの戻るボタン
window.addEventListener('scroll', toggleScrollToTopButton);
// スクロールイベントハンドラ
function toggleScrollToTopButton() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 500) { // 100px以上スクロールされたらボタンを表示
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}
// ページのトップにスクロールする関数
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // スムーススクロールを有効にする
    });
}











//サブメニューのA11とマップ画像上の棟のボタンがクリックされたときの処理をひとまとめにしたもの
const a11InfoButton = document.getElementById('a11');
const handleClicked = () => {
    buildingInfo.innerHTML = '<h2>A11棟</h2>' +
    '<p>A11-1: <span class="inUse">授業中</span></p>' +
    '<p>A11-2: <span class="vacant">空き</span></p>' +
    '<p>A11-3: 使用中</p>'+
    '<p><span class="vacant">A11-4: 空き</span></p>'+
    '<p>A11-5: 空き</p>';};
a11InfoButton.addEventListener('click', handleClicked);
A11Button.addEventListener('click', handleClicked);













// サブメニュー内で+と-を切り替える処理
document.addEventListener('DOMContentLoaded', function() {
    // サブメニューの表示/非表示を切り替える関数
    function toggleSubMenu(subMenu, isVisible) {
        if (isVisible) {
            subMenu.style.display = 'none';
        } else {
            subMenu.style.display = 'block';
        }
    }

    // 各棟のフラグを格納するオブジェクト
    var buildingFlags = {
        'A': false,
        'B': false,
        'C': false
    };

    // 各棟のリンク要素を取得し、クリックイベントを追加
    var buildLinks = {
        'A': document.querySelector('#buildA a'),
        'B': document.querySelector('#buildB a'),
        'C': document.querySelector('#buildC a')
    };

    for (let building in buildLinks) {
        let isSubMenuVisible = false;
        let subMenu = document.getElementById('subMenu' + building);
        buildLinks[building].addEventListener('click', function(event) {
            event.preventDefault();
            var buildingId = this.parentNode.id; // クリックされたリンク要素の親要素のID (A, B, C)
            buildingFlags[buildingId] = !buildingFlags[buildingId]; // フラグをトグル
            var plusSpan = document.querySelector('#' + buildingId + ' .plus');
            plusSpan.textContent = buildingFlags[buildingId] ? '－' : '+';
            // サブメニューの表示状態をトグルする
            toggleSubMenu(subMenu, isSubMenuVisible);
            // サブメニューの表示状態を更新する
            isSubMenuVisible = !isSubMenuVisible;
        });
    }
});














document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.querySelector('.mapContainer');
    const mapImage = mapContainer.querySelector('img');

    // 画像の幅を取得
    const imageWidth = mapImage.offsetWidth;

    // 画像の中心を画面の中心に移動するためのスクロール量を計算
    const scrollAmount = (imageWidth / 2) - (window.innerWidth / 2);

    // スクロールバーが内側になるように設定
    mapContainer.style.overflowX = 'scroll'; // 横スクロールバーを表示

    // 画像の中心が画面の中心に来るようにスクロール
    mapContainer.scrollLeft = scrollAmount;
});
