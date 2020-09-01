
var MaxWidth = 1920;
var MaxHeight = 1080;
var MinWidth = 960;
var MinHeight = 520;
var HeadBoxHeight = 30;
var FootBoxHeight = 40;
var WinWidth = function () { return document.documentElement.clientWidth; };
var WinHeight = function () { return document.documentElement.clientHeight; };
var MainBoxWidth = function () { return WinWidth() > MaxWidth ? MaxWidth : WinWidth(); }; //(WinWidth() < MinWidth ? MinWidth : WinWidth()); };
var MainBoxHeight = function () { return WinHeight() > MaxHeight ? MaxHeight : WinHeight(); }; // (WinHeight() < MinHeight ? MinHeight : WinHeight()); };
var ContentBoxWidth = function () { return MainBoxWidth(); };
var ContentBoxHeight = function () { return MainBoxHeight() - HeadBoxHeight - FootBoxHeight; };
var CurrDate = new Date();
var DefaultImg = "Image/0.jpg";
var BgImgArray = new Array();
var BgImgCount = LoadBgImgArray();
var CurrBgImgNo = BgImgCount > 0 ? CurrDate.getMinutes() % BgImgCount : 0;
var BgImgPath = function (ImgNo) {
	if (BgImgCount > 0) {
		ImgNo = ImgNo < 0 ? BgImgCount - 1 : (ImgNo > BgImgCount - 1 ? 0 : ImgNo);
		return "Image/Background/" + BgImgArray[ImgNo].Img;
	}
	else
		return DefaultImg;
};
function LoadBgImgArray() {
	BgImgArray = [
        { "Id": "1", "Img": "Bg0.jpg" },
        { "Id": "2", "Img": "Bg1.jpg" },
        { "Id": "3", "Img": "Bg2.jpg" },
        { "Id": "4", "Img": "Bg3.jpg" },
        { "Id": "5", "Img": "Bg4.jpg" },
        { "Id": "6", "Img": "Bg5.jpg" },
        { "Id": "7", "Img": "Bg6.jpg" },
        { "Id": "8", "Img": "Bg7.jpg" },
        { "Id": "9", "Img": "Bg8.jpg" },
        { "Id": "10", "Img": "Bg9.jpg" },
        { "Id": "11", "Img": "Bg10.jpg" },
        { "Id": "12", "Img": "Bg11.jpg" },
        { "Id": "13", "Img": "Bg12.jpg" },
        { "Id": "14", "Img": "Bg13.jpg" },
        { "Id": "15", "Img": "Bg14.jpg" },
        { "Id": "16", "Img": "Bg15.jpg" },
        { "Id": "17", "Img": "Bg16.jpg" }
    ];
	return BgImgArray.length;
}
var CurrBgImgPath;
var MenuCount = 5;
var CurrMenuNo = 0;
var GetA = function (MenuNo) {
	if (MenuCount > 0) {
		MenuNo = MenuNo < 0 ? MenuCount - 1 : (MenuNo > MenuCount - 1 ? 0 : MenuNo);
		return $("#A" + MenuNo);
	}
	else
		return $A0;
}
var GetPage = function (MenuNo) {
	if (MenuCount > 0) {
		MenuNo = MenuNo < 0 ? MenuCount - 1 : (MenuNo > MenuCount - 1 ? 0 : MenuNo);
		return $("#Page" + MenuNo);
	}
	else
		return $Page0;
}





