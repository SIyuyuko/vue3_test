<template>
	<div class="info">
		<h1>基本信息</h1>
		<h2>姓名：{{ name }}</h2>
		<h2>年龄：{{ age }}</h2>
		<h2 v-if="sex">性别：{{ sex }}</h2>
		<h2>出生年份：<input v-model.lazy="birthYear">出生月份：<input v-model.lazy="birthMonth"></h2>
		<h2 v-if="birthYear && birthMonth">{{ showBirth }}</h2>
		<h1>个人情报</h1>
		<h3>专业：{{ info.major }}</h3>
		<h3>爱好：
			<span v-for="i of info.hobby" :key="i.id">{{ i + " " }}</span>
		</h3>
		<hr>
		<button @click="updateName">更新姓名信息</button>
		<button @click="addSex">添加性别信息</button>
		<button @click="updateInfo">更新情报信息</button>
	</div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'

let name = ref("SIyuyuko");
let age = ref(500);
let sex = ref();
let birthYear = ref();
let birthMonth = ref();
let info = reactive({
	major: "信息安全",
	hobby: ["听音乐", "唱歌"]
})
let showBirth = computed({
	get() {
		return birthYear.value + "年" + birthMonth.value + "月";
	}
	//#region  
	/*set(value) {
		const nameArr = value.split('-')
		person.firstName = nameArr[0]
		person.lastName = nameArr[1]
	}*/
	//#endregion
})
function updateName() {
	name.value = "Muziyami";
}
function addSex() {
	sex.value = "女";
}
function updateInfo() {
	info.major = "软件工程";
	info.hobby[0] = "画画";
	info.hobby[2] = ("睡觉");
}
</script>

<style scoped>
.info {
	text-align: left;
}
</style>