<template>
	<layout-popup>
		<template #title>
			<h1><b>이미지 보기</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="m_popup-image-preview">
						<!-- (D) 이미지 등록 미리보기 -->
						<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt="배너 이미지"></i>

						<!-- (D) 에디터 등록 미리보기 -->
						<div class="mm_editor-content">
							<div class="section1 w1200">
								<img src="/public/images/_sample/product_3.jpg" alt="">
							</div>
							<div class="vod"></div>
							<div class="section2"></div>

							<!--
								<style lang="scss">
								#contents {padding: 0;}
								.mm_editor .w100 {width: 100%;}
								.mm_editor .w90 {width: 90%;}
								.mm_editor .w1200 {max-width: 1200px;}
								.mm_editor .w1280 {max-width: 1280px;}
								.mm_editor .w1400 {max-width: 1400px;}
								.mm_editor .bbold {font-weight: 700;}
								.mm_editor .mag10{margin-top:10px}
								.mag20{margin-top:20px}
								.mag30{margin-top:30px}
								.mag40{margin-top:40px}
								.mm_editor .mag50{margin-top:50px}

								.mm_editor .cf_intro { padding: 620px 0 485px; background-color:#000; background-position:center; background-size: cover;}
								.mm_editor .cf_intro .title { margin-bottom:30px;width: 487px;}
								.mm_editor .cf_intro .subtitle {width:1080px;}
								.mm_editor .cf_intro .titlebox { margin:0 auto;width:1200px; text-align:center;}
								.mm_editor .cf_intro h2 { padding: 40px 0 350px; font-size: 90px;font-family:Geograph-B; line-height: 1.27;}
								.mm_editor .cf_intro h5 { padding: 15px 0 25px;color: #f5f5f5; font-weight: 300; font-size: 30px; line-height: normal;}
								.mm_editor .cf_intro p { color:#fff;font-size: 20px; line-height: 1.55;}
								.mm_editor .cf_intro .rectangle {padding: 10px;width: 424px;border-radius:50px 0;background-color: #E43232;color:#fff;font-size:30px;text-align:center;}

								.mm_editor .vod {width:1280px; text-align:center;}
								.mm_editor .vod img { margin:80px 0;width:449px;}
								.mm_editor .vod .hline { margin:0 auto;width:1px; height:100px; background-color:#fff;}

								.mm_editor .section1 {background-color:#000;}
								.mm_editor .section2 {background-color:#000; text-align:center;}
								.mm_editor .section2 img {margin-bottom:120px;}

								.mm_editor .item {padding: 110px 0;}
								</style>
							-->
						</div>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>