var CenterBoxWidth = 960;
var CenterBoxHeight = 450;
var LBoxWidth = 270;
var LBoxHeight = 270;
var MBoxWidth = 90;
var MBoxHeight = 90;
var MainImgArray = new Array();
var MainImgCount = LoadMainImgArray();
var CurrMainImgNo = MainImgCount > 0 ? CurrDate.getSeconds() % MainImgCount : 0;
var MainImgPath = function (ImgNo) {
	if (MainImgCount > 0) {
		ImgNo = ImgNo < 0 ? MainImgCount - 1 : (ImgNo > MainImgCount - 1 ? 0 : ImgNo);
		return "Image/Background/" + MainImgArray[ImgNo].Img;
	}
	else
		return DefaultImg;
};
function LoadMainImgArray() {
	MainImgArray = [
        { "Id": "1", "Img": "Bg0.jpg" },
        { "Id": "2", "Img": "Bg1.jpg" },
        { "Id": "3", "Img": "Bg2.jpg" },
        { "Id": "4", "Img": "Bg3.jpg" },
        { "Id": "5", "Img": "Bg4.jpg" },
        { "Id": "6", "Img": "Bg5.jpg" },
        { "Id": "7", "Img": "Bg6.jpg" },
        { "Id": "8", "Img": "Bg7.jpg" },
        { "Id": "9", "Img": "Bg8.jpg" },
        { "Id": "10", "Img": "Bg9.jpg" },
        { "Id": "11", "Img": "Bg10.jpg" },
        { "Id": "12", "Img": "Bg17.jpg" },
        { "Id": "13", "Img": "Bg12.jpg" },
        { "Id": "14", "Img": "Bg13.jpg" },
        { "Id": "15", "Img": "Bg14.jpg" },
        { "Id": "16", "Img": "Bg15.jpg" },
        { "Id": "17", "Img": "Bg16.jpg" }
    ];
	return MainImgArray.length;
}



var AlbumWidth = 240;
var AlbumHeight = 240;
var AlbumZIndex = 10;
var AlbumMargin = 20;
var AlbumArray = new Array();
var AlbumCount = LoadAlbumArray();
var AlbumPath = function (ImgNo) {
	if (AlbumCount > 0) {
		ImgNo = ImgNo < 0 ? AlbumCount - 1 : (ImgNo > AlbumCount - 1 ? 0 : ImgNo);
		return "Image/Background/" + AlbumArray[ImgNo].Img;
	}
	else
		return DefaultImg;
};
function LoadAlbumArray() {
	AlbumArray = [
        { "Id": "1", "Img": "Bg0.jpg", "Name": "生活相册" },
        { "Id": "2", "Img": "Bg1.jpg", "Name": "生活相册" },
        { "Id": "3", "Img": "Bg2.jpg", "Name": "生活相册" },
        { "Id": "4", "Img": "Bg3.jpg", "Name": "生活相册" },
        { "Id": "5", "Img": "Bg4.jpg", "Name": "生活相册" },
        { "Id": "6", "Img": "Bg5.jpg", "Name": "生活相册" },
        { "Id": "7", "Img": "Bg6.jpg", "Name": "生活相册" },
        { "Id": "8", "Img": "Bg7.jpg", "Name": "生活相册" },
        { "Id": "9", "Img": "Bg8.jpg", "Name": "生活相册" },
        { "Id": "10", "Img": "Bg9.jpg", "Name": "生活相册" },
        { "Id": "11", "Img": "Bg10.jpg", "Name": "生活相册" },
        { "Id": "12", "Img": "Bg11.jpg", "Name": "生活相册" },
        { "Id": "13", "Img": "Bg12.jpg", "Name": "生活相册" },
        { "Id": "14", "Img": "Bg13.jpg", "Name": "生活相册" },
        { "Id": "15", "Img": "Bg14.jpg", "Name": "生活相册" },
        { "Id": "16", "Img": "Bg15.jpg", "Name": "生活相册" },
        { "Id": "17", "Img": "Bg16.jpg", "Name": "生活相册" }
    ];
	return AlbumArray.length;
}

var AlbumHtmlNo = 1;
var CurrAlbumPage = 1;
var AlbumLastShowCount = 0;

var AlbumPagerWidth = 60;
var AlbumPagerHeight = 10;
var AlbumPagerZIndex = 10;
var AlbumPagerMargin = 5;
var AlbumPagerHtmlNo = 1;
var CurrAlbumPagerPage = 1;
var AlbumPagerPageSize = 5;




var $body;
var $head;
var $MainBox;
var $ALis;
var $MenuAs;
var $BgImg;
var $BgGlass;
var $HeadImg$BigHeadImg;
var $HeadImg;
var $BigHeadImg;
var $A0, $A1, $A2, $A3, $A4;
var $Page0, $Page1, $Page2, $Page3, $Page4;
var $MenuAs,$Pages;

