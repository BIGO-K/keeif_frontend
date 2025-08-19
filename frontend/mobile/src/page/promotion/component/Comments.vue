<template>
	<div
		ref="$reply"
		class="mm_event-reply"
	>
		<!-- 댓글 작성 -->
		<!-- (D) 작성자가 로그인 상태일 경우 -->
		<div class="mm_event-reply-write">
			<div class="mm_inner">
				<template v-if="!isMember">
					<p class="text_login">
						로그인을 하셔야 댓글을 등록하실 수 있습니다
					</p>
					<div class="mm_btn_box">
						<div class="mm_inline">
							<mm-link
								class="mm_btn T=sm T=primary"
								:to="{ name: 'Login', query: { redirect_to_after: router.currentRoute.value.fullPath} }"
							>
								<b>댓글 작성하기</b>
							</mm-link>
						</div>
					</div>
				</template>
				<template v-else>
					<form-textarea
						v-model="createForm.contents"
						maxlength="200"
						:resize="{ 'min': 5, 'max': 9 }"
						placeholder="댓글을 작성하세요"
					></form-textarea>
					<form-check
						v-model="createForm.is_private"
						label="비공개"
					></form-check>
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
							@click="addComment"
						>
							<b>작성완료</b>
						</button>
					</div>
				</template>
			</div>
		</div>

		<!-- 댓글 목록 -->
		<div class="mm_event-reply-list">
			<h5><b><strong>{{ paginator.total }}</strong>개의 댓글이 있습니다</b></h5>

			<template v-if="paginator.total < 1">
				<p class="mm_text-none">
					<i class="ico_text-none"></i>등록된 댓글이 없습니다
				</p>
			</template>
			<template v-else>
				<ul>
					<!--
						(D) 내가 쓴 댓글일 경우 mm_event-reply-item 요소에 T=item-my 클래스와 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
						등급: level1 ~ level5
					-->
					<li
						v-for="comment in loadedComments"
						:key="comment.id"
						:class="[
							'mm_event-reply-item',
							comment.is_editable ? `T=item-my T=level${comment.writer_grade_level}`: ''
						]"
					>
						<p class="text_user">
							<lazyload
								class="mm_bg-contain image_grade"
								:src="comment.writer_grade_image_url"
							></lazyload>
							{{ comment.writer_masking_login_id }}
							<b
								v-if="comment.is_editable"
								class="text_tag"
							>내 댓글</b>
						</p>
						<p
							v-if="comment.is_private && !comment.is_editable"
							class="text_reply"
						>
							비공개 댓글입니다<i class="ico_secret"></i>
						</p>
						<template v-if="editingComment?.id == comment.id">
							<form-textarea
								v-model="updateForm.contents"
								maxlength="200"
								:resize="{ 'min': 4, 'max': 6 }"
								placeholder="댓글을 작성하세요"
							></form-textarea>
							<form-check
								v-model="updateForm.is_private"
								label="비공개"
							></form-check>
						</template>
						<toggle
							v-else
							tag="p"
							class="text_reply"
							title="열기"
							active-title="닫기"
							parent-selector=".mm_event-reply-item"
						>
							<b
								v-line-clamp
								v-html="newLineToBr(comment.contents)"
							></b>
						</toggle>
						<p class="text_date">
							{{ date(comment.created_at, 'YYYY.MM.DD HH:mm:ss') }}
						</p>
						<div
							v-if="editingComment?.id == comment.id"
							class="mm_btn_box"
						>
							<button
								type="button"
								class="btn_modify"
								@click="updateComment"
							>
								<b>수정</b>
							</button>
						</div>
						<div
							v-else-if="comment.is_editable"
							class="mm_btn_box"
						>
							<button
								type="button"
								class="btn_remove"
								@click="destroyComment(comment.id)"
							>
								<b>삭제</b>
							</button>
							<button
								type="button"
								class="btn_modify"
								@click="editingComment = comment"
							>
								<b>수정</b>
							</button>
						</div>
					</li>
				</ul>
			</template>
		</div>

		<div
			v-if="paginator.total > paginator.per_page"
			class="mm_foot"
		>
			<div class="mm_btn_box">
				<button
					v-if="loadedComments.length < paginator.total"
					type="button"
					class="mm_btn T=line T=dark"
					@click="emit('fetchMore')"
				>
					<b>더보기</b><i class="ico_more"></i>
				</button>
				<p
					v-else
					class="mm_btn T=sm T=line"
				>
					마지막 댓글입니다
				</p>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { ref, watch, computed } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import Toggle from '@/component/Toggle.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const props = defineProps<{
		paginator: Paginator<PlanningComment>,
		loadedComments: PlanningComment[]
	}>();

	const emit = defineEmits<{
		(e: 'fetchMore'): Promise<void>
		(e: 'add', newComment: PlanningCommentForm): Promise<void>
		(e: 'update', id: number, newComment: PlanningCommentForm): Promise<void>
		(e: 'destroy', id: number): Promise<void>
	}>();

	const loadedComments = computed(() => props.loadedComments);

	const { newLineToBr, date } = useFormatter();
	const { isMember, router, loading, bom } = useGlobalPageContext();

	const editingComment = ref<PlanningComment|null>();

	const { form: createForm, validate: validateCreateForm } = useForm<PlanningCommentForm>(
		{
			contents: '',
			is_private: false,
		},
		{
			rule: {
				'contents(내용)': ['required', 'blank'],
			},
		},
	);

	const { form: updateForm, validate: validateUpdateForm } = useForm<PlanningCommentForm>(
		{
			contents: '',
			is_private: false,
		},
		{
			rule: {
				'contents(내용)': ['required', 'blank'],
			},
			testers: [
				{
					name: 'blank',
					defaultMessageOnFailure: ':param(을/를) 입력해주세요.',
					handler(value) {
						return !!(typeof value == 'string' && value.trim().length);
					},
				},
			],
		},
	);

	const vLineClamp = {
		mounted: (el: HTMLElement) => {
			if (el.scrollHeight > el.clientHeight) {
				const dropdownITag = document.createElement('i');
				dropdownITag.classList.add('ico_dropdown');
				el.parentElement?.appendChild(dropdownITag);
			}
		},
	};

	async function addComment() {
		bom.confirm('댓글을 작성하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await validateCreateForm();
				await emit('add', { ...createForm.value });
				createForm.value.contents = '';
				createForm.value.is_private = false;
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	async function updateComment() {
		bom.confirm('댓글을 수정하시겠습니까?', async (flag) => {

			if (!editingComment.value || !flag) {
				return;
			}

			loading.show();
			try {
				await validateUpdateForm();
				await emit('update', editingComment.value.id, { ...updateForm.value });
				loadedComments.value.map(comment => {
					if (comment.id == editingComment.value?.id) {
						comment.contents = updateForm.value.contents;
						comment.is_private = updateForm.value.is_private;
					}

					return comment;
				});
				editingComment.value = null;
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	async function destroyComment(id: number) {
		bom.confirm('댓글을 삭제하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await emit('destroy', id);
			}
			catch (e) {
				console.log(e);
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	watch(editingComment, (to) => {
		updateForm.value.contents = to?.contents || '';
		updateForm.value.is_private = to?.is_private || false;
	});
</script>