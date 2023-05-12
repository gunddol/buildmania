$(document).ready(function(){
	// 스크롤 시 메인 메뉴 고정
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
		if(scrolltop > 187){
			$('#header, #wrap').addClass('active');
			$('.all_category, .btn_hamburger .bar').removeClass('active');
		}
		else{
			$('#header, #wrap').removeClass('active');
		}

		// 스크롤시 사이드 메뉴 팔로잉
		$('#aside').animate({'top':scrolltop+0+'px'}, {queue: false, duration: 500});
	});

	// 전체 카테고리 열고 닫기
	$('.btn_all_category').click(function(){
		$('.all_category').toggleClass('active');
		$('.btn_hamburger .bar').toggleClass('active');
	});

	// 서브 메뉴 보이기						
	$('.nav_article > li').on('mouseenter focusin', function(){
		$(this).children('a').addClass('active');
		$(this).find('.submenu_box').show();
	});

	// 서브 메뉴 감추기
	$('.nav_article > li').on('mouseleave focusout', function(){
		$('.nav_article > li > a').removeClass('active');
		$('.submenu_box').hide();
	});

	// 사이드 메뉴 토글
	$('#aside .aside_toggle').click(function(){
		$('#aside').toggleClass('active');
		$(this).toggleClass('active');
	});
});


/**
* 콤마 제거
*/
function getNumString(s) {
	var rtn = parseFloat(s.replace(/,/gi, ""));
	if (isNaN(rtn)) {
		return 0;
	}else {
		return rtn;
	}
}

// 연산시 콤마제거
function removeComma(n){
	if ( typeof n == "undefined" || n == null || n == "" ) {
		return "";
	}
	var txtNumber = '' + n;
	return txtNumber.replace(/(,)/g, "");
}


function krw(data_value) {
	return Number(data_value).toLocaleString('en').split(".")[0];
}

function inputNumberWithComma(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

function inputNumberRemoveComma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, "");
}


/**
 * 문자열이 빈 문자열인지 체크하여 결과값을 리턴한다.
 * @param str       : 체크할 문자열
 */
function isEmpty(str){

	if(typeof str == "undefined" || str == null || str == "")
		return true;
	else
		return false ;
}

/**
* 문자열이 빈 문자열인지 체크하여 기본 문자열로 리턴한다.
* @param str           : 체크할 문자열
* @param defaultStr    : 문자열이 비어있을경우 리턴할 기본 문자열
*/
function nvl(str, defaultStr){

	if(typeof str == "undefined" || str == null || str == "")
		str = defaultStr ;

	return str ;
}

/**
* JSON sorting 
* @param element  : json
* @param prop     : key값
* @param propType : int/string
* @param orderBy  : asc/desc/default
*/
function sortJson(element, prop, propType, orderBy) {
	_log('element : ' + element + ' || prop : ' +prop + ' || propType : ' + propType + ' || orderBy ' + orderBy );

	switch (propType) {
		case "int":
			element = element.sort(function(a, b) {
				if (orderBy=='asc') {
					//return (parseInt(a[prop]) > parseInt(b[prop])) ? 1 : ((parseInt(a[prop]) < parseInt(b[prop])) ? -1 : 0);
					return (parseFloat(a[prop]) > parseFloat(b[prop])) ? 1 : ((parseFloat(a[prop]) < parseFloat(b[prop])) ? -1 : 0);
				} else if(orderBy=='desc'){
					//return (parseInt(b[prop]) > parseInt(a[prop])) ? 1 : ((parseInt(b[prop]) < parseInt(a[prop])) ? -1 : 0);
					return (parseFloat(b[prop]) > parseFloat(a[prop])) ? 1 : ((parseFloat(b[prop]) < parseFloat(a[prop])) ? -1 : 0);
				}
			});
			break;
		default:
			element = element.sort(function(a, b) {
				if (orderBy=='asc') {
					return (a[prop].toLowerCase() > b[prop].toLowerCase()) ? 1 : ((a[prop].toLowerCase() < b[prop].toLowerCase()) ? -1 : 0);
				} else if(orderBy=='desc') {
					return (b[prop].toLowerCase() > a[prop].toLowerCase()) ? 1 : ((b[prop].toLowerCase() < a[prop].toLowerCase()) ? -1 : 0);
				}
			});
	}

}