var $CenterBox;
var $ImgBox;
var $SiteName$FirstText;
var $SiteName;
var $FirstText;
var $AlbumNames;
var $SBox1$SBox3;
var $SBox1;
var $SBox2;
var $SBox3;
var $LBox;
var $YM;
var $D;

$(document).ready(function () {
	InitPage();
	ResetSize();
	ShowPage(CurrMenuNo);
});

function InitPage() {
	SetjQueryObj();
	BindEvents();
	CurrBgImgPath = BgImgPath(CurrBgImgNo);
	$HeadImg$BigHeadImg.attr({ "src": "Image/HeadImg.jpg" });
	$BgGlass.css({ "opacity": "0.8" });
};

function ResetSize() {
	$MainBox.css({ "width": MainBoxWidth(), "height": MainBoxHeight() });
	var CWidth = ContentBoxWidth(), CHeight = ContentBoxHeight();
	$ContentBox$BgGlass$Pages.css({ "width": CWidth, "height": CHeight });
	ShowImgNoFade(CurrBgImgPath)

	switch (CurrMenuNo.toString()) {
		case "0":
			var CenterBoxTop = CHeight > CenterBoxHeight ? Math.floor((CHeight - CenterBoxHeight) / 2) : 0;
			var CenterBoxLeft = CWidth > CenterBoxWidth ? Math.floor((CWidth - CenterBoxWidth) / 2) : 0;
			$CenterBox.css({ "top": CenterBoxTop, "left": CenterBoxLeft });
			if (CWidth < 960) {
				$ImgBox.hide();
				if (CWidth < 560) {
					$SiteName$FirstText.css({ "width": CWidth - 10, "left": 5 });
					$SiteName.css({ "top": "0px" });
					$FirstText.css({ "top": "60px" });
					$ALis.css({ "width": 20 });
				}
				else {
					$SiteName$FirstText.css({ "width": 560, "left": (CWidth - 560) / 2 });
					$SiteName.css({ "top": "90px" });
					$FirstText.css({ "top": "160px" });
					$ALis.css({ "width": 40 });
				}
			}
			else {
				$ImgBox.show();
				$SiteName$FirstText.css({ "width": 560, "left": 400 });
			}
			break;
		case "1":
			CurrAlbumPage = 1;
			//SetAlbumPage();
			break;
	}
};

function ShowPage(PageNo) {
	if (GetPage(PageNo).length > 0) {
		$BgGlass.show();
		$Pages.hide();
		GetPage(PageNo).show();
		$MenuAs.css({ "color": "#8F8F8F" });
		GetA(PageNo).css({ "color": "#F00" });
		if (CurrBgImgPath != BgImgPath(CurrBgImgNo)) {
			CurrBgImgPath = BgImgPath(CurrBgImgNo);
			ShowImg(CurrBgImgPath);
		}
		switch (PageNo.toString()) {
			case "0":
				SetLBoxDate();
				SetLBoxImg(CurrMainImgNo);
				break;
			case "1":
				AlbumLastShowCount = 0;
				SetAlbumPage();
				break;
		}
		CurrMenuNo = PageNo;
	}
};






function SetjQueryObj() {
	$body = $("body");
	$head = $("head");
	$MainBox = $("#MainBox");
	$ALis = $(".ALi");
	$MenuAs = $(".MenuA");
	$ContentBox$BgGlass$Pages = $("#ContentBox,#BgGlass,.Page");
	$BgImg = $("#BgImg");
	$BgGlass = $("#BgGlass");
	$HeadImg$BigHeadImg = $("#HeadImg,#BigHeadImg");
	$HeadImg = $("#HeadImg");
	$BigHeadImg = $("#BigHeadImg");
	$A0 = $("#A0");
	$A1 = $("#A1");
	$A2 = $("#A2");
	$A3 = $("#A3");
	$A4 = $("#A4");
	$MenuAs = $(".MenuA");
	$Page0 = $("#Page0");
	$Page1 = $("#Page1");
	$Page2 = $("#Page2");
	$Page3 = $("#Page3");
	$Page4 = $("#Page4");
	$Pages = $(".Page");

	$CenterBox = $("#CenterBox");
	$ImgBox = $("#ImgBox");
	$SiteName$FirstText = $("#SiteName,#FirstText");
	$SiteName = $("#SiteName");
	$FirstText = $("#FirstText");
	$AlbumNames = $(".AlbumName");
	$SBox1$SBox3 = $("#SBox1,#SBox3");
	$SBox1 = $("#SBox1");
	$SBox2 = $("#SBox2");
	$SBox3 = $("#SBox3");
	$LBox = $("#LBox");
	$YM = $("#YM");
	$D = $("#D");
}

