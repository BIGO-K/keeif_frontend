<template>
	<layout
		title="팔로잉 목록"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div
			class="m_mylike-following"
			:class="{ 'T=skeleton': isLoading }"
		>
			<div class="mm_inner">
				<p class="text_total">
					팔로잉<strong>{{ total }}</strong>
				</p>
				<p
					v-if="influencerList.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>팔로잉 내역이 없습니다
				</p>
				<template v-else>
					<ul
						v-if="isLoading"
						:class="{ 'T=skeleton': isLoading }"
					>
						<li
							v-for="item in 5"
							:key="item"
						>
							<div class="btn_influencer">
								<i></i>
								<strong></strong>
								<p></p>
							</div>
							<div class="mm_btn_box">
								<div class="mm_btn"></div>
								<div class="btn_alarm"></div>
							</div>
						</li>
					</ul>

					<ul v-else>
						<li
							v-for="influencer in influencerList"
							:key="influencer.id"
						>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'InfluencerShop', params: { id: influencer.id } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										:src="influencer.logo_image_url"
									></lazyload>
									<figcaption>
										<strong>{{ influencer.name }}</strong>
										<p>{{ influencer.description }}</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									v-model:is-active="influencer.is_followed"
									is-lazy
									class="mm_btn T=sm T=lighter"
									title="팔로잉"
									active-title="팔로잉 해제"
									active-class=""
									inactive-class="S=off"
									@click="toggleFollow(influencer)"
								>
									<b>{{ influencer.is_followed ? '팔로잉' : '팔로우' }}</b>
								</toggle>
								<toggle
									v-model:is-active="influencer.is_receive_notify"
									is-lazy
									class="btn_alarm"
									title="알림 설정"
									active-title="알림 해제"
									active-class="S=off"
									@click="toggleNotification(influencer)"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
					</ul>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button
									v-if="influencerList.length < total"
									type="button"
									class="mm_btn T=sm T=line btn_more"
									@click="fetchMore"
								>
									<b>팔로잉 리스트 더보기</b><i class="ico_more"></i>
								</button>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useInfluencer } from '$/composables/useInfluencer';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';

	const { bom, loading } = useGlobalPageContext();
	const { getMyFollows, getMyFollowCount, follow, unFollow, receiveNotify, unReceiveNotify } = useInfluencer();
	const isPending = ref<boolean>(true);
	const [pFollowCount, pPaginator] = await Promise.all([
		getMyFollowCount(),
		getMyFollows(1),
	]);
	const isLoading = false;
	isPending.value = false;

	const total = pFollowCount;
	const paginator = pPaginator;
	const influencerList = ref(paginator.data);


	/** 팔로우하는 인플루언서 조회 */
	async function fetchMore() {
		influencerList.value = influencerList.value.concat((await getMyFollows(++paginator.current_page)).data);
	}
	/** 팔로우 요청/해제요청 */
	async function toggleFollow(influencer: MyInfluencer) {
		if (influencer.is_followed) {
			bom.confirm('팔로잉을 해제하시겠습니까?\n(더 이상 새 공구 알림이 오지 않아요.)', async (flag) => {
				if (!flag) {
					return;
				}

				loading.show();
				try {
					await unFollow(influencer.id);
					influencer.is_followed = false;
				}
				catch (e) {
					useErrorAlert(e);
				}
				finally {
					loading.hide();
				}
			});
		}
		else {
			loading.show();
			try {
				await follow(influencer.id);
				influencer.is_followed = true;
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		}
	}

	/** 알림 신청/해제 */
	async function toggleNotification(influencer: MyInfluencer) {
		const isToReceive = !influencer.is_receive_notify;
		bom.confirm(`해당 인플루언서의 공구 시작 알림을 ${isToReceive ? '수신' : '해제'}합니다.`, async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				if (isToReceive) {
					receiveNotify(influencer.id);
					influencer.is_receive_notify = true;
				}
				else {
					unReceiveNotify(influencer.id);
					influencer.is_receive_notify = false;
				}
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}
</script>