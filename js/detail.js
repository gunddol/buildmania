window.onload = function(){
	// 상세 페이지만 헤더 고정 풀기
    $('#header').removeClass('active');
	$('#wrap').removeClass('active');
}
	$('#passck').click(function(){
		jAlert('본인만 확인할 수 있습니다.',''); return false;
	});



function sal_sum(sal_amt) {
	sal_vat   = ((sal_amt/1)*0.1);// 부가세(VAT)
	sal_price = Math.round(sal_amt - sal_vat);// 단가(반올림)
	sal_vat   = Math.round(sal_vat);// 부가세(반올림)

	return Number(sal_vat);
}

/*가격추가옵션 (공통)*/
function ChangeSelect(value) {
	var valstr = value;
	var valarr = valstr.split("|");//구분자로 구분하여 가격만
	var valvar = valarr[2];//추가옵션금액
	var idx = valarr[0];//key

	if ($("input:checkbox[name='typeBuyeach[]']").eq(idx).is(":checked") == true){
		var option_add1=$("select[name='option_add1["+idx+"]']").val();
		var option_add2=$("select[name='option_add2["+idx+"]']").val();
		if(option_add1){
			var valarr1 = option_add1.split("|");//구분자로 구분하여 가격만
			var valvar1 = valarr1[2];//추가옵션금액
		}
		if(option_add2){
			var valarr2 = option_add2.split("|");//구분자로 구분하여 가격만
			var valvar2 = valarr2[2];//추가옵션금액
		}

			//alert(valvar2);

		option_price=$("input[name='option_price_send["+idx+"]']").val();//현재행의 총금액
		volume=$("input[name='volume[]']").eq(idx).val();//현재 제품개수
		var order_sum_total_buy=$('input[name=option_pr]').eq(idx).val(); 
		var order_sum=removeComma(order_sum_total_buy)*volume;

		/*
		if(Number(removeComma(valvar1))>Number(0)){
			if(volume>1){
				order_sum=Number(removeComma(option_price))+(Number(removeComma(valvar1))*volume);
			}else{
				order_sum=Number(removeComma(option_price))+Number(removeComma(valvar1));
			}
		}
		*/
		if(Number(removeComma(valvar2))>Number(0) && Number(removeComma(valvar1))>Number(0)){ 
				order_sum=(Number(removeComma(option_price))*volume)+((Number(removeComma(valvar2))+Number(removeComma(valvar1)))*volume);
		}else if(Number(removeComma(valvar2))>Number(0)){

				order_sum=(Number(removeComma(option_price))*volume)+(Number(removeComma(valvar2))*volume);

		}else if(Number(removeComma(valvar1))>Number(0)){

				order_sum=(Number(removeComma(option_price))*volume)+(Number(removeComma(valvar1))*volume);

		}


		//alert(option_price_add);
		/*
		if(volume>1){
			option_price_add=Number(removeComma(option_price))+Number(removeComma(valvar));
			option_price_add=Number(option_price_add)*Number(volume);
		}else{
			option_price_add=Number(removeComma(option_price))+Number(removeComma(valvar));
		}
		*/

		$("input[name='option_add']").eq(idx).val(krw(order_sum));
		//$("input[name='option_price[]']").eq(idx).val(krw(option_price_add));
		$("input[name='option_price[]']").eq(idx).val(krw(order_sum));
		$("input[name='volume_send["+ idx +"]']").val(volume);//수량값전달
		return order_total_sum(order_sum, idx);
	}else{
		$("select[name='option_add1["+idx+"]'] option:eq(0)").prop("selected", true);
		$("select[name='option_add2["+idx+"]'] option:eq(0)").prop("selected", true);
		jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
		return false;
	}
}



/*가격추가옵션 (1)*/
function ChangeSelect_01(value) {
	var valstr = value;
	var valarr = valstr.split("|");//구분자로 구분하여 가격만
	var valvar = valarr[2];//추가옵션금액
	var idx = valarr[0];//key

	if ($("input:checkbox[name='typeBuyeach[]']").eq(idx).is(":checked") == true){
		var option_add1=$("select[name='option_add1["+idx+"]']").val();
		var valarr1 = option_add1.split("|");//구분자로 구분하여 가격만
		var valvar1 = valarr1[2];//추가옵션금액

			//alert(valvar2);

		option_price=$("input[name='option_price_send["+idx+"]']").val();//현재행의 총금액
		volume=$("input[name='volume[]']").eq(idx).val();//현재 제품개수
		var order_sum_total_buy=$('input[name=option_pr]').eq(idx).val(); 
		var order_sum=removeComma(order_sum_total_buy)*volume;

		if(Number(removeComma(valvar1))>Number(0)){

				order_sum=(Number(removeComma(option_price))*volume)+(Number(removeComma(valvar1))*volume);

		}


		$("input[name='option_add']").eq(idx).val(krw(order_sum));
		//$("input[name='option_price[]']").eq(idx).val(krw(option_price_add));
		$("input[name='option_price[]']").eq(idx).val(krw(order_sum));
		$("input[name='volume_send["+ idx +"]']").val(volume);//수량값전달
		return order_total_sum(order_sum, idx);
	}else{
		$("select[name='option_add1["+idx+"]'] option:eq(0)").prop("selected", true);
		jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
		return false;
	}
}

/*가격추가옵션 (2)*/
function ChangeSelect_02(value) {
	var valstr = value;
	var valarr = valstr.split("|");//구분자로 구분하여 가격만
	var valvar = valarr[2];//추가옵션금액
	var idx = valarr[0];//key

	if ($("input:checkbox[name='typeBuyeach[]']").eq(idx).is(":checked") == true){
		var option_add2=$("select[name='option_add2["+idx+"]']").val();
		var valarr2 = option_add2.split("|");//구분자로 구분하여 가격만
		var valvar2 = valarr2[2];//추가옵션금액

			//alert(valvar2);

		option_price=$("input[name='option_price_send["+idx+"]']").val();//현재행의 총금액
		volume=$("input[name='volume[]']").eq(idx).val();//현재 제품개수
		var order_sum_total_buy=$('input[name=option_pr]').eq(idx).val(); 
		var order_sum=removeComma(order_sum_total_buy)*volume;


		if(Number(removeComma(valvar2))>Number(0)){

				order_sum=(Number(removeComma(option_price))*volume)+(Number(removeComma(valvar2))*volume);
		}



		$("input[name='option_add']").eq(idx).val(krw(order_sum));
		//$("input[name='option_price[]']").eq(idx).val(krw(option_price_add));
		$("input[name='option_price[]']").eq(idx).val(krw(order_sum));
		$("input[name='volume_send["+ idx +"]']").val(volume);//수량값전달
		return order_total_sum(order_sum, idx);
	}else{
		$("select[name='option_add2["+idx+"]'] option:eq(0)").prop("selected", true);
		jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
		return false;
	}
}


	/*옵션가및 총계*/
	function order_total_sum(order_sum_cnt, idx) {

			var grpls = $("input[name='option_price[]']").length;
			//배열 생성
			var grparrs = new Array(grpls);
			//var idx = $('input:button[name=bt_up]').index(this); 
			//배열에 값 주입
			result_datas = 0.0;
			for(var i=0; i<grpls; i++){
				grparrs[i] = $("input[name='option_price[]']").eq(i).val();
				//var ckvalue_cnts = $("input[name=typeBuyeach[]]:checked").eq(i).length;
				//alert(ckvalue_cnt);

				if ($("input:checkbox[name='typeBuyeach[]']").eq(i).is(":checked") == true){
					result_datas += Number(removeComma(grparrs[i]));
				}else{

				}
			}

		var order_sum_total_buys=$('input[name=price]').val();
		var order_sum_total_buys=removeComma(order_sum_total_buys);
		order_sum_s=Number(order_sum_total_buys)+Number(result_datas);
		$('#order_sum_c_buy_op').text(krw(result_datas));
		$('#order_sum_c_buy').text(krw(order_sum_s));
		$('#order_sum_c_buy_quick').text(krw(order_sum_s));
		$('#order_sum_c_buy_op_vat').text(krw(result_datas+sal_sum(result_datas)));
		$('#order_sum_c_buy_vat').text(krw(order_sum_s+sal_sum(order_sum_s)));
		$('#order_sum_c_buy_vat_quick').text(krw(order_sum_s+sal_sum(order_sum_s)));
			
	}