function ShowImg(ImgPath) {
	SetImg("BgImg", ImgPath, ContentBoxWidth(), ContentBoxHeight());
};

function ShowImgNoFade(ImgPath) {
	SetImgNoFade("BgImg", ImgPath, ContentBoxWidth(), ContentBoxHeight());
};

function SetAlbumPage() {
	if (AlbumCount > 0) {
		AlbumLastShowCount = LoadCardHtml(AlbumLastShowCount, CurrAlbumPage, "Page1", ContentBoxWidth(), ContentBoxHeight(), "Album", AlbumCount, AlbumWidth, AlbumHeight, AlbumZIndex, AlbumMargin, AlbumHtmlNo);
		$AlbumNames.css({ "opacity": "0.8" });
		SetPagerBtns(CurrAlbumPagerPage, AlbumPagerPageSize, "Page1", ContentBoxWidth(), ContentBoxHeight(), "PagerBtn", AlbumCount, AlbumWidth, AlbumHeight, AlbumZIndex, AlbumMargin, AlbumPagerWidth, AlbumPagerHeight, AlbumPagerMargin, AlbumPagerZIndex);
	}
	else return;
}

function GetColCount(BoxWidth, CardWidth, CardMargin) {
	var colCount = Math.floor((BoxWidth - CardMargin) / (CardWidth + CardMargin));
	return colCount < 1 ? 1 : colCount;
}
function GetRowCount(BoxHeight, CardHeight, CardMargin) {
	var rowCount = Math.floor((BoxHeight - CardMargin) / (CardHeight + CardMargin));
	return rowCount < 1 ? 1 : rowCount;
}
function GetLMargin(BoxWidth, CardWidth, CardMargin, ColCount) {
	var lMargin = Math.floor((BoxWidth - (CardWidth + CardMargin) * ColCount + CardMargin) / 2);
	return lMargin < 1 ? 0 : lMargin;
}
function GetTMargin(BoxHeight, CardHeight, CardMargin, RowCount) {
	var tMargin = Math.floor((BoxHeight - (CardHeight + CardMargin) * RowCount + CardMargin) / 2);
	return tMargin < 1 ? 0 : tMargin;
}
function GetPageCount(CardCount, CardPosCount) {
	return (CardCount % CardPosCount == 0) ? Math.floor(CardCount / CardPosCount) : Math.floor(CardCount / CardPosCount + 1);
}
function CheckCurrPage(CurrPage, PageCount) {
	return (CurrPage < 1) ? 1 : ((CurrPage > PageCount) ? PageCount : CurrPage);
}
function GetStartNo(CurrPage, CardPosCount) {
	return (CurrPage - 1) * CardPosCount;
}
function GetShowCount(CardCount, CardPosCount, CurrPage, PageCount) {
	return (CardCount % CardPosCount == 0) ? CardPosCount : ((CurrPage == PageCount) ? (CardCount % CardPosCount) : CardPosCount);
}
function LoadAlbumHtml(LastShowCount, CurrPage, BoxId, BoxWidth, BoxHeight, CardIdName, CardCount, CardWidth, CardHeight, CardZIndex, CardMargin, HtmlNo, PagerPageSize) {
	var ColCount = GetColCount(BoxWidth, CardWidth, CardMargin);
	var RowCount = GetRowCount(BoxHeight, CardHeight, CardMargin);
	var LMargin = GetLMargin(BoxWidth, CardWidth, CardMargin, ColCount);
	var TMargin = GetTMargin(BoxHeight, CardHeight, CardMargin, RowCount);
	var CardPosCount = ColCount * RowCount;
	var PageCount = GetPageCount(CardCount, CardPosCount);
	CurrPage = CheckCurrPage(CurrPage, PageCount);
	var StartNo = GetStartNo(CurrPage, CardPosCount);
	var ShowCount = GetShowCount(CardCount, CardPosCount, CurrPage, PageCount);

	var TopPos = 0;
	var LeftPos = 0;
	if (ShowCount != LastShowCount) {
		$("#" + BoxId).empty();
		for (var i = 0; i < ShowCount; StartNo++, i++) {
			LeftPos = LMargin + (CardWidth + CardMargin) * (i % ColCount);
			TopPos = TMargin + (CardHeight + CardMargin) * Math.floor(i / ColCount);
			$("#" + BoxId).append(CardHtml(i, StartNo, HtmlNo));
			$("#" + CardIdName + i).css({ "left": LeftPos, "top": TopPos, "z-index": CardZIndex, "width": CardWidth, "height": CardHeight });
			SetImg(CardIdName + 'Img' + i, AlbumPath(StartNo), CardWidth, CardHeight);
		}
	}
	else {
		for (var i = 0; i < ShowCount; i++) {
			LeftPos = LMargin + (CardWidth + CardMargin) * (i % ColCount);
			TopPos = TMargin + (CardHeight + CardMargin) * Math.floor(i / ColCount);
			$("#" + CardIdName + i).css({ "left": LeftPos, "top": TopPos, "z-index": CardZIndex, "width": CardWidth, "height": CardHeight });
		}
	}
	return ShowCount;
}

