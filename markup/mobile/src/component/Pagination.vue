<template>
	<!-- 페이지네이션 -->
	<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
	<div class="mm_pagination">
		<div class="mm_inline">
			<ol>
				<li>
					<a
						:class="{ 'S=page-on': true }"
						href="#"
						title="선택됨"
					>
						<b>1</b>
					</a>
				</li>
				<li><a href="#"><b>2</b></a></li>
				<li><a href="#"><b>3</b></a></li>
			</ol>
			<button
				type="button"
				class="btn_control-first"
				disabled
			>
				<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
			</button>
			<button
				type="button"
				class="btn_control-prev"
				disabled
			>
				<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
			</button>
			<button
				type="button"
				class="btn_control-next"
			>
				<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
			</button>
			<button
				type="button"
				class="btn_control-last"
			>
				<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>