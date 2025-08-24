<template>
	<h3>
		<b>{{ influencer.name }}</b>
		<small>팔로워<strong>{{ number(totalFollowers) }}</strong></small>
	</h3>
</template>
<script setup lang="ts">
	import { computed } from 'vue';
	import monsDate from '$/utils/date';
	import { useFormatter } from '$/composables/useFormatter';
	const props = defineProps<{
		influencer: InfluencerDetail
	}>();

	const { number } = useFormatter();

	const customFollowerCounts = [
		// 뚠미
		{
			id: 33,
			add_count: 2152, // 1102 + 950 + 100
		},
		// 뽕커벨
		{
			id: 118,
			add_count: 2011, // 1012 + 999
		},
		// 연정
		{
			id: 108,
			add_count: 1400, // 1100 + 300
		},
		// 아홉시오십분
		{
			id: 109,
			add_count: 1201,
		},
		// 김베리
		{
			id: 51,
			add_count: 1245,
		},
		// 방효선
		{
			id: 29,
			add_count: 1302,
		},
		// 스미홈트
		{
			id: 30,
			add_count: 1945, // 1445 + 500
		},
		// 하루
		{
			id: 138,
			add_count: 400,
		},
	];

	const totalFollowers = computed(() => {
		return customFollowerCounts.filter((followerCount) => {
			return followerCount.id == props.influencer.id;
		}).reduce((accumulator, current) => accumulator + current.add_count, props.influencer.follower_count);
	});
</script>