function LoadCardHtml(LastShowCount, CurrPage, BoxId, BoxWidth, BoxHeight, CardIdName, CardCount, CardWidth, CardHeight, CardZIndex, CardMargin, HtmlNo, PagerPageSize) {
	var TopPos = 0;
	var LeftPos = 0;
	var colCount = Math.floor((BoxWidth - CardMargin) / (CardWidth + CardMargin));
	var ColCount = colCount < 1 ? 1 : colCount;
	var rowCount = Math.floor((BoxHeight - CardMargin) / (CardHeight + CardMargin));
	var RowCount = rowCount < 1 ? 1 : rowCount;
	var lMargin = Math.floor((BoxWidth - (CardWidth + CardMargin) * ColCount + CardMargin) / 2);
	var LMargin = lMargin < 1 ? 0 : lMargin;
	var tMargin = Math.floor((BoxHeight - (CardHeight + CardMargin) * RowCount + CardMargin) / 2);
	var TMargin = tMargin < 1 ? 0 : tMargin;
	var CardPosCount = ColCount * RowCount;
	var PageCount = (CardCount % CardPosCount == 0) ? Math.floor(CardCount / CardPosCount) : Math.floor(CardCount / CardPosCount + 1);
	CheckCurrPage(CurrPage, PageCount);
	var n = (CurrPage - 1) * CardPosCount;
	var ShowCount = (CardCount % CardPosCount == 0) ? CardPosCount : ((CurrPage == PageCount) ? (CardCount % CardPosCount) : CardPosCount);
	if (ShowCount != LastShowCount) {
		$("#" + BoxId).empty();
		for (var i = 0; i < ShowCount; n++, i++) {
			LeftPos = LMargin + (CardWidth + CardMargin) * (i % ColCount);
			TopPos = TMargin + (CardHeight + CardMargin) * Math.floor(i / ColCount);
			$("#" + BoxId).append(CardHtml(i, n, HtmlNo));
			$("#" + CardIdName + i).css({ "left": LeftPos, "top": TopPos, "z-index": CardZIndex, "width": CardWidth, "height": CardHeight });
			SetImg(CardIdName + 'Img' + i, AlbumPath(n), CardWidth, CardHeight);
		}
	}
	else {
		for (var i = 0; i < ShowCount; i++) {
			LeftPos = LMargin + (CardWidth + CardMargin) * (i % ColCount);
			TopPos = TMargin + (CardHeight + CardMargin) * Math.floor(i / ColCount);
			$("#" + CardIdName + i).css({ "left": LeftPos, "top": TopPos, "z-index": CardZIndex, "width": CardWidth, "height": CardHeight });
		}
	}
	return ShowCount;
}

