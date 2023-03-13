<template>
	<div class="info">
		<h1>基本信息</h1>
		<h2>姓名：{{ name }}</h2>
		<h2>年龄：{{ age }}</h2>
		<h2 v-if="sex">性别：{{ sex }}</h2>
		<h2>出生年份：<input v-model.lazy="birthYear">出生月份：<input v-model.lazy="birthMonth"></h2>
		<h2 v-if="!isNaN(birthYear) && !isNaN(birthMonth)">{{ showBirth }}</h2>
		<hr>
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
import { watch, watchEffect } from 'vue';
import { reactive, ref, computed } from 'vue'
// import { toRefs，toRef } from 'vue';
let name = ref("SIyuyuko");
let age = ref(500);
let sex = ref();
let birthYear = ref();
let birthMonth = ref();
let info = reactive({
	major: "信息安全",
	hobby: ["听音乐", "唱歌"]
})
/*
toRef：创建一个 ref 对象，其value值指向另一个对象中的某个属性。
let major = toRef(info, 'major');
console.log(major);
let x = toRefs(info);
console.log(x);
*/

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
watch(name, (newVal, oldVal) => {
	console.log("name变化了", newVal, oldVal);
})
watch([birthYear, birthMonth], (newVal, oldVal) => {
	console.log("birthYear或birthMonth变化了", newVal, oldVal);
})
watch(info, (newVal, oldVal) => {
	console.log("info变化了", newVal, oldVal);
}
	//#region
	/*
	, { deep: false } 
	对于reactive定义的响应式数据，强制开启了深度监视
	此处的deep配置失效
	并且无法正确获得oldValue
	解决方法：把想要获得oldValue的数据放到ref定义去
	*/
	//#endregion
)
watch(() => info.major, (newVal, oldVal) => {
	console.log("info的major变化了", newVal, oldVal);
}, {
	// immediate: true,
	deep: true
})
watch(() => info.hobby, (newVal, oldVal) => {
	console.log("info的hobby变化了", newVal, oldVal);
}, {
	immediate: true,
	deep: true
	//此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效
})
//#region
/*
//情况：监视reactive定义的响应式数据中的某些属性
watch([()=>info.major,()=>info.hobby],(newValue,oldValue)=>{
	console.log('info的major或hobby变化了',newValue,oldValue)
},{immediate:true,deep:true}) */
//#endregion
watchEffect(() => {
	let x1 = name.value;
	let x2 = info.major;
	console.log("watchEffect配置的回调执行了", x1, x2);
}, {
	flush: "post" //在侦听器回调中能访问被 Vue 更新之后的 DOM；默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新之前被调用。
	//#region
	/*
	侦听器必须用同步语句创建；
	如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。
	watchEffect(() => {})
	 */
	//#endregion
})

</script>

<style scoped>
.info {
	text-align: left;
}
</style>