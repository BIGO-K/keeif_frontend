# KEEIF 인플루언서 쇼핑몰
KEEIF 인플루언서 쇼핑몰 구축을 위한 Vue3 기반의 모바일/어드민 프론트엔드 프로젝트입니다.  
  
## 디렉토리 구성
+ frontend: 모바일 (모바일 웹뷰 대응)  
+ markup: 모바일 API 연결 전 마크업 원본  
+ admin: 관리자
+ 내부 구조
	- public: font, image 파일 등 public에서 접근 가능한 파일 - robots.txt , example.com/favicon.ico.. 등
	- src
	- src/assets: css 파일위치 
	- src/components: 컴포넌트 파일 
	- src/pages: 페이지 구성 파일 
	- stores: pinia 저장소 관련 파일
	- utils: 유틸 함수 위치 
	- composables: 프로젝트 컴포저블 함수 위치 
	- router: 라우터 관련 파일 위치(라우트 페이지 단위별 (마이페이지, 고객센터..) 별로 별도 파일로 구현)
  
## 작업 기간 및 역할
+ 작업 기간: 2024.01 ~ 2024.03  
+ 역할  
	- 솔루션 Vue 구조에서 최적화를 위해 전체적으로 구조 변경 및 제작  
	- API 연동 및 상태관리, 라우트, 컴포넌트 구조 설계 및 제작  
	- 공통 컴포넌트 및 스타일 통일 작업  
	- 개발 협업을 위한 Vue 전환 가이드 및 교육  

## 고려 사항  
+ API 명세는 Swagger로 관리  
+ 솔루션 개발 최적화를 위한 구조 재설계  
+ 코딩 스타일 관리를 위해 prettier에서 ESLint Stylistic 를 적용하여 규칙 강화  
+ 변경된 구조로 솔루션 최신화 작업 고려    
  
## 작업 가이드
### 표준 코딩스타일 가이드
+ typescript: https://google.github.io/styleguide/tsguide.html
+ vue 3: https://v3.ko.vuejs.org/style-guide/

### 프로젝트 규칙 
+ package 관리자는 pnpm 사용  
+ 폴더,파일 생성시에는 lowerCamelCase 적용 (예, myPage)  
+ 라우트에 필요한 가드는 route/guard 하위에 구현한다. (예, 본인인증이 필수 / 회원인 경우에만 접근가능)  
  사용 목적에 따라 router.beforeEach / beforeEnter에 호출하여 준다.  
+ @types 작성시 .d.ts파일로 구성한다.  
+ 컴포넌트명은 무조건 MultiWord로 작성한다.(Index, List, Detail 단일단어로 사용 금지..)  

### API 통신 관련 처리 방식
+ API 통신 중, 회원정보와 같이 스토어에 직접적인 처리가 필요한 경우, API 폴더 내에서 처리가 아닌 store 내에 함수를 구현 처리한다.
+ 대부분의 경우 PC,M에서 동시 사용하는 API 이기 때문에, 정말 예외의 케이스를 제외하고는 Composable 함수로 구현한다.

### any 타입 사용 지양
+ any는 typescript의 type체크를 해당 부분에서 무시해달라는 뜻으로 @ts-ignore 와 비슷한 역할을 합니다.
+ typescript 공식문서에서는 any의 사용을 지양하는 것을 권장하며, unknown으로 대체하는 것을 제시합니다만, 되도록이면 common/@types에 정의해서 쓰도록 해주세요.

### 네이밍 가이드
+ Route명은 UpperCammelCase로 작성합니다.
+ 파일명과 폴더명은 lowerCammel로 작성합니다. (단, vue 파일은 UpperCamelCase로 작성합니다.)
	- vue 공식문서의 스타일가이드에서는 컴포넌트 파일명을 UpperPascalCase 혹은 kebab-case로 작성할 것을 권장합니다.
+ 이외의 변수명은 typescript 표준 스타일가이드를 따릅니다 (이미지 참고)
+ ![image](https://user-images.githubusercontent.com/59054012/162377446-8abc01ac-0cf6-4dbb-96eb-f8cbb1751e11.png)

#### API 이름
+ API명은 CONSTANT_CASE로 작성합니다.
+ API명은 관련 그룹별로 묶어 구분하며, 어떤 그룹에 속해있는지 접두사를 통해 표현합니다.  
	- MYPAGE 관련 그룹 > MYPAGE_UPDATE_USER_INFO, 인증관련 그룹 > AUTH_LOGIN
+ POST METHOD의 경우 API명을 동사로 짓지만, GET METHOD의 경우 조회의 의미를 이미 갖고있으며, "FETCH" 혹은 "GET"이 반복되는 것을 방지하기 위해 조회 대상(명사)로 명명합니다.
+ 조회 대상은 단수, 복수를 구분합니다.  
	- MYPAGE_REVIEW: 리뷰 단일 조회, MYPAGE_REVIEWS: 리뷰 리스트 조회

#### 쇼핑몰내 사용 단어
+ 아이디 리스트 : *_ids
+ 회원 아이디: login_id (int 고유 식별값과 구분)
+ 상품관련
	- 1차할인가: base_discounted_price
	- 1차할인가 할인율: sale_rate
	- 품절여부: is_soldout
	- 상품이미지: thumbnail_url
	- 주문상품 옵션명: option_name
+ 브랜드로고이미지: logo_image_url
+ 이외 이미지: image_url
+ 날짜: *_at
+ 검색 시작/종료일: start_date, end_date
+ 휴대폰번호: phone 
+ 주문서: order
+ (마이페이지)주문 : my_order

### 타입 지정할 때에는 primitive 타입 사용
+ 대문자로 시작하는 자료형은 해당 자료형을 감싸는 래퍼 오브젝트의 생성자 class, 즉 object이므로 소문자로 시작하는 primitive 자료형을 사용해주세요.

## 커스텀 디렉티브 사용법
### v-lazyload
+ v-lazyload="imageUrl"
	```html
	<i ref="goodsImg" class="mm_bg-cover image_product" v-lazyload="goods.thumbnailUrl"></i>
	```
+ v-lazyload="{ src: imageUrl }"
	```html
	<i class="image_banner">
		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" v-lazyload="{ src: 'https://publish.mmonstar.co.kr/thenature/shop_2021/mobile/image/_sample/prod_category_banner.png' }" alt="이미지 대체텍스트">
	</i>
	```

## ```<script setup>``` 사용
### beforeRouteEnter
+ ```<script setup>```에서는 beforeRouteEnter를 사용할 수 없으므로 사용해야하는 경우에는 일반 ```<script>```와 함께 사용해주세요
+ 예시
	```vue
	<script lang="ts">
	import { defineComponent } from 'vue';
	export default defineComponent({
		beforeRouteEnter (to, from, next) {
			console.log('befor enter');
			return next();
		}
	})
	</script>

	<script lang="ts" setup>
	import { onBeforeRouteLeave } from 'vue-router';

	onBeforeRouteLeave((to, from) => {
			console.log('befor leave');
	});
	</script>
	```
+ https://vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script
+ https://github.com/vuejs/rfcs/discussions/302#discussioncomment-2794537


## 참고 사이트
+ https://jess2.xyz/vue/vue-tip/
+ https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
+ https://vitejs.dev/guide/#scaffolding-your-first-vite-project
+ https://ake.kr/2020/10/01/vue3-life-starting-with-the-vite/#vue-3
+ https://vuejs.org/guide/reusability/composables.html
+ https://vuejs.org/api/sfc-script-setup.html