function SetPagerBtns(CurrPagerPage, PagerPageSize, BoxId, BoxWidth, BoxHeight, CardIdName, CardCount, CardWidth, CardHeight, CardZIndex, CardMargin, PagerWidth, PagerHeight, PagerMargin, PagerZIndex) {
	var LeftPos = 0;
	var colCount = Math.floor((BoxWidth - CardMargin) / (CardWidth + CardMargin));
	var rowCount = Math.floor((BoxHeight - CardMargin) / (CardHeight + CardMargin));
	var lMargin = Math.floor((BoxWidth - (PagerWidth + PagerMargin) * PagerPageSize + PagerMargin) / 2);
	var ColCount = colCount < 1 ? 1 : colCount;
	var RowCount = rowCount < 1 ? 1 : rowCount;
	var LMargin = lMargin < 1 ? 0 : lMargin;
	var CardPosCount = ColCount * RowCount;
	var PagerCount = (CardCount % CardPosCount == 0) ? Math.floor(CardCount / CardPosCount) : Math.floor(CardCount / CardPosCount + 1);
	var PagerPageCount = (PagerCount % PagerPageSize == 0) ? (PagerCount / PagerPageSize) : Math.floor(PagerCount / PagerPageSize) + 1;

	CheckCurrPage(CurrPagerPage, PagerPageCount);
	var ShowCount = (PagerCount % PagerPageSize == 0) ? PagerPageSize : ((CurrPagerPage == PagerPageCount) ? (PagerCount % PagerPageSize) : PagerPageSize);
	var Pn = (CurrPagerPage - 1) * PagerPageSize + 1;
	$(".MorePagerBtn,.PagerBtn").remove();
	$("#" + BoxId).append(' <a href="#" id="LMorePagerBtn" class="MorePagerBtn" style="left:0;">&lt;&lt;</a> ');
	for (var p = 0; p < ShowCount; p++, Pn++) {
		LeftPos = LMargin + (PagerWidth + PagerMargin) * p;
		$("#" + BoxId).append(' <a href="#" id="PagerBtn' + Pn + '" class="PagerBtn" style="left:' + LeftPos + 'px;z-index:' + CardZIndex + ';width:' + PagerWidth + 'px;height:' + PagerHeight + '"> ' + Pn + ' </a> ');
	}
	$("#" + BoxId).append(' <a href="#" id="RMorePagerBtn" class="MorePagerBtn" style="right:0;">&gt;&gt;</a> ');
	//	BindPagerEvents();
	//	SetCurrPageCss();


}

function CheckCurrPage(CurrPage, PageCount) {
	if (CurrPage < 1) CurrPage = 1;
	if (CurrPage > PageCount) CurrPage = PageCount;
}

function CardHtml(i, n, HtmlNo) {
	switch (HtmlNo.toString()) {
		case "1":
			var chtml = '<div id="Album' + i + '" class="Album">';
			chtml += '<img id="AlbumImg' + i + '" class="AlbumImg"  src="' + AlbumPath(n) + '" alt="" />';
			chtml += '<div class="AlbumName">' + AlbumArray[n].Name + '</div>';
			chtml += '</div>';
			return chtml
	}
}



function SetLBoxDate() {
	$YM.html(CurrDate.getFullYear() + "." + (CurrDate.getMonth() + 1));
	$D.html(CurrDate.getDate());
};

function SetLBoxImg(LNo) {
	var M1No = LNo - 1;
	var M3No = LNo + 1;
	if (LNo == 0) { LNo = 0; M1No = MainImgCount - 1; M3No = 1; }
	if (LNo == MainImgCount - 1) { LNo = MainImgCount - 1; M1No = MainImgCount - 2; M3No = 0; }
	SetImgNoFade("M1Img", MainImgPath(M1No), MBoxWidth, MBoxHeight);
	SetImg("LImg", MainImgPath(LNo), LBoxWidth, LBoxHeight);
	SetImgNoFade("M3Img", MainImgPath(M3No), MBoxWidth, MBoxHeight);
};

