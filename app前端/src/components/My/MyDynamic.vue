<template>
	<div class="content">
    <van-uploader v-model="fileList" multiple :max-count="2" />
		<image src="../../assets/xi.jpg" mode="" style="width: 80px;height: 80px;"></image>
		<div class="title">
			<input type="text" value="" placeholder="分享你的好心情~ 分享你的有趣故事哦" />
		</div>
	
		<!-- <div class="con">
			<textarea value="" placeholder="分享你的有趣故事哦"  rows="3" cols="40" />
		</div> -->
		<div class="btn" style="margin-top:20px">
			<div class="one bg">
				<span style="color:#000">#话题</span>
			</div>
			<div class="two bg">
				<span style="color:#000">@用户</span>

				<!-- <text>@用户</text> -->
			</div>
			
		</div>
		<van-button type="primary" plain block>发布动态</van-button>
		<!-- <button type="default">发布动态</button> -->
	</div>
</template>
<script>
	import { Uploader } from 'vant';
	export default {
		components: {
		
    },
    //  setup() {
    //     const fileList = ref([]);

    // return {
    //   fileList,
    // };
  // },
		data() {
			return {
        fileList:[]
				
			};
		},
		/**
		 * 上拉加载
		 * 这很重要
		 */
		onReachBottom() {
			// this.$refs.waterfalls_flow_nav.getList();
		},
		methods: {
			
		},
	};
</script>

<style lang="less" scoped>
	.content {
		padding: 10px;
		background-color: #fff;
		height: 900px;
		image{
			border-radius: 10px;
			// padding: 10px;
			margin-left: 10px;
		}
		.cnt {
			padding: 10px;

			.title {
				font-size: 16px;
			}

			.text {
				font-size: 14px;
				margin-top: 5px;
			}
		}
	
		input{
			width: 100%;
			height: 50rpx;
			border: none;
		
		}
		.title{
				padding: 20px 10px 10px 10px;
				// margin-top: 20px;
				font-size: 16px;
				border-bottom: 1px solid #d9d9d9;
		}
		.con{
				padding: 10px;
		}
		.btn{
			display: flex;
			 flex-direction: row ;
			width: 100%;
			height: 40px;
			.bg{
				width: 50px;
				height: 24px;
				border-radius: 5px;
				background-color: #dedede;
				padding: 5px;
				margin-left: 10px;
				justify-content: center;
				align-content: center;
				// text-align: center;
			}
		}
		button{
			// margin-top: 200px;
		}
	}
</style>