/*메인GNB검색*/
function mainsearch(f){
	if(!f.MainSearchkey.value){ jAlert('검색어를 입력해주세요.', 'BUILDMANIA'); f.MainSearchkey.focus();return false;}
}



/**
* JSON 최대값 return
* @param arr  : json
* @param prop : key 값
*/
function getMaxJson(arr, prop) {
	var max;
	for (var i=0 ; i<arr.length ; i++) {
		if (!max || parseFloat(getNumString(arr[i][prop])) > parseFloat(max))
			max = parseFloat(getNumString(arr[i][prop]));
	}
	return max;
}


function setAlertColor(msg, rgbHex){
	cl   =   " <font color="+rgbHex +">"+ msg+" </font> "   ;
	return cl;
}


	function loginCheckd() {
		if( $("#member_ck").val()) {
			return true;
		} else {
			jAlert('로그인후 이용하실 수 있습니다.','');
			return false;
		}
	}

	function krLogout(){
		$.ajax({
			url : '/shop/?up=logout',
			beforeSend:function(){
				$(".wrap-loading").fadeIn();	
			},
			success:function (data){
				//console.log("[Ajax SUCCESS]");
				jAlert('성공적으로 로그아웃 되었습니다.', 'BUILDMANIA', function(r) {
					if(r)	$(location).attr('href', '/shop/?mode=main');
				});
			},
			complete:function(){
				$(".wrap-loading").fadeOut();
			},
			error: function(result, o, e) {
				//console.log("[Ajax ERROR]");
			}
		});
	}


	/*cart 체크박스 개수*/
	function is_checked(elements_name)
	{
		var checked = false;
		var check = document.getElementsByName(elements_name);
		for (var i=0; i<check.length; i++) {
			if (check[i].checked) {
				checked = true;
			}
		}
		return checked;
	}


function _log(data){
	console.log(data);
}

// 쿠키 입력
function set_cookie(name, value, expirehours, domain)
{
    var today = new Date();
    today.setTime(today.getTime() + (60*60*1000*expirehours));
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
    if (domain) {
        document.cookie += "domain=" + domain + ";";
    }
}

// 쿠키 얻음
function get_cookie(name)
{
    var find_sw = false;
    var start, end;
    var i = 0;

    for (i=0; i<= document.cookie.length; i++)
    {
        start = i;
        end = start + name.length;

        if(document.cookie.substring(start, end) == name)
        {
            find_sw = true
            break
        }
    }

    if (find_sw == true)
    {
        start = end + 1;
        end = document.cookie.indexOf(";", start);

        if(end < start)
            end = document.cookie.length;

        return document.cookie.substring(start, end);
    }
    return "";
}

// 쿠키 지움
function delete_cookie(name)
{
    var today = new Date();

    today.setTime(today.getTime() - 1);
    var value = get_cookie(name);
    if(value != "")
        document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
}

//모든공백제거
function noSpace(str) {
	str = str.replace(/(\s*)/g,"");
	return str;
}

//입력값 확인용 정규식
function valueChk(val, type) {
	if (type == 1) var reg = /^[0-9]*$/;		//숫자만입력
	else if (type == 2) var reg = /^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$/;		//일반전화번호
	else if (type == 3) var reg = /^01([0|1|6|7|8|9]?)-([0-9]{3,4})-([0-9]{4})$/;		//핸드폰번호
	else if (type == 4) var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;		//이메일
	else if (type == 5) var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/		//6~12자의 영문대소문자, 숫자만 사용
	else if (type == 6) var reg = /^http[s]?\:\/\//i;		//url 확인
	return reg.test(val);
}

//3자릿수 콤마처리
function addComma(str) { 
	var input_str = String(str);

	if (input_str == '') return false;
	input_str = parseInt(input_str.replace(/[^0-9]/g, '')).toString();
	if (isNaN(input_str)) { return false; }

	var sliceChar = ',';
	var step = 3;
	var step_increment = -1;
	var tmp  = '';
	var retval = '';
	var str_len = input_str.length;

	for (var i=str_len; i>=0; i--)	{
		tmp = input_str.charAt(i);
		if (tmp == sliceChar) continue;
		if (step_increment%step == 0 && step_increment != 0) retval = tmp + sliceChar + retval;
		else retval = tmp + retval;
		step_increment++;
	}

	return retval;
}

//문자열 변경
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

//php nl2br
function nl2br(str){  
    return str.replace(/\n/g, "<br />");  
} 