function BindEvents() {

	$SiteName.click(function () {
		var css = '<style type="text/css">#SiteName{color:#0F0;}</style>'
		$head.append(css);
		$SiteName.addClass("SiteName");
		return false;
	});

	$(document).bind("contextmenu", function () { return false; });
	$(document).bind("selectstart", function () { return false; });
	$body.mouseup(function () { return false; });
	$(window).resize(function () { ResetSize(); });

	$SBox1$SBox3.mouseenter(function () {
		$BgGlass.fadeTo("fast", 0.9);
		return false;
	}).mousedown(function () {
		$(this).css({ "color": "red", "background": "#FFF" })
	}).mouseup(function () {
		$(this).css({ "color": "#FFF", "background": "Silver" })
	}).mouseleave(function () {
		$BgGlass.fadeTo("slow", 0.8);
		return false;
	});
	$SBox1.click(function () {
		CurrMainImgNo = CurrMainImgNo - 1 < 0 ? MainImgCount - 1 : CurrMainImgNo - 1;
		SetLBoxImg(CurrMainImgNo);
		return false;
	});
	$SBox3.click(function () {
		CurrMainImgNo = CurrMainImgNo + 1 > MainImgCount - 1 ? 0 : CurrMainImgNo + 1;
		SetLBoxImg(CurrMainImgNo);
		return false;
	});
	$SBox2.mouseenter(function () {
		$BgGlass.fadeTo("fast", 0.0);
		$CenterBox.fadeTo("fast", 0.0);
		return false;
	}).mouseleave(function () {
		$BgGlass.fadeTo("slow", 0.8);
		$CenterBox.fadeTo("slow", 1.0);
		return false;
	}).click(function () {
		CurrBgImgNo = CurrBgImgNo + 1 > BgImgCount - 1 ? 0 : CurrBgImgNo + 1;
		CurrBgImgPath = BgImgPath(CurrBgImgNo);
		ShowImg(CurrBgImgPath);
		return false;
	});
	$HeadImg.mouseenter(function () {
		$BigHeadImg.show("slow");
		return false;
	}).click(function (event) {
		event.preventDefault();
		$BigHeadImg.show("fast");
		return false;
	}).mouseleave(function () {
		$BigHeadImg.hide();
		return false;
	});
	$MenuAs.mouseenter(function () {
		$(this).css({ "color": "#FFF" });
		return false;
	}).click(function (event) {
		//event.preventDefault();
		//ShowPage(this.id.toString().substring(1));
		return false;
	}).mouseleave(function () {
		if (this.id != GetA(CurrMenuNo)[0].id)
			$(this).css({ "color": "#8F8F8F" });
		else
			$(this).css({ "color": "#F00" });
		return false;
	});
	$('#HeadBox h1').click(function () {
	    location.href = 'http://lixueqin.cn';
	});
	$LBox.click(function () {
		$("#Page0").hide();
		$BgGlass.hide();
		CurrBgImgPath = MainImgPath(CurrMainImgNo);
		ShowImg(CurrBgImgPath);
		return false;
	});
	$BgImg.click(function (e) {
		if (e.pageX > WinWidth() * 3 / 4) {
			CurrMainImgNo = CurrMainImgNo + 1 > MainImgCount - 1 ? 0 : CurrMainImgNo + 1;
			CurrBgImgPath = MainImgPath(CurrMainImgNo);
			ShowImg(CurrBgImgPath);
		}
		else
			if (e.pageX < WinWidth() / 4) {
				CurrMainImgNo = CurrMainImgNo - 1 < 0 ? MainImgCount - 1 : CurrMainImgNo - 1;
				CurrBgImgPath = MainImgPath(CurrMainImgNo);
				ShowImg(CurrBgImgPath);
			}
			else
				return false;
	}).mousemove(function (e) {
		if (e.pageX > WinWidth() * 3 / 4) {
			$BgImg.attr({ "title": "点击显示下一页" }).css({ "cursor": "pointer" });
		}
		else
			if (e.pageX < WinWidth() / 4) {
				$BgImg.attr({ "title": "点击显示上一页" }).css({ "cursor": "pointer" });
			}
			else {
				$BgImg.attr({ "title": "" }).css({ "cursor": "default" });
			}
	});
};

