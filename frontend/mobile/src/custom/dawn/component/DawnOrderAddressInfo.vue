<template>
	<tr v-if="entranceDescription">
		<th scope="row">
			<b>새벽배송<br>정보</b>
		</th>
		<td>{{ entranceDescription }}</td>
	</tr>
</template>

<script setup lang="ts">
	defineProps<{
		entranceDescription: string
	}>();
</script>