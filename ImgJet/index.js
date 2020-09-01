'use strict';

let isNavTop = true;
let dom, Img, A, UL, LI;
let maxLoaded = 2000, maxError = 100;

let localDataName = 'ImageSpider_v1_20200531';

let localStorageValid = (e => {
    if (!window.localStorage) {
        console.log("浏览器不支持本地存储");
        return false;
    }
    return true;
})();

let setHistory = (aVal) => {
    if (!localStorageValid) return;

    let hisData = getHistory();
    console.log(hisData);
    if (!hisData) return;
    if (!Array.isArray(hisData)) return;

    let aCfg = getCfgData().aCfg;
    let name = dom.getElementById('cfgName').value;
    if (!name) name = JSON.stringify(aCfg).replace(/[\[\]{}"'=~:,]/g, '');
    console.info(name);

    let updateData = hisData.filter((item, index, arr) => {
        if (item[name]) {
            arr.splice(index, 1);
            return true;
        }
        return false;
    })[0];
    console.log(updateData);

    if (updateData) {
        let data = updateData[name].pathUrl.filter(item => JSON.stringify(item) === JSON.stringify(aVal))[0];
        if (!data) updateData[name].pathUrl.push(aVal);
        updateData[name].pathCfg = updateData[name].pathCfg.map((item, i) => {
            if (JSON.stringify(item) !== JSON.stringify(aCfg[i])) {
                let key1 = Object.keys(item)[0];
                let key2 = Object.keys(aCfg[i])[0];
                let val1 = Object.values(item)[0];
                let val2 = Object.values(aCfg[i])[0];
                let key = key1, val = val1;
                if (key1 !== key2) key = key2;
                if (JSON.stringify(val1) !== JSON.stringify(val2)) {
                    val2.forEach(a => val1.includes(a) ? '' : val1.push(a));
                    val = val1;
                }
                return { [key + '']: val };
            }
            return item;
        });
        hisData.unshift(updateData);
    }
    else {
        hisData.unshift({
            [name]: { pathCfg: aCfg, pathUrl: [aVal] }
        });
    }
    console.log(hisData);
    window.localStorage.setItem(localDataName, JSON.stringify(hisData));
};

let startInput = input => {
    input.className = 'cfgNameEdit';
};

let checkInput = input => {
    let cls = 'cfgNameEdit'
    if (input.value.length === 0) cls = 'cfgNameEdit err';
    input.className = cls;
};

let confirmInput = (btn) => {
    let cfgInput = btn.parentNode.querySelector('[name="cfgInput"]');
    if (cfgInput.value.length === 0) {
        cfgInput.className = 'cfgNameEdit err';
        return;
    }

    let cfgNameEdit = btn.parentNode.querySelectorAll('.cfgNameEdit');
    cfgNameEdit.forEach(item => item.className = 'cfgNameEdit hide');

    let cfgReady = btn.parentNode.querySelectorAll('.cfgReady');
    cfgReady.forEach(item => item.className = 'cfgReady');

    btn.parentNode.querySelector('[name="inputText"]').innerText = cfgInput.value;
    btn.parentNode.style.width = 'auto';
};

let cancelInput = (btn) => {
    let cfgInput = btn.parentNode.querySelector('[name="cfgInput"]');
    let val = btn.parentNode.querySelector('[name="inputText"]').innerText;
    cfgInput.value = val;

    let cfgNameEdit = btn.parentNode.querySelectorAll('.cfgNameEdit');
    cfgNameEdit.forEach(item => item.className = 'cfgNameEdit hide');

    let cfgReady = btn.parentNode.querySelectorAll('.cfgReady');
    cfgReady.forEach(item => item.className = 'cfgReady');

    btn.parentNode.style.width = 'auto';
};

let hideCfgBtn = (cfgBtn, btn) => {
    if (btn.dataset.state !== 'show') return;
    cfgBtn.forEach(item => item.className = 'cfgBtn hide');
    btn.dataset.state = 'hide';
};

let clearCfgBtnTimer = btn => {
    if (btn.dataset.timer === null) return;
    clearTimeout(btn.dataset.timer);
    btn.dataset.timer = null;
};

let showMore = btn => {
    clearCfgBtnTimer(btn);
    let cfgBtn = btn.parentNode.querySelectorAll('.cfgBtn');
    if (btn.dataset.state === 'show') {
        hideCfgBtn(cfgBtn, btn);
        return;
    }
    cfgBtn.forEach(item => item.className = 'cfgBtn');
    btn.dataset.state = 'show';
    btn.dataset.timer = setTimeout(() => hideCfgBtn(cfgBtn, btn), 5000);
};

let hideMore = btn => {
    btn = btn.parentNode.querySelector('[name="showMore"]');
    clearCfgBtnTimer(btn);
    let cfgBtn = btn.parentNode.querySelectorAll('.cfgBtn');
    hideCfgBtn(cfgBtn, btn);
};

let resetCfg = btn => {
    hideMore(btn);

    btn.parentNode.style.width = '100%';
    let cfgNameEdit = btn.parentNode.querySelectorAll('.cfgNameEdit');
    cfgNameEdit.forEach(item => item.className = 'cfgNameEdit');

    let cfgReady = btn.parentNode.querySelectorAll('.cfgReady');
    cfgReady.forEach(item => item.className = 'cfgReady hide');
};

let setCfg = (btn) => {
    resetCfg(btn);
};

let delCfg = (btn, delAll) => {
    resetCfg(btn);
    btn.parentNode.querySelector('[name="cfgInput"]').value = '';
    btn.parentNode.querySelector('[name="inputText"]').innerText = '';

    let cfgChildren = dom.querySelectorAll('#cfg>fieldset');
    let check = item => item.isEqualNode(btn.parentNode.parentNode);
    if (delAll === true) check = item => true;
    cfgChildren.forEach(item => { if (check(item)) item.parentNode.removeChild(item) });
};

let addCfg = btn => {
    hideMore(btn);

    let cfg = dom.getElementById('cfg');
    let fieldset = tpl.cloneNode(true);
    fieldset.id = '';
    cfg.appendChild(fieldset);
};

let showHis = select => {
    let val = JSON.parse(select.value);
    let text = select.options[select.selectedIndex].text;

    showCfg(val.pathCfg, text);
    showNav(val.pathUrl, text);
};

let showCfg = (pathCfg, cfgName) => {
    let cfgChildren = dom.querySelectorAll('#cfg>fieldset');
    cfgChildren.forEach(item => item.parentNode.removeChild(item));

    if (!Array.isArray(pathCfg)) return;
    let legend = dom.querySelector('#cfg>legend');
    legend.querySelector('[name="cfgInput"]').value = cfgName;
    let btn = legend.querySelector('[name="cfgConfirm"]');
    confirmInput(btn);

    let cfg = dom.getElementById('cfg');
    let tpl = dom.getElementById('tpl');
    pathCfg.forEach((item) => {
        let node = tpl.cloneNode(true);
        node.id = '';

        let legend = node.querySelector('legend');
        legend.querySelector('[name="cfgInput"]').value = Object.keys(item)[0];
        let btn = legend.querySelector('[name="cfgConfirm"]');
        confirmInput(btn);

        node.querySelector('[name="cfgValue"]').value = Object.values(item)[0];
        cfg.appendChild(node);
    });
};

let showNav = (pathUrl, cfgName) => {
    if (!Array.isArray(pathUrl)) return;
    let nav = dom.getElementById('nav');
    nav.querySelector('h1').innerHTML = cfgName;
    nav.querySelector('ul').innerHTML = '';

    pathUrl.forEach((item, k) => {
        let img = Img.cloneNode();
        img.src = item.join('/') + '/01.jpg';
        addLink(item, img);
    });
};

let filterUrl = urlList => {
    let nav = dom.getElementById('nav');
    nav.querySelector('h1').innerHTML = getCfgData().name;
    nav.querySelector('ul').innerHTML = '';
    dom.getElementById('search-path-state').innerText = '探测中。。。';
    let searchInfo = dom.getElementById('search-info');
    searchInfo.innerHTML = [
        '已生成<strong>', urlList.length, '</strong>个路径，',
        '其中有<strong id="path-valid-count">0</strong>个是有效路径'
    ].join('');
    dom.getElementById('run').setAttribute('disabled', 'disabled');
    checkUrl(urlList);
};

let checkUrl = urlList => {
    let k = 0;

    let loadCount = 0, errCount = 0, maxSearch = 1;
    let asyncLoad = (i) => {
        if (i > maxSearch) return;
        if (k >= urlList.length) {
            dom.getElementById('search-path-state').innerText = '已完成100%';
            dom.getElementById('run').removeAttribute('disabled');
            loadHisList();
            return;
        }
        let img = Img.cloneNode();
        img.onload = (e) => {
            loadCount++;
            console.info(['==> ', e.type, ' event on url ', e.target.src, '. check success.'].join(''));
            dom.getElementById('path-valid-count').innerText = loadCount;

            setHistory(urlList[k]);
            addLink(urlList[k], img);

            k++;
            errCount = 0;
            asyncLoad(1);
        };
        img.onerror = (e) => {
            errCount++;
            if (errCount < maxSearch) asyncLoad(i + 1);
            else {
                console.info(['==> ', e.type, ' event on url ', e.target.src, '. check failure.'].join(''));
                e.target.className = 'hide';
                urlList.splice(k, 1);
                errCount = 0;
                asyncLoad(1);
            }
        };
        img.onabort = (e) => {
            console.log('img onabort: ', e);
            e.target.className = 'hide';
        };
        img.src = urlList[k].join('/') + '/' + (i >= 10 ? i : '0' + i) + '.jpg';
    }

    asyncLoad(1);
};

let addLink = (aUrl, img) => {
    let preNode = dom.querySelector('nav>ul');
    const data = aUrl, url = aUrl.join('/');
    for (let i = 0, len = data.length; i < len; i++) {
        const ai = data[i];
        let node = preNode.querySelector('[level="' + i + '"][title="' + ai + '"]');
        if (node) {
            preNode = node.parentNode.querySelector('ul');
            continue;
        }

        let a = A.cloneNode();
        a.title = ai;
        a.setAttribute('level', i);
        let li = LI.cloneNode();
        li.appendChild(a);
        preNode.appendChild(li);
        if (i + 1 < len) {
            a.innerHTML = ai;
            let ul = UL.cloneNode();
            li.appendChild(ul);
            preNode = ul;
            continue;
        }

        a.innerHTML = '';
        a.className = 'no-font';
        li.className = 'no-font';
        img.title = url;
        img.setAttribute('onclick', 'show("' + url + '")');
        img.className = 'show';
        a.appendChild(img);
    }
};

let show = url => {
    let imgBox = dom.getElementById('article');
    imgBox.innerHTML = '';

    let loadedCount = 0, errorCount = 0;
    let asyncLoaded = 0, asyncError = 0, maxAsync = 0;
    let nextAsync = (e, length) => {
        dom.title = ['Loaded:', loadedCount, ' | Error:', errorCount].join('');
        console.info([e.type, ' event on url ', e.target.src, '.'].join(''));
        asyncShowImg(length);
    }
    let asyncShowImg = (i) => {
        if (asyncLoaded + asyncError < maxAsync) return;
        if (errorCount >= maxError || i >= maxLoaded) return;

        maxAsync = maxError <= 10 ? maxError : 10;
        asyncLoaded = 0;
        asyncError = 0;

        let img, length = i + maxAsync - errorCount;
        while (i < length) {
            img = Img.cloneNode();
            imgBox.appendChild(img);
            img.onload = (e) => {
                e.target.className = 'show';
                asyncLoaded++;
                loadedCount++;
                nextAsync(e, length);
            };
            img.onerror = (e) => {
                asyncError++;
                errorCount++;
                e.target.className = 'hide';
                nextAsync(e, length);
            };
            img.onabort = (e) => {
                console.log('img onabort: ', e);
                e.target.className = 'hide';
            };
            ((i, img) => {
                setTimeout(() => {
                    img.src = url + '/' + (i >= 10 ? i : '0' + i) + '.jpg'
                }, i % maxAsync * 100)
            })(i, img);
            i++;
        }
    }

    asyncShowImg(1);
};

let getCfgData = e => {
    let cfgNode = dom.querySelectorAll('#cfg>fieldset');
    let aUrl = [], aCfg = [];

    cfgNode.forEach(node => {
        let legend = node.querySelector('legend>[name="inputText"]').innerText;
        let val = node.querySelector('[name="cfgValue"]').value;
        if (val.indexOf('~') === -1) {
            aUrl.push(val.split(','));
            aCfg.push({ [legend]: val.split(',') });
        }
        else {
            let val0 = val.split('~')[0];
            let val1 = val.split('~')[1];
            if (val1.indexOf('=') === -1) {
                let valx = [], vals, vali = +val0;
                while (vali <= (+val1)) {
                    vals = vali < 10 ? ('0' + vali) : ('' + vali);
                    valx.push(vals);
                    vali++;
                };
                aUrl.push(valx);
                aCfg.push({ [legend]: valx });
            }
            else {
                let valn = val1;
                val1 = valn.split('=')[0];
                let type = valn.split('=')[1];
                let valx = [val0, val1];
                switch (type) {
                    case 'DD': break;
                    case 'MMDD': {
                        let vals = [], newDate, vali, valm, vald;
                        newDate = new Date();
                        newDate.setFullYear(val0.slice(0, 4), val0.slice(4, 6), val0.slice(6, 8));
                        vali = newDate;
                        newDate = new Date();
                        newDate.setFullYear(val1.slice(0, 4), val1.slice(4, 6), val1.slice(6, 8));
                        val1 = newDate;
                        while (vali <= val1) {
                            valm = vali.getMonth();
                            valm = valm < 10 ? ('0' + valm) : ('' + valm);
                            vald = vali.getDate();
                            vald = vald < 10 ? ('0' + vald) : ('' + vald);
                            vals.push(valm + vald);
                            vali.setDate(vali.getDate() + 1);
                        };
                        valx = vals;
                        break;
                    }
                    case 'YYYYMMDD': break;
                }
                aUrl.push(valx);
                aCfg.push({ [legend]: valx });
            }
        }
    });

    let name = dom.querySelector('#cfg>legend>[name="inputText"]').innerText;

    return { aUrl, aCfg, name };
};

let runChecking = e => {
    let aUrl = getCfgData().aUrl;

    if (!aUrl.length) {
        dom.getElementById('search-path-state').innerText = '请先配置搜索路径';
        return;
    }

    let x = aUrl, xlen = 1, ylen = x.length;
    for (let i = 0; i < ylen; i++) xlen = xlen *= x[i].length;
    for (let i = 0; i < ylen - 1; i++) {
        let xi = x[i];
        let xilen = xi.length;
        let arr = x[i + 1];
        for (let j = 0; j < xilen - 1; j++) x[i + 1] = x[i + 1].concat(arr);

        let n = xlen / xilen - 1;
        for (let j = 0; j < xi.length; j += n + 1) {
            let x = xi[j];
            for (let k = 0; k < n; k++) xi.splice(j + 1, 0, x);
        }
    }

    let urlList = [];
    for (let i = 0; i < xlen; i++) {
        let a = [];
        for (let j = 0; j < ylen; j++) a.push(x[j][i]);
        urlList.push(a);
    }

    filterUrl(urlList);
};

let getHistory = e => {
    if (!localStorageValid) return null;
    let sData = window.localStorage.getItem(localDataName) || '[]';
    try { return JSON.parse(sData) }
    catch (e) {
        console.log(e);
        return [];
    }
};

let initNavEvent = e => {
    let nav = dom.getElementById('nav');
    let ul = nav.querySelector('ul');
    ul.onclick = (e) => {
        let node = e.target;
        switch (e.target.tagName) {
            case 'A': {
                let pLevel = +node.getAttribute('level') - 1;
                let parentUl = node.parentNode.parentNode;
                let parentA = parentUl.parentNode.querySelector('[level="' + pLevel + '"]');
                let parentLi = parentUl.children;
                let ul = node.parentNode.querySelector('ul');
                let ulCls = '', parentACls = '', parentLiCls = '';
                if (ul && ul.className !== 'show') {
                    ulCls = 'show';
                    parentACls = 'hide';
                    parentLiCls = 'hide';
                }
                if (ul) ul.setAttribute('class', ulCls);
                if (parentA) parentA.setAttribute('class', parentACls);
                for (let i = 0; i < parentLi.length; i++)
                    if (!parentLi[i].isEqualNode(node.parentNode)) parentLi[i].setAttribute('class', parentLiCls);
                break;
            }
        }
    }
};

let loadHisList = e => {
    let hisData = getHistory();
    console.info(hisData);
    if (!Array.isArray(hisData)) return;
    let hisPath0 = hisData[0];
    console.info(hisPath0);
    if (!hisPath0) return;

    let hisName = Object.keys(hisPath0)[0];
    console.info(hisName);
    let sList = hisData.map((item, index) => {
        let text = Object.keys(item)[0];
        let selected = text === hisName ? ' selected="selected"' : '';
        return [
            '<option value=\'', JSON.stringify(item[text]), '\' title="', text, '" key="', index, '"', selected, '>', text, '</option>'
        ].join('');
    });
    let his = dom.getElementById('his-list');
    his.innerHTML = sList.join('');
};

let triggerHisSelect = e => {
    let his = dom.getElementById('his-list');
    his.onchange();
}

let resizeDom = e => {
    let cls, body = dom.body || dom.documentElement;
    if (body.offsetWidth < body.offsetHeight) {
        cls = 'nav-top';
        isNavTop = true;
    }
    else {
        cls = 'nav-left';
        isNavTop = false;
    }
    body.setAttribute('class', cls);

    let nav = dom.getElementById('nav'), navH = nav.offsetHeight;
    if (nav.className !== 'hidden') {
        if (isNavTop) nav.style.top = '0px';
        else nav.style.top = 'auto';
    }
    else {
        if (isNavTop) nav.style.top = (-navH + 16) + 'px';
        else nav.style.top = 'auto';
    }
    let aside = dom.getElementById('aside'), asideH = aside.offsetHeight;
    if (aside.className !== 'hidden') {
        if (isNavTop) aside.style.bottom = '0px';
        else aside.style.bottom = 'auto';
    }
    else {
        if (isNavTop) aside.style.bottom = (-asideH + 16) + 'px';
        else aside.style.bottom = 'auto';
    }
};

let edgeNav = e => {
    let nav = dom.getElementById('nav'), h = nav.offsetHeight;
    if (nav.className !== 'hidden') {
        nav.className = 'hidden';
        if (isNavTop) nav.style.top = (-h + 16) + 'px';
        else nav.style.top = 'auto';
    }
    else {
        nav.className = 'visible';
        if (isNavTop) nav.style.top = '0px';
        else nav.style.top = 'auto';
    }
};

let edgeAside = e => {
    let aside = dom.getElementById('aside'), h = aside.offsetHeight;
    if (aside.className !== 'hidden') {
        aside.className = 'hidden';
        if (isNavTop) aside.style.bottom = (-h + 16) + 'px';
        else aside.style.bottom = 'auto';
    }
    else {
        aside.className = 'visible';
        if (isNavTop) aside.style.bottom = '0px';
        else aside.style.bottom = 'auto';
    }
};

window.onload = e => {
    dom = window.document || window.documentElement;
    Img = new Image();
    A = dom.createElement('a');
    UL = dom.createElement('ul');
    LI = dom.createElement('li');

    resizeDom();
    loadHisList();
    initNavEvent();
    triggerHisSelect();
};

window.onresize = e => { resizeDom() };

window.addEventListener('error', function (e) {
    let tag = e.target;
    if (!tag.tagName || tag.tagName.toUpperCase() !== 'IMG') return;
    window.stop();
    tag.className = 'hide';
}, true);