function SetImg(ImgId, ImgSrc, BoxWidth, BoxHeight) {
	$("#" + ImgId).fadeTo(0, 0.0);
	var img = new Image();
	var $Img = $("#" + ImgId);
	$Img.attr({ "src": ImgSrc });
	img.src = document.getElementById(ImgId).src;
	if (img.complete) {
		img.style.width = "auto";
		img.style.height = "auto";
		var H = img.width * BoxHeight / BoxWidth;
		if (img.height >= H) {
			$Img.css({ "width": BoxWidth, "height": "auto" });
			var xTop = parseInt((BoxHeight - BoxWidth * img.height / img.width) / 2);
			xTop = xTop < 0 ? xTop : 0;
			$Img.css({ "top": xTop + "px", "left": 0 });
		}
		else {
			$Img.css({ "width": "auto", "height": BoxHeight });
			var xLeft = parseInt((BoxWidth - BoxHeight * img.width / img.height) / 2);
			xLeft = xLeft < 0 ? xLeft : 0;
			$Img.css({ "top": 0, "left": xLeft + "px" });
		}
		delete img;
		$("#" + ImgId).fadeTo("slow", 1.0);
	}
	else {
		img.onload = function () {
			var H = img.width * BoxHeight / BoxWidth;
			if (img.height >= H) {
				$Img.css({ "width": BoxWidth, "height": "auto" });
				var xTop = parseInt((BoxHeight - BoxWidth * img.height / img.width) / 2);
				xTop = xTop < 0 ? xTop : 0;
				$Img.css({ "top": xTop + "px", "left": 0 });
			}
			else {
				$Img.css({ "width": "auto", "height": BoxHeight });
				var xLeft = parseInt((BoxWidth - BoxHeight * img.width / img.height) / 2);
				xLeft = xLeft < 0 ? xLeft : 0;
				$Img.css({ "top": 0, "left": xLeft + "px" });
			}
			delete img;
			$("#" + ImgId).fadeTo("slow", 1.0);
		}
	}
};

function SetImgNoFade(ImgId, ImgSrc, BoxWidth, BoxHeight) {
	var img = new Image();
	var $Img = $("#" + ImgId);
	$Img.attr({ "src": ImgSrc });
	img.src = document.getElementById(ImgId).src;
	if (img.complete) {
		img.style.width = "auto";
		img.style.height = "auto";
		var H = img.width * BoxHeight / BoxWidth;
		if (img.height >= H) {
			$Img.css({ "width": BoxWidth, "height": "auto" });
			var xTop = parseInt((BoxHeight - BoxWidth * img.height / img.width) / 2);
			xTop = xTop < 0 ? xTop : 0;
			$Img.css({ "top": xTop + "px", "left": 0 });
		}
		else {
			$Img.css({ "width": "auto", "height": BoxHeight });
			var xLeft = parseInt((BoxWidth - BoxHeight * img.width / img.height) / 2);
			xLeft = xLeft < 0 ? xLeft : 0;
			$Img.css({ "top": 0, "left": xLeft + "px" });
		}
		delete img;
	}
	else {
		img.onload = function () {
			var H = img.width * BoxHeight / BoxWidth;
			if (img.height >= H) {
				$Img.css({ "width": BoxWidth, "height": "auto" });
				var xTop = parseInt((BoxHeight - BoxWidth * img.height / img.width) / 2);
				xTop = xTop < 0 ? xTop : 0;
				$Img.css({ "top": xTop + "px", "left": 0 });
			}
			else {
				$Img.css({ "width": "auto", "height": BoxHeight });
				var xLeft = parseInt((BoxWidth - BoxHeight * img.width / img.height) / 2);
				xLeft = xLeft < 0 ? xLeft : 0;
				$Img.css({ "top": 0, "left": xLeft + "px" });
			}
			delete img;
		}
	}
};