$(document).ready(function(){


	/*단일상품 전용 수량변경에 따른 금액변경*/

		function prchanbuy(cnj_str){
			/*숫자만입력*/
			if( ((cnj_str >= 48) && (cnj_str <= 57)) ) return true; 
			else return false; 

			var price=$("input[name='price']").val(); //vat미포함
			var price_vat=$("input[name='price_vat']").val(); //vat포함
			var price_add=Number(removeComma(price))*Number(cnj_str.value);
			var price_vat_add=Number(removeComma(price))*Number(cnj_str.value);

			$('#order_sum_c_buy').text(krw(price_add));//총합계금액
			$('#order_sum_c_buy_vat').text(krw(price_vat_add));//총합계금액(vat포함)

		}



	$(window).scroll(function(){
		// 상세 페이지만 헤더 고정 풀기
		$('#header').removeClass('active');
		$('#wrap').removeClass('active');

		// 일정 스크롤값 이상에서 하단 총 합계 금액 보이기
		var scrolltop = $(window).scrollTop();
		if(scrolltop > 1370){
			$('.buy_intention').addClass('show');
		}
		else{
			$('.buy_intention').removeClass('show');
		}
	});

	// 상세 이미지 보기 슬라이드 작동 옵션
	$('.pd_banner').slick({
		arrows: false,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.pd_thumb',
		//vertical: true, // 세로로 슬라이드
	});

	// 상세 이미지 보기 슬라이드 썸네일 작동 옵션
	$('.pd_thumb').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.pd_banner',
		focusOnSelect: true,
		arrows: true,
		vertical: true,
		verticalSwiping: true,
		prevArrow: $('.pd_thumb_wrap .prev'),
		nextArrow: $('.pd_thumb_wrap .next'),
	});

	/*
	$('.pd_banner').on('afterChange', function(event, slick, currentSlide, nextSlide){
		  $('.slick-slide').removeClass('works');
		  $('.slick-current').addClass('works');        
   });
   */

	// 소셜 아이콘 떼굴떼굴
	$('.social-icons .social').click(function(){
		$('.social-icons a').toggleClass('active');
	});

	function sum(array) {
	  result = 0.0;

	  for (var i = 0; i < array.length; i++)
		result += Number(array[i]);

	  return Number(result);
	}

	// 개별 구매 옵션 체크박스 전체 선택
	$("#checkAll").click(function(){
		if($("#checkAll").prop("checked")){
			$("input[name='typeBuyeach[]']").prop("checked", true);
			//값초기화
			var order_sum_cl=$('#price').val();
			$('#order_sum_c_buy').text(order_sum_cl);
			$('#order_sum_c_buy_op').text(krw(0));
			//수량변경
			var grpl = $("input[name='volume[]']").length;
			//배열 생성
			var grparr = new Array(grpl);
			//배열에 값 주입
			for(var i=0; i<grpl; i++){
				grparr[i] = $("input[name='volume[]']").eq(i).val();
				$("input[name='volume[]']").eq(i).val('1');
				$("#volume_send"+i+"").val('1');
			}


			var grpls_e = $("input[name='option_price[]']").length;
			//배열 생성
			var grparrs_e = new Array(grpls_e);
			//var idx = $('input:button[name=bt_up]').index(this); 
			//배열에 값 주입
			result_datas = 0.0;
			for(var i=0; i<grpls_e; i++){
				grparrs_e[i] = $("input[name='option_price[]']").eq(i).val();
				//var ckvalue_cnts = $("input[name=typeBuyeach[]]:checked").eq(i).length;
				//alert(ckvalue_cnt);

				if ($("input:checkbox[name='typeBuyeach[]']").eq(i).is(":checked") == true){
					result_datas += Number(removeComma(grparrs_e[i]));

				}
			}

			order_sum=$('#order_sum_c_buy_op').text();
			order_sum_total=$('#order_sum_c_buy').text();
			order_sumc=removeComma(order_sum);
			order_sum_totalc=removeComma(order_sum_total);
			order_sum_op=Number(order_sumc)+Number(result_datas);
			//order_sum_op=Number(order_sum_op)/2; 간편옵션+본문개별옵션때문에 나누기2
			//alert(checkArrs);
			order_sum_op_total=Number(order_sum_op)+Number(order_sum_totalc);
			$('#order_sum_c_buy_op').text(krw(order_sum_op));
			$('#order_sum_c_buy').text(krw(order_sum_op_total));
			$('#order_sum_c_buy_quick').text(krw(order_sum_op_total));

			$('#order_sum_c_buy_op_vat').text(krw(order_sum_op+sal_sum(order_sum_op)));
			$('#order_sum_c_buy_vat').text(krw(order_sum_op_total+sal_sum(order_sum_op_total)));
			$('#order_sum_c_buy_vat_quick').text(krw(order_sum_op_total+sal_sum(order_sum_op_total)));
			//alert(order_sum_op_total);

		}else{
			//수량변경
			var grpl = $("input[name='volume[]']").length;
			//배열 생성
			var grparr = new Array(grpl);
			//배열에 값 주입
			for(var i=0; i<grpl; i++){
				grparr[i] = $("input[name='volume[]']").eq(i).val();
				$("input[name='volume[]']").eq(i).val('0');
				$("#volume_send"+i+"").val('0');
			} 

			$("input[name='typeBuyeach[]']").prop("checked", false);
			order_sum=$('#order_sum_c_buy_op').text();
			order_sum_total=$('#order_sum_c_buy').text();
			order_sumc=removeComma(order_sum);
			order_sum_totalc=removeComma(order_sum_total);
			order_sum_op=Number(order_sum_totalc)-Number(order_sumc);

			$('#order_sum_c_buy').text(krw(order_sum_op));
			$('#order_sum_c_buy_quick').text(krw(order_sum_op));
			$('#order_sum_c_buy_op').text(krw(0));
			$('#order_sum_c_buy_op_vat').text(krw(0));
			$('#order_sum_c_buy_vat').text(krw(order_sum_op+sal_sum(order_sum_op)));
			$('#order_sum_c_buy_vat_quick').text(krw(order_sum_op+sal_sum(order_sum_op)));
		}
	});



	function removeComma(n) {  // 연산시 콤마제거
	    if ( typeof n == "undefined" || n == null || n == "" ) {
		return "";
	    }
	    var txtNumber = '' + n;
	    return txtNumber.replace(/(,)/g, "");
	}


	/*옵션 체크박스선택*/
	$(document).ready(function(){
		$(".option_ck").on("click", function(){ 
			var len = $("input[name='typeBuyeach[]']:checked").length;
			var checkArr = [];
					$("input[name='typeBuyeach[]']:checked").each(function(e){
						var value = $(this).val();
						checkArr.push(value);
					})
				op_total=sum(checkArr);
				order_sum_op=Number(op_total);
				return order_top(order_sum_op, len);

		});
	});
	/*옵션 체크박스선택2*/
	function order_top(order_sum_op, len) {

			order_sum_ops=$('#order_sum_c_buy_op').text();
			order_sum_ops=removeComma(order_sum_ops);
			order_sum=$('#order_sum_c_buy').text();
			order_sumc=removeComma(order_sum);
			order_sum_s=Number(order_sumc)+Number(order_sum_op);
			
	}


	/*옵션 체크박스선택[간편옵션]*/
	$(document).ready(function(){
		$(".option_ck_quick").on("click", function(){ 
			var len = $("input[name='typeBuyeach_quick[]']:checked").length;
			var checkArr = [];
					$("input[name='typeBuyeach_quick[]']:checked").each(function(e){
						var value = $(this).val();
						checkArr.push(value);
					})
				op_total=sum(checkArr);
				order_sum_op=Number(op_total);
				return order_top_quick(order_sum_op, len);

		});
	});
	/*옵션 체크박스선택2[간편옵션] */
	function order_top_quick(order_sum_op, len) {

			order_sum_ops=$('#order_sum_c_buy_op').text();
			order_sum_ops=removeComma(order_sum_ops);
			order_sum=$('#order_sum_c_buy_quick').text();
			order_sumc=removeComma(order_sum);
			order_sum_s=Number(order_sumc)+Number(order_sum_op);
			
	}




	//================================================
	// 문자열을 부동 소수점 숫자로 변환 및 천단위 콤마
	//================================================
	function strTofloat(str_data, t_point){

		if(t_point == ""){
			t_point = 1;
		}
	    var data1 = parseFloat(str_data);
	    var data2 = data1.toFixed(t_point);
	    var data3 = inputNumberWithComma(data2);

	    return data3;
	}

	function inputNumberWithComma(str) {
		str = String(str);
		return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
	}

	function inputNumberRemoveComma(str) {
		str = String(str);
		return str.replace(/[^\d]+/g, "");
	}

	/*지역콤마로변환*/
	function krw(data_value) {
		return Number(data_value).toLocaleString('en').split(".")[0];
	}

	// 수량 변경
	$('input[count_range]').click(function(){

		var type = $(this).attr('count_range');
		var order_sum_c_buy = $("#order_sum_c_buy").text();
		var order_sum_c_buy=removeComma(order_sum_c_buy);
		//var order_sum_c_buy=$('input[name=volume]').val();
		//console.log(type);
		var $count = $(this).siblings('input[type="text"]');

		var count_val = $count.val();
		if(type=='s'){//dw
			if(count_val>1){//1이하는 dw불가
				//index
				var idx = $('input:button[name=bt_dw]').index(this); 
				if ($("input:checkbox[name='typeBuyeach[]']").eq(idx).is(":checked") == true){
				}else{
					jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
					return false;
				}
				/*
				var ckvalue_cnt = $("input[name=typeBuyeach[]]:checked").eq(idx).length;
				if(ckvalue_cnt == 0){
					alert('옵션을 체크후 이용하실 수 있습니다.');
					return false;
				}
				*/
				var order_sum_total_buy=$('input[name=option_pr]').eq(idx).val();
				var order_sum_total_buy=removeComma(order_sum_total_buy);

				if(count_val<1){
					return;
				}
				$count.val(parseInt(count_val)-1);
				sell_volume_buy=Number(count_val) - Number(1);
				var order_sum=order_sum_total_buy*sell_volume_buy;
				//$('#order_sum_c_buy_op').text(krw(order_sum));
				var option_add_use=$('input[name=option_add_use]').eq(idx).val();//가격추가옵션있는지체크
				if (option_add_use == 'Y'){//가격추가옵션있는지체크
						var option_add1=$("select[name='option_add1["+idx+"]']").val();
						var option_add2=$("select[name='option_add2["+idx+"]']").val();
						if(option_add1){
							var valarr1 = option_add1.split("|");//구분자로 구분하여 가격만
							var valvar1 = valarr1[2];//추가옵션금액
						}
						if(option_add2){
							var valarr2 = option_add2.split("|");//구분자로 구분하여 가격만
							var valvar2 = valarr2[2];//추가옵션금액
						}
						/*
						if(Number(removeComma(valvar1))>Number(0)){
							order_sum=Number(order_sum)+(Number(removeComma(valvar1))*sell_volume_buy);
						}
						if(Number(valvar2)>0){ 
							order_sum=Number(order_sum)+(Number(removeComma(valvar2))*sell_volume_buy);
						}
						*/

						if(Number(removeComma(valvar2))>Number(0) && Number(removeComma(valvar1))>Number(0)){ 
								order_sum=Number(order_sum)+((Number(removeComma(valvar2))+Number(removeComma(valvar1)))*sell_volume_buy);
						}else if(Number(removeComma(valvar2))>Number(0)){

								order_sum=Number(order_sum)+(Number(removeComma(valvar2))*sell_volume_buy);

						}else if(Number(removeComma(valvar1))>Number(0)){

								order_sum=Number(order_sum)+(Number(removeComma(valvar1))*sell_volume_buy);

						}
				}

				$("input[name='option_price[]']").eq(idx).val(krw(order_sum));
				$("input[name='volume_send["+ idx +"]']").val(sell_volume_buy);//수량값전달
				return order_total_sum(order_sum, idx, sell_volume_buy);
			}
		}else if(type=='a'){//up
				//index
				var idx = $('input:button[name=bt_up]').index(this); 
					if ($("input:checkbox[name='typeBuyeach[]']").eq(idx).is(":checked") == true){
					}else{
						jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
						return false;
					}
				//var ckvalue_cnt = $("input[name=typeBuyeach[]]:checked").eq(idx).length;

				var order_sum_total_buy = $("#order_sum_total_buy").val();
				var order_sum_total_buy=removeComma(order_sum_total_buy);


				var order_sum_total_buy=$('input[name=option_pr]').eq(idx).val();
				var order_sum_total_buy=removeComma(order_sum_total_buy);
				//alert(order_sum_total_buy);
				$count.val(parseInt(count_val)+1);

				var sell_volume_buy=$("input[name='volume[]']").eq(idx).val();
				var order_sum=order_sum_total_buy*sell_volume_buy;

				var option_add_use=$('input[name=option_add_use]').eq(idx).val();//가격추가옵션있는지체크
				if (option_add_use == 'Y'){//가격추가옵션있는지체크

				option_amt=$("input[name='option_amt[]']").eq(idx).val();//옵션별 구매가능수량
				if(Number(sell_volume_buy)>Number(option_amt)){
					$("input[name='volume[]']").eq(idx).val(count_val); 
					jAlert('구매 가능한 재고수량을 초과하였습니다.', 'BUILDMANIA');
					return false;
				}

						var option_add1=$("select[name='option_add1["+idx+"]']").val();
						var option_add2=$("select[name='option_add2["+idx+"]']").val();
						if(option_add1){
							var valarr1 = option_add1.split("|");//구분자로 구분하여 가격만
							var valvar1 = valarr1[2];//추가옵션금액
						}
						if(option_add2){
							var valarr2 = option_add2.split("|");//구분자로 구분하여 가격만
							var valvar2 = valarr2[2];//추가옵션금액
						}

						if(Number(removeComma(valvar2))>Number(0) && Number(removeComma(valvar1))>Number(0)){ 
								order_sum=Number(order_sum)+((Number(removeComma(valvar2))+Number(removeComma(valvar1)))*sell_volume_buy);
						}else if(Number(removeComma(valvar2))>Number(0)){

								order_sum=Number(order_sum)+(Number(removeComma(valvar2))*sell_volume_buy);

						}else if(Number(removeComma(valvar1))>Number(0)){

								order_sum=Number(order_sum)+(Number(removeComma(valvar1))*sell_volume_buy);

						}
				}
				$("input[name='option_price[]']").eq(idx).val(krw(order_sum));
				$("input[name='volume_send["+ idx +"]']").val(sell_volume_buy);//수량값전달
				return order_total_sum(order_sum, idx, sell_volume_buy);
		}
	});



	// 수량 변경(간편옵션)
	$('input[count_range_quick]').click(function(){

		var type = $(this).attr('count_range_quick');
		var order_sum_c_buy = $("#order_sum_c_buy").text();
		var order_sum_c_buy=removeComma(order_sum_c_buy);
		//var order_sum_c_buy=$('input[name=volume]').val();
		//console.log(type);
		var $count = $(this).siblings('input[type="text"]');

		var count_val = $count.val();
		if(type=='s'){//dw
			if(count_val>1){//1이하는 dw불가
				//index
				var idx = $('input:button[name=bt_dw_quick]').index(this); 
				if ($("input:checkbox[name='typeBuyeach_quick[]']").eq(idx).is(":checked") == true){
				}else{
					jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
					return false;
				}
				/*
				var ckvalue_cnt = $("input[name=typeBuyeach[]]:checked").eq(idx).length;
				if(ckvalue_cnt == 0){
					alert('옵션을 체크후 이용하실 수 있습니다.');
					return false;
				}
				*/

				var order_sum_total_buy=$('input[name=option_pr_quick]').eq(idx).val();
				var order_sum_total_buy=removeComma(order_sum_total_buy);

				if(count_val<1){
					return;
				}
				$count.val(parseInt(count_val)-1);
				sell_volume_buy=Number(count_val) - Number(1);
				var order_sum=order_sum_total_buy*sell_volume_buy;
				//$('#order_sum_c_buy_op').text(krw(order_sum));
				$("input[name='option_price_quick[]']").eq(idx).val(krw(order_sum));
				$("input[name='volume_send_quick["+ idx +"]']").val(sell_volume_buy);//수량값전달
				return order_total_sum_quick(order_sum, idx, sell_volume_buy);
			}
		}else if(type=='a'){//up
				//index
				var idx = $('input:button[name=bt_up_quick]').index(this); 
					if ($("input:checkbox[name='typeBuyeach_quick[]']").eq(idx).is(":checked") == true){
					}else{
						jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
						return false;
					}
				//var ckvalue_cnt = $("input[name=typeBuyeach[]]:checked").eq(idx).length;

				var order_sum_total_buy = $("#order_sum_total_buy").val();
				var order_sum_total_buy=removeComma(order_sum_total_buy);


				var order_sum_total_buy=$('input[name=option_pr_quick]').eq(idx).val();
				var order_sum_total_buy=removeComma(order_sum_total_buy);
				//alert(order_sum_total_buy);
				$count.val(parseInt(count_val)+1);

				var sell_volume_buy=$("input[name='volume_quick[]']").eq(idx).val();
				var order_sum=order_sum_total_buy*sell_volume_buy;

				option_amt=$("input[name='option_amt_quick[]']").eq(idx).val();//옵션별 구매가능수량
				if(Number(sell_volume_buy)>Number(option_amt)){
					$("input[name='volume_quick[]']").eq(idx).val(count_val); 
					jAlert('구매 가능한 재고수량을 초과하였습니다.', 'BUILDMANIA');
					return false;
				}

				$("input[name='option_price_quick[]']").eq(idx).val(krw(order_sum));
				$("input[name='volume_send_quick["+ idx +"]']").val(sell_volume_buy);//수량값전달
				return order_total_sum_quick(order_sum, idx, sell_volume_buy);
		}
	});
	/*옵션가및 총계*/
	function order_total_sum_quick(order_sum_cnt, idx) {

			var grpls = $("input[name='option_price_quick[]']").length;
			//배열 생성
			var grparrs = new Array(grpls);
			//var idx = $('input:button[name=bt_up]').index(this); 
			//배열에 값 주입
			result_datas = 0.0;
			for(var i=0; i<grpls; i++){
				grparrs[i] = $("input[name='option_price_quick[]']").eq(i).val();
				//var ckvalue_cnts = $("input[name=typeBuyeach[]]:checked").eq(i).length;
				//alert(ckvalue_cnt);

				if ($("input:checkbox[name='typeBuyeach_quick[]']").eq(i).is(":checked") == true){
					result_datas += Number(removeComma(grparrs[i]));
				}else{

				}
			}

		var order_sum_total_buys=$('input[name=price]').val();
		var order_sum_total_buys=removeComma(order_sum_total_buys);
		order_sum_s=Number(order_sum_total_buys)+Number(result_datas);
		$('#order_sum_c_buy_op').text(krw(result_datas));
		$('#order_sum_c_buy_op_quick').text(krw(result_datas));
		$('#order_sum_c_buy').text(krw(order_sum_s));
		$('#order_sum_c_buy_quick').text(krw(order_sum_s));
		$('#order_sum_c_buy_op_vat').text(krw(result_datas+sal_sum(result_datas)));
		$('#order_sum_c_buy_op_vat_quick').text(krw(result_datas+sal_sum(result_datas)));
		$('#order_sum_c_buy_vat').text(krw(order_sum_s+sal_sum(order_sum_s)));
		$('#order_sum_c_buy_vat_quick').text(krw(order_sum_s+sal_sum(order_sum_s)));
			
	}



	/*옵션체크3*/
    $(".option_ck").change(function(){

		/*index*/
		var idx = $("input:checkbox[name='typeBuyeach[]']").index(this); 
		if ($("input:checkbox[name='typeBuyeach[]']").eq(idx).is(":checked") == true){

			var sell_volume_buy=$("input[name='volume[]']").eq(idx).val();
			var grpl = $("input[name='option_price[]']").length;
			//배열 생성
			var grparr = new Array(grpl);
			//var idx = $('input:button[name=bt_up]').index(this); 
			//배열에 값 주입
			result_data = 0.0;
			for(var i=0; i<grpl; i++){
				grparr[i] = $("input[name='option_price[]']").eq(i).val();
				if ($("input:checkbox[name='typeBuyeach[]']").eq(i).is(":checked") == true){
					result_data += Number(removeComma( grparr[i]));
				}else{
				}
			}

			order_sum=$('#price').val();
			//alert(order_sum);
			order_sum_op=$('#order_sum_c_buy_op').text();

			order_sum_top=removeComma(order_sum);
			order_sum_optop=removeComma(order_sum_op);
			order_buy_total=Number(order_sum_top) + Number(result_data);
			//alert(order_buy_total);
			//수량변경
			$("input[name='volume[]']").eq(idx).val('1');
			$("#volume_send"+idx+"").val('1');
			$('#order_sum_c_buy').text(krw(order_buy_total));
			$('#order_sum_c_buy_quick').text(krw(order_buy_total));
			$('#order_sum_c_buy_op').text(krw(result_data));
			$('#order_sum_c_buy_op_vat').text(krw(result_data+sal_sum(result_data)));
			$('#order_sum_c_buy_vat').text(krw(order_buy_total+sal_sum(order_buy_total)));
			$('#order_sum_c_buy_vat_quick').text(krw(order_buy_total+sal_sum(order_buy_total)));
		}else{//마지막에 금액 -
		/*index*/
		var idx = $("input:checkbox[name='typeBuyeach[]']").index(this); 
			order_sums=$("input[name='option_price[]']").eq(idx).val();
			option_price_send=$("input[name='option_price_send["+idx+"]']").val();
			order_sum_total=$('#order_sum_c_buy').text();
			order_sum_total_op=$('#order_sum_c_buy_op').text();
			order_sum_total_vat=$('#order_sum_c_buy_vat').text();
			order_sum_total_vat_op=$('#order_sum_c_buy_op_vat').text();
			order_sumcs=removeComma(order_sums);
			order_sum_totalc=removeComma(order_sum_total);
			order_sum_totalc_op=removeComma(order_sum_total_op);
			order_sum_totalc_vat=removeComma(order_sum_total_vat);
			order_sum_totalc_vat_op=removeComma(order_sum_total_vat_op);
			order_sum_op=Number(order_sum_totalc)-Number(order_sumcs);
			order_sum_op_op=Number(order_sum_totalc_op)-Number(order_sumcs);

			order_sumcs_vat=Number(order_sumcs)+Number(sal_sum(order_sumcs));
			order_sum_op_vat=Number(order_sum_totalc_vat)-Number(order_sumcs_vat);
			order_sum_op_vat_op=Number(order_sum_totalc_vat_op)-Number(order_sumcs_vat);

			//수량변경
			$("input[name='volume[]']").eq(idx).val('0');

			$("#order_sum_c_buy_op").text(krw(order_sum_op_op));//마지막금액 0
			$("#order_sum_c_buy_op_vat").text(krw(order_sum_op_vat_op));//마지막금액 0vat
			$("#volume_send"+idx+"").val('0');
			$('#order_sum_c_buy').text(krw(order_sum_op));
			$('#order_sum_c_buy_quick').text(krw(order_sum_op));
			$('#order_sum_c_buy_vat').text(krw(order_sum_op_vat));
			$('#order_sum_c_buy_vat_quick').text(krw(order_sum_op_vat));
			$("input[name='option_price[]']").eq(idx).val(option_price_send ); 

		}
	});


	/*간편주문*/
    $(".option_ck_quick").change(function(){

		/*index*/
		var idx = $("input:checkbox[name='typeBuyeach_quick[]']").index(this); 
		if ($("input:checkbox[name='typeBuyeach_quick[]']").eq(idx).is(":checked") == true){

			var sell_volume_buy=$("input[name='volume_quick[]']").eq(idx).val();
			var grpl = $("input[name='option_price_quick[]']").length;
			//배열 생성
			var grparr = new Array(grpl);
			//var idx = $('input:button[name=bt_up]').index(this); 
			//배열에 값 주입
			result_data = 0.0;
			for(var i=0; i<grpl; i++){
				grparr[i] = $("input[name='option_price_quick[]']").eq(i).val();
				if ($("input:checkbox[name='typeBuyeach_quick[]']").eq(i).is(":checked") == true){
					result_data += Number(removeComma( grparr[i]));
				}else{
				}
			}

			order_sum=$('#price').val();
			//alert(order_sum);
			order_sum_op=$('#order_sum_c_buy_op').text();

			order_sum_top=removeComma(order_sum);
			order_sum_optop=removeComma(order_sum_op);
			order_buy_total=Number(order_sum_top) + Number(result_data);
			//alert(order_buy_total);
			//수량변경
			$("input[name='volume_quick[]']").eq(idx).val('1');
			$("#volume_send_quick"+idx+"").val('1');
			$('#order_sum_c_buy').text(krw(order_buy_total));
			$('#order_sum_c_buy_quick').text(krw(order_buy_total));
			$('#order_sum_c_buy_op').text(krw(result_data));
			$('#order_sum_c_buy_op_quick').text(krw(result_data));
			$('#order_sum_c_buy_op_vat').text(krw(result_data+sal_sum(result_data)));
			$('#order_sum_c_buy_op_vat_quick').text(krw(result_data+sal_sum(result_data)));
			$('#order_sum_c_buy_vat').text(krw(order_buy_total+sal_sum(order_buy_total)));
			$('#order_sum_c_buy_vat_quick').text(krw(order_buy_total+sal_sum(order_buy_total)));
		}else{//마지막에 금액 -
			//alert('test');
		/*index*/
		var idx = $("input:checkbox[name='typeBuyeach_quick[]']").index(this); 
			order_sums=$("input[name='option_price_quick[]']").eq(idx).val();
			option_price_send=$("input[name='option_price_send["+idx+"]']").val();
			order_sum_total=$('#order_sum_c_buy_quick').text();
			order_sum_total_op=$('#order_sum_c_buy_op').text();
			order_sum_total_vat=$('#order_sum_c_buy_vat_quick').text();
			order_sum_total_vat_op=$('#order_sum_c_buy_op_vat').text();
			order_sumcs=removeComma(order_sums);
			order_sum_totalc=removeComma(order_sum_total);
			order_sum_totalc_op=removeComma(order_sum_total_op);
			order_sum_totalc_vat=removeComma(order_sum_total_vat);
			order_sum_totalc_vat_op=removeComma(order_sum_total_vat_op);
			order_sum_op=Number(order_sum_totalc)-Number(order_sumcs);
			order_sum_op_op=Number(order_sum_totalc_op)-Number(order_sumcs);

			order_sumcs_vat=Number(order_sumcs)+Number(sal_sum(order_sumcs));
			order_sum_op_vat=Number(order_sum_totalc_vat)-Number(order_sumcs_vat);
			order_sum_op_vat_op=Number(order_sum_totalc_vat_op)-Number(order_sumcs_vat);

			//수량변경
			$("input[name='volume_quick[]']").eq(idx).val('0');

			$("#order_sum_c_buy_op").text(krw(order_sum_op_op));//마지막금액 0
			$("#order_sum_c_buy_op_quick").text(krw(order_sum_op_op));//마지막금액 0
			$("#order_sum_c_buy_op_vat").text(krw(order_sum_op_vat_op));//마지막금액 0vat
			$("#order_sum_c_buy_op_vat_quick").text(krw(order_sum_op_vat_op));//마지막금액 0vat
			$("#volume_send_quick"+idx+"").val('0');
			$('#order_sum_c_buy').text(krw(order_sum_op));
			$('#order_sum_c_buy_quick').text(krw(order_sum_op));
			$('#order_sum_c_buy_vat').text(krw(order_sum_op_vat));
			$('#order_sum_c_buy_vat_quick').text(krw(order_sum_op_vat));
			$("input[name='option_price_quick[]']").eq(idx).val(option_price_send ); 

		}
	});




	// 관련 상품 배너 작동 옵션
	var owl7 = $('.rel_products_banner');
	owl7.owlCarousel({
		items: 5,
		autoplay: false,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		autoplayHoverPause: false,
		loop: false,
		nav: false,
		//navText: ["",""],
		dots: false,
		margin: 32,
	});

	// 관련 상품 prev 버튼
	$('.rel_products .prev').click(function() {
		owl7.trigger('prev.owl.carousel');
	});

	// 관련 상품 next 버튼
	$('.rel_products .next').click(function() {
		owl7.trigger('next.owl.carousel');
	});

	// 도큐먼트 클릭시 커스텀 셀렉터 박스 닫기
	$('body').click(function(e){
		if($('.select-box').has(e.target).length === 0){
			$('.option').removeClass('active');
			$('.select-box-value').removeClass('active');
		}
	});

	// 셀렉트 박스 열기
	$('.select-box-value').click(function(){
		$('.option').not($(this).next('.option')).removeClass('active');
		$(this).next('.option').toggleClass('active');	
		$(this).toggleClass('active');
		$('.select-box-value').not($(this)).removeClass('active');
	});

	// 옵션 클릭시 텍스트 넘기기
	$('.option li').click(function(){
		var value = $(this).text();
		$(this).parent().prev().children('span').text(value);
		$('.option').removeClass('active');
		$('.select-box-value').removeClass('active');
	});

	// 상품 정보 탭메뉴
	$('.product_info_tab > div:not(:first)').hide();
	$('.product_info_menu a').click(function(){
		$('.product_info_menu a').removeClass('active');
		$(this).addClass('active');
		$('.product_info_tab > div').hide();
		$($(this).attr('href')).show();
		return false;
	});
				
	// 상품 Q&A  토글 버튼
	$('.gridQ .title').click(function(){
		$(this).closest('.gridQ').next('.gridA').toggle();
	});

	// 문의하기 팝업
	$('.btnQ_wrap .btnQ').click(function(){
		$('#modal, .popQuestion').show();
	});
	$('.popQuestion_close, .popQuestion , .popQuestion .cxl').click(function(){
		$('#modal, .popQuestion,  #cutting-wrap').hide();
		return false;
	});

	// 게시판 답변하기 팝업
	$('.btnA').click(function(){
		var idx = $(this).attr('getkey'); //키
		var table=$("input[name='table']").val();//게시판
		mode=$("input[name='mode']").val();//리스트페이지
		$.ajax({
			type : "GET",
			url : "/shop/?mode=service_center_ajax&qnadata=true&w_id="+idx+"&table="+table+"&listmode="+mode,
			//data : formData,
			datatype : "html",
			beforeSend:function(){
				$(".wrap-loading").fadeIn();	
			},
			success: function(html) {
				$("#qnacoment").html(html);  
				$('#modal, .popA').show();
				_log("[Ajax SUCCESS]");
				//alert(data);
			},
			complete:function(){
				$(".wrap-loading").fadeOut();
			},
			error: function(result, o, e) {
				_log("[Ajax ERROR]");
			}
		});
	});


	// 문의하기 글자 수 카운팅
	$('.textQ').keyup(function (e){
		var content = $(this).val();
		$('.charCount').html("("+content.length+" / 2,000)"); 

		if (content.length > 2000){
			alert("최대 2,000자까지 입력 가능합니다.");
			$(this).val(content.substring(0, 2000));
			$('.charCount').html("(2,000 / 2,000)");
		}
	});

	// 하단 총 합계 금액 토글 버튼
	$('.buy_intention .toggleBtn').click(function(){
		$('.buy_intention .toggleBtn, .buy_intention').toggleClass('active');
			/*********기존 옵션내용 초기화********/
			//수량변경
			var grpl = $("input[name='volume[]']").length;
			//배열 생성
			var grparr = new Array(grpl);
			//배열에 값 주입
			for(var i=0; i<grpl; i++){
				grparr[i] = $("input[name='volume[]']").eq(i).val();
				$("input[name='volume[]']").eq(i).val('0');

				$("#volume_send"+i+"").val('0');
			} 
			$("input[name='typeBuyeach[]']").prop("checked", false);
			$("input[name='checkbox_option']").prop("checked", false);
			order_sum=$('#order_sum_c_buy_op').text();
			order_sum_total=$('#order_sum_c_buy').text();
			order_sumc=removeComma(order_sum);
			order_sum_totalc=removeComma(order_sum_total);
			order_sum_op=Number(order_sum_totalc)-Number(order_sumc);

			$('#order_sum_c_buy').text(krw(order_sum_op));
			$('#order_sum_c_buy_quick').text(krw(order_sum_op));
			$('#order_sum_c_buy_op').text(krw(0));
			$('#order_sum_c_buy_op_vat').text(krw(0));
			$('#order_sum_c_buy_vat').text(krw(order_sum_op+sal_sum(order_sum_op)));
			$('#order_sum_c_buy_vat_quick').text(krw(order_sum_op+sal_sum(order_sum_op)));

		if($(this).hasClass('active')){
			$(this).children('span').html('닫기');
		}
		else{
			$(this).children('span').html('간편 옵션');
		}
	});


	$('.cut-confirm .cxl').click(function(){
		$('#modal').hide();
		$('#cutting-wrap').removeClass('active');
	});
});

