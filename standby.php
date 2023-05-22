<!DOCTYPE html>
<html>
    <head>
        <title>Stand By</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="imagetoolbar" content="no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&amp;display=swap" rel="stylesheet">

		<link href="/dashboard/stylesheets/all.css" rel="stylesheet" type="text/css">

        <script src="/buildhome_copy/js/jquery-3.5.1.min.js"></script>
        <script src="/buildhome_copy/js/owl.carousel.js"></script>
        <script src="/buildhome_copy/js/slick.js"></script>
        <script src="/buildhome_copy/js/common.js"></script> 
        <script src="/buildhome_copy/js/jquery.alerts.js"></script>
        <script src="/buildhome_copy/js/detail.js"></script>
        <script src="/buildhome_copy/js/alertify.js"></script>
        <script src="/buildhome_copy/js/konva.min.js"></script>
        <script src="/buildhome_copy/js/wood.application.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
        <script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>
    <body>
        <h1>
            가로 :
            <?php echo $_POST['hor']; ?>
            세로 :
            <?php echo $_POST['ver']; ?>
        </h1>
        <br>
		<h1>
			<?php echo $_POST['type']?>
		</h1>
		<br>
        <button
            id="popup-btn"
            href="javascript:void(0);"
            onclick="popup_toggle('cutting')">재단하기</button>

		<div id="cutting" style="display:none;  position:fixed; z-index:99; overflow:scroll;">
			<form name="cutting_send_view" id="cutting_view" method="post" enctype="multipart/form-data">
				<input type="hidden" name="p_no" value="2101061101"><!--상품번호-->
				<input type="hidden" name="cartsend" value="0"><!--옵션고유키-->
				<input type="hidden" id="add_width" value="2440"><!--현재설정폭-->
				<input type="hidden" id="add_height" value="1220"><!--현재설정길이-->
				<input type="hidden" name="opkey" value="0"><!--넘어온옵션실제키 -->
				<input type="hidden" name="option_width" value="2440"><!--넘어온폭 -->
				<input type="hidden" name="option_length" value="1220"><!--넘어온길이 -->
				<input type="hidden" name="thickness_config" value="5"><!--설정된 두께-->
				<input type="hidden" name="price_cu" value="2000"><!--재단비용 1EA기준-->
				<input type="hidden" name="refid" value=""><!--넘어온주문번호 -->
				<input type="hidden" name="volume" value="2"><!--넘어온수량 -->
				<input type="hidden" name="ordercntd" value="0"><!--현재목취도 현재 저장되엇는지 카운트 -->
				<input type="hidden" name="opid" value="0"><!--넘어온키 -->
				<input type="hidden" name="buy_id" value=""><!--넘어온아이디 -->
				<input type="hidden" name="length_max" value="2440"><!--재단제한길이(MAX길이)-->
				<input type="hidden" name="max_amt" value="0"><!--재단개수 MAX-->
				<input type="hidden" name="width_max" value="1220"><!--재단가능폭(전체기준)-->
				<input type="hidden" name="cutting_use" value="true"><!--현재 선택한 옵션의 작업중인 목취도가 있는지-->
				<input type="hidden" name="area_max_master" value="2976800"><!--마스터면적(전체기준)-->
				<input type="hidden" name="noti_code" value="1683798019413"><!--목취제작코드 -->
		
				<div id="mouse_no" oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
					<div>
						<div class="wrap-loading-cutting" style="display:none;">
							<div>
								<img src="https://www.buildm.co.kr:443/shop/layouts/home/shop/img/viewLoading.gif">
							</div>
						</div>
						
						<div id="cutting-ver2" style="display: block;">
							<div class="top">
								<div class="left">
									<p class="title-main">목취도 그리기</p>
									<p class="title">제품명 : [화이트오크 합판(무늬목 단면)5T*1220*2440 1220*2440]</p>
								</div>
								<div class="right">
									<!--ul class="wood-size">
										<li>
											<p>폭(세로)</p>
											<p class="size">1220</p>
										</li>
										<li>
											<p>길이(가로)</p>
											<p class="size">2440</p>
										</li>
									</ul-->
									<ul class="top-btn">
										<li>
											<button type="button">
                                                <a><img src="./images/print.png" alt="" onclick="cutting_print(2101061101, 0)"></a>
                                                <a>인쇄하기</a>
                                                </button>
										</li>
										<li>
											<button type="button">
                                                <a><img src="./images/how.png" alt="" onclick=""></a>
                                                <a>이용방법</a>
                                                </button>
										</li>
										<li>
											<button type="button">
                                                <a href="javascript:;"><img src="./images/exit.png" alt="" onclick=""></a>
                                                </button>
										</li>
									</ul>
								</div>
							</div>
		
							<div class="middle">
								<!--div class="page-tab">
									<div class="controller">
										<span class="operation" id="move_canvas_add">화면조작</span>
										<span class="btn zoom-in" id="zoom_in_add"></span>
										<span class="btn zoom-out" id="zoom_out_add"></span>
									</div>
									<script>
										$(document).ready(function(){
											$('.operation').click(function(){
												$(this).toggleClass('on');
												$('.controller .btn').toggle();
											});
										});
									</script>
									<div class="page-slide-wrap">
										<div class="page-slide">
											<div id="work-list">
											<div class="item list_item active" work-id="ee7e25cc-3057-6dea-2a6a-915b91f65aed">  <a class="" href="javascript:;"> <p class="title1 list_item-name">  <span>목취도1</span></p>   <div><input name="volume_add[]" type="number" class="work-copy-number" min="1" max="50" maxlength="3" value="1" onkeypress="if(this.value.length > 2) return false;" onchange="if(this.value > 50) {this.value = 50} else if(!this.value || this.value < 1) {this.value = 1}"><span>장</span></div>  </a>      </div></div>
										</div>
										<div class="page-nav prev"></div>
										<div class="page-nav next"></div>
									</div>
								</div>
								<script>
									$(document).ready(function(){
										$('.page-nav.next').click(function(){
											$('#work-list').animate({marginLeft : -104 + 'px'}, function(){
												$('#work-list .item:first').appendTo('#work-list')
												$('#work-list').css({marginLeft : 0})
											});
										});
		
										$('.page-nav.prev').click(function(){
											$('#work-list').animate({marginLeft : 104 + 'px'}, function(){
												$('#work-list .item:last').prependTo('#work-list')
												$('#work-list').css({marginLeft : 0 + 'px'})
											});
										});
		
										$('#add_plus').click(function(){
											if($('#work-list .item').length > 3){
												$('.page-nav').show();
											}
										});
		
										$('#add_delete').click(function(){
											if($('#work-list .item').length < 5){
												$('.page-nav').hide();
											}
										});
		
										$('.page-tab .item').click(function(){
											var n = $('.page-tab .item').index(this);
											$('.page-tab .item').removeClass('active');
											$(this).addClass('active');
											return false;
										});
									});
								</script-->
		
								<div id="printableArea">
									<div class="page-contents">
										<div class="page">
											<!--div class="grid grid1">
												<p class="title1" id="work-name">목취도1</p>
											</div-->
											<div class="grid grid2">
												<div class="wood" id="blueprint"><div class="konvajs-content" role="presentation" style="position: relative; width: 1100px; height: 530px;"><canvas width="1100" height="530" style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 1100px; height: 530px;"></canvas><canvas width="1100" height="530" style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 1100px; height: 530px;"></canvas><canvas width="1100" height="530" style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 1100px; height: 530px;"></canvas></div></div>
											</div>
										</div>
		
									</div>
								</div>
							</div>
		
							<div class="bottom">
								<div class="grid grid1">
									<ul class="left">
										<li>
											<p>직접 입력</p>
										</li>
										<li>
											<p style="font-size: 16px;">상</p>
											<p class="size">257</p>
										</li>
										<li>
											<p style="font-size: 16px;">하</p>
											<p class="size">958</p>
										</li>
									</ul>
									<ul class="right">
										<li>
											<a href="javascript:;" class="btn btn1" id="">되돌리기</a>
										</li>
										<li>
											<a href="javascript:;" class="btn btn1" id="">취소</a>
										</li>
										<li>
											<a href="javascript:;" class="btn btn3" id="">절단하기</a>
										</li>
										<!-- <li>
											<a href="javascript:;" class="btn btn1" id="reset_canvas">초기화</a>
										</li>
										<li>
											<a href="javascript:void(0);" onclick="cutting_print(2101061101, 0)" class="btn btn2 print-preview">인쇄하기</a>
										</li>
										<li>
											<a href="javascript:;" class="btn btn3 order-check" id="cutting_totalcost-button">주문확인</a>
										</li>
										<li>
											<a href="javascript:;" class="btn btn4" id="save_all_file" onclick="selectbtn(0)"><img src="">전체저장</a>
										</li> -->
									</ul>
								</div>
								<div class="divider"></div>
								<div class="warn">
									<ul class="left">
										<li>
											<p>주의사항</p>
										</li>
									</ul>
									<ul class="right">
										<li>
											<a href="javascript:;" class="btn btn1" id="">
												- 재단 시, 톱날 두께 5mm 씩 차감 됩니다. 추가로 선단 5mm 차감 있습니다.<br>
												- 폭과 길이 방향을 꼭 확인해주세요.<br>
												- 추가적인 재단도면 그리기는 현재 도면을 완료한 이후 가능합니다.
											</a>
										</li>
									</ul>
								</div>
								<div></div>
								<!-- <p class="title1"><img src="https://www.buildm.co.kr:443/shop/layouts/home/shop/img/info.png"> 재단시, 톱날 두께 <span>5mm씩</span> 차감 됩니다. 추가로 선단 5mm차감 있습니다. / 폭과 길이 방향을 꼭 확인하세요!</p> -->
							</div>
							
							<!-- <a href="javascript:;" class="cutting-close"><img src="https://www.buildm.co.kr:443/shop/layouts/home/shop/img/close4.png"></a> -->
						</div>
		
		
						<div class="order-check-pop modal" id="cutting_totalcost-view" style="display: none;">
							<div class="head" id="image_id">
								<p class="title">주문확인</p>
								<img src="https://www.buildm.co.kr:443/shop/layouts/home/shop/img/close3.png" class="close">
							</div>
							<div class="inner">
								<p class="title1">총 재단 비용 계산표</p>
								<table id="cutting_totalcost-content-table">
									<tbody>
									<tr class="active">
										<th>번호</th>
										<th>이름</th>
										<th>크기</th>
										<th>컷팅수</th>
										<th>재단비</th>
										<th>장수</th>
										<th>금액</th>
									</tr>
									<tr>
										<td>1</td>
										<td>목취도1</td>
										<td>2440 x 1220</td>
										<td>0</td>
										<td>0원</td>
										<td>1</td>
										<td>0원</td>
									</tr>
									<tr class="total">
										<td>총합계(VAT별도)</td>
										<td colspan="4"></td>
										<td>0원</td>
										<input type="hidden" name="total_price_cutting" value="0">
									</tr>
								</tbody>
								</table>
							</div>
						</div>
					</div>
		
					<div id="all-save-waiting-modal">
						<div role="document">
					</div>
				</div>
		
				<div id="print-preview"> </div>
				<div class="cutting-guide-pop">
					<div class="head">
						<p class="title1">이용방법</p>
						<img src="https://www.buildm.co.kr:443/shop/layouts/home/shop/img/close3.png" class="close">
					</div>
					<div class="inner">
						<img src="https://www.buildm.co.kr:443/shop/layouts/home/shop/img/cutting_guide.png">
					</div>
				</div>
				<script>
					$(document).ready(function(){
						$('.order-check').click(function(){
							$('#modal').show();
							$('.order-check-pop').show();
						});
		
						$('.order-check-pop .close').click(function(){
							$('#modal').hide();
							$('.order-check-pop').hide();
						});
		
						$('.cutting-close').click(function(){
							$('#modal, #cutting-ver2').hide();
						});
		
						$('.cutting-guide-btn').click(function(){
							$('.cutting-guide-pop').show();
						});
		
						$('.cutting-guide-pop .close').click(function(){
							$('.cutting-guide-pop').hide();
						});
		
						// $('.print-prev-close').click(function(){
						// 	$('#print-preview').hide();
						// 	$('#cutting-ver2').css('filter','brightness(1)');
						// });
					});
				</script>
		
				<!--module>shop>wood_design모듈세트로이동--><!--
				┏━━━━━━━━━━━━━━━━━━━━━━━┓
				▶ BULDMANIA MALL
				┗━━━━━━━━━━━━━━━━━━━━━━━┛
				//-->
		
				</div>
			</form>
		</div>
    </body>

    <script>
        $(function () {
            // $('#drawingCutting #hebeW').text(optObj.gl_hebeW_max);
            // $('#drawingCutting #hebeH').text(optObj.gl_hebeH_max);
            // $('#drawingCutting #plank').attr('data-width', optObj.gl_hebeW_max);
            // $('#drawingCutting #plank').attr('data-width_min', optObj.gl_hebeW_min);
            // $('#drawingCutting #plank').attr('data-height', optObj.gl_hebeH_max);
            // $('#drawingCutting #plank').attr('data-height_min', optObj.gl_hebeH_min);

            $('.guide_popup_wrapper').on('click', function () {
                $(this).fadeOut();
            });
        })
        function popup_toggle(toggleID) {
            obj = document.getElementById(toggleID);
            if (obj.style.display == "none") 
                obj.style.display = "block";
            else 
                obj.style.display = "none";

                // plank_init();
            }
        function init_guide_popup() {
            $('.guide_popup_wrapper').show();
        }
    </script>

</html>