//------------------------------------------
// checkbox Config
//------------------------------------------
function check_all(f)
{
    var check = document.getElementsByName("check[]");

    for (i=0; i<check.length; i++)
        check[i].checked = f.chkall.checked;
}

function btn_check(f, act)
{
    if (act == "update") // 선택수정
    {
        f.action = "./class/?update=member_list";
        str = "수정";
    }
    else if (act == "delete") // 선택삭제
    {
        f.action = "./class/?update=member_list";
        str = "삭제";
    }
    else
        return;

    var check = document.getElementsByName("check[]");
    var bcheck = false;

    for (i=0; i<check.length; i++)
    {
        if (check[i].checked)
            bcheck = true;
    }

    if (!bcheck)
    {
        alert(str + "할 자료를 하나 이상 선택하세요.");
        return;
    }

    if (act == "delete")
    {
        if (!confirm("선택한 자료를 정말 삭제 하시겠습니까?"))
            return;
    }

    f.submit();
}

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

function delete_confirm()
{
    if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?"))
        return true;
    else
        return false;
}

function delete_confirm2(msg)
{
    if(confirm(msg))
        return true;
    else
        return false;
}



	//------------------------------------------
	// 바로구매
	//------------------------------------------
	$(".buy_now").on('click', function(){			

	//	if(!loginCheckd()){ return false; }
					/*
					if($("#order_sum_total_buy").val() == ""){
						jAlert("주문옵션을 설정해주세요.", '', function(r) {
							if(r) $("#order_sum_total_buy").focus();
						});
						return false;
					}
					*/


					var len_cnt = $("input[name='typeBuyeach[]").length;
					var len = $("input[name='typeBuyeach[]']:checked").length;
					if(Number(len_cnt)>Number(0)){
						if(len>Number(0)){
						}else{
							jAlert('옵션을 최소 1개이상 선택하셔야 합니다.',''); return false;
						}
					}


					jConfirm("바로구매 하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(r) {
						if(r){
							var formData = $("#product_order").serialize();
							var p_Url=$("#p_no").val();

							$.ajax({
								type : "POST",
								url : "/shop/?up=order&order_type=CARTANDORDER&num="+ p_Url,
								data : formData,
								datatype : "html",
								beforeSend:function(){
									$(".wrap-loading").fadeIn();	
								},
								success: function(data) {
									_log("[Ajax SUCCESS]");
									//jAlert('정상적으로 등록 하였습니다.', 'BUILDMANIA');

									jConfirm("주문 페이지로 이동합니다.", "BUILDMANIA", "OK", "CANCEL", function(getcart) {
										if(getcart){
											location.href = '/shop/?mode=order';
										}
									});

								},
								complete:function(){
									$(".wrap-loading").fadeOut();
								},
								error: function(result, o, e) {
									_log("[Ajax ERROR]");
								}
							});
						}else{ 
							return;
						}
						return relation_submit(this);
					});

				return;


	});


	//------------------------------------------
	// 바로구매
	//------------------------------------------
	$(".buy_now_quick").on('click', function(){			

	//	if(!loginCheckd()){ return false; }
					/*
					if($("#order_sum_total_buy").val() == ""){
						jAlert("주문옵션을 설정해주세요.", '', function(r) {
							if(r) $("#order_sum_total_buy").focus();
						});
						return false;
					}
					*/

					var len_cnt = $("input[name='typeBuyeach_quick[]").length;
					var len = $("input[name='typeBuyeach_quick[]']:checked").length;
					if(Number(len_cnt)>Number(0)){
						if(len>Number(0)){
						}else{
							jAlert('옵션을 최소 1개이상 선택하셔야 합니다.',''); return false;
						}
					}

					jConfirm("바로구매 하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(r) {
						if(r){
							var formData = $("#quick_order").serialize();
							var p_Url=$("#p_no").val();

							$.ajax({
								type : "POST",
								url : "/shop/?up=order&order_type=CARTANDORDER&quick=Y&num="+ p_Url,
								data : formData,
								datatype : "html",
								beforeSend:function(){
									$(".wrap-loading").fadeIn();	
								},
								success: function(data) {
									_log("[Ajax SUCCESS]");
									//jAlert('정상적으로 등록 하였습니다.', 'BUILDMANIA');

									jConfirm("주문 페이지로 이동합니다.", "BUILDMANIA", "OK", "CANCEL", function(getcart) {
										if(getcart){
											location.href = '/shop/?mode=order';
										}
									});

								},
								complete:function(){
									$(".wrap-loading").fadeOut();
								},
								error: function(result, o, e) {
									_log("[Ajax ERROR]");
								}
							});
						}else{ 
							return;
						}
						return relation_submit(this);
					});

				return;


	});



	//------------------------------------------
	// 관심상품
	//------------------------------------------
	$(".wish_list").on('click', function(){			

		if(!loginCheckd()){ return false; }
					/*
					if($("#order_sum_total_buy").val() == ""){
						jAlert("주문옵션을 설정해주세요.", '', function(r) {
							if(r) $("#order_sum_total_buy").focus();
						});
						return false;
					}
					*/

					var len_cnt = $("input[name='typeBuyeach[]").length;
					var len = $("input[name='typeBuyeach[]']:checked").length;
					if(Number(len_cnt)>Number(0)){
						if(len>Number(0)){
						}else{
							jAlert('옵션을 최소 1개이상 선택하셔야 합니다.',''); return false;
						}
					}

					jConfirm("관심 상품으로 저장하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(r) {
						if(r){
							var formData = $("#product_order").serialize();
							var p_Url=$("#p_no").val();

							$.ajax({
								type : "POST",
								url : "/shop/?up=mypage_interest&num="+ p_Url,
								data : formData,
								datatype : "html",
								beforeSend:function(){
									$(".wrap-loading").fadeIn();	
								},
								success: function(data) {
									_log("[Ajax SUCCESS]");
									//jAlert('정상적으로 등록 하였습니다.', 'BUILDMANIA');
									jConfirm("정상적으로 저장 하였습니다. </br>관심 상품으로 이동하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(getwish) {
										if(getwish){
											location.href = '/shop/?mode=mypage_interest';
										}
									});

								},
								complete:function(){
									$(".wrap-loading").fadeOut();
								},
								error: function(result, o, e) {
									_log("[Ajax ERROR]");
								}
							});
						}else{ 
							return;
						}
					});

				return;

			});

	//------------------------------------------
	// 장바구니
	//------------------------------------------
	$(".cart").on('click', function(){			

	//	if(!loginCheckd()){ return false; }
		var cartcnt=$("input[name='cartcnt']").val();//주문건 카운트
		var len_cnt = $("input[name='typeBuyeach[]").length;
		var len = $("input[name='typeBuyeach[]']:checked").length;
		if(Number(len_cnt)>Number(0)){
			if(len>Number(0)){
			}else{
				jAlert('옵션을 최소 1개이상 선택하셔야 합니다.',''); return false;
			}
		}
		
					/*
					if($("#order_sum_total_buy").val() == ""){
						jAlert("주문옵션을 설정해주세요.", '', function(r) {
							if(r) $("#order_sum_total_buy").focus();
						});
						return false;
					}
					*/
					/*
					if(Number(cartcnt)>Number(0)){
							jConfirm("이미 동일한 상품이 장바구니에. </br>존재합니다. 추가구매 하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(getcartcnt) {
								if(getcartcnt){
									return;
								}else{
									location.href = '/shop/?mode=cart';
									return false;
								}
							});
					}
					*/
			if(Number(cartcnt)>Number(0)){
					jConfirm("이미 동일한 상품이 장바구니에. </br>존재합니다. 추가구매 하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(r) {
						if(r){
							var formData = $("#product_order").serialize();
							var p_Url=$("#p_no").val();

							$.ajax({
								type : "POST",
								url : "/shop/?up=cart&cartmode=prototype&num="+ p_Url,
								data : formData,
								datatype : "html",
								beforeSend:function(){
									$(".wrap-loading").fadeIn();	
								},
								success: function(data) {
									_log("[Ajax SUCCESS]");
									//jAlert('정상적으로 등록 하였습니다.', 'BUILDMANIA');

									jConfirm("정상적으로 저장 하였습니다. </br>장바구니로 이동하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(getcart) {
										if(getcart){
											location.href = '/shop/?mode=cart';
										}
									});

								},
								complete:function(){
									$(".wrap-loading").fadeOut();
								},
								error: function(result, o, e) {
									_log("[Ajax ERROR]");
								}
							});
						}else{ 
							location.href = '/shop/?mode=cart';
							return;
						}
						return relation_submit(this);
					});
			}else{
					jConfirm("장바구니에 담으시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(r) {
						if(r){
							var formData = $("#product_order").serialize();
							var p_Url=$("#p_no").val();

							$.ajax({
								type : "POST",
								url : "/shop/?up=cart&num="+ p_Url,
								data : formData,
								datatype : "html",
								beforeSend:function(){
									$(".wrap-loading").fadeIn();	
								},
								success: function(data) {
									_log("[Ajax SUCCESS]");
									//jAlert('정상적으로 등록 하였습니다.', 'BUILDMANIA');

									jConfirm("정상적으로 저장 하였습니다. </br>장바구니로 이동하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(getcart) {
										if(getcart){
											location.href = '/shop/?mode=cart';
										}
									});

								},
								complete:function(){
									$(".wrap-loading").fadeOut();
								},
								error: function(result, o, e) {
									_log("[Ajax ERROR]");
								}
							});
						}else{ 
							return;
						}
						return relation_submit(this);
					});

			}

				return;

			});


	//------------------------------------------
	// 장바구니(간편주문)
	//------------------------------------------
	$(".cart_quick").on('click', function(){			

	//	if(!loginCheckd()){ return false; }
					/*
					if($("#order_sum_total_buy").val() == ""){
						jAlert("주문옵션을 설정해주세요.", '', function(r) {
							if(r) $("#order_sum_total_buy").focus();
						});
						return false;
					}
					*/

					var len_cnt = $("input[name='typeBuyeach_quick[]").length;
					var len = $("input[name='typeBuyeach_quick[]']:checked").length;
					if(Number(len_cnt)>Number(0)){
						if(len>Number(0)){
						}else{
							jAlert('옵션을 최소 1개이상 선택하셔야 합니다.',''); return false;
						}
					}


					jConfirm("장바구니에 담으시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(r) {
						if(r){
							var formData = $("#quick_order").serialize();
							var p_Url=$("#p_no").val();

							$.ajax({
								type : "POST",
								url : "/shop/?up=cart&quick=Y&num="+ p_Url,
								data : formData,
								datatype : "html",
								beforeSend:function(){
									$(".wrap-loading").fadeIn();	
								},
								success: function(data) {
									_log("[Ajax SUCCESS]");
									//jAlert('정상적으로 등록 하였습니다.', 'BUILDMANIA');

									jConfirm("정상적으로 저장 하였습니다. </br>장바구니로 이동하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(getcart) {
										if(getcart){
											location.href = '/shop/?mode=cart';
										}
									});

								},
								complete:function(){
									$(".wrap-loading").fadeOut();
								},
								error: function(result, o, e) {
									_log("[Ajax ERROR]");
								}
							});


						}else{ 
							return;
						}
						return relation_submit(this);
					});

				return;

			});


	//------------------------------------------
	// 1:1문의 Q&A 질문하기
	//------------------------------------------
	$(".confirm").on('click', function(){			

		if(!loginCheckd()){ return false; }

					var f = document.qna_send;
					var table=$('input[name=table]').val();
					if(table=='qna'){
						if ($("input[name='typeQuestion']").is(":checked") == false){
							jAlert("문의유형을 선택해 주세요.", '', function(r) {
								if(r) $("input[name='typeQuestion']").focus();
								$('#modal, .popQ').show(); 
							});
							return false;
						}
					}
					if(!f.w_subject.value){ jAlert('제목을 입력해주세요.', 'BUILDMANIA'); $('#modal, .popQ').show(); f.w_subject.focus();return false;}
					if(!f.w_content.value){ jAlert('내용을 입력해주세요.', 'BUILDMANIA'); $('#modal, .popQ').show(); f.w_content.focus();return false;}

					jConfirm("문의를 접수 하시겠습니까?", "BUILDMANIA", "OK", "CANCEL", function(r) {
						if(r){
							f.method = 'post';
							f.action = '/shop/?up=mypage_qa';
							f.submit();
						}else{ 
							return;
						}
					});

			return;

	});

	/*재단*/
	//$('.btnCutting').click(function(){
	function cutting_add(key, design_option_num){
		if(!loginCheckd()){ return false; }
		var idx = key; //키
		var memlevel=$("input[name='memlevel']").val();

		if ($("input[name='typeBuyeach[]']").eq(design_option_num).is(":checked") == false){
			jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
			return false;
		} 

		num=$("input[name='num']").val();
		volume=$("input[name='volume[]']").eq(design_option_num).val();
		cartsend=$("input[name='opkey["+idx+"]']").val();//옵션key
		option_width=$("input[name='option_width["+idx+"]']").val();//폭
		option_length=$("input[name='option_length["+idx+"]']").val();//길이
		option_thickness=$("input[name='option_thickness']").val();//두께
		$.ajax({
			type : "POST",
			url : "/shop/?mode=cutting&opid="+idx+"&volume="+volume+"&p_no="+num+"&design_option_num="+design_option_num+"&option_width="+option_width+"&cartsend="+cartsend+"&option_length="+option_length+"&option_thickness="+option_thickness,
			//data : formData,
			datatype : "html",
			beforeSend:function(){
				$(".wrap-loading").fadeIn();	
			},
			success: function(html) {
			$("#cutting").html(html);  
			$('#modal').show();
			$('#cutting-wrap').addClass('active');
				_log("[Ajax SUCCESS]");
				//alert(data);
			},
			complete:function(){
				$(".wrap-loading").fadeOut();
			},
			error: function(result, o, e) {
				_log("[Ajax ERROR]");
			}
		});
	}
	//});  

	/*재단간편옵션*/
	//$('.btnCutting').click(function(){
	function cutting_add_quick(key, design_option_num){
		if(!loginCheckd()){ return false; }
		var idx = key; //키
		var memlevel=$("input[name='memlevel']").val();
		if ($("input[name='typeBuyeach_quick[]']").eq(design_option_num).is(":checked") == false){
			jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
			return false;
		} 
		if(memlevel>=10){
			jAlert('관리자등급은 목취도를 이용하실 수 없습니다.<br/>관리자 모드를 활용해 주세요.', 'BUILDMANIA');
			return false;
		}
		num=$("input[name='num']").val();
		volume=$("input[name='volume[]']").eq(design_option_num).val();
		cartsend=$("input[name='opkey["+idx+"]']").val();//옵션key
		option_width=$("input[name='option_width["+idx+"]']").val();//폭
		option_length=$("input[name='option_length["+idx+"]']").val();//길이
		option_thickness=$("input[name='option_thickness']").val();//두께
		$.ajax({
			type : "POST",
			url : "/shop/?mode=cutting&opid="+idx+"&volume="+volume+"&p_no="+num+"&design_option_num="+design_option_num+"&option_width="+option_width+"&cartsend="+cartsend+"&option_length="+option_length+"&option_thickness="+option_thickness,
			//data : formData,
			datatype : "html",
			beforeSend:function(){
				$(".wrap-loading").fadeIn();	
			},
			success: function(html) {
			$("#cutting").html(html);  
			$('#modal').show();
			$('#cutting-wrap').addClass('active');
				_log("[Ajax SUCCESS]");
				//alert(data);
			},
			complete:function(){
				$(".wrap-loading").fadeOut();
			},
			error: function(result, o, e) {
				_log("[Ajax ERROR]");
			}
		});
	}
	//});  

	/*text필드 수량변경시 2021-06-02*/
	function getSelectValue_buy_volume(cnj_str){
		var idx=$(cnj_str).attr("count_volume");
		var price_add=$("input[name='option_price_send["+idx+"]']").val(); //가격
		if ($("input:checkbox[name='typeBuyeach[]']").eq(idx).is(":checked") == true){
		}else{
			jAlert('옵션을 체크후 이용하실 수 있습니다.', 'BUILDMANIA');
			$("input[name='volume[]']").eq(idx).val('0');
			return false;
		}
		if(Number(cnj_str.value)>0){
		}else{
			jAlert('최소 1개이상 입력하실 수 있습니다.', 'BUILDMANIA');
			$("input[name='volume[]']").eq(idx).val('1');
			cnj_str.value="1";
		}

		var topprice=Number(removeComma(price_add))*Number(cnj_str.value);
		$("input[name='option_price[]']").eq(idx).val(krw(topprice));//가격


				var sell_volume_buy=$("input[name='volume[]']").eq(idx).val();
				var option_add_use=$('input[name=option_add_use]').eq(idx).val();//가격추가옵션있는지체크
				if (option_add_use == 'Y'){//가격추가옵션있는지체크
					option_amt=$("input[name='option_amt[]']").eq(idx).val();//옵션별 구매가능수량

						var option_add1=$("select[name='option_add1["+idx+"]']").val();
						var option_add2=$("select[name='option_add2["+idx+"]']").val();
						if(option_add1){
							var valarr1 = option_add1.split("|");//구분자로 구분하여 가격만
							var valvar1 = valarr1[2];//추가옵션금액
						}
						if(option_add2){
							var valarr2 = option_add2.split("|");//구분자로 구분하여 가격만
							var valvar2 = valarr2[2];//추가옵션금액
						}

						if(Number(removeComma(valvar2))>Number(0) && Number(removeComma(valvar1))>Number(0)){ 
								topprice=Number(topprice)+((Number(removeComma(valvar2))+Number(removeComma(valvar1)))*sell_volume_buy);
						}else if(Number(removeComma(valvar2))>Number(0)){

								topprice=Number(topprice)+(Number(removeComma(valvar2))*sell_volume_buy);

						}else if(Number(removeComma(valvar1))>Number(0)){

								topprice=Number(topprice)+(Number(removeComma(valvar1))*sell_volume_buy);

						}


					if(Number(sell_volume_buy)>Number(option_amt)){
						var topprice=Number(removeComma(price_add))*Number(option_amt);
						$("input[name='option_price[]']").eq(idx).val(krw(topprice));//가격
						$("input[name='volume[]']").eq(idx).val(option_amt); 
					}else{
						$("input[name='option_price[]']").eq(idx).val(krw(topprice));//가격
					}
				}



			var grpls = $("input[name='option_price[]']").length;

			var grparrs = new Array(grpls);
			//var idx = $('input:button[name=bt_up]').index(this); 

			quote_data = 0.0;
			for(var i=0; i<grpls; i++){
				grparrs[i] = $("input[name='option_price[]']").eq(i).val();
				//var ckvalue_cnts = $("input[name=typeBuyeach[]]:checked").eq(i).length;
				//alert(ckvalue_cnt);

				if ($("input:checkbox[name='typeBuyeach[]']").eq(i).is(":checked") == true){
					quote_data += Number(removeComma(grparrs[i]));
				}else{

				}
			}
		if(Number(sell_volume_buy)>Number(option_amt)){
			$("input[name='volume_send["+ idx +"]']").val(Number(option_amt));//수량값전달
			jAlert('구매 가능한 재고수량을 초과하였습니다.', 'BUILDMANIA');
			$('#order_sum_c_buy_op').text(krw(quote_data));//총합계금액
		}else{
			$("input[name='volume_send["+ idx +"]']").val(Number(cnj_str.value));//수량값전달
			$('#order_sum_c_buy_op').text(krw(quote_data));//총합계금액
		}
		$('#order_sum_c_buy_op_vat').text(krw(quote_data+sal_sum(quote_data)));//총합계금액(VAT포함)

	}


function relation_submit(f)
{

    if (!is_checked("cartsend[]")) {
    }

    return true;
}
//----------------------------
// common.js
//----------------------------
//function _log(data){
//	_log(